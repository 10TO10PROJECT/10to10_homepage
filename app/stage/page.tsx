import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { RoiBoard } from "@/components/sections/stage/RoiBoard";
import { InfoSessionFlagship } from "@/components/sections/stage/InfoSessionFlagship";
import { WhyUs } from "@/components/sections/stage/WhyUs";
import { PromoShowcase } from "@/components/sections/PromoShowcase";
import { GuaranteeBanner } from "@/components/sections/stage/GuaranteeBanner";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { Phase2Roadmap } from "@/components/sections/stage/Phase2Roadmap";
import { StageContact } from "@/components/sections/stage/StageContact";
import { StickyCta } from "@/components/ui/StickyCta";

export const metadata: Metadata = {
  title: "10to10 STAGE — 학원 설명회, 원장님은 발표만 하세요",
  description:
    "설명회 풀케어 — 기획·모객·자료 제작·현장 운영·성과 리포트까지 전담팀이 대신합니다. 모객 20명 → 등록 6명 → 예상 매출 720만 원. 신청 20명 미달 시 부족한 만큼 환급하는 모객 보장.",
};

/**
 * 섹션 순서 = 원장 심리 여정 (개편안 v2 §4)
 * 공감(3) → 계산(2) → 증거(5·6) → 해자(6·4) → 보장(1) → 노력 최소화(7) → FAQ → 긴급성(8)
 */
export default function StagePage() {
  return (
    <>
      <StageHero />
      <Painpoints />
      <RoiBoard />
      <InfoSessionFlagship />
      <WhyUs />
      <PromoShowcase />
      <GuaranteeBanner />
      <Process />
      <StageFaq />
      <Phase2Roadmap />
      <StageContact />
      <StickyCta formHref="#contact" />
    </>
  );
}
