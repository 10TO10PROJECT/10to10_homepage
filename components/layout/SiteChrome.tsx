"use client";

import { usePathname } from "next/navigation";
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

  return (
    <>
      <TrustRibbon tone={tone} />
      <Header tone={tone} />
      <main>{children}</main>
      <Footer tone={tone} />
    </>
  );
}
