import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_TEAM, STAGE_EVENT_RECORD } from "@/lib/content/stage";

/** 팀 크레덴셜 — 차별화 뒤. 대표 실명 크레덴셜 + 파트너 클로징 (멘토링 레퍼런스 번안) */
export function TeamCredential() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            {STAGE_TEAM.eyebrow}
          </div>
          <h2 className="display-type mt-4 whitespace-pre-line text-3xl text-[var(--color-ink-950)] md:text-5xl">
            {STAGE_TEAM.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-9">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[var(--color-ink-950)]">
                  {STAGE_TEAM.ceo.name}
                </span>
                <span className="text-sm font-semibold text-[var(--color-ink-500)]">
                  {STAGE_TEAM.ceo.role}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {STAGE_TEAM.ceo.lines.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--color-ink-700)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint-500)]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-9">
              <h3 className="text-xl font-bold text-[var(--color-ink-950)]">
                {STAGE_TEAM.team.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                {STAGE_TEAM.team.desc}
              </p>
              <p className="mt-auto border-t border-[var(--color-cloud)] pt-5 text-base font-bold leading-relaxed text-[var(--color-ink-950)] md:text-lg">
                {STAGE_TEAM.closer}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 행사 운영 실적 — VERIFY (데모데이 명칭 비노출) */}
        <FadeIn delay={0.1} className="mt-16 md:mt-20">
          <div className="micro-label text-[var(--color-ink-500)]">
            {STAGE_EVENT_RECORD.eyebrow}
          </div>
          <div className="mt-4 grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
            <div>
              <h3 className="display-type text-2xl text-[var(--color-ink-950)] md:text-3xl">
                {STAGE_EVENT_RECORD.headline}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                {STAGE_EVENT_RECORD.desc}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {STAGE_EVENT_RECORD.stats.map((s) => (
                  <div key={s.label}>
                    <div className="display-type text-2xl text-[var(--color-ink-950)] md:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-[var(--color-ink-500)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--color-ink-500)]">
                {STAGE_EVENT_RECORD.partnersNote}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {STAGE_EVENT_RECORD.photos.map((ph, i) => (
                <figure
                  key={ph.src}
                  className={i === 0 ? "col-span-2" : undefined}
                >
                  <div
                    className={`relative overflow-hidden rounded-[var(--radius-img,12px)] bg-[var(--color-ink-100)] ${
                      i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={ph.src}
                      alt={ph.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-1.5 text-xs text-[var(--color-ink-500)]">
                    {ph.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
