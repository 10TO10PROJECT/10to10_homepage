import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_FAQ } from "@/lib/content/stage";

export function StageFaq() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-paper-dim)]">
      <Container size="narrow">
        <FadeIn className="mb-12">
          <div className="micro-label text-[var(--color-mint-600)]">FAQ</div>
          <h2 className="display-type mt-4 text-3xl md:text-5xl text-[var(--color-ink-950)]">
            자주 묻는 질문
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion items={STAGE_FAQ as ReadonlyArray<{ q: string; a: string }>} />
        </FadeIn>
      </Container>
    </section>
  );
}
