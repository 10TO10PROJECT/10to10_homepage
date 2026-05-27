import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { VISION } from "@/lib/content/company";
import { TEAM } from "@/lib/content/team";

export function TeamVision() {
  return (
    <section id="team" className="py-24 md:py-32">
      <Container>
        <FadeIn className="mb-16 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            MISSION & VISION
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {VISION.mission}
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-700)] leading-relaxed">
            {VISION.vision}
          </p>
        </FadeIn>

        <FadeIn className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold">함께 만드는 사람들</h3>
        </FadeIn>
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m) => (
            <StaggerItem key={m.name}>
              <Card className="p-6">
                <div className="aspect-square w-full rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-mint-500)]/20 to-[var(--color-sky-500)]/20 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--color-mint-600)]">
                    {m.name[0]}
                  </span>
                </div>
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-[var(--color-mint-600)] font-medium">
                  {m.role}
                </div>
                {m.affiliation && (
                  <div className="text-xs text-[var(--color-ink-500)] mt-1">
                    {m.affiliation}
                  </div>
                )}
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
