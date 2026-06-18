import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { WhyUs } from "@/components/sections/stage/WhyUs";
import { StageGallery } from "@/components/sections/stage/StageGallery";
import { Packages } from "@/components/sections/stage/Packages";
import { Options } from "@/components/sections/stage/Options";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { StageContact } from "@/components/sections/stage/StageContact";

export const metadata: Metadata = {
  title: "10to10 STAGE — 학원 마케팅, 결과로 증명합니다",
  description:
    "광고비만 쓰고 끝났던 마케팅, 이번엔 결과로 증명합니다. 연세대·한양대 출신 마케팅 전문팀이 디자인·콘텐츠·플레이스 운영까지 학원 마케팅 전 과정을 직접 운영합니다. 베이직 연 49만, 프리미엄 오픈 할인 연 79만.",
};

export default function StagePage() {
  return (
    <>
      <StageHero />
      <Painpoints />
      <WhyUs />
      <StageGallery />
      <Packages />
      <Options />
      <Process />
      <StageFaq />
      <StageContact />
    </>
  );
}
