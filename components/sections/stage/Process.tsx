import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PROCESS } from "@/lib/content/stage";

/** 심리 7 — 노력 최소화. 학원 할 일은 '발표·자료 전달' 2개뿐임을 시각화. */
export function Process() {
  return (
    <section className="bg-[var(--color-paper-dim)] py-24 md:py-32">
      <Container>
        <FadeIn className="mb-14 max-w-3xl">
          <div className="micro-label text-[var(--color-mint-600)]">Process</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            30일 뒤 무대까지,
            <br />
            원장님 할 일은 딱 두 가지.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            자료 전달, 그리고 발표. 나머지는 전부 10to10이 합니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-4">
          {STAGE_PROCESS.map((p) => (
            <StaggerItem key={p.step} className="h-full">
              <div className="flex h-full flex-col rounded-[var(--radius-sm)] border border-[var(--color-ink-900)]/15 bg-white p-6 md:p-7">
                <div className="display-type text-5xl text-[var(--color-mint-500)]/40">
                  {String(p.step).padStart(2, "0")}
                </div>
                <div className="mt-3 text-lg font-bold text-[var(--color-ink-950)]">
                  {p.title}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-700)]">
                  {p.desc}
                </p>
                {p.academy && (
                  <div className="micro-label mt-4 inline-flex w-fit items-center gap-1.5 rounded-[var(--radius-xs)] bg-[var(--color-ink-950)] px-2.5 py-1.5 text-[var(--color-mint-500)]">
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
