import { Hero } from "@/components/sections/Hero";
import { RoiBoard } from "@/components/sections/stage/RoiBoard";
import { DualProducts } from "@/components/sections/DualProducts";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { MissionVision } from "@/components/sections/MissionVision";
import { MainCta } from "@/components/sections/MainCta";
import { StickyCta } from "@/components/ui/StickyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <RoiBoard cta={{ href: "/stage", label: "설명회 풀케어 자세히 보기" }} />
      <DualProducts />
      <CompanyStats />
      <MissionVision />
      <MainCta />
      <StickyCta formHref="/stage#contact" />
    </>
  );
}
