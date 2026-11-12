import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomePaths } from "@/components/sections/home/HomePaths";
import { HomeGather } from "@/components/sections/home/HomeGather";
import { HomeOpen } from "@/components/sections/home/HomeOpen";
import { HomeFounders } from "@/components/sections/home/HomeFounders";
import { HomeCta } from "@/components/sections/home/HomeCta";
import { StageHashRedirect } from "@/components/sections/home/StageHashRedirect";
import { HomePrereg } from "@/components/sections/home/HomePrereg";
import { isPreregOpen } from "@/lib/prereg";
import { SITE } from "@/lib/site";

const TITLE = "텐투텐 — 학생을 위한 교육 정보를 모으고, 그 정보를 나누는 자리, 설명회를 엽니다";
const DESCRIPTION = SITE.description;

// openGraph는 레이아웃 값을 통째로 덮으므로 링크 공유(카카오톡 등)에 쓰이는 필드를 여기서 모두 적음. 썸네일은 같은 폴더 opengraph-image.png
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "10to10",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/**
 * 메인 = 텐투텐의 두 사업을 한 이야기로 잇는 랜딩 (2026-11-09 개편, 11-10 CEO 피드백: 좌우 분할 대신 스토리·애니메이션으로 유기적 연결).
 * 기존 STAGE 랜딩은 /stage. 디자인: CEO 제공 Mercury 템플릿(어두운 캔버스·그래파이트 카드·알약 버튼·실사 히어로)을 민트·Pretendard로 번안.
 * 흐름: 히어로("모으고 · 엽니다") → 바로 아래 갈림길(학부모·학생에게는 챙겨 드립니다 → /platform, 원장님께는 열어 드립니다 → /stage)
 *       → 텐투텐 앱(쏟아지는 소식 → 텐투텐 AI 엄선 엔진이 맞춤만 골라 피드로 → 설명회 바로 신청) → 10to10 STAGE(설명회 현장·실측)
 *       → 앱 사전 예약 → 만드는 사람들 → 마무리. (11/12: 따로 있던 '정보에서 신청까지' 장면은 엔진 장면의 마지막 단계로 합침)
 * 앱 사전 예약(#prereg)과 그리로 가는 버튼은 저장소가 연결된 배포에서만 보인다(isPreregOpen, 로컬은 미리보기로 항상).
 */
export default function Home() {
  const prereg = isPreregOpen();
  return (
    <div className="bg-[var(--color-onyx)] text-[var(--color-ivory)]">
      <StageHashRedirect />
      <HomeHero />
      <HomePaths />
      <HomeGather prereg={prereg} />
      <HomeOpen />
      {prereg && <HomePrereg />}
      <HomeFounders />
      <HomeCta prereg={prereg} />
    </div>
  );
}
