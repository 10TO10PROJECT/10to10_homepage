import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import nextConfig from "../next.config";
import sitemap from "@/app/sitemap";
import { channelPageviewUrl } from "@/lib/prereg-source";
import { hasStickyCta } from "@/lib/sticky-cta";
import { PREREG_PAGE, HOME_PREREG } from "@/lib/content/home";
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

  it("uses the agreed copy — 텐투텐 앱, no 'AI answers for you' tone, same consent texts as the main form", () => {
    expect(PREREG_PAGE.title).toBe("텐투텐 앱 사전 예약");
    expect(PREREG_PAGE.headline.replace("\n", " ")).toBe("우리 아이 학년 소식만 골라서 챙겨 드립니다");
    expect(PREREG_PAGE.sub).toBe(HOME_PREREG.sub);
    const all = Object.values(PREREG_PAGE).join(" ");
    expect(all).not.toMatch(/AI/);
    expect(PREREG_BANNER).toBe("텐투텐 앱 사전 예약하기");
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
