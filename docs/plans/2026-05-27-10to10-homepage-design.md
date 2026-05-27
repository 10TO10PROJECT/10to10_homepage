# 10to10 Company Homepage — Design

- **작성일:** 2026-05-27
- **작성자:** 신현우 (CEO) × Claude
- **저장소:** `10TO10PROJECT/10to10_homepage`
- **배포:** Vercel (도메인 placeholder: `10to10.co.kr`)
- **법인:** Link Earth Inc. (사명 10to10으로 변경 예정)

---

## 0. 결정 사항 (Q1–Q5)

| # | 결정 | 근거 요약 |
|---|---|---|
| Q1 | 1순위 청중·목적 = **종합 신뢰도(E)** 그릇 + **학원 영업 리드(A)** 1차 CTA. 투자자(B)는 IR 다운로드, 채용(C)은 메인 섹션 1개로 흡수 | 제품을 빛내는 게 핵심. 한 그릇 안에서 모든 청중 수용 |
| Q2 | IA = **하이브리드(C)** — 메인 1페이지 + `/platform`·`/stage` 별도 랜딩 | 회사·팀·채용은 메인 섹션. 제품 깊이는 별도 페이지로 영업 자료화 |
| Q3 | 비주얼 톤 = **K-에듀테크 하이브리드(D)** — 화이트 베이스 + 큰 타이포 + mint 포인트 + 절제 모션 | 학원장(40–50대)·학부모(30–40대)에 안전, 동시에 테크 자신감 유지 |
| Q4 | `/stage` 가격 = **시작가만 노출(C)** — "베이직 80만부터 / 프리미엄 200만부터" | 진입장벽 ↓ + 협상 룸 유지. 옵션은 "맞춤 견적" |
| Q5 | 리드 캡처 = **자체 폼 + Vercel Function → Notion DB** | 디자인 일관성 + 메모리 NOTION_TOKEN 재활용. 카톡 채널은 보조 CTA |

---

## 1. 기술 스택

```
Next.js 16 (App Router) + React 19 + TypeScript
Tailwind v4 (CSS-first @theme)
framer-motion 12 (fade · translate · stagger만)
zod (폼 검증)
@notionhq/client (서버 라우트에서 사용)
Resend (선택: 운영팀 알림 메일)
fontsource Pretendard Variable (self-hosted)
Vercel Analytics + Speed Insights
```

`prefers-reduced-motion` 존중. 모션 duration 200–400ms, easing `cubic-bezier(0.2, 0.8, 0.2, 1)`.

---

## 2. 라우팅

```
/                     메인 (회사 허브)
/platform             10to10 AI 플랫폼 상세
/stage                10to10 STAGE 상세 + 문의 폼
/api/inquiry          POST: 폼 → Notion DB (Vercel Function)
robots.txt, sitemap.xml, /opengraph-image.tsx 자동 생성
```

회사·팀·채용 별도 페이지 없음 — 메인 섹션으로 흡수.

---

## 3. 메인 페이지 (`/`)

| # | 섹션 | 내용 |
|---|---|---|
| 1 | **Hero** | 대형 타이포 슬로건 + sub + 듀얼 CTA(플랫폼/STAGE) + symbol 그라디언트 데코 |
| 2 | **문제** | 3 stat 카드 — 사교육 29.2조 / 14만 학원 / 정보는 맘카페에 |
| 3 | **두 제품** | 대형 듀얼 카드 — 좌 PLATFORM, 우 STAGE. hover 시 mint 글로우 |
| 4 | **숫자** | 16+ 파트너 학원 / 7명 팀 / Beta 운영 중 / Y-Compass·D2SF 지원 |
| 5 | **팀 · 비전** | 미션 1줄 + 비전 1줄 + 팀 7인 photo grid |
| 6 | **Careers strip** | "함께 교육 생태계를 혁신할 분을 찾습니다" + Notion 채용 외부 링크 |
| 7 | **CTA & 푸터** | 마무리 CTA + 카톡 + 회사 정보 (Link Earth → 10to10 변경 예정 안내) |

### Hero 카피 (1안)
- **메인:** "동네 학원의 모든 것, 10to10이 바꿉니다."
- **서브:** "AI 플랫폼과 운영 파트너십으로, 학원·학부모·학생을 연결합니다."
- **CTA:** `플랫폼 알아보기` · `STAGE 패키지 보기`

---

## 4. `/platform` — 10to10 AI 플랫폼

| # | 섹션 | 내용 |
|---|---|---|
| 1 | Hero | "AI가 학원을 운영하고, 학부모를 안내합니다" + 로드맵 mini-stat |
| 2 | 양면 플랫폼 | split — 학부모(탐색 에이전트) / 학원(운영 에이전트) |
| 3 | AI Agent 미리보기 | 4카드 — 상담 자동 요약 · 시간표 자동화 · 공지 생성 · 학원 비교 |
| 4 | 로드맵 | Beta 운영 중 → 7/28 정규 v1.0 → 9월 AI Agent 탑재 (horizontal progress) |
| 5 | Beta 체험 | eduflo.co.kr 외부 링크 + "정규 출시 알림 신청" 폼 |
| 6 | 파트너 학원 | 동의 받은 학원 로고/이름 strip (없으면 숨김) |
| 7 | 수익 모델 | SaaS 월 8만 / AI Agent 월 3만 / B2C 무료 — 3 카드 |
| 8 | CTA | "학원으로 등록" (카톡) / "투자·지원사업 문의" (이메일) |

---

## 5. `/stage` — 10to10 STAGE

학원장 영업 자료의 디지털 버전 (카톡 공유용).

| # | 섹션 | 내용 |
|---|---|---|
| 1 | Hero | "학원 홍보, 운영팀이 대신합니다" + sub |
| 2 | Why STAGE | 학원장 페인포인트 3카드 |
| 3 | 2 패키지 비교 | 베이직 vs 프리미엄. **80만부터 / 200만부터**. 프리미엄 BEST 배지 |
| 4 | 옵션 카탈로그 | 블로그·광고·숏폼·전단지·PPT·현장운영 — 가격 숨김, "맞춤 견적" |
| 5 | 진행 프로세스 | 4단계 — 문의 → 학원 인터뷰 → 자산 제작(1~2주) → 광고 ON |
| 6 | 케이스 | placeholder (사례 확보 시 노출) |
| 7 | FAQ | 정산·계약·소유권·광고비별도 5–6개 accordion |
| 8 | 문의 폼 | 자체 폼 (zod 검증) + 카톡 채널 보조 버튼 |

---

## 6. 컴포넌트 구조

```
components/
  ui/        Button, Card, Container, Badge, Accordion, Stat, Pill
  sections/  Hero, ProductCard, Stat, TeamGrid, CtaBlock, Footer
  layout/    Header, Footer, Nav
  motion/    FadeIn, StaggerChildren
  forms/     InquiryForm
  brand/     Logo (Symbol·Wordmark — variant: color | dark | gradient)
```

로고 자산: `public/brand/` 에 `(svg)symbol`·`symbol2`·`symbol3`·`wordmark`·`wordmark2` 복사 후 React 컴포넌트로 wrap.

---

## 7. 폼 백엔드 — `/api/inquiry`

```
POST /api/inquiry
Body:
  name: string (필수, 2–20자)
  phone: string (필수, 한국 휴대폰 포맷)
  academyName: string (필수)
  region: string
  package: 'basic' | 'premium' | 'custom'
  message: string
  source: 'stage' | 'platform' | 'main'
  honeypot: string (봇 차단용 hidden — 비어있어야 통과)

Flow:
  1. zod 검증 → 실패 시 422
  2. honeypot 검사 → 채워져 있으면 200 OK 가짜 응답
  3. @notionhq/client → Notion DB row 생성
  4. (선택) Resend → 운영팀 이메일 알림
  5. 200 OK { ok: true }
```

### 환경 변수 (Vercel)
- `NOTION_TOKEN` — 메모리 기존 Internal Integration 재활용
- `NOTION_INQUIRY_DB_ID` — 신규 운영용 DB ID
- `RESEND_API_KEY` (선택)
- `NEXT_PUBLIC_KAKAO_CHANNEL_URL` — 카톡 채널/오픈채팅 URL

### Notion DB 스키마 (운영용 신규 생성)
- 이름 (title)
- 연락처 (phone)
- 학원명 (rich_text)
- 지역 (rich_text)
- 관심 패키지 (select: basic/premium/custom)
- 문의 내용 (rich_text)
- source (select: stage/platform/main)
- 상태 (select: 신규/연락중/완료/보류)
- 생성시간 (created_time, 자동)

---

## 8. 디자인 토큰 (`app/globals.css` `@theme`)

```css
@theme {
  --color-mint-500: #50E3C2;  /* Primary */
  --color-mint-600: #2CC4A8;  /* Hover/Deep */
  --color-sky-500:  #15BDFF;  /* Secondary accent / gradient stop */
  --color-ink-900:  #1A1A1A;  /* Heading */
  --color-ink-700:  #4A4A4A;  /* Body */
  --color-ink-500:  #9B9B9B;  /* Subtle */
  --color-ink-300:  #D6D6D6;  /* Border */
  --color-ink-100:  #F5F5F5;  /* Surface */

  --font-sans: 'Pretendard Variable', system-ui, sans-serif;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 2rem;

  --ease-brand: cubic-bezier(0.2, 0.8, 0.2, 1);
  --dur-fast: 200ms;
  --dur-base: 320ms;
}
```

Typography scale (대형 타이포 톤):
- Display: 64–96px / line 1.05
- H1: 48–64px
- H2: 32–40px
- Body: 17–18px / line 1.6
- Small: 14–15px

---

## 9. SEO · OG · 분석

- `app/sitemap.ts`, `app/robots.ts`
- `app/opengraph-image.tsx` — 동적 OG (mint gradient + symbol)
- `app/icon.tsx` — symbol3 (mint) favicon
- `lang="ko"`, page별 metadata
- Vercel Analytics + Speed Insights
- 카카오톡 공유용 og:image / og:title 최적화

---

## 10. 배포

- GitHub: `10TO10PROJECT/10to10_homepage`
- Vercel 연결 (사용자가 수동 publish)
- 도메인 placeholder: `10to10.co.kr`
- 푸터 회사 정보: "**Link Earth Inc.** (사명 10to10으로 변경 예정) · 대표 신현우 · 사업자번호 [TBD]"

---

## 11. 비기능 요구사항

- **접근성:** WCAG AA. focus 링 가시, contrast 4.5:1+
- **성능:** Lighthouse 90+ (Performance/Accessibility/Best Practices/SEO 전부)
- **반응형:** 360px(모바일) / 768px(태블릿) / 1024px(노트북) / 1440px(데스크탑)
- **i18n:** 한국어 only (Q2/Q3 결정 — 영어 미지원)
- **다크모드:** 미지원 (라이트만, 톤 일관성 우선)

---

## 12. Out of Scope

- 블로그·뉴스룸 (콘텐츠 부족, 향후 별도 결정)
- 한·영 다국어 (현재 청중 한정)
- 다크모드 (톤 일관성)
- 회원가입·로그인 (정적 사이트)
- IR 데이터 룸 (자료는 외부 링크/메일로)

---

## 13. 산출물 (이 디자인 → 다음 단계)

1. **Implementation plan** — `writing-plans` skill로 작성 (다음 단계)
2. **frontend-design skill**로 빌드 시작
3. 1차 빌드 완료 후 GitHub push → Vercel 연결 (사용자 수동)
