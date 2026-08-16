export const STAGE_PRICING = {
  basic: {
    id: "basic",
    name: "베이직",
    fromPrice: "49만",
    priceUnit: "원 / 연",
    annualNote: "연 단위 구독료 · 매월 정기 결제",
    badge: null as string | null,
    discountBadge: "오픈 기념 할인" as string | null,
    originalPrice: "89만" as string | null,
    tagline: "학원 운영을 받쳐주는 기본 마케팅 패키지",
    areas: [
      {
        title: "학원 소개 콘텐츠",
        items: [
          "정보형 / 성적 인증 콘텐츠",
          "강사·커리큘럼 소개",
          "후기·성적 향상 사례",
        ],
      },
      {
        title: "네이버 플레이스 세팅",
        items: ["썸네일·소개글 / 소식 배너", "세팅 홍보 / 적용 목업"],
      },
      {
        title: "시즌별 홍보 자료",
        items: ["중간·기말 성과 홍보", "방학 특강 / 개강 홍보"],
      },
      {
        title: "월간 운영 리포트",
        items: ["유입·전환 / 문의 유형", "다음 달 운영 제안"],
      },
    ],
  },
  premium: {
    id: "premium",
    name: "프리미엄",
    fromPrice: "79만",
    priceUnit: "원 / 연",
    annualNote: "연 단위 구독료 · 매월 정기 결제",
    badge: "BEST" as string | null,
    discountBadge: "오픈 기념 할인" as string | null,
    originalPrice: "149만" as string | null,
    tagline: "디자인·콘텐츠·광고까지 전담 매니저 1:1 케어",
    areas: [
      {
        title: "베이직 전체 포함",
        items: ["학원 소개 / 플레이스 / 시즌별 / 리포트"],
      },
      {
        title: "숏폼 콘텐츠",
        items: ["릴스·쇼츠 정기 제작", "월간 콘텐츠 캘린더 운영"],
      },
      {
        title: "디지털 광고 운영",
        items: ["네이버·구글 키워드 광고", "광고 성과 리뷰"],
      },
      {
        title: "전담 매니저",
        items: ["월 1회 결과 리뷰 미팅", "긴급 이슈 즉시 대응"],
      },
    ],
  },
} as const;

export const STAGE_ONE_TIME = [
  {
    id: "blog-build",
    title: "블로그 구축 서비스",
    desc: "공식 블로그 신규 구축 · 키워드 설계 · 초기 발행 세팅.",
    priceLabel: "견적 문의",
    highlight: true,
  },
  {
    id: "offline-print",
    title: "오프라인 제작물",
    desc: "QR 안내판 · 포스터 · 전단지 · 안내책자 · 교재 커버. 학원 상황에 맞춰 별도 견적.",
    priceLabel: "견적 문의",
    highlight: false,
  },
] as const;

export const INFO_SESSION = {
  badge: "FLAGSHIP · 설명회 풀케어",
  headline: "10to10 STAGE는\n이렇게 준비해 드립니다.",
  subhead: "원장님은 발표와 상담에만 집중하세요.",
  numbersHead: {
    eyebrow: "다시 오고 싶은 설명회, 이유가 있습니다",
    headline: "숫자로 보는 설명회의 가능성",
  },
  metrics: [
    { value: "4.3", unit: "/ 5", label: "만족도" },
    { value: "100%", unit: "", label: "재참석 의사" },
    { value: "95.2%", unit: "", label: "추천 의사" },
    { value: "47명", unit: "", label: "모객 실적" },
    { value: "75%", unit: "", label: "재참여 희망" },
  ],
  stages: [
    {
      step: "01",
      title: "기획부터 탄탄하게",
      desc: "학원 사전진단 · 컨셉/타깃 설계 · 준비 일정표 · 업무 분담.",
    },
    {
      step: "02",
      title: "디자인도 한 번에",
      desc: "발표자료 PPT + 자료집 30부 + 안내물 디자인.",
    },
    {
      step: "03",
      title: "온라인 모객&관리도 당연히",
      desc: "인스타그램 · 당근 · 카카오 오픈채팅 · 카페 + 신청 폼 관리.",
    },
    {
      step: "04",
      title: "간편한 디지털 쿠폰 발급",
      desc: "참석자 한정 상담&레벨테스트 쿠폰 자동 발급 (10to10 연계).",
    },
    {
      step: "05",
      title: "설명회 현장도 걱정 마세요",
      desc: "전담 2인 배치 — 접수 · 진행 · 안내 · 체크인.",
    },
    {
      step: "06",
      title: "사후 관리까지 올인원",
      desc: "상담 연결 · 성과 리포트 (신청 → 참석 → 상담 → 등록 전환).",
    },
  ],
  ownerTasks: {
    headline: "원장님께선 세 가지만 해주세요",
    items: ["커리큘럼 & 강사진 자료 전달", "설명회 당일 발표", "상담 응대"],
  },
  photos: [
    {
      src: "/info-session/01-hall-wide.jpg",
      alt: "설명회 현장 — 학부모 가득 찬 강의실",
      caption: "학부모 가득 찬 현장",
    },
    {
      src: "/info-session/02-speaker-female.jpg",
      alt: "여성 연사 — 학교별 수업 자료 세션",
      caption: "전문 연사 섭외",
    },
    {
      src: "/info-session/03-speaker-male.jpg",
      alt: "이경보 원장 — 입시 컨설팅 세션",
      caption: "입시 컨설턴트 세션",
    },
    {
      src: "/info-session/04-booklet.jpg",
      alt: "EDUFLO 브랜드 안내책자 · 인쇄물",
      caption: "브랜드 일관 인쇄물",
    },
    {
      src: "/info-session/05-hall-app.jpg",
      alt: "10to10 앱 안내 세션 — 현장",
      caption: "10to10 앱 연동 안내",
    },
  ],
  testimonial: {
    quote: "다양한 강의가 너무 좋았습니다. 또 참석하고 싶어요.",
    source: "참석 학부모 · 자유의견 발췌",
  },
  ctaPrimary: { label: "카톡으로 3분 상담", href: "kakao" },
  ctaSecondary: { label: "견적 폼 작성하기", href: "#contact" },
  note: "2026.02 EDUFLO 입시 설명회, 응답 21명  |  설명회 규모와 지역에 따라 결과는 달라질 수 있습니다.",
} as const;

/* ─── Phase 1 설명회 풀케어 — BM v1 확정 수치 (SSOT: docs/plans/2026-07-27-stage-bm-v1.md) ─── */

/** 심리 3 — 문제 공감 선행 (브로슈어 P2 TOP3 정합). */
export const STAGE_PAINPOINTS = [
  {
    title: "성과가 불확실하다 보니... 맡길 엄두가 나지 않아요",
    desc: "대행사에 맡겨도 돈은 돈대로 깨지고, 결과는 보장받지 못하는 불확실함에 고민하시는 원장님.",
  },
  {
    title: "블로그, 카페... 다 해보는데 등록은 왜 늘지 않을까요?",
    desc: "학원 인지도는 있지만, 등록으로 이어지지 않는 침체기에 계신 원장님.",
  },
  {
    title: "설명회가 좋은 건 알지만... 준비할 시간이 없어요",
    desc: "수업, 상담, 학원 운영까지 하시느라 시간이 늘 부족해 힘이 드시는 원장님.",
  },
] as const;

/** 브로슈어 P2 하단 — 원인 3키워드 + 다리 선언 */
export const STAGE_BRIDGE = {
  headline: "원장님의 잘못이 아닙니다.",
  sub: "홍보와 상담 사이를 잇는 다리가 없었을 뿐",
  causes: [
    { keyword: "인지", desc: "온라인 홍보의 한계성" },
    { keyword: "시간", desc: "설명회까지 신경쓰기 부족" },
    { keyword: "신뢰", desc: "대행사의 책임 부재" },
  ],
  closer: "그 다리가 되는 방법, 설명회입니다.",
} as const;

/** 심리 2 — 구체성 = 신뢰 (브로슈어 P3 정합 · 수치 락 — 임의 변경 금지) */
export const STAGE_ROI = {
  eyebrow: "왜 온라인 홍보만으로는 부족한 걸까요?",
  headline: "감이 아닌 계산으로 증명합니다.",
  subhead: "학부모는 원장님을 직접 본 순간 등록을 결정합니다.",
  trust: {
    value: "74.2%",
    label: "학원을 '방문 상담'으로 판단하는 학부모 — 맘카페·블로그 후기(22.7%)의 3배",
    source: "출처: 대교 에듀베이션, 학부모 1,550명 조사 (2024)",
  },
  steps: [
    {
      value: 20,
      suffix: "명",
      label: "설명회 모객",
      note: "자체 실적 47명 → 보수적 하향",
    },
    {
      value: 6,
      suffix: "명",
      label: "신규 등록",
      note: "등록 전환율 30% — 학원장 인터뷰 수집 데이터",
    },
    {
      value: 720,
      suffix: "만 원",
      label: "예상 매출",
      note: "매출 가정: 등록 6명 × 월 원비 40만 원 × 최소 재원 3개월",
    },
  ],
  footnote:
    "* 모객 20명·전환 30%·월 원비 40만 원·재원 3개월은 계산을 위한 보수적 가정입니다. 실제 지역, 학원 규모, 원비, 참석률에 따라 결과는 달라질 수 있습니다.",
  closer: "이 계산을 실제로 만들어내려면, 무엇을 준비해야 할까요?",
} as const;

/** 차별화 3종 (2026-08-05 김재훈 멘토링 ④-5: 싸다 / 올인클루시브 / 성과 책임) */
export const STAGE_MOATS = [
  {
    no: "01",
    title: "합리적인 가격",
    desc: "자체 모객 채널과 AI 제작 공정으로 원가를 낮췄습니다. 기획·디자인·모객·현장을 따로 맡기면 100만 원이 넘는 일을, 하나로 묶어 더 낮은 가격에 제공합니다.",
  },
  {
    no: "02",
    title: "콘텐츠 제작비 올인클루시브",
    desc: "발표자료 PPT, 자료집 30부, 안내물 디자인, 모바일 쿠폰, 성과 리포트까지 기본가에 전부 포함입니다. 추가 옵션도 전 항목 정찰제 — 숨은 비용이 없습니다.",
  },
  {
    no: "03",
    title: "성과 책임",
    desc: "신청 20명을 못 채우면 부족한 만큼 돌려드립니다. 끝나면 신청→참석→상담→등록 전환이 담긴 성과 리포트를 3일 내 드립니다. 도입 리스크는 저희가 집니다.",
  },
] as const;

/** 신뢰도 섹션 — 히어로 직후 (멘토링 ④-3). 파트너 로고 + 실적 스트립 */
export const STAGE_TRUST = {
  eyebrow: "TRUSTED BY",
  headline: "숫자와 파트너가 증명합니다.",
  stats: [
    { value: "20곳", label: "업무협약(MOU) 학원" },
    { value: "3,600%", label: "설명회 ROAS", note: "표준 시나리오 환산*" },
    { value: "100%", label: "재참석 의사", note: "2026.02 실측 · 응답 21명" },
  ],
  partners: [
    {
      src: "/trust/moduchangup.png",
      alt: "모두의창업 로고",
      label: "모두의창업 1기 선정팀",
    },
    {
      src: "/trust/alphabrothers.png",
      alt: "알파브라더스 로고",
      label: "멘토 기관 · 알파브라더스",
    },
    {
      src: "/trust/highway.png",
      alt: "하이웨이 합격연구소 로고",
      label: "연사 공급 파트너 · 하이웨이 합격연구소",
    },
  ],
  footnote:
    "* ROAS: 설명회 1회 모객 광고비 약 20만 원 대비 표준 시나리오 매출 720만 원 환산 기준. 회차별 실측치를 계속 쌓아 공개합니다.",
} as const;

/** 팀 크레덴셜 섹션 — 차별화 뒤 (멘토링 레퍼런스: 그로스파이낸스 대표 실명 크레덴셜 / abbg '파트너' 클로징) */
export const STAGE_TEAM = {
  eyebrow: "WHO WE ARE",
  headline: "입시 현장에서 자란 팀이\n직접 만들고, 직접 뜁니다.",
  ceo: {
    name: "신현우",
    role: "대표",
    lines: [
      "동탄에서 자란 동탄 키즈 — 석우중·반송고 졸업",
      "연세대학교 재학",
      "(주)하이컨시(시대인재) 서바이벌 모의고사 출제 이력",
      "메가스터디 국어 강사 조교 · 스파르타 입시연구소 입시 컨설팅 조교",
      "5년차 입시 과외",
    ],
  },
  team: {
    title: "기획·개발·디자인·마케팅이 한 테이블에 앉는 팀",
    desc: "설명회를 남의 손에 맡기지 않고 직접 주최해 완주해 본 팀입니다. 홍보물 디자인부터 신청 폼 개발, 현장 운영까지 전 공정을 내부에서 소화합니다.",
  },
  closer: "저희는 외주업체가 아니라, 학원의 다음 학기를 함께 설계하는 파트너입니다.",
} as const;

/** 심리 1 — 손실 회피. 가격보다 눈에 띄게. (✅GO — CEO 확정 2026-07-26, 문구 락) */
export const STAGE_GUARANTEE = {
  eyebrow: "모객 보장",
  headline: "신청 20명을 못 채우면,\n부족한 만큼 돌려드립니다.",
  sub: "목표 미달 1인당 5만 원 환급 (대행료의 최대 50%) · 세부 기준은 계약 시 안내",
} as const;

/** 브로슈어 P7 — 표준 30일 진행 절차. 단계별 '원장님께 드리는 요청' 말풍선 정합. */
export const STAGE_PROCESS = [
  {
    step: 1,
    timing: "상담 신청 시",
    title: "사전진단 · 견적 안내",
    desc: "홍보 현황 무료 진단, 견적 안내",
    academy: "원장님, 5분만 시간 내주세요!",
  },
  {
    step: 2,
    timing: "D-30",
    title: "설명회 기획",
    desc: "컨셉·타깃 설정, 일정 확정",
    academy: "원장님, 커리큘럼·강사진 자료 전달해 주세요!",
  },
  {
    step: 3,
    timing: "~ D-1",
    title: "모객 · 제작",
    desc: "모객 채널 운영, 발표자료·홍보물 제작",
    academy: "원장님, 자료 검토 부탁드려요!",
  },
  {
    step: 4,
    timing: "당일 ~ D+3",
    title: "현장 · 리포트",
    desc: "현장 운영, 신청·참석·상담·등록 리포트",
    academy: "원장님, 발표와 상담만 해주세요!",
  },
] as const;

/** 가격 공개 (브로슈어 P6 정합 — 2026-08-02 가격 공개 정책 전환). VAT 별도. */
export const STAGE_PRICING_PUBLIC = {
  eyebrow: "'견적은 문의 주세요'? NO.",
  headline: "투명하게,\n숨기지 않고 알려드립니다.",
  standard: {
    label: "정식가",
    price: "100만 원",
    includes: ["기획", "디자인", "마케팅(모객)", "모바일 쿠폰", "현장 운영", "성과 리포트"],
    note: "학원 규모(예상 인원·세션 수)에 따라 추가 금액이 발생할 수 있습니다.",
  },
  promo: {
    label: "프로모션 가격 · 파트너 1·2호 한정",
    price: "50만 원",
    original: "100만 원",
    sub: "제공 항목 6종 동일 · 성공 사례 공개 동의 조건",
    consent:
      "학원명·성과 데이터 활용 / 현장 촬영 / 원장 후기 인터뷰 (게시 전 학원 최종 확인권 보장)",
  },
  /* 브로슈어 0816 P6 선택 항목 표와 1:1 정합 — 단가 임의 변경 금지 */
  options: [
    { name: "외부 연사 초청", price: "50만 원", note: "시가 80만 → 50만 · 입시 컨설턴트" },
    { name: "유료 광고 집행", price: "10만~30만 원", note: "정액 3종 · 당근·인스타·카페 등" },
    { name: "자료집 업그레이드", price: "8만 원", note: "고급 제본 · 30부 초과 증부 10부당 +2만 원" },
    {
      name: "인쇄물 패키지",
      price: "X배너 3만/개 · 현수막 3만/장",
      note: "포스터(A2) 2만/10매 · 전단 5만/500매 · 디자인·인쇄까지 제공 (배포는 학원 진행)",
    },
    { name: "우편 발송", price: "1,500원/통", note: "준등기 2,500원 · 최소 30통" },
    { name: "추가 현장 인력", price: "15,000원/시간", note: "최소 4시간(6만 원) · 40명 이상 모집 시" },
  ],
  footnote: "모든 금액은 VAT 별도입니다.",
} as const;

/** FAQ 확정 6문항 (개편안 v2 §4 — 카피 락) */
export const STAGE_FAQ = [
  {
    q: "비용은 어떻게 되나요?",
    a: "정식가 100만 원(VAT 별도)이며, 오픈 파트너 1·2호 학원 한정 50만 원 특별가를 운영 중입니다. 학원 규모에 따라 추가 금액이 발생할 수 있고, 세부 기준은 가격 안내와 견적서에서 확인하실 수 있습니다.",
  },
  {
    q: "모객이 안 되면 어떡하죠?",
    a: "신청 20명을 못 채우면, 부족한 만큼 돌려드립니다. 목표 미달 1인당 5만 원 환급(대행료의 최대 50%), 세부 기준은 계약 시 안내드립니다.",
  },
  {
    q: "입시 연사도 초청할 수 있나요?",
    a: "시가 80만 원 수준의 입시 컨설턴트를 파트너 협의가 50만 원에 모십니다.",
  },
  {
    q: "준비 기간은 얼마나 걸리나요?",
    a: "표준 30일, 협의 시 3주까지 압축 가능합니다.",
  },
  {
    q: "학원에서 준비할 건 뭔가요?",
    a: "발표, 그리고 커리큘럼·강사진 자료 전달. 그게 전부입니다.",
  },
  {
    q: "끝나면 뭘 받나요?",
    a: "신청→참석→상담→등록 전환까지 담긴 성과 리포트를 3일 내 드립니다. 데이터는 학원에 귀속됩니다.",
  },
] as const;

/** 심리 8 — 희소성·긴급성. 이 두 개만, 남발 금지. */
export const STAGE_URGENCY = {
  slots: "파트너 1·2호 모집 중",
  deadline: "준비 기간 30일, 빠른 진행을 원하신다면? 지금 바로 5분만 상담해 보세요!",
  openSale: "오픈 파트너 1·2호 학원 한정 특별가 운영 중",
} as const;

export const STAGE_GALLERY = [
  {
    src: "/stage-mockups/04-results.jpg",
    alt: "입시 결과 / 성적 상승 — 결과로 증명합니다",
    label: "입시 결과 콘텐츠",
    span: "tall" as const,
  },
  {
    src: "/stage-mockups/01-instructor.jpg",
    alt: "강사 소개 · 커리큘럼 디자인",
    label: "강사·커리큘럼",
    span: "tall" as const,
  },
  {
    src: "/stage-mockups/08-grade1.jpg",
    alt: "내신부터 수능까지 확실한 1등급 비법",
    label: "성적 인증 / 학생 추천 매트릭스",
    span: "tall" as const,
  },
  {
    src: "/stage-mockups/11-summer.png",
    alt: "2026 여름방학특강 포스터",
    label: "시즌별 특강 홍보물",
    span: "tall" as const,
  },
  {
    src: "/stage-mockups/03-100points.jpg",
    alt: "또 100점, 또 1등 — 성적 인증 홍보",
    label: "성적 인증 콘텐츠",
    span: "square" as const,
  },
  {
    src: "/stage-mockups/06-trophy.jpg",
    alt: "SKY 200명 · 의대 10명 · 성적 상승률 100%",
    label: "학원 신뢰 콘텐츠",
    span: "square" as const,
  },
  {
    src: "/stage-mockups/02-app-chat.jpg",
    alt: "10to10 AI — 챗봇 상담 + 설명회 예약",
    label: "10to10 AI · 상담 예약",
    span: "square" as const,
  },
  {
    src: "/stage-mockups/07-mobile-page.png",
    alt: "모바일 학원 페이지 — 10to10 노출 화면",
    label: "10to10 학원 페이지",
    span: "square" as const,
  },
] as const;
