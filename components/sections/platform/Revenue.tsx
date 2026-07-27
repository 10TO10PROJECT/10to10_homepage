import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { PLATFORM_REVENUE } from "@/lib/content/platform";

export function Revenue() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            Revenue Model
          </div>
          <h2 className="display-type mt-4 text-3xl md:text-5xl text-[var(--color-ink-950)]">
            합리적인 SaaS 이용료 및 AI 구독료.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {PLATFORM_REVENUE.map((r) => (
            <StaggerItem key={r.title}>
              <Card className="h-full">
                <div className="text-sm font-semibold text-[var(--color-ink-500)]">
                  {r.title}
                </div>
                <div className="display-type mt-3 text-4xl text-[var(--color-ink-950)]">
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
