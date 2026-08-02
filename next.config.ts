import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // STAGE가 메인 랜딩으로 승격됨 (2026-08-02 브로슈어 기반 리빌딩)
      { source: "/stage", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
