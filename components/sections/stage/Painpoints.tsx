import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PAINPOINTS, STAGE_BRIDGE } from "@/lib/content/stage";

/** 심리 3 — 문제 공감 선행 (브로슈어 P2). 다크 피처 블록 + 화살표 리스트. */
export function Painpoints() {
  return (
    <section className="py-10 md:py-14">
      <Container size="wide">
        <div className="rounded-[var(--radius-break)] bg-[var(--color-ink-900)] p-7 text-white md:p-14">
          <FadeIn className="max-w-3xl">
            <div className="micro-label text-white/50">
              원장님의 고민을 이해하는 10to10
            </div>
            <h2 className="display-type mt-4 text-3xl md:text-5xl">
              자주 겪으시는 문제 TOP3
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 space-y-4 md:mt-12">
            {STAGE_PAINPOINTS.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex gap-4 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 md:items-baseline md:gap-6 md:p-7">
                  <span aria-hidden className="text-xl font-bold text-[var(--color-mint-500)]">
                    →
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-snug md:text-xl">
                      &ldquo;{p.title}&rdquo;
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/65 md:text-base">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn delay={0.2} className="mt-10 border-t border-white/10 pt-8">
            <h3 className="display-type text-2xl md:text-3xl">
              {STAGE_BRIDGE.headline}
            </h3>
            <p className="mt-2 text-[15px] text-white/60 md:text-base">
              {STAGE_BRIDGE.sub}
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {STAGE_BRIDGE.causes.map((c) => (
                <div
                  key={c.keyword}
                  className="flex items-baseline gap-3 rounded-[var(--radius-btn)] border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="display-type text-xl">{c.keyword}</span>
                  <span className="text-[13px] text-white/60">{c.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg font-bold md:text-xl">
              그 다리가 되는 방법,{" "}
              <span className="script-accent text-[1.6em] leading-none text-[var(--color-mint-500)]">설명회</span>
              입니다.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
