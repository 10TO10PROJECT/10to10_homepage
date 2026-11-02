import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { PLATFORM_SEMINARS, PLATFORM_SEMINAR_POINTS } from "@/lib/content/platform";

/** 탐색 > 설명회 — 동네 설명회 모아보기. 신청은 각 설명회의 원래 폼으로 연결 */
export function SeminarHub() {
  return (
    <section className="band-wash py-20 md:py-28">
      <Container size="wide">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <Badge variant="mint">업데이트 예정 · 설명회 모아보기</Badge>
            <h2 className="display-type mt-4 text-3xl text-[var(--color-ink-950)] md:text-5xl">
              동네 설명회,
              <br />
              <span className="hl">한눈에</span> 보고 바로 신청.
            </h2>
            <ul className="mt-8 space-y-4">
              {PLATFORM_SEMINAR_POINTS.map((p) => (
                <li key={p} className="flex gap-3 break-keep text-[15px] leading-relaxed text-[var(--color-ink-700)] md:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint-500)]"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-3">
              {PLATFORM_SEMINARS.map((s) => (
                <div key={s.title} className="rounded-[var(--radius-card)] bg-white p-5 shadow-card md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded bg-[var(--color-mint-100)] px-2 py-0.5 text-[12px] font-bold text-[var(--color-mint-700)]">
                        대상 {s.target}
                      </span>
                      <div className="mt-2 break-keep text-base font-bold leading-snug text-[var(--color-ink-950)] md:text-lg">
                        {s.title}
                      </div>
                      <div className="mt-1 text-[13px] text-[var(--color-ink-500)]">{s.when}</div>
                    </div>
                    <span className="shrink-0 rounded-full bg-[var(--color-ink-950)] px-2.5 py-1 text-[12px] font-bold text-white">
                      {s.due}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-[var(--color-cloud)] pt-3 text-[13px]">
                    <span className="text-[var(--color-ink-500)]">신청은 원래 신청 폼에서</span>
                    <span className="font-bold text-[var(--color-ink-950)]">신청하기 ↗</span>
                  </div>
                </div>
              ))}
              <p className="pt-1 text-center text-[13px] text-[var(--color-ink-500)]">화면 예시 · 학원명은 가렸습니다</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
