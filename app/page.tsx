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

export const metadata: Metadata = {
  title: "10to10 STAGE — 등록으로 이어지는 가장 확실한 퍼널, 학원 설명회 풀케어",
  description:
    "학부모가 직접 방문하는 설명회는 등록으로 이어지는 가장 확실한 퍼널입니다. 기획·모객·디자인·현장 운영·성과 리포트까지 풀케어. 정식가 100만 원, 파트너 1·2호 한정 50만 원. 신청 20명 미달 시 부족한 만큼 환급.",
  openGraph: {
    title: "10to10 STAGE — 등록으로 이어지는 가장 확실한 퍼널, 학원 설명회 풀케어",
    description:
      "학부모가 직접 방문하는 설명회는 등록으로 이어지는 가장 확실한 퍼널입니다. 기획·모객·디자인·현장 운영·성과 리포트까지, 10to10 STAGE가 풀케어합니다.",
  },
};

/** 메인 = STAGE 랜딩 (브로슈어 2026 파트너 제안서 흐름 정합) */
export default function Home() {
  return (
    <>
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
