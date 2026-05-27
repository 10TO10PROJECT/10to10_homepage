import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { PLATFORM_AGENTS } from "@/lib/content/platform";

type IconName = (typeof PLATFORM_AGENTS)[number]["icon"];

function AgentIcon({ name }: { name: IconName }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "chat") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M4 5h16v11H8l-4 4V5z" />
        <path d="M8 10h8" />
        <path d="M8 13h5" />
      </svg>
    );
  }
  if (name === "schedule") {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M8 14h2" />
        <path d="M14 14h2" />
        <path d="M8 17h2" />
      </svg>
    );
  }
  if (name === "notice") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M3 11v2a1 1 0 0 0 1 1h2l8 5V5l-8 5H4a1 1 0 0 0-1 1z" />
        <path d="M17 8a4 4 0 0 1 0 8" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="M15.5 15.5L20 20" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

export function Agents() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <Badge>AI AGENT — 9월 정식 출시</Badge>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            네 개의 AI 에이전트가
            <br />
            원장님의 손이 가던 일을 대신합니다.
          </h2>
        </FadeIn>
        <StaggerChildren className="grid gap-4 md:grid-cols-2">
          {PLATFORM_AGENTS.map((a) => (
            <StaggerItem key={a.title}>
              <div className="group h-full rounded-[var(--radius-lg)] border border-[var(--color-ink-300)]/60 bg-white p-7 transition hover:border-[var(--color-mint-600)] hover:shadow-[0_8px_30px_-12px_rgba(44,196,168,0.35)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-mint-600)] text-white transition group-hover:bg-[var(--color-ink-900)]">
                    <AgentIcon name={a.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-ink-900)]">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[var(--color-ink-700)] leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
