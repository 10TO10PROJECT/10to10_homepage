"use client";

import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TrustRibbon } from "./TrustRibbon";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const chromeless = pathname?.startsWith("/ir-deck");
  // 메인(통합 랜딩)만 다크 — 상단 띠·헤더·푸터도 같은 어두운 톤으로 맞춤
  const tone = pathname === "/" ? "dark" : "light";

  if (chromeless) {
    return <main>{children}</main>;
  }

  // reducedMotion="user": 기기에서 '동작 줄이기'를 켠 분께는 framer의 이동·크기 애니메이션을 생략(첫 화면 하이드레이션 중에도)
  return (
    <MotionConfig reducedMotion="user">
      <TrustRibbon tone={tone} />
      <Header tone={tone} />
      <main>{children}</main>
      <Footer tone={tone} />
    </MotionConfig>
  );
}
