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
                연세대·한양대 출신 마케팅 전문팀이 디자인·콘텐츠·플레이스 운영부터
                <br className="hidden sm:inline" />
                <strong className="text-[var(--color-ink-900)]">학원 설명회 풀케어</strong>까지 직접 운영합니다.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-8">
              <a
                href="#info-session"
                className="group relative flex items-center gap-4 overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-ink-900)] via-[var(--color-ink-900)] to-[#0a3d36] p-5 shadow-xl shadow-[var(--color-mint-600)]/30 ring-2 ring-[var(--color-mint-500)]/60 transition hover:shadow-2xl hover:shadow-[var(--color-mint-600)]/50 hover:-translate-y-0.5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--color-mint-500)]/30 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[var(--color-sky-500)]/20 blur-3xl"
                />
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-mint-500)] text-2xl shadow-lg shadow-[var(--color-mint-500)]/60">
                  🎯
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--color-mint-500)] px-2 py-0.5 text-[10px] font-extrabold tracking-widest text-[var(--color-ink-900)] shadow-sm shadow-[var(--color-mint-400)]/50">
                      FLAGSHIP
                    </span>
                    <span className="text-sm font-bold text-white">
                      설명회 풀케어 — 1년 등록률을 바꾸는 무대
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-white/75">
                    기획·디자인·모객·쿠폰·현장 운영·등록률 트래킹까지 한 팀이 전담
                  </p>
                </div>
                <span className="relative flex-shrink-0 text-[var(--color-mint-500)] text-lg font-bold transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-6 flex flex-wrap gap-3">
              <Button
                href="#packages"
                variant="primary"
                size="lg"
                className="shadow-lg shadow-[var(--color-mint-600)]/30 hover:shadow-xl hover:shadow-[var(--color-mint-600)]/40 hover:-translate-y-0.5 transition"
              >
                패키지 보기
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                className="shadow-lg shadow-[var(--color-ink-900)]/20 hover:shadow-xl hover:shadow-[var(--color-ink-900)]/30 hover:-translate-y-0.5 transition"
              >
                무료 상담 신청
              </Button>
            </FadeIn>
            <FadeIn delay={0.5} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-ink-700)]">
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
          </div>
          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-mint-500)]/15 to-[var(--color-sky-500)]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl shadow-[var(--color-mint-600)]/10 ring-1 ring-[var(--color-ink-300)]/40">
              <Image
                src="/stage-mockups/10-place-hero.jpg"
                alt="네이버 플레이스 마케팅 — 검색 첫인상부터 상담까지 설계"
                width={900}
                height={1200}
                priority
                className="w-full h-auto"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] shadow-lg ring-1 ring-[var(--color-ink-300)]/40">
                <Image
                  src="/info-session/01-hall-wide.jpg"
                  alt="설명회 현장 — 학부모 가득 찬 강의실"
                  fill
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 py-1.5">
                  <span className="text-[10px] font-bold text-white">설명회 현장</span>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] shadow-lg ring-1 ring-[var(--color-ink-300)]/40">
                <Image
                  src="/info-session/03-speaker-male.jpg"
                  alt="설명회 연사 — 입시 컨설팅 세션"
                  fill
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 py-1.5">
                  <span className="text-[10px] font-bold text-white">전문 연사</span>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md)] shadow-lg ring-1 ring-[var(--color-ink-300)]/40">
                <Image
                  src="/info-session/04-booklet.jpg"
                  alt="EDUFLO 브랜드 안내책자"
                  fill
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 py-1.5">
                  <span className="text-[10px] font-bold text-white">인쇄물</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
