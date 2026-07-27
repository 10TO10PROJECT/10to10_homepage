import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

const SCOPE_CHIPS = [
  "홍보 · 모객",
  "연사 섭외",
  "홍보물 제작",
  "현장 운영",
  "등록 관리 · 데이터",
] as const;

/**
 * Awesomic 스플릿 히어로 — 좌 대형 헤드라인 / 우 컴팩트 CTA 카드.
 * 모바일 스택 순서 고정(T3): 헤드라인 → CTA 카드 → 서브·칩 (첫 화면에 CTA 보장).
 */
export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container size="wide">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14">
          <div>
            <FadeIn>
              <div className="micro-label text-[var(--color-ink-500)]">
                동네 학원 마케팅 파트너 · 10to10
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="display-type text-[clamp(2.3rem,6.5vw,4rem)] text-[var(--color-ink-950)]">
                학원 설명회,
                <br />
                원장님은{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">발표만 하세요.</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-[-0.08em] bottom-[0.04em] z-0 h-[0.38em] bg-[var(--color-mint-500)]/70"
                  />
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.25} className="mt-7 hidden md:block">
              <HeroSub />
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <CtaCard />
          </FadeIn>

          <FadeIn delay={0.25} className="md:hidden">
            <HeroSub />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function HeroSub() {
  return (
    <>
      <p className="max-w-2xl text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
        홍보·모객부터 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리와 데이터
        수집까지 — 설명회의 전 과정을 10to10 전담팀이 케어합니다. 원장님은{" "}
        <strong className="text-[var(--color-ink-950)]">개최와 강연만</strong>{" "}
        하시면 됩니다.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {SCOPE_CHIPS.map((scope) => (
          <span
            key={scope}
            className="rounded-[var(--radius-badge)] border border-[var(--color-cloud)] bg-white px-2.5 py-1.5 text-[13px] font-medium text-[var(--color-ink-700)]"
          >
            {scope}
          </span>
        ))}
        <span className="rounded-[var(--radius-badge)] bg-[var(--color-ink-950)] px-2.5 py-1.5 text-[13px] font-bold text-[var(--color-mint-500)]">
          원장님은 개최 · 강연만
        </span>
      </div>
    </>
  );
}

function CtaCard() {
  return (
    <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-8">
      <div className="micro-label text-[var(--color-ink-500)]">
        지금 바로 상담
      </div>
      <a
        href={COMPANY.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-lg font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
      >
        <KakaoSymbol size={20} />
        카톡으로 3분 상담
      </a>
      <p className="mt-2.5 text-center text-[13px] text-[var(--color-ink-500)]">
        평균 응답 30분 · 영업 전화 드리지 않습니다
      </p>
      <ul className="mt-6 space-y-2.5 border-t border-[var(--color-cloud)] pt-5 text-[15px] text-[var(--color-ink-700)]">
        <li className="flex items-center justify-between">
          <span>설명회 만족도</span>
          <strong className="text-[var(--color-ink-950)]">4.32 / 5.0</strong>
        </li>
        <li className="flex items-center justify-between">
          <span>재참석 의사</span>
          <strong className="text-[var(--color-ink-950)]">100%</strong>
        </li>
        <li className="flex items-center justify-between">
          <span>정부 지원</span>
          <strong className="text-[var(--color-ink-950)]">모두의 창업 선정</strong>
        </li>
      </ul>
      <Link
        href="/stage"
        className="mt-5 text-center text-sm font-semibold text-[var(--color-ink-700)] underline decoration-[var(--color-ink-300)] underline-offset-4 transition hover:text-[var(--color-ink-950)]"
      >
        설명회 풀케어 자세히 보기 →
      </Link>
    </div>
  );
}
