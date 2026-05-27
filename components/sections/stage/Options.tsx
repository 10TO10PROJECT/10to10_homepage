import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_OPTIONS } from "@/lib/content/stage";

export function Options() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            ADD-ON OPTIONS
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            필요한 만큼만 더하세요.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            가격은 학원 상황에 맞춰 맞춤 견적으로 안내합니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {STAGE_OPTIONS.map((o) => (
            <StaggerItem key={o.id}>
              <Card interactive className="h-full">
                <h3 className="font-bold">{o.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-700)] leading-relaxed">
                  {o.desc}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
