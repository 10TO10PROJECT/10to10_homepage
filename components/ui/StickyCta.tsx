/**
 * 모바일 상시 하단 플로팅 — "견적 문의하기" 단일 CTA (2026-08-18 CEO: 스크롤 게이트 없이 계속 노출).
 * 카카오 접점은 우하단 KakaoFab(모바일에서 이 바 위로 오프셋)이 전담. 전 페이지 layout 마운트.
 */
export function StickyCta({
  formHref = "/?service=info_session#contact",
}: {
  formHref?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-cloud)] bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <a
        href={formHref}
        className="flex h-12 items-center justify-center gap-1.5 rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] text-[15px] font-bold text-white"
      >
        견적 문의하기
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
