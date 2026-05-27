import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_ROADMAP } from "@/lib/content/platform";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            ROADMAP
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            천천히, 단단하게.
          </h2>
        </FadeIn>
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden md:block h-px bg-[var(--color-ink-300)]"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {PLATFORM_ROADMAP.map((r, i) => (
              <FadeIn key={r.phase} delay={i * 0.1}>
                <div className="relative">
                  <div className="hidden md:block absolute left-0 top-4 h-4 w-4 rounded-full bg-[var(--color-mint-500)] ring-4 ring-white" />
                  <div className="md:pl-8">
                    <div className="text-sm font-bold tracking-wider text-[var(--color-mint-600)]">
                      {r.phase}
                    </div>
                    <div className="mt-2 text-xl md:text-2xl font-bold">{r.label}</div>
                    <p className="mt-2 text-[var(--color-ink-700)]">{r.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
