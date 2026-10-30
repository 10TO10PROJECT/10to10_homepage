import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_PRICING_PUBLIC, STAGE_COST_ANCHOR } from "@/lib/content/stage";
import { COMPANY } from "@/lib/content/company";

/**
 * 가격 공개 섹션 (2026-08-02 가격 공개 정책 전환 → 2026-10-29 옵션 단가표 제외).
 * '견적은 문의 주세요'가 아니라 시작가·파트너 프로모션가를 그대로 보여준다.
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

        {/* 시작가 → 파트너 프로모션가 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] shadow-card bg-white p-7 md:p-9">
              <div className="micro-label text-[var(--color-ink-500)]">{P.standard.label}</div>
              <div className="display-type mt-3 text-4xl text-[var(--color-ink-950)] md:text-5xl">
                {P.standard.price}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {P.standard.includes.map((item) => (
                  <span
                    key={item}
                    className="rounded-[var(--radius-badge)] border border-[var(--color-cloud)] bg-[var(--color-paper)] px-2.5 py-1.5 text-[13px] font-semibold text-[var(--color-ink-700)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-ink-500)]">
                총 6종 제공 · {P.standard.note}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-ink-900)] p-7 text-white md:p-9">
              <div className="micro-label inline-flex w-fit items-center rounded-[var(--radius-badge)] bg-[var(--color-mint-500)] px-2.5 py-1.5 text-[var(--color-ink-950)]">
                {P.promo.label}
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-lg text-white/45 line-through">{P.promo.original}</span>
                <span className="display-type text-4xl text-[var(--color-mint-500)] md:text-5xl">
                  {P.promo.price}
                </span>
              </div>
              <p className="mt-4 text-[15px] font-semibold text-white/90">{P.promo.sub}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                {P.promo.consent}
              </p>
              <a
                href={COMPANY.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] pt-0 text-base font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
              >
                <KakaoSymbol size={18} />
                파트너 자리 확인하기
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-6">
          <p className="text-[13px] text-[var(--color-ink-500)]">{P.footnote}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
