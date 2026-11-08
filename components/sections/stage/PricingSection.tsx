import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { EstimateCalculator } from "@/components/sections/stage/EstimateCalculator";
import { STAGE_PRICING_PUBLIC, STAGE_COST_ANCHOR } from "@/lib/content/stage";
import { formatWon } from "@/lib/estimate";

/**
 * 가격·견적 공개 섹션 (2026-08-02 가격 공개 → 2026-10-29 옵션 단가표 제외 → 2026-11-08 견적 확인으로 전환).
 * 기본가 포함 6종을 먼저 보여주고, 보장 인원·옵션을 고르면 바로 합계가 나오는 계산기로 이어진다.
 */
export function PricingSection() {
  const P = STAGE_PRICING_PUBLIC;
  return (
    <section id="pricing" className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-semibold text-[var(--color-ink-500)]">
            {P.eyebrow}
          </div>
          <h2 className="display-type mt-3 whitespace-pre-line text-3xl text-[var(--color-ink-950)] md:text-5xl">
            {P.headline}
          </h2>
        </FadeIn>

        {/* 비용 앵커링 3컷 (GF POINT 03 문법) — 가격 공개 전 기준점 세팅 */}
        <FadeIn delay={0.03} className="mb-10">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] shadow-card bg-[var(--color-cloud)] md:grid-cols-3">
            {STAGE_COST_ANCHOR.map((c) => (
              <div
                key={c.title}
                className={`p-6 md:p-7 ${
                  "highlight" in c && c.highlight
                    ? "bg-[var(--color-mint-500)]/15"
                    : "bg-white"
                }`}
              >
                <div className="text-sm font-bold text-[var(--color-ink-500)]">
                  {c.title}
                </div>
                <div className="display-type mt-2 text-3xl text-[var(--color-ink-950)] md:text-4xl">
                  {c.value}
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--color-ink-700)]">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 기본가 포함 6종 */}
        <FadeIn delay={0.05} className="mb-12">
          <div className="rounded-[var(--radius-card)] bg-[var(--color-mint-wash)] p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-[var(--color-ink-950)] md:text-xl">기본가에 모두 포함</h3>
              <span className="text-[13px] font-semibold text-[var(--color-ink-700)]">
                보장 {P.base.headcount}명 기준 {formatWon(P.base.price)} · {P.partner.label}{" "}
                {formatWon(P.base.price - P.partner.discount)}
              </span>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {P.includes.map((item) => (
                <li key={item.title} className="rounded-[12px] bg-white p-4">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[var(--color-ink-950)]">
                    <span aria-hidden className="text-[var(--color-mint-600)]">✓</span>
                    {item.title}
                  </div>
                  <div className="mt-1 break-keep text-[13px] leading-relaxed text-[var(--color-ink-700)]">
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* 견적 확인 — 헤더·히어로·하단 바의 "견적 확인" 링크 도착점 */}
        <div id="estimate" className="scroll-mt-24">
          <FadeIn className="mb-6">
            <h3 className="display-type text-2xl text-[var(--color-ink-950)] md:text-3xl">견적 확인</h3>
            <p className="mt-2 break-keep text-[15px] text-[var(--color-ink-700)] md:text-base">
              보장 인원과 필요한 옵션을 고르면 바로 계산됩니다. 일정과 세부 내용은 카카오톡으로 상담해 드려요.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <EstimateCalculator />
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-6">
          <p className="text-[13px] text-[var(--color-ink-500)]">{P.footnote}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
