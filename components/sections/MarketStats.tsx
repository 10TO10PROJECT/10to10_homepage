import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Stat } from "@/components/ui/Stat";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { FadeIn } from "@/components/motion/FadeIn";
import { MARKET_STATS } from "@/lib/content/company";

export function MarketStats() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            사교육 시장은 큽니다.
            <br />
            하지만 <span className="text-[var(--color-mint-600)]">정보는 흩어져</span> 있습니다.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-4 mb-12">
          <p className="text-lg text-[var(--color-ink-700)]">
            학부모는 맘카페에 의존하고, 학원은 마케팅에 헤맵니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {MARKET_STATS.map((s) => (
            <StaggerItem key={s.label}>
              <Card>
                <Stat value={s.value} label={s.label} />
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
