"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useSectionProgress } from "@/components/motion/useSectionProgress";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { HOME_HERO } from "@/lib/content/home";

/**
 * 메인 히어로 — 템플릿(Mercury) 구조: 화면 가득한 실사 + 어두운 덮개 + 가운데 정렬 제목.
 * 11/11 CEO 선택 시안 A: '하는 일' 한 줄 → 굵은 제목(700) → 두 서비스 이름표(텐투텐 앱 · 10to10 STAGE, 각 페이지 링크).
 * 사진 = 설명회 스크린에 앱을 띄운 현장(두 사업이 한 장면에 있음). 문장의 두 동사 '모으고'(앱)·'엽니다'(STAGE)에
 * 민트 밑줄이 그어지고, 바로 아래 갈림길 카드(HomePaths)가 같은 낱말로 두 갈래를 연다.
 * 스크롤하면 사진은 천천히 내려가고(시차) 글은 옅어진다. 모션 줄이기 설정이면 정지 상태로.
 */
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const scrollYProgress = useSectionProgress(ref, "leave");
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.55], [0, -48]);

  return (
    // -mt-16: 투명 헤더(높이 4rem) 밑까지 사진이 깔리도록
    <section ref={ref} className="relative isolate -mt-16 overflow-hidden bg-[var(--color-onyx)]">
      <motion.div className="absolute inset-x-0 -top-[6%] -z-20 h-[118%]" style={reduce ? undefined : { y: photoY }}>
        <Image
          src={HOME_HERO.photo.src}
          alt={HOME_HERO.photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_38%]"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(23,23,33,0.72)_0%,rgba(23,23,33,0.62)_40%,rgba(23,23,33,0.88)_78%,#171721_100%)]"
      />

      <motion.div
        className="m-wrap flex min-h-[calc(100svh-2.25rem)] flex-col items-center justify-center pt-24 pb-36 text-center md:pb-44"
        style={reduce ? undefined : { opacity: textOpacity, y: textY }}
      >
        {/* 하는 일 한 줄 */}
        <p className="flex items-center gap-2 text-[13px] font-medium text-[var(--color-ash)] md:gap-3 md:text-[15px]">
          {HOME_HERO.eyebrow[0]}
          <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-mint-500)]" />
          {HOME_HERO.eyebrow[1]}
        </p>
        {/* 시안 A: 템플릿 굵기(530)보다 굵은 700 + 촘촘한 자간 — 신뢰감 우선(CEO 선택) */}
        <h1 className="mt-5 max-w-[17ch] break-keep text-[clamp(2.05rem,5.1vw,4.2rem)] leading-[1.2] font-bold tracking-[-0.035em] text-white md:mt-6 md:max-w-none">
          {HOME_HERO.lead}{" "}
          <span className="whitespace-nowrap">
            <Keyword delay={0.35}>{HOME_HERO.gather}</Keyword>,
          </span>
          <br />
          {HOME_HERO.middle}{" "}
          <span className="whitespace-nowrap">
            <Keyword delay={0.6}>{HOME_HERO.open}</Keyword>.
          </span>
        </h1>
        {/* 두 서비스 이름표 — 누르면 각 페이지로. 넓은 화면은 한 줄 알약, 좁은 화면은 위아래로 */}
        <ul
          aria-label="텐투텐의 두 서비스"
          className="mt-9 flex w-full max-w-[460px] flex-col overflow-hidden rounded-[14px] border border-white/25 bg-[var(--color-onyx)]/35 md:mt-10 lg:w-auto lg:max-w-none lg:flex-row lg:rounded-full"
        >
          {HOME_HERO.services.map((s, i) => (
            <li key={s.name} className={i > 0 ? "border-t border-white/25 lg:border-t-0 lg:border-l" : undefined}>
              <Link
                href={s.href}
                className="flex flex-col items-center gap-0.5 px-5 py-3.5 transition-colors hover:bg-white/[0.06] md:py-4 lg:flex-row lg:items-baseline lg:gap-3 lg:px-7"
              >
                <span className="text-[16px] font-semibold text-[var(--color-ivory)] md:text-[17px] lg:text-[18px]">{s.name}</span>
                <span className="text-[15px] text-[var(--color-ash)] md:text-[17px] lg:text-[18px]">{s.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[12px] text-white/50">{HOME_HERO.photo.caption}</p>
      </motion.div>
    </section>
  );
}

/** 민트 밑줄이 왼쪽에서 그어지는 낱말 — 갈림길 카드의 키워드와 같은 말 */
function Keyword({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotionSafe();
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <motion.span
        aria-hidden
        className="absolute right-0 -bottom-[0.05em] left-0 h-[0.075em] origin-left rounded-full bg-[var(--color-mint-500)]"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      />
    </span>
  );
}
