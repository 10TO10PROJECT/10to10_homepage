import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PROCESS } from "@/lib/content/stage";

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            PROCESS
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            문의에서 광고 ON까지,
            <br />네 단계.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-6 md:grid-cols-4">
          {STAGE_PROCESS.map((p) => (
            <StaggerItem key={p.step}>
              <div className="relative">
                <div className="text-6xl font-bold text-[var(--color-mint-500)]/30">
                  {String(p.step).padStart(2, "0")}
                </div>
                <div className="mt-2 text-xl font-bold">{p.title}</div>
                <p className="mt-2 text-[var(--color-ink-700)]">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
