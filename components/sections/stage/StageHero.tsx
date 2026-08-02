import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { StageLogo } from "@/components/brand/StageLogo";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

/**
 * 스플릿 히어로 — 좌 헤드라인 / 우 현장 사진 + CTA 카드(카테고리 카드 문법).
 * 모바일 스택(T3): 헤드라인 → CTA 카드 → 서브·지표.
 */
export function StageHero() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24">
      <Container size="wide">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3">
                <StageLogo height={20} />
                <span className="micro-label text-[var(--color-ink-500)]">
                  학원 설명회 풀케어
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="display-type text-[clamp(2rem,5.5vw,3.6rem)] text-[var(--color-ink-950)]">
                학부모가 직접 방문하는 설명회,
                <br />
                등록으로 이어지는
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">가장 확실한 퍼널</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-[-0.08em] bottom-[0.04em] z-0 h-[0.38em] bg-[var(--color-mint-500)]/70"
                  />
                </span>
                입니다.
              </h1>
            </FadeIn>
            <FadeIn delay={0.25} className="mt-7 hidden md:block">
              <StageHeroSub />
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <HeroCard />
          </FadeIn>

          <FadeIn delay={0.25} className="md:hidden">
            <StageHeroSub />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function StageHeroSub() {
  return (
    <>
      <p className="text-lg font-bold text-[var(--color-ink-950)] md:text-xl">
        설명회 <span className="script-accent text-[1.35em] leading-none">하루</span>가
        학원의 <span className="script-accent text-[1.35em] leading-none">한 학기</span>를 바꿉니다.
      </p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
        홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리와 데이터
        수집까지 전담팀이 대신합니다. 원장님은{" "}
        <strong className="text-[var(--color-ink-950)]">개최와 강연만</strong>{" "}
        하시면 됩니다.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px] text-[var(--color-ink-700)]">
        <span>
          <strong className="text-[var(--color-ink-950)]">4.32</strong> 만족도 / 5.0
        </span>
        <span>
          <strong className="text-[var(--color-ink-950)]">100%</strong> 재참석 의사
        </span>
        <span>
          <strong className="text-[var(--color-ink-950)]">95.2%</strong> 추천 의사
        </span>
        <span className="text-[13px] text-[var(--color-ink-500)]">
          2026.02 자체 설명회 실측 · 응답 21명
        </span>
      </div>
    </>
  );
}

function HeroCard() {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white">
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-ink-100)]">
        <Image
          src="/info-session/01-hall-wide.jpg"
          alt="설명회 현장 — 학부모로 가득 찬 강의실"
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority
        />
        <span className="micro-label absolute bottom-3 left-3 rounded-[var(--radius-badge)] bg-[var(--color-ink-950)]/80 px-2.5 py-1.5 text-white">
          실제 현장 · 2026.02
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-[15px] leading-relaxed text-[var(--color-ink-700)]">
          신청 20명을 못 채우면 부족한 만큼 돌려드리는{" "}
          <strong className="text-[var(--color-ink-950)]">모객 보장</strong>까지.
        </p>
        <a
          href={COMPANY.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-base font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
        >
          <KakaoSymbol size={18} />
          카톡으로 3분 상담
        </a>
        <div className="mt-2.5 flex items-center justify-between text-[13px] text-[var(--color-ink-500)]">
          <span>평균 응답 30분 · 영업 전화 없음</span>
          <a
            href="?service=info_session#contact"
            className="font-semibold text-[var(--color-ink-700)] underline decoration-[var(--color-ink-300)] underline-offset-4 hover:text-[var(--color-ink-950)]"
          >
            견적 폼 →
          </a>
        </div>
      </div>
    </div>
  );
}
