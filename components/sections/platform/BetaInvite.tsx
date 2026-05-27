import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_BETA_URL } from "@/lib/content/platform";

export function BetaInvite() {
  return (
    <section id="beta" className="py-24 md:py-32">
      <Container size="narrow">
        <FadeIn>
          <Card className="text-center bg-gradient-to-br from-[var(--color-mint-500)]/10 to-[var(--color-sky-500)]/10 border-[var(--color-mint-500)]/40">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              BETA — 운영 중
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              지금 Beta를 체험해 보세요.
            </h2>
            <p className="mt-4 text-[var(--color-ink-700)] max-w-xl mx-auto leading-relaxed">
              eduflo.co.kr 에서 학원·학부모용 Beta 앱을 운영 중입니다. 정규 v1.0 출시 알림을
              받으시려면 채널에 등록해 주세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={PLATFORM_BETA_URL} variant="primary" size="lg" external>
                Beta 바로가기 →
              </Button>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
