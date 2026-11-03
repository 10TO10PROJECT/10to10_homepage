import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

// 루트 레이아웃이 canonical "/"을 두므로, 자기 canonical이 없는 하위 페이지는 검색엔진에 홈의 중복으로 보인다(/portfolio·/inquiry가 그랬음).
// 또 페이지가 openGraph를 직접 적으면 레이아웃의 openGraph와 상위 폴더 opengraph-image 썸네일 상속이 통째로 끊긴다.
const APP = path.resolve(__dirname, "..", "app");

function pageFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return pageFiles(full);
    return name === "page.tsx" ? [full] : [];
  });
}

const SUBPAGES = pageFiles(APP)
  .map((file) => ({
    file,
    route: "/" + path.relative(APP, path.dirname(file)).split(path.sep).join("/"),
    src: readFileSync(file, "utf8"),
  }))
  .filter(({ route }) => route !== "/");

describe("page canonical & open graph", () => {
  it("finds the subpages", () => {
    expect(SUBPAGES.map(({ route }) => route)).toEqual(
      expect.arrayContaining(["/portfolio", "/inquiry", "/platform"]),
    );
  });

  it.each(SUBPAGES)("$route sets its own canonical and og:url", ({ route, src }) => {
    expect(src).toContain(`canonical: "${route}"`);
    if (src.includes("openGraph: {")) expect(src).toContain(`url: "${route}"`);
  });

  it.each(SUBPAGES)("$route keeps a share thumbnail when it overrides openGraph", ({ file, src }) => {
    if (!src.includes("openGraph: {")) return;
    const ownImage = readdirSync(path.dirname(file)).some((name) =>
      /^opengraph-image\.(png|jpe?g|gif|[jt]sx?)$/.test(name),
    );
    expect(ownImage || src.includes("openGraph?.images")).toBe(true);
  });
});
