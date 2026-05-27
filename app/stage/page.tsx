import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { Packages } from "@/components/sections/stage/Packages";
import { Options } from "@/components/sections/stage/Options";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { StageContact } from "@/components/sections/stage/StageContact";

export const metadata: Metadata = {
  title: "10to10 STAGE — 학원 영업 위탁",
  description:
    "학원 홍보, 운영팀이 대신합니다. 콘텐츠·광고·현장 운영까지 패키지로. 베이직 80만부터, 프리미엄 200만부터.",
};

export default function StagePage() {
  return (
    <>
      <StageHero />
      <Painpoints />
      <Packages />
      <Options />
      <Process />
      <StageFaq />
      <StageContact />
    </>
  );
}
