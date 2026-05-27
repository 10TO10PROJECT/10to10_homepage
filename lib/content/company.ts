export const COMPANY = {
  legalName: "Link Earth Inc.",
  brandName: "10to10",
  ceo: "신현우",
  bizNo: "154-01-03674",
  address: "TBD",
  email: "eduflo365@gmail.com",
  kakaoUrl:
    process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/_dAxggn/chat",
  careersUrl: "/careers",
  irPdfPath: "/ir/10to10-deck.pdf",
} as const;

export const COMPANY_STATS = [
  { value: "16+", label: "파트너 학원" },
  { value: "8", label: "팀원" },
  { value: "Beta", label: "정규 출시 7/28 예정" },
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
