import { STAGE_PRICING_PUBLIC } from "@/lib/content/stage";

const P = STAGE_PRICING_PUBLIC;

export type AddonId = (typeof P.addons)[number]["id"];

export interface EstimateInput {
  headcount: number;
  partner: boolean;
  /** 옵션별 수량 (0 = 선택 안 함) */
  addons: Partial<Record<AddonId, number>>;
}

export interface EstimateLine {
  label: string;
  amount: number;
}

export interface Estimate {
  headcount: number;
  lines: EstimateLine[];
  /** 모객 보장 환급 기준 금액 = 기본가 + 인원 추가분 − 파트너 할인 (선택 옵션 제외) */
  feeBase: number;
  addonTotal: number;
  total: number;
}

/** 고를 수 있는 보장 인원 — 10, 15, 20, 25, 30 */
export const HEADCOUNT_OPTIONS: number[] = Array.from(
  { length: (P.maxHeadcount - P.base.headcount) / P.step.headcount + 1 },
  (_, i) => P.base.headcount + i * P.step.headcount,
);

/** 범위 밖·단위가 안 맞는 인원은 가까운 선택지로 맞춘다 */
export function normalizeHeadcount(n: number): number {
  const clamped = Math.min(P.maxHeadcount, Math.max(P.base.headcount, n));
  const steps = Math.ceil((clamped - P.base.headcount) / P.step.headcount);
  return P.base.headcount + steps * P.step.headcount;
}

export function calcEstimate(input: EstimateInput): Estimate {
  const headcount = normalizeHeadcount(input.headcount);
  const extraSteps = (headcount - P.base.headcount) / P.step.headcount;
  const extra = extraSteps * P.step.price;
  const discount = input.partner ? P.partner.discount : 0;

  const lines: EstimateLine[] = [{ label: `기본가 (보장 ${P.base.headcount}명)`, amount: P.base.price }];
  if (extra > 0) lines.push({ label: `보장 인원 추가 (+${headcount - P.base.headcount}명)`, amount: extra });
  if (discount > 0) lines.push({ label: `${P.partner.label} 할인`, amount: -discount });

  let addonTotal = 0;
  for (const a of P.addons) {
    const qty = Math.min(P.addonMax, Math.max(0, Math.floor(input.addons[a.id] ?? 0)));
    if (qty === 0) continue;
    const amount = qty * a.price;
    addonTotal += amount;
    lines.push({ label: `${a.title} ${qty > 1 ? `${a.unit} × ${qty}` : a.unit}`, amount });
  }

  const feeBase = P.base.price + extra - discount;
  return { headcount, lines, feeBase, addonTotal, total: feeBase + addonTotal };
}

/** 1,150,000 → "115만 원" (만 원 단위가 아니면 쉼표 표기) */
export function formatWon(amount: number): string {
  const sign = amount < 0 ? "−" : "";
  const abs = Math.abs(amount);
  return abs % 10_000 === 0 ? `${sign}${abs / 10_000}만 원` : `${sign}${abs.toLocaleString("ko-KR")}원`;
}

/** 카톡에 붙여 넣을 견적 요약 */
export function estimateSummary(e: Estimate, partner: boolean): string {
  return [
    "[10to10 STAGE 견적]",
    `보장 인원 ${e.headcount}명${partner ? ` · ${P.partner.label}` : ""}`,
    ...e.lines.map((l) => `- ${l.label}: ${formatWon(l.amount)}`),
    `합계 ${formatWon(e.total)} (부가세 포함)`,
  ].join("\n");
}
