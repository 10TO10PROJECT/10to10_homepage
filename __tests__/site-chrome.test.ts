import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { hasDualCta, isDarkChrome } from "@/lib/site-chrome";

const ROOT = path.resolve(__dirname, "..");

// 11/18 CEO: 플랫폼 페이지도 메인처럼 어두운 사이트 틀(상단 띠·헤더·푸터·하단 두 버튼 바)로 통일
describe("dark site chrome", () => {
  it("covers the main, platform and STAGE pages only", () => {
    expect(isDarkChrome("/")).toBe(true);
    expect(isDarkChrome("/platform")).toBe(true);
    expect(isDarkChrome("/stage")).toBe(true); // 11/18 CEO: STAGE도 통일
    for (const p of ["/portfolio", "/inquiry", "/privacy", "/platform/x", null]) {
      expect(isDarkChrome(p), String(p)).toBe(false);
    }
  });

  it("shows both audiences' buttons only where both audiences land (STAGE is for 원장님)", () => {
    expect(hasDualCta("/")).toBe(true);
    expect(hasDualCta("/platform")).toBe(true);
    expect(hasDualCta("/stage")).toBe(false);
  });

  it("slides the STAGE page under the transparent header and darkens its light-built sections", () => {
    const page = readFileSync(path.join(ROOT, "app/stage/page.tsx"), "utf8");
    expect(page).toMatch(/className="m-dark m-theme-dark -mt-16 [^"]*pt-16/);
  });

  it("slides the platform hero under the transparent header so it never shows a white strip", () => {
    const page = readFileSync(path.join(ROOT, "app/platform/page.tsx"), "utf8");
    expect(page).toMatch(/className="m-dark -mt-16 [^"]*pt-16/);
  });
});
