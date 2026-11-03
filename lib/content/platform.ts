// 텐투텐 앱 페이지 — 학부모·학생 중심 (2026-11 개편: 학원 운영 SaaS·AI Agent 모듈·요금 표기 폐기)
// 일정(11/21 등)·출시 방식·수익 모델은 내부 결정 사항이라 비노출. 새 기능은 "업데이트 예정"으로만 표기.

export const PLATFORM_HERO = {
  eyebrow: "텐투텐 앱 · 학부모·학생용",
  sub: "입시 뉴스, 학원 소식, 설명회까지. 우리 아이 학년과 동네에 맞춰 모아 드립니다. 찾아보는 것부터 설명회 신청까지, 앱 하나로 끝냅니다.",
  trust: "중소벤처기업부 「모두의 창업」 1기 3라운드 진출 · 동탄 기반 대학생 팀",
} as const;

/** 히어로 배경 콜라주 — 텐투텐이 직접 진행한 설명회 현장·포스터(메인 페이지에 이미 공개된 실물만) */
export const PLATFORM_HERO_COLLAGE = [
  [
    { src: "/info-session/01-hall-wide.jpg", w: 4, h: 3 },
    { src: "/promo/feb-main-poster.jpg", w: 1000, h: 1415 },
    { src: "/info-session/06-rebirth-desk.jpg", w: 4, h: 3 },
    { src: "/promo/oct-review-01.jpg", w: 4, h: 5 },
  ],
  [
    { src: "/promo/oct-rebirth-poster.jpg", w: 4, h: 5 },
    { src: "/info-session/03-speaker-male.jpg", w: 4, h: 3 },
    { src: "/info-session/07-rebirth-session.jpg", w: 4, h: 3 },
    { src: "/promo/feb-speaker-leekyungbo.jpg", w: 1000, h: 1415 },
  ],
  [
    { src: "/info-session/05-hall-app.jpg", w: 16, h: 9 },
    { src: "/promo/feb-senior-mom.jpg", w: 1000, h: 1415 },
    { src: "/info-session/02-speaker-female.jpg", w: 4, h: 3 },
    { src: "/info-session/04-booklet.jpg", w: 4, h: 3 },
  ],
] as const;

export const PLATFORM_HERO_COLLAGE_CAPTION = "배경 사진 · 텐투텐이 직접 진행한 설명회 현장과 포스터 (2026.02 · 2026.10)";

/** 피드 화면 예시 — 실제 학원명·수치 대신 일반 예시만 사용 */
export const PLATFORM_FEED_MOCK = {
  location: "동탄",
  grade: "예비 고1",
  tabs: ["추천", "입시뉴스", "학원소식", "설명회"],
  hero: {
    tags: ["입시뉴스", "예비 고1"],
    title: "고1부터 바뀌는 내신 5등급제, 지금 알아둘 3가지",
    summary: "등급 구간과 학교별 평가 방식을 한 번에 정리했어요.",
    source: "출처 · 교육부 발표 정리",
  },
  items: [
    { tag: "설명회", title: "OO수학학원 예비 고1 학부모 설명회", meta: "토 오후 2시 · 신청 마감 D-3" },
    { tag: "학원소식", title: "OO영어 겨울방학 특강 모집 시작", meta: "동탄 · 중3·예비 고1" },
    { tag: "입시뉴스", title: "중3 겨울방학, 고교 선택 체크리스트", meta: "텐투텐 정리 · 3분" },
  ],
} as const;

/** 개인화 3축 — 카테고리 · 학년 · 지역 */
export const PLATFORM_AXES = [
  {
    no: "01",
    title: "카테고리",
    desc: "입시 뉴스, 학원 소식, 설명회. 보고 싶은 소식만 골라 받습니다.",
    chips: ["입시 뉴스", "학원 소식", "설명회"],
    active: ["입시 뉴스", "학원 소식", "설명회"],
  },
  {
    no: "02",
    title: "학년",
    desc: "자녀 학년을 한 번만 설정하면, 그 학년에 필요한 소식이 먼저 보입니다.",
    chips: ["중2", "중3", "예비 고1", "고1", "고2"],
    active: ["예비 고1"],
  },
  {
    no: "03",
    title: "지역",
    desc: "우리 동네 학교와 학원 소식을 먼저. 동탄에서 시작합니다.",
    chips: ["동탄"],
    active: ["동탄"],
  },
] as const;

export const PLATFORM_FEED_POINTS = [
  {
    title: "오늘 꼭 볼 소식은 큰 카드로",
    desc: "학년과 시기에 맞는 소식 하나를 크게 보여 드리고, 나머지는 짧게 훑어볼 수 있게 정리합니다.",
  },
  {
    title: "출처를 함께 적습니다",
    desc: "누가, 언제 발표한 내용인지 출처와 대상 학년을 붙여 전합니다.",
  },
  {
    title: "Powered by 10to10",
    desc: "동탄에서 학원 설명회를 직접 기획·운영해 온 텐투텐이 만듭니다.",
  },
] as const;

/** 설명회 모아보기 뒤에 비치는 실제 포스터·후기 게시물 — 10to10 표기 실물만(2026.10) */
export const PLATFORM_SEMINAR_POSTERS = [
  { src: "/promo/oct-rebirth-poster.jpg", w: 4, h: 5 },
  { src: "/promo/oct-review-01.jpg", w: 4, h: 5 },
] as const;

export const PLATFORM_SEMINAR_POSTERS_CAPTION =
  "뒤 포스터 · 2026.10 리버스수학학원 예비 고1 설명회 모객 포스터와 후기 게시물 (실제 게시본)";

/** 설명회 모아보기 — 예시 카드. 학원명은 실제 이름 대신 OO 처리 */
export const PLATFORM_SEMINARS = [
  { title: "OO수학학원 예비 고1 학부모 설명회", target: "예비 고1", when: "토 오후 2시", due: "신청 마감 D-3" },
  { title: "OO국어 중등 서술형 대비 설명회", target: "중2·중3", when: "일 오전 11시", due: "신청 마감 D-7" },
] as const;

export const PLATFORM_SEMINAR_POINTS = [
  "동네 학원·학교 설명회를 날짜와 대상 학년별로 한눈에",
  "설명회 날짜에 맞춰 신청 마감일도 함께 표시",
  "신청은 각 설명회의 원래 신청 폼으로 바로 연결",
] as const;

/** 창업자 이야기 — 약력은 STAGE_TEAM(SSOT)에서 가져옴. 인용은 대표 본인이 공개한 쓰레드 글(@10to10.kr, 2026.10)만 사용, 선우님 일화·발언은 지어 쓰지 않음 */
export const PLATFORM_FOUNDERS = {
  eyebrow: "Founders' Story",
  headline: "석우중·반송고 나온 두\u00A0사람이\n동탄 후배들을 위해 만든 것이 시작입니다.", // 모바일에서 "두 사람이"가 갈라지지 않도록 줄바꿈 없는 공백
  story: [
    "텐투텐 대표 신현우와 COO 최선우는 동탄에서 같은 중학교와 고등학교를 다녔습니다. 두 사람 모두 대학에 진학한 뒤에도 입시 과외와 학습 튜터로 학생들을 가르쳐 왔습니다.",
    "2026년 2월과 10월에는 동탄의 학원과 함께 설명회를 직접 열어 학부모님들을 만났습니다. 학부모님들과 이야기를 나누며 필요한 교육 정보를 찾기가 쉽지 않다는 것을 알게 되었고, 그래서 지금은 정보방과 인스타그램에서 소식을 정리해 전하고 있습니다.",
  ],
  quote: {
    lead: "중3 수학 100점이었는데,\n고1 첫 시험은 36점이었어요.",
    body: "중3 겨울에는 “고등학교도 이 정도겠지” 했거든요.",
    by: "신현우 대표",
    source: "텐투텐 쓰레드 @10to10.kr 중에서",
  },
  photo: {
    src: "/info-session/08-rebirth-ceo-talk.jpg",
    alt: "2026년 10월 리버스수학학원 예비 고1 설명회 2부에서 '반송고 출신 연대생이 이야기해주는 실전 학습팁'을 발표하는 신현우 대표",
    caption: "2026.10.09 · 리버스수학학원 예비 고1 설명회 2부, 신현우 대표 세션",
  },
  closer: "이제 텐투텐 앱으로, 우리 동네부터 전국까지 수많은 교육 정보 가운데 학생에게 꼭 필요한 것만 골라 알려 드릴 수 있습니다.",
} as const;

export const PLATFORM_AUDIENCE = {
  parents: {
    label: "학부모님께",
    title: "학년별 입시 소식과 동네 설명회, 놓치지 않게",
    bullets: [
      "자녀 학년에 맞는 입시·학교 소식",
      "가까운 설명회 일정과 신청 마감일",
      "대상 학년 · 날짜 · 출처를 붙인 정리 글",
    ],
  },
  students: {
    label: "학생에게",
    title: "선배가 정리한 학교·입시 이야기",
    bullets: [
      "동탄 고교 선택과 내신 준비 정보",
      "학년별로 지금 챙길 것 정리",
      "인스타그램 @10to10.kr 에서 먼저 공개",
    ],
  },
} as const;

/** 학부모·학생 카드 상단 사진 — 학부모=설명회 현장, 학생=인스타그램 실제 게시물 */
export const PLATFORM_AUDIENCE_MEDIA = {
  parents: {
    src: "/info-session/01-hall-wide.jpg",
    caption: "2026.02 동탄 콜라보 설명회 · 학부모님들과 만난 현장",
  },
  students: {
    posts: ["/promo/oct-review-01.jpg", "/promo/oct-review-04.jpg", "/promo/oct-review-06.jpg"],
    caption: "@10to10.kr 실제 게시물 · 2026.10 설명회 후기",
  },
} as const;

export const PLATFORM_ROADMAP = [
  {
    phase: "지금",
    label: "정보방·인스타그램에서 먼저 전합니다",
    sub: "동탄 교육·입시 정보방(카카오톡)과 인스타그램에서 학교·설명회 소식을 정리해 전하고 있습니다.",
  },
  {
    phase: "곧",
    label: "텐투텐 앱 출시",
    sub: "학원·설명회 탐색과 신청을 앱 하나로. 스토어 출시를 준비하고 있습니다.",
  },
  {
    phase: "업데이트 예정",
    label: "학년 맞춤 소식 피드 · 설명회 모아보기",
    sub: "앱 홈이 우리 아이 학년·동네 맞춤 소식으로 바뀌고, 동네 설명회를 한곳에서 볼 수 있습니다.",
  },
] as const;

/** 마무리 CTA 배경 — 설명회 스크린에 앱 화면을 띄운 현장 */
export const PLATFORM_CTA_PHOTO = {
  src: "/info-session/05-hall-app.jpg",
  caption: "배경 사진 · 2026.02 동탄 콜라보 설명회, 스크린에 앱 화면을 띄운 현장",
} as const;

export const PLATFORM_INFO_ROOM_URL = "https://open.kakao.com/o/pgC72bSi";
export const PLATFORM_INSTAGRAM_URL = "https://www.instagram.com/10to10.kr/";
export const PLATFORM_BETA_URL = "https://www.10to10.ai.kr";
