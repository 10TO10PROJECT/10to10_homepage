import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_HERO } from "@/lib/content/platform";

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/30 to-[var(--color-sky-500)]/20 blur-3xl"
      />
      <Container className="relative">
        <FadeIn>
          <Badge>PRODUCT 01 · 10to10 AI 플랫폼</Badge>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-6">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight max-w-4xl">
            {PLATFORM_HERO.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6">
          <p className="text-lg md:text-xl text-[var(--color-ink-700)] max-w-2xl leading-relaxed">
            {PLATFORM_HERO.sub}
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3">
          <Button href="#beta" variant="primary" size="lg">
            Beta 체험하기
          </Button>
          <Button href="#roadmap" variant="outline" size="lg">
            로드맵 보기
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
