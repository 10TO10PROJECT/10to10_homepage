import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/** D5-① 스탯 로우 — 학원이 얻는 ROI를 대형 숫자로. (수치 SSOT = Stage BM v1) */
const STATS = [
  {
    value: "720만 원",
    label: "설명회 1회 예상 학원 매출",
    note: "등록 6명 × 월 원비 40만 × 3개월",
    emphasis: true,
  },
  {
    value: "47명",
    label: "자체 설명회 최다 모객",
    note: "2026.02 실적",
    emphasis: false,
  },
  {
    value: "4.32 / 5.0",
    label: "참석 학부모 만족도",
    note: "실측 · 응답 21명",
    emphasis: false,
  },
] as const;

export function StatRow() {
  return (
    <section className="pb-20 md:pb-28">
      <Container size="wide">
        <FadeIn>
          <div className="grid gap-4 rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:grid-cols-3 md:gap-0 md:p-0">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`md:p-8 ${
                  i > 0 ? "md:border-l md:border-[var(--color-cloud)]" : ""
                }`}
              >
                <div
                  className={`display-type text-4xl md:text-5xl ${
                    s.emphasis ? "text-[var(--color-ink-950)]" : "text-[var(--color-ink-900)]"
                  }`}
                >
                  {s.emphasis ? (
                    <span className="relative inline-block">
                      <span className="relative z-10">{s.value}</span>
                      <span
                        aria-hidden
                        className="absolute inset-x-[-0.06em] bottom-[0.04em] z-0 h-[0.35em] bg-[var(--color-mint-500)]/60"
                      />
                    </span>
                  ) : (
                    s.value
                  )}
                </div>
                <div className="mt-2 text-[15px] font-semibold text-[var(--color-ink-700)]">
                  {s.label}
                </div>
                <div className="mt-1 text-[13px] text-[var(--color-ink-500)]">{s.note}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-[var(--color-ink-500)]">
            * 예상 매출은 보수적 가정(모객 20명 · 등록 전환 30% — 자체 학원장 인터뷰
            수집 데이터) 기준 계산값입니다.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
