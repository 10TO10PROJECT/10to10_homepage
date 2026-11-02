import { PLATFORM_FEED_MOCK } from "@/lib/content/platform";

/** 학년 맞춤 소식 피드 화면 예시 — 11/1 와이어 1안(큰 카드 1개 + 짧은 소식)을 코드로 그림. 실제 UI 확정 전이라 "화면 예시" 캡션 필수 */
export function PhoneFeedMock({ className }: { className?: string }) {
  const m = PLATFORM_FEED_MOCK;
  return (
    <figure className={className}>
      <div
        aria-hidden
        className="mx-auto w-[300px] rounded-[2.6rem] bg-[var(--color-ink-950)] p-[9px] shadow-elevated"
      >
        <div className="overflow-hidden rounded-[2.1rem] bg-white">
          {/* 상태 표시줄 */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-[var(--color-ink-950)]">
            <span>9:41</span>
            <span className="h-[18px] w-[72px] rounded-full bg-[var(--color-ink-950)]" />
            <span className="tracking-tight">●●●</span>
          </div>

          {/* 위치 · 학년 */}
          <div className="flex items-center justify-between px-4 pt-2">
            <span className="flex items-center gap-1 text-[14px] font-bold text-[var(--color-ink-950)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint-600)" strokeWidth="2.2">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.4" />
              </svg>
              {m.location}
              <span className="text-[10px] text-[var(--color-ink-500)]">▾</span>
            </span>
            <span className="rounded-full bg-[var(--color-mint-100)] px-2.5 py-1 text-[11px] font-bold text-[var(--color-mint-700)]">
              {m.grade}
            </span>
          </div>

          {/* 카테고리 탭 */}
          <div className="mt-3 flex gap-1.5 px-4">
            {m.tabs.map((t, i) => (
              <span
                key={t}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  i === 0
                    ? "bg-[var(--color-ink-950)] text-white"
                    : "bg-[var(--color-ink-100)] text-[var(--color-ink-700)]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* 큰 카드 */}
          <div className="mx-4 mt-3 overflow-hidden rounded-[14px] shadow-card">
            <div className="band-brand relative h-[104px]">
              <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold text-[var(--color-ink-950)]">
                Powered by 10to10
              </span>
              <span className="absolute -right-4 -bottom-6 h-24 w-24 rounded-full bg-white/35" />
              <span className="absolute right-12 top-5 h-10 w-10 rounded-full bg-white/50" />
              <span className="absolute left-6 bottom-4 h-2 w-20 rounded-full bg-white/60" />
            </div>
            <div className="p-3">
              <div className="flex gap-1">
                {m.hero.tags.map((t) => (
                  <span key={t} className="rounded bg-[var(--color-mint-100)] px-1.5 py-0.5 text-[9px] font-bold text-[var(--color-mint-700)]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-1.5 break-keep text-[13px] font-bold leading-snug text-[var(--color-ink-950)]">
                {m.hero.title}
              </div>
              <div className="mt-1 break-keep text-[10.5px] leading-snug text-[var(--color-ink-700)]">
                {m.hero.summary}
              </div>
              <div className="mt-1.5 text-[9.5px] text-[var(--color-ink-500)]">{m.hero.source}</div>
            </div>
          </div>

          {/* 짧은 소식 */}
          <ul className="mx-4 mt-2 divide-y divide-[var(--color-cloud)]">
            {m.items.map((it) => (
              <li key={it.title} className="py-2.5">
                <span className="text-[9.5px] font-bold text-[var(--color-mint-700)]">{it.tag}</span>
                <div className="mt-0.5 break-keep text-[11.5px] font-semibold leading-snug text-[var(--color-ink-950)]">
                  {it.title}
                </div>
                <div className="mt-0.5 text-[9.5px] text-[var(--color-ink-500)]">{it.meta}</div>
              </li>
            ))}
          </ul>

          {/* 하단 탭바 */}
          <div className="mt-1 grid grid-cols-5 border-t border-[var(--color-cloud)] px-2 pt-2 pb-4 text-center text-[9.5px] font-semibold">
            {["홈", "채팅", "탐색", "커뮤니티", "마이"].map((t, i) => (
              <span key={t} className={i === 0 ? "text-[var(--color-mint-700)]" : "text-[var(--color-ink-500)]"}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[13px] text-[var(--color-ink-500)]">
        화면 예시 · 업데이트에서 실제 화면은 달라질 수 있습니다
      </figcaption>
    </figure>
  );
}
