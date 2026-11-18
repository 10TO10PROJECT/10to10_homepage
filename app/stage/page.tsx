import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { TrustBar } from "@/components/sections/stage/TrustBar";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { RoiBoard } from "@/components/sections/stage/RoiBoard";
import { InfoSessionFlagship } from "@/components/sections/stage/InfoSessionFlagship";
import { CompareStrip } from "@/components/sections/stage/CompareStrip";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { PromoShowcase } from "@/components/sections/PromoShowcase";
import { WhyUs } from "@/components/sections/stage/WhyUs";
import { TeamCredential } from "@/components/sections/stage/TeamCredential";
import { PricingSection } from "@/components/sections/stage/PricingSection";
import { GuaranteeBanner } from "@/components/sections/stage/GuaranteeBanner";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { StageContact } from "@/components/sections/stage/StageContact";
import { JsonLd } from "@/components/seo/JsonLd";
import { STAGE_SERVICE_JSONLD, STAGE_FAQ_JSONLD } from "@/lib/seo";

const TITLE = "10to10 STAGE — 등록으로 이어지는 가장 확실한 길, 학원 설명회 풀케어";
const DESCRIPTION =
  "학부모가 직접 찾아오는 설명회는 등록으로 이어지는 가장 확실한 길입니다. 설명회 하루가 학원의 한 학기를 바꿉니다. 홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리까지 전담팀이 대신합니다.";

// openGraph는 레이아웃 값을 통째로 덮으므로 링크 공유(카카오톡 등)에 쓰이는 필드를 여기서 모두 적음. 썸네일은 같은 폴더 opengraph-image.png
export const metadata: Metadata = {
  title: { absolute: TITLE }, // 예전 메인일 때와 같은 제목 유지(레이아웃 템플릿 " · 10to10" 미적용)
  description: DESCRIPTION,
  alternates: { canonical: "/stage" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/stage",
    siteName: "10to10",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/**
 * STAGE 랜딩 (2026-11-09: 메인에서 /stage로 이동 — 메인은 STAGE·텐투텐 앱 통합 랜딩).
 * 섹션 맵 = 인쇄물·캐러셀 논리: 히어로 → 신뢰도 → 페인 → 왜 설명회 → 실제 사례·포트폴리오 → 솔루션 → 차별화 → 팀 → 가격·보장 → 수행방안 → 상담
 * 옛 링크(10to10.kr/#estimate 등)는 메인의 StageHashRedirect가 이 페이지의 같은 앵커로 보낸다.
 */
export default function StagePage() {
  return (
    <>
      <JsonLd data={STAGE_SERVICE_JSONLD} />
      <JsonLd data={STAGE_FAQ_JSONLD} />
      <StageHero />
      <TrustBar />
      <Painpoints />
      <RoiBoard />
      <SiteGallery />
      <PromoShowcase />
      <InfoSessionFlagship />
      <CompareStrip />
      <WhyUs />
      <TeamCredential />
      <PricingSection />
      <GuaranteeBanner />
      <Process />
      <StageFaq />
      <StageContact />
    </>
  );
}
