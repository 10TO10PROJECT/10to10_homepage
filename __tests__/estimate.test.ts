import { describe, it, expect } from "vitest";
import { calcEstimate, estimateSummary, formatWon, HEADCOUNT_OPTIONS, normalizeHeadcount } from "@/lib/estimate";

// 2026-11-08 CEO 확정 가격: 보장 10명 기본가 100만, 5명마다 +15만(최대 30명), 초기 파트너는 기본가에서 50만 할인.
// 선택 옵션: 연사 1명 50만 · 자료집 30부 10만 · 다과 30인분 10만. 모두 부가세 포함. 환급 기준은 옵션 제외.
describe("STAGE estimate", () => {
  it("offers guarantee headcounts from 10 to 30 in steps of 5", () => {
    expect(HEADCOUNT_OPTIONS).toEqual([10, 15, 20, 25, 30]);
  });

  it("charges the base price for 10 and adds 15만 per extra 5 people", () => {
    expect(calcEstimate({ headcount: 10, partner: false, addons: {} }).total).toBe(1_000_000);
    expect(calcEstimate({ headcount: 15, partner: false, addons: {} }).total).toBe(1_150_000);
    expect(calcEstimate({ headcount: 30, partner: false, addons: {} }).total).toBe(1_600_000);
  });

  it("takes 50만 off the base for early partners but keeps the headcount steps", () => {
    expect(calcEstimate({ headcount: 10, partner: true, addons: {} }).total).toBe(500_000);
    expect(calcEstimate({ headcount: 15, partner: true, addons: {} }).total).toBe(650_000);
    expect(calcEstimate({ headcount: 30, partner: true, addons: {} }).total).toBe(1_100_000);
  });

  it("adds options on top and keeps them out of the refund base", () => {
    const e = calcEstimate({ headcount: 20, partner: true, addons: { speaker: 1, print: 2, snack: 1 } });
    expect(e.feeBase).toBe(800_000);
    expect(e.addonTotal).toBe(500_000 + 200_000 + 100_000);
    expect(e.total).toBe(1_600_000);
  });

  it("clamps out-of-range headcounts and option quantities", () => {
    expect(normalizeHeadcount(3)).toBe(10);
    expect(normalizeHeadcount(12)).toBe(15);
    expect(normalizeHeadcount(99)).toBe(30);
    expect(calcEstimate({ headcount: 10, partner: false, addons: { speaker: 9 } }).addonTotal).toBe(1_500_000);
    expect(calcEstimate({ headcount: 10, partner: false, addons: { speaker: -2 } }).addonTotal).toBe(0);
  });

  it("formats won amounts and a pasteable summary", () => {
    expect(formatWon(1_150_000)).toBe("115만 원");
    expect(formatWon(-500_000)).toBe("−50만 원");
    const s = estimateSummary(calcEstimate({ headcount: 15, partner: true, addons: {} }), true);
    expect(s).toContain("보장 인원 15명");
    expect(s).toContain("합계 65만 원 (부가세 포함)");
  });
});
