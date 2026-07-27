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

export const PROMO_PORTFOLIO = [
  {
    src: "/stage-mockups/11-summer.png",
    alt: "2026 여름방학특강 포스터 — 시즌 모집 디자인",
    label: "시즌 특강 포스터",
    aspect: "portrait",
  },
  {
    src: "/promo/signage-mockup.jpg",
    alt: "10to10 수학학원 간판 사이니지 목업",
    label: "간판 · 사이니지",
    aspect: "square",
  },
  {
    src: "/stage-mockups/03-100points.jpg",
    alt: "또 100점, 또 1등 — 성적 인증 포스터",
    label: "성적 인증 포스터",
    aspect: "portrait",
  },
  {
    src: "/stage-mockups/04-results.jpg",
    alt: "입시 결과·성적 향상 후기 카드뉴스",
    label: "입시 결과 카드뉴스",
    aspect: "portrait",
  },
  {
    src: "/stage-mockups/01-instructor.jpg",
    alt: "강사 소개·커리큘럼 카드뉴스",
    label: "강사 · 커리큘럼 소개",
    aspect: "portrait",
  },
  {
    src: "/promo/leveltest-card.jpg",
    alt: "무료 레벨테스트 신청 카드뉴스 — QR 전환 디자인",
    label: "신청 전환 카드뉴스",
    aspect: "square",
  },
  {
    src: "/stage-mockups/08-grade1.jpg",
    alt: "내신부터 수능까지 확실한 1등급 비법 — 타깃 모집 카드뉴스",
    label: "타깃 모집 카드뉴스",
    aspect: "portrait",
  },
  {
    src: "/stage-mockups/12-place-setting-pitch.jpg",
    alt: "학원 네이버 플레이스 세팅 안내 콘텐츠",
    label: "네이버 플레이스 세팅",
    aspect: "portrait",
  },
] as const;

export const PROMO_NOTE =
  "* 포트폴리오는 데모 학원 브랜딩(10to10 수학학원)으로 제작한 자체 디자인 샘플입니다.";
