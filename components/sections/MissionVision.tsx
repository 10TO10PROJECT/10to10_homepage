import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { VISION } from "@/lib/content/company";

export function MissionVision() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            Mission &amp; Vision
          </div>
          <h2 className="display-type mt-4 text-3xl md:text-5xl text-[var(--color-ink-950)]">
            {VISION.mission}
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-700)] leading-relaxed">
            {VISION.vision}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
