import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_PROCESS } from "@/lib/content/stage";

/** 브로슈어 P7 — 표준 30일 진행 절차. 타이밍 필 + '원장님께 드리는 요청' 말풍선. */
export function Process() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">Process</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            표준 30일 진행 절차 안내
          </h2>
          <p className="mt-4 text-base text-[var(--color-ink-700)] md:text-lg">
            이번 주 상담이 다음 학기 등록을 결정할 수 있습니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-4">
          {STAGE_PROCESS.map((p) => (
            <StaggerItem key={p.step} className="h-full">
              <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-6 md:p-7">
                <div className="micro-label inline-flex w-fit items-center rounded-full bg-[var(--color-paper)] px-3 py-1.5 text-[var(--color-ink-500)]">
                  {p.timing}
                </div>
                <div className="mt-4 text-lg font-bold text-[var(--color-ink-950)]">
                  {p.title}
                </div>
                <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
                  {p.desc}
                </p>
                <div className="mt-4 rounded-[var(--radius-btn)] rounded-bl-[4px] bg-[var(--color-ink-950)] px-3.5 py-2.5 text-[13px] font-semibold leading-snug text-[var(--color-mint-500)]">
                  {p.academy}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
