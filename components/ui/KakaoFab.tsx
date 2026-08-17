import { COMPANY } from "@/lib/content/company";
import { KakaoSymbol } from "@/components/ui/Button";

/**
 * 우하단 카카오 문의 플로팅 버튼 — 전 페이지 상주 (abbg·그로스파이낸스 문법).
 * 히어로 primary CTA가 견적 문의로 바뀌면서 카카오 접점은 이 FAB가 전담.
 */
export function KakaoFab() {
  return (
    <a
      href={COMPANY.kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡으로 문의하기"
      className="group fixed bottom-[calc(5.25rem_+_env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-0 rounded-full bg-[var(--color-kakao)] shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all hover:shadow-[0_6px_20px_rgba(0,0,0,0.24)] md:bottom-7 md:right-7"
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
