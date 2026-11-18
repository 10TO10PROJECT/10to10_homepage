import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { isDarkChrome } from "@/lib/site-chrome";

const ROOT = path.resolve(__dirname, "..");

// 11/18 CEO: 플랫폼 페이지도 메인처럼 어두운 사이트 틀(상단 띠·헤더·푸터·하단 두 버튼 바)로 통일
describe("dark site chrome", () => {
  it("covers the main and platform pages only", () => {
    expect(isDarkChrome("/")).toBe(true);
    expect(isDarkChrome("/platform")).toBe(true);
    for (const p of ["/stage", "/portfolio", "/inquiry", "/privacy", "/platform/x", null]) {
      expect(isDarkChrome(p), String(p)).toBe(false);
    }
  });

  it("slides the platform hero under the transparent header so it never shows a white strip", () => {
    const page = readFileSync(path.join(ROOT, "app/platform/page.tsx"), "utf8");
    expect(page).toMatch(/className="m-dark -mt-16 [^"]*pt-16/);
  });
});
