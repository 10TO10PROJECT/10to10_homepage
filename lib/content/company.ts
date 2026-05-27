export const COMPANY = {
  legalName: "Link Earth Inc.",
  brandName: "10to10",
  legalNote: "(사명 10to10으로 변경 예정)",
  ceo: "신현우",
  bizNo: "TBD",
  address: "TBD",
  email: "contact@10to10.co.kr",
  kakaoUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "#",
  careersUrl: "#",
  irPdfPath: "/ir/10to10-deck.pdf",
} as const;

export const COMPANY_STATS = [
  { value: "16+", label: "파트너 학원" },
  { value: "7", label: "팀원" },
  { value: "Beta", label: "정규 출시 7/28 예정" },
  { value: "지원", label: "Y-Compass · D2SF" },
] as const;

export const MARKET_STATS = [
  { value: "29.2조원", label: "국내 사교육 시장" },
  { value: "14만개+", label: "전국 학원" },
  { value: "맘카페", label: "정보가 흩어진 채" },
] as const;

export const VISION = {
  mission: "동네 학원과 학부모를 잇는 신뢰의 인프라를 만듭니다.",
  vision: "모든 학원이 자기 색을 갖고, 모든 학부모가 좋은 선택을 할 수 있도록.",
} as const;
