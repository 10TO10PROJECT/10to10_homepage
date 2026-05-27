import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PAINPOINTS } from "@/lib/content/stage";

export function Painpoints() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            WHY STAGE
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            학원 영업, 직접 하기엔
            <br />
            너무 큰 일입니다.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {STAGE_PAINPOINTS.map((p) => (
            <StaggerItem key={p.title}>
              <Card className="h-full">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-[var(--color-ink-700)] leading-relaxed">{p.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
