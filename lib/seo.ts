import { SITE } from "@/lib/site";
import { STAGE_FAQ } from "@/lib/content/stage";

/** 사이트 전역 — 조직 정보 (구글 지식패널·네이버 사이트 정보) */
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "10to10",
  alternateName: ["텐투텐", "10to10 STAGE"],
  url: SITE.canonicalUrl,
  logo: `${SITE.canonicalUrl}/brand/symbol-mint.svg`,
  description: SITE.description,
  areaServed: "KR",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "eduflo365@gmail.com",
    availableLanguage: "Korean",
  },
} as const;

/** 사이트 전역 — 웹사이트 정보 */
export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "10to10",
  url: SITE.canonicalUrl,
  inLanguage: "ko",
} as const;

/** 메인 — 설명회 풀케어 서비스 (가격 공개 정책 락: 정식가 100만·특별가 50만) */
export const STAGE_SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "10to10 STAGE 학원 설명회 풀케어",
  serviceType: "학원 설명회 대행",
  description:
    "학원 설명회의 기획·모객·디자인·현장 운영·성과 리포트까지 원스톱 대행. 신청 20명 목표 미달 시 부족 인원만큼 환급하는 모객 보장.",
  provider: { "@type": "Organization", name: "10to10", url: SITE.canonicalUrl },
  areaServed: { "@type": "Country", name: "대한민국" },
  offers: [
    {
      "@type": "Offer",
      name: "설명회 풀케어 정식가",
      price: "1000000",
      priceCurrency: "KRW",
    },
    {
      "@type": "Offer",
      name: "오픈 파트너 1·2호 특별가",
      price: "500000",
      priceCurrency: "KRW",
    },
  ],
} as const;

/** 메인 — FAQ 리치 결과 (STAGE_FAQ 콘텐츠 SSOT에서 생성) */
export const STAGE_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: STAGE_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/** 검색 키워드 (네이버는 keywords 메타를 참고, 구글은 무시하지만 무해) */
export const SITE_KEYWORDS = [
  "학원 설명회",
  "학원 설명회 대행",
  "설명회 대행",
  "학원 모객",
  "학원 마케팅",
  "학원 홍보",
  "신입생 모집",
  "학원 신규생 유치",
  "학원 컨설팅",
  "10to10",
  "텐투텐",
  "10to10 STAGE",
];
