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
  badge: "FLAGSHIP · 메인 1회성 상품",
  headline: "설명회만 잘 열어도,\n학원의 1년이 달라집니다.",
  subhead:
    "기획부터 디자인·모객·쿠폰·현장 운영·등록률 트래킹까지. 학원장님은 무대 위에서 발표만 하시면 됩니다.",
  metrics: [
    { value: "4.32", unit: "/ 5.0", label: "평균 만족도" },
    { value: "100%", unit: "", label: "재참석 의사" },
    { value: "95.2%", unit: "", label: "추천 의사" },
    { value: "75%", unit: "", label: "후속 설명회 희망" },
  ],
  stages: [
    {
      step: "01",
      title: "기획 · 컨셉 설계",
      desc: "타깃 학년·학부모 페르소나 설정, 세션 구성, MC 대본, 연사 큐시트까지 전체 흐름 설계.",
    },
    {
      step: "02",
      title: "디자인 · 인쇄물",
      desc: "포스터·현수막·안내책자·세션 자료·MC 큐카드 등 브랜드 톤 일관된 디자인 + 인쇄 진행.",
    },
    {
      step: "03",
      title: "모객 · 디지털 마케팅",
      desc: "오픈채팅방 · 인스타 · 학부모 카페 · 지역 광고 통합 운영. 신청 폼·랜딩 페이지 제작.",
    },
    {
      step: "04",
      title: "디지털 쿠폰 발급",
      desc: "참석자 한정 무료 레벨테스트·상담 쿠폰 자동 발급. 지류 쿠폰 없이 모바일에서 끝.",
    },
    {
      step: "05",
      title: "현장 운영 총괄",
      desc: "MC 진행, 등록 데스크, 세션별 시간 관리, 사진·영상 기록, Q&A 운영까지 전담팀 배치.",
    },
    {
      step: "06",
      title: "등록률 트래킹 리포트",
      desc: "설명회 후 쿠폰 사용 → 상담 예약 → 등록까지 전 과정을 데이터로 추적. 실제 ROI를 숫자로 증명.",
    },
  ],
  differentiators: [
    "광고대행사·이벤트사가 못 하는 학원장 인터뷰 기반 컨셉 설계",
    "디자인부터 현장까지 한 팀이 일관된 톤으로 운영",
    "쿠폰·등록률 데이터를 학원에 그대로 귀속 — 다음 설명회 기획의 자산",
  ],
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
  note: "* 만족도 지표는 2026.02 EDUFLO 입시 설명회(응답자 21명) 실측 기준입니다.",
} as const;

/* ─── Phase 1 설명회 풀케어 — BM v1 확정 수치 (SSOT: docs/plans/2026-07-27-stage-bm-v1.md) ─── */

/** 심리 3 — 문제 공감 선행. 상품 소개보다 먼저 나온다. */
export const STAGE_PAINPOINTS = [
  {
    title: "블로그도 인스타도 하는데, 등록은 안 늘어요",
    desc: "온라인 홍보는 '인지'까지만 만듭니다. 학부모의 등록 결정은 원장님과 강사진을 직접 보는 순간 생깁니다.",
  },
  {
    title: "설명회, 좋은 건 아는데 엄두가 안 나요",
    desc: "기획·모객·자료·현장·후속까지 전부 원장님 몫이 되니까요. 수업하면서 행사까지 만들 시간은 없습니다.",
  },
  {
    title: "대행 맡겨도, 결과는 아무도 책임 안 져요",
    desc: "광고만 집행하고 빠지는 대행. 성과 데이터도, 모객 책임도 남지 않는 경험을 이미 해보셨을 겁니다.",
  },
] as const;

/** 심리 2 — 구체성 = 신뢰. 문장이 아니라 계산 과정으로. (수치 락 — 임의 변경 금지) */
export const STAGE_ROI = {
  eyebrow: "ROI CALCULATION",
  headline: "감이 아니라, 계산입니다.",
  subhead: "설명회 하루가 학원의 한 학기를 바꿉니다.",
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
      label: "예상 학원 매출",
      note: "6명 × 월 원비 40만 × 최소 재원 3개월",
    },
  ],
  footnote:
    "* 모객 20명·전환 30%·월 원비 40만 원·재원 3개월 — 전 구간 보수적 가정 기준입니다. 실제 자체 설명회 모객 실적은 47명입니다.",
} as const;

/** 심리 6·4 — 해자 4축 (BM v1 §1-1). WhyUs 섹션 데이터. */
export const STAGE_MOATS = [
  {
    no: "01",
    title: "계산되는 ROI",
    desc: "\"감이 아니라 계산입니다 — 720만 원.\" 모객→등록→매출 전 과정을 숫자로 설계하고, 끝나면 리포트로 증명합니다.",
  },
  {
    no: "02",
    title: "연사 초청 절감",
    desc: "시가 80만 원 수준의 입시 컨설턴트 강연을 파트너 협의가 50만 원에 모십니다. 실제 강연 실적이 있는 검증된 연사입니다.",
    strike: { before: "시가 80만 원", after: "50만 원" },
  },
  {
    no: "03",
    title: "홍보와 모객의 일원화",
    desc: "자체 플랫폼을 통한 모객·데이터 집계, 그리고 전문 홍보팀의 홍보까지 — 창구 하나로 일관되게 움직입니다.",
  },
  {
    no: "04",
    title: "현장 운영 전담",
    desc: "당일 접수부터 상담 연결까지 전담 팀이 현장에 있습니다. 원장님은 설명회를 통해 학부모에게 학원을 가장 효과적으로 알리게 됩니다.",
  },
] as const;

/** 심리 1 — 손실 회피. 가격보다 눈에 띄게. (✅GO — CEO 확정 2026-07-26, 문구 락) */
export const STAGE_GUARANTEE = {
  eyebrow: "모객 보장",
  headline: "신청 20명을 못 채우면,\n부족한 만큼 돌려드립니다.",
  sub: "목표 미달 1인당 5만 원 환급 (대행료의 최대 50%) · 세부 기준은 계약 시 안내",
} as const;

/** 심리 7 — 노력 최소화. 학원 할 일은 '발표·자료 전달' 2개뿐임을 시각화. */
export const STAGE_PROCESS = [
  {
    step: 1,
    title: "문의 · 사전진단",
    desc: "카톡 3분 상담 → 학원 홍보 현황 무료 진단과 견적 안내",
    academy: null,
  },
  {
    step: 2,
    title: "킥오프 (D-30)",
    desc: "컨셉·타깃·일정 확정. 커리큘럼·강사진 자료만 전달해 주세요",
    academy: "원장님: 자료 전달",
  },
  {
    step: 3,
    title: "모객 · 제작",
    desc: "인스타·당근·오픈챗·지역 카페 모객 + 발표자료·자료집·현수막 제작",
    academy: null,
  },
  {
    step: 4,
    title: "현장 + 리포트 (D+3)",
    desc: "전담 팀 현장 운영 → 3일 내 신청·참석·상담·등록 성과 리포트",
    academy: "원장님: 발표, 끝",
  },
] as const;

/** FAQ 확정 6문항 (개편안 v2 §4 — 카피 락) */
export const STAGE_FAQ = [
  {
    q: "비용은 어떻게 되나요?",
    a: "규모별 견적으로 안내드리며, 오픈 파트너 1·2호 학원 한정 특별가를 운영 중입니다.",
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
  slots: "8월 진행 슬롯 2곳",
  deadline: "준비 기간 30일 — 8월 개최는 이번 주 상담을 권합니다.",
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
