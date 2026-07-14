# Phase 전략 채택 · 홈페이지 전반 재정렬 계획

작성일: 2026-07-07
근거: [7/6(월) 회의 & 2주 sprint 기획](https://app.notion.com/p/396f122eb1e4807d8a62d74ff60464f4) — Phase 접근법 락
전임 계획: [2026-06-24 BM v2 반영 계획](./2026-06-24-stage-bm-v2-notion-sync-plan.md) — 본 문서로 **부분 슈퍼시드**
상태: **CEO 컨펌 대기**

---

## 0. TL;DR (5줄)
1. **Phase 접근법 락**: Phase 1 = 학원 설명회 시장 집중 (현재) / Phase 2 = 기존 STAGE 서비스 확장 / Phase 3 = SaaS 올인원
2. **6/24 BM v2 계획 부분 슈퍼시드**: 블로그 팩 3종·Basic/Premium 재정의·S0~S9 9섹션 재구조화는 **Phase 2로 이월**. Phase 1은 설명회 단독 강조로 회귀.
3. **STAGE 히어로 재편**: 현재 2분할(설명회 풀케어 + 에이전트 패키지) → **설명회 풀케어 단독 메인** + Phase 2 로드맵 티저로 좌측 강화
4. **AI 도구 학습 이력 노출**: 워들리·Finhive Studio 활용 기록을 IR·투자·team 페이지에 반영 (모두의창업 제출용)
5. **인스타그램 성장 트랙**: 본계정 신뢰도·인지도 확보. 홈페이지 footer·team에 계정 링크 노출 검토

---

## 1. 7/6 회의 핵심 요약

### 1-1. Phase 로드맵
| Phase | 시점 | 초점 | 핵심 지표 |
|---|---|---|---|
| **Phase 1** | 현재 (Sprint 2주 · ~7/19) | 학원 **설명회** 시장 집중 (기획·홍보·신청·후기) | 파트너 학원 확보 |
| **Phase 2** | Phase 1 완료 후 | 확보 학원 대상 STAGE 확장 (블로그·인스타·네이버 플레이스·소식탭·배너) | 서비스 확장 · ARPU |
| **Phase 3** | 향후 검토 | SaaS 확장 — 네이버·미리캔버스·블로그·인스타 통합 관리 학원 전용 올인원 | 자동화·플랫폼화 |

### 1-2. 인스타그램 성장 트랙 (본계정)
- **목적**: 트래픽 확보 / 신뢰도 형성 / "학원 마케팅 전문 계정" 포지셔닝
- **콘텐츠 방향**: 인물 출연형 — 마케터 등장 (얼굴 미노출), 강사/원장 인터뷰, 현장형 콘텐츠, 정보형 릴스
- **이유**: 학원 전문 소셜 계정 부재 → 파이 선점 → 브랜드 자산화 → Phase 2 확장 기반

### 1-3. AI 도구 활용 (모두의창업 제출)
- **워들리**: 설명회 홍보 블로그·학부모 정보성 글·후기형 글 초안
- **Finhive Studio**: 설명회 콘텐츠 플로우·인스타 기획·카드뉴스/릴스 아이디어

### 1-4. 2주 스프린트 최종 산출물 (7/19)
- Phase 1 설명회 서비스 정리본
- 설명회 패키지 구성안
- 인스타그램 실제 세팅 + 콘텐츠 카테고리 + 업로드 최소 2개
- 모두의창업 제출용 워들리 3건 · Finhive 1~2건 활용 기록

---

## 2. 6/24 BM v2 계획 재조정 — Phase별 이월 매트릭스

| 6/24 계획 항목 | 상태 | 처리 |
|---|---|---|
| STAGE 9섹션 재구조화(S0~S9) | ⏸ 부분 이월 | Phase 2로 이월. Phase 1은 히어로 재편 + 설명회 강조에 집중 |
| Basic/Premium 재정의 (5요소·3요소) | ⏸ Phase 2 | Phase 1에는 노출 최소화 (히어로 티저 or 숨김) |
| 블로그 팩 3종 (55/45/80만) + 단건 3티어 | ⏸ Phase 2 | Phase 2 시점 도입 |
| Options 3개 옵션 재편 | ⏸ Phase 2 | 현재 유지 |
| 폼 스키마 확장 (blog_setup/monthly_4/monthly_8 등) | ⏸ Phase 2 | `info_session` 위주로 정리 |
| **"첫인상 진단" CTA** | ✅ 즉시 적용 여지 | 히어로 CTA `첫인상 진단 문의하기` 문구는 그대로 유효 (Phase 무관) |
| **미리캔버스 반론 카피 (S1)** | ✅ 즉시 적용 | Painpoints 카피 갱신에 활용 가능 |
| **Before/After 비교표 (S2)** | ⏸ Phase 2 | 블로그·플레이스 확장 후 재조명 |
| **탭 갤러리 (S5)** | ⏸ Phase 2 | 설명회 갤러리는 유지, 채널별 탭은 Phase 2 |
| **StageSteps 5단 (S8)** | 검토 | Phase 1에서도 설명회 진행 프로세스 5단은 유효 → 활용 |

---

## 3. 홈페이지 전 페이지 반영 매트릭스

### 3-1. `/stage` — 설명회 단독 메인으로 재정렬 (P0)

**히어로 (`StageHero.tsx`)**
- 좌측: **설명회 풀케어 단독 강조** — "학원 설명회, 원장님은 발표만" 톤 유지
- 우측: 설명회 사진 콜라주 (기존 `/info-session/*.jpg` 활용) 또는 문의 CTA 강화
- 에이전트 패키지 카드 = **"Phase 2 예정" 소형 티저** 또는 **완전 제거**
- CTA: `설명회 풀케어 견적 문의` (primary) + `설명회 자세히 보기` (secondary)

**섹션 순서 조정**
```
StageHero (설명회 단독)
InfoSessionFlagship  ← Phase 1 메인 상세
Painpoints (미리캔버스 반론 톤 갱신)
WhyUs (설명회 관점으로 카피 조정)
Process (설명회 진행 5단으로 조정)
StageContact (설명회 견적 문의 폼)

⏸ Packages / Options / StageGallery / BlogPacks — Phase 2로 이월. 별도 페이지 or 하단 접힘 or 삭제
```

**폼 스키마 정리** (`lib/schema/inquiry.ts`)
- `package` enum 축소: `["info_session", "custom"]` 위주 + `basic/premium/blog_build/offline-print`는 Phase 2까지 유지 (기존 URL 파라미터 호환)

### 3-2. `/` (메인) — CTA·카피 조정 (P0)

- `Hero` CTA: 기존 STAGE로 링크 유지. 서브 카피에 "설명회 풀케어"만 명시적으로 노출
- `DualProducts` 카드 우측(STAGE): 카피를 "학원 설명회 풀케어 — 원장님은 발표만" 톤으로 조정. Phase 2 확장 티저 소형 뱃지
- `CompanyStats` 항목에 "AI 도구 학습" or "모두의 창업 · Phase 1 진행" 지표 추가 검토

### 3-3. `/inquiry` (문의 분기) — 카드 카피 조정 (P0)

- 좌측 (AI 플랫폼) 카드: **"Phase 3 SaaS 방향"** 문구 소형 뱃지. Beta 체험 링크는 유지
- 우측 (STAGE) 카드: 부제를 "**학원 설명회 풀케어 (Phase 1)** — 마케팅 확장은 Phase 2 이후"로 명확화

### 3-4. `/platform` — Phase 3 SaaS 관점 로드맵 조정 (P1)

- `Roadmap` 섹션에 **Phase 3 = SaaS 확장** 표기. 현재 Beta 진행은 Phase 3의 준비 단계로 스토리라인화
- `Agents` 섹션 유지, 카피는 "네이버·미리캔버스·블로그·인스타 통합 관리" 방향으로 조정

### 3-5. `/invest` — Phase 로드맵 공개 (P1)

- `INVEST_HIGHLIGHTS`에 **Phase 로드맵 3단 카드** 추가
- IR 자료 다운로드 근처에 "AI 도구 활용 · 모두의창업 선정 · Phase 1 진행 중" 지표 명시
- 향후 IR PDF 재생성 시 Phase 로드맵 반영

### 3-6. `/team` — Phase 진행 현황 노출 (P2)

- 하단에 "Phase 1 Sprint 진행 중 · 2주 단위 · 7/19 완료 목표" 배지
- CEO+예솜님 파트너쉽 스토리 강화

### 3-7. Footer / 소셜 링크 — 인스타그램 계정 노출 (P1 · Q7 확인 후)

- 본계정 인스타그램 URL 노출 (사일런트는 절대 노출 X — Two-way 마케팅 락)
- 카카오톡 채널 + 인스타 아이콘 병기

---

## 4. 우선순위 분류

### P0 · 즉시 반영 (Phase 1 시작 대응)
- STAGE 히어로 설명회 단독 재편 + 에이전트 패키지 제거/티저화
- STAGE 섹션 순서 재정렬 (Packages/Options/Gallery 임시 숨김 or 접힘)
- `/inquiry` 카드 카피 Phase 명시
- 메인 `Hero`·`DualProducts` 카피 조정
- 폼 스키마 유지 (`info_session` 위주, 다른 옵션은 URL 호환용 유지)

### P1 · Phase 1 sprint 중 반영 (~7/19)
- 인스타그램 링크 footer/team 노출
- `/invest` 페이지 Phase 로드맵 3단 카드 신설
- `/platform` Phase 3 문구 조정
- 모두의창업/AI 도구 활용 카드 (invest 페이지 + 메인 CompanyStats)

### P2 · Phase 2 착수 시 반영 (이후)
- Basic/Premium 5요소·3요소 재정의 (6/24 계획 활용)
- 블로그 팩 3종 + BlogPacks 컴포넌트 신설
- ProofTabs 채널별 5탭 갤러리
- WhyOverDIY (S2) 신규 섹션
- 폼 스키마 확장 (blog_setup/monthly_4/monthly_8)

---

## 5. 예상 PR 로드맵 (5개)

| PR | 범위 | 브랜치 | 예상 파일 |
|---|---|---|---|
| **PR-α** | STAGE 히어로 설명회 단독 재편 + 에이전트 카드 제거/티저 | `feat/phase1-stage-hero-realign` | 2~3 |
| **PR-β** | STAGE 섹션 순서 조정 + Phase 2 예정 접힘 | `feat/phase1-stage-sections-order` | 2~3 |
| **PR-γ** | 메인·inquiry 카피 Phase 명시 + AI 도구 배지 | `feat/phase1-copy-alignment` | 4~5 |
| **PR-δ** | invest Phase 로드맵 3단 카드 + 모두의창업 강조 | `feat/phase1-invest-roadmap` | 2~3 |
| **PR-ε** | 인스타그램 링크 + Footer 소셜 아이콘 (Q7 컨펌 후) | `feat/phase1-social-links` | 2 |

각 PR: `next build` 클린 → squash merge + 브랜치 삭제 룰 유지.

---

## 6. Open Questions · CEO 컨펌 필요

### 지난 Q1~Q7 (6/24) 상태 갱신

| # | 이슈 | 이번 회의 후 상태 |
|---|---|---|
| Q1 | Basic 월간 운영 리포트 이관 | ⏸ Phase 2 이월 — 지금 결정 불필요 |
| Q2 | "첫인상 진단" 폼 옵션 | 여전히 유효. 히어로 CTA로 유지 시 자동 선택 방식 결정 필요 |
| Q3 | 블로그 팩 진입 위치 | ⏸ Phase 2 이월 |
| Q4 | InfoSessionFlagship 위치 | **바뀜: 메인 히어로 바로 아래 = Phase 1 메인 상세** 위치로 승격 |
| Q5 | StageGallery 처리 | Phase 1은 설명회 갤러리 위주로 정리, Phase 2에 채널 탭 도입 |
| Q6 | 블로그 팩 가격 노출 수위 | ⏸ Phase 2 이월 |
| Q7 | PR 순서 | 새로운 α~ε 로드맵으로 재구성 |

### 이번 회의 신규 Q (7건)

**Q8. 에이전트 패키지 카드 처리**
현재 히어로 우측 "에이전트 패키지" 카드 어떻게 할지?
- A. 완전 제거
- B. "Phase 2 예정" 소형 티저로 하단 이동
- C. 별도 페이지 `/stage/packages`로 이동 (콘텐츠 유지)

**Q9. Packages/Options/BlogPacks 섹션 임시 처리**
- A. 완전 숨김 (Phase 2까지 노출 X)
- B. `<details>` 접힘형 or "Phase 2 예정" 카드 1개로 압축
- C. `?phase=2` URL 파라미터로 프리뷰 노출

**Q10. STAGE 페이지 URL 리다이렉트**
현재 `#packages`, `#info-session` 앵커 사용 중. Phase 1 후 링크 정리 필요?
- A. 유지 (호환용)
- B. `#info-session` 우선, 나머지 앵커 폐기
- C. 완전 재작성

**Q11. 인스타그램 본계정 URL 노출**
- A. Footer + Team 하단 노출 (Phase 1 프로모션)
- B. Team 하단만
- C. 아직 노출 X (팔로워 확보 후)

**Q12. 사일런트 계정**
Two-way 마케팅 락에 따르면 사일런트는 홈페이지 노출 X 원칙. 재확인 필요?
- A. 락 유지 · 홈페이지 노출 절대 X
- B. 조건부 노출

**Q13. `/invest` Phase 로드맵 공개 수위**
- A. Phase 1/2/3 로드맵 그대로 공개 (투명성)
- B. Phase 1 강조 + 2/3는 "향후 로드맵"으로만
- C. 공개 X (IR 자료 안에만)

**Q14. 모두의창업 배지 노출**
- A. 메인 `CompanyStats`에 "선정" 배지 강조 (현재 유지)
- B. `/invest` 상단에 별도 셀렉션 카드 신설
- C. 두 곳 모두

---

## 7. 리스크·주의사항

1. **6/24 계획서와의 관계 명확화**: 팀·예솜님이 헷갈리지 않도록 6/24 문서에 "부분 슈퍼시드" 헤더 삽입 필요.
2. **`/inquiry` 헤더 CTA 문구는 유지**: `학원 문의` → `/inquiry` 진입 라우팅은 그대로.
3. **`STAGE_PRICING` 상수 삭제 금지**: Phase 2에서 재활용. `unused` 처리 시 데드코드 경고에 유의.
4. **폼 옵션 URL 호환성**: 기존 `?service=basic|premium|blog-build|offline-print` 링크가 외부 자료에 노출되어 있을 수 있음 → 최소 3개월 호환 유지.
5. **인스타 링크 확정 전 실제 URL 확보**: 본계정 핸들 재확인 필요.

---

## 8. 다음 액션

- [ ] **CEO 컨펌**: Q8~Q14 (7건) 회신 → 문서 락
- [ ] Q11·Q12 확정 후 인스타 계정 URL 수집 (예솜님/CEO)
- [ ] 6/24 계획서 상단에 "부분 슈퍼시드 by 2026-07-07" 헤더 추가
- [ ] PR-α 착수 (STAGE 히어로 재편, ~2시간 예상)
- [ ] PR-α 배포 후 카피 반응 관찰 → PR-β~ε 순차
