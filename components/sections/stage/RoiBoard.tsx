"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_ROI } from "@/lib/content/stage";

/** 심리 2 — ROI를 문장이 아니라 계산 과정으로. ink-900 다크 피처 블록(카드형). */
export function RoiBoard({
  cta,
}: {
  cta?: { href: string; label: string };
}) {
  return (
    <section id="roi" className="py-10 md:py-14">
      <Container size="wide">
        <div className="rounded-[var(--radius-break)] bg-[var(--color-ink-900)] p-7 text-white md:p-14">
          <FadeIn className="max-w-3xl">
            <div className="text-sm font-semibold text-white/60">
              {STAGE_ROI.eyebrow}
            </div>
            <h2 className="display-type mt-3 text-3xl md:text-5xl">
              신규 등록은{" "}
              <span className="text-[var(--color-mint-500)]">만남</span>에서
              결정됩니다.
            </h2>
            <p className="mt-4 text-base text-white/70 md:text-lg">{STAGE_ROI.subhead}</p>
          </FadeIn>

          {/* 신뢰 지표 — 방문 상담 74.2% (대교 에듀베이션 조사, 출처 각주 필수) */}
          <FadeIn delay={0.05} className="mt-8">
            <div className="rounded-[var(--radius-card)] border border-[var(--color-mint-500)]/40 bg-[var(--color-mint-500)]/10 px-6 py-5 md:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="max-w-md text-[15px] leading-snug text-white/85 md:text-base">
                  {STAGE_ROI.trust.label}
                </span>
                <span className="display-type text-5xl text-[var(--color-mint-500)] md:text-6xl">
                  {STAGE_ROI.trust.value}
                </span>
              </div>
              <p className="mt-3 text-[13px] text-white/45">{STAGE_ROI.trust.source}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-10">
            <h3 className="display-type text-2xl md:text-3xl">
              {STAGE_ROI.headline}
            </h3>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10 md:mt-12">
            <div className="grid gap-4 md:grid-cols-3">
              {STAGE_ROI.steps.map((s, i) => (
                <div
                  key={s.label}
                  className="relative rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 md:p-8"
                >
                  <div className="micro-label text-white/45">STEP {i + 1}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <Counter
                      target={s.value}
                      className={`display-type text-5xl md:text-6xl ${
                        i === 2 ? "text-[var(--color-mint-500)]" : "text-white"
                      }`}
                    />
                    <span className="text-xl font-bold text-white/80">{s.suffix}</span>
                  </div>
                  <div className="mt-2.5 text-base font-bold text-white/90">{s.label}</div>
                  <div className="mt-1 text-sm leading-relaxed text-white/50">{s.note}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/45">
              {STAGE_ROI.footnote}
            </p>
            <p className="mt-8 border-t border-white/10 pt-6 text-right text-lg font-bold text-white/90 md:text-xl">
              {STAGE_ROI.closer}
            </p>
          </FadeIn>

          {cta && (
            <FadeIn delay={0.15} className="mt-8">
              <a
                href={cta.href}
                className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-btn)] bg-white px-6 text-base font-bold text-[var(--color-ink-950)] transition hover:bg-[var(--color-ink-100)]"
              >
                {cta.label}
                <span aria-hidden>→</span>
              </a>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
}

function Counter({ target, className }: { target: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        if (reduced) {
          setValue(target);
          return;
        }
        const duration = 1200;
        const t0 = performance.now();
        function tick(now: number) {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
