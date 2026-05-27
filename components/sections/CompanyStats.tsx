import { Container } from "@/components/ui/Container";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { FadeIn } from "@/components/motion/FadeIn";

type StatItem = {
  value: string;
  label: string;
  caption: string;
  icon: "academy" | "team" | "launch" | "selected";
};

const STATS: StatItem[] = [
  {
    value: "16+",
    label: "파트너 학원",
    caption: "베타 운영 중 누적 학원 수",
    icon: "academy",
  },
  {
    value: "8",
    label: "팀원",
    caption: "기획·개발·운영·디자인",
    icon: "team",
  },
  {
    value: "Beta",
    label: "운영 중",
    caption: "정규 v1.0 · 2026.07.28 예정",
    icon: "launch",
  },
  {
    value: "선정",
    label: "모두의 창업",
    caption: "정부 지원 프로그램",
    icon: "selected",
  },
];

function StatIcon({ kind }: { kind: StatItem["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "academy") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V10l7-5 7 5v11" />
        <path d="M10 21v-6h4v6" />
      </svg>
    );
  }
  if (kind === "team") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M15 20c0-2.5 1.6-4.6 4-5.4" />
      </svg>
    );
  }
  if (kind === "launch") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M14 4c4 0 6 2 6 6-3 1-5 3-6 6l-4-4c1-3 3-5 4-8z" />
        <path d="M10 16l-2 2-3-1 1-3 2-2" />
        <circle cx="15" cy="9" r="1.2" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M5 5H3v2a3 3 0 0 0 3 3" />
      <path d="M19 5h2v2a3 3 0 0 1-3 3" />
    </svg>
  );
}

const TRUST_BADGES = [
  "16+ 파트너 학원과 실제 운영 중",
  "모두의 창업 선정 팀",
  "한국형 LLM Solar(Upstage) 협업",
];

export function CompanyStats() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-900)] text-white">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            숫자로 보는 10to10
          </h2>
          <p className="mt-4 text-lg text-white/70">
            우리는 천천히, 그러나 단단하게 만들고 있습니다.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-14 grid gap-5 md:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="h-full rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[var(--color-mint-500)]/40 hover:bg-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-mint-500)]/25 to-[var(--color-sky-500)]/25 text-[var(--color-mint-500)]">
                  <StatIcon kind={s.icon} />
                </div>
                <div className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm md:text-base font-medium text-white/80">
                  {s.label}
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/50">{s.caption}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeIn delay={0.2} className="mt-10 flex flex-wrap gap-2">
          {TRUST_BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs md:text-sm text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-500)]" />
              {b}
            </span>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
