import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PAINPOINTS } from "@/lib/content/stage";

/** 심리 3 — 문제 공감 선행. 상품 소개보다 먼저. */
export function Painpoints() {
  return (
    <section className="bg-[var(--color-paper-dim)] py-24 md:py-32">
      <Container>
        <FadeIn className="mb-14 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            Sound Familiar?
          </div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            혹시, 이런 경험
            <br />
            있으신가요?
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-px overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-ink-900)]/15 bg-[var(--color-ink-900)]/15 md:grid-cols-3">
          {STAGE_PAINPOINTS.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="h-full bg-white p-8 md:p-10">
                <div className="micro-label text-[var(--color-ink-500)]/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl font-bold leading-snug text-[var(--color-ink-950)]">
                  &ldquo;{p.title}&rdquo;
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--color-ink-700)]">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeIn delay={0.2} className="mt-10">
          <p className="text-lg font-semibold text-[var(--color-ink-900)]">
            셋 다 원장님 잘못이 아닙니다. 홍보와 상담 사이를 잇는{" "}
            <span className="bg-[var(--color-mint-500)]/40 px-1">다리가 없었을 뿐</span>
            입니다 — 그 다리가 설명회입니다.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
