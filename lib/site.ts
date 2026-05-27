const PLACEHOLDER = "https://10to10.co.kr";

export const SITE = {
  name: "10to10",
  description:
    "동네 학원의 모든 것, 10to10이 바꿉니다. AI 플랫폼과 운영 파트너십으로 학원·학부모·학생을 연결합니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || PLACEHOLDER,
  ogImage: "/opengraph-image",
  locale: "ko_KR",
} as const;
