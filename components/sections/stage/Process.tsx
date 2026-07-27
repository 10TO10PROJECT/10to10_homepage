import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PROCESS } from "@/lib/content/stage";

/** 심리 7 — 노력 최소화. 학원 할 일은 '발표·자료 전달' 2개뿐임을 시각화. */
export function Process() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">Process</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            30일 뒤 무대까지,
            <br />
            원장님 할 일은 딱 두 가지.
          </h2>
          <p className="mt-4 text-base text-[var(--color-ink-700)] md:text-lg">
            자료 전달, 그리고 발표. 나머지는 전부 10to10이 합니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-4">
          {STAGE_PROCESS.map((p) => (
            <StaggerItem key={p.step} className="h-full">
              <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-6 md:p-7">
                <div className="display-type text-4xl text-[var(--color-ink-300)]">
                  {String(p.step).padStart(2, "0")}
                </div>
                <div className="mt-3 text-lg font-bold text-[var(--color-ink-950)]">
                  {p.title}
                </div>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
                  {p.desc}
                </p>
                {p.academy && (
                  <div className="mt-4 inline-flex w-fit items-center rounded-[var(--radius-badge)] bg-[var(--color-mint-500)] px-2.5 py-1.5 text-[13px] font-bold text-[var(--color-ink-950)]">
                    {p.academy}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
