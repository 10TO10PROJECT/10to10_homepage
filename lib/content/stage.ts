export const STAGE_PRICING = {
  basic: {
    id: "basic",
    name: "베이직",
    fromPrice: "80만",
    fromPriceLabel: "월 80만부터",
    annualNote: "연 단위 약정 · 매월 정기 결제",
    badge: null as string | null,
    includes: [
      "학원 인터뷰 + 컨셉 정리",
      "공식 블로그 1포스트/주",
      "기본 광고 세팅",
      "월간 리포트 1회",
    ],
  },
  premium: {
    id: "premium",
    name: "프리미엄",
    fromPrice: "200만",
    fromPriceLabel: "월 200만부터",
    annualNote: "연 단위 약정 · 매월 정기 결제",
    badge: "BEST" as string | null,
    includes: [
      "베이직 전체",
      "숏폼 4편/월",
      "전단지 디자인 + 인쇄",
      "현장 운영 지원 (월 1회)",
      "PPT 영업자료",
      "전담 매니저",
    ],
  },
} as const;

export const STAGE_OPTIONS = [
  { id: "blog", title: "블로그 운영", desc: "주 1회 정기 포스팅 + SEO" },
  { id: "ads", title: "디지털 광고", desc: "네이버·구글 학원 키워드" },
  { id: "shorts", title: "숏폼 제작", desc: "릴스·쇼츠 월 4편" },
  { id: "leaflet", title: "전단지", desc: "디자인 + 인쇄 + 배포 전략" },
  { id: "ppt", title: "영업 PPT", desc: "학원 설명회용 자료" },
  { id: "onsite", title: "현장 운영", desc: "설명회·이벤트 진행 지원" },
] as const;

export const STAGE_PROCESS = [
  { step: 1, title: "문의", desc: "폼 또는 카톡으로 신청" },
  { step: 2, title: "학원 인터뷰", desc: "원장님과 1:1 미팅, 컨셉 합의" },
  { step: 3, title: "자산 제작", desc: "1~2주 내 콘텐츠/광고 준비" },
  { step: 4, title: "광고 ON", desc: "광고 송출 + 월간 리포트" },
] as const;

export const STAGE_FAQ = [
  {
    q: "광고비는 별도인가요?",
    a: "패키지 금액에는 10to10 운영 비용이 포함됩니다. 광고 매체비(네이버/구글)는 학원이 직접 결제하며, 권장 예산을 함께 제안드립니다.",
  },
  {
    q: "최소 계약 기간은?",
    a: "연 단위 약정을 기본으로 하며, 매월 정기 결제 형태로 운영합니다.",
  },
  { q: "콘텐츠 소유권은?", a: "제작된 모든 자산(블로그/영상/디자인)은 학원에 귀속됩니다." },
  { q: "정산 방식은?", a: "매월 초 세금계산서 발행 후 익월 결제입니다." },
  {
    q: "여러 학원을 한 번에 맡길 수 있나요?",
    a: "가능합니다. 다만 학원 1곳당 전담 매니저가 배정되는 구조라, 추가 학원은 학원 수에 비례해 운영 비용이 추가됩니다. 통합 리포트와 학원 묶음 할인은 별도로 안내드립니다.",
  },
] as const;

export const STAGE_PAINPOINTS = [
  {
    title: "마케팅 전담 직원 채용 부담",
    desc: "월 250만+ 인건비, 채용·관리 리스크가 큽니다.",
  },
  {
    title: "기존 광고대행사의 일회성 캠페인",
    desc: "광고비만 받고 학원 영업은 학원이 직접 해야 합니다.",
  },
  {
    title: "원장님이 영업까지 직접",
    desc: "수업·운영에 집중하지 못하고 결국 학원 성장이 멈춥니다.",
  },
] as const;
