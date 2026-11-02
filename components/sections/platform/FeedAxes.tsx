import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { PLATFORM_AXES, PLATFORM_FEED_POINTS } from "@/lib/content/platform";

/** 학년 맞춤 소식 피드 — 개인화 3축(카테고리·학년·지역) + 피드 원칙 */
export function FeedAxes() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-3xl">
          <Badge variant="mint">업데이트 예정 · 학년 맞춤 소식</Badge>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            앱을 열면, 우리 아이
            <br />
            <span className="hl">학년·동네 소식</span>부터 보입니다.
          </h2>
          <p className="mt-4 max-w-2xl break-keep text-base text-[var(--color-ink-700)] md:text-lg">
            세 가지 기준으로 소식을 골라 앱 홈에 보여 드립니다.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {PLATFORM_AXES.map((a) => (
            <StaggerItem key={a.no} className="h-full">
              <div className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-card md:p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-[var(--color-ink-950)] md:text-2xl">{a.title}</h3>
                  <span className="display-type text-3xl text-[var(--color-ink-300)]">{a.no}</span>
                </div>
                <p className="mt-3 flex-1 break-keep text-[15px] leading-relaxed text-[var(--color-ink-700)]">
                  {a.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {a.chips.map((c) => {
                    const on = (a.active as readonly string[]).includes(c);
                    return (
                      <span
                        key={c}
                        className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${
                          on
                            ? "bg-[var(--color-ink-950)] text-white"
                            : "bg-[var(--color-ink-100)] text-[var(--color-ink-500)]"
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

        <div className="mt-12 grid gap-8 border-t border-[var(--color-cloud)] pt-10 md:grid-cols-3 md:gap-10">
          {PLATFORM_FEED_POINTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <h3 className="text-lg font-bold text-[var(--color-ink-950)]">{p.title}</h3>
              <p className="mt-2 break-keep text-[15px] leading-relaxed text-[var(--color-ink-700)]">{p.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
