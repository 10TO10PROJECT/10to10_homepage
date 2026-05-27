import type { Metadata } from "next";
import { Slide } from "@/components/sections/ir/Slide";
import { PrintButton } from "@/components/sections/ir/PrintButton";
import { TEAM } from "@/lib/content/team";
import { COMPANY } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "10to10 IR Deck",
  description: "10to10 — 동네 학원의 다음 10년 · Investor Deck 2026",
  robots: { index: false, follow: false },
};

const TOTAL = 13;

export default function IrDeckPage() {
  return (
    <div className="ir-deck min-h-screen bg-[var(--color-ink-100)] py-8 px-4 md:px-8">
      <div className="mx-auto max-w-[1280px] mb-8 flex items-center justify-between print:hidden">
        <div>
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-ink-500)]">
            Investor Deck · 2026
          </div>
          <h1 className="mt-1 text-2xl font-bold text-[var(--color-ink-900)]">10to10 IR Deck</h1>
        </div>
        <PrintButton />
      </div>

      {/* Slide 1 — Cover */}
      <Slide number={1} total={TOTAL} variant="cover">
        <div className="flex h-full flex-col justify-center">
          <div className="text-sm font-semibold tracking-[0.22em] uppercase opacity-80">
            Investor Deck · 2026
          </div>
          <h1 className="mt-6 text-[7rem] leading-none font-bold tracking-tight">10to10</h1>
          <p className="mt-8 text-3xl font-semibold opacity-95">동네 학원의 다음 10년</p>
          <p className="mt-4 max-w-[700px] text-lg opacity-80 leading-relaxed">
            29.2조 사교육 시장의 신뢰 인프라를 만듭니다. 학원 운영 SaaS, 학부모·학생 탐색 앱,
            그리고 학원 마케팅 풀케어 STAGE.
          </p>
          <div className="mt-10 flex items-center gap-6 text-sm opacity-75">
            <span>신현우 · CEO</span>
            <span className="opacity-50">|</span>
            <span>{COMPANY.legalName}</span>
            <span className="opacity-50">|</span>
            <span>Confidential</span>
          </div>
        </div>
      </Slide>

      {/* Slide 2 — Problem (Parents) */}
      <Slide number={2} total={TOTAL} eyebrow="Problem · Parents">
        <div className="grid grid-cols-12 gap-8 h-full items-center">
          <div className="col-span-7">
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              학부모는 여전히
              <br />
              <span className="text-[var(--color-mint-600)]">맘카페·블로그·입소문</span>에
              의존합니다.
            </h2>
            <p className="mt-6 text-xl text-[var(--color-ink-700)] leading-relaxed max-w-[600px]">
              전국 14만 개 학원의 정보가 흩어져 있어, 학부모는 좋은 선택을 하기 어렵습니다.
              검색은 광고에 묻히고, 정보는 비대칭입니다.
            </p>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { tag: "맘카페", desc: "회원만 볼 수 있는 단편적 후기" },
                { tag: "네이버 블로그", desc: "광고와 진짜 후기가 혼재" },
                { tag: "당근·지역카페", desc: "정보 깊이가 얕음" },
                { tag: "입소문", desc: "공유 범위가 극히 제한적" },
              ].map((it) => (
                <div
                  key={it.tag}
                  className="rounded-2xl border border-[var(--color-ink-300)] bg-[var(--color-ink-50)] p-5"
                >
                  <div className="text-xs font-semibold tracking-wider text-[var(--color-mint-600)] uppercase">
                    {it.tag}
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-ink-700)] leading-snug">
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 3 — Problem (Academies) */}
      <Slide number={3} total={TOTAL} eyebrow="Problem · Academies">
        <div className="grid grid-cols-12 gap-8 h-full items-center">
          <div className="col-span-6">
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              동네 학원은 마케팅·운영
              <br />
              <span className="text-[var(--color-mint-600)]">인프라가 없습니다.</span>
            </h2>
            <p className="mt-6 text-xl text-[var(--color-ink-700)] leading-relaxed">
              원장님 한 명이 수업·영업·운영·콘텐츠를 다 합니다. 마케팅 전담 직원 채용은
              월 250만+ 비용으로 부담이고, 외주 광고대행사는 일회성에 그칩니다.
            </p>
          </div>
          <div className="col-span-6 space-y-4">
            {[
              {
                num: "01",
                title: "전담 마케터 채용 부담",
                desc: "월 250만+ 인건비, 채용·관리 리스크. 1인 학원에는 비현실적.",
              },
              {
                num: "02",
                title: "광고대행사의 일회성 캠페인",
                desc: "광고비만 받고 학원 영업·운영은 학원이 직접 해야 함.",
              },
              {
                num: "03",
                title: "원장님이 영업까지 직접",
                desc: "수업·운영 집중도가 떨어지고, 결국 학원 성장이 멈춥니다.",
              },
            ].map((it) => (
              <div
                key={it.num}
                className="rounded-xl border-l-4 border-[var(--color-mint-600)] bg-[var(--color-ink-50)] p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[var(--color-mint-600)]">{it.num}</span>
                  <h3 className="text-lg font-bold">{it.title}</h3>
                </div>
                <p className="mt-2 text-sm text-[var(--color-ink-700)] leading-relaxed pl-12">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 4 — Solution */}
      <Slide number={4} total={TOTAL} eyebrow="Solution">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            한 회사, 두 개의 프로덕트.
            <br />
            <span className="text-[var(--color-mint-600)]">양면 시장을 동시에 풉니다.</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 flex-1">
            <div className="rounded-2xl border-2 border-[var(--color-ink-300)] p-8 bg-white flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-wider text-[var(--color-mint-600)] uppercase">
                  Product 1 · Platform
                </span>
              </div>
              <h3 className="text-3xl font-bold">10to10 AI 플랫폼</h3>
              <p className="mt-3 text-base text-[var(--color-ink-700)] leading-relaxed">
                학부모·학생 탐색 앱 + 학원 운영 SaaS. AI 에이전트가 상담·시간표·공지·매칭을
                자동화합니다.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-700)]">
                <li>• 학부모: 우리 아이 맞춤 학원 큐레이션</li>
                <li>• 학원: 운영 SaaS + AI Agent</li>
                <li>• 한국형 LLM Solar(Upstage) 탑재 실험 중</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--color-ink-900)] text-white p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-wider text-[var(--color-mint-500)] uppercase">
                  Product 2 · STAGE
                </span>
              </div>
              <h3 className="text-3xl font-bold">10to10 STAGE</h3>
              <p className="mt-3 text-base opacity-80 leading-relaxed">
                학원 마케팅 풀케어 외주. 콘텐츠·광고·현장 운영까지 패키지로 운영합니다.
              </p>
              <ul className="mt-4 space-y-2 text-sm opacity-90">
                <li>• 베이직 80만/월 · 프리미엄 200만/월</li>
                <li>• 학원 1곳당 전담 매니저 배정</li>
                <li>• 5월 기준 누적 16개 학원</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 5 — Product 1 detail */}
      <Slide number={5} total={TOTAL} eyebrow="Product 1 · AI Platform">
        <div className="grid grid-cols-12 gap-8 h-full">
          <div className="col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              AI가 학원을 운영하고,
              <br />
              학부모를 안내합니다.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-700)] leading-relaxed">
              양면 플랫폼의 자동화 엔진. 학원 운영은 SaaS로, 학부모 탐색은 AI 채팅으로.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-mint-100)] px-4 py-2 w-fit">
              <span className="text-xs font-bold tracking-wider text-[var(--color-mint-600)] uppercase">
                Beta @ eduflo.co.kr
              </span>
              <span className="text-xs text-[var(--color-ink-700)]">Solar LLM 탑재 실험</span>
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-3 self-center">
            {[
              { title: "상담 자동 요약", desc: "학부모 채팅을 LLM이 핵심 요약" },
              { title: "시간표 자동화", desc: "강사·강의실 충돌 자동 해소" },
              { title: "공지 생성", desc: "원장 한 줄 요청 → 학원 톤 공지" },
              { title: "학원 비교", desc: "거리·과목·시간대 매칭 + 가격" },
            ].map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-[var(--color-ink-300)] bg-white p-5"
              >
                <div className="h-9 w-9 rounded-md bg-[var(--color-mint-600)] mb-3" />
                <h4 className="text-base font-bold">{a.title}</h4>
                <p className="mt-1 text-xs text-[var(--color-ink-700)] leading-snug">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 6 — Product 2 detail */}
      <Slide number={6} total={TOTAL} eyebrow="Product 2 · STAGE">
        <div className="grid grid-cols-12 gap-8 h-full">
          <div className="col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              학원의 마케팅,
              <br />
              <span className="text-[var(--color-mint-600)]">10to10 전문팀이 직접</span>{" "}
              운영합니다.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-700)] leading-relaxed">
              콘텐츠·디지털 광고·현장 운영까지 풀패키지. 학원 1곳당 전담 매니저가 배정되는
              구조로 신뢰를 만듭니다.
            </p>
            <div className="mt-6 flex gap-3">
              <span className="rounded-full bg-[var(--color-ink-900)] text-white px-4 py-1.5 text-xs font-semibold">
                누적 16개 학원
              </span>
              <span className="rounded-full bg-[var(--color-mint-100)] text-[var(--color-mint-600)] px-4 py-1.5 text-xs font-semibold">
                연 단위 약정
              </span>
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-4 self-center">
            <div className="rounded-2xl border border-[var(--color-ink-300)] bg-white p-6">
              <div className="text-xs font-bold tracking-wider text-[var(--color-ink-500)] uppercase">
                Basic
              </div>
              <div className="mt-2 text-4xl font-bold">월 80만~</div>
              <ul className="mt-4 space-y-1.5 text-xs text-[var(--color-ink-700)]">
                <li>• 학원 인터뷰 + 컨셉 정리</li>
                <li>• 공식 블로그 1포스트/주</li>
                <li>• 기본 광고 세팅</li>
                <li>• 월간 리포트 1회</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--color-ink-900)] text-white p-6 relative">
              <span className="absolute -top-2 right-4 rounded-full bg-[var(--color-mint-500)] px-3 py-0.5 text-[10px] font-bold text-[var(--color-ink-900)]">
                BEST
              </span>
              <div className="text-xs font-bold tracking-wider text-[var(--color-mint-500)] uppercase">
                Premium
              </div>
              <div className="mt-2 text-4xl font-bold">월 200만~</div>
              <ul className="mt-4 space-y-1.5 text-xs opacity-90">
                <li>• 베이직 전체</li>
                <li>• 숏폼 4편/월 · 전단지</li>
                <li>• 현장 운영 지원 (월 1회)</li>
                <li>• PPT 영업자료 · 전담 매니저</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7 — Market */}
      <Slide number={7} total={TOTAL} eyebrow="Market & Opportunity">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            29.2조원 사교육 시장.
            <br />
            인프라는 아직 비어 있습니다.
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-6 flex-1">
            <div className="rounded-2xl bg-[var(--color-ink-900)] text-white p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold tracking-wider opacity-60 uppercase">TAM</div>
                <div className="mt-2 text-5xl font-bold">29.2조</div>
                <div className="mt-1 text-sm opacity-80">국내 사교육 시장 (KOSIS, 2024)</div>
              </div>
              <p className="text-xs opacity-70">초·중·고 전체 사교육비 총액</p>
            </div>
            <div className="rounded-2xl bg-[var(--color-mint-600)] text-white p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold tracking-wider opacity-80 uppercase">SAM</div>
                <div className="mt-2 text-5xl font-bold">14만+</div>
                <div className="mt-1 text-sm opacity-90">전국 학원 수</div>
              </div>
              <p className="text-xs opacity-85">학원 운영 SaaS + 마케팅 외주 수요 학원</p>
            </div>
            <div className="rounded-2xl bg-white border-2 border-[var(--color-ink-300)] p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold tracking-wider text-[var(--color-ink-500)] uppercase">
                  SOM
                </div>
                <div className="mt-2 text-5xl font-bold">동네 중소학원</div>
                <div className="mt-1 text-sm text-[var(--color-ink-700)]">정규 v1.0 1차 타깃</div>
              </div>
              <p className="text-xs text-[var(--color-ink-700)]">
                전담 마케터를 채용할 여력은 없지만 성장이 필요한 학원
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 8 — Traction */}
      <Slide number={8} total={TOTAL} eyebrow="Traction">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            이미 학원과 함께 움직이고 있습니다.
          </h2>
          <div className="mt-10 grid grid-cols-4 gap-5 flex-1">
            {[
              { value: "16+", label: "STAGE 파트너 학원", caption: "5월 기준 누적" },
              { value: "Beta", label: "eduflo.co.kr 운영", caption: "Solar LLM 실험 중" },
              { value: "선정", label: "모두의 창업", caption: "엑셀러레이팅 프로그램" },
              { value: "14만", label: "학원 인덱스 구축 중", caption: "정규 v1.0 출시 대비" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-[var(--color-ink-50)] border border-[var(--color-ink-300)] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-5xl font-bold text-[var(--color-mint-600)]">{s.value}</div>
                  <div className="mt-3 text-base font-bold">{s.label}</div>
                </div>
                <div className="text-xs text-[var(--color-ink-500)] mt-3">{s.caption}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-[var(--color-ink-700)]">
            STAGE는 베타 마케팅으로 학원 신뢰를 만들고, 정규 출시 시 자연스러운 SaaS 전환으로
            이어집니다.
          </p>
        </div>
      </Slide>

      {/* Slide 9 — Business Model */}
      <Slide number={9} total={TOTAL} eyebrow="Business Model">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            세 가지 매출 라인.
            <br />
            <span className="text-[var(--color-mint-600)]">교차 록인 구조.</span>
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-6 flex-1">
            <div className="rounded-2xl border-2 border-[var(--color-ink-300)] p-7 flex flex-col">
              <div className="text-xs font-bold tracking-wider text-[var(--color-mint-600)] uppercase">
                SaaS
              </div>
              <h3 className="mt-3 text-2xl font-bold">학원 운영 SaaS</h3>
              <div className="mt-4 text-4xl font-bold">
                월 8만
                <span className="text-base font-normal text-[var(--color-ink-500)] ml-1">/학원</span>
              </div>
              <p className="mt-3 text-sm text-[var(--color-ink-700)] leading-relaxed">
                정규 v1.0의 핵심. 학원 운영 자동화 기능 풀패키지.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-[var(--color-mint-600)] p-7 flex flex-col relative">
              <span className="absolute -top-3 left-7 rounded-full bg-[var(--color-mint-600)] px-3 py-1 text-[10px] font-bold text-white tracking-wider">
                정규 v1.x
              </span>
              <div className="text-xs font-bold tracking-wider text-[var(--color-mint-600)] uppercase">
                AI Agent
              </div>
              <h3 className="mt-3 text-2xl font-bold">AI Agent 모듈</h3>
              <div className="mt-4 text-4xl font-bold">
                월 3만
                <span className="text-base font-normal text-[var(--color-ink-500)] ml-1">/모듈</span>
              </div>
              <p className="mt-3 text-sm text-[var(--color-ink-700)] leading-relaxed">
                상담요약·시간표·공지·매칭 — 단위 과금. 학원이 원하는 모듈만.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--color-ink-900)] text-white p-7 flex flex-col">
              <div className="text-xs font-bold tracking-wider text-[var(--color-mint-500)] uppercase">
                STAGE
              </div>
              <h3 className="mt-3 text-2xl font-bold">마케팅 풀케어</h3>
              <div className="mt-4 text-4xl font-bold">월 80~200만</div>
              <p className="mt-3 text-sm opacity-80 leading-relaxed">
                연 단위 약정 · 학원 1곳당 전담 매니저 배정. STAGE 학원은 SaaS 전환율이 매우
                높습니다.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 10 — Competition */}
      <Slide number={10} total={TOTAL} eyebrow="Competition">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            기존 솔루션은 단방향.
            <br />
            <span className="text-[var(--color-mint-600)]">10to10은 운영-마케팅 통합.</span>
          </h2>
          <div className="mt-8 flex-1 overflow-hidden rounded-2xl border border-[var(--color-ink-300)]">
            <table className="w-full text-left">
              <thead className="bg-[var(--color-ink-50)] text-xs font-bold uppercase tracking-wider text-[var(--color-ink-500)]">
                <tr>
                  <th className="p-4">구분</th>
                  <th className="p-4">강남엄마</th>
                  <th className="p-4">런즈</th>
                  <th className="p-4">광고대행사</th>
                  <th className="p-4 bg-[var(--color-mint-100)] text-[var(--color-mint-600)]">
                    10to10
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    row: "학부모 탐색",
                    a: "○ 후기 기반",
                    b: "○ 강사 검색",
                    c: "✗",
                    d: "◎ AI 매칭 + 상담",
                  },
                  {
                    row: "학원 운영 SaaS",
                    a: "✗",
                    b: "✗",
                    c: "✗",
                    d: "◎ 정규 v1.0 (7/28)",
                  },
                  {
                    row: "마케팅 풀케어",
                    a: "✗",
                    b: "✗",
                    c: "○ 광고만, 일회성",
                    d: "◎ STAGE — 콘텐츠·광고·운영",
                  },
                  {
                    row: "AI 자동화",
                    a: "✗",
                    b: "✗",
                    c: "✗",
                    d: "◎ Solar LLM 탑재",
                  },
                  {
                    row: "전담 매니저",
                    a: "✗",
                    b: "✗",
                    c: "△ 광고 운영자만",
                    d: "◎ 학원 1곳당 1명 배정",
                  },
                ].map((r, idx) => (
                  <tr
                    key={r.row}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[var(--color-ink-50)]"}
                  >
                    <td className="p-4 font-bold">{r.row}</td>
                    <td className="p-4 text-[var(--color-ink-700)]">{r.a}</td>
                    <td className="p-4 text-[var(--color-ink-700)]">{r.b}</td>
                    <td className="p-4 text-[var(--color-ink-700)]">{r.c}</td>
                    <td className="p-4 font-semibold text-[var(--color-mint-600)] bg-[var(--color-mint-100)]/40">
                      {r.d}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Slide>

      {/* Slide 11 — Roadmap */}
      <Slide number={11} total={TOTAL} eyebrow="Roadmap">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            2026년 7월 28일,
            <br />
            <span className="text-[var(--color-mint-600)]">정규 v1.0 출시.</span>
          </h2>
          <div className="mt-12 relative flex-1 flex items-center">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[var(--color-ink-300)]" />
            <div className="absolute left-0 top-1/2 h-0.5 w-1/3 bg-[var(--color-mint-600)]" />
            <div className="relative grid grid-cols-3 w-full gap-6">
              {[
                {
                  phase: "현재",
                  title: "Beta 운영 중",
                  desc: "eduflo.co.kr 운영. Solar LLM 탑재 실험. 16개 학원 STAGE 파트너십.",
                  active: true,
                },
                {
                  phase: "2026-07-28",
                  title: "정규 v1.0 출시",
                  desc: "비AI 기능 완성판. 학원 운영 SaaS + 학부모·학생 앱 동시 런칭.",
                  active: false,
                },
                {
                  phase: "v1.x",
                  title: "AI Agent 본격 탑재",
                  desc: "Solar LLM 기반 4종 에이전트 정식 출시. 상담·시간표·공지·매칭.",
                  active: false,
                },
              ].map((s) => (
                <div key={s.phase} className="text-center">
                  <div
                    className={`mx-auto mb-4 h-5 w-5 rounded-full border-4 ${
                      s.active
                        ? "border-[var(--color-mint-600)] bg-[var(--color-mint-600)]"
                        : "border-[var(--color-ink-300)] bg-white"
                    }`}
                  />
                  <div
                    className={`text-xs font-bold tracking-wider uppercase ${
                      s.active ? "text-[var(--color-mint-600)]" : "text-[var(--color-ink-500)]"
                    }`}
                  >
                    {s.phase}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-700)] leading-relaxed px-2">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 12 — Team */}
      <Slide number={12} total={TOTAL} eyebrow="Team · 8명">
        <div className="flex flex-col h-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            8명의 팀이
            <br />
            현장과 가깝게 만듭니다.
          </h2>
          <div className="mt-8 grid grid-cols-4 gap-4 flex-1">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-[var(--color-ink-300)] bg-white p-4 flex flex-col"
              >
                <div className="text-base font-bold">{m.name}</div>
                <div className="mt-1 text-xs font-semibold text-[var(--color-mint-600)]">
                  {m.role}
                </div>
                <div className="mt-2 text-xs text-[var(--color-ink-500)]">{m.affiliation}</div>
                <p className="mt-2 text-[11px] text-[var(--color-ink-700)] leading-snug flex-1">
                  {m.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 13 — Ask */}
      <Slide number={13} total={TOTAL} variant="dark">
        <div className="flex h-full flex-col justify-center">
          <div className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--color-mint-500)]">
            Ask · Let's talk
          </div>
          <h2 className="mt-6 text-6xl font-bold leading-tight tracking-tight">
            동네 학원의 다음 10년에
            <br />
            <span className="text-[var(--color-mint-500)]">함께 베팅하시겠습니까?</span>
          </h2>
          <p className="mt-8 text-xl opacity-80 max-w-[760px] leading-relaxed">
            투자·파트너십·운영 협업 모두 환영합니다. 한국 사교육 시장의 단단한 인프라를
            함께 만들 분을 찾습니다.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-5 max-w-[900px]">
            <a
              href="mailto:ricky7@yonsei.ac.kr"
              className="rounded-xl border border-white/20 bg-white/5 p-5 hover:border-[var(--color-mint-500)] transition-colors"
            >
              <div className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-mint-500)]">
                Email
              </div>
              <div className="mt-2 text-sm font-semibold break-all">ricky7@yonsei.ac.kr</div>
            </a>
            <a
              href={COMPANY.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 p-5 hover:border-[var(--color-mint-500)] transition-colors"
            >
              <div className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-mint-500)]">
                Kakao
              </div>
              <div className="mt-2 text-sm font-semibold">10to10 카카오 채널</div>
            </a>
            <a
              href="https://www.10to10.kr/invest"
              className="rounded-xl border border-white/20 bg-white/5 p-5 hover:border-[var(--color-mint-500)] transition-colors"
            >
              <div className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-mint-500)]">
                Web
              </div>
              <div className="mt-2 text-sm font-semibold">10to10.kr/invest</div>
            </a>
          </div>
          <div className="mt-12 text-xs opacity-50 tracking-wider">
            신현우 · CEO · {COMPANY.legalName} · 사업자번호 {COMPANY.bizNo}
          </div>
        </div>
      </Slide>
    </div>
  );
}
