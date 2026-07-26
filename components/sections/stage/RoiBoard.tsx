"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_ROI } from "@/lib/content/stage";

/** 심리 2 — ROI를 문장이 아니라 계산 과정으로. 20명 → 6명 → 720만 3단 카운터. */
export function RoiBoard() {
  return (
    <section id="roi" className="bg-[var(--color-ink-950)] py-24 text-white md:py-32">
      <Container>
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-mint-500)]">
            {STAGE_ROI.eyebrow}
          </div>
          <h2 className="display-type mt-4 text-4xl md:text-6xl">
            {STAGE_ROI.headline}
          </h2>
          <p className="mt-4 text-lg text-white/70">{STAGE_ROI.subhead}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-sm)] border border-white/15 bg-white/15 md:grid-cols-3">
            {STAGE_ROI.steps.map((s, i) => (
              <div key={s.label} className="relative bg-[var(--color-ink-950)] p-8 md:p-10">
                <div className="micro-label text-white/45">STEP {i + 1}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <Counter
                    target={s.value}
                    className={`display-type text-6xl md:text-7xl ${
                      i === 2 ? "text-[var(--color-mint-500)]" : "text-white"
                    }`}
                  />
                  <span className="text-2xl font-bold text-white/80">{s.suffix}</span>
                </div>
                <div className="mt-3 text-base font-bold text-white/90">{s.label}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-white/50">{s.note}</div>
                {i < 2 && (
                  <span
                    aria-hidden
                    className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-[var(--color-mint-500)]/60 md:block"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/45">{STAGE_ROI.footnote}</p>
        </FadeIn>
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
