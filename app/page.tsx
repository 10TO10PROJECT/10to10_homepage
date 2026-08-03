import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { RoiBoard } from "@/components/sections/stage/RoiBoard";
import { InfoSessionFlagship } from "@/components/sections/stage/InfoSessionFlagship";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { PromoShowcase } from "@/components/sections/PromoShowcase";
import { WhyUs } from "@/components/sections/stage/WhyUs";
import { PricingSection } from "@/components/sections/stage/PricingSection";
import { GuaranteeBanner } from "@/components/sections/stage/GuaranteeBanner";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { Phase2Roadmap } from "@/components/sections/stage/Phase2Roadmap";
import { StageContact } from "@/components/sections/stage/StageContact";
import { StickyCta } from "@/components/ui/StickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { STAGE_SERVICE_JSONLD, STAGE_FAQ_JSONLD } from "@/lib/seo";

export const metadata: Metadata = {
  title: "10to10 STAGE — 등록으로 이어지는 가장 확실한 퍼널, 학원 설명회 풀케어",
  description:
    "학부모가 직접 방문하는 설명회는 등록으로 이어지는 가장 확실한 퍼널입니다. 설명회 하루가 학원의 한 학기를 바꿉니다. 홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리까지 전담팀이 대신합니다.",
  openGraph: {
    title: "10to10 STAGE — 등록으로 이어지는 가장 확실한 퍼널, 학원 설명회 풀케어",
    description:
      "학부모가 직접 방문하는 설명회는 등록으로 이어지는 가장 확실한 퍼널입니다. 설명회 하루가 학원의 한 학기를 바꿉니다. 홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리까지 전담팀이 대신합니다.",
  },
};

/** 메인 = STAGE 랜딩 (브로슈어 2026 파트너 제안서 흐름 정합) */
export default function Home() {
  return (
    <>
      <JsonLd data={STAGE_SERVICE_JSONLD} />
      <JsonLd data={STAGE_FAQ_JSONLD} />
      <StageHero />
      <Painpoints />
      <RoiBoard />
      <InfoSessionFlagship />
      <SiteGallery />
      <PromoShowcase />
      <WhyUs />
      <PricingSection />
      <GuaranteeBanner />
      <Process />
      <StageFaq />
      <Phase2Roadmap />
      <StageContact />
      <StickyCta formHref="#contact" />
    </>
  );
}
