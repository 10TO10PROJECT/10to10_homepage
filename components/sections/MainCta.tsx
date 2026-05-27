import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Symbol } from "@/components/brand/Symbol";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function MainCta() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-mint-500)]/8 via-transparent to-[var(--color-sky-500)]/8"
      />
      <Container className="relative">
        <FadeIn className="text-center">
          <div className="inline-flex mb-8">
            <Symbol variant="gradient" size={56} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            대한민국 거대 사교육 시장의 다음 10년,
            <br />
            <span className="bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-sky-500)] bg-clip-text text-transparent">
              10to10
            </span>
            이 설계합니다.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-700)] max-w-xl mx-auto">
            마케팅 풀케어, 플랫폼 도입, 투자·지원 — 가장 맞는 방식으로 연결해 드립니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/stage" variant="primary" size="lg">
              10to10 STAGE · 마케팅 풀케어
            </Button>
            <Button href="/platform" variant="outline" size="lg">
              플랫폼 도입
            </Button>
            <Button href={COMPANY.kakaoUrl} variant="ghost" size="lg" external>
              카카오톡 문의
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
