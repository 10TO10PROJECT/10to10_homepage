"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TrustRibbon } from "./TrustRibbon";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const chromeless = pathname?.startsWith("/ir-deck");

  if (chromeless) {
    return <main>{children}</main>;
  }

  return (
    <>
      <TrustRibbon />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
