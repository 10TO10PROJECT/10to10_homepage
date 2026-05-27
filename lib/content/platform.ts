export const PLATFORM_HERO = {
  title: "AI가 학원을 운영하고, 학부모를 안내합니다",
  sub: "학원 운영 SaaS + 학부모·학생 탐색 앱. 양면 플랫폼의 자동화 엔진을 만듭니다.",
} as const;

export const PLATFORM_TWO_SIDED = {
  parents: {
    title: "학부모·학생 — 탐색 에이전트",
    desc: "거리·과목·시간대·성향까지 고려해, 우리 아이에게 맞는 학원을 큐레이션합니다.",
    bullets: [
      "맘카페 검색 대신 정확한 학원 정보",
      "AI 상담으로 학원 선택 가이드",
      "예약·문의·커뮤니티 한 곳에서",
    ],
  },
  academies: {
    title: "학원 — 운영 에이전트",
    desc: "상담 요약·시간표·공지·재원 관리. 원장님의 손이 가야 했던 모든 운영을 AI가 거듭니다.",
    bullets: [
      "상담 채팅 → 핵심 요약 자동 생성",
      "시간표·강의실 충돌 자동 해소",
      "학원 톤에 맞춘 공지 초안 자동",
    ],
  },
} as const;

export const PLATFORM_AGENTS = [
  { title: "상담 자동 요약", desc: "학부모 채팅을 LLM이 핵심 요약 + 다음 액션 추천" },
  { title: "시간표 자동화", desc: "강사·강의실 충돌 자동 해소, 변경 알림 일괄 발송" },
  { title: "공지 생성", desc: "원장님 한 줄 요청 → 학원 톤의 공지 초안 자동 작성" },
  { title: "학원 비교", desc: "학부모용 — 거리·과목·시간대 기준 매칭 + 가격 비교" },
] as const;

export const PLATFORM_REVENUE = [
  { title: "SaaS 월정액", price: "월 8만", desc: "학원 운영 핵심 기능 (정규 v1.0)" },
  { title: "AI Agent 모듈", price: "월 3만", desc: "9월 정식 출시 예정" },
  { title: "학부모·학생 앱", price: "무료", desc: "탐색·예약·커뮤니티" },
] as const;

export const PLATFORM_ROADMAP = [
  { phase: "현재", label: "Beta 운영 중", sub: "eduflo.co.kr 에서 체험" },
  { phase: "2026-07-28", label: "정규 v1.0 출시", sub: "비AI 기능 완성판" },
  { phase: "2026-09", label: "AI Agent 탑재", sub: "v1.1 — Solar LLM 통합" },
] as const;

export const PLATFORM_BETA_URL = "https://eduflo.co.kr";
