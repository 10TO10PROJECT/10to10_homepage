import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Symbol } from "@/components/brand/Symbol";
import { PLATFORM_ROADMAP } from "@/lib/content/platform";

/** 지금 → 곧 → 업데이트 예정. 내부 일정은 비노출(날짜 표기 금지). 단계 표시와 배경은 브랜드 심볼(외곽선) */
export function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Symbol
          variant="mint"
          size={300}
          role="presentation"
          aria-hidden
          aria-label={undefined}
          className="absolute -right-16 -top-8 h-auto w-[200px] opacity-60 md:-right-6 md:-top-14 md:w-[300px] [&_path]:fill-transparent [&_path]:stroke-[var(--color-mint-500)] [&_path]:[stroke-width:3]"
        />
      </div>
      <Container size="wide" className="relative">
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">Roadmap</div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            지금 할 수 있는 것부터.
          </h2>
        </FadeIn>
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-cloud)] md:block"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {PLATFORM_ROADMAP.map((r, i) => (
              <FadeIn key={r.phase} delay={i * 0.1}>
                <div className="relative">
                  <span aria-hidden className="absolute left-0 top-[13px] hidden bg-white px-0.5 md:block">
                    <Symbol
                      variant={i === 0 ? "mint" : "dark"}
                      size={20}
                      role="presentation"
                      aria-hidden
                      aria-label={undefined}
                      className={i === 0 ? undefined : "opacity-25"}
                    />
                  </span>
                  <div className="md:pl-8">
                    <div className="micro-label text-[var(--color-ink-500)]">{r.phase}</div>
                    <div className="mt-2 break-keep text-xl font-bold text-[var(--color-ink-950)] md:text-2xl">
                      {r.label}
                    </div>
                    <p className="mt-2 break-keep text-[15px] leading-relaxed text-[var(--color-ink-700)]">{r.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
