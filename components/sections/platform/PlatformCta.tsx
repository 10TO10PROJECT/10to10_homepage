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
    eyebrow: "STAGE",
    title: "설명회 풀케어 문의",
    desc: "모객부터 전환까지 책임지는 학원 설명회 풀케어 — 견적과 진행 절차를 안내드립니다.",
    href: "/inquiry",
    cta: "설명회 문의하기 →",
  },
];

export function PlatformCta() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-900)] text-white">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="micro-label text-[var(--color-mint-500)]">Next Step</div>
          <h2 className="display-type mt-4 text-3xl md:text-5xl">
            10to10 플랫폼과 함께하세요.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            학원 도입과 설명회 풀케어 — 가장 잘 맞는 방식으로 시작하실 수 있습니다.
          </p>
        </FadeIn>
        <StaggerChildren className="grid gap-5 md:grid-cols-2">
          {CARDS.map((c) => (
            <StaggerItem key={c.title}>
              <div
                className={`flex h-full flex-col rounded-[var(--radius-card)] border p-7 transition ${
                  c.primary
                    ? "border-[var(--color-mint-500)] bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                }`}
              >
                <div className="micro-label text-[var(--color-mint-500)]">
                  {c.eyebrow}
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm md:text-base text-white/70 leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-6">
                  <Button
                    href={c.href}
                    variant="secondary"
                    size="md"
                    external={c.external}
                    className={c.primary ? "w-full" : undefined}
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
