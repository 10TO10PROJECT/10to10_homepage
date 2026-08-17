export const COMPANY = {
  legalName: "Link Earth Inc.",
  brandName: "10to10",
  ceo: "신현우",
  bizNo: "154-01-03674",
  address: "TBD",
  email: "stage@10to10.kr",
  // 임시(2026-08-17): 카카오 비즈니스 상호 변경 심사로 채널 채팅 차단 → 오픈채팅방 하드코딩 우회 (env 오버라이드도 잠시 무시).
  // 심사 완료 후 `process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/_dAxggn/chat"`로 복원할 것.
  kakaoUrl: "https://open.kakao.com/o/sSNmmm2h",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  careersUrl: "/careers",
  irPdfPath: "/ir/10to10-deck.pdf",
} as const;

export const COMPANY_STATS = [
  { value: "16+", label: "파트너 학원" },
  { value: "8", label: "팀원" },
  { value: "Beta", label: "정규 v1.0 · 2026 하반기" },
  { value: "선정", label: "모두의 창업" },
] as const;

export const MARKET_STATS = [
  { value: "29.2조원", label: "국내 사교육 시장" },
  { value: "14만개+", label: "전국 학원" },
  { value: "맘카페·블로그", label: "정보가 흩어진 채" },
] as const;

export const VISION = {
  mission: "동네 학원과 학부모를 잇는 신뢰의 인프라를 만듭니다.",
  vision:
    "모든 학원이 본연의 교육관을 효율적으로 담아낼 수 있도록, 모든 학부모가 좋은 선택을 할 수 있도록.",
} as const;
