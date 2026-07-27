import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_GUARANTEE } from "@/lib/content/stage";

/** 심리 1 — 손실 회피가 최대 전환 장치. 사이트에서 민트가 가장 크게 쓰이는 자리. */
export function GuaranteeBanner() {
  return (
    <section className="py-10 md:py-14">
      <Container size="wide">
        <FadeIn>
          <div className="rounded-[var(--radius-break)] border-2 border-[var(--color-mint-500)] bg-white p-8 md:p-14">
            <Badge variant="mint">{STAGE_GUARANTEE.eyebrow}</Badge>
            <h2 className="display-type mt-5 whitespace-pre-line text-3xl text-[var(--color-ink-950)] md:text-5xl">
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
