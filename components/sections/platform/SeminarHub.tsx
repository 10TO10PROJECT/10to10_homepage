import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { ChalkUnderline } from "@/components/sections/home/ChalkUnderline";
import {
  PLATFORM_SEMINARS,
  PLATFORM_SEMINAR_POINTS,
  PLATFORM_SEMINAR_POSTERS,
  PLATFORM_SEMINAR_POSTERS_CAPTION,
} from "@/lib/content/platform";

// PLATFORM_SEMINAR_POSTERS 순서대로 — 앞의 두 장(리버스)은 작게 뒤에, 뒤의 두 장(강아 카드·포스터)은 크게 앞에(11/18).
// 오른쪽 아래 칸은 아래 캡션과 겹치지 않게 칸 안쪽(bottom-0)에 붙임
const POSTER_SLOTS = [
  "-left-2 -top-10 w-[34%] -rotate-[4deg] md:-left-6 md:-top-12",
  "-right-3 bottom-0 w-[32%] rotate-[5deg] md:-right-8",
  "-right-4 -top-6 w-[46%] rotate-[7deg] md:-right-10 md:-top-8",
  "-left-6 -bottom-4 w-[42%] -rotate-[6deg] md:-left-12 md:-bottom-6",
];

/**
 * 탐색 > 설명회 — 동네 설명회 모아보기. 신청은 각 설명회의 원래 폼으로 연결. 카드 뒤에는 실제 포스터·게시물.
 * 11/18 메인 템플릿(Mercury 다크)으로: 그래파이트 카드 · 그림자 대신 옅은 테두리 · 포스터는 어두운 바탕에서도 윤곽이 보이게 얇은 테두리
 */
export function SeminarHub() {
  return (
    <section aria-label="설명회 모아보기" className="relative overflow-hidden py-[72px] md:py-28">
      <div className="m-wrap">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <p className="m-eyebrow">업데이트 예정 · 설명회 모아보기</p>
            <h2 className="m-heading mt-4 text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">
              동네 설명회,
              <br />
              <span className="relative inline-block">
                한눈에
                <ChalkUnderline when="view" delay={0.2} />
              </span>{" "}
              보고 바로 신청.
            </h2>
            <ul className="mt-8 space-y-4">
              {PLATFORM_SEMINAR_POINTS.map((p) => (
                <li key={p} className="flex gap-3 break-keep text-[15px] leading-[1.6] text-[var(--color-ash)] md:text-[16px]">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint-500)]" />
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
                    className={`absolute overflow-hidden rounded-[10px] opacity-70 ring-1 ring-white/15 ${POSTER_SLOTS[i]}`}
                    style={{ aspectRatio: `${p.w} / ${p.h}` }}
                  >
                    <Image src={p.src} alt="" fill sizes="(min-width: 768px) 260px, 45vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="relative space-y-3">
                {PLATFORM_SEMINARS.map((s) => (
                  <div key={s.title} className="rounded-[12px] bg-[var(--color-graphite)]/95 p-5 ring-1 ring-white/[0.08] backdrop-blur md:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="rounded-full bg-[var(--color-mint-500)]/15 px-2.5 py-0.5 text-[12px] font-semibold text-[var(--color-mint-500)]">
                          대상 {s.target}
                        </span>
                        <div className="m-heading mt-2.5 break-keep text-[17px] text-[var(--color-ivory)] md:text-[19px]">{s.title}</div>
                        <div className="mt-1 text-[13px] text-[var(--color-ash)]">{s.when}</div>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#272735] px-2.5 py-1 text-[12px] font-semibold text-[var(--color-ivory)]">
                        {s.due}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3 text-[13px]">
                      <span className="text-[var(--color-ash)]">신청은 원래 신청 폼에서</span>
                      <span className="font-semibold text-[var(--color-ivory)]">신청하기 ↗</span>
                    </div>
                  </div>
                ))}
                <p className="pt-1 text-center">
                  <span className="inline-block rounded-full bg-white/[0.08] px-3 py-1 text-[12px] text-[var(--color-ash)] backdrop-blur-sm">
                    화면 예시 · 학원명은 가렸습니다
                  </span>
                </p>
              </div>
            </div>
            <p className="relative mt-8 break-keep text-center text-[12px] text-[var(--color-ash)]/80 md:text-right">
              {PLATFORM_SEMINAR_POSTERS_CAPTION}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
