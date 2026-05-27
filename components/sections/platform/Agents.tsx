import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { PLATFORM_AGENTS } from "@/lib/content/platform";

export function Agents() {
  return (
    <section className="py-24 md:py-32">
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
              <Card interactive className="h-full">
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-[var(--color-ink-700)] leading-relaxed">{a.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
