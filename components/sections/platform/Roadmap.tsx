import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_ROADMAP } from "@/lib/content/platform";

/** 지금 → 곧 → 업데이트 예정. 내부 일정은 비노출(날짜 표기 금지) */
export function Roadmap() {
  return (
    <section id="roadmap" className="band-wash py-20 md:py-28">
      <Container size="wide">
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
                  <div
                    className={`absolute left-0 top-4 hidden h-4 w-4 rounded-full ring-4 ring-[#F3FCF9] md:block ${
                      i === 0 ? "bg-[var(--color-mint-500)]" : "bg-[var(--color-ink-300)]"
                    }`}
                  />
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
