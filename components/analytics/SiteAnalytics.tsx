"use client";

import { Analytics } from "@vercel/analytics/next";
import { channelPageviewUrl } from "@/lib/prereg-source";

/** Vercel 웹 통계 — 채널 주소(?utm_source=…)로 들어온 방문은 /utm/<채널>로 기록해 채널별 방문 수를 '페이지' 통계에서 센다(lib/prereg-source.ts) */
export function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => (event.type === "pageview" ? { ...event, url: channelPageviewUrl(event.url) } : event)}
    />
  );
}
