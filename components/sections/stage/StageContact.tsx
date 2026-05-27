import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

export function StageContact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container size="narrow">
        <FadeIn className="mb-12 text-center">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            CONTACT
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            학원 영업 위탁 문의
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            상담은 무료, 결정은 천천히. 영업일 기준 1일 내 연락드립니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <InquiryForm source="stage" />
        </FadeIn>
        <div className="mt-10 text-center">
          <span className="text-sm text-[var(--color-ink-500)]">또는 </span>
          <Button href={COMPANY.kakaoUrl} variant="ghost" external>
            카카오톡으로 문의 →
          </Button>
        </div>
      </Container>
    </section>
  );
}
