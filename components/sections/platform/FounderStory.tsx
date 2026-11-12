import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Wordmark } from "@/components/brand/Wordmark";
import { PLATFORM_FOUNDERS } from "@/lib/content/platform";
import { STAGE_TEAM } from "@/lib/content/stage";

/** 창업자 이야기 — 대표 세션 현장 사진 + 대표 본인이 공개한 글 인용 + 대표·COO 누끼(약력은 STAGE_TEAM 공용). 배경은 워드마크 워터마크 */
export function FounderStory() {
  const f = PLATFORM_FOUNDERS;
  return (
    // id="founders": 메인 '창업자 이야기 더 보기'가 이 섹션으로 바로 온다(11/11 CEO)
    <section id="founders" className="relative scroll-mt-16 overflow-hidden py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <Wordmark
          variant="mint"
          height={260}
          role="presentation"
          aria-hidden
          aria-label={undefined}
          className="h-auto w-[150%] max-w-none translate-y-[18%] opacity-[0.07] md:w-[110%]"
        />
      </div>

      <Container size="wide" className="relative">
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">{f.eyebrow}</div>
          <h2 className="display-type mt-4 whitespace-pre-line break-keep text-3xl text-[var(--color-ink-950)] md:text-5xl">
            {f.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* 대표 세션 현장 + 인용 — 글자 아래는 어둡게 덮어 대비 확보 */}
          <FadeIn>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[15/14] rounded-[var(--radius-break)] bg-[var(--color-ink-100)] shadow-elevated">
                <Image
                  src={f.photo.src}
                  alt={f.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-[30%_center]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,12,12,0)_38%,rgba(11,12,12,0.55)_62%,rgba(11,12,12,0.9)_100%)]"
                />
                <blockquote className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <p className="display-type whitespace-pre-line break-keep text-2xl leading-snug md:text-3xl">
                    {f.quote.lead}
                  </p>
                  <p className="mt-3 break-keep text-[15px] text-white/85">{f.quote.body}</p>
                  <footer className="mt-4 text-[13px] text-white/65">
                    {f.quote.by} · {f.quote.source}
                  </footer>
                </blockquote>
              </div>
              <figcaption className="mt-2 break-keep text-xs text-[var(--color-ink-500)]">{f.photo.caption}</figcaption>
            </figure>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {f.story.map((p) => (
                  <p key={p} className="break-keep text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-6 break-keep text-lg font-bold leading-relaxed text-[var(--color-ink-950)] md:text-xl">
                <span className="hl">{f.closer}</span>
              </p>
            </FadeIn>

            {/* 대표·COO — 메인 팀 섹션과 같은 누끼 + 민트 판 */}
            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-6">
              {[STAGE_TEAM.ceo, STAGE_TEAM.coo].map((m, i) => (
                <FadeIn key={m.name} delay={0.15 + i * 0.08}>
                  <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-b-[var(--radius-card)]">
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 top-[26%] rounded-[var(--radius-card)] bg-[var(--color-mint-100)]"
                    />
                    <Image
                      src={m.photo}
                      alt={`${m.name} ${m.role}`}
                      fill
                      sizes="220px"
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-xl font-bold text-[var(--color-ink-950)]">{m.name}</span>
                    <span className="text-[13px] font-semibold text-[var(--color-mint-700)]">{m.role}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {m.lines.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 break-keep text-[13px] leading-relaxed text-[var(--color-ink-700)]"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-mint-500)]"
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
