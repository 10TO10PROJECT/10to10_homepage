import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_TRUST } from "@/lib/content/stage";

/** 신뢰도 섹션 — 히어로 직후. 파트너 로고 스트립 + 실적 3종 (멘토링 ④-3). 11/18 다크 통일 — 로고는 흰 판 위에 */
export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-cloud)] bg-card py-10 md:py-12">
      <Container size="wide">
        <FadeIn>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="micro-label shrink-0 text-[var(--color-ink-500)]">
              {STAGE_TRUST.eyebrow}
            </div>
            <div className="flex flex-1 flex-wrap items-center gap-x-12 gap-y-6">
              {STAGE_TRUST.partners.map((p) => (
                <figure key={p.src} className="flex items-center gap-4">
                  {/* 11/18 어두운 페이지: 로고마다 색·바탕이 달라(흰 상자·검은 글자·흰 글자) 모두 같은 흰 판 위에 통째로 올림 — 잘림 없이 object-contain */}
                  <div className="flex h-14 w-36 shrink-0 items-center justify-center rounded-[10px] bg-[#FFFFFF] px-3 md:h-16 md:w-44">
                    <div className="relative h-full w-full">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="176px"
                        className={`object-contain ${"invert" in p && p.invert ? "invert" : ""}`}
                      />
                    </div>
                  </div>
                  <figcaption className="text-[13px] font-semibold leading-tight text-[var(--color-ink-700)] md:text-sm">
                    {p.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-8">
          <div className="grid gap-4 border-t border-[var(--color-cloud)] pt-8 sm:grid-cols-3">
            {STAGE_TRUST.stats.map((s) => (
              <div key={s.label}>
                <div className="display-type text-3xl text-[var(--color-ink-950)] md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-[var(--color-ink-700)]">
                  {s.label}
                  {"note" in s && s.note && (
                    <span className="ml-1.5 text-xs font-normal text-[var(--color-ink-500)]">
                      {s.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink-500)]">
            {STAGE_TRUST.footnote}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
