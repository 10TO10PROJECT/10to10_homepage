import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Wordmark } from "@/components/brand/Wordmark";
import { PLATFORM_FOUNDERS } from "@/lib/content/platform";
import { STAGE_TEAM } from "@/lib/content/stage";

/**
 * 창업자 이야기 — 대표 세션 현장 사진 + 대표 본인이 공개한 글 인용 + 대표·COO 누끼(약력은 STAGE_TEAM 공용). 배경은 워드마크 워터마크.
 * 11/18 메인 템플릿(Mercury 다크)으로: 메인 '만드는 사람들'(HomeFounders)과 같은 그래파이트 판 · 민트 세로줄 인용 · 누끼 뒤 판도 그래파이트
 */
export function FounderStory() {
  const f = PLATFORM_FOUNDERS;
  return (
    // id="founders": 메인 '창업자 이야기 더 보기'가 이 섹션으로 바로 온다(11/11 CEO)
    <section id="founders" className="relative scroll-mt-16 overflow-hidden py-[72px] md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <Wordmark
          variant="mint"
          height={260}
          role="presentation"
          aria-hidden
          aria-label={undefined}
          className="h-auto w-[150%] max-w-none translate-y-[18%] opacity-[0.04] md:w-[110%]"
        />
      </div>

      <div className="m-wrap relative">
        <FadeIn className="max-w-3xl">
          <p className="m-eyebrow">{f.eyebrow}</p>
          <h2 className="m-heading mt-4 whitespace-pre-line text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">
            {f.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* 대표 세션 현장 + 인용 — 글자 아래는 어둡게 덮어 대비 확보 */}
          <FadeIn>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[var(--color-graphite)] sm:aspect-[15/14]">
                <Image
                  src={f.photo.src}
                  alt={f.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-[30%_center]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,33,0)_38%,rgba(23,23,33,0.6)_62%,rgba(23,23,33,0.94)_100%)]"
                />
                <blockquote className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="m-heading whitespace-pre-line text-[22px] text-white md:text-[28px]">“{f.quote.lead}”</p>
                  <p className="mt-3 break-keep text-[15px] text-[var(--color-ivory)]/85">{f.quote.body}</p>
                  <footer className="mt-4 text-[13px] text-[var(--color-ash)]">
                    {f.quote.by} · {f.quote.source}
                  </footer>
                </blockquote>
              </div>
              <figcaption className="mt-2 break-keep text-[12px] text-[var(--color-ash)]/80">{f.photo.caption}</figcaption>
            </figure>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {f.story.map((p) => (
                  <p key={p} className="break-keep text-[16px] leading-[1.7] text-[var(--color-ash)] md:text-[17px]">
                    {p}
                  </p>
                ))}
              </div>
              <p className="m-heading mt-7 border-l-2 border-[var(--color-mint-500)] pl-5 text-[18px] text-[var(--color-ivory)] md:text-[20px]">
                {f.closer}
              </p>
            </FadeIn>

            {/* 대표·COO — 누끼 + 그래파이트 판(메인 다크 톤) */}
            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-6">
              {[STAGE_TEAM.ceo, STAGE_TEAM.coo].map((m, i) => (
                <FadeIn key={m.name} delay={0.15 + i * 0.08}>
                  <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-b-[12px]">
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 top-[26%] rounded-[12px] bg-[var(--color-graphite)] ring-1 ring-[var(--color-mint-500)]/25"
                    />
                    <Image src={m.photo} alt={`${m.name} ${m.role}`} fill sizes="220px" className="object-contain object-bottom" />
                  </div>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="m-heading text-[20px] text-[var(--color-ivory)]">{m.name}</span>
                    <span className="text-[13px] font-semibold text-[var(--color-mint-500)]">{m.role}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {m.lines.map((line) => (
                      <li key={line} className="flex gap-2 break-keep text-[13px] leading-relaxed text-[var(--color-ash)]">
                        <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-mint-500)]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
