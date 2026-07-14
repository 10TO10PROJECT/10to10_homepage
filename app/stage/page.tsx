import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { WhyUs } from "@/components/sections/stage/WhyUs";
import { InfoSessionFlagship } from "@/components/sections/stage/InfoSessionFlagship";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { Phase2Roadmap } from "@/components/sections/stage/Phase2Roadmap";
import { StageContact } from "@/components/sections/stage/StageContact";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "10to10 STAGE — 학원 설명회, 원장님은 발표만 하세요",
  description:
    "연세대·한양대 출신 마케팅 전문팀이 학원 설명회를 기획·디자인·모객·쿠폰·현장 운영·등록률 트래킹까지 풀케어합니다. 학원장님은 무대 위에서 발표만 하시면 됩니다.",
};

export default function StagePage() {
  return (
    <>
      <StageHero />
      <SectionDivider from="white" to="dark" size="lg" />
      <InfoSessionFlagship />
      <SectionDivider from="dark" to="muted" size="lg" />
      <Painpoints />
      <SectionDivider from="muted" to="white" />
      <WhyUs />
      <Process />
      <SectionDivider from="white" to="muted" />
      <StageFaq />
      <Phase2Roadmap />
      <SectionDivider from="muted" to="white" />
      <StageContact />
    </>
  );
}
