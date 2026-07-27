import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PAINPOINTS } from "@/lib/content/stage";

/** 심리 3 — 문제 공감 선행. 다크 피처 블록 + 화살표 리스트 (Awesomic 문법). */
export function Painpoints() {
  return (
    <section className="py-10 md:py-14">
      <Container size="wide">
        <div className="rounded-[var(--radius-break)] bg-[var(--color-ink-900)] p-7 text-white md:p-14">
          <FadeIn className="max-w-3xl">
            <div className="micro-label text-white/50">Sound Familiar?</div>
            <h2 className="display-type mt-4 text-3xl md:text-5xl">
              혹시, 이런 경험 있으신가요?
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
          <FadeIn delay={0.2} className="mt-8">
            <p className="text-base font-semibold text-white/90 md:text-lg">
              셋 다 원장님 잘못이 아닙니다. 홍보와 상담 사이를 잇는{" "}
              <span className="text-[var(--color-mint-500)]">다리가 없었을 뿐</span>
              입니다 — 그 다리가 설명회입니다.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
