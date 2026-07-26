import { Hero } from "@/components/sections/Hero";
import { MarketStats } from "@/components/sections/MarketStats";
import { DualProducts } from "@/components/sections/DualProducts";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { MissionVision } from "@/components/sections/MissionVision";
import { MainCta } from "@/components/sections/MainCta";
import { StickyCta } from "@/components/ui/StickyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketStats />
      <DualProducts />
      <CompanyStats />
      <MissionVision />
      <MainCta />
      <StickyCta formHref="/stage#contact" />
    </>
  );
}
