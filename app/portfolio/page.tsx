import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SiteGallery } from "@/components/sections/SiteGallery";
import { PromoShowcase } from "@/components/sections/PromoShowcase";
import { KakaoSymbol } from "@/components/ui/Button";
import { STAGE_EVENT_RECORD } from "@/lib/content/stage";
import { COMPANY } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "포트폴리오 — 10to10 STAGE",
  description:
    "10to10 STAGE가 직접 기획하고 운영한 설명회 현장과 행사 실적을 모았습니다.",
};

/** 포트폴리오 — 실사·산출물 전면 배치 (멘토링 ④-10 "실사 최대치" + abbg 포트폴리오 섹션 번안) */
export default function PortfolioPage() {
  return (
    <>
      <section className="pt-16 pb-4 md:pt-24">
        <Container size="wide">
          <FadeIn className="max-w-3xl">
            <div className="micro-label text-[var(--color-ink-500)]">PORTFOLIO</div>
            <h1 className="display-type mt-4 text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-ink-950)]">
              말 대신,
              <br />
              만든 것을 보여드립니다.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
              설명회 현장부터 대규모 행사 운영까지 — 10to10 STAGE가 직접
              기획하고 운영한 기록입니다.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 설명회 현장 실사 */}
      <SiteGallery />

      {/* 모객 로직 + 홍보물 포트폴리오 */}
      <PromoShowcase />

      {/* 행사 기획·운영 실적 */}
      <section className="py-16 md:py-20">
        <Container size="wide">
          <FadeIn>
            <div className="micro-label text-[var(--color-ink-500)]">
              {STAGE_EVENT_RECORD.eyebrow}
            </div>
            <h2 className="display-type mt-4 max-w-3xl text-3xl text-[var(--color-ink-950)] md:text-4xl">
              {STAGE_EVENT_RECORD.headline}
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
              {STAGE_EVENT_RECORD.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-8 grid gap-3 md:grid-cols-3">
            {STAGE_EVENT_RECORD.photos.map((ph) => (
              <figure key={ph.src}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-ink-100)]">
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-1.5 text-xs text-[var(--color-ink-500)]">
                  {ph.caption}
                </figcaption>
              </figure>
            ))}
          </FadeIn>
          <p className="mt-4 text-xs text-[var(--color-ink-500)]">
            {STAGE_EVENT_RECORD.partnersNote}
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <Container size="wide">
          <FadeIn>
            <div className="rounded-[var(--radius-break)] bg-[var(--color-ink-900)] p-8 text-center text-white md:p-14">
              <h2 className="display-type text-2xl md:text-4xl">
                이 퀄리티 그대로,
                <br className="md:hidden" /> 원장님 학원의 설명회를 만듭니다.
              </h2>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={COMPANY.kakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] px-6 text-base font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
                >
                  <KakaoSymbol size={18} />
                  카톡으로 3분 상담
                </a>
                <a
                  href="/?service=info_session#contact"
                  className="inline-flex h-12 items-center rounded-[var(--radius-btn)] bg-white px-6 text-base font-bold text-[var(--color-ink-950)] transition hover:bg-[var(--color-ink-100)]"
                >
                  견적 문의 →
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
