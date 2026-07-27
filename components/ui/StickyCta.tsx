"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/content/company";
import { KakaoSymbol } from "@/components/ui/Button";

/**
 * 모바일 sticky bottom CTA — 카톡 링크로 열어보는 원장님 시나리오가 본선.
 * 스크롤 50% 이후 노출 (개편안 v2 §2 CTA 정책). 카카오 CTA = #FEE500 규격 (T2).
 */
export function StickyCta({ formHref = "#contact" }: { formHref?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setVisible(scrollable > 0 && window.scrollY / scrollable >= 0.5);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-cloud)] bg-white/95 backdrop-blur px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-stretch gap-2">
        <a
          href={COMPANY.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-[1.4] items-center justify-center gap-1.5 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-[15px] font-bold text-[var(--color-ink-950)]"
        >
          <KakaoSymbol size={17} />
          카톡으로 3분 상담
        </a>
        <a
          href={formHref}
          className="flex h-12 flex-1 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] text-[15px] font-semibold text-white"
        >
          견적 폼
        </a>
      </div>
      <p className="mt-1.5 text-center text-xs text-[var(--color-ink-500)]">
        평균 응답 30분 · 영업 전화 없이 카톡/폼으로만 답합니다
      </p>
    </div>
  );
}
