"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

/**
 * 분필 질감 밑줄(11/12 CEO: 강조 밑줄을 분필 느낌으로) — 칠판에 분필로 쓱 그은 것처럼 가장자리가 거칠고 입자가 비친다.
 * 손으로 그은 듯 살짝 휘는 획 두 번(진한 획 + 옅은 덧칠) + SVG 필터(가장자리 흔들림 · 입자 구멍).
 * 글자 크기에 맞춰 늘어나도록 em 단위로 깔고, 왼쪽에서부터 그려진다(when="mount": 바로 / "view": 화면에 들어올 때).
 * 모션 줄이기 설정이면 처음부터 다 그어진 상태.
 */
export function ChalkUnderline({
  delay = 0,
  when = "mount",
  className = "",
}: {
  delay?: number;
  when?: "mount" | "view";
  className?: string;
}) {
  const reduce = useReducedMotionSafe();
  const id = `chalk-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const draw = { pathLength: 1, opacity: 1 };
  const motionProps = reduce
    ? { initial: false as const }
    : when === "view"
      ? { initial: { pathLength: 0, opacity: 0 }, whileInView: draw, viewport: { once: true, amount: 0.8 } }
      : { initial: { pathLength: 0, opacity: 0 }, animate: draw };

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute -bottom-[0.16em] left-[-0.04em] h-[0.3em] w-[calc(100%+0.08em)] overflow-visible ${className}`}
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={id} x="-4%" y="-60%" width="108%" height="220%">
          {/* 가장자리를 거칠게 흔들기 */}
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="wobble" />
          <feDisplacementMap in="SourceGraphic" in2="wobble" scale="3.2" xChannelSelector="R" yChannelSelector="G" result="rough" />
          {/* 분필 입자 — 잘게 뚫린 구멍 */}
          <feTurbulence type="fractalNoise" baseFrequency="2.2" numOctaves="1" seed="9" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2.4 0 0 0 1.75" result="grainMask" />
          <feComposite in="rough" in2="grainMask" operator="in" />
        </filter>
      </defs>
      <g filter={`url(#${id})`} fill="none" stroke="var(--color-mint-500)" strokeLinecap="round">
        <motion.path
          d="M3 9.5 C 40 7, 85 11.5, 125 8.8 S 182 7.6, 197 9.2"
          strokeWidth="5.2"
          {...motionProps}
          transition={{ duration: 0.75, delay, ease: [0.3, 0.7, 0.2, 1] }}
        />
        <motion.path
          d="M8 11.6 C 52 10.2, 100 12.6, 150 10.6 S 186 10.4, 194 11"
          strokeWidth="2.4"
          strokeOpacity="0.55"
          {...motionProps}
          transition={{ duration: 0.6, delay: delay + 0.25, ease: [0.3, 0.7, 0.2, 1] }}
        />
      </g>
    </svg>
  );
}
