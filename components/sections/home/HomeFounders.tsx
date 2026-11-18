import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { HOME_FOUNDERS } from "@/lib/content/home";
import { PLATFORM_FOUNDERS } from "@/lib/content/platform";

/** 만드는 사람들 — /platform 창업자 이야기(PLATFORM_FOUNDERS, 대표 본인 공개 글만 인용)의 요약판 */
export function HomeFounders() {
  const f = PLATFORM_FOUNDERS;
  return (
    <section className="py-[72px] md:py-28">
      <div className="m-wrap">
        <FadeIn>
          <div className="grid overflow-hidden rounded-[12px] bg-[var(--color-graphite)] md:grid-cols-[0.9fr_1.1fr]">
            <figure className="relative min-h-[280px] md:min-h-full">
              <Image src={f.photo.src} alt={f.photo.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(23,23,33,0)_0%,rgba(23,23,33,0.85)_100%)] px-5 pt-10 pb-4 text-[12px] text-[var(--color-ivory)]/85">
                {f.photo.caption}
              </figcaption>
            </figure>
            <div className="p-7 md:p-12">
              <p className="m-eyebrow">{HOME_FOUNDERS.eyebrow}</p>
              <h2 className="m-heading mt-4 whitespace-pre-line text-[clamp(1.6rem,2.8vw,2.25rem)] text-[var(--color-ivory)]">
                {f.headline}
              </h2>
              <p className="mt-5 break-keep text-[16px] leading-[1.6] text-[var(--color-ivory)]">{f.story[0]}</p>
              <blockquote className="mt-7 border-l-2 border-[var(--color-mint-500)] pl-5">
                <p className="m-heading whitespace-pre-line text-[19px] text-[var(--color-ivory)]">“{f.quote.lead}”</p>
                <footer className="mt-2 text-[13px] text-[var(--color-ash)]">
                  {f.quote.by} · {f.quote.source}
                </footer>
              </blockquote>
              <Link
                href="/platform#founders"
                className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--color-ivory)] underline-offset-4 hover:underline"
              >
                창업자 이야기 더 보기 <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
