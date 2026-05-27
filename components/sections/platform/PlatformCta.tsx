import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { COMPANY } from "@/lib/content/company";
import { PLATFORM_ACADEMY_REGISTER_URL } from "@/lib/content/platform";

type CtaCard = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  external?: boolean;
  primary?: boolean;
};

const CARDS: CtaCard[] = [
  {
    eyebrow: "FOR ACADEMIES",
    title: "학원으로 등록하기",
    desc: "Beta 서비스에 학원 계정으로 가입하면 운영 SaaS와 학부모 앱 노출을 함께 시작할 수 있습니다.",
    href: PLATFORM_ACADEMY_REGISTER_URL,
    cta: "Beta에서 학원 등록 →",
    external: true,
    primary: true,
  },
  {
    eyebrow: "FOR INVESTORS",
    title: "IR 자료 다운로드",
    desc: "10to10의 사업 모델·시장·팀·로드맵을 한 장에 담은 IR 덱(PDF).",
    href: COMPANY.irPdfPath,
    cta: "IR PDF 받기 ↓",
    external: true,
  },
  {
    eyebrow: "PARTNERSHIP",
    title: "투자·지원 협업 제안",
    desc: "투자, 지원사업, 협업 제안은 메일 또는 카카오톡으로 편하게 연락 주세요.",
    href: "/invest",
    cta: "투자·지원 페이지 →",
  },
];

export function PlatformCta() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-900)] text-white">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-500)]">
            NEXT STEP
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            10to10 플랫폼과 함께하세요.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            학원 도입, 투자·지원, 협업 제안 — 가장 잘 맞는 방식으로 시작하실 수 있습니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <StaggerItem key={c.title}>
              <div
                className={`flex h-full flex-col rounded-[var(--radius-lg)] border p-7 transition ${
                  c.primary
                    ? "border-[var(--color-mint-500)] bg-gradient-to-br from-[var(--color-mint-500)]/15 to-[var(--color-sky-500)]/15"
                    : "border-white/10 bg-white/[0.04] hover:border-[var(--color-mint-500)]/40"
                }`}
              >
                <div className="text-xs font-bold tracking-widest text-[var(--color-mint-500)]">
                  {c.eyebrow}
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm md:text-base text-white/70 leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-6">
                  <Button
                    href={c.href}
                    variant={c.primary ? "primary" : "outline"}
                    size="md"
                    external={c.external}
                    className={
                      c.primary
                        ? undefined
                        : "bg-transparent text-white border-white/30 hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-500)]"
                    }
                  >
                    {c.cta}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeIn delay={0.2} className="mt-10 text-center">
          <a
            href={COMPANY.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--color-mint-500)] transition"
          >
            카카오톡으로 바로 문의하기 →
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
