import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function StageHero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <Container>
        <div className="max-w-4xl">
          <FadeIn>
            <div className="micro-label text-[var(--color-ink-500)]">
              10to10 STAGE · 학원 설명회 풀케어
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <h1 className="display-type text-[clamp(2.6rem,7vw,5.5rem)] text-[var(--color-ink-950)]">
              학원 설명회,
              <br />
              원장님은{" "}
              <span className="relative inline-block">
                <span className="relative z-10">발표만 하세요.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-[-0.1em] bottom-[0.02em] z-0 h-[0.42em] bg-[var(--color-mint-500)]/70"
                />
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8">
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-ink-700)] md:text-xl">
              홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리와
              데이터 수집까지 전담팀이 대신합니다. 원장님은{" "}
              <strong className="text-[var(--color-ink-950)]">개최와 강연만</strong>{" "}
              하시면 됩니다.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="mt-14">
          <FlagshipCard />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[var(--color-ink-700)]">
          <span className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-mint-600)]">4.32</span>
            설명회 만족도 / 5.0
          </span>
          <span className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-mint-600)]">100%</span>
            재참석 의사
          </span>
          <span className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-mint-600)]">95.2%</span>
            추천 의사
          </span>
          <span className="text-xs text-[var(--color-ink-500)]">
            2026.02 자체 설명회 실측 · 응답 21명
          </span>
        </FadeIn>
      </Container>
    </section>
  );
}

function FlagshipCard() {
  return (
    <div className="group grid gap-0 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-ink-900)]/15 bg-white md:grid-cols-[1.15fr_1fr]">
      <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-12">
        <div className="micro-label text-[var(--color-mint-600)]">
          Flagship · 설명회 풀케어
        </div>
        <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-4xl">
          1년 등록률을 바꾸는
          <br />
          단 하루의 무대.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
          원장님은 학원의 강점만 알려주시면 됩니다. 신청 20명을 못 채우면
          부족한 만큼 돌려드리는 <strong>모객 보장</strong>까지.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={COMPANY.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius-xs)] bg-[var(--color-mint-500)] px-5 py-3 text-sm font-bold text-[var(--color-ink-950)] shadow-[var(--shadow-mint)] transition hover:bg-[var(--color-mint-600)] hover:text-white"
          >
            카톡으로 3분 상담
            <span aria-hidden>→</span>
          </a>
          <a
            href="#info-session"
            className="text-sm font-medium text-[var(--color-ink-700)] underline decoration-[var(--color-ink-900)]/30 underline-offset-4 transition hover:text-[var(--color-ink-950)] hover:decoration-[var(--color-ink-950)]"
          >
            풀케어 자세히 보기
          </a>
        </div>
        <p className="mt-3 text-xs text-[var(--color-ink-500)]">
          평균 응답 30분 · 영업 전화 없이 카톡/폼으로만 답합니다
        </p>
      </div>
      <div className="relative order-1 aspect-[4/3] overflow-hidden bg-[var(--color-ink-100)] md:order-2 md:aspect-auto md:min-h-[380px]">
        <Image
          src="/info-session/01-hall-wide.jpg"
          alt="설명회 현장 — 학부모로 가득 찬 강의실"
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority
        />
        <span className="micro-label absolute bottom-4 left-4 rounded-[var(--radius-xs)] bg-[var(--color-ink-950)]/80 px-2.5 py-1.5 text-white">
          실제 현장 · 2026.02
        </span>
      </div>
    </div>
  );
}
