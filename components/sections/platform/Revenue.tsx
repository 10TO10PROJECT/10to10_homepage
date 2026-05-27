import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { PLATFORM_REVENUE } from "@/lib/content/platform";

export function Revenue() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            REVENUE MODEL
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            합리적인 SaaS 이용료 및 AI 구독료.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {PLATFORM_REVENUE.map((r) => (
            <StaggerItem key={r.title}>
              <Card className="h-full">
                <div className="text-sm font-semibold text-[var(--color-ink-500)]">
                  {r.title}
                </div>
                <div className="mt-3 text-4xl font-bold text-[var(--color-mint-600)]">
                  {r.price}
                </div>
                <p className="mt-4 text-[var(--color-ink-700)] leading-relaxed">{r.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
