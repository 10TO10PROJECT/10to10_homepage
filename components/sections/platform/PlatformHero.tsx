import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_HERO } from "@/lib/content/platform";

export function PlatformHero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-24">
      <Container size="wide">
        <FadeIn>
          <Badge variant="outline">10to10 플랫폼</Badge>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-6">
          <h1 className="display-type max-w-4xl text-[clamp(2.1rem,5.5vw,4rem)] text-[var(--color-ink-950)]">
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
