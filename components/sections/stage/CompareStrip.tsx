import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_COMPARE } from "@/lib/content/stage";

/** 같은 6공정, 원장님 혼자 vs 전담팀 — 그로스파이낸스 POINT 02 칩 비교 문법 번안 */
export function CompareStrip() {
  const C = STAGE_COMPARE;
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-10 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">{C.eyebrow}</div>
          <h2 className="display-type mt-4 whitespace-pre-line text-3xl text-[var(--color-ink-950)] md:text-5xl">
            {C.headline}
          </h2>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-[var(--color-paper)] p-7 md:p-9">
              <div className="text-lg font-bold text-[var(--color-ink-700)]">
                {C.before.label}
              </div>
              <p className="mt-2 text-[15px] text-[var(--color-ink-500)]">
                {C.before.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {C.processes.map((p) => (
                  <span
                    key={p}
                    className="rounded-[var(--radius-badge)] border border-[var(--color-ink-300)] bg-white px-2.5 py-1.5 text-[13px] font-semibold text-[var(--color-ink-500)]"
                  >
                    {p} — 원장님
                  </span>
                ))}
              </div>
              <div className="mt-auto border-t border-[var(--color-cloud)] pt-5">
                <div className="display-type text-3xl text-[var(--color-ink-700)] md:text-4xl">
                  {C.before.time}
                </div>
                <div className="mt-1 text-[13px] text-[var(--color-ink-500)]">
                  {C.before.timeNote}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border-2 border-[var(--color-mint-500)] bg-white p-7 md:p-9">
              <div className="text-lg font-bold text-[var(--color-ink-950)]">
                {C.after.label}
              </div>
              <p className="mt-2 text-[15px] text-[var(--color-ink-700)]">
                {C.after.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {C.processes.map((p) => (
                  <span
                    key={p}
                    className="rounded-[var(--radius-badge)] bg-[var(--color-mint-500)]/25 px-2.5 py-1.5 text-[13px] font-bold text-[var(--color-ink-950)]"
                  >
                    {p} — STAGE
                  </span>
                ))}
                <span className="rounded-[var(--radius-badge)] bg-[var(--color-ink-950)] px-2.5 py-1.5 text-[13px] font-bold text-white">
                  {C.after.ownerChip}
                </span>
              </div>
              <div className="mt-auto border-t border-[var(--color-cloud)] pt-5">
                <div className="display-type text-3xl text-[var(--color-ink-950)] md:text-4xl">
                  {C.after.time}
                </div>
                <div className="mt-1 text-[13px] text-[var(--color-ink-500)]">
                  {C.after.timeNote}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
