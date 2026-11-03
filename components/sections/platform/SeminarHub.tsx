import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  PLATFORM_SEMINARS,
  PLATFORM_SEMINAR_POINTS,
  PLATFORM_SEMINAR_POSTERS,
  PLATFORM_SEMINAR_POSTERS_CAPTION,
} from "@/lib/content/platform";

// 카드 뒤로 비치는 포스터 두 장의 자리 — 위쪽은 오른쪽으로, 아래쪽은 왼쪽으로 기울임
const POSTER_SLOTS = [
  "-right-4 -top-6 w-[46%] rotate-[7deg] md:-right-10 md:-top-8",
  "-left-6 -bottom-4 w-[42%] -rotate-[6deg] md:-left-12 md:-bottom-6",
];

/** 탐색 > 설명회 — 동네 설명회 모아보기. 신청은 각 설명회의 원래 폼으로 연결. 카드 뒤에는 실제 포스터·후기 게시물 */
export function SeminarHub() {
  return (
    <section className="band-wash relative overflow-hidden py-20 md:py-28">
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
            <div className="relative py-10 md:py-14">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                {PLATFORM_SEMINAR_POSTERS.map((p, i) => (
                  <div
                    key={p.src}
                    className={`absolute overflow-hidden rounded-[var(--radius-img)] bg-white opacity-75 shadow-elevated ${POSTER_SLOTS[i]}`}
                    style={{ aspectRatio: `${p.w} / ${p.h}` }}
                  >
                    <Image src={p.src} alt="" fill sizes="(min-width: 768px) 260px, 45vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="relative space-y-3">
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
                <p className="pt-1 text-center">
                  <span className="inline-block rounded-full bg-white/85 px-3 py-1 text-[13px] text-[var(--color-ink-500)] backdrop-blur-sm">
                    화면 예시 · 학원명은 가렸습니다
                  </span>
                </p>
              </div>
            </div>
            <p className="relative mt-8 break-keep text-center text-[12px] text-[var(--color-ink-500)] md:text-right">
              {PLATFORM_SEMINAR_POSTERS_CAPTION}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
