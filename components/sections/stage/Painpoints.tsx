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
            돈은 쓰는데 결과가 안 보이고,
            <br />
            케어는 받는데 케어가 없는.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            지금 원장님이 겪고 있는 문제, 저희도 압니다.
          </p>
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
