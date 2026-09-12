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
 * 공개 포트폴리오에는 실제 진행분만 싣는다.
 * 데모 학원(10to10 수학학원) 브랜딩으로 만든 샘플은 2026-09-12 전량 내림 —
 * 합격 실적·성적 향상 수치가 실제 실적이 아니어서 원장 대상 신뢰에 역효과.
 * 파일럿 설명회(2026.02) 실물 홍보물 파일을 받는 대로 이 배열을 채운다.
 * 데모 샘플은 공개 웹이 아니라 1:1 견적·미팅 자료에서 학원명을 바꿔 사용한다.
 */
export const PROMO_PORTFOLIO: readonly PromoPortfolioItem[] = [];

export const PROMO_NOTE =
  "* 2026.02 파일럿 설명회에서 실제 사용한 홍보물입니다.";
