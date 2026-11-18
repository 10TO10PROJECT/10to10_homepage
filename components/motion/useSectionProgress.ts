"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * 섹션 스크롤 진행도(0~1) — 페이지 스크롤 위치와 섹션의 실제 위치로 직접 계산.
 * framer-motion useScroll({ target })이 고정(sticky) 무대 섹션에서 진행도를 어긋나게 주는 경우가 있어(2026-11-10 확인) 대신 씀.
 * mode "pin": 섹션 맨 위가 화면 맨 위에 닿을 때 0 → 섹션 맨 아래가 화면 맨 아래에 닿을 때 1 (고정 무대용)
 * mode "leave": 섹션 맨 위가 화면 맨 위에 닿을 때 0 → 섹션 맨 아래가 화면 맨 위로 사라질 때 1 (히어로 시차용)
 */
export function useSectionProgress(ref: RefObject<HTMLElement | null>, mode: "pin" | "leave" = "pin"): MotionValue<number> {
  const { scrollY } = useScroll();
  const bounds = useRef({ top: 0, range: 1 });

  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const range = mode === "pin" ? el.offsetHeight - window.innerHeight : el.offsetHeight;
      bounds.current = { top, range: Math.max(1, range) };
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ref, mode]);

  return useTransform(scrollY, (y) => Math.min(1, Math.max(0, (y - bounds.current.top) / bounds.current.range)));
}
