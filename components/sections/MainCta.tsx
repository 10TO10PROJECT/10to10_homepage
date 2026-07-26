import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function MainCta() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn className="text-center">
          <div className="micro-label text-[var(--color-ink-500)]">Get Started</div>
          <h2 className="display-type mx-auto mt-5 max-w-3xl text-3xl text-[var(--color-ink-950)] md:text-5xl">
            대한민국 사교육 시장의 다음 10년,
            <br />
            10to10이 설계합니다.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-ink-700)]">
            학원 설명회 풀케어, AI 플랫폼 도입, 투자·지원 — 가장 맞는 방식으로
            연결해 드립니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/stage" variant="primary" size="lg">
              10to10 STAGE · 설명회 풀케어
            </Button>
            <Button href={COMPANY.kakaoUrl} variant="outline" size="lg" external>
              카톡으로 3분 상담
            </Button>
          </div>
          <p className="mt-4 text-sm text-[var(--color-ink-500)]">
            평균 응답 30분 · 평일 09:00–19:00
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
