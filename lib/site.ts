const CANONICAL_URL = "https://10to10.kr";

export const SITE = {
  name: "10to10",
  // 2026-11-09~10: 메인이 STAGE·텐투텐 앱을 함께 소개하는 랜딩으로 바뀌어 회사 단위 설명으로 교체 (STAGE 설명은 app/stage/page.tsx)
  description:
    "학생을 위한 교육 정보를 모으고, 그 정보를 나누는 자리, 설명회를 엽니다. 텐투텐(10to10)은 학부모·학생에게는 AI가 학년과 동네에 맞춰 엄선한 교육 정보를 전하는 텐투텐 앱을, 학원에는 등록으로 이어지는 설명회 풀케어 10to10 STAGE를 만듭니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || CANONICAL_URL,
  canonicalUrl: CANONICAL_URL,
  ogImage: "/opengraph-image.png",
  locale: "ko_KR",
} as const;
