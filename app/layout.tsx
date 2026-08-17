import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "@/lib/site";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { KakaoFab } from "@/components/ui/KakaoFab";
import { StickyCta } from "@/components/ui/StickyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ORGANIZATION_JSONLD, WEBSITE_JSONLD, SITE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.canonicalUrl),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  keywords: SITE_KEYWORDS,
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NAVER_SITE_VERIFICATION
      ? { other: { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION } }
      : {}),
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.canonicalUrl,
    siteName: SITE.name,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-[color:var(--color-ink-900)]">
        <JsonLd data={ORGANIZATION_JSONLD} />
        <JsonLd data={WEBSITE_JSONLD} />
        <SiteChrome>{children}</SiteChrome>
        <KakaoFab />
        <StickyCta />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
