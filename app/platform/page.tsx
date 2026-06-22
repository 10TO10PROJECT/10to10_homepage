import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { TwoSided } from "@/components/sections/platform/TwoSided";
import { Agents } from "@/components/sections/platform/Agents";
import { Roadmap } from "@/components/sections/platform/Roadmap";
import { BetaInvite } from "@/components/sections/platform/BetaInvite";
import { Revenue } from "@/components/sections/platform/Revenue";
import { PlatformCta } from "@/components/sections/platform/PlatformCta";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "10to10 AI 플랫폼",
  description:
    "AI가 학원을 운영하고, 학부모를 안내합니다. SaaS + 학부모·학생 앱의 양면 플랫폼.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <SectionDivider from="white" to="muted" />
      <TwoSided />
      <Agents />
      <Roadmap />
      <SectionDivider from="muted" to="white" />
      <BetaInvite />
      <SectionDivider from="white" to="muted" />
      <Revenue />
      <SectionDivider from="muted" to="dark" size="lg" />
      <PlatformCta />
    </>
  );
}
