import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function StageHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/25 to-[var(--color-sky-500)]/15 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <FadeIn>
              <Badge>PRODUCT 02 · 10to10 STAGE</Badge>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight">
                광고비만 쓰고 끝났던 마케팅,
                <br />
                <span className="text-[var(--color-mint-600)]">
                  이번엔 결과로 증명합니다.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-6">
              <p className="text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed max-w-xl">
                연세대·한양대 출신 마케팅 전문팀이 디자인·콘텐츠·플레이스 운영까지
                <br className="hidden sm:inline" />
                학원 마케팅 전 과정을 직접 운영합니다.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-8 flex flex-wrap gap-3">
              <Button href="#packages" variant="primary" size="lg">
                패키지 보기
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                무료 상담 신청
              </Button>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-ink-700)]">
              <span className="flex items-center gap-2">
                <span className="text-[var(--color-mint-600)]">✓</span>
                광고비·디자인비 따로 ❌
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--color-mint-600)]">✓</span>
                전담 매니저 1:1 케어
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--color-mint-600)]">✓</span>
                연 단위 정찰 가격
              </span>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-mint-500)]/15 to-[var(--color-sky-500)]/10 blur-2xl" />
            <Image
              src="/stage-mockups/10-place-hero.jpg"
              alt="네이버 플레이스 마케팅 — 검색 첫인상부터 상담까지 설계"
              width={900}
              height={1200}
              priority
              className="w-full h-auto rounded-[var(--radius-lg)] shadow-2xl shadow-[var(--color-mint-600)]/10 ring-1 ring-[var(--color-ink-300)]/40"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
