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
            이 거대한 사교육 시장은
            <br />
            아직도 <span className="text-[var(--color-mint-600)]">입소문에 의존</span>합니다.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-4 mb-12">
          <p className="text-lg text-[var(--color-ink-700)]">
            학원은 맘카페와 블로그에 정보를 올리지만, 학부모는 정보를 찾기 어려워합니다.
            <br />
            결국은 아직까지도 입소문에 의존하고 있습니다.
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
