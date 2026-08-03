const CANONICAL_URL = "https://10to10.kr";

export const SITE = {
  name: "10to10",
  description:
    "학부모가 직접 방문하는 설명회는 등록으로 이어지는 가장 확실한 퍼널입니다. 설명회 하루가 학원의 한 학기를 바꿉니다. 홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리까지 10to10 STAGE 전담팀이 대신합니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || CANONICAL_URL,
  canonicalUrl: CANONICAL_URL,
  ogImage: "/opengraph-image.png",
  locale: "ko_KR",
} as const;
