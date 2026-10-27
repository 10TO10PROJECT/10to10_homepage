/** 모객·홍보 로직 + 홍보팀 디자인 포트폴리오 (해자 ③ 홍보물·홍보 일원화의 증거) */

export const PROMO_LOGIC = {
  eyebrow: "Promotion Logic",
  headline: "모객에도 설계도가 있습니다.",
  subhead:
    "잘 만든 포스터 한 장이 아니라, 타깃 설계부터 신청 전환까지 이어지는 흐름이 모객을 만듭니다. 10to10 홍보팀이 전 과정을 한 톤으로 설계합니다.",
  steps: [
    {
      no: "01",
      title: "타깃 설계",
      desc: "학년·상권·학부모 페르소나를 분석해 학원마다 다른 메시지를 잡습니다.",
    },
    {
      no: "02",
      title: "채널 운영",
      desc: "인스타·당근·오픈채팅·지역 카페를 동시에 운영해 도달을 쌓습니다.",
    },
    {
      no: "03",
      title: "홍보물 제작",
      desc: "포스터·카드뉴스·자료집·현수막까지 학원 브랜드 톤으로 직접 디자인합니다.",
    },
    {
      no: "04",
      title: "신청 전환",
      desc: "QR·신청 폼·리마인드 메시지로 '본 사람'을 '신청자'로 바꿉니다.",
    },
  ],
} as const;

export type PromoPortfolioItem = {
  src: string;
  alt: string;
  label: string;
  aspect: "square" | "portrait";
};

/**
 * 공개 포트폴리오 = 실제 진행분만 (데모 학원 샘플은 2026-09-12 전량 내림).
 * 2026-10-20 CEO 지시로 실물 교체: 2026.02 콜라보 설명회 포스터 +
 * 2026.10.09 리버스수학학원 설명회 모객 포스터·후기 인스타 캐러셀(8장).
 * 원본: 사업 자료/홍보자료/컨퍼런스 포스터 · docs/stage/2026-10-09-rebirth
 */
export const PROMO_PORTFOLIO: readonly PromoPortfolioItem[] = [
  {
    src: "/promo/feb-main-poster.jpg",
    alt: "2026.02 동탄 입시 전략 설명회 메인 포스터 — EDUFLO x 더나은국어학원",
    label: "메인 포스터 · 2026.02 입시 전략 설명회",
    aspect: "portrait",
  },
  {
    src: "/promo/feb-speaker-leekyungbo.jpg",
    alt: "연사 세션 홍보 포스터 — 이경보 대표 '교육과정의 변화는 곧 기회입니다'",
    label: "연사 세션 포스터 · 입시 컨설턴트",
    aspect: "portrait",
  },
  {
    src: "/promo/feb-speaker-kimjonghwan.jpg",
    alt: "연사 세션 홍보 포스터 — 김종환 대표",
    label: "연사 세션 포스터 · 학습법 특강",
    aspect: "portrait",
  },
  {
    src: "/promo/feb-senior-mom.jpg",
    alt: "선배맘 토크 세션 홍보 포스터",
    label: "세션 포스터 · 선배맘 토크",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-rebirth-poster.jpg",
    alt: "2026.10.09 리버스수학학원 예비고1 설명회 모객 포스터 (인스타그램 피드)",
    label: "모객 포스터 · 2026.10 리버스수학학원 설명회",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-01.jpg",
    alt: "리버스수학학원 설명회 후기 인스타그램 캐러셀 1 — 표지 '동탄 4개 고교 수학 전면 분석'",
    label: "후기 캐러셀 ① 표지",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-02.jpg",
    alt: "후기 캐러셀 2 — 현장 준비",
    label: "후기 캐러셀 ② 현장 준비",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-03.jpg",
    alt: "후기 캐러셀 3 — 1부 원장님 세션",
    label: "후기 캐러셀 ③ 원장님 세션",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-04.jpg",
    alt: "후기 캐러셀 4 — 같은 A, 다른 위치",
    label: "후기 캐러셀 ④ 같은 A, 다른 위치",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-05.jpg",
    alt: "후기 캐러셀 5 — 2부 대표 세션",
    label: "후기 캐러셀 ⑤ 대표 세션",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-06.jpg",
    alt: "후기 캐러셀 6 — 겨울방학 3가지",
    label: "후기 캐러셀 ⑥ 겨울방학 3가지",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-07.jpg",
    alt: "후기 캐러셀 7 — 학부모님 설문",
    label: "후기 캐러셀 ⑦ 학부모님 설문",
    aspect: "portrait",
  },
  {
    src: "/promo/oct-review-08.jpg",
    alt: "후기 캐러셀 8 — 다음 소식",
    label: "후기 캐러셀 ⑧ 다음 소식",
    aspect: "portrait",
  },
];

export const PROMO_NOTE =
  "* 2026.02 콜라보 설명회와 2026.10 리버스수학학원 설명회에서 실제 사용·게시한 홍보물입니다.";
