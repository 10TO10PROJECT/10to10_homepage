import { describe, it, expect } from "vitest";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import * as home from "@/lib/content/home";
import { HOME_ENGINE, HOME_HERO, HOME_OPEN, HOME_PATHS, STAGE_LEGACY_ANCHORS } from "@/lib/content/home";
import { PLATFORM_FEED_MOCK } from "@/lib/content/platform";

// 메인(통합 랜딩)은 원장님·학부모 모두에게 공개된다. 레포가 public이라 내부 일정·가칭이 섞이면 안 되고,
// 운영하지 않는 서비스(무료 진단·알림톡)를 약속해서도 안 된다. 실제 현장 사진은 캡션을 달고 public/에 있어야 한다.
const ROOT = path.resolve(__dirname, "..");
const HOME_DIR = path.join(ROOT, "components/sections/home");
const HOME_SOURCES = [
  "app/page.tsx",
  ...readdirSync(HOME_DIR).map((f) => path.join("components/sections/home", f)),
];
// '텐투텐 AI'는 아직 정식 명칭이 아니라 서비스 이름으로는 금지. 엔진 이름 '텐투텐 AI 엄선 엔진'만 허용(11/11 CEO)
const FORBIDDEN = [/텐투텐\s*AI(?!\s*엄선\s*엔진)/, /알림톡/, /11\s*\/\s*21/, /11월\s*21일/, /무료\s*(모객\s*)?진단/];

const read = (rel: string) => readFileSync(path.join(ROOT, rel), "utf8");
const publicPath = (src: string) => path.join(ROOT, "public", src.replace(/^\//, ""));

describe("home page content", () => {
  it("keeps internal dates, the provisional name and services we don't run out of the copy", () => {
    const offenders: string[] = [];
    const copy = JSON.stringify(home);
    for (const re of FORBIDDEN) if (re.test(copy)) offenders.push(`lib/content/home.ts ${re}`);
    for (const rel of HOME_SOURCES) {
      for (const re of FORBIDDEN) if (re.test(read(rel))) offenders.push(`${rel} ${re}`);
    }
    expect(offenders).toEqual([]);
  });

  it("captions every real photo and points it at a file in public/", () => {
    const photos = [HOME_HERO.photo, HOME_PATHS.stage.photo, ...HOME_OPEN.photos];
    for (const p of photos) {
      expect(existsSync(publicPath(p.src)), p.src).toBe(true);
      expect(p.caption).toMatch(/20\d\d\.\d\d/); // 언제(연·월)를 캡션에 적음
      expect(p.alt.length).toBeGreaterThan(10);
    }
  });
});

describe("old home anchors after STAGE moved to /stage", () => {
  // 인쇄물 QR·가격 안내 카드(10to10.kr/#estimate)·캡션 링크가 /stage의 같은 섹션으로 이어져야 한다
  const stagePage = read("app/stage/page.tsx");

  it.each(STAGE_LEGACY_ANCHORS)("#%s still exists on a section rendered by /stage", (id) => {
    const owner = readdirSync(path.join(ROOT, "components/sections/stage")).find((f) =>
      read(path.join("components/sections/stage", f)).includes(`id="${id}"`),
    );
    expect(owner, `id="${id}"`).toBeDefined();
    expect(stagePage).toContain(`<${owner!.replace(/\.tsx$/, "")} />`);
  });

  it("does not reuse those ids on the new home, so the redirect never fights a real home section", () => {
    for (const rel of HOME_SOURCES) {
      for (const id of STAGE_LEGACY_ANCHORS) expect(read(rel), `${rel} #${id}`).not.toContain(`id="${id}"`);
    }
  });

  it("points STAGE links on other pages at /stage, not the new combined home", () => {
    expect(read("app/inquiry/page.tsx")).toContain('{ href: "/stage", label: "STAGE 자세히 보기" }');
    expect(read("components/sections/platform/ForWhom.tsx")).toMatch(/href="\/stage"[^>]*>\s*텐투텐 STAGE/);
  });

  it("sends every site-wide 견적 확인 link to /stage, not the old home anchor", () => {
    const files = ["components/layout/Header.tsx", "components/ui/StickyCta.tsx", "app/inquiry/page.tsx", "app/portfolio/page.tsx"];
    for (const rel of files) expect(read(rel), rel).not.toMatch(/["`]\/#estimate/);
  });
});

describe("home layout", () => {
  // 11/10 CEO: 히어로에서 조금만 내리면 원장님은 STAGE, 학부모·학생은 플랫폼으로 가는 길이 보여야 한다(인쇄물 QR로 온 원장님 포함)
  it("puts the two paths right after the hero, pointing at /platform and /stage", () => {
    const page = read("app/page.tsx");
    expect(page).toMatch(/<HomeHero \/>\s*<HomePaths \/>/);
    expect(HOME_PATHS.app.href).toBe("/platform");
    expect(HOME_PATHS.stage.href).toBe("/stage");
  });

  // 11/11 CEO: 히어로의 '모으고·엽니다'를 받아, 학부모·학생에게는 맞춤 정보를 챙겨 드리고 원장님께는 설명회를 열어 드린다
  it("tells each audience what we do for them on the path cards", () => {
    expect(HOME_PATHS.app.who).toBe("학부모·학생에게는");
    expect(HOME_PATHS.stage.who).toBe("학원 원장님께는");
    expect(`${HOME_PATHS.app.lead} ${HOME_PATHS.app.keyword}`).toBe("맞춤형 정보를 챙겨 드립니다");
    expect(`${HOME_PATHS.stage.lead} ${HOME_PATHS.stage.keyword}`).toBe("설명회를 열어 드립니다"); // 히어로 '엽니다'를 받음
  });

  // 11/11 CEO: 설명회 사진은 더 크고 웅장한 2월 콜라보 설명회로(10월 리버스 사진 ✗)
  it("shows the February collab session on the STAGE card and in the STAGE section", () => {
    for (const p of [HOME_PATHS.stage.photo, ...HOME_OPEN.photos]) expect(p.caption, p.src).toMatch(/2026\.02/);
  });

  // 11/11 CEO: '창업자 이야기 더 보기'는 /platform 맨 위가 아니라 창업자 이야기 섹션으로 바로
  it("links 창업자 이야기 더 보기 straight to the founder story section", () => {
    expect(read("components/sections/home/HomeFounders.tsx")).toContain('href="/platform#founders"');
    expect(read("components/sections/platform/FounderStory.tsx")).toContain('id="founders"');
    expect(read("app/platform/page.tsx")).toContain("<FounderStory />");
  });

  // 11/11 시안 A: 히어로 아래 두 서비스 이름표도 갈림길 카드와 같은 곳으로 간다
  it("links the hero's two service labels to the same places as the path cards", () => {
    expect(HOME_HERO.services.map((s) => s.href)).toEqual([HOME_PATHS.app.href, HOME_PATHS.stage.href]);
    expect(HOME_HERO.services.map((s) => s.name)).toEqual([HOME_PATHS.app.product, HOME_PATHS.stage.product]);
  });
});

// 11/12 CEO: 텐투텐 AI 엄선 엔진이 '필요한 정보만' 골라 주고 신청까지 앱 안에서 — 엔진이 고른 것과 피드 화면이 어긋나면 엄선이 거짓말이 된다
describe("AI 엄선 엔진 장면", () => {
  const feedTitles = [PLATFORM_FEED_MOCK.hero.title, ...PLATFORM_FEED_MOCK.items.map((it) => it.title)];

  it("judges by the same 동네·학년 the phone feed shows", () => {
    expect(HOME_ENGINE.criteria).toEqual([PLATFORM_FEED_MOCK.location, PLATFORM_FEED_MOCK.grade]);
  });

  it("lets through exactly what the phone feed shows, and nothing it shows gets filtered out", () => {
    const passed = HOME_ENGINE.chips.filter((c) => c.pass).map((c) => c.title);
    const dropped = HOME_ENGINE.chips.filter((c) => !c.pass).map((c) => c.title);
    expect(passed).toEqual(feedTitles);
    for (const t of dropped) expect(feedTitles).not.toContain(t);
  });

  it("gives every filtered-out item a plain reason (다른 학년 · 다른 지역)", () => {
    for (const c of HOME_ENGINE.chips.filter((c) => !c.pass)) {
      expect("why" in c && ["다른 학년", "다른 지역"].includes(c.why)).toBe(true);
    }
  });

  it("applies to the seminar that is actually in the feed, and no longer repeats the apply scene in a separate section", () => {
    expect(PLATFORM_FEED_MOCK.items).toContainEqual(HOME_ENGINE.seminar);
    expect(HOME_ENGINE.seminar.tag).toBe("설명회");
    expect(read("app/page.tsx")).not.toContain("HomeMeet");
  });

  it("names the engine only by its full name", () => {
    expect(HOME_ENGINE.name).toBe("텐투텐 AI 엄선 엔진");
  });
});

describe("routing", () => {
  it("no longer redirects /stage to the home page (STAGE lives at /stage again)", () => {
    const config = read("next.config.ts");
    expect(config).not.toMatch(/source:\s*"\/stage"/);
  });
});
