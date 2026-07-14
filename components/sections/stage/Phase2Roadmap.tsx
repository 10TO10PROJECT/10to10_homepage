import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const PHASE2_CARDS = [
  {
    id: "packages",
    eyebrow: "SUBSCRIPTION",
    title: "에이전트 패키지",
    desc: "네이버 플레이스·디자인·콘텐츠·블로그를 한 팀이 연 단위로 운영합니다. Phase 1 파트너 학원 대상 순차 확장.",
  },
  {
    id: "blog",
    eyebrow: "BLOG SERIES",
    title: "블로그 팩 3종",
    desc: "첫달 세팅팩·월간 4건 운영팩·월간 8건 성장팩. 학원 검색 유입 강화를 위한 콘텐츠 정기 발행.",
  },
  {
    id: "options",
    eyebrow: "ONE-TIME",
    title: "시즌·오프라인 옵션",
    desc: "시즌 모집팩·현장 홍보물 세트(QR 스탠드·안내지·포스터·전단지·안내책자). 단발 의뢰 가능.",
  },
] as const;

export function Phase2Roadmap() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-10 max-w-2xl">
          <div className="text-xs font-bold tracking-[0.18em] text-[var(--color-ink-500)]">
            COMING NEXT · PHASE 2
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            학원 마케팅 전반으로,
            <br />
            곧 확장합니다.
          </h2>
          <p className="mt-4 text-[15px] md:text-base text-[var(--color-ink-700)] leading-relaxed">
            지금은 학원 설명회 시장에 집중하고 있습니다. Phase 1 파트너 학원을 기반으로
            네이버 플레이스·블로그·인스타그램·시즌 홍보 등 학원 마케팅 전 영역으로 순차 확장 예정.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {PHASE2_CARDS.map((c) => (
            <StaggerItem key={c.id}>
              <div
                id={c.id}
                className="h-full rounded-[var(--radius-lg)] border border-dashed border-[var(--color-ink-300)] bg-white p-6 md:p-7"
              >
                <div className="text-[11px] font-bold tracking-[0.18em] text-[var(--color-ink-500)]">
                  {c.eyebrow} · PHASE 2
                </div>
                <h3 className="mt-3 text-xl font-bold text-[var(--color-ink-900)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-ink-700)] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <a
            href="/inquiry"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-300)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-ink-700)] hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-600)] transition"
          >
            Phase 2 사전 상담 · 관심 학원 문의
            <span aria-hidden>→</span>
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
