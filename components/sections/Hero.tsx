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
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-ink-900)]">
            동네 학원의 모든 것,
            <br />
            <span className="bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-sky-500)] bg-clip-text text-transparent">
              10to10
            </span>
            이 바꿉니다.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6">
          <p className="max-w-2xl text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
            AI 플랫폼과 운영 파트너십으로, 학원·학부모·학생을 연결합니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3">
          <Button href="/platform" variant="primary" size="lg">
            플랫폼 알아보기
          </Button>
          <Button href="/stage" variant="outline" size="lg">
            STAGE 패키지 보기
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
