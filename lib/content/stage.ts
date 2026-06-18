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
  ctaPrimary: { label: "설명회 풀케어 견적 문의", href: "#contact" },
  ctaSecondary: { label: "패키지 함께 보기", href: "#packages" },
  note: "* 만족도 지표는 2026.02 EDUFLO 입시 설명회(응답자 21명) 실측 기준입니다.",
} as const;

export const STAGE_PROCESS = [
  { step: 1, title: "문의", desc: "폼 또는 카톡으로 신청" },
  { step: 2, title: "학원 인터뷰", desc: "원장님과 1:1 미팅, 컨셉 합의" },
  { step: 3, title: "자산 제작", desc: "1~2주 내 콘텐츠/디자인 준비" },
  { step: 4, title: "운영 시작", desc: "콘텐츠 송출 + 월간 리포트" },
] as const;

export const STAGE_FAQ = [
  {
    q: "광고비는 별도인가요?",
    a: "패키지 금액에는 10to10 운영·제작 비용이 포함됩니다. 네이버·구글 광고 매체비는 학원이 직접 결제하며, 권장 예산을 함께 제안드립니다.",
  },
  {
    q: "최소 계약 기간은?",
    a: "연 단위 구독을 기본으로 하며, 매월 정기 결제 형태로 운영합니다.",
  },
  {
    q: "콘텐츠 소유권은?",
    a: "제작된 모든 자산(콘텐츠/영상/디자인)은 학원에 귀속됩니다.",
  },
  {
    q: "오픈 기념 할인은 언제까지인가요?",
    a: "초기 파트너 학원 한정으로 베이직 89만원 → 49만원, 프리미엄 149만원 → 79만원에 제공해 드립니다. 할인 종료 후에도 가입 시점의 단가를 그대로 유지해 드립니다.",
  },
  {
    q: "설명회·블로그 구축은 따로 의뢰할 수 있나요?",
    a: "네. 설명회 풀케어, 블로그 신규 구축은 1회성 서비스로 별도 견적 진행합니다. 베이직·프리미엄 구독 중에도 추가 의뢰 가능합니다.",
  },
  {
    q: "여러 학원을 한 번에 맡길 수 있나요?",
    a: "가능합니다. 학원 1곳당 전담 인력이 배정되는 구조라, 학원 수에 비례해 운영 비용이 추가됩니다. 묶음 할인은 별도 안내드립니다.",
  },
] as const;

export const STAGE_PAINPOINTS = [
  {
    title: "광고비만 쓰고 결과는 학원이 알아서",
    desc: "기존 대행사는 광고만 집행하고, 콘텐츠·디자인·운영은 결국 원장님 몫입니다.",
  },
  {
    title: "케어 비용은 내는데, 진짜 케어는 없는",
    desc: "월 정액 받고 한 달에 회의 한 번. 학원에 맞춘 밀착 운영은 누구도 책임지지 않습니다.",
  },
  {
    title: "디자인·마케팅·콘텐츠 전부 따로",
    desc: "디자인은 외주, 광고는 대행사, 콘텐츠는 또 다른 곳. 합쳐서 보면 톤이 다 다릅니다.",
  },
] as const;

export const STAGE_WHY_US = [
  {
    title: "디자인부터 운영까지 한 팀",
    desc: "콘텐츠·디자인·플레이스·광고를 분리하지 않습니다. 결과물 톤이 일관되고, 의사결정이 빠릅니다.",
  },
  {
    title: "연세대·한양대 출신 마케팅 전문팀",
    desc: "광고만 돌리는 대행사가 아닙니다. 교육 시장과 학부모 심리를 이해하는 기획자가 직접 설계합니다.",
  },
  {
    title: "검색 첫인상 → 신뢰도 → 상담 전환",
    desc: "단발성 광고가 아닌, 학원이 검색되는 첫 순간부터 상담 신청까지 흐름 전체를 설계합니다.",
  },
] as const;

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
