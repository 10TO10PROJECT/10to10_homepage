import { describe, it, expect } from "vitest";
import { PRIVACY_POLICY } from "@/lib/content/privacy";
import { COMPANY } from "@/lib/content/company";

// 처리방침 본문은 노션 '개인정보 정비 패키지' 3장에서 옮긴다. 노션의 작업 표시([ ] · [확인])가 그대로 게시되면 안 된다.
// 본문에 보이는 글자만 모음(JSON 배열 괄호와 섞이지 않게)
function strings(v: unknown): string[] {
  if (typeof v === "string") return [v];
  if (Array.isArray(v)) return v.flatMap(strings);
  if (v && typeof v === "object") return Object.values(v).flatMap(strings);
  return [];
}
const text = strings(PRIVACY_POLICY).join(" ");

describe("privacy policy content", () => {
  it("has no leftover draft markers", () => {
    expect(text).not.toMatch(/[[\]]/);
    expect(text).not.toMatch(/TBD|해당 시\]|확인 —/);
  });

  it("numbers articles 1..16 in order", () => {
    expect(PRIVACY_POLICY.articles.map((a) => a.no)).toEqual(
      Array.from({ length: 16 }, (_, i) => i + 1),
    );
  });

  it("covers the sections the law requires", () => {
    const titles = PRIVACY_POLICY.articles.map((a) => a.title).join(" / ");
    for (const t of ["처리 목적", "보유 기간", "제3자 제공", "위탁", "국외 이전", "파기", "권리", "안전성 확보", "자동 수집", "보호책임자", "권익침해"]) {
      expect(titles).toContain(t);
    }
  });

  it("states one effective date, matching the last article", () => {
    expect(PRIVACY_POLICY.effectiveDate).toMatch(/^\d{4}년 \d{1,2}월 \d{1,2}일$/);
    const last = strings(PRIVACY_POLICY.articles.at(-1)).join(" ");
    expect(last).toContain(`${PRIVACY_POLICY.effectiveDate}부터`);
  });

  it("uses the company support email for requests", () => {
    expect(text).toContain(COMPANY.email);
  });
});
