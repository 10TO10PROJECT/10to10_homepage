import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { PillLink, SectionHead } from "@/components/sections/home/HomeButtons";
import { CountUp } from "@/components/sections/home/CountUp";
import { HOME_OPEN } from "@/lib/content/home";
import { STAGE_PROOF } from "@/lib/content/stage";

/**
 * 10to10 STAGE — 앞 장면(텐투텐 앱)의 "정보"에서 "가장 확실한 정보는 설명회 현장"으로 이어 받는다.
 * 실제 현장 사진 세 장이 차례로 떠오르고, 실측 수치(STAGE_PROOF)가 화면에 들어오면 올라간다.
 */
export function HomeOpen() {
  const [main, ...rest] = HOME_OPEN.photos;
  return (
    <section aria-label="10to10 STAGE" className="py-[72px] md:py-28">
      <div className="m-wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <FadeIn>
            <SectionHead eyebrow={HOME_OPEN.eyebrow} headline={HOME_OPEN.headline} />
            <p className="mt-5 max-w-xl break-keep text-[16px] leading-[1.6] text-[var(--color-ivory)] md:text-[18px]">
              {HOME_OPEN.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href="/stage" variant="ghost">
                STAGE 자세히 보기
              </PillLink>
              <PillLink href="/stage#estimate" variant="ghost">
                견적 바로 확인 <span aria-hidden>→</span>
              </PillLink>
            </div>
          </FadeIn>

          {/* 실측 수치 */}
          <div className="grid gap-3">
            {STAGE_PROOF.events.map((event, i) => (
              <FadeIn key={event.label} delay={0.08 * i}>
                <div className="rounded-[12px] bg-[var(--color-graphite)] p-6 md:p-8">
                  <div className="text-[14px] text-[var(--color-ash)]">{event.label}</div>
                  <dl className="mt-4 grid grid-cols-3 gap-4">
                    {event.stats.map((stat) => (
                      // 읽는 순서는 항목(dt) → 값(dd), 화면에는 값이 위로
                      <div key={stat.label} className="flex flex-col-reverse">
                        <dt className="mt-1.5 text-[13px] text-[var(--color-ash)]">{stat.label}</dt>
                        <dd className="m-display text-[clamp(1.9rem,3.6vw,2.6rem)] text-[var(--color-ivory)]">
                          <CountUp value={stat.value} />
                          {"unit" in stat && <span className="ml-0.5 text-[0.5em] font-[480]">{stat.unit}</span>}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>
            ))}
            <p className="text-[12px] leading-relaxed text-[var(--color-ash)]/80">{STAGE_PROOF.footnote}</p>
          </div>
        </div>

        {/* 실제 현장 사진 — 큰 한 장 + 작은 두 장 */}
        <div className="mt-14 grid gap-3 md:grid-cols-[1.4fr_1fr] md:grid-rows-2">
          <FadeIn className="md:row-span-2">
            <Photo {...main} tall />
          </FadeIn>
          {rest.map((p, i) => (
            <FadeIn key={p.src} delay={0.08 * (i + 1)}>
              <Photo {...p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Photo({ src, alt, caption, tall }: { src: string; alt: string; caption: string; tall?: boolean }) {
  return (
    <figure className={`relative overflow-hidden rounded-[12px] bg-[var(--color-graphite)] ${tall ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(23,23,33,0)_0%,rgba(23,23,33,0.82)_100%)] px-4 pt-10 pb-3 text-[12px] text-[var(--color-ivory)]/90">
        {caption}
      </figcaption>
    </figure>
  );
}
