import { Container } from "@/components/ui/Container";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY_STATS } from "@/lib/content/company";

export function CompanyStats() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-900)] text-white">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            숫자로 보는 10to10
          </h2>
          <p className="mt-4 text-lg text-white/70">
            우리는 천천히, 그러나 단단하게 만들고 있습니다.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid gap-8 md:grid-cols-4">
          {COMPANY_STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</div>
                <div className="text-sm md:text-base text-white/60">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
