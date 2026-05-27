import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function StageHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/25 to-[var(--color-sky-500)]/15 blur-3xl"
      />
      <Container className="relative">
        <FadeIn>
          <Badge>PRODUCT 02 · 10to10 STAGE</Badge>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-6">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight max-w-4xl">
            학원 홍보,
            <br />
            <span className="text-[var(--color-mint-600)]">운영팀이 대신합니다.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6">
          <p className="text-lg md:text-xl text-[var(--color-ink-700)] max-w-2xl leading-relaxed">
            마케팅 직원 채용 부담은 줄이고, 광고 대행사보다 깊은 영업 결과를 만듭니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3">
          <Button href="#packages" variant="primary" size="lg">
            패키지 보기
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            바로 문의하기
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
