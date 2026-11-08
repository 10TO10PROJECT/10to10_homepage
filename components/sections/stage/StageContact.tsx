import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";
import { STAGE_GUARANTEE, STAGE_URGENCY } from "@/lib/content/stage";

/**
 * 상담 문의 — 2026-11-08 CEO: 견적은 홈페이지에서 직접 확인하고, 문의는 카카오톡으로 받는다(폼 제거).
 * id="contact"는 기존 /#contact 링크가 이어지도록 유지.
 */
export function StageContact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container size="narrow">
        {/* 심리 8 — 희소성·긴급성 (이 두 개만) */}
        <FadeIn className="mb-10 text-center">
          <div className="micro-label inline-flex items-center gap-2 rounded-[var(--radius-badge)] bg-[var(--color-ink-950)] px-3 py-2 text-[var(--color-mint-500)]">
            <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-mint-500)]" />
            {STAGE_URGENCY.slots}
          </div>
          <h2 className="display-type mt-5 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            상담 문의
          </h2>
          <p className="mt-4 text-base text-[var(--color-ink-700)] md:text-lg">
            {STAGE_URGENCY.deadline}
            <br />
            <span className="text-[15px] text-[var(--color-ink-500)]">
              {STAGE_URGENCY.openSale}
            </span>
          </p>
        </FadeIn>

        {/* 모객 보장 재노출 (심리 1: 문의 직전 불안 제거) */}
        <FadeIn delay={0.05} className="mb-8">
          <div className="flex items-start gap-3 rounded-[var(--radius-card)] border-2 border-[var(--color-mint-500)] bg-white p-5 md:p-6">
            <span aria-hidden className="mt-0.5 font-bold text-[var(--color-mint-600)]">✓</span>
            <div className="text-[15px] leading-relaxed text-[var(--color-ink-900)]">
              <strong>모객 보장</strong> — 약속한 인원의 80%를 못 채우면, 대행료의 절반을 돌려드립니다.{" "}
              <span className="text-[var(--color-ink-500)]">{STAGE_GUARANTEE.sub}</span>
              <span className="mx-2 text-[var(--color-ink-300)]">|</span>
              만족도 4.25/5.0 · 재참석 의사 100%(4~5점 응답) · 응답 21명
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[var(--radius-card)] bg-white p-6 text-center shadow-card md:p-8">
            <div className="text-lg font-bold text-[var(--color-ink-950)]">문의는 카카오톡으로 받고 있어요</div>
            <p className="mx-auto mt-2 max-w-md break-keep text-[15px] leading-relaxed text-[var(--color-ink-500)]">
              일정, 학원 상황, 원하시는 보장 인원을 남겨 주시면 바로 답해 드립니다. 영업 전화는 드리지 않아요.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <a
                href={COMPANY.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] px-7 text-base font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
              >
                <KakaoSymbol size={18} />
                카톡으로 상담하기
              </a>
              <a
                href="#estimate"
                className="inline-flex h-13 min-h-12 items-center justify-center rounded-[var(--radius-btn)] border border-[var(--color-ink-950)] px-7 text-base font-semibold text-[var(--color-ink-950)] transition hover:bg-[var(--color-ink-100)]"
              >
                견적 먼저 확인하기
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
