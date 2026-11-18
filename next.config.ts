import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /stage → / 리디렉트(2026-08-02, STAGE가 메인이던 시절)는 2026-11-09 삭제 — 메인은 통합 랜딩, STAGE 랜딩이 다시 /stage.
      // 그때의 308은 일부 브라우저에 캐시돼 있을 수 있어, 메인의 옛 앵커 이동(StageHashRedirect)에 반복 방지를 둠.
      // 채용·투자·팀·IR 페이지 제거 (2026-08-16 멘토링 반영 — 랜딩 목적 집중)
      { source: "/team", destination: "/", permanent: false },
      { source: "/careers", destination: "/", permanent: false },
      { source: "/invest", destination: "/", permanent: false },
      { source: "/ir-deck", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
