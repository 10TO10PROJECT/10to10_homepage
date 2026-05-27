import { Hero } from "@/components/sections/Hero";
import { MarketStats } from "@/components/sections/MarketStats";
import { DualProducts } from "@/components/sections/DualProducts";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { TeamVision } from "@/components/sections/TeamVision";
import { CareersStrip } from "@/components/sections/CareersStrip";
import { MainCta } from "@/components/sections/MainCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketStats />
      <DualProducts />
      <CompanyStats />
      <TeamVision />
      <CareersStrip />
      <MainCta />
    </>
  );
}
