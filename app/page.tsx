import { Hero } from "@/components/sections/Hero";
import { StatRow } from "@/components/sections/StatRow";
import { RoiBoard } from "@/components/sections/stage/RoiBoard";
import { PromoShowcase } from "@/components/sections/PromoShowcase";
import { DualProducts } from "@/components/sections/DualProducts";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { MissionVision } from "@/components/sections/MissionVision";
import { MainCta } from "@/components/sections/MainCta";
import { StickyCta } from "@/components/ui/StickyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatRow />
      <RoiBoard cta={{ href: "/stage", label: "설명회 풀케어 자세히 보기" }} />
      <PromoShowcase />
      <DualProducts />
      <SiteGallery />
      <CompanyStats />
      <MissionVision />
      <MainCta />
      <StickyCta formHref="/stage#contact" />
    </>
  );
}
