import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { FeedAxes } from "@/components/sections/platform/FeedAxes";
import { SeminarHub } from "@/components/sections/platform/SeminarHub";
import { ForWhom } from "@/components/sections/platform/ForWhom";
import { Roadmap } from "@/components/sections/platform/Roadmap";
import { PlatformCta } from "@/components/sections/platform/PlatformCta";

export const metadata: Metadata = {
  title: "텐투텐 앱 — 우리 동네 교육 정보, 학년에 맞춰 한 곳에",
  description:
    "입시 뉴스·학원 소식·설명회를 우리 아이 학년과 동네에 맞춰 모아 드리는 학부모·학생용 앱. 설명회 찾기부터 신청까지 한 곳에서.",
};

/** 섹션 맵: 히어로(피드 예시) → 학년 맞춤 소식(3축) → 설명회 모아보기 → 학부모·학생 → 로드맵 → 출시 소식 CTA */
export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <FeedAxes />
      <SeminarHub />
      <ForWhom />
      <Roadmap />
      <PlatformCta />
    </>
  );
}
