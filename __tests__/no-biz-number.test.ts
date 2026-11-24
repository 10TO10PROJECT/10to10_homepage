import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { COMPANY } from "@/lib/content/company";

// 11/17 CEO·COO 결정: 사업자등록번호는 사이트 어디에도 싣지 않음(사업자 재발급 예정).
// 처리방침에서는 뺐지만 푸터에 5월부터 남아 있었음 → 다시 들어오지 않게 화면 코드 전체를 검사
const ROOT = path.resolve(__dirname, "..");

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(tsx?|txt|json|md)$/.test(name) ? [full] : [];
  });
}

describe("business registration number", () => {
  it("is not in the company info", () => {
    expect(COMPANY).not.toHaveProperty("bizNo");
  });

  it("is not shown anywhere on the site", () => {
    const files = ["app", "components", "lib"].flatMap((d) => sourceFiles(path.join(ROOT, d)));
    expect(files.length).toBeGreaterThan(20);
    for (const f of files) {
      const src = readFileSync(f, "utf8");
      expect(src, f).not.toContain("사업자등록번호");
      expect(src, f).not.toMatch(/\b\d{3}-\d{2}-\d{5}\b/);
    }
  });
});
