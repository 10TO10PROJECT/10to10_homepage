import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_TEAM } from "@/lib/content/stage";

/** 팀 크레덴셜 — 차별화 뒤. 대표 실명 크레덴셜 + 파트너 클로징 (멘토링 레퍼런스 번안) */
export function TeamCredential() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            {STAGE_TEAM.eyebrow}
          </div>
          <h2 className="display-type mt-4 whitespace-pre-line text-3xl text-[var(--color-ink-950)] md:text-5xl">
            {STAGE_TEAM.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-9">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[var(--color-ink-950)]">
                  {STAGE_TEAM.ceo.name}
                </span>
                <span className="text-sm font-semibold text-[var(--color-ink-500)]">
                  {STAGE_TEAM.ceo.role}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {STAGE_TEAM.ceo.lines.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--color-ink-700)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint-500)]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-9">
              <h3 className="text-xl font-bold text-[var(--color-ink-950)]">
                {STAGE_TEAM.team.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                {STAGE_TEAM.team.desc}
              </p>
              <p className="mt-auto border-t border-[var(--color-cloud)] pt-5 text-base font-bold leading-relaxed text-[var(--color-ink-950)] md:text-lg">
                {STAGE_TEAM.closer}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
