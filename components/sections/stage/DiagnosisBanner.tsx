import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_DIAGNOSIS } from "@/lib/content/stage";
import { COMPANY } from "@/lib/content/company";

/** 무료 모객 진단 리드 마그넷 — 그로스파이낸스 중간 진단 배너 문법 번안. 표준 절차 1단계를 전면 오퍼로. */
export function DiagnosisBanner() {
  const D = STAGE_DIAGNOSIS;
  return (
    <section id="diagnosis" className="py-10 md:py-14">
      <Container size="wide">
        <FadeIn>
          <div className="rounded-[var(--radius-break)] border-2 border-[var(--color-mint-500)] bg-[var(--color-mint-500)]/10 p-7 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <div className="micro-label text-[var(--color-ink-500)]">
                  {D.eyebrow}
                </div>
                <h2 className="display-type mt-3 whitespace-pre-line text-2xl text-[var(--color-ink-950)] md:text-4xl">
                  {D.headline}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                  {D.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-[var(--color-ink-700)]">
                  {D.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-500)]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={COMPANY.kakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-base font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
                >
                  <KakaoSymbol size={18} />
                  {D.ctaKakao}
                </a>
                <a
                  href="/?service=info_session#contact"
                  className="inline-flex h-13 min-h-12 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] text-base font-bold text-white transition hover:bg-black"
                >
                  {D.ctaForm}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
