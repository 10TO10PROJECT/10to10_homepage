"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

/**
 * 화면에 들어오면 0에서 목표 숫자까지 올라가는 수치. 서버 렌더·모션 줄이기·자바스크립트 없음 모두 최종 값을 그대로 보여 준다
 * (숫자가 0으로 남는 일 없음). 소수 자릿수는 목표 문자열을 따른다(4.25 → 둘째 자리).
 * 숫자는 리액트 상태 대신 글자만 직접 바꾼다(효과 안에서 상태를 바꾸면 렌더가 한 번 더 돌아서).
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const armed = useRef(false);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotionSafe();

  const target = Number(value);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  // 마운트 직후(아직 화면 밖) 0으로 내려 두었다가, 화면에 들어오면 올린다.
  // 모션 줄이기는 여기서 직접 확인 — useReducedMotionSafe는 하이드레이션 첫 커밋 동안 false라 첫 실행에선 못 거름
  useEffect(() => {
    const el = ref.current;
    const prefersReduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || prefersReduce || Number.isNaN(target) || inView) return;
    el.textContent = (0).toFixed(decimals);
    armed.current = true;
  }, [reduce, target, decimals, inView]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || !armed.current) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [inView, target, decimals]);

  // 화면 낭독기는 실제 값만 읽게(올라가는 중간 숫자·0은 숨김)
  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden>
        {value}
      </span>
    </>
  );
}
