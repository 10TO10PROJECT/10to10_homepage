import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/** P1-G: STAGE(Phase 1·진행 중)가 먼저, AI 플랫폼은 다음. */
export function DualProducts() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">Product</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            지금은 설명회로,
            <br />
            다음은 플랫폼으로.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-ink-700)] md:text-lg">
            운영과 기술, 두 축으로 동네 학원이 빛날 수 있도록 돕습니다.
          </p>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <Link href="/stage" className="block h-full">
              <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 transition-colors hover:border-[var(--color-ink-500)] md:p-9">
                <div className="micro-label text-[var(--color-ink-500)]">
                  10to10 STAGE
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[var(--color-ink-950)] md:text-3xl">
                  학원 설명회 풀케어
                </h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                  기획·모객·자료·현장·리포트까지 한 팀이 전담합니다. 원장님은
                  발표만 하세요.
                </p>
                <div className="mt-5 rounded-[var(--radius-btn)] bg-[var(--color-paper)] px-4 py-3 text-[15px] font-bold text-[var(--color-ink-950)]">
                  모객 20명 → 신규 등록 6명 = 예상 매출 720만 원
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-700)]">
                  <li>· 만족도 4.32 / 5.0 · 재참석 의사 100% (실측)</li>
                  <li>· 신청 20명 미달 시 부족한 만큼 환급 — 모객 보장</li>
                </ul>
                <div className="mt-auto pt-7 text-[15px] font-bold text-[var(--color-ink-950)]">
                  자세히 보기 →
                </div>
              </article>
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/platform" className="block h-full">
              <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 transition-colors hover:border-[var(--color-ink-500)] md:p-9">
                <div className="micro-label text-[var(--color-ink-500)]">
                  10to10 AI 플랫폼
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[var(--color-ink-950)] md:text-3xl">
                  학원 운영 자동화
                </h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                  학원 운영 SaaS + 학부모·학생 탐색 앱. AI 에이전트가 상담·시간표·
                  공지를 자동화합니다.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--color-ink-700)]">
                  <li>· 양면 플랫폼 — 학원 + 학부모/학생</li>
                  <li>· AI Agent — 상담 요약 · 시간표 · 공지</li>
                  <li>· Beta 운영 중 · 정규 v1.0은 2026 하반기 (일정 추후 공개)</li>
                </ul>
                <div className="mt-auto pt-7 text-[15px] font-bold text-[var(--color-ink-950)]">
                  자세히 보기 →
                </div>
              </article>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
