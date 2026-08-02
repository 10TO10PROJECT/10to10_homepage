import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { LaurelBranch } from "@/components/brand/Laurel";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { INFO_SESSION } from "@/lib/content/stage";
import { COMPANY } from "@/lib/content/company";

export function InfoSessionFlagship() {
  return (
    <section
      id="info-session"
      className="bg-[var(--color-ink-900)] py-20 text-white md:py-28"
    >
      <Container size="wide">
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-mint-500)]">
            Flagship · 설명회 풀케어
          </div>
          <h2 className="display-type mt-5 whitespace-pre-line text-3xl md:text-5xl">
            {INFO_SESSION.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
            {INFO_SESSION.subhead}
          </p>
        </FadeIn>

        {/* 실측 지표 — 브로슈어 P5 '숫자로 보는 설명회의 가능성' + 월계수 리스 */}
        <FadeIn delay={0.1} className="mt-16">
          <div className="mb-8 text-center">
            <div className="text-sm font-semibold text-white/60">
              {INFO_SESSION.numbersHead.eyebrow}
            </div>
            <h3 className="display-type mt-2 text-2xl md:text-4xl">
              {INFO_SESSION.numbersHead.headline}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {INFO_SESSION.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-5 text-center md:p-6"
              >
                <div className="flex items-center gap-1 text-[var(--color-mint-500)]">
                  <LaurelBranch size={44} side="left" />
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold text-white/70">{m.label}</div>
                    <div className="display-type mt-0.5 text-2xl md:text-3xl">
                      {m.value}
                      {m.unit && (
                        <span className="ml-0.5 text-sm text-white/50">{m.unit}</span>
                      )}
                    </div>
                  </div>
                  <LaurelBranch size={44} side="right" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[13px] text-white/45">{INFO_SESSION.note}</p>
        </FadeIn>

        {/* 풀케어 6단계 */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="mb-8 max-w-2xl">
            <div className="micro-label text-[var(--color-mint-500)]">
              Full-Care Process
            </div>
            <h3 className="display-type mt-3 text-2xl md:text-4xl">
              6단계, 전부 저희가 준비합니다.
            </h3>
          </div>
          <StaggerChildren className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INFO_SESSION.stages.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="h-full rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <div className="display-type text-2xl text-[var(--color-mint-500)]/60">
                    {s.step}
                  </div>
                  <h4 className="mt-2 text-lg font-bold">{s.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/65">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        {/* 원장님 할 일 세 가지 (브로슈어 P4 하단) */}
        <FadeIn delay={0.25} className="mt-12">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-mint-500)]/40 bg-[var(--color-mint-500)]/10 p-6 text-center md:p-8">
            <div className="display-type text-xl text-[var(--color-mint-500)] md:text-2xl">
              {INFO_SESSION.ownerTasks.headline}
            </div>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {INFO_SESSION.ownerTasks.items.map((d, i) => (
                <li
                  key={d}
                  className="flex items-center gap-3 text-[15px] font-semibold text-white/90 md:text-base"
                >
                  {i > 0 && <span aria-hidden className="text-white/30">/</span>}
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Testimonial */}
        <FadeIn delay={0.3} className="mx-auto mt-12 max-w-2xl text-center">
          <blockquote className="text-xl font-medium leading-snug text-white/90 md:text-2xl">
            &ldquo;{INFO_SESSION.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-3 text-sm text-white/55">
            — {INFO_SESSION.testimonial.source}
          </div>
        </FadeIn>

        {/* CTA — 카카오 1순위 (T2 옐로 규격) */}
        <FadeIn delay={0.35} className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={COMPANY.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] px-7 text-lg font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
          >
            <KakaoSymbol size={20} />
            {INFO_SESSION.ctaPrimary.label}
          </a>
          <a
            href={`?service=info_session${INFO_SESSION.ctaSecondary.href}`}
            className="inline-flex h-14 items-center rounded-[var(--radius-btn)] bg-white px-7 text-lg font-semibold text-[var(--color-ink-950)] transition hover:bg-[var(--color-ink-100)]"
          >
            {INFO_SESSION.ctaSecondary.label}
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
