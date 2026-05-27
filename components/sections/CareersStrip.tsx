import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function CareersStrip() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-[var(--color-mint-100)]">
      <Container>
        <FadeIn className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              CAREERS
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              함께 교육 생태계를
              <br className="md:hidden" /> 혁신할 분을 찾습니다.
            </h2>
            <p className="mt-4 text-lg text-[var(--color-ink-700)]">
              기획·개발·디자인·운영 — 모든 트랙 열려 있습니다.
            </p>
          </div>
          <Button href={COMPANY.careersUrl} variant="primary" size="lg" external>
            채용 공고 보기 →
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
