import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { InvestInquiryForm } from "@/components/forms/InvestInquiryForm";
import { COMPANY } from "@/lib/content/company";
import { INVEST_HERO, INVEST_HIGHLIGHTS } from "@/lib/content/invest";

export const metadata: Metadata = {
  title: "투자·지원 — 10to10",
  description:
    "10to10 IR 자료와 투자·지원사업 협업 제안 창구. 폼 또는 카카오톡으로 연락 주세요.",
};

export default function InvestPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              {INVEST_HERO.eyebrow}
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {INVEST_HERO.title}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-700)] leading-relaxed">
              {INVEST_HERO.desc}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={COMPANY.irPdfPath} variant="primary" size="lg" external>
                IR 자료 다운로드 ↓
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                투자·지원 문의
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-[var(--color-ink-50)]">
        <Container>
          <FadeIn className="mb-10 max-w-2xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              HIGHLIGHTS
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              한눈에 보는 10to10.
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INVEST_HIGHLIGHTS.map((h) => (
              <StaggerItem key={h.label}>
                <Card className="h-full">
                  <div className="text-xs font-bold tracking-widest text-[var(--color-mint-600)]">
                    {h.label}
                  </div>
                  <div className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                    {h.value}
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-ink-700)] leading-relaxed">
                    {h.desc}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container size="narrow">
          <FadeIn>
            <Card className="text-center bg-gradient-to-br from-[var(--color-mint-500)]/10 to-[var(--color-sky-500)]/10 border-[var(--color-mint-500)]/40">
              <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
                IR DECK
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                10to10 IR 자료
              </h2>
              <p className="mt-4 text-[var(--color-ink-700)] max-w-xl mx-auto leading-relaxed">
                시장·문제·솔루션·BM·트랙션·팀·로드맵을 한 장에 담았습니다.
                PDF로 다운로드받으실 수 있습니다.
              </p>
              <div className="mt-8">
                <Button href={COMPANY.irPdfPath} variant="primary" size="lg" external>
                  IR PDF 다운로드 ↓
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      <section id="contact" className="pb-24 md:pb-32">
        <Container size="narrow">
          <FadeIn className="mb-10">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              CONTACT
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              투자·지원 협업 제안
            </h2>
            <p className="mt-4 text-[var(--color-ink-700)] leading-relaxed">
              아래 폼을 작성하시면 CEO 신현우가 직접 확인하고 영업일 기준 2일 내 회신드립니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card>
              <InvestInquiryForm />
            </Card>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 text-center">
            <a
              href={COMPANY.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-700)] hover:text-[var(--color-mint-600)] transition"
            >
              또는 카카오톡 채널로 바로 문의 →
            </a>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
