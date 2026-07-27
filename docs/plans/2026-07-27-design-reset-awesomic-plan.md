# 디자인 재설정 계획 v2 — Awesomic(zinc grid) 번안 + 최종 홈페이지 구성 (2026-07-27)

> **입력**: `docs/design/DESIGN-awesomic.md` (스냅샷 — 원본 `C:\Users\ricky\Downloads\DESIGN (1).md`)
> **제약(락)**: 10to10 디자인 시스템 — Primary `#50E3C2` / Neutral 900~100, Pretendard 단일 폰트. BM 카피·수치 락 유지 (비주얼 레이어 교체 + 강조 순서 재검토만 허용). 가격 비노출 정책 유지.
> **v1→v2**: /plan-ceo-review(SELECTIVE EXPANSION) 결정 D1·D3·D4·D5·F1·T1·T2·T3 + 스펙 리뷰 정합 이슈 7건 반영.

## 1. 디자인 토큰 매핑 (Awesomic → 10to10)

| Awesomic | 10to10 번안 | 비고 |
|---|---|---|
| Canvas `#f4f4f5` | `--color-paper: #F4F4F5` | 기존 민트 페이퍼 `#FAFFFD` 폐기 |
| Snow `#ffffff` | 카드 서피스 white | |
| Cloud `#ececee` | `--color-cloud: #ECECEE` | 헤어라인 보더 전용 |
| Obsidian `#09090b` | `--color-ink-950: #0B0C0C` | 다크 CTA·딥 잉크 (순흑 금지) |
| Dark surface `#18181b`/`#27272a` | **기존 `ink-900 #1A1A1A` 재사용** | 다크 피처 블록·인버트 섹션. raw zinc 직수입 금지 (Neutral 락 준수) |
| graphite~ash 텍스트 스케일 | 기존 ink-700/500 재사용 | |
| Ember `#ff5a00` (액센트 뱃지) | **민트 `#50E3C2`** — 뱃지·크리덴셜·하이라이트 전용 | 대형 필·본문 텍스트 금지. 소형 민트 텍스트 금지(대비 미달) → 뱃지 = 민트 필 + ink-950 텍스트 |
| — | `--color-kakao: #FEE500` (**T2 예외**) | 카카오 CTA 전용 기능적 컬러. 카카오 공식 버튼 규격(옐로+심볼+다크 텍스트) |
| Cosmica 단일 폰트 | Pretendard 단일 | |
| 라디우스 cards 36 / buttons·inputs 14 / badges 12 / pills 10000 | 그대로 (`--radius-card: 36px` `--radius-btn: 14px` `--radius-badge: 12px`) + `--radius-break: 48px` (브레이크 이미지 전용, 명명 토큰으로 스케일 편입) | 각진 에디토리얼(5~8px) 폐기 |
| 카드 그림자 없음, 헤어라인 1px | 그대로. 민트 섀도 폐기. 다크 버튼만 inset 하이라이트 `inset 0 0.5px 0 rgba(255,255,255,.5)` + 1.5px 보더 | |
| body 14~15px compact | **F1 보정: body 16px(전환 섹션 17px), caption 13px 하한** | 40~60대 모바일 가독. 헤드라인·밀도·지오메트리는 Awesomic 그대로 (display 56~64 데스크톱 / clamp로 모바일 ~34px) |

**CTA 위계 (D3+T2 확정)**: primary = ink-950 다크 필 + 화이트 텍스트 + 화살표(대형). **단 카카오 상담 CTA만 `#FEE500` 옐로 + 카톡 심볼 + ink 텍스트** (기능적 컬러 예외 — 양 리뷰어 교차 지적 수용). 민트 = 뱃지·모객 보장·하이라이트만.
**푸터 (D4)**: 민트 밴드 폐기. ink-900 다크 푸터 마무리, 민트는 로고·호버.
**이미지**: 듀오톤 폐기, 원본 사진 + 대형 라디우스. 뱃지형 캡션 유지.

## 2. 최종 페이지 구성 (리뷰 확정)

### `/` 메인
1. **Hero (스플릿)** — 좌: display 헤드라인 "학원 설명회, 원장님은 발표만 하세요." + 풀케어 범위 칩 + 서브카피 / 우: 컴팩트 CTA 카드(카카오 옐로 CTA + "평균 응답 30분·영업 전화 없음" + 실측 지표 3줄)
2. **StatRow (신설, D5-①)** — 대형 숫자 행: **720만 원(설명회 1회 예상 학원 매출)** 중심 + 47명(자체 최다 모객) + 4.32/5.0(만족도). 출처 각주 병기. ※ CompanyStats(회사 지표)와 성격 구분 — 실적·ROI 지표 전용
3. **RoiBoard** — ink-900 다크 피처 블록(카드형 36px): 20명→6명→720만 계산 과정 + /stage CTA. StatRow=결과 숫자, RoiBoard=계산 서사로 역할 분리(중복 아님, 심리 1 재노출)
4. **DualProducts** — 화이트 카드 2장(36px 헤어라인): STAGE 우선(민트 뱃지) / AI 플랫폼(뉴트럴 뱃지)
5. **Breakthrough 이미지** — `/info-session/01-hall-wide.jpg` 풀블리드(라디우스 48px, 오버레이 없음). **폴백 규칙(T3): 렌더 품질 미달 시 섹션 제거하고 CompanyStats로 바로 연결**
6. **CompanyStats (다크 인버트)** — 회사 4지표(16+ 파트너·8 팀원·Beta·모두의 창업=민트 뱃지)
7. **MissionVision + MainCta** — 캔버스, 다크 CTA + 카카오 옐로 보조
- MarketStats 제거(파일 보존·미마운트 유지), SectionDivider 전 페이지 제거(하드 컷), StickyCta 유지(카카오 옐로 적용)

### `/stage` (순서 = 개편안 v2 §4 락, 지오메트리만 교체)
Hero(스플릿+현장 사진 카드) → Painpoints(ink-900 다크 피처 블록·화살표 리스트) → RoiBoard → InfoSessionFlagship(다크·사진 원색) → WhyUs(화이트 카드 그리드) → **GuaranteeBanner(민트 최대 강조 위치 — 사이트 전체에서 민트 필 사용은 뱃지류+이 배너만)** → Process → FAQ → Phase2 → Contact(카카오 옐로 1순위 + 3필드 폼)

### 서브 페이지 (D1+T1: 순차 풀 재스킨)
**작업 순서: ① /·/stage·/inquiry 완성 → ② 빌드·모바일 검증 → ③ /platform·/invest·/team·/careers 레이아웃 이식** — 같은 브랜치 내 순차. 전환 페이지 완성도가 우선, 서브도 최종적으로 Awesomic 문법 전면 적용.

### Header
스티키, canvas 배경(#F4F4F5)·스크롤 시 하단 헤어라인, 로고 좌 / 내비 중앙(15px) / 다크 pill CTA 우("학원 문의").

## 3. 작업 범위 (파일 단위)
- globals.css 토큰 재설정 + Button(다크/카카오/뉴트럴)·Badge(민트 액센트/뉴트럴 아웃라인/뉴트럴 필 3종)·Card(36px)·Pill·StickyCta 재작성, SectionDivider 사용처 제거
- 신설: `StatRow.tsx`, `BreakImage.tsx` / 제거 마운트: MarketStats
- Hero(스플릿)·RoiBoard·DualProducts·CompanyStats·MissionVision·MainCta·Footer·Header 재작성
- stage 섹션 8종 지오메트리 교체(카피 불변, 강조 순서만 §2 준수 재검토)
- 서브 4페이지 + /inquiry 레이아웃 이식
- `docs/design/DESIGN-awesomic.md` 스냅샷 커밋

## 4. CEO 리뷰 결정 레지스터 (2026-07-27 /plan-ceo-review · SELECTIVE EXPANSION)
| ID | 결정 | 내용 |
|---|---|---|
| D1 | 풀 재스킨 | 전 페이지 레이아웃까지 이식 (T1로 순서 보정) |
| D3 | 다크 CTA | primary=다크 필, 민트=뱃지 강등 (T2로 카카오 예외) |
| D4 | 푸터 민트 밴드 폐기 | 다크 푸터 마무리 |
| D5-① | 스탯 로우 채택 | 학원 ROI(720만) 강조형. "5~7배 회수" 표현 금지(티어가 역산 방지) |
| F1 | 타입 보정 | body 16~17px·caption 13px 하한 (타깃 가독) |
| T1 | 순차 풀 재스킨 | 전환 페이지 → 검증 → 서브 |
| T2 | 카카오 옐로 예외 | 카카오 CTA만 #FEE500 (양 리뷰어 교차 지적 수용) |
| T3 | 모바일 스펙·검증 확장 | §5 |
| NOT in scope | D5-②③④ | 메인 FAQ 티저 / 후기 카드(인용 1건뿐) / OG 이미지 리뉴얼 — ④는 신규 룩과 OG 불일치가 알려진 부채로 남음 |

## 5. 모바일 퍼스트 스펙 + 검증 (T3)
- **모바일 첫 화면(≤ 812px 높이) 필수 요소**: 헤드라인 + 카카오 CTA + 실측 지표 1줄 — 스플릿 히어로는 모바일에서 헤드라인 → CTA 카드 → 칩 순으로 스택 (칩이 CTA를 밀어내지 않게)
- **이미지 규율**: next/image `sizes` 전 구간 명시, priority는 히어로 1장만, 브레이크 이미지 quality≤75, LCP는 텍스트 우선
- **검증 체크리스트**: next build 클린 → 금지 수치 grep(공급가 40만·100만·130만·베이직/프리미엄·7/28·9월, ir-deck 제외) → 배포 후 SSR grep → **모바일 360/390px 뷰 확인(카톡 인앱 시나리오) → 첫 화면 CTA 노출 확인 → LCP 체감 확인**

## 6. ROI 신뢰 보강 (Codex #6 — 기반영 확인)
RoiBoard 각주("보수적 가정·자체 실적 47명·학원장 인터뷰 수집 데이터") 유지 + StatRow에도 출처 각주 병기. "예상"이라는 한정어 유지.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 1 | CLEAR | 4 proposals, 1 accepted, 0 deferred · 결정 9건 락(D1·D3·D4·D5-①·F1·T1·T2·T3) |
| Codex Review | `/codex review` | Independent 2nd opinion | 1 | ISSUES_ABSORBED | 10건 지적 → 3건 텐션 결정(T1~T3)·5건 계획 보강·2건 기반영 확인 |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | — | — |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | — |

- **CODEX:** 풀 재스킨 범위·다크 카카오 CTA·모바일 우선·15px 가독성 지적 — T1(순차)·T2(카카오 옐로 예외)·T3(모바일 스펙·검증 확장)·F1(타입 보정)으로 전부 흡수. 스펙 리뷰어(Claude 서브에이전트, 6.5/10)와 카카오 CTA·문서 정합 지적 교차 일치 → v2에서 해소.
- **CROSS-MODEL:** 카카오 CTA 색상에서 양 모델 독립 일치(강한 신호) — CEO가 옐로 예외 채택. body 축소 반대도 일치 — F1 보정 채택.
- **VERDICT:** CEO CLEARED — ready to implement (eng review 미실행: 비주얼 레이어 전용·마이그레이션 0건으로 CEO 판단 하에 구현 직행).

NO UNRESOLVED DECISIONS
