/** 사이트 상단 신뢰 띠 — 정부 창업 프로그램 선발 이력 (인쇄물·캐러셀과 같은 표기) */
export function TrustRibbon() {
  return (
    <div className="band-brand">
      <p className="mx-auto max-w-7xl break-keep px-6 py-2 text-center text-[13px] font-semibold text-[var(--color-ink-950)] md:px-8">
        <span className="hidden md:inline">중소벤처기업부 </span>「모두의 창업」<span className="hidden md:inline"> 1기</span> 3라운드 진출
        <span className="mx-2 text-[var(--color-ink-700)]" aria-hidden>
          ·
        </span>
        <span className="hidden md:inline">지원 6.3만 명 중 </span>상위 0.3%
      </p>
    </div>
  );
}
