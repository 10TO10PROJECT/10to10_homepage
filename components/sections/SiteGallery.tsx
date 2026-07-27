"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { INFO_SESSION } from "@/lib/content/stage";

/**
 * 현장 사진 스와이프 갤러리 — 단일 브레이크 이미지의 캐러셀 확장판.
 * 스크롤 스냅 + 화살표 + 카운터. 증거 사진이므로 원색 유지.
 */
export function SiteGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const photos = INFO_SESSION.photos;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    function onScroll() {
      if (!el) return;
      setIndex(Math.round(el.scrollLeft / el.clientWidth));
    }
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function go(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const next = Math.min(Math.max(index + dir, 0), photos.length - 1);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  }

  return (
    <section className="py-10 md:py-14">
      <Container size="wide">
        <FadeIn>
          <div className="relative">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory overflow-x-auto rounded-[var(--radius-break)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {photos.map((p, i) => (
                <figure
                  key={p.src}
                  className="relative aspect-[16/10] w-full shrink-0 snap-center overflow-hidden md:aspect-[21/9]"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    quality={75}
                    className="object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <figcaption className="micro-label absolute bottom-4 left-4 rounded-[var(--radius-badge)] bg-[var(--color-ink-950)]/80 px-2.5 py-1.5 text-white">
                    {p.caption} · 실제 현장 2026.02
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* 화살표 (데스크톱) */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="이전 사진"
              disabled={index === 0}
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink-950)] transition hover:bg-white disabled:opacity-40 md:flex"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="다음 사진"
              disabled={index === photos.length - 1}
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink-950)] transition hover:bg-white disabled:opacity-40 md:flex"
            >
              <span aria-hidden>→</span>
            </button>

            {/* 카운터 + 도트 */}
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full bg-[var(--color-ink-950)]/80 px-3 py-1.5">
              <div className="flex gap-1.5">
                {photos.map((p, i) => (
                  <span
                    key={p.src}
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i === index ? "bg-[var(--color-mint-500)]" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">
                {index + 1} / {photos.length}
              </span>
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] text-[var(--color-ink-500)]">
            좌우로 넘기면서 실제 설명회 현장을 확인해 보세요.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
