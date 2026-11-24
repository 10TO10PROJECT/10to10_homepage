import type { PREREG_GRADES } from "@/lib/schema/prereg";

type Grade = (typeof PREREG_GRADES)[number];

/**
 * 출시 알림 신청 직후 완료 화면에서 바로 드리는 학년별 자료집(11/24 CEO: "신청 즉시 자료집" · "학년을 고르도록").
 * 광고 2회(방문 약 150회)에 신청이 1건뿐이라 '지금 받는 것'을 붙였다. 전부 이미 공개해 둔 텐투텐 자료다.
 * paidAd: 자료 안에 학원 설명회 광고 칸이 있는 것 — 받기 전에 '유료 광고 포함'을 보여 준다.
 * 자료가 없는 학년(초1~3, 중2, 고1·2)은 가장 가까운 학년 자료를 드리고 note로 그 사실을 적는다.
 */
export type PreregMaterial = { title: string; href: string; note?: string; paidAd?: boolean };

const KINDER: PreregMaterial = {
  title: "2027 유치원 비교 가이드",
  href: "https://10to10-research-desk.vercel.app/share/EpG8ZtZOuRkFGIxqqqRyFLkGuT8mj4BIocfK7uWhGUE",
};
const ELEM_ROADMAP: PreregMaterial = {
  title: "초등 4·5·6학년 수학 로드맵 자료집",
  href: "https://momentous-text-564.notion.site/4-5-6-413f122eb1e481939592e78379e97290",
  paidAd: true,
};
const MID_GEOMETRY: PreregMaterial = {
  title: "예비 중1 · 중학교 도형 맛보기 자료집",
  href: "https://momentous-text-564.notion.site/1-41ff122eb1e4817a8f6cdf7cdf044d05",
  paidAd: true,
};
const WINTER_MANUAL: PreregMaterial = {
  title: "예비 고1 겨울방학 매뉴얼",
  href: "https://momentous-text-564.notion.site/404f122eb1e4815fbf9bccda20b40782",
};
const SCHOOL_NOTE: PreregMaterial = {
  title: "고등학교 비교 노트",
  href: "https://momentous-text-564.notion.site/1-48df122eb1e482a58ece01a62c8bfdf2",
};
const SUNEUNG: PreregMaterial = {
  title: "2027 수능 주요 문항 분석 자료집",
  href: "https://momentous-text-564.notion.site/2027-41ff122eb1e48159aa65e0e1377cc524",
};

export const PREREG_MATERIALS: Record<Grade, readonly PreregMaterial[]> = {
  "유치·미취학": [KINDER],
  "초1~3": [{ ...ELEM_ROADMAP, note: "초등 고학년 자료예요. 미리 읽어 두시면 좋아요." }],
  초4: [ELEM_ROADMAP],
  초5: [ELEM_ROADMAP],
  초6: [MID_GEOMETRY, ELEM_ROADMAP],
  중1: [MID_GEOMETRY],
  중2: [{ ...MID_GEOMETRY, note: "중1 도형 자료예요. 복습용으로 보시면 좋아요." }],
  중3: [WINTER_MANUAL, SCHOOL_NOTE],
  고1: [{ ...SUNEUNG, note: "올해 수능 문항이에요. 미리 보는 용도로 읽어 보세요." }],
  고2: [{ ...SUNEUNG, note: "올해 수능 문항이에요. 미리 보는 용도로 읽어 보세요." }],
  고3: [SUNEUNG],
  "N수·기타": [SUNEUNG],
};
