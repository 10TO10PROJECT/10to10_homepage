import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_TWO_SIDED } from "@/lib/content/platform";

export function TwoSided() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            TWO-SIDED PLATFORM
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            양면에서 동시에 풉니다.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            학원 운영의 효율과, 학부모의 선택 — 양쪽 모두를 위한 도구입니다.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {[PLATFORM_TWO_SIDED.parents, PLATFORM_TWO_SIDED.academies].map((side, i) => (
            <FadeIn key={side.title} delay={i * 0.1}>
              <Card className="h-full">
                <h3 className="text-xl md:text-2xl font-bold">{side.title}</h3>
                <p className="mt-3 text-[var(--color-ink-700)] leading-relaxed">{side.desc}</p>
                <ul className="mt-6 space-y-2 text-[var(--color-ink-700)]">
                  {side.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--color-mint-600)]">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
