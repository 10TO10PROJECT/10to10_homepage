import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import * as platform from "@/lib/content/platform";
import {
  PLATFORM_AUDIENCE_MEDIA,
  PLATFORM_CTA_PHOTO,
  PLATFORM_FOUNDERS,
  PLATFORM_HERO_COLLAGE,
  PLATFORM_SEMINAR_POSTERS,
  PLATFORM_SEMINAR_POSTERS_CAPTION,
} from "@/lib/content/platform";
import { STAGE_TEAM } from "@/lib/content/stage";

// /platform은 학부모·학생에게 공개되는 페이지다. 내부 일정·가칭·운영하지 않는 채널이 문구에 섞이면 안 되고,
// 배경에 깐 실제 현장 사진·게시물은 모두 캡션(언제·어디서·무엇)을 달고 public/에 실제로 있어야 한다.
const ROOT = path.resolve(__dirname, "..");
// platform.ts는 주석에 "11/21 비노출" 같은 내부 메모가 있으므로 화면에 나가는 export 값만 검사하고, 페이지·섹션 파일은 원문을 검사
const PLATFORM_SOURCES = ["app/platform/page.tsx", "components/sections/platform/FounderStory.tsx"];
const FORBIDDEN = [/텐투텐\s*AI/, /알림톡/, /11\s*\/\s*21/, /11월\s*21일/];

const publicPath = (src: string) => path.join(ROOT, "public", src.replace(/^\//, ""));

describe("platform page content", () => {
  it("keeps internal dates, the provisional name and unused channels out of the page copy", () => {
    const offenders: string[] = [];
    const copy = JSON.stringify(platform);
    for (const re of FORBIDDEN) if (re.test(copy)) offenders.push(`lib/content/platform.ts ${re}`);
    for (const rel of PLATFORM_SOURCES) {
      const text = readFileSync(path.join(ROOT, rel), "utf8");
      for (const re of FORBIDDEN) if (re.test(text)) offenders.push(`${rel} ${re}`);
    }
    expect(offenders).toEqual([]);
  });

  it("points every background photo and post at a file that exists in public/", () => {
    const srcs = [
      ...PLATFORM_HERO_COLLAGE.flat().map((t) => t.src),
      ...PLATFORM_SEMINAR_POSTERS.map((p) => p.src),
      PLATFORM_FOUNDERS.photo.src,
      PLATFORM_AUDIENCE_MEDIA.parents.src,
      ...PLATFORM_AUDIENCE_MEDIA.students.posts,
      PLATFORM_CTA_PHOTO.src,
    ];
    expect(srcs.filter((src) => !existsSync(publicPath(src)))).toEqual([]);
  });

  it("captions every real photo with when it was taken", () => {
    const captions = [
      PLATFORM_SEMINAR_POSTERS_CAPTION,
      PLATFORM_FOUNDERS.photo.caption,
      PLATFORM_AUDIENCE_MEDIA.parents.caption,
      PLATFORM_AUDIENCE_MEDIA.students.caption,
      PLATFORM_CTA_PHOTO.caption,
    ];
    for (const caption of captions) expect(caption).toMatch(/2026\.(0[1-9]|1[0-2])/);
  });

  it("attributes the founder quote and uses the shared team bios", () => {
    expect(PLATFORM_FOUNDERS.quote.by).toBe(`${STAGE_TEAM.ceo.name} ${STAGE_TEAM.ceo.role}`);
    expect(PLATFORM_FOUNDERS.quote.source).not.toBe("");
    const founderStory = readFileSync(path.join(ROOT, "components/sections/platform/FounderStory.tsx"), "utf8");
    expect(founderStory).toContain("STAGE_TEAM.ceo, STAGE_TEAM.coo");
  });
});
