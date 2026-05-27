# 10to10 Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 10to10 회사 통합 홈페이지를 Next.js 16 + Tailwind v4 정적 사이트로 빌드. 메인(`/`) + `/platform` + `/stage` + 폼 API(`/api/inquiry`)로 구성, Vercel 배포 준비 완료까지.

**Architecture:** Hybrid IA — 회사 허브(메인) 1페이지 + 두 제품 별도 랜딩. 정적 페이지 + 단일 serverless function(`/api/inquiry`)이 zod 검증 후 Notion DB에 row 생성. 가격/카피 같은 변동 콘텐츠는 단일 `lib/content/*` 모듈에서만 관리. 로고 자산은 `public/brand/`로 표준 파일명 복사 + React 컴포넌트 wrap.

**Tech Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 (@theme) · framer-motion 12 · zod · @notionhq/client · Resend(옵션) · Pretendard Variable · Vercel.

**프로젝트 루트:** `C:\Users\ricky\Desktop\EDUFLO\10to10_homepage`

**관련 디자인 문서:** `docs/plans/2026-05-27-10to10-homepage-design.md`

---

## Advisor 보강사항 반영 위치

| # | 보강사항 | 반영 Task |
|---|---|---|
| 1 | STAGE 가격 단일 모듈 (5/27 자정 회의 펜딩 대응) | Task 5 (`lib/content/stage.ts`) |
| 2 | 로고 파일명 표준화 + inline React 컴포넌트 | Task 4 (`public/brand/` 복사 + `components/brand/Logo.tsx`) |
| 3 | Notion DB 사용자 액션 체크리스트 | Task 17 (사용자 액션 블록) |
| 4 | IR PDF CTA (`/platform` §8 + 푸터) | Task 11 (`public/ir/10to10-deck.pdf` placeholder + CTA 버튼) |
| 5 | SITE_URL 상수 (도메인 swap 안전) | Task 6 (`lib/site.ts`) |
| 6 | 환경변수 placeholder + 액션 묶음 | Task 17 (`.env.example` + 액션 체크리스트 한 블록) |

---

## Task 0: 사전 점검 (실행자가 가장 먼저 읽을 것)

**목표:** 환경 준비물 확인 후 Task 1 진입.

**확인:**
- Node 20.x 이상 (`node -v`)
- pnpm 또는 npm. 본 계획서는 `pnpm`을 가정 (없으면 `npm install -g pnpm`)
- 프로젝트 디렉토리: `C:\Users\ricky\Desktop\EDUFLO\10to10_homepage` (이미 존재, `docs/plans/` 안에 디자인·구현 문서만 있음)
- 디자인 문서 일독: `docs/plans/2026-05-27-10to10-homepage-design.md`
- 로고 원본 위치: `C:\Users\ricky\Desktop\EDUFLO\Logo\` 의 `(svg)symbol` · `(svg)symbol2` · `(svg)symbol3` · `(svg)wordmark` · `(svg)wordmark2` — 괄호+확장자 없음 주의

**중요 규칙:**
- 각 Task의 Step은 2–5분 단위. Step 단위로 끊어 검증.
- TDD 가능한 영역(폼 검증, API 라우트)은 테스트 우선.
- UI 컴포넌트는 visual sanity check (`pnpm dev` 후 브라우저 확인).
- 각 Task 종료 시 commit.

---

## Task 1: Next.js 16 프로젝트 스캐폴드

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.gitignore`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `postcss.config.mjs`

**Step 1: 디렉토리 진입 확인**

```bash
ls C:/Users/ricky/Desktop/EDUFLO/10to10_homepage
```

기대: `docs/` 만 있음.

**Step 2: create-next-app 스캐폴드**

```bash
pnpm create next-app@latest . --typescript --tailwind --app --eslint --src-dir false --import-alias "@/*" --use-pnpm
```

기존 `docs/` 가 있으면 그 위에 덮어쓰기 허용. 프롬프트에서 Turbopack=Yes 선택.

기대 산출물: `package.json`, `app/`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts` (Tailwind v4 사용 시 사라질 수 있음), `app/globals.css`.

**Step 3: Tailwind v4 확인 / 강제 업그레이드**

`package.json` 에 `"tailwindcss": "^4"` 인지 확인. 아니면:

```bash
pnpm add -D tailwindcss@^4 @tailwindcss/postcss@^4
pnpm remove autoprefixer
```

`postcss.config.mjs`:

```js
export default {
  plugins: { "@tailwindcss/postcss": {} },
};
```

`app/globals.css` 첫 줄을 다음으로 교체:

```css
@import "tailwindcss";
```

`tailwind.config.ts` 파일이 있으면 삭제 (v4는 CSS-first).

**Step 4: dev 서버 동작 확인**

```bash
pnpm dev
```

브라우저로 `http://localhost:3000` 접속, 기본 Next.js 페이지가 뜨면 OK. `Ctrl+C` 종료.

**Step 5: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold next.js 16 + tailwind v4"
```

---

## Task 2: 의존성 추가 (framer-motion, zod, @notionhq/client, Pretendard, Vercel)

**Files:** `package.json`

**Step 1: 패키지 설치**

```bash
pnpm add framer-motion@^12 zod@^4 @notionhq/client@^5 @vercel/analytics @vercel/speed-insights
pnpm add @fontsource/pretendard
pnpm add -D @types/node
```

(Resend는 선택 — Task 16에서 옵션으로.)

**Step 2: 설치 확인**

```bash
cat package.json
```

`dependencies` 에 위 패키지가 모두 있는지 확인.

**Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add framer-motion, zod, notion sdk, pretendard, vercel analytics"
```

---

## Task 3: 디자인 토큰 + 글로벌 스타일 (Tailwind v4 @theme)

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Step 1: `app/globals.css` 전체 교체**

```css
@import "tailwindcss";
@import "@fontsource/pretendard/variable.css";

@theme {
  /* Brand */
  --color-mint-500: #50E3C2;
  --color-mint-600: #2CC4A8;
  --color-mint-100: #E6FAF5;
  --color-sky-500:  #15BDFF;

  /* Ink */
  --color-ink-900: #1A1A1A;
  --color-ink-700: #4A4A4A;
  --color-ink-500: #9B9B9B;
  --color-ink-300: #D6D6D6;
  --color-ink-100: #F5F5F5;
  --color-ink-50:  #FAFAFA;

  /* Type */
  --font-sans: 'Pretendard Variable', system-ui, -apple-system, sans-serif;

  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 2rem;

  /* Motion */
  --ease-brand: cubic-bezier(0.2, 0.8, 0.2, 1);
  --dur-fast: 200ms;
  --dur-base: 320ms;
  --dur-slow: 480ms;
}

@layer base {
  html { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
  body { background: #ffffff; color: var(--color-ink-900); }
  ::selection { background: var(--color-mint-500); color: #fff; }
  :focus-visible { outline: 2px solid var(--color-mint-600); outline-offset: 2px; border-radius: 4px; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

**Step 2: `app/layout.tsx` 교체**

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-[color:var(--color-ink-900)]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

(`@/lib/site` 는 Task 6에서 생성. 일시적으로 lint 에러 발생 가능 — 다음 Task에서 해결.)

**Step 3: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: set up design tokens (@theme) + root layout"
```

---

## Task 4: 브랜드 자산 — 로고 SVG 표준화 + React 컴포넌트

**Advisor 보강 #2 반영.** 원본 파일명이 `(svg)symbol` 처럼 괄호+확장자 없음이라 정적 import가 어려움. 표준 파일명으로 복사 후 inline 컴포넌트로 wrap.

**Files:**
- Create: `public/brand/symbol-dark.svg`, `public/brand/symbol-mint.svg`, `public/brand/symbol-gradient.svg`, `public/brand/wordmark-dark.svg`, `public/brand/wordmark-mint.svg`
- Create: `components/brand/Symbol.tsx`, `components/brand/Wordmark.tsx`, `components/brand/Logo.tsx`

**Step 1: 파일 복사**

```bash
mkdir -p public/brand
cp "C:/Users/ricky/Desktop/EDUFLO/Logo/(svg)symbol"    public/brand/symbol-dark.svg
cp "C:/Users/ricky/Desktop/EDUFLO/Logo/(svg)symbol2"   public/brand/symbol-gradient.svg
cp "C:/Users/ricky/Desktop/EDUFLO/Logo/(svg)symbol3"   public/brand/symbol-mint.svg
cp "C:/Users/ricky/Desktop/EDUFLO/Logo/(svg)wordmark"  public/brand/wordmark-dark.svg
cp "C:/Users/ricky/Desktop/EDUFLO/Logo/(svg)wordmark2" public/brand/wordmark-mint.svg
```

확인:

```bash
ls public/brand
```

5개 파일 모두 있는지 확인.

**Step 2: `components/brand/Symbol.tsx` 작성 (inline SVG — 색 동적 제어용)**

```tsx
type Variant = "dark" | "mint" | "gradient";

interface SymbolProps extends React.SVGProps<SVGSVGElement> {
  variant?: Variant;
  size?: number;
}

const PATH = "M314.51,15.16C287.08,5.37,257.55,0,226.75,0H.17v147.99h226.58c60.19,0,109.15,52.91,109.15,113.09s-48.97,109.15-109.15,109.15-109.16-48.97-109.16-109.15c0-29.01,11.45-55.34,29.97-74.91h-2.45c-14.91.22-94.53,4.65-129.24,73.53,0,0-49.93,97.61,27.26,186.97,47.17,46.66,112.02,75.49,183.61,75.49,144.19,0,261.08-116.89,261.08-261.08,0-113.4-72.31-209.87-173.32-245.92Z";

export function Symbol({ variant = "mint", size = 32, ...props }: SymbolProps) {
  const fill =
    variant === "dark" ? "#1E1E1E" :
    variant === "mint" ? "var(--color-mint-500)" :
    "url(#symbol-gradient)";

  return (
    <svg
      viewBox="0 0 487.84 522.17"
      width={size}
      height={size * (522.17 / 487.84)}
      aria-label="10to10"
      role="img"
      {...props}
    >
      {variant === "gradient" && (
        <defs>
          <linearGradient id="symbol-gradient" x1="-17.08" y1="17.25" x2="411.36" y2="445.7" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#50E3C2" />
            <stop offset="0.24" stopColor="#4BE0C6" />
            <stop offset="0.51" stopColor="#3ED7D4" />
            <stop offset="0.8" stopColor="#28C9EB" />
            <stop offset="1" stopColor="#15BDFF" />
          </linearGradient>
        </defs>
      )}
      <path d={PATH} fill={fill} />
    </svg>
  );
}
```

**Step 3: `components/brand/Wordmark.tsx` 작성**

```tsx
type Variant = "dark" | "mint";

interface WordmarkProps extends React.SVGProps<SVGSVGElement> {
  variant?: Variant;
  height?: number;
}

export function Wordmark({ variant = "dark", height = 28, ...props }: WordmarkProps) {
  const fill = variant === "dark" ? "#1E1E1E" : "var(--color-mint-500)";

  return (
    <svg
      viewBox="0 0 1289.08 245.38"
      height={height}
      width={height * (1289.08 / 245.38)}
      aria-label="10to10 wordmark"
      role="img"
      {...props}
    >
      <g fill={fill}>
        <path d="M814.37,48.24c-10.67-3.81-22.15-5.9-34.12-5.9h-269.36V4.68h-57.55v37.66h-46.02v57.55h46.02v139.97h57.55V99.89h269.36c23.4,0,42.44,20.57,42.44,43.98s-19.04,42.44-42.44,42.44-42.44-19.04-42.44-42.44c0-11.28,4.45-21.52,11.65-29.13h-.95c-5.8.09-36.76,1.81-50.25,28.59,0,0-19.42,37.96,10.6,72.7,18.34,18.15,43.56,29.35,71.4,29.35,56.07,0,101.52-45.45,101.52-101.52,0-44.09-28.12-81.61-67.4-95.62Z" />
        <polygon points="57.55 0 0 49.31 0 120.71 82.1 49.74 82.1 239.83 139.65 239.83 139.65 0 82.1 0 57.55 0" />
        <path d="M276.45,0c-64.41,0-116.62,54.93-116.62,122.69s52.21,122.69,116.62,122.69,116.62-54.93,116.62-122.69S340.86,0,276.45,0ZM276.45,186.3c-31.73,0-57.54-28.54-57.54-63.61s25.81-63.61,57.54-63.61,57.54,28.54,57.54,63.61-25.81,63.61-57.54,63.61Z" />
        <polygon points="953.56 0 896.01 49.31 896.01 120.71 978.12 49.74 978.12 239.83 1035.66 239.83 1035.66 0 978.12 0 953.56 0" />
        <path d="M1172.46,0c-64.41,0-116.62,54.93-116.62,122.69s52.21,122.69,116.62,122.69,116.62-54.93,116.62-122.69S1236.87,0,1172.46,0ZM1172.46,186.3c-31.73,0-57.54-28.54-57.54-63.61s25.81-63.61,57.54-63.61,57.54,28.54,57.54,63.61-25.81,63.61-57.54,63.61Z" />
      </g>
    </svg>
  );
}
```

**Step 4: `components/brand/Logo.tsx` (Symbol + Wordmark 묶음)**

```tsx
import Link from "next/link";
import { Symbol } from "./Symbol";
import { Wordmark } from "./Wordmark";

interface LogoProps {
  variant?: "dark" | "mint" | "gradient";
  height?: number;
  href?: string;
}

export function Logo({ variant = "dark", height = 28, href = "/" }: LogoProps) {
  const symbolVariant = variant === "gradient" ? "gradient" : variant;
  const wordmarkVariant = variant === "gradient" ? "dark" : variant;

  const content = (
    <span className="inline-flex items-center gap-2">
      <Symbol variant={symbolVariant} size={height} />
      <Wordmark variant={wordmarkVariant} height={height * 0.7} />
    </span>
  );

  return href ? <Link href={href} aria-label="10to10 홈으로">{content}</Link> : content;
}
```

**Step 5: Commit**

```bash
git add public/brand components/brand
git commit -m "feat: add brand assets (symbol/wordmark) with inline svg components"
```

---

## Task 5: 콘텐츠 모듈 — STAGE 가격·옵션, PLATFORM 카피

**Advisor 보강 #1 반영.** 5/27 자정 회의에서 가격 변동 가능 → 단일 모듈에서만 관리.

**Files:**
- Create: `lib/content/stage.ts`, `lib/content/platform.ts`, `lib/content/company.ts`, `lib/content/team.ts`

**Step 1: `lib/content/stage.ts`**

```ts
export const STAGE_PRICING = {
  basic: {
    id: "basic",
    name: "베이직",
    fromPrice: "80만",
    fromPriceLabel: "월 80만부터",
    monthly: "월 10만",
    badge: null as string | null,
    includes: [
      "학원 인터뷰 + 컨셉 정리",
      "공식 블로그 1포스트/주",
      "기본 광고 세팅",
      "월간 리포트 1회",
    ],
  },
  premium: {
    id: "premium",
    name: "프리미엄",
    fromPrice: "200만",
    fromPriceLabel: "월 200만부터",
    monthly: "월 20만",
    badge: "BEST",
    includes: [
      "베이직 전체",
      "숏폼 4편/월",
      "전단지 디자인 + 인쇄",
      "현장 운영 지원 (월 1회)",
      "PPT 영업자료",
      "전담 매니저",
    ],
  },
} as const;

export const STAGE_OPTIONS = [
  { id: "blog",      title: "블로그 운영",    desc: "주 1회 정기 포스팅 + SEO" },
  { id: "ads",       title: "디지털 광고",    desc: "네이버·구글 학원 키워드" },
  { id: "shorts",    title: "숏폼 제작",      desc: "릴스·쇼츠 월 4편" },
  { id: "leaflet",   title: "전단지",         desc: "디자인 + 인쇄 + 배포 전략" },
  { id: "ppt",       title: "영업 PPT",       desc: "학원 설명회용 자료" },
  { id: "onsite",    title: "현장 운영",      desc: "설명회·이벤트 진행 지원" },
] as const;

export const STAGE_PROCESS = [
  { step: 1, title: "문의",          desc: "폼 또는 카톡으로 신청" },
  { step: 2, title: "학원 인터뷰",   desc: "원장님과 1:1 미팅, 컨셉 합의" },
  { step: 3, title: "자산 제작",     desc: "1~2주 내 콘텐츠/광고 준비" },
  { step: 4, title: "광고 ON",       desc: "광고 송출 + 월간 리포트" },
] as const;

export const STAGE_FAQ = [
  { q: "광고비는 별도인가요?", a: "패키지 금액에 운영 인건비가 포함됩니다. 광고 매체비(네이버/구글)는 학원이 직접 결제하며, 권장 예산을 함께 제안드립니다." },
  { q: "최소 계약 기간은?", a: "3개월부터 시작하며, 이후 월 단위 유지 가능합니다." },
  { q: "콘텐츠 소유권은?", a: "제작된 모든 자산(블로그/영상/디자인)은 학원에 귀속됩니다." },
  { q: "정산 방식은?", a: "매월 초 세금계산서 발행 후 익월 결제입니다." },
  { q: "여러 학원을 한 번에 맡길 수 있나요?", a: "가능합니다. 학원별 매니저 배정 및 통합 리포트를 제공합니다." },
] as const;

export const STAGE_PAINPOINTS = [
  { title: "마케팅 전담 직원 채용 부담",   desc: "월 250만+ 인건비, 채용·관리 리스크" },
  { title: "기존 광고대행사의 일회성 캠페인", desc: "광고비만 받고 학원 영업은 학원이 직접" },
  { title: "원장님이 영업까지 직접",        desc: "수업·운영에 집중 못 함" },
] as const;
```

**Step 2: `lib/content/platform.ts`**

```ts
export const PLATFORM_AGENTS = [
  { title: "상담 자동 요약",   desc: "학부모 채팅을 LLM이 핵심 요약 + 다음 액션 추천" },
  { title: "시간표 자동화",   desc: "강사·강의실 충돌 자동 해소" },
  { title: "공지 생성",       desc: "원장님 한 줄 요청 → 학원 톤의 공지 초안" },
  { title: "학원 비교",       desc: "학부모용 — 거리·과목·시간대 기준 매칭" },
] as const;

export const PLATFORM_REVENUE = [
  { title: "SaaS 월정액",     price: "월 8만",  desc: "학원 운영 핵심 기능" },
  { title: "AI Agent 모듈",   price: "월 3만",  desc: "9월 정식 출시 예정" },
  { title: "학부모/학생 앱",  price: "무료",    desc: "탐색·예약·커뮤니티" },
] as const;

export const PLATFORM_ROADMAP = [
  { phase: "현재",       label: "Beta 운영 중 (eduflo.co.kr)" },
  { phase: "2026-07-28", label: "정규 v1.0 출시 (비AI)" },
  { phase: "2026-09",    label: "AI Agent 탑재 v1.1" },
] as const;

export const PLATFORM_HERO = {
  title: "AI가 학원을 운영하고, 학부모를 안내합니다",
  sub: "학원 운영 SaaS + 학부모·학생 탐색 앱. 양면 플랫폼의 자동화 엔진을 만듭니다.",
} as const;

export const PLATFORM_BETA_URL = "https://eduflo.co.kr";
```

**Step 3: `lib/content/company.ts`**

```ts
export const COMPANY = {
  legalName: "Link Earth Inc.",
  brandName: "10to10",
  legalNote: "(사명 10to10으로 변경 예정)",
  ceo: "신현우",
  bizNo: "TBD",
  address: "TBD",
  email: "contact@10to10.co.kr",
  kakaoUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "#",
  irPdfPath: "/ir/10to10-deck.pdf",
} as const;

export const COMPANY_STATS = [
  { value: "16+",     label: "파트너 학원" },
  { value: "7",       label: "팀원" },
  { value: "Beta",    label: "정규 출시 7/28 예정" },
  { value: "지원",    label: "Y-Compass · D2SF" },
] as const;

export const MARKET_STATS = [
  { value: "29.2조원", label: "국내 사교육 시장" },
  { value: "14만개+",  label: "전국 학원" },
  { value: "맘카페",   label: "정보가 흩어진 채" },
] as const;

export const VISION = {
  mission: "동네 학원과 학부모를 잇는 신뢰의 인프라를 만듭니다.",
  vision: "모든 학원이 자기 색을 갖고, 모든 학부모가 좋은 선택을 할 수 있도록.",
} as const;
```

**Step 4: `lib/content/team.ts`**

(현 5인 + CEO. 사진은 placeholder, 추후 실제 이미지 교체.)

```ts
export const TEAM = [
  { name: "신현우",   role: "CEO",                affiliation: "연세대" },
  { name: "선우",     role: "COO / Dev Lead",     affiliation: "GIST AI융합" },
  { name: "예솜",     role: "Marketing / BI",     affiliation: "한양대 자율전공" },
  { name: "현서",     role: "Frontend",           affiliation: "이화여대 컴공" },
  { name: "서준",     role: "Backend",            affiliation: "대림대 문헌정보" },
  { name: "재규",     role: "Backend",            affiliation: "광운대 SW" },
  { name: "휘민",     role: "UI/UX",              affiliation: "TBD" },
] as const;
```

**Step 5: Commit**

```bash
git add lib/content
git commit -m "feat: add content modules (stage pricing single-source, platform, company, team)"
```

---

## Task 6: 사이트 상수 + 유틸 (`lib/site.ts`, `lib/cn.ts`)

**Advisor 보강 #5 반영.** 도메인 변경 안전성.

**Files:**
- Create: `lib/site.ts`, `lib/cn.ts`

**Step 1: `lib/site.ts`**

```ts
const PLACEHOLDER = "https://10to10.co.kr";

export const SITE = {
  name: "10to10",
  description: "동네 학원의 모든 것, 10to10이 바꿉니다. AI 플랫폼과 운영 파트너십으로 학원·학부모·학생을 연결합니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL || PLACEHOLDER,
  ogImage: "/opengraph-image",
  locale: "ko_KR",
} as const;
```

**Step 2: `lib/cn.ts`**

```ts
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

설치:

```bash
pnpm add clsx
```

**Step 3: Commit**

```bash
git add lib/site.ts lib/cn.ts package.json pnpm-lock.yaml
git commit -m "feat: add SITE constants and cn utility"
```

---

## Task 7: 모션 프리미티브 (`components/motion/`)

**Files:**
- Create: `components/motion/FadeIn.tsx`, `components/motion/StaggerChildren.tsx`

**Step 1: `components/motion/FadeIn.tsx`**

```tsx
"use client";
import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.2, 0.8, 0.2, 1] } },
};

export function FadeIn({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: `components/motion/StaggerChildren.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";

export function StaggerChildren({ children, className, stagger = 0.08 }: {
  children: React.ReactNode; className?: string; stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 3: Commit**

```bash
git add components/motion
git commit -m "feat: add motion primitives (FadeIn, StaggerChildren)"
```

---

## Task 8: UI 프리미티브 (`components/ui/`)

**Files:**
- Create: `components/ui/Container.tsx`, `Button.tsx`, `Card.tsx`, `Badge.tsx`, `Pill.tsx`, `Stat.tsx`, `Accordion.tsx`

**Step 1: `Container.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Container({ children, className, size = "default" }: {
  children: React.ReactNode; className?: string; size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow" ? "max-w-3xl" :
    size === "wide"   ? "max-w-7xl" :
    "max-w-6xl";
  return <div className={cn("mx-auto w-full px-6 md:px-8", max, className)}>{children}</div>;
}
```

**Step 2: `Button.tsx`**

```tsx
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size    = "sm" | "md" | "lg";

interface CommonProps { variant?: Variant; size?: Size; className?: string; children: React.ReactNode }
type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps   = CommonProps & { href: string; external?: boolean };

const base = "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-mint-600)] disabled:opacity-50 disabled:cursor-not-allowed";
const sizes = {
  sm: "h-9 px-4 text-sm rounded-[var(--radius-sm)]",
  md: "h-11 px-5 text-base rounded-[var(--radius-md)]",
  lg: "h-14 px-7 text-lg rounded-[var(--radius-md)]",
};
const variants = {
  primary:   "bg-[var(--color-mint-500)] text-white hover:bg-[var(--color-mint-600)]",
  secondary: "bg-[var(--color-ink-900)] text-white hover:bg-black",
  ghost:     "text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)]",
  outline:   "border border-[var(--color-ink-300)] text-[var(--color-ink-900)] hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-600)]",
};

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = cn(base, sizes[size], variants[variant], className);
  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
    return <Link href={href} className={cls}>{children}</Link>;
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps;
  return <button className={cls} {...rest}>{children}</button>;
}
```

**Step 3: `Card.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Card({ children, className, interactive = false }: {
  children: React.ReactNode; className?: string; interactive?: boolean;
}) {
  return (
    <div className={cn(
      "rounded-[var(--radius-lg)] border border-[var(--color-ink-300)] bg-white p-8",
      interactive && "transition-all duration-300 hover:border-[var(--color-mint-500)] hover:shadow-[0_8px_32px_-12px_rgba(80,227,194,0.4)]",
      className,
    )}>
      {children}
    </div>
  );
}
```

**Step 4: `Badge.tsx` · `Pill.tsx` · `Stat.tsx`**

```tsx
// Badge.tsx
import { cn } from "@/lib/cn";
export function Badge({ children, variant = "mint", className }: {
  children: React.ReactNode; variant?: "mint" | "dark" | "outline"; className?: string;
}) {
  const styles = {
    mint:    "bg-[var(--color-mint-100)] text-[var(--color-mint-600)]",
    dark:    "bg-[var(--color-ink-900)] text-white",
    outline: "border border-[var(--color-ink-300)] text-[var(--color-ink-700)]",
  };
  return <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", styles[variant], className)}>{children}</span>;
}
```

```tsx
// Pill.tsx
import { cn } from "@/lib/cn";
export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full bg-[var(--color-ink-100)] px-4 py-1.5 text-sm text-[var(--color-ink-700)]", className)}>{children}</span>;
}
```

```tsx
// Stat.tsx
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink-900)]">{value}</div>
      <div className="text-sm md:text-base text-[var(--color-ink-500)]">{label}</div>
    </div>
  );
}
```

**Step 5: `Accordion.tsx` (FAQ용)**

```tsx
"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function Accordion({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--color-ink-300)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-5">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-lg font-semibold text-[var(--color-ink-900)]">{it.q}</span>
              <span className={cn("text-2xl text-[var(--color-mint-600)] transition-transform", isOpen && "rotate-45")}>+</span>
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden text-[var(--color-ink-700)] leading-relaxed">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

**Step 6: Commit**

```bash
git add components/ui
git commit -m "feat: add ui primitives (Button, Card, Badge, Pill, Stat, Accordion, Container)"
```

---

## Task 9: 레이아웃 — Header / Footer

**Files:**
- Create: `components/layout/Header.tsx`, `components/layout/Footer.tsx`
- Modify: `app/layout.tsx`

**Step 1: `Header.tsx`**

```tsx
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink-300)]/60 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo height={28} />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-ink-700)]">
          <a href="/platform" className="hover:text-[var(--color-mint-600)]">AI 플랫폼</a>
          <a href="/stage" className="hover:text-[var(--color-mint-600)]">STAGE</a>
          <a href="/#team" className="hover:text-[var(--color-mint-600)]">팀</a>
          <a href="/#careers" className="hover:text-[var(--color-mint-600)]">채용</a>
        </nav>
        <Button href="/stage" variant="primary" size="sm">학원 문의</Button>
      </Container>
    </header>
  );
}
```

**Step 2: `Footer.tsx`**

```tsx
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-ink-300)] bg-[var(--color-ink-50)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo height={32} variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-700)]">
              {COMPANY.legalName} {COMPANY.legalNote}<br />
              대표 {COMPANY.ceo} · 사업자등록번호 {COMPANY.bizNo}
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-[var(--color-ink-900)] mb-3">제품</div>
            <ul className="space-y-2 text-[var(--color-ink-700)]">
              <li><Link href="/platform" className="hover:text-[var(--color-mint-600)]">10to10 AI 플랫폼</Link></li>
              <li><Link href="/stage" className="hover:text-[var(--color-mint-600)]">10to10 STAGE</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-[var(--color-ink-900)] mb-3">회사</div>
            <ul className="space-y-2 text-[var(--color-ink-700)]">
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-[var(--color-mint-600)]">{COMPANY.email}</a></li>
              <li><a href={COMPANY.irPdfPath} className="hover:text-[var(--color-mint-600)]" target="_blank" rel="noopener">IR 자료 다운로드</a></li>
              <li><a href={COMPANY.kakaoUrl} className="hover:text-[var(--color-mint-600)]" target="_blank" rel="noopener">카카오톡 문의</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--color-ink-300)] pt-6 text-xs text-[var(--color-ink-500)]">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
```

**Step 3: `app/layout.tsx` 에 Header/Footer 삽입**

```tsx
// children 위·아래에 Header / Footer 추가
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// body 안:
<Header />
<main>{children}</main>
<Footer />
```

**Step 4: Commit**

```bash
git add components/layout app/layout.tsx
git commit -m "feat: add Header and Footer layout"
```

---

## Task 10: 메인 페이지 (`app/page.tsx`) — 7 섹션

**Files:**
- Create: `components/sections/Hero.tsx`, `MarketStats.tsx`, `DualProducts.tsx`, `CompanyStats.tsx`, `TeamVision.tsx`, `CareersStrip.tsx`, `MainCta.tsx`
- Modify: `app/page.tsx`

**Step 1: 섹션별 컴포넌트 작성**

각 파일을 `components/sections/` 에 작성. 디자인 문서 §3 참조.

**Hero.tsx (핵심):**

```tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Symbol } from "@/components/brand/Symbol";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div aria-hidden className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/30 to-[var(--color-sky-500)]/20 blur-3xl" />
      <Container className="relative">
        <FadeIn>
          <Symbol variant="gradient" size={72} />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-ink-900)]">
            동네 학원의 모든 것,<br />
            <span className="bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-sky-500)] bg-clip-text text-transparent">
              10to10
            </span>이 바꿉니다.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6">
          <p className="max-w-2xl text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
            AI 플랫폼과 운영 파트너십으로, 학원·학부모·학생을 연결합니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3">
          <Button href="/platform" variant="primary" size="lg">플랫폼 알아보기</Button>
          <Button href="/stage" variant="outline" size="lg">STAGE 패키지 보기</Button>
        </FadeIn>
      </Container>
    </section>
  );
}
```

**MarketStats.tsx:**

```tsx
import { Container } from "@/components/ui/Container";
import { Stat } from "@/components/ui/Stat";
import { Card } from "@/components/ui/Card";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { MARKET_STATS } from "@/lib/content/company";

export function MarketStats() {
  return (
    <section className="py-24 bg-[var(--color-ink-50)]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">사교육 시장은 큰데, 정보는 흩어져 있습니다.</h2>
        <p className="text-[var(--color-ink-700)] mb-12">학부모는 맘카페에 의존하고, 학원은 마케팅에 헤맵니다.</p>
        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {MARKET_STATS.map((s) => (
            <Card key={s.label}><Stat value={s.value} label={s.label} /></Card>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
```

**DualProducts.tsx:**

```tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function DualProducts() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <Badge>두 개의 제품, 하나의 비전</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">학원 운영 자동화와, 학원 영업 파트너십.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/platform">
            <Card interactive className="h-full">
              <div className="text-sm font-semibold text-[var(--color-mint-600)]">PRODUCT 01</div>
              <h3 className="mt-2 text-2xl font-bold">10to10 AI 플랫폼</h3>
              <p className="mt-3 text-[var(--color-ink-700)]">학원 운영 SaaS + 학부모·학생 탐색 앱. AI 에이전트가 상담·시간표·공지를 자동화합니다.</p>
              <div className="mt-6 text-sm font-semibold text-[var(--color-mint-600)]">자세히 보기 →</div>
            </Card>
          </Link>
          <Link href="/stage">
            <Card interactive className="h-full">
              <div className="text-sm font-semibold text-[var(--color-mint-600)]">PRODUCT 02</div>
              <h3 className="mt-2 text-2xl font-bold">10to10 STAGE</h3>
              <p className="mt-3 text-[var(--color-ink-700)]">학원 홍보, 운영팀이 대신합니다. 콘텐츠·광고·현장 운영까지 패키지로.</p>
              <div className="mt-6 text-sm font-semibold text-[var(--color-mint-600)]">자세히 보기 →</div>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
```

**CompanyStats.tsx · TeamVision.tsx · CareersStrip.tsx · MainCta.tsx:**

디자인 문서 §3 참조하여 비슷한 패턴으로. `COMPANY_STATS`, `VISION`, `TEAM` 컨텐츠 모듈 사용.

**Step 2: `app/page.tsx`**

```tsx
import { Hero } from "@/components/sections/Hero";
import { MarketStats } from "@/components/sections/MarketStats";
import { DualProducts } from "@/components/sections/DualProducts";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { TeamVision } from "@/components/sections/TeamVision";
import { CareersStrip } from "@/components/sections/CareersStrip";
import { MainCta } from "@/components/sections/MainCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketStats />
      <DualProducts />
      <CompanyStats />
      <TeamVision />
      <CareersStrip />
      <MainCta />
    </>
  );
}
```

**Step 3: Visual check**

```bash
pnpm dev
```

브라우저 `http://localhost:3000` — 모든 섹션이 렌더링되고 모션이 자연스러운지 확인. 모바일/태블릿 반응형 확인 (DevTools).

**Step 4: Commit**

```bash
git add app/page.tsx components/sections
git commit -m "feat: build main page with 7 sections"
```

---

## Task 11: `/platform` 페이지 + IR PDF CTA

**Advisor 보강 #4 반영.** IR CTA를 §8과 푸터에. `public/ir/10to10-deck.pdf` placeholder 사용 — 사용자가 실제 파일로 교체.

**Files:**
- Create: `app/platform/page.tsx`
- Create: `components/sections/platform/PlatformHero.tsx`, `TwoSided.tsx`, `Agents.tsx`, `Roadmap.tsx`, `BetaInvite.tsx`, `Revenue.tsx`, `PlatformCta.tsx`
- Placeholder: `public/ir/10to10-deck.pdf` (빈 파일 또는 사용자 IR 파일 복사)

**Step 1: IR PDF placeholder 준비**

기존 사용자 IR 파일이 EDUFLO 디렉토리에 있다면 복사:

```bash
mkdir -p public/ir
# 사용자에게: 실제 IR PDF를 public/ir/10to10-deck.pdf 로 복사
# 임시로 빈 placeholder 생성:
echo "placeholder" > public/ir/10to10-deck.pdf
```

(User action checklist Task 17 에 PDF 교체 명시.)

**Step 2: 각 섹션 컴포넌트 작성**

디자인 문서 §4 참조. 컨텐츠는 `lib/content/platform.ts` 에서.

**PlatformCta.tsx (IR CTA 포함):**

```tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

export function PlatformCta() {
  return (
    <section className="py-24 bg-[var(--color-ink-900)] text-white">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">10to10 플랫폼과 함께하세요.</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          학원으로 등록하시거나, 투자·지원사업 협업을 제안해 주세요.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={COMPANY.kakaoUrl} variant="primary" size="lg" external>학원으로 등록</Button>
          <Button href={COMPANY.irPdfPath} variant="outline" size="lg" external className="bg-transparent text-white border-white/30 hover:border-[var(--color-mint-500)]">IR 자료 다운로드</Button>
          <Button href={`mailto:${COMPANY.email}`} variant="ghost" size="lg" className="text-white hover:bg-white/10">투자·지원 문의</Button>
        </div>
      </Container>
    </section>
  );
}
```

**Step 3: `app/platform/page.tsx`**

```tsx
import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { TwoSided } from "@/components/sections/platform/TwoSided";
import { Agents } from "@/components/sections/platform/Agents";
import { Roadmap } from "@/components/sections/platform/Roadmap";
import { BetaInvite } from "@/components/sections/platform/BetaInvite";
import { Revenue } from "@/components/sections/platform/Revenue";
import { PlatformCta } from "@/components/sections/platform/PlatformCta";

export const metadata: Metadata = {
  title: "10to10 AI 플랫폼",
  description: "AI가 학원을 운영하고, 학부모를 안내합니다. SaaS + 학부모·학생 앱의 양면 플랫폼.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <TwoSided />
      <Agents />
      <Roadmap />
      <BetaInvite />
      <Revenue />
      <PlatformCta />
    </>
  );
}
```

**Step 4: Visual check & Commit**

```bash
pnpm dev
# /platform 방문 확인
git add app/platform components/sections/platform public/ir
git commit -m "feat: build /platform page with IR cta"
```

---

## Task 12: `/stage` 페이지 — 가격은 stage.ts 에서만

**Files:**
- Create: `app/stage/page.tsx`
- Create: `components/sections/stage/StageHero.tsx`, `Painpoints.tsx`, `Packages.tsx`, `Options.tsx`, `Process.tsx`, `StageFaq.tsx`, `StageContact.tsx`

**Step 1: Packages.tsx — 가격은 반드시 `STAGE_PRICING` 참조**

```tsx
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { STAGE_PRICING } from "@/lib/content/stage";

export function Packages() {
  const items = [STAGE_PRICING.basic, STAGE_PRICING.premium];
  return (
    <section id="packages" className="py-24">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">두 가지 패키지로 시작하세요.</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {items.map((p) => (
            <Card key={p.id} interactive className="relative flex flex-col">
              {p.badge && <Badge className="absolute top-6 right-6">{p.badge}</Badge>}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.fromPrice}</span>
                <span className="text-[var(--color-ink-500)]">부터</span>
              </div>
              <div className="text-sm text-[var(--color-ink-500)] mt-1">월 운영 {p.monthly}</div>
              <ul className="mt-8 space-y-3 text-[var(--color-ink-700)] flex-1">
                {p.includes.map((it) => (
                  <li key={it} className="flex gap-2"><span className="text-[var(--color-mint-600)]">✓</span>{it}</li>
                ))}
              </ul>
              <Button href="#contact" variant="primary" className="mt-8 w-full">문의하기</Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

**Step 2: 나머지 섹션 컴포넌트**

디자인 문서 §5 + `STAGE_PAINPOINTS`, `STAGE_OPTIONS`, `STAGE_PROCESS`, `STAGE_FAQ` 사용.

**StageFaq.tsx:**

```tsx
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { STAGE_FAQ } from "@/lib/content/stage";

export function StageFaq() {
  return (
    <section className="py-24 bg-[var(--color-ink-50)]">
      <Container size="narrow">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">자주 묻는 질문</h2>
        <Accordion items={STAGE_FAQ as unknown as { q: string; a: string }[]} />
      </Container>
    </section>
  );
}
```

**Step 3: `app/stage/page.tsx`**

```tsx
import type { Metadata } from "next";
import { StageHero } from "@/components/sections/stage/StageHero";
import { Painpoints } from "@/components/sections/stage/Painpoints";
import { Packages } from "@/components/sections/stage/Packages";
import { Options } from "@/components/sections/stage/Options";
import { Process } from "@/components/sections/stage/Process";
import { StageFaq } from "@/components/sections/stage/StageFaq";
import { StageContact } from "@/components/sections/stage/StageContact";

export const metadata: Metadata = {
  title: "10to10 STAGE",
  description: "학원 홍보, 운영팀이 대신합니다. 콘텐츠·광고·현장운영까지 패키지로.",
};

export default function StagePage() {
  return (
    <>
      <StageHero />
      <Painpoints />
      <Packages />
      <Options />
      <Process />
      <StageFaq />
      <StageContact />
    </>
  );
}
```

**Step 4: Commit**

```bash
git add app/stage components/sections/stage
git commit -m "feat: build /stage page (prices from single content module)"
```

---

## Task 13: 폼 스키마 + 검증 (zod) — TDD

**Files:**
- Create: `lib/schema/inquiry.ts`
- Create: `__tests__/inquiry-schema.test.ts`
- Modify: `package.json` (vitest 추가)

**Step 1: vitest 설치**

```bash
pnpm add -D vitest @vitest/ui
```

`package.json` scripts 에 `"test": "vitest run"`, `"test:watch": "vitest"` 추가.

`vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import path from "path";
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  test: { globals: true, environment: "node" },
});
```

**Step 2: 실패 테스트 작성 — `__tests__/inquiry-schema.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { inquirySchema } from "@/lib/schema/inquiry";

describe("inquirySchema", () => {
  const valid = {
    name: "홍길동",
    phone: "010-1234-5678",
    academyName: "10to10 학원",
    region: "서울 강남",
    package: "basic" as const,
    message: "문의드립니다",
    source: "stage" as const,
    honeypot: "",
  };

  it("accepts valid input", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects short name", () => {
    expect(inquirySchema.safeParse({ ...valid, name: "홍" }).success).toBe(false);
  });

  it("rejects invalid phone (not korean mobile)", () => {
    expect(inquirySchema.safeParse({ ...valid, phone: "02-1234-5678" }).success).toBe(false);
  });

  it("accepts phone without dashes", () => {
    expect(inquirySchema.safeParse({ ...valid, phone: "01012345678" }).success).toBe(true);
  });

  it("rejects unknown package", () => {
    expect(inquirySchema.safeParse({ ...valid, package: "diamond" }).success).toBe(false);
  });

  it("rejects when honeypot is filled", () => {
    expect(inquirySchema.safeParse({ ...valid, honeypot: "bot" }).success).toBe(false);
  });
});
```

**Step 3: 실패 확인**

```bash
pnpm test
```

기대: 모듈 못 찾음 에러로 실패.

**Step 4: `lib/schema/inquiry.ts` 구현**

```ts
import { z } from "zod";

const KOREAN_MOBILE = /^010[-]?\d{3,4}[-]?\d{4}$/;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "이름은 2자 이상").max(20),
  phone: z.string().trim().regex(KOREAN_MOBILE, "휴대폰 번호 형식이 올바르지 않습니다"),
  academyName: z.string().trim().min(1, "학원명은 필수").max(50),
  region: z.string().trim().max(50).optional().default(""),
  package: z.enum(["basic", "premium", "custom"]),
  message: z.string().trim().max(2000).optional().default(""),
  source: z.enum(["stage", "platform", "main"]),
  honeypot: z.string().max(0, "bot detected"),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
```

**Step 5: 테스트 통과 확인**

```bash
pnpm test
```

기대: 6 passed.

**Step 6: Commit**

```bash
git add lib/schema __tests__ vitest.config.ts package.json pnpm-lock.yaml
git commit -m "feat(api): add inquiry zod schema with tests"
```

---

## Task 14: 폼 컴포넌트 (`InquiryForm.tsx`)

**Files:**
- Create: `components/forms/InquiryForm.tsx`
- Modify: `components/sections/stage/StageContact.tsx` (form embed)

**Step 1: `InquiryForm.tsx`**

```tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { inquirySchema, type InquiryInput } from "@/lib/schema/inquiry";

type Source = "stage" | "platform" | "main";

export function InquiryForm({ source = "stage" }: { source?: Source }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload: InquiryInput = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      academyName: String(fd.get("academyName") ?? ""),
      region: String(fd.get("region") ?? ""),
      package: fd.get("package") as InquiryInput["package"],
      message: String(fd.get("message") ?? ""),
      source,
      honeypot: String(fd.get("website") ?? ""),
    };

    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) map[String(issue.path[0])] = issue.message;
      setErrors(map);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-mint-500)] bg-[var(--color-mint-100)] p-8 text-center">
        <div className="text-2xl font-bold text-[var(--color-mint-600)]">문의 접수 완료!</div>
        <p className="mt-2 text-[var(--color-ink-700)]">영업일 기준 1일 내 연락드립니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* honeypot */}
      <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden className="hidden" />

      <Field label="이름" name="name" error={errors.name} required />
      <Field label="휴대폰" name="phone" placeholder="010-1234-5678" error={errors.phone} required />
      <Field label="학원명" name="academyName" error={errors.academyName} required />
      <Field label="지역" name="region" placeholder="예: 서울 강남" error={errors.region} />

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">관심 패키지</span>
        <select name="package" defaultValue="basic" className="h-11 rounded-[var(--radius-md)] border border-[var(--color-ink-300)] px-3">
          <option value="basic">베이직 (월 80만부터)</option>
          <option value="premium">프리미엄 (월 200만부터)</option>
          <option value="custom">맞춤 견적</option>
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">문의 내용</span>
        <textarea name="message" rows={4} className="rounded-[var(--radius-md)] border border-[var(--color-ink-300)] p-3" />
        {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
      </label>

      <Button type="submit" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? "전송 중..." : "문의 보내기"}
      </Button>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-500">전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</p>
      )}
    </form>
  );
}

function Field({ label, name, placeholder, error, required }: {
  label: string; name: string; placeholder?: string; error?: string; required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold">{label}{required && <span className="text-red-500">*</span>}</span>
      <input name={name} placeholder={placeholder} className="h-11 rounded-[var(--radius-md)] border border-[var(--color-ink-300)] px-3" />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </label>
  );
}
```

**Step 2: `StageContact.tsx` 에 embed**

```tsx
import { Container } from "@/components/ui/Container";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/content/company";

export function StageContact() {
  return (
    <section id="contact" className="py-24">
      <Container size="narrow">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">학원 영업 위탁 문의</h2>
        <p className="text-[var(--color-ink-700)] mb-10">상담은 무료, 결정은 천천히. 영업일 기준 1일 내 연락드립니다.</p>
        <InquiryForm source="stage" />
        <div className="mt-8 text-center">
          <span className="text-sm text-[var(--color-ink-500)]">또는 </span>
          <Button href={COMPANY.kakaoUrl} variant="ghost" external>카카오톡으로 문의</Button>
        </div>
      </Container>
    </section>
  );
}
```

**Step 3: Commit**

```bash
git add components/forms components/sections/stage/StageContact.tsx
git commit -m "feat: add InquiryForm with client-side validation"
```

---

## Task 15: API 라우트 `/api/inquiry` (Notion + 옵션 Resend)

**Files:**
- Create: `app/api/inquiry/route.ts`
- Create: `lib/notion.ts`
- Create: `.env.example`

**Step 1: `.env.example`**

```
# 사이트 URL (prod 도메인. 미설정 시 placeholder 사용)
NEXT_PUBLIC_SITE_URL=https://10to10.co.kr

# Notion (필수)
NOTION_TOKEN=secret_xxx
NOTION_INQUIRY_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 카카오 채널 (필수)
NEXT_PUBLIC_KAKAO_CHANNEL_URL=https://pf.kakao.com/_xxxxxx

# Resend (선택 — 운영팀 알림 메일)
RESEND_API_KEY=
RESEND_TO_EMAIL=contact@10to10.co.kr
```

`.gitignore` 에 `.env*.local` 포함 확인.

**Step 2: `lib/notion.ts`**

```ts
import { Client } from "@notionhq/client";

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function createInquiryRow(input: {
  name: string; phone: string; academyName: string; region: string;
  package: "basic" | "premium" | "custom"; message: string;
  source: "stage" | "platform" | "main";
}) {
  const dbId = process.env.NOTION_INQUIRY_DB_ID;
  if (!dbId) throw new Error("NOTION_INQUIRY_DB_ID is not set");

  return notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      "이름":        { title: [{ text: { content: input.name } }] },
      "연락처":      { phone_number: input.phone },
      "학원명":      { rich_text: [{ text: { content: input.academyName } }] },
      "지역":        { rich_text: [{ text: { content: input.region } }] },
      "관심 패키지": { select: { name: input.package } },
      "문의 내용":   { rich_text: [{ text: { content: input.message.slice(0, 2000) } }] },
      "source":      { select: { name: input.source } },
      "상태":        { select: { name: "신규" } },
    },
  });
}
```

**Step 3: `app/api/inquiry/route.ts`**

```ts
import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schema/inquiry";
import { createInquiryRow } from "@/lib/notion";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation failed", issues: parsed.error.issues }, { status: 422 });
  }

  // honeypot 비어있어야 통과 (스키마에서 이미 검증됨이지만 명시적 확인)
  if (parsed.data.honeypot.length > 0) {
    return NextResponse.json({ ok: true }); // 봇에게 성공처럼 응답
  }

  try {
    await createInquiryRow(parsed.data);
  } catch (err) {
    console.error("notion create failed", err);
    return NextResponse.json({ ok: false, error: "notion failure" }, { status: 502 });
  }

  // 옵션: Resend 알림 (RESEND_API_KEY 있을 때만)
  if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "10to10 <onboarding@resend.dev>",
          to: process.env.RESEND_TO_EMAIL,
          subject: `[${parsed.data.source}] ${parsed.data.academyName} (${parsed.data.name})`,
          text: `이름: ${parsed.data.name}\n전화: ${parsed.data.phone}\n학원: ${parsed.data.academyName}\n지역: ${parsed.data.region}\n패키지: ${parsed.data.package}\n메시지: ${parsed.data.message}`,
        }),
      });
    } catch (err) {
      console.error("resend failed", err);
      // 메일 실패는 응답 200 유지
    }
  }

  return NextResponse.json({ ok: true });
}
```

**Step 4: Commit**

```bash
git add app/api .env.example lib/notion.ts
git commit -m "feat(api): /api/inquiry route with notion + optional resend"
```

---

## Task 16: SEO 자산 — sitemap / robots / OG image / icon

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/icon.tsx`

**Step 1: `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url,                priority: 1.0 },
    { url: `${SITE.url}/platform`,  priority: 0.8 },
    { url: `${SITE.url}/stage`,     priority: 0.8 },
  ];
}
```

**Step 2: `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
```

**Step 3: `app/opengraph-image.tsx`**

```tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(135deg, #50E3C2 0%, #15BDFF 100%)",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        color: "white", fontFamily: "system-ui",
      }}>
        <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: -4 }}>10to10</div>
        <div style={{ fontSize: 32, marginTop: 16, opacity: 0.95 }}>동네 학원의 모든 것, 10to10이 바꿉니다.</div>
      </div>
    ),
    { ...size },
  );
}
```

**Step 4: `app/icon.tsx` (favicon — symbol-mint)**

```tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, background: "#50E3C2", borderRadius: 6,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "white", fontWeight: 900, fontSize: 14 }}>
        10
      </div>
    ),
    { ...size },
  );
}
```

**Step 5: Commit**

```bash
git add app/sitemap.ts app/robots.ts app/opengraph-image.tsx app/icon.tsx
git commit -m "feat(seo): add sitemap, robots, og image, icon"
```

---

## Task 17: 사용자 액션 체크리스트 (실제 출시 전 사용자가 직접 해야 할 일)

**Advisor 보강 #3·#6 반영.** Notion DB·환경변수·자산 일괄 처리.

### A. Notion 운영 DB 생성

사용자(또는 COO)가 노션에서 직접:

1. 새 데이터베이스 생성: 제목 `10to10 문의 (운영)`
2. 다음 속성을 정확히 같은 이름으로 추가 (한글 포함 그대로):
   - `이름` — Title
   - `연락처` — Phone
   - `학원명` — Text
   - `지역` — Text
   - `관심 패키지` — Select (옵션: `basic`, `premium`, `custom`)
   - `문의 내용` — Text
   - `source` — Select (옵션: `stage`, `platform`, `main`)
   - `상태` — Select (옵션: `신규`, `연락중`, `완료`, `보류`)
   - (자동) `생성시간` — Created time
3. DB 우측 상단 `Share` → `Add connections` → 기존 `EDUFLO Internal Integration` 추가 (= `NOTION_TOKEN` 의 integration). 권한 = `Can edit`
4. DB URL 복사. URL 의 32자리 hex (대시 제외) 가 `NOTION_INQUIRY_DB_ID`

### B. IR PDF 교체

`public/ir/10to10-deck.pdf` placeholder 를 실제 IR 자료로 교체:

```bash
cp "C:/Users/ricky/Desktop/<실제IR파일>.pdf" public/ir/10to10-deck.pdf
```

(현재 EDUFLO 디렉토리에 `ir_deck.pdf` 가 있다면 그 파일 사용)

### C. 카카오 채널 URL 발급

- 카카오 비즈니스(또는 오픈채팅) URL 발급
- 형식 예: `https://pf.kakao.com/_xxxxxx`

### D. 도메인 / 호스팅

- Vercel 프로젝트 생성 후 GitHub `10TO10PROJECT/10to10_homepage` 연결
- 환경변수 등록 (Production · Preview 모두):

```
NEXT_PUBLIC_SITE_URL          = https://10to10.co.kr   # 실 도메인 확정 후 갱신
NOTION_TOKEN                  = secret_xxx              # 기존 EDUFLO Integration 재활용
NOTION_INQUIRY_DB_ID          = xxxxxxxx                # A에서 받은 값
NEXT_PUBLIC_KAKAO_CHANNEL_URL = https://pf.kakao.com/_xxxxxx
RESEND_API_KEY                = (선택)
RESEND_TO_EMAIL               = contact@10to10.co.kr    # (선택)
```

- 도메인 `10to10.co.kr` 구매 + Vercel DNS 연결

### E. 팀 정보·법적 정보 확정

`lib/content/company.ts` 의 `bizNo`, `address` 를 실제 값으로 교체.

### F. 5/27 자정 회의 가격 변동 반영

가격이 바뀐 경우 `lib/content/stage.ts` 의 `STAGE_PRICING` 만 수정. 그 외 모든 곳은 자동 반영.

---

## Task 18: 최종 점검 — 빌드 / 린트 / 테스트 / 비주얼

**Step 1: 의존성 정리**

```bash
pnpm install
```

**Step 2: Lint**

```bash
pnpm lint
```

**Step 3: 테스트**

```bash
pnpm test
```

**Step 4: 프로덕션 빌드**

```bash
pnpm build
```

기대: 모든 페이지 정적 prerender 성공. `/api/inquiry` 만 dynamic.

**Step 5: Local preview**

```bash
pnpm start
```

브라우저에서 모든 페이지 + 폼 제출 (Notion 환경변수가 있으면 실제 row 생성 확인. 없으면 502 에러 확인).

**Step 6: Lighthouse 점검 (Chrome DevTools)**

- `/` · `/platform` · `/stage` 각각 90+ 목표 (Performance / Accessibility / Best Practices / SEO)

**Step 7: 모바일 확인 (DevTools 360px / 768px)**

**Step 8: prefers-reduced-motion 확인**

DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce → 모션 죽었는지 확인

**Step 9: 최종 commit + push**

```bash
git add .
git commit -m "chore: final polish + production build verified"
# GitHub remote 추가는 사용자가 수동:
# git remote add origin git@github.com:10TO10PROJECT/10to10_homepage.git
# git push -u origin main
```

---

## Task 19: 배포 (사용자가 수동 트리거)

본 Task 는 사용자가 직접 수행. Claude 는 가이드만.

1. GitHub Repo 생성 (`10TO10PROJECT/10to10_homepage`)
2. 로컬에서 `git remote add origin ...` + `git push -u origin main`
3. Vercel 대시보드에서 Import → Task 17.D 환경변수 입력 → Deploy
4. 첫 배포 후 `/api/inquiry` 폼 실제 제출 → Notion DB row 확인 (E2E 검증)
5. 도메인 연결 (Vercel → Project → Settings → Domains)

---

## 부록 A. Skill 참조

- `frontend-design`: UI 컴포넌트 작성 단계에서 참조
- `executing-plans`: 본 plan 실행
- `superpowers:debugging`: 빌드/배포 이슈 발생 시

## 부록 B. DRY / YAGNI 가드레일

- 가격·카피는 반드시 `lib/content/*` 수정 → 두 군데에 같은 문자열을 절대 두지 말 것
- `SITE.url` 외 다른 곳에서 `https://10to10.co.kr` 하드코딩 금지
- 로고는 `components/brand/Logo` 만 사용. SVG 직접 import 금지
- 다크모드·i18n·블로그·로그인 — 본 스코프 외. 추가하지 말 것

## 부록 C. 변경 시 영향 범위 표

| 변경 | 수정 파일 |
|---|---|
| STAGE 가격 변동 | `lib/content/stage.ts` 만 |
| 도메인 변경 | Vercel env `NEXT_PUBLIC_SITE_URL` 만 |
| 로고 색 추가 | `components/brand/Symbol.tsx` variant 확장 |
| Notion DB 컬럼 추가 | `lib/notion.ts` + `lib/schema/inquiry.ts` 동시 |
| 카톡 URL 변경 | Vercel env `NEXT_PUBLIC_KAKAO_CHANNEL_URL` 만 |

---

**END OF PLAN.**
