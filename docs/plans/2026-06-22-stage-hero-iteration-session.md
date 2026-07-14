# 10to10 홈페이지 — STAGE 히어로 / 섹션 전환 / 문의 분기 작업 히스토리

작성일: 2026-06-22 (세션 종료 시점 기준)
범위: PR #17 ~ PR #23 (총 7 PR 머지 완료)
브랜치: 모두 `main`에 squash merge + 브랜치 삭제
배포: Vercel auto-deploy on `main` push → https://10to10.kr

---

## 한눈에 보기

| PR | 일자 | 제목 | 머지 커밋 |
|----|------|------|-----------|
| [#17](https://github.com/10TO10PROJECT/10to10_homepage/pull/17) | 06-18 | feat(stage): 히어로에 설명회 풀케어 플래그십 강조 | `8f72dd4` |
| [#18](https://github.com/10TO10PROJECT/10to10_homepage/pull/18) | 06-18 | fix(stage): 히어로 중복 설명회 CTA 제거·남은 버튼 강조 | `dff5e8d` |
| [#19](https://github.com/10TO10PROJECT/10to10_homepage/pull/19) | 06-18 | feat(stage): FLAGSHIP 카드 다크 강조 + 히어로에 설명회 사진 추가 | `8852bb1` |
| [#20](https://github.com/10TO10PROJECT/10to10_homepage/pull/20) | 06-22 | fix(stage): 폼 pre-fill 시스템 + Suspense 경계로 prerender 복구 | `f4c2192` |
| [#21](https://github.com/10TO10PROJECT/10to10_homepage/pull/21) | 06-22 | feat(ui): 섹션 간 그라데이션 전환 시스템 도입 | `f85ba2a` |
| [#22](https://github.com/10TO10PROJECT/10to10_homepage/pull/22) | 06-22 | refactor(stage/hero): 설명회 풀케어 + 에이전트 패키지 2분할, 다크 그라데이션 카드 폐기 | `572a474` |
| [#23](https://github.com/10TO10PROJECT/10to10_homepage/pull/23) | 06-22 | feat(inquiry): /inquiry 분기 페이지 신설 + 학원 문의 CTA 라우팅 전환 | `411424a` |

---

## PR #17 — 설명회 풀케어 플래그십 강조 (Round D)

### 사용자 요청
> 10to10 stage 히어로 섹션에서 설명회에 대한 서비스도 강조되었으면 해. 우리의 당장에 메인 서비스가 될 예정이기도 하고.

### 변경 내역
- `components/sections/stage/StageHero.tsx`
- 히어로에 FLAGSHIP 라벨 + "설명회 풀케어" 다크 카드 신규 추가
- 트러스트 라인 강화: 만족도 4.32 / 5.0 · 재참석 의사 100% · 연 단위 정찰 가격
- 좌측 텍스트 박스 + 우측 네이버 플레이스 이미지 그리드 유지

### SSR 검증
- `FLAGSHIP`, `설명회 풀케어 보기`, `4.32`, `재참석 의사 100%` 모두 노출 확인

---

## PR #18 — 중복 CTA 제거·버튼 강조 (Round E)

### 사용자 요청
> 두 개의 설명회 페이지로 넘어가는 중복 버튼이야. 하나는 삭제하고, 조금 더 눈에 띄는 색깔로 버튼들을 표기했으면 해.

### 변경 내역
- `components/sections/stage/StageHero.tsx`
- 중복 "설명회 풀케어 보기" CTA 1건 제거
- 패키지 보기 / 무료 상담 신청 두 CTA에 shadow + hover lift 추가
  - 패키지 보기: `shadow-mint-600/30` → `shadow-xl shadow-mint-600/40` + `-translate-y-0.5`
  - 무료 상담 신청: `shadow-ink-900/20` → `shadow-xl shadow-ink-900/30` + `-translate-y-0.5`

---

## PR #19 — FLAGSHIP 다크 카드 + 설명회 사진 (Round F)

### 사용자 요청
> 설명회 풀케어 버튼이 조금 더 눈에 띄는 색깔이었으면 좋겠어. 그리고 히어로 섹션에 (네이버 플레이스 이미지)뿐만 아니라 우리가 주최했던 설명회에 대한 사진도 들어갔으면 한다.

### 변경 내역
- `components/sections/stage/StageHero.tsx`
- FLAGSHIP 카드 다크 그라데이션 + 민트 ring + 청록 블러 광원 적용
  - `bg-gradient-to-br from-ink-900 via-ink-900 to-#0a3d36`
  - `ring-2 ring-mint-500/60` + `shadow-xl shadow-mint-600/30`
  - 우상단 mint blur / 좌하단 sky blur 광원 2개
- 우측 이미지: 큰 네이버 플레이스 이미지 + 3개 정사각 설명회 썸네일
  - `/info-session/01-hall-wide.jpg` (설명회 현장)
  - `/info-session/03-speaker-male.jpg` (전문 연사)
  - `/info-session/04-booklet.jpg` (인쇄물)

---

## PR #20 — 폼 pre-fill 시스템 + Suspense 복구 (Round G P0)

### 사용자 요청
TRACK A/B/C 3트랙 QA 프롬프트. TRACK A에서 폼 pre-fill 동작·핸들러 검증, TRACK B에서 6/14·6/20 lock sync, TRACK C에서 일반 QA.

### 발견된 P0 이슈
1. **빌드 실패**: `useSearchParams()` Suspense 미감싸 prerender 불가
2. **CTA pre-fill 결락**: Packages 베이직/프리미엄 문의 버튼이 `?service=`를 안 붙임

### 변경 내역
- `components/forms/InquiryForm.tsx`
  - `useSearchParams()` 추가, `SERVICE_TO_PACKAGE` 매핑 테이블로 `?service=` 파라미터 → 패키지 select 자동 선택
  ```ts
  const SERVICE_TO_PACKAGE: Record<string, PackageValue> = {
    basic: "basic",
    premium: "premium",
    info_session: "info_session",
    "blog-build": "blog_build",
    "offline-print": "custom",
  };
  ```
- `components/sections/stage/StageContact.tsx`
  - `<Suspense fallback>`로 `InquiryForm` 래핑 → SSR prerender 복구
- `components/sections/stage/Packages.tsx`
  - 베이직/프리미엄 CTA href를 `?service=${p.id}#contact`로 변경
- `components/sections/stage/Options.tsx`
  - 카드 전체를 `?service=${o.id}#contact` 링크로 래핑
- `components/sections/stage/InfoSessionFlagship.tsx`
  - 풀케어 CTA href에 `?service=info_session` 프리펜드

### 부가 작업
- gh 토큰 만료 → 사용자가 `gh auth login -h github.com -w -p https -s repo,workflow,read:org` 실행 후 복구
- 사용자가 PAT를 공개 채팅에 붙여넣은 사건 → 토큰 revoke 안내 (github.com/settings/tokens)

---

## PR #21 — 섹션 간 그라데이션 전환 시스템 (Round H)

### 사용자 요청
> 여기 부분 섹션 전환이 너무 딱 붙어 있어서 부자연스러워. 좀 더 간격을 두고 그라데이션으로 넘어갔으면 한다. 비단 해당 부분 뿐 아니라, 모든 페이지들에서 스크롤하며 섹션이 전환될 때 자연스러운 그라데이션 전환이 이루어졌으면 한다.

### 변경 내역
- 신규 `components/ui/SectionDivider.tsx`
  - 톤 4종: `white` (#FFFFFF) / `muted` (#FAFAFA, ink-50) / `dark` (#1A1A1A, ink-900) / `mint` (#E6FAF5, mint-100)
  - 사이즈 3종: `sm` (h-12 md:h-16) / `md` (h-20 md:h-24, 기본) / `lg` (h-28 md:h-36)
  - `linear-gradient(to bottom, fromHex, toHex)` 한 줄 + `pointer-events-none aria-hidden`

- 5개 페이지 적용
  - `app/page.tsx`: Hero→MarketStats→DualProducts→**CompanyStats(dark, lg)**→MissionVision→MainCta
  - `app/stage/page.tsx`: 9개 전환 포인트 (Packages→**InfoSessionFlagship(dark, lg)**→Options 다크 진입/이탈)
  - `app/platform/page.tsx`: Revenue→**PlatformCta(dark, lg)** + 동일톤(muted) 구간은 디바이더 생략
  - `app/careers/page.tsx`: 인라인 섹션 사이 4곳 + 마지막 `pb-only` 섹션에 `pt-16 md:pt-20` 보강
  - `app/invest/page.tsx`: Hero→Highlights→IR Deck 2곳

### SSR 검증
```
/stage: linear-gradient(to bottom, #FFFFFF 0%, #1A1A1A 100%) 등 4종
/    : #FFFFFF→#1A1A1A, #1A1A1A→#FFFFFF (CompanyStats 진입/이탈)
/platform: #FAFAFA→#1A1A1A (PlatformCta 진입)
```

---

## PR #22 — STAGE 히어로 2분할 재설계

### 사용자 요청
> 우리 아이템명을 설명회 풀케어와 에이전트 패키지로 갔으면 하고, 히어로를 2분할 하여 설명회에 대한 버튼과 함께 설명회에 대한 사진을, 에이전트 패키지에 대한 설명 사진과 함께 에이전트 패키지로 넘어가는 버튼을 배치하면 좋겠어. 그리고 설명회 패키지로 넘어가는 버튼이 너무 ai틱하다. 설명회 풀케어라는 제목이 좀 더 글씨가 컸으면 좋겠고, 민트색으로 외곽선을 딴게 너무 ai 틱하고, 내부 어두운 청록색의 그라데이션도 너무 ai틱해. 조금 ai 느낌을 빼고 고급스럽게 진행해봐.

### 변경 내역
- `components/sections/stage/StageHero.tsx` 전면 재설계
- **상단**: PRODUCT 02 배지 + 큰 H1 + "두 가지 트랙 — 설명회 풀케어와 에이전트 패키지" 서브카피
- **하단 2분할 카드** (md:grid-cols-2)

| | 좌측 (설명회 풀케어) | 우측 (에이전트 패키지) |
|---|---|---|
| eyebrow | FLAGSHIP · 1회성 프로젝트 | SUBSCRIPTION · 연 단위 정찰가 |
| title | 설명회 풀케어 (`text-3xl md:text-4xl`) | 에이전트 패키지 |
| image | `/info-session/01-hall-wide.jpg` (aspect-4/3) | `/stage-mockups/10-place-hero.jpg` |
| CTA | 설명회 자세히 보기 → (ink-900) | 에이전트 패키지 보기 → (mint-500) |
| link | `#info-session` | `#packages` |

### 폐기한 요소 (AI틱한 느낌 제거)
- 다크 그라데이션 `from-ink-900 via-ink-900 to-#0a3d36` 카드
- `ring-2 ring-mint-500/60` 민트 외곽선
- 청록 mint/sky blur 광원 2개
- 좌측 콜라주(place-hero 큰 이미지 + 3개 썸네일) → 카드 사진으로 통합 재사용

### 신규 디자인 톤
- 흰 카드 + `ring-1 ring-ink-300/40` + `shadow-lg shadow-ink-900/5`
- hover: `shadow-2xl shadow-ink-900/10` + `-translate-y-0.5`
- 사진 호버 시 `scale-[1.03]` zoom

### SSR 검증
- 6개 핵심 문구(FLAGSHIP · 1회성 / SUBSCRIPTION · 연 단위 정찰가 / 설명회 풀케어 / 에이전트 패키지 / 설명회 자세히 보기 / 에이전트 패키지 보기) 모두 노출
- `to-[#0a3d36]`, `ring-mint-500` 매칭 0건으로 폐기 확인

---

## PR #23 — /inquiry 분기 페이지 신설

### 사용자 요청
> 학원 문의 누르면 자동으로 stage로 들어가지던데 문의 누르면 ai 플랫폼에 대한 신청인지 stage에 대한 문의인지 1차적으로 구분하는 분기가 있어야 할 것 같아.

### 변경 내역
- 신규 `app/inquiry/page.tsx`
  - H1 "어떤 문의를 하시나요?" + 2분할 카드
  - PR #22 STAGE 히어로와 동일한 카드 디자인 톤 (흰 배경 · ring-ink-300/40 · shadow-lg · hover lift)

| | 좌측 (AI 플랫폼) | 우측 (STAGE) |
|---|---|---|
| eyebrow | PRODUCT 01 · 10to10 AI 플랫폼 | PRODUCT 02 · 10to10 STAGE |
| 제목 | AI 플랫폼 도입·체험 | STAGE 마케팅·설명회 문의 |
| bullets | SaaS / 학부모 앱 / AI 에이전트 | 설명회 풀케어 / 에이전트 패키지 / 단발 의뢰 |
| primary CTA | Beta 바로 체험하기 → eduflo.co.kr (external) | STAGE 문의하기 → /stage#contact |
| secondary | 플랫폼 자세히 보기 → /platform | STAGE 자세히 보기 → /stage |

- 하단 fallback: "어떤 트랙인지 모르겠다면 STAGE 문의 폼" 안내

- `components/layout/Header.tsx` CTA 라우팅 전환
  - 데스크탑 "학원 문의" Button: `/stage` → `/inquiry`
  - 모바일 메뉴 "학원 문의 →" Link: `/stage` → `/inquiry`

### SSR 검증
- `/inquiry` HTTP 200
- 5개 문구(어떤 문의를 하시나요 / AI 플랫폼 도입·체험 / STAGE 마케팅·설명회 문의 / Beta 바로 체험하기 / STAGE 문의하기) 모두 노출
- 홈 헤더 `href="/inquiry"` 1건 확인

### 영향받지 않은 링크
다른 `/stage` 진입점은 의도된 STAGE 전용 CTA이므로 유지:
- Footer, Hero CTA, DualProducts 카드, MainCta

---

## 미해결·후속 작업

### P1 이전 QA에서 도출된 항목 (PR #20 부속, 미반영)
- 월간 리포트 7항목 풀 노출
- 설명회 100→50 오픈세일 가격 표시
- STAGE_GALLERY 디스클레이머 보강 (SKY 200/의대 10 콘텐츠 샘플 명시)

### 보안 후속
- 사용자 노출 PAT 토큰 revoke 확인 필요 (github.com/settings/tokens)

---

## 작업 환경 메모

- 브랜치 전략: `feat/*` 또는 `fix/*` → squash merge + `--delete-branch`
- 빌드 검증: PR 생성 전 `npx next build` 클린 확인 의무
- 배포 검증: 머지 후 ~3분 대기, `curl -s` + grep으로 SSR HTML 검증 (React 19 SSR이 텍스트 노드를 split할 수 있어 grep 패턴은 부분 매칭 사용)
- 가용 자산:
  - `public/info-session/` — 01 hall-wide, 02 speaker-female, 03 speaker-male, 04 booklet, 05 hall-app
  - `public/stage-mockups/` — 01 instructor, 02 app-chat, 03 100points, 04 results, 06 trophy, 07 mobile-page, 08 grade1, 10 place-hero, 11 summer

- 컬러 토큰 (app/globals.css)
  - mint-50 #F0FBF7 / mint-100 #E6FAF5 / mint-500 #50E3C2 / mint-600 #2CC4A8
  - sky-500 #15BDFF
  - ink-900 #1A1A1A → ink-50 #FAFAFA 6단계
