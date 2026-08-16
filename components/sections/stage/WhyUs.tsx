import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_MOATS } from "@/lib/content/stage";

/** 차별화 3종 (멘토링 ④-5: 싸다 / 올인클루시브 / 성과 책임). 화이트 카드 그리드. */
export function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">Why 10to10</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            프리랜서도, 인쇄소도,
            <br />
            광고 대행사도 못 하는 세 가지.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {STAGE_MOATS.map((m) => (
            <StaggerItem key={m.no} className="h-full">
              <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 transition-colors hover:border-[var(--color-ink-500)] md:p-9">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-[var(--color-ink-950)] md:text-2xl">
                    {m.title}
                  </h3>
                  <span className="display-type text-3xl text-[var(--color-ink-300)]">
                    {m.no}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                  {m.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
