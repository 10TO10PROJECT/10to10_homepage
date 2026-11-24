import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import nextConfig from "../next.config";
import sitemap from "@/app/sitemap";
import { channelPageviewUrl } from "@/lib/prereg-source";
import { hasStickyCta } from "@/lib/sticky-cta";
import { PREREG_PAGE, HOME_PREREG } from "@/lib/content/home";
import { PRIVACY_POLICY } from "@/lib/content/privacy";
import { PREREG_BANNER } from "@/components/ui/StickyCta";

const ROOT = path.resolve(__dirname, "..");
const read = (p: string) => readFileSync(path.join(ROOT, p), "utf8");

// 11/22 CEO: 인스타 프로필 링크(10to10.kr/?utm_source=insta#prereg)로 들어오면 휴대폰에서 사전 예약 위치로 바로 가지 않음
// → 사전 예약 전용 페이지(/prereg) + 이미 나간 채널 주소는 그리로 보내고, 메인 하단 바는 사전 예약 배너 하나로
describe("pre-registration page (/prereg)", () => {
  it("sends the already-posted channel links on / to /prereg (query kept by Next, hash kept by the browser)", async () => {
    const rules = await nextConfig.redirects!();
    const rule = rules.find((r) => r.source === "/" && r.destination === "/prereg");
    expect(rule).toBeDefined();
    expect(rule!.permanent).toBe(false);
    const has = rule!.has?.[0];
    expect(has).toMatchObject({ type: "query", key: "utm_source" });
    // Next는 has.value를 앞뒤가 고정된 정규식으로 맞춘다 — 네 채널만, 다른 utm_source(예: 뉴스레터)는 메인에 그대로
    const re = new RegExp(`^${(has as { value: string }).value}$`);
    for (const ch of ["chat", "insta", "threads", "ad"]) expect(re.test(ch), ch).toBe(true);
    for (const other of ["instagram", "newsletter", "adx", ""]) expect(re.test(other), other).toBe(false);
  });

  it("keeps counting visits per channel after the redirect (stats path /utm/<채널>/prereg)", () => {
    expect(channelPageviewUrl("https://10to10.kr/prereg?utm_source=insta")).toBe("https://10to10.kr/utm/insta/prereg");
    expect(channelPageviewUrl("https://10to10.kr/prereg?utm_source=ad#prereg")).toBe("https://10to10.kr/utm/ad/prereg");
    expect(channelPageviewUrl("https://10to10.kr/prereg")).toBe("https://10to10.kr/prereg");
  });

  it("is in the sitemap", () => {
    expect(sitemap().map((e) => e.url)).toContain("https://10to10.kr/prereg");
  });

  it("shows the form right away with its own title (no fade-in, no bottom bar or Kakao button over the form)", () => {
    const page = read("app/prereg/page.tsx");
    expect(page).toContain("<PreregForm />");
    expect(page).not.toMatch(/import { FadeIn }/);
    expect(page).not.toContain('id="prereg"'); // 옛 주소의 #prereg가 따라와도 스크롤 없이 맨 위부터
    expect(read("components/ui/KakaoFab.tsx")).toContain('pathname === "/prereg"');
    expect(page).toMatch(/className="m-dark -mt-16 [^"]*pt-16/);
    expect(hasStickyCta("/prereg")).toBe(false);
  });

  it("uses the agreed copy — 텐투텐 앱, no 'AI answers for you' tone, no AI credits", () => {
    expect(PREREG_PAGE.headline.replace("\n", " ")).toBe("우리 아이 학년 소식만 골라서 챙겨 드립니다");
    // 무엇이 어떻게 오는지(문자) — 접힌 동의 표에만 있으면 안 되고 제목 바로 아래에 보여야 한다
    expect(PREREG_PAGE.sub).toContain("문자로");
    expect(read("app/prereg/page.tsx")).toContain("<Emph text={P.sub} />");
    const all = JSON.stringify([PREREG_PAGE, HOME_PREREG, PREREG_BANNER]);
    expect(all).not.toMatch(/AI|크레딧/);
  });

  // 11/23 CEO: 화면에 보이는 이름은 '사전 예약' 대신 '출시 알림'. 주소(/prereg)·유입 기록·노션 DB 이름은 그대로
  it("calls it 출시 알림 everywhere on screen (address and stats path stay /prereg)", () => {
    expect(PREREG_PAGE.title).toBe("텐투텐 앱 출시 알림");
    expect(HOME_PREREG.eyebrow).toBe("텐투텐 앱 출시 알림");
    expect(PREREG_PAGE.eyebrow).toBe(HOME_PREREG.eyebrow);
    expect(HOME_PREREG.submit).toBe("출시 알림 받기");
    expect(HOME_PREREG.cta).toBe("앱 출시 알림 받기");
    expect(PREREG_BANNER).toBe("텐투텐 앱 출시 알림 받기");
    expect(HOME_PREREG.done).toContain("출시 알림 신청이 완료됐어요");
    expect(JSON.stringify([PREREG_PAGE, HOME_PREREG, PREREG_BANNER])).not.toContain("사전 예약");
  });

  // 11/23 CEO: 지금 신청하면 얻는 것 — 금액·기간·기능 이름은 미확정이라 쓰지 않는다
  it("shows the sign-up benefit under the title and once more, shorter, right above the button", () => {
    expect(PREREG_PAGE.benefit).toBe(
      "신청하시면 학년에 맞는 자료집을 바로 드립니다. 앞으로 나올 유료 기능을 무료로 먼저 써 보실 수 있는 혜택도 드립니다.",
    );
    expect(HOME_PREREG.benefitShort).toContain("학년에 맞는 자료집을 바로");
    expect(HOME_PREREG.benefitShort).toContain("유료 기능을 무료로 먼저");
    expect(JSON.stringify([PREREG_PAGE.benefit, HOME_PREREG.benefitShort, HOME_PREREG.doneNote])).not.toMatch(/\d|만 원|개월|일간/);
    const page = read("app/prereg/page.tsx");
    expect(page.indexOf("{P.benefit}")).toBeGreaterThan(page.indexOf("{P.headline}"));
    const form = read("components/forms/PreregForm.tsx");
    expect(form.indexOf("{P.benefitShort}")).toBeGreaterThan(-1);
    expect(form.indexOf("{P.benefitShort}")).toBeLessThan(form.indexOf('type="submit"'));
  });

  // 11/24 CEO: 신청 즉시 학년별 자료집 — 모든 학년에 하나 이상, 광고 칸이 있는 자료는 표시
  it("gives every grade at least one material right after sign-up and labels the ones with a paid ad", async () => {
    const { PREREG_MATERIALS } = await import("@/lib/content/prereg-materials");
    const { PREREG_GRADES } = await import("@/lib/schema/prereg");
    for (const g of PREREG_GRADES) {
      expect(PREREG_MATERIALS[g].length).toBeGreaterThan(0);
      for (const m of PREREG_MATERIALS[g]) expect(m.href).toMatch(/^https:\/\//);
    }
    const all = Object.values(PREREG_MATERIALS).flat();
    for (const m of all.filter((x) => /로드맵|도형/.test(x.title))) expect(m.paidAd).toBe(true);
    const form = read("components/forms/PreregForm.tsx");
    expect(form).toContain("{P.materialsLabel}");
    expect(form).toContain("{P.materialsPaidAd}");
    expect(HOME_PREREG.materialsPaidAd).toBe("유료 광고 포함");
  });

  it("shows what the app is — one app screen with its caption and three lines, before the form", () => {
    expect(existsSync(path.join(ROOT, "public", PREREG_PAGE.shot.src))).toBe(true);
    expect(PREREG_PAGE.shot.caption).toBe("개발 중인 앱 화면 예시입니다");
    expect(PREREG_PAGE.features).toEqual([
      "학년과 지역을 고르면 맞는 소식부터 보여 드립니다",
      "모든 정보에는 원문을 확인할 수 있도록 출처를 밝힙니다",
      "우리 동네 설명회 소식도 한곳에서 챙겨 드립니다",
    ]);
    const page = read("app/prereg/page.tsx");
    expect(page).toContain("P.shot.src");
    expect(page).toContain("{P.shot.caption}");
    expect(page.indexOf("P.features.map")).toBeLessThan(page.indexOf("<PreregForm />"));
  });

  // 휴대폰에서 번호를 넣은 뒤 스크롤 한 번 안에 제출 버튼이 보이도록 — 동의 상세 표는 기본으로 접힘
  it("folds the consent details by default, with the checkbox outside the toggle", () => {
    const form = read("components/forms/PreregForm.tsx");
    expect(form).toContain("<details");
    expect(form).not.toMatch(/<details[^>]*\bopen\b/);
    expect(form).toContain("{HOME_PREREG.details}");
    expect(HOME_PREREG.details).toBe("자세히 보기");
    const summary = form.slice(form.indexOf("<summary"), form.indexOf("</summary>"));
    expect(summary).not.toContain('type="checkbox"');
  });

  // 혜택을 나중에 드리려면 번호를 출시 알림 뒤에도 갖고 있어야 한다 → [필수] 동의와 처리방침이 같은 내용이어야 한다
  it("keeps the required consent's purpose and retention in step with the privacy policy", () => {
    const item = (k: string) => HOME_PREREG.consent.items.find(([key]) => key === k)?.[1] ?? "";
    expect(item("이용 목적")).toBe("텐투텐 앱 출시 알림 문자 발송, 출시 알림 신청자 혜택 제공");
    expect(item("보유 기간")).toBe("혜택 제공 완료 시 또는 출시 후 1년 중 먼저 오는 때까지");
    const article = (no: number) => JSON.stringify(PRIVACY_POLICY.articles.find((a) => a.no === no));
    expect(article(1)).toContain("텐투텐 앱 출시 알림(사전 예약) 및 출시 알림 신청자 혜택 제공");
    expect(article(2)).toContain("앱 출시 알림(사전 예약)");
    expect(article(3)).toContain(`앱 출시 알림(사전 예약): ${item("보유 기간")}`);
    expect(article(3)).not.toContain("출시 알림 발송 후 지체 없이 파기");
  });

  // 11/24 CEO: 링크를 공유하면 메인과 같은 썸네일이 떠서 출시 알림 페이지인지 알 수 없음 → 전용 썸네일
  it("has its own share thumbnail that says 출시 알림 (with 사전 예약), not the main page's", () => {
    const png = readFileSync(path.join(ROOT, "app/prereg/opengraph-image.png"));
    expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([1200, 630]);
    expect(png.equals(readFileSync(path.join(ROOT, "app/opengraph-image.png")))).toBe(false);
    const alt = read("app/prereg/opengraph-image.alt.txt");
    expect(alt).toContain("텐투텐 앱 출시 알림(사전 예약)");
    expect(alt).toContain(PREREG_PAGE.headline.replace("\n", " "));
    expect(alt).not.toMatch(/AI|크레딧|\d/);
    // 파일 썸네일을 쓰므로 부모(메인) 썸네일을 이어받던 코드는 없어야 한다
    expect(read("app/prereg/page.tsx")).not.toContain("openGraph?.images");
  });

  it("points every pre-registration button on the main page to /prereg", () => {
    for (const f of ["components/sections/home/HomeCta.tsx", "components/sections/home/HomeGather.tsx"]) {
      const src = read(f);
      expect(src, f).not.toContain('href="#prereg"');
      expect(src, f).toContain('href="/prereg"');
    }
  });

  it("replaces the main page's two-button bottom bar with the pre-registration banner (main page only)", () => {
    const src = read("components/ui/StickyCta.tsx");
    expect(src).toMatch(/prereg && pathname === "\/"/);
    expect(src.match(/href="\/prereg"/g)?.length).toBe(2); // 휴대폰 하단 바 + 넓은 화면 버튼
    expect(read("app/layout.tsx")).toContain("<StickyCta prereg={isPreregOpen()} />");
  });
});
