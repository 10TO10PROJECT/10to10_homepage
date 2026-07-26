import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";
import { STAGE_GUARANTEE, STAGE_URGENCY } from "@/lib/content/stage";

export function StageContact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container size="narrow">
        {/* 심리 8 — 희소성·긴급성 (이 두 개만) */}
        <FadeIn className="mb-10 text-center">
          <div className="micro-label inline-flex items-center gap-2 rounded-[var(--radius-xs)] bg-[var(--color-ink-950)] px-3 py-2 text-[var(--color-mint-500)]">
            <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-mint-500)]" />
            {STAGE_URGENCY.slots}
          </div>
          <h2 className="display-type mt-5 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            상담 문의
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            {STAGE_URGENCY.deadline}
            <br />
            <span className="text-base text-[var(--color-ink-500)]">
              {STAGE_URGENCY.openSale}
            </span>
          </p>
        </FadeIn>

        {/* CTA 1순위 — 카카오톡 */}
        <FadeIn delay={0.05} className="mb-6">
          <a
            href={COMPANY.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-[var(--radius-sm)] bg-[var(--color-mint-500)] p-6 shadow-[var(--shadow-mint)] transition hover:bg-[var(--color-mint-600)] md:p-7"
          >
            <div>
              <div className="micro-label text-[var(--color-ink-950)]/60 group-hover:text-white/70">
                가장 빠른 방법
              </div>
              <div className="mt-1 text-lg font-bold text-[var(--color-ink-950)] group-hover:text-white md:text-xl">
                카톡으로 3분 상담
              </div>
              <div className="mt-1 text-sm text-[var(--color-ink-950)]/70 group-hover:text-white/80">
                평균 응답 30분 · 평일 09:00–19:00
              </div>
            </div>
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink-950)] text-[var(--color-mint-500)]"
            >
              →
            </span>
          </a>
          <p className="mt-3 text-center text-sm text-[var(--color-ink-500)]">
            영업 전화 드리지 않습니다. 카톡과 폼으로만 답합니다.
          </p>
        </FadeIn>

        {/* 폼 직전 — 모객 보장 재노출 (심리 1: 제출 직전 불안 제거) */}
        <FadeIn delay={0.1} className="mb-8">
          <div className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-mint-500)] bg-[var(--color-mint-100)]/60 p-5">
            <span aria-hidden className="mt-0.5 font-bold text-[var(--color-mint-600)]">✓</span>
            <div className="text-sm leading-relaxed text-[var(--color-ink-900)]">
              <strong>모객 보장</strong> — 신청 20명을 못 채우면, 부족한 만큼 돌려드립니다.{" "}
              <span className="text-[var(--color-ink-500)]">{STAGE_GUARANTEE.sub}</span>
              <span className="mx-2 text-[var(--color-ink-300)]">|</span>
              만족도 4.32/5.0 · 재참석 의사 100% (실측)
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mb-2 text-base font-bold text-[var(--color-ink-900)]">
            또는 견적 문의 폼
          </div>
          <p className="mb-5 text-sm text-[var(--color-ink-500)]">
            30초면 됩니다. 견적은 카톡으로 보내드려요.
          </p>
          <Suspense fallback={<div className="h-96 animate-pulse rounded-[var(--radius-sm)] bg-[var(--color-ink-100)]" />}>
            <InquiryForm source="stage" />
          </Suspense>
        </FadeIn>
      </Container>
    </section>
  );
}
