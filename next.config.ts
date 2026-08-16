import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // STAGE가 메인 랜딩으로 승격됨 (2026-08-02 브로슈어 기반 리빌딩)
      { source: "/stage", destination: "/", permanent: true },
      // 채용·투자·팀·IR 페이지 제거 (2026-08-16 멘토링 반영 — 랜딩 목적 집중)
      { source: "/team", destination: "/", permanent: false },
      { source: "/careers", destination: "/", permanent: false },
      { source: "/invest", destination: "/", permanent: false },
      { source: "/ir-deck", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
