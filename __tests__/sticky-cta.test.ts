import { describe, it, expect } from "vitest";
import { hasStickyCta } from "@/lib/sticky-cta";

// 11/18 CEO: 개인정보 처리방침 페이지에는 휴대폰 하단 '견적 확인하기' 바가 필요 없다
describe("mobile sticky 견적 확인 bar", () => {
  it("is hidden on the privacy policy page", () => {
    expect(hasStickyCta("/privacy")).toBe(false);
  });

  it("stays on the sales and info pages", () => {
    for (const p of ["/", "/stage", "/platform", "/portfolio", "/inquiry"]) {
      expect(hasStickyCta(p), p).toBe(true);
    }
  });

  it("does not hide pages that merely start with the same letters", () => {
    expect(hasStickyCta("/privacy-faq")).toBe(true);
  });
});
