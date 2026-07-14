import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { InvestInquiryForm } from "@/components/forms/InvestInquiryForm";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { COMPANY } from "@/lib/content/company";
import {
  INVEST_HERO,
  INVEST_HIGHLIGHTS,
  INVEST_PHASES,
  INVEST_RECOGNITION,
} from "@/lib/content/invest";

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

          <FadeIn delay={0.2} className="mt-12">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-mint-500)]/50 bg-gradient-to-br from-[var(--color-mint-500)]/10 to-[var(--color-sky-500)]/10 p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm text-2xl">
                  🏅
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold tracking-[0.18em] text-[var(--color-mint-700)]">
                    {INVEST_RECOGNITION.eyebrow}
                  </div>
                  <div className="mt-1 text-lg md:text-xl font-bold text-[var(--color-ink-900)]">
                    {INVEST_RECOGNITION.title}
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-ink-700)] leading-relaxed">
                    {INVEST_RECOGNITION.desc}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <SectionDivider from="white" to="muted" />

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

      <SectionDivider from="muted" to="white" />

      <section className="py-20 md:py-24">
        <Container>
          <FadeIn className="mb-10 max-w-2xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              ROADMAP
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Phase 전략 · 뾰족하게, 그 다음 넓게.
            </h2>
            <p className="mt-4 text-[15px] md:text-base text-[var(--color-ink-700)] leading-relaxed">
              학원 마케팅 전반을 한 번에 판매하지 않습니다. 시장이 비어 있는 설명회 영역에
              먼저 진입해 파트너 학원을 확보한 후, 확장·플랫폼화로 넘어갑니다.
            </p>
          </FadeIn>
          <StaggerChildren className="grid gap-5 md:grid-cols-3">
            {INVEST_PHASES.map((p) => {
              const isMint = p.tone === "mint";
              const isSky = p.tone === "sky";
              const borderCls = isMint
                ? "border-t-[var(--color-mint-500)]"
                : isSky
                  ? "border-t-[var(--color-sky-500)]"
                  : "border-t-[var(--color-ink-500)]";
              const statusCls = isMint
                ? "bg-[var(--color-mint-500)] text-[var(--color-ink-900)]"
                : "bg-[var(--color-ink-100)] text-[var(--color-ink-700)]";
              return (
                <StaggerItem key={p.id}>
                  <div
                    className={`h-full rounded-[var(--radius-lg)] bg-white p-6 md:p-7 ring-1 ring-[var(--color-ink-300)]/40 shadow-lg shadow-[var(--color-ink-900)]/5 border-t-4 ${borderCls}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-[0.18em] text-[var(--color-ink-500)]">
                        {p.label}
                      </span>
                      <span
                        className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full ${statusCls}`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-[var(--color-ink-900)] leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-ink-700)] leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="mt-6 text-[11px] font-semibold tracking-wide text-[var(--color-ink-500)] pt-4 border-t border-[var(--color-ink-100)]">
                      🎯 {p.kpi}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
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
