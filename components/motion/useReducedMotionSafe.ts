"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const noopSubscribe = () => () => {};

/**
 * '모션 줄이기' 설정 — 서버 렌더와 하이드레이션 첫 화면은 항상 false로 맞추고(불일치 방지), 그 뒤 실제 설정을 반영.
 * 마운트 여부는 useSyncExternalStore의 서버/클라이언트 스냅숏 차이로 판단(효과 안에서 상태를 바꾸지 않음).
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return hydrated && Boolean(reduce);
}
