"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

/**
 * 페이지가 열리면(스크롤과 무관하게) 아래에서 떠오르는 등장 — 첫 화면에 걸쳐 있는 요소용.
 * FadeIn(화면에 일정 비율 이상 들어와야 나타남)을 쓰면 화면 끝에 살짝 걸친 요소가 안 보이는 문제가 있어 따로 둠.
 */
export function RiseIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotionSafe();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
