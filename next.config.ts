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
      // 앱 사전 예약 채널 주소(11/21 게시: 10to10.kr/?utm_source=insta#prereg 등)는 사전 예약 전용 페이지로 (11/22 CEO).
      // 인스타 인앱 브라우저에서 메인의 #prereg 위치로 바로 넘어가지 않았기 때문. 쿼리(utm_source)는 그대로 따라가고,
      // 해시(#prereg)는 브라우저가 붙여 가며 /prereg에서는 맨 위 섹션이 그 id라 첫 화면 그대로 보인다.
      {
        source: "/",
        has: [{ type: "query", key: "utm_source", value: "(?:chat|insta|threads|ad)" }],
        destination: "/prereg",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
