import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { INFO_SESSION } from "@/lib/content/stage";

export function InfoSessionFlagship() {
  return (
    <section
      id="info-session"
      className="relative overflow-hidden py-24 md:py-32 bg-[var(--color-ink-900)] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/30 to-[var(--color-sky-500)]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-[var(--color-mint-500)]/15 blur-3xl"
      />

      <Container className="relative">
        <FadeIn className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-sky-500)] px-4 py-1.5 text-xs font-bold text-[var(--color-ink-900)]">
            ⭐ {INFO_SESSION.badge}
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-tight whitespace-pre-line">
            {INFO_SESSION.headline}
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed">
            {INFO_SESSION.subhead}
          </p>
        </FadeIn>

        {/* 만족도 지표 */}
        <FadeIn delay={0.1} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {INFO_SESSION.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[var(--color-mint-400)] to-[var(--color-sky-400)] bg-clip-text text-transparent">
                    {m.value}
                  </span>
                  <span className="text-sm text-white/60">{m.unit}</span>
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">{INFO_SESSION.note}</p>
        </FadeIn>

        {/* 사진 갤러리 */}
        <FadeIn delay={0.15} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {INFO_SESSION.photos.map((p, i) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-[var(--radius-lg)] ring-1 ring-white/10 ${
                  i === 0 ? "col-span-2 md:col-span-2 aspect-[4/3]" : "aspect-square"
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

        {/* 6단계 운영 프로세스 */}
        <FadeIn delay={0.2} className="mt-20">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-400)]">
              FULL-CARE PROCESS
            </div>
            <h3 className="mt-2 text-2xl md:text-4xl font-bold tracking-tight">
              학원장은 발표만,
              <br />
              나머지 6단계는 저희가.
            </h3>
          </div>
          <StaggerChildren className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INFO_SESSION.stages.map((s) => (
              <StaggerItem key={s.step}>
                <div className="group relative h-full rounded-[var(--radius-lg)] border border-white/10 bg-white/5 backdrop-blur p-6 transition-all hover:border-[var(--color-mint-400)]/60 hover:bg-white/10">
                  <div className="text-4xl font-extrabold text-[var(--color-mint-400)]/40">
                    {s.step}
                  </div>
                  <h4 className="mt-2 text-lg font-bold">{s.title}</h4>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        {/* 차별화 포인트 */}
        <FadeIn delay={0.25} className="mt-16">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-mint-400)]/30 bg-[var(--color-mint-500)]/10 p-6 md:p-8">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-400)]">
              왜 10to10 설명회 풀케어인가
            </div>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {INFO_SESSION.differentiators.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-white/90 leading-relaxed">
                  <span className="text-[var(--color-mint-400)] font-bold flex-shrink-0">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Testimonial */}
        <FadeIn delay={0.3} className="mt-12 text-center max-w-2xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-medium text-white/90 leading-snug">
            &ldquo;{INFO_SESSION.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-3 text-sm text-white/60">
            — {INFO_SESSION.testimonial.source}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.35} className="mt-12 flex flex-wrap justify-center gap-3">
          <Button
            href={`?service=info_session${INFO_SESSION.ctaPrimary.href}`}
            variant="primary"
            size="lg"
          >
            {INFO_SESSION.ctaPrimary.label}
          </Button>
          <Button
            href={INFO_SESSION.ctaSecondary.href}
            variant="outline"
            size="lg"
            className="!text-white !border-white/40 hover:!bg-white/10"
          >
            {INFO_SESSION.ctaSecondary.label}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
