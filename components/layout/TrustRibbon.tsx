/** 사이트 상단 신뢰 띠 — 정부 창업 프로그램 선발 이력 (인쇄물·캐러셀과 같은 표기). 메인(다크)에서는 그래파이트 띠 */
export function TrustRibbon({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={dark ? "border-b border-white/[0.06] bg-[var(--color-graphite)]" : "band-brand"}>
      <p
        className={`mx-auto max-w-7xl break-keep px-6 py-2 text-center text-[13px] md:px-8 ${
          dark ? "font-medium text-[var(--color-ash)]" : "font-semibold text-[var(--color-ink-950)]"
        }`}
      >
        <span className="hidden md:inline">중소벤처기업부 </span>「모두의 창업」<span className="hidden md:inline"> 1기</span> 3라운드 진출
        <span className={`mx-2 ${dark ? "text-[var(--color-slate-line)]" : "text-[var(--color-ink-700)]"}`} aria-hidden>
          ·
        </span>
        <span className="hidden md:inline">지원 6.3만 명 중 </span>
        <span className={dark ? "text-[var(--color-mint-500)]" : undefined}>상위 0.3%</span>
      </p>
    </div>
  );
}
