"use client";

import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { PROMO_LOGIC, PROMO_PORTFOLIO, PROMO_NOTE } from "@/lib/content/promo";

/**
 * 모객·홍보 로직 + 홍보팀 포트폴리오 — 해자 ③(홍보물·홍보 일원화)의 증거 섹션.
 * Awesomic 카테고리 카드 문법: 가로 스크롤 스냅 + 이미지 플러시 카드.
 */
export function PromoShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCards(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            {PROMO_LOGIC.eyebrow}
          </div>
          <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
            {PROMO_LOGIC.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
            {PROMO_LOGIC.subhead}
          </p>
        </FadeIn>

        {/* 모객 로직 4단계 */}
        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-[var(--color-cloud)] md:grid-cols-4">
            {PROMO_LOGIC.steps.map((s) => (
              <div key={s.no} className="bg-white p-6 md:p-7">
                <div className="flex items-center gap-2">
                  <span className="display-type text-2xl text-[var(--color-ink-300)]">
                    {s.no}
                  </span>
                  <span className="text-lg font-bold text-[var(--color-ink-950)]">
                    {s.title}
                  </span>
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--color-ink-700)]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 포트폴리오 — 가로 스크롤 스냅 */}
        <FadeIn delay={0.15} className="mt-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="micro-label text-[var(--color-ink-500)]">Portfolio</div>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-ink-950)] md:text-2xl">
                홍보팀이 직접 만든 디자인
              </h3>
            </div>
            <div className="hidden gap-2 md:flex">
              <ArrowButton dir={-1} onClick={() => scrollByCards(-1)} label="이전 디자인 보기" />
              <ArrowButton dir={1} onClick={() => scrollByCards(1)} label="다음 디자인 보기" />
            </div>
          </div>
          <div
            ref={trackRef}
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 md:-mx-8 md:px-8 [scrollbar-width:thin]"
          >
            {PROMO_PORTFOLIO.map((p) => (
              <figure
                key={p.src}
                className="group w-[240px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-img)] border border-[var(--color-cloud)] bg-white md:w-[300px]"
              >
                <div
                  className={`relative overflow-hidden ${
                    p.aspect === "square" ? "aspect-square" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="300px"
                    quality={70}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-[var(--color-ink-900)]">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-2 text-[13px] text-[var(--color-ink-500)]">{PROMO_NOTE}</p>
        </FadeIn>
      </Container>
    </section>
  );
}

function ArrowButton({
  dir,
  onClick,
  label,
}: {
  dir: 1 | -1;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-cloud)] bg-white text-[var(--color-ink-900)] transition hover:border-[var(--color-ink-500)]"
    >
      <span aria-hidden>{dir === 1 ? "→" : "←"}</span>
    </button>
  );
}
