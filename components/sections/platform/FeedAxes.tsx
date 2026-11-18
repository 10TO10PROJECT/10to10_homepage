import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Symbol } from "@/components/brand/Symbol";
import { ChalkUnderline } from "@/components/sections/home/ChalkUnderline";
import { PLATFORM_AXES, PLATFORM_FEED_POINTS } from "@/lib/content/platform";

/**
 * 학년 맞춤 소식 피드 — 개인화 3축(카테고리·학년·지역) + 피드 원칙.
 * 11/18 메인 템플릿(Mercury 다크)으로: 그래파이트 카드 · 그림자 없음 · 알약 태그(켜진 것만 민트 테두리) · 배경은 옅은 심볼
 */
export function FeedAxes() {
  return (
    <section aria-label="학년 맞춤 소식" className="relative overflow-hidden py-[72px] md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Symbol
          variant="mint"
          size={640}
          role="presentation"
          aria-hidden
          aria-label={undefined}
          className="absolute -right-40 top-6 h-auto w-[420px] opacity-[0.025] md:-right-24 md:top-10 md:w-[640px]"
        />
      </div>
      <div className="m-wrap relative">
        <FadeIn className="max-w-3xl">
          <p className="m-eyebrow">업데이트 예정 · 학년 맞춤 소식</p>
          <h2 className="m-heading mt-4 text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">
            앱을 열면, 우리 아이
            <br />
            <span className="relative inline-block">
              학년·동네 소식
              <ChalkUnderline when="view" delay={0.2} />
            </span>
            부터 보입니다.
          </h2>
          <p className="mt-5 max-w-xl break-keep text-[16px] leading-[1.6] text-[var(--color-ash)] md:text-[18px]">
            세 가지 기준으로 소식을 골라 앱 홈에 보여 드립니다.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-12 grid gap-3 md:grid-cols-3">
          {PLATFORM_AXES.map((a) => (
            <StaggerItem key={a.no} className="h-full">
              <div className="flex h-full flex-col rounded-[12px] bg-[var(--color-graphite)] p-6 md:p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="m-heading text-[22px] text-[var(--color-ivory)] md:text-[24px]">{a.title}</h3>
                  <span className="m-display text-[32px] text-white/15">{a.no}</span>
                </div>
                <p className="mt-3 flex-1 break-keep text-[15px] leading-[1.6] text-[var(--color-ash)] md:text-[16px]">{a.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {a.chips.map((c) => {
                    const on = (a.active as readonly string[]).includes(c);
                    return (
                      <span
                        key={c}
                        className={`rounded-full px-3.5 py-1.5 text-[13px] ${
                          on
                            ? "font-semibold text-[var(--color-mint-500)] ring-1 ring-[var(--color-mint-500)]/60"
                            : "bg-[#272735] text-[var(--color-ash)]"
                        }`}
                      >
                        {c}
                      </span>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-10 md:grid-cols-3 md:gap-10">
          {PLATFORM_FEED_POINTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <h3 className="m-heading text-[18px] text-[var(--color-ivory)]">{p.title}</h3>
              <p className="mt-2 break-keep text-[15px] leading-[1.6] text-[var(--color-ash)]">{p.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
