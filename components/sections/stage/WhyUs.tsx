import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_WHY_US } from "@/lib/content/stage";

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            WHY 10TO10
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            그래서 저희는,
            <br />
            <span className="text-[var(--color-mint-600)]">결과로 증명합니다.</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            광고대행사도, 컨텐츠 외주도 아닙니다. 학원 마케팅 전 과정을 한 팀이 직접 운영합니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {STAGE_WHY_US.map((w, i) => (
            <StaggerItem key={w.title}>
              <Card
                interactive
                className="relative h-full overflow-hidden"
              >
                <div className="absolute -top-4 -right-2 text-7xl font-bold text-[var(--color-mint-500)]/10 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold leading-snug">{w.title}</h3>
                  <p className="mt-3 text-[var(--color-ink-700)] leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
