import { FadeIn } from "@/components/motion/FadeIn";
import { Symbol } from "@/components/brand/Symbol";
import { PLATFORM_ROADMAP } from "@/lib/content/platform";

/**
 * 지금 → 곧 → 업데이트 예정. 내부 일정은 비노출(날짜 표기 금지). 단계 표시와 배경은 브랜드 심볼(외곽선).
 * 11/18 메인 템플릿(Mercury 다크)으로: 단계마다 그래파이트 카드, 지금 단계만 민트 심볼
 */
export function Roadmap() {
  return (
    <section id="roadmap" aria-label="로드맵" className="relative overflow-hidden py-[72px] md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Symbol
          variant="mint"
          size={300}
          role="presentation"
          aria-hidden
          aria-label={undefined}
          className="absolute -right-16 -top-8 h-auto w-[200px] opacity-25 md:-right-6 md:-top-14 md:w-[300px] [&_path]:fill-transparent [&_path]:stroke-[var(--color-mint-500)] [&_path]:[stroke-width:3]"
        />
      </div>
      <div className="m-wrap relative">
        <FadeIn className="max-w-3xl">
          <p className="m-eyebrow">로드맵</p>
          <h2 className="m-heading mt-4 text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">지금 할 수 있는 것부터.</h2>
        </FadeIn>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {PLATFORM_ROADMAP.map((r, i) => (
            <FadeIn key={r.phase} delay={i * 0.1} className="h-full">
              <div
                className={`flex h-full flex-col rounded-[12px] bg-[var(--color-graphite)] p-6 md:p-8 ${
                  i === 0 ? "ring-1 ring-[var(--color-mint-500)]/40" : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Symbol
                    variant={i === 0 ? "mint" : "white"}
                    size={20}
                    role="presentation"
                    aria-hidden
                    aria-label={undefined}
                    className={i === 0 ? undefined : "opacity-25"}
                  />
                  <span className={`text-[14px] font-semibold ${i === 0 ? "text-[var(--color-mint-500)]" : "text-[var(--color-ash)]"}`}>
                    {r.phase}
                  </span>
                </div>
                <div className="m-heading mt-4 break-keep text-[20px] text-[var(--color-ivory)] md:text-[22px]">{r.label}</div>
                <p className="mt-2 break-keep text-[15px] leading-[1.6] text-[var(--color-ash)]">{r.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
