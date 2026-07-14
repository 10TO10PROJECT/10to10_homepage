import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { TEAM } from "@/lib/content/team";
import { COMPANY } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "팀 — 10to10",
  description: "10to10을 함께 만드는 사람들. 8명의 작은 팀이 대한민국 거대 사교육 시장의 다음 10년을 설계합니다.",
};

export default function TeamPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              OUR TEAM
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              작지만 단단한
              <br />
              <span className="bg-gradient-to-r from-[var(--color-mint-500)] to-[var(--color-sky-500)] bg-clip-text text-transparent">
                {TEAM.length}명의 팀
              </span>
              이 만듭니다.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-700)] leading-relaxed">
              기획·개발·디자인·마케팅이 한 테이블에 앉습니다. 현장과 가까운 거리에서
              빠르게 결정하고, 학원과 학부모 모두에게 좋은 제품을 만듭니다.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <StaggerItem key={m.name}>
                <Card className="h-full p-6">
                  <div className="aspect-square w-full rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-mint-500)]/20 to-[var(--color-sky-500)]/20 mb-5 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[var(--color-mint-600)]">
                      {m.name[0]}
                    </span>
                  </div>
                  <div className="text-lg font-bold">{m.name}</div>
                  <div className="mt-0.5 text-sm font-semibold text-[var(--color-mint-600)]">
                    {m.role}
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-ink-500)]">
                    {m.affiliation}
                  </div>
                  <p className="mt-4 text-sm text-[var(--color-ink-700)] leading-relaxed">
                    {m.note}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container size="narrow">
          <FadeIn>
            <Card className="bg-gradient-to-br from-[var(--color-mint-500)]/10 to-[var(--color-sky-500)]/10 border-[var(--color-mint-500)]/40 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                10to10에 합류하시겠어요?
              </h2>
              <p className="mt-3 text-[var(--color-ink-700)] max-w-xl mx-auto">
                직무에 우선하기 전에, 우리가 만드는 변화에 공감하는 분을 먼저 찾습니다.
                채용 페이지에서 더 자세히 보실 수 있습니다.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/careers" variant="primary">
                  채용 페이지로 →
                </Button>
                <Button href={COMPANY.kakaoUrl} variant="ghost" external>
                  커피챗 · 카카오톡 문의
                </Button>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10 flex flex-wrap justify-center items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-mint-500)]/40 bg-[var(--color-mint-500)]/10 px-4 py-1.5 text-xs font-bold text-[var(--color-mint-700)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-mint-500)] animate-pulse" />
              Phase 1 Sprint · 2주 단위 · 학원 설명회 시장 집중
            </span>
            {COMPANY.instagramUrl && (
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-300)] bg-white px-4 py-1.5 text-xs font-semibold text-[var(--color-ink-700)] hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-600)] transition"
              >
                <span aria-hidden>📷</span>
                10to10 인스타그램 팔로우
              </a>
            )}
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
