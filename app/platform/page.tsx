import type { Metadata } from "next";
import { HomeGather } from "@/components/sections/home/HomeGather";
import { FeedAxes } from "@/components/sections/platform/FeedAxes";
import { SeminarHub } from "@/components/sections/platform/SeminarHub";
import { FounderStory } from "@/components/sections/platform/FounderStory";
import { ForWhom } from "@/components/sections/platform/ForWhom";
import { Roadmap } from "@/components/sections/platform/Roadmap";
import { PlatformCta } from "@/components/sections/platform/PlatformCta";

const TITLE = "텐투텐 — 나만을 위한 교육 정보, 학원 상담과 설명회 신청까지 한 번에!";
const DESCRIPTION =
  "입시 뉴스·학원 소식·설명회를 우리 아이 학년과 동네에 맞춰 모아 드리는 학부모·학생용 앱. 설명회 찾기부터 신청까지 한 곳에서.";

// openGraph는 레이아웃 값을 통째로 덮으므로 링크 공유(카카오톡 등)에 쓰이는 필드를 여기서 모두 적음. 썸네일은 같은 폴더 opengraph-image.png
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/platform" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/platform",
    siteName: "10to10",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/**
 * 섹션 맵: 히어로(AI 엄선 엔진 장면) → 학년 맞춤 소식(3축) → 설명회 모아보기 → 창업자 이야기 → 학부모·학생 → 로드맵 → 출시 소식 CTA
 * 11/18 CEO: 히어로를 메인의 'AI 엄선 엔진' 애니메이션 장면으로 교체(쏟아지는 소식 → 엔진이 학년·동네 맞춤만 골라 피드로 → 바로 신청).
 * 11/18 CEO: 페이지 전체를 메인 랜딩과 같은 템플릿(Mercury 다크 — 오닉스 캔버스·그래파이트 카드·알약 버튼)으로 통일.
 *   사이트 틀(lib/site-chrome.ts)도 어둡게, 투명 헤더 밑까지 어두운 바탕이 깔리도록 -mt-16 pt-16. 첫 문장이 이 페이지의 제목(h1).
 */
export default function PlatformPage() {
  return (
    <div className="m-dark -mt-16 bg-[var(--color-onyx)] pt-16 text-[var(--color-ivory)]">
      <HomeGather variant="platform" />
      <FeedAxes />
      <SeminarHub />
      <FounderStory />
      <ForWhom />
      <Roadmap />
      <PlatformCta />
    </div>
  );
}
