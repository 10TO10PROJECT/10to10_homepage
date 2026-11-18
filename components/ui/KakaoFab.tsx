"use client";

import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/content/company";
import { KakaoSymbol } from "@/components/ui/Button";
import { hasStickyCta } from "@/lib/sticky-cta";

/**
 * 우하단 카카오 문의 플로팅 버튼 — 전 페이지 상주 (abbg·그로스파이낸스 문법).
 * 문의는 카카오톡으로 받는다(2026-11-08) — 히어로·견적 확인·상담 섹션의 카톡 버튼과 같은 링크.
 * 모바일에서는 하단 '견적 확인하기' 바 위로 띄우고, 바가 없는 페이지(/privacy 등)에서는 화면 아래로 내린다.
 */
export function KakaoFab() {
  const pathname = usePathname();
  const bottom = hasStickyCta(pathname)
    ? "bottom-[calc(5.25rem_+_env(safe-area-inset-bottom))]"
    : "bottom-[calc(1rem_+_env(safe-area-inset-bottom))]";
  return (
    <a
      href={COMPANY.kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡으로 문의하기"
      className={`group fixed ${bottom} right-4 z-50 flex items-center gap-0 rounded-full bg-[var(--color-kakao)] shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all hover:shadow-[0_6px_20px_rgba(0,0,0,0.24)] md:bottom-7 md:right-7`}
    >
      <span className="flex h-14 w-14 items-center justify-center md:h-15 md:w-15">
        <KakaoSymbol size={26} />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[15px] font-bold text-[var(--color-ink-950)] transition-all duration-300 group-hover:max-w-40 group-hover:pr-5 md:inline-block">
        카톡 문의
      </span>
    </a>
  );
}
