import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { preregSchema } from "@/lib/schema/prereg";
import { isPreregOpen, isPreregStoreReady } from "@/lib/prereg";
import { STAGE_LEGACY_ANCHORS } from "@/lib/content/home";

// 앱 사전 예약은 학부모·학생의 휴대폰 번호를 받는다 — 동의 없이, 또는 만 14세 미만이 직접 신청하는 일이 없어야 한다(서버도 같은 스키마로 검사)
const base = { role: "parent", grade: "중3", phone: "010-1234-5678", consent: true, over14: false, honeypot: "" } as const;
const ROOT = path.resolve(__dirname, "..");

describe("app pre-registration schema", () => {
  it("accepts a parent who agreed to the privacy notice", () => {
    expect(preregSchema.safeParse(base).success).toBe(true);
    expect(preregSchema.safeParse({ ...base, grade: "초4" }).success).toBe(true); // 학부모는 초등 자녀도 가능
  });

  it("rejects a submission without privacy consent", () => {
    expect(preregSchema.safeParse({ ...base, consent: false }).success).toBe(false);
    const { consent: _omit, ...noConsent } = base;
    expect(preregSchema.safeParse(noConsent).success).toBe(false);
  });

  it("rejects a malformed phone number", () => {
    expect(preregSchema.safeParse({ ...base, phone: "02-123-4567" }).success).toBe(false);
  });

  it("stores every phone number in one format, so the same number isn't saved twice", () => {
    for (const phone of ["01012345678", "010-1234-5678", " 010-1234-5678 "]) {
      const r = preregSchema.safeParse({ ...base, phone });
      expect(r.success && r.data.phone, phone).toBe("010-1234-5678");
    }
    const short = preregSchema.safeParse({ ...base, phone: "0101234567" });
    expect(short.success && short.data.phone).toBe("010-123-4567");
  });

  it("lets a student apply only from 중3 up and only after confirming 만 14세 이상", () => {
    expect(preregSchema.safeParse({ ...base, role: "student", grade: "고1", over14: true }).success).toBe(true);
    expect(preregSchema.safeParse({ ...base, role: "student", grade: "고1", over14: false }).success).toBe(false);
    expect(preregSchema.safeParse({ ...base, role: "student", grade: "초6", over14: true }).success).toBe(false);
    expect(preregSchema.safeParse({ ...base, role: "student", grade: "중2", over14: true }).success).toBe(false);
  });
});

describe("pre-registration gate", () => {
  // 저장소 연결 전에 배포되면 학부모가 제출해도 저장되지 않으므로, 운영에선 DB가 있을 때만 연다
  it("opens in production only when the Notion token and DB are both set, and always locally", () => {
    expect(isPreregOpen({ NODE_ENV: "production" })).toBe(false);
    expect(isPreregOpen({ NODE_ENV: "production", NOTION_PREREG_DB_ID: "abc" })).toBe(false); // 토큰 없으면 저장 불가
    expect(isPreregOpen({ NODE_ENV: "production", NOTION_PREREG_DB_ID: "abc", NOTION_TOKEN: "t" })).toBe(true);
    expect(isPreregOpen({ NODE_ENV: "development" })).toBe(true);
    expect(isPreregStoreReady({ NOTION_TOKEN: "t" })).toBe(false);
  });

  it("uses an anchor the old-home redirect leaves alone", () => {
    expect(STAGE_LEGACY_ANCHORS as readonly string[]).not.toContain("prereg");
    expect(readFileSync(path.join(ROOT, "components/sections/home/HomePrereg.tsx"), "utf8")).toContain('id="prereg"');
  });

  it("never promises 알림톡 — launch news goes out by 문자", () => {
    const form = readFileSync(path.join(ROOT, "components/forms/PreregForm.tsx"), "utf8");
    const content = readFileSync(path.join(ROOT, "lib/content/home.ts"), "utf8");
    expect(form + content).not.toMatch(/알림톡/);
  });
});

// API 경로 — 노션 호출은 가짜로 바꿔 '저장했는지'만 본다
const createPreregRow = vi.fn(async () => ({}));
vi.mock("@/lib/notion", () => ({ createPreregRow: (...a: unknown[]) => createPreregRow(...(a as [])) }));

describe("POST /api/prereg", () => {
  const post = async (body: unknown) => {
    const { POST } = await import("@/app/api/prereg/route");
    return POST(new Request("http://x/api/prereg", { method: "POST", body: JSON.stringify(body) }));
  };
  beforeEach(() => {
    createPreregRow.mockClear();
    vi.stubEnv("NOTION_TOKEN", "t");
    vi.stubEnv("NOTION_PREREG_DB_ID", "db");
  });
  afterEach(() => vi.unstubAllEnvs());

  it("stores a valid sign-up with the phone number in one format", async () => {
    const res = await post({ ...base, phone: "01012345678" });
    expect(res.status).toBe(200);
    expect(createPreregRow).toHaveBeenCalledTimes(1);
    expect(createPreregRow.mock.calls[0]).toEqual([expect.objectContaining({ phone: "010-1234-5678" })]);
  });

  it("answers a bot that filled the hidden field with a quiet success and stores nothing", async () => {
    const res = await post({ ...base, honeypot: "http://spam" });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true });
    expect(createPreregRow).not.toHaveBeenCalled();
  });

  it("refuses without consent on the server too", async () => {
    const res = await post({ ...base, consent: false });
    expect(res.status).toBe(422);
    expect(createPreregRow).not.toHaveBeenCalled();
  });

  it("refuses in production when the store isn't connected, instead of pretending to save", async () => {
    vi.stubEnv("NOTION_PREREG_DB_ID", "");
    vi.stubEnv("NODE_ENV", "production");
    const res = await post(base);
    expect(res.status).toBe(503);
    expect(createPreregRow).not.toHaveBeenCalled();
  });
});
