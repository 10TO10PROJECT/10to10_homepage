import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function PlatformCta() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-900)] text-white">
      <Container className="text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            10to10 플랫폼과 함께하세요.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            학원으로 등록하시거나, 투자·지원사업 협업을 제안해 주세요. IR 자료도 확인하실 수
            있습니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href={COMPANY.kakaoUrl} variant="primary" size="lg" external>
              학원으로 등록
            </Button>
            <Button
              href={COMPANY.irPdfPath}
              variant="outline"
              size="lg"
              external
              className="bg-transparent text-white border-white/30 hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-500)]"
            >
              IR 자료 다운로드
            </Button>
            <Button
              href={`mailto:${COMPANY.email}`}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              투자·지원 문의
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
