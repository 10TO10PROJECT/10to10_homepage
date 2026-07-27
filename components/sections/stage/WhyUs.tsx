import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_MOATS } from "@/lib/content/stage";

/** 심리 6·4 — 해자 4축 (BM v1 §1-1). 화이트 카드 그리드 + 앵커링(취소선). */
export function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">Why 10to10</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            프리랜서도, 인쇄소도,
            <br />
            광고 대행사도 못 하는 네 가지.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-2">
          {STAGE_MOATS.map((m) => (
            <StaggerItem key={m.no} className="h-full">
              <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 transition-colors hover:border-[var(--color-ink-500)] md:p-9">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-[var(--color-ink-950)] md:text-2xl">
                    {m.title}
                  </h3>
                  <span className="display-type text-3xl text-[var(--color-ink-300)]">
                    {m.no}
                  </span>
                </div>
                {"strike" in m && m.strike && (
                  <div className="mt-4 inline-flex items-baseline gap-2 rounded-[var(--radius-badge)] bg-[var(--color-mint-500)] px-3 py-1.5">
                    <span className="text-sm text-[var(--color-ink-950)]/60 line-through">
                      {m.strike.before}
                    </span>
                    <span aria-hidden className="text-sm text-[var(--color-ink-950)]/60">→</span>
                    <span className="text-base font-bold text-[var(--color-ink-950)]">
                      {m.strike.after}
                    </span>
                  </div>
                )}
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                  {m.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
