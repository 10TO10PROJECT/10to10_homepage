const CANONICAL_URL = "https://10to10.kr";

export const SITE = {
  name: "10to10",
  description:
    "학부모가 직접 방문하는 설명회는 등록으로 이어지는 가장 확실한 퍼널입니다. 기획·모객·디자인·현장 운영·성과 리포트까지, 10to10 STAGE가 풀케어합니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || CANONICAL_URL,
  canonicalUrl: CANONICAL_URL,
  ogImage: "/opengraph-image.png",
  locale: "ko_KR",
} as const;
