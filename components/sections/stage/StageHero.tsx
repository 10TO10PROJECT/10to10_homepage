import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function StageHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/15 to-[var(--color-sky-500)]/10 blur-3xl"
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <FadeIn>
            <Badge>PRODUCT 02 · 10to10 STAGE</Badge>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight">
              학원 설명회,
              <br />
              <span className="text-[var(--color-mint-600)]">
                원장님은 발표만 하세요.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-6">
            <p className="text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
              연세대·한양대 출신 마케팅 전문팀이 기획·디자인·모객·쿠폰·현장 운영·
              <br className="hidden sm:inline" />
              등록률 트래킹까지 <strong className="text-[var(--color-ink-900)]">설명회 풀케어</strong>로 학원의 1년을 바꿔드립니다.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="mt-14">
          <FlagshipCard />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-ink-700)]">
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-mint-600)]">✓</span>
            만족도 4.32 / 5.0
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-mint-600)]">✓</span>
            재참석 의사 100%
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-mint-600)]">✓</span>
            추천 의사 95.2%
          </span>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-14">
          <Phase2Teaser />
        </FadeIn>
      </Container>
    </section>
  );
}

function FlagshipCard() {
  return (
    <div className="group grid gap-0 md:grid-cols-[1.15fr_1fr] overflow-hidden rounded-[var(--radius-lg)] bg-white ring-1 ring-[var(--color-ink-300)]/40 shadow-lg shadow-[var(--color-ink-900)]/5 transition hover:shadow-2xl hover:shadow-[var(--color-ink-900)]/10">
      <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
        <div className="text-xs font-bold tracking-[0.18em] text-[var(--color-mint-600)]">
          FLAGSHIP · 설명회 풀케어
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink-900)] leading-tight">
          1년 등록률을 바꾸는
          <br />
          단 하루의 무대.
        </h2>
        <p className="mt-5 text-[15px] md:text-base text-[var(--color-ink-700)] leading-relaxed">
          기획부터 현장 운영, 쿠폰·등록률 트래킹까지 한 팀이 전담합니다.
          원장님은 학원의 강점만 알려주시면 됩니다.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href="#info-session"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-500)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink-900)] transition hover:bg-[var(--color-mint-600)] hover:text-white"
          >
            설명회 풀케어 자세히 보기
            <span aria-hidden>→</span>
          </a>
          <a
            href="?service=info_session#contact"
            className="text-sm font-medium text-[var(--color-ink-500)] underline-offset-4 hover:text-[var(--color-ink-900)] hover:underline"
          >
            견적 문의하기 →
          </a>
        </div>
      </div>
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] bg-[var(--color-ink-100)] order-1 md:order-2 overflow-hidden">
        <Image
          src="/info-session/01-hall-wide.jpg"
          alt="설명회 현장 — 학부모로 가득 찬 강의실"
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority
        />
      </div>
    </div>
  );
}

function Phase2Teaser() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-ink-300)] bg-[var(--color-ink-50)]/60 px-6 py-5 md:px-8 md:py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[11px] font-bold tracking-[0.18em] text-[var(--color-ink-500)]">
            COMING NEXT · PHASE 2
          </div>
          <div className="mt-1 text-base md:text-lg font-bold text-[var(--color-ink-900)]">
            에이전트 패키지 — 학원 마케팅 연 단위 풀케어
          </div>
          <p className="mt-1 text-sm text-[var(--color-ink-700)]">
            네이버 플레이스·블로그·인스타·디자인까지 한 팀이 연 단위로 운영합니다. Phase 1 파트너 학원을 대상으로 순차 확장 예정.
          </p>
        </div>
        <a
          href="/inquiry"
          className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-300)] bg-white px-4 py-2 text-xs font-semibold text-[var(--color-ink-700)] hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-600)] transition"
        >
          사전 상담 문의
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
