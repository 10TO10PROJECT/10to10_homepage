import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_GUARANTEE } from "@/lib/content/stage";

/** 심리 1 — 손실 회피가 최대 전환 장치. 가격보다 눈에 띄게. (✅GO 문구 락) */
export function GuaranteeBanner() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[var(--radius-sm)] border-2 border-[var(--color-mint-500)] bg-white p-10 md:p-14">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-2 bg-[var(--color-mint-500)]"
            />
            <div className="micro-label text-[var(--color-mint-600)]">
              {STAGE_GUARANTEE.eyebrow}
            </div>
            <h2 className="display-type mt-4 whitespace-pre-line text-3xl text-[var(--color-ink-950)] md:text-5xl">
              {STAGE_GUARANTEE.headline}
            </h2>
            <p className="mt-5 text-base text-[var(--color-ink-700)] md:text-lg">
              {STAGE_GUARANTEE.sub}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
