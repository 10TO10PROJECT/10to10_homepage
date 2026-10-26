import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { STAGE_PRICING_PUBLIC, STAGE_FAQ } from "@/lib/content/stage";
import { STAGE_FAQ_JSONLD, STAGE_SERVICE_JSONLD } from "@/lib/seo";

// 텐투텐(10to10)은 영수증 발급 간이과세자라 세금계산서를 발행할 수 없고, 공개 가격은 부가세 포함가다.
// 이 문구가 "VAT 별도"나 "세금계산서 발행"으로 되돌아가면 학원에 잘못된 세무 안내가 나간다.
// 과세유형이 바뀌면(직전 연도 공급대가 기준, 7월 1일 적용) 이 테스트와 가격 안내 문구를 함께 고친다.
const FORBIDDEN = [
  /VAT\s*(10\s*%\s*)?(별도|제외|미포함)/,
  /\+\s*VAT/,
  /부가(가치)?세\s*(10\s*%\s*)?(별도|제외|미포함)/,
  /세금계산서/,
];

const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIRS = ["app", "components", "lib"];

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.(ts|tsx|js|jsx|json|md|mdx)$/.test(name) ? [full] : [];
  });
}

describe("pricing tax wording", () => {
  it("states STAGE prices are VAT-inclusive with cash-receipt proof", () => {
    expect(STAGE_PRICING_PUBLIC.footnote).toContain("부가세 포함");
    expect(STAGE_PRICING_PUBLIC.footnote).toContain("현금영수증");
  });

  it("qualifies both public prices in the price FAQ and its search-result JSON-LD", () => {
    const price = STAGE_FAQ.find((item) => item.q.includes("비용"));
    expect(price?.a.match(/부가세 포함/g)?.length).toBe(2);
    const jsonld = STAGE_FAQ_JSONLD.mainEntity.find((e) => e.name.includes("비용"));
    expect(jsonld?.acceptedAnswer.text).toContain("부가세 포함");
  });

  it("marks every public Offer as VAT-included for search engines", () => {
    for (const offer of STAGE_SERVICE_JSONLD.offers) {
      expect(offer.priceSpecification.valueAddedTaxIncluded).toBe(true);
    }
  });

  it("never promises VAT-exclusive pricing or tax invoices anywhere in the site source", () => {
    const offenders: string[] = [];
    for (const dir of SOURCE_DIRS) {
      for (const file of sourceFiles(path.join(ROOT, dir))) {
        const text = readFileSync(file, "utf8");
        for (const pattern of FORBIDDEN) {
          if (pattern.test(text)) offenders.push(`${path.relative(ROOT, file)} ~ ${pattern}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});
