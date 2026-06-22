import { Hero } from "@/components/sections/Hero";
import { MarketStats } from "@/components/sections/MarketStats";
import { DualProducts } from "@/components/sections/DualProducts";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { MissionVision } from "@/components/sections/MissionVision";
import { MainCta } from "@/components/sections/MainCta";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider from="white" to="muted" />
      <MarketStats />
      <SectionDivider from="muted" to="white" />
      <DualProducts />
      <SectionDivider from="white" to="dark" size="lg" />
      <CompanyStats />
      <SectionDivider from="dark" to="white" size="lg" />
      <MissionVision />
      <MainCta />
    </>
  );
}
