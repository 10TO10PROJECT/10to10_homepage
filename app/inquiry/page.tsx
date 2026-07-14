import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_BETA_URL } from "@/lib/content/platform";

export const metadata: Metadata = {
  title: "학원 문의 — 10to10",
  description:
    "10to10은 두 가지 트랙으로 학원을 지원합니다. AI 플랫폼 도입과 STAGE 마케팅 문의를 트랙별로 안내합니다.",
};

export default function InquiryPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/3 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[var(--color-mint-500)]/15 to-[var(--color-sky-500)]/10 blur-3xl"
      />
      <Container className="relative">
        <FadeIn className="max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            INQUIRY
          </div>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.15]">
            어떤 문의를 하시나요?
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
            10to10은 두 가지 트랙으로 학원을 지원합니다.
            <br className="hidden sm:inline" />
            필요한 트랙을 선택해 주세요.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          <FadeIn delay={0.15}>
            <InquiryCard
              eyebrow="PRODUCT 01 · 10to10 AI 플랫폼"
              phase="PHASE 3 SaaS"
              title="AI 플랫폼 도입·체험"
              desc="학원 운영 SaaS와 학부모·학생 탐색 앱을 연결한 양면 플랫폼입니다. Beta 체험 또는 정규 도입 문의를 안내드립니다."
              bullets={[
                "학원 운영 SaaS (관리자 콘솔)",
                "학부모·학생 탐색 앱",
                "AI 에이전트 자동화",
              ]}
              primary={{
                href: PLATFORM_BETA_URL,
                label: "Beta 바로 체험하기",
                external: true,
              }}
              secondary={{ href: "/platform", label: "플랫폼 자세히 보기" }}
              tone="mint"
            />
          </FadeIn>
          <FadeIn delay={0.25}>
            <InquiryCard
              eyebrow="PRODUCT 02 · 10to10 STAGE"
              phase="PHASE 1 · 진행 중"
              title="학원 설명회 풀케어 문의"
              desc="연세대·한양대 출신 전담팀이 학원 설명회를 기획·디자인·모객·현장 운영까지 풀케어합니다. 원장님은 발표만 하세요."
              bullets={[
                "설명회 풀케어 · 1회성 프로젝트",
                "만족도 4.32 / 5.0 · 재참석 100%",
                "Phase 2 마케팅 전반 확장 예정",
              ]}
              primary={{ href: "/stage#contact", label: "설명회 견적 문의하기" }}
              secondary={{ href: "/stage", label: "STAGE 자세히 보기" }}
              tone="ink"
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center text-sm text-[var(--color-ink-500)]">
          어떤 트랙인지 모르겠다면{" "}
          <Link
            href="/stage#contact"
            className="font-semibold text-[var(--color-mint-600)] hover:underline"
          >
            STAGE 문의 폼
          </Link>
          에 남겨주세요. 상담 단계에서 트랙을 함께 정해드립니다.
        </FadeIn>
      </Container>
    </section>
  );
}

function InquiryCard({
  eyebrow,
  phase,
  title,
  desc,
  bullets,
  primary,
  secondary,
  tone,
}: {
  eyebrow: string;
  phase?: string;
  title: string;
  desc: string;
  bullets: string[];
  primary: { href: string; label: string; external?: boolean };
  secondary: { href: string; label: string };
  tone: "mint" | "ink";
}) {
  const primaryCls =
    tone === "mint"
      ? "inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-500)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink-900)] transition hover:bg-[var(--color-mint-600)] hover:text-white"
      : "inline-flex items-center gap-2 rounded-full bg-[var(--color-ink-900)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--color-ink-700)]";

  const phaseBadgeCls =
    tone === "mint"
      ? "text-[10px] font-bold tracking-widest text-[var(--color-ink-500)] px-2 py-0.5 rounded-full bg-[var(--color-ink-100)]"
      : "text-[10px] font-bold tracking-widest text-[var(--color-mint-700)] px-2 py-0.5 rounded-full bg-[var(--color-mint-100)]";

  return (
    <div className="h-full rounded-[var(--radius-lg)] bg-white p-8 md:p-10 ring-1 ring-[var(--color-ink-300)]/40 shadow-lg shadow-[var(--color-ink-900)]/5 transition hover:shadow-2xl hover:shadow-[var(--color-ink-900)]/10 hover:-translate-y-0.5">
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-xs font-bold tracking-[0.18em] text-[var(--color-mint-600)]">
          {eyebrow}
        </span>
        {phase && <span className={phaseBadgeCls}>{phase}</span>}
      </div>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-ink-900)]">
        {title}
      </h2>
      <p className="mt-4 text-[15px] md:text-base text-[var(--color-ink-700)] leading-relaxed">
        {desc}
      </p>
      <ul className="mt-6 space-y-2 text-sm text-[var(--color-ink-700)]">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-[var(--color-mint-600)] flex-shrink-0">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        {primary.external ? (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryCls}
          >
            {primary.label}
            <span aria-hidden>→</span>
          </a>
        ) : (
          <Link href={primary.href} className={primaryCls}>
            {primary.label}
            <span aria-hidden>→</span>
          </Link>
        )}
        <Link
          href={secondary.href}
          className="text-sm font-medium text-[var(--color-ink-500)] underline-offset-4 hover:text-[var(--color-ink-900)] hover:underline"
        >
          {secondary.label} →
        </Link>
      </div>
    </div>
  );
}
