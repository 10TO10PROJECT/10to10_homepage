import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function StageContact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container size="narrow">
        <FadeIn className="mb-10 text-center">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            CONTACT
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            10to10 STAGE 문의
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            가장 빠른 답변은 카카오톡 채널입니다. 영업일 기준 1일 내 연락드립니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.05} className="mb-10">
          <a
            href={COMPANY.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--color-mint-500)] bg-gradient-to-br from-[var(--color-mint-500)]/10 to-[var(--color-sky-500)]/10 p-6 transition hover:border-[var(--color-mint-600)] hover:shadow-[0_8px_30px_-12px_rgba(44,196,168,0.45)]"
          >
            <div>
              <div className="text-xs font-bold tracking-widest text-[var(--color-mint-600)]">
                FASTEST
              </div>
              <div className="mt-1 text-lg md:text-xl font-bold text-[var(--color-ink-900)]">
                카카오톡 채널로 바로 문의하기
              </div>
              <div className="mt-1 text-sm text-[var(--color-ink-700)]">
                평일 09:00–19:00 · 평균 응답 30분 이내
              </div>
            </div>
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-mint-600)] text-white transition group-hover:bg-[var(--color-ink-900)]"
            >
              →
            </span>
          </a>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="text-sm font-bold tracking-widest text-[var(--color-ink-500)] mb-4">
            또는 문의 폼 작성
          </div>
          <Suspense fallback={<div className="h-96 rounded-[var(--radius-lg)] bg-[var(--color-ink-100)] animate-pulse" />}>
            <InquiryForm source="stage" />
          </Suspense>
        </FadeIn>
      </Container>
    </section>
  );
}
