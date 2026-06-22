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
        className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/15 to-[var(--color-sky-500)]/10 blur-3xl"
      />
      <Container className="relative">
        <div className="max-w-3xl">
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
            <p className="text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
              연세대·한양대 출신 마케팅 전문팀이 두 가지 트랙으로 학원을 운영합니다.
              <br className="hidden sm:inline" />
              <strong className="text-[var(--color-ink-900)]">설명회 풀케어</strong>와{" "}
              <strong className="text-[var(--color-ink-900)]">에이전트 패키지</strong>.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          <FadeIn delay={0.25}>
            <ProductCard
              href="#info-session"
              eyebrow="FLAGSHIP · 1회성 프로젝트"
              title="설명회 풀케어"
              desc="기획·디자인·모객·쿠폰·현장 운영·등록률 트래킹까지 한 팀이 전담합니다."
              cta="설명회 자세히 보기"
              image={{
                src: "/info-session/01-hall-wide.jpg",
                alt: "설명회 현장 — 학부모로 가득 찬 강의실",
              }}
              accent="ink"
            />
          </FadeIn>
          <FadeIn delay={0.35}>
            <ProductCard
              href="#packages"
              eyebrow="SUBSCRIPTION · 연 단위 정찰가"
              title="에이전트 패키지"
              desc="네이버 플레이스·디자인·콘텐츠·블로그까지 학원 마케팅 전 과정을 연 단위로 운영합니다."
              cta="에이전트 패키지 보기"
              image={{
                src: "/stage-mockups/10-place-hero.jpg",
                alt: "네이버 플레이스 마케팅 — 검색 첫인상부터 상담까지 설계",
              }}
              accent="mint"
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-ink-700)]">
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
            연 단위 정찰 가격
          </span>
        </FadeIn>
      </Container>
    </section>
  );
}

function ProductCard({
  href,
  eyebrow,
  title,
  desc,
  cta,
  image,
  accent,
}: {
  href: string;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  image: { src: string; alt: string };
  accent: "ink" | "mint";
}) {
  return (
    <a
      href={href}
      className="group block h-full overflow-hidden rounded-[var(--radius-lg)] bg-white ring-1 ring-[var(--color-ink-300)]/40 shadow-lg shadow-[var(--color-ink-900)]/5 transition hover:shadow-2xl hover:shadow-[var(--color-ink-900)]/10 hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-ink-100)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority
        />
      </div>
      <div className="p-7 md:p-8">
        <div className="text-xs font-bold tracking-[0.18em] text-[var(--color-mint-600)]">
          {eyebrow}
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink-900)]">
          {title}
        </h2>
        <p className="mt-4 text-[15px] md:text-base text-[var(--color-ink-700)] leading-relaxed">
          {desc}
        </p>
        <div className="mt-7">
          <span
            className={
              accent === "mint"
                ? "inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-500)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink-900)] transition group-hover:bg-[var(--color-mint-600)] group-hover:text-white"
                : "inline-flex items-center gap-2 rounded-full bg-[var(--color-ink-900)] px-5 py-2.5 text-sm font-bold text-white transition group-hover:bg-[var(--color-ink-700)]"
            }
          >
            {cta}
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
