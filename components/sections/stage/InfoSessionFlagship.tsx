import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { INFO_SESSION } from "@/lib/content/stage";
import { COMPANY } from "@/lib/content/company";

export function InfoSessionFlagship() {
  return (
    <section
      id="info-session"
      className="bg-[var(--color-ink-950)] py-24 text-white md:py-32"
    >
      <Container>
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-mint-500)]">
            Flagship · 설명회 풀케어
          </div>
          <h2 className="display-type mt-5 whitespace-pre-line text-3xl md:text-5xl">
            {INFO_SESSION.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            {INFO_SESSION.subhead}
          </p>
        </FadeIn>

        {/* 실측 지표 — 심리 5: 사회적 증거 (출처 병기) */}
        <FadeIn delay={0.1} className="mt-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-sm)] border border-white/15 bg-white/15 md:grid-cols-4">
            {INFO_SESSION.metrics.map((m) => (
              <div key={m.label} className="bg-[var(--color-ink-950)] p-5 md:p-6">
                <div className="flex items-baseline gap-1">
                  <span className="display-type text-3xl text-[var(--color-mint-500)] md:text-4xl">
                    {m.value}
                  </span>
                  <span className="text-sm text-white/50">{m.unit}</span>
                </div>
                <div className="mt-1.5 text-xs text-white/65 md:text-sm">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/45">{INFO_SESSION.note}</p>
        </FadeIn>

        {/* 현장 사진 — 증거이므로 원색 그대로 */}
        <FadeIn delay={0.15} className="mt-16">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {INFO_SESSION.photos.map((p, i) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-[var(--radius-img)] border border-white/10 ${
                  i === 0 ? "col-span-2 aspect-[4/3] md:col-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 text-xs font-semibold text-white">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>

        {/* 풀케어 6단계 */}
        <FadeIn delay={0.2} className="mt-20">
          <div className="mb-8 max-w-2xl">
            <div className="micro-label text-[var(--color-mint-500)]">
              Full-Care Process
            </div>
            <h3 className="display-type mt-3 text-2xl md:text-4xl">
              원장님은 발표만,
              <br />
              나머지 6단계는 저희가.
            </h3>
          </div>
          <StaggerChildren className="grid gap-px overflow-hidden rounded-[var(--radius-sm)] border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {INFO_SESSION.stages.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="h-full bg-[var(--color-ink-950)] p-6 transition-colors hover:bg-white/[0.04]">
                  <div className="display-type text-3xl text-[var(--color-mint-500)]/50">
                    {s.step}
                  </div>
                  <h4 className="mt-2 text-lg font-bold">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        {/* 차별화 포인트 */}
        <FadeIn delay={0.25} className="mt-14">
          <div className="rounded-[var(--radius-sm)] border border-[var(--color-mint-500)]/40 bg-[var(--color-mint-500)]/10 p-6 md:p-8">
            <div className="micro-label text-[var(--color-mint-500)]">
              왜 10to10 설명회 풀케어인가
            </div>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {INFO_SESSION.differentiators.map((d) => (
                <li key={d} className="flex gap-2 text-sm leading-relaxed text-white/90">
                  <span className="flex-shrink-0 font-bold text-[var(--color-mint-500)]">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Testimonial */}
        <FadeIn delay={0.3} className="mx-auto mt-14 max-w-2xl text-center">
          <blockquote className="text-xl font-medium leading-snug text-white/90 md:text-2xl">
            &ldquo;{INFO_SESSION.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-3 text-sm text-white/55">
            — {INFO_SESSION.testimonial.source}
          </div>
        </FadeIn>

        {/* CTA — 카톡 1순위 */}
        <FadeIn delay={0.35} className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={COMPANY.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-[var(--radius-xs)] bg-[var(--color-mint-500)] px-7 text-lg font-bold text-[var(--color-ink-950)] shadow-[var(--shadow-mint)] transition hover:bg-[var(--color-mint-600)] hover:text-white"
          >
            {INFO_SESSION.ctaPrimary.label}
            <span aria-hidden>→</span>
          </a>
          <a
            href={`?service=info_session${INFO_SESSION.ctaSecondary.href}`}
            className="inline-flex h-14 items-center rounded-[var(--radius-xs)] border border-white/40 px-7 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            {INFO_SESSION.ctaSecondary.label}
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
