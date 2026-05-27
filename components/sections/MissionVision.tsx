import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { VISION } from "@/lib/content/company";

export function MissionVision() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            MISSION & VISION
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
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
