"use client";

import { usePathname } from "next/navigation";
import { PLATFORM_INFO_ROOM_URL } from "@/lib/content/platform";

/**
 * 모바일 상시 하단 플로팅 — "견적 확인하기" 단일 CTA (2026-08-18 CEO: 스크롤 게이트 없이 계속 노출 / 2026-11-08 문의 → 견적 확인).
 * 메인(통합 랜딩, 2026-11-09)은 원장님·학부모 두 갈래라 다크 바에 버튼 둘 — 원장님은 견적 확인, 학부모는 정보방.
 * 카카오 접점은 우하단 KakaoFab(모바일에서 이 바 위로 오프셋)이 전담. 전 페이지 layout 마운트.
 */
export function StickyCta({
  formHref = "/stage#estimate",
}: {
  formHref?: string;
}) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[var(--color-onyx)]/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={formHref}
            className="flex h-12 items-center justify-center rounded-full bg-[var(--color-mint-500)] text-[15px] font-semibold text-[var(--color-ink-950)]"
          >
            원장님 · 견적 확인
          </a>
          <a
            href={PLATFORM_INFO_ROOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-[var(--color-ivory)]/70 text-[15px] font-medium text-[var(--color-ivory)]"
          >
            학부모 · 정보방
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-cloud)] bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <a
        href={formHref}
        className="flex h-12 items-center justify-center gap-1.5 rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] text-[15px] font-bold text-white"
      >
        견적 확인하기
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
