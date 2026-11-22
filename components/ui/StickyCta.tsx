"use client";

import { usePathname } from "next/navigation";
import { PLATFORM_INFO_ROOM_URL } from "@/lib/content/platform";
import { hasStickyCta } from "@/lib/sticky-cta";
import { hasDualCta, isDarkChrome } from "@/lib/site-chrome";

/** 메인 하단 사전 예약 배너 문구 — 모든 페이지에 실리는 컴포넌트라 큰 콘텐츠 파일(lib/content/home) 대신 여기 둔다 */
export const PREREG_BANNER = "텐투텐 앱 사전 예약하기";

/**
 * 모바일 상시 하단 플로팅 — "견적 확인하기" 단일 CTA (2026-08-18 CEO: 스크롤 게이트 없이 계속 노출 / 2026-11-08 문의 → 견적 확인).
 * 메인(통합 랜딩, 2026-11-09)·플랫폼(11/18 통일)은 원장님·학부모 두 갈래라 다크 바에 버튼 둘 — 원장님은 견적 확인, 학부모는 정보방.
 * STAGE(11/18 다크 통일)는 원장님 페이지라 다크 바에 민트 알약 하나(견적 확인하기).
 * 카카오 접점은 우하단 KakaoFab(모바일에서 이 바 위로 오프셋)이 전담. 전 페이지 layout 마운트.
 * 개인정보 처리방침(/privacy)에는 띄우지 않음(2026-11-18 CEO) — 목록은 lib/sticky-cta.ts.
 */
export function StickyCta({
  formHref = "/stage#estimate",
  prereg = false,
}: {
  formHref?: string;
  /** 앱 사전 예약을 받는 배포인지(layout이 서버에서 isPreregOpen으로 넘김) */
  prereg?: boolean;
}) {
  const pathname = usePathname();

  if (!hasStickyCta(pathname)) return null;

  // 11/22 CEO: 메인은 '원장 견적 확인·학부모 정보방' 대신 텐투텐 앱 사전 예약 배너 하나 → 전용 페이지(/prereg).
  // 휴대폰은 하단 바(다른 페이지와 같은 높이 — 카톡 버튼 오프셋 유지), 넓은 화면은 아래 가운데 떠 있는 알약 버튼.
  if (prereg && pathname === "/") {
    return (
      <>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[var(--color-onyx)]/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
          <a
            href="/prereg"
            className="flex h-12 items-center justify-center gap-1.5 rounded-full bg-[var(--color-mint-500)] text-[15px] font-semibold text-[var(--color-ink-950)]"
          >
            {PREREG_BANNER}
            <span aria-hidden>→</span>
          </a>
        </div>
        <a
          href="/prereg"
          className="fixed bottom-7 left-1/2 z-40 hidden h-14 -translate-x-1/2 items-center gap-2 rounded-full bg-[var(--color-mint-500)] px-8 text-[16px] font-semibold text-[var(--color-ink-950)] shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          {PREREG_BANNER}
          <span aria-hidden>→</span>
        </a>
      </>
    );
  }

  if (isDarkChrome(pathname) && !hasDualCta(pathname)) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[var(--color-onyx)]/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <a
          href={formHref}
          className="flex h-12 items-center justify-center gap-1.5 rounded-full bg-[var(--color-mint-500)] text-[15px] font-semibold text-[var(--color-ink-950)]"
        >
          견적 확인하기
          <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  if (isDarkChrome(pathname)) {
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
