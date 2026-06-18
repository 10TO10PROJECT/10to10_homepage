import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_ONE_TIME } from "@/lib/content/stage";

export function Options() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            OTHER ONE-TIME SERVICES
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            그 외에도 필요할 때,
            <br />
            1회성으로 의뢰하세요.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            구독 없이도 단발성 프로젝트로 의뢰 가능합니다. 학원 상황에 맞춰 견적 안내드립니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2">
          {STAGE_ONE_TIME.map((o) => (
            <StaggerItem key={o.id}>
              <Card
                interactive
                className={`h-full flex flex-col ${
                  o.highlight ? "border-[var(--color-mint-500)]/60" : ""
                }`}
              >
                <h3 className="font-bold text-lg">{o.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-ink-700)] leading-relaxed flex-1">
                  {o.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-mint-600)]">
                  {o.priceLabel} <span aria-hidden>→</span>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
