import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { COMPANY } from "@/lib/content/company";
import { ORGANIZATION_JSONLD } from "@/lib/seo";

// 대표 문의 이메일은 support@10to10.kr 하나로 통일한다(2026-09-26). 견적서·가격표 등 문서와 같은 주소여야 한다.
// 푸터·메일 폼·검색엔진 조직 정보가 모두 COMPANY.email을 따르므로, 주소를 바꿀 때는 COMPANY만 고친다.
const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIRS = ["app", "components", "lib", "public"];

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(ts|tsx|js|jsx|json|md|mdx|txt|html|svg|xml)$/i.test(name) ? [full] : [];
  });
}

describe("contact email", () => {
  it("uses support@10to10.kr as the company email", () => {
    expect(COMPANY.email).toBe("support@10to10.kr");
  });

  it("shows the same email to search engines", () => {
    expect(ORGANIZATION_JSONLD.contactPoint.email).toBe(COMPANY.email);
  });

  it("has no leftover retired address in the site source", () => {
    const files = SOURCE_DIRS.flatMap((dir) => sourceFiles(path.join(ROOT, dir)));
    expect(files.length).toBeGreaterThan(0);
    const offenders = files.filter((file) => /stage@10to10\.kr/i.test(readFileSync(file, "utf8")));
    expect(offenders).toEqual([]);
  });
});
