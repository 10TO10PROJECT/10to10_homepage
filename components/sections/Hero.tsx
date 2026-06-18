import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Symbol } from "@/components/brand/Symbol";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/30 to-[var(--color-sky-500)]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-[360px] w-[360px] rounded-full bg-[var(--color-mint-500)]/10 blur-3xl"
      />
      <Container className="relative">
        <FadeIn>
          <Symbol variant="gradient" size={72} />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-mint-500)]/40 bg-[var(--color-mint-500)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-mint-700)]">
            동네 학원을 위한 AI 플랫폼 · 마케팅 파트너
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-ink-900)]">
            학원 운영, 더 이상
            <br />
            <span className="bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-sky-500)] bg-clip-text text-transparent">
              혼자 고민하지 마세요.
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-6">
          <p className="max-w-2xl text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
            10to10은 동네 학원·학부모·학생을 연결하는 AI 플랫폼과,
            <br className="hidden sm:inline" />
            학원 마케팅 전 과정을 직접 운영하는 STAGE 파트너십을 함께 제공합니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} className="mt-10 flex flex-wrap gap-3">
          <Button href="/stage" variant="primary" size="lg">
            학원 마케팅 위탁 알아보기
          </Button>
          <Button href="/platform" variant="outline" size="lg">
            AI 플랫폼 알아보기
          </Button>
        </FadeIn>
        <FadeIn delay={0.5} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-ink-700)]">
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-mint-600)]">✓</span>
            연세대·한양대 출신 마케팅 전문팀
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-mint-600)]">✓</span>
            디자인·콘텐츠·운영 한 팀
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-mint-600)]">✓</span>
            연 단위 정찰 가격
          </span>
        </FadeIn>
      </Container>
    </section>
  );
}
