"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform, type AnimationPlaybackControls, type MotionValue } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { PhoneFeedMock } from "@/components/sections/platform/PhoneFeedMock";
import { Symbol } from "@/components/brand/Symbol";
import { Wordmark } from "@/components/brand/Wordmark";
import { HOME_ENGINE, HOME_GATHER, HOME_PREREG } from "@/lib/content/home";
import { PLATFORM_INFO_ROOM_URL, PLATFORM_INSTAGRAM_URL } from "@/lib/content/platform";
import { Emph } from "@/components/sections/home/Emph";

/**
 * 텐투텐 앱 — 화면 한 장 크기의 무대에서 네 장면이 자동으로 이어진다(11/12 CEO: AI 엔진을 로고로 부각).
 * 11/12 CEO: 스크롤에 맞춰 움직이니 어색·불편 → 섹션이 화면에 보이기 시작하면 자동 재생(약 8초, 11/18 단축), 화면 밖으로 나가면 멈췄다가 돌아오면 이어서,
 * 끝나면 마지막 장면(신청 완료)에 멈추고 '다시 보기' 버튼. 장면 키프레임은 진행도(0~1) 기준 그대로 두고, 진행도를 스크롤 대신 시간으로 움직인다.
 *  1) 쏟아지는 소식 — 흩어진 소식 카드 + "정보는 쏟아지는데… 찾기 어려우시죠?"
 *  2) AI 엄선 — 가운데 텐투텐 심볼이 엔진이 되어 소식을 하나씩 판정. 맞는 것은 '✓ 맞춤'으로 엔진에 들어가고,
 *     안 맞는 것은 '다른 학년 · 다른 지역'으로 걸러져 밀려난다. 엔진 아래 기준(동탄 · 예비 고1)은 휴대폰 화면과 같은 값.
 *  3) 맞춤 피드 — 엔진에서 피드 화면이 열리고, 엔진 심볼은 휴대폰 뒤 풀 로고 자리로 옮겨 가 옅게 깔린다(로고 하나, 역할만 바뀜).
 *  4) 바로 신청 — 피드 속 설명회 카드가 앞으로 나와 '앱에서 바로 신청하기 → ✓ 신청 완료'.
 * 트랜스폼·투명도만 움직인다. 모션 줄이기 설정이면 고정 무대 없이 마지막 상태(기준·피드·신청 완료)를 그대로 보여 준다.
 * variant="platform"(11/18 CEO: /platform 히어로를 이 장면으로 교체) — 첫 문장이 페이지 제목(h1)이 되고,
 * 마지막 장면 링크는 자기 페이지 대신 지금 운영 중인 학부모 정보방·인스타그램으로 보낸다. 어두운 바탕(m-dark)은 쓰는 쪽에서 감싼다.
 */
type GatherVariant = "home" | "platform";

// 장면 타이밍(진행도 0~1)
const T = {
  engineIn: [0.08, 0.16],
  chipStart: 0.14,
  chipGap: 0.032,
  phoneIn: [0.51, 0.62],
  cardIn: [0.66, 0.73],
  tap: [0.75, 0.78],
  done: [0.77, 0.8],
} as const;

// 자동 재생 — 진행도를 시간 구간별 속도로 움직임(첫 장면 1.4초, 판정 3.8초, 피드 1초, 신청 1.3초 — 전체 약 7.8초)
// 11/12 CEO: 시작이 늦게 느껴짐(2회) → 섹션 윗부분이 화면 아래쪽에 보이기 시작하면 바로 시작 + 첫 장면 정지 3.2 → 1.8초
// 11/18 CEO: 휴대폰에서 보니 더 빨리 재생돼야 함 → 전체 11.4 → 7.8초(약 3분의 1 단축, 장면 비율은 그대로)
const PLAY = {
  progress: [0, 0.08, 0.53, 0.66, 0.82, 1],
  seconds: [0, 1.4, 5.2, 6.2, 7.5, 7.8],
} as const;
const PLAY_DURATION = PLAY.seconds[PLAY.seconds.length - 1];
const PLAY_TIMES = PLAY.seconds.map((t) => t / PLAY_DURATION);

// 흩어진 위치(무대 가운데 기준, 데스크톱 px) — 태블릿은 배율을 곱함
const SCATTER = [
  { x: -250, y: -205, r: -7 },
  { x: 225, y: -225, r: 6 },
  { x: -300, y: -25, r: 4 },
  { x: 245, y: -45, r: -5 },
  { x: -235, y: 175, r: -3 },
  { x: 240, y: 160, r: 7 },
  { x: -55, y: -290, r: 2 },
  { x: 70, y: 275, r: -6 },
] as const;

// 휴대폰(폭 640 미만) 전용 위치 — 카드(폭 128px)를 좌우 두 줄로 비켜 놓아 가운데 엔진이 가려지지 않게(360px 폭에서도 화면 안)
const SCATTER_SM = [
  { x: -112, y: -150, r: -5 },
  { x: 112, y: -118, r: 4 },
  { x: 112, y: -30, r: -3 },
  { x: -112, y: -62, r: 3 },
  { x: -112, y: 26, r: -4 },
  { x: 112, y: 58, r: 5 },
  { x: 112, y: 146, r: -3 },
  { x: -112, y: 114, r: 2 },
] as const;

// 풀 로고(심볼 128 + 간격 16 + 워드마크 높이 96) 안에서 심볼 가운데의 가로 위치 — 엔진 심볼이 여기로 옮겨 간다
const WORDMARK_W = 96 * (1289.08 / 245.38);
const LOGO_W = 128 + 16 + WORDMARK_W;
const LOGO_SYMBOL_X = -LOGO_W / 2 + 64;
const ENGINE_SYMBOL = 56; // 엔진 안 심볼 폭(데스크톱)

export function HomeGather({ prereg = false, variant = "home" }: { prereg?: boolean; variant?: GatherVariant }) {
  const Heading = variant === "platform" ? "h1" : "h2";
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const p = useMotionValue(0);
  // 섹션 윗부분이 화면 맨 아래 8%선을 넘는 순간 재생(조금이라도 보이면), 완전히 벗어나면 멈춤
  const inView = useInView(ref, { amount: "some", margin: "0px 0px -8% 0px" });
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const done = useRef(false); // 한 번 끝까지 재생했으면 다시 들어와도 자동으로 되감지 않음(마지막 장면 유지)
  const [finished, setFinished] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const { scale, compact } = useStageScale(stageRef);

  // 처음부터 재생(상태는 건드리지 않음 — 효과 안에서도 부를 수 있게)
  const start = useCallback(() => {
    controls.current?.stop();
    p.set(0);
    controls.current = animate(p, [...PLAY.progress], {
      duration: PLAY_DURATION,
      times: PLAY_TIMES,
      ease: "linear",
      onComplete: () => {
        done.current = true;
        setFinished(true);
      },
    });
  }, [p]);

  // 화면에 들어오면 재생(처음이면 시작, 멈췄던 거면 이어서), 나가면 멈춤
  useEffect(() => {
    if (reduce || done.current) return;
    const c = controls.current;
    if (inView) {
      if (c) c.play();
      else start();
    } else c?.pause();
  }, [inView, reduce, start]);

  useEffect(() => () => controls.current?.stop(), []);

  const replay = () => {
    done.current = false;
    setFinished(false);
    start();
  };
  const k = compact ? 0.62 : scale; // 엔진 크기 배율

  // 문장 세 장면
  const aOpacity = useTransform(p, [0, 0.12, 0.18], [1, 1, 0]);
  const bOpacity = useTransform(p, [0.17, 0.23, 0.55, 0.6], [0, 1, 1, 0]);
  const bY = useTransform(p, [0.17, 0.23], [16, 0]);
  const cOpacity = useTransform(p, [0.6, 0.66], [0, 1]);
  const cY = useTransform(p, [0.6, 0.66], [16, 0]);
  // 세 번째 문장의 링크는 보이기 전엔 누르거나 키보드로 갈 수 없게(앞 장면 글 위에 투명한 링크가 겹치지 않도록)
  const cVisibility = useTransform(p, (v) => (v < 0.6 ? "hidden" : "visible"));

  // 엔진 · 피드 · 로고
  const coreOpacity = useTransform(p, [T.engineIn[0], T.engineIn[1], T.phoneIn[0], T.phoneIn[0] + 0.05], [0, 1, 1, 0]);
  const coreScale = useTransform(p, [T.engineIn[0], T.engineIn[1], T.phoneIn[0], T.phoneIn[0] + 0.05], [0.7, 1, 1, 1.25]);
  const symbolTarget = (128 * scale) / (ENGINE_SYMBOL * k);
  // 넓은 화면: 엔진 심볼이 휴대폰 뒤 풀 로고의 심볼 자리로 옮겨 간다.
  // 휴대폰(좁은 화면): 설명회 카드가 가운데를 덮어 뒤 로고가 조각처럼 보이므로, 엔진 심볼은 사라지고 휴대폰 위에 작은 풀 로고가 뜬다
  const symbolX = useTransform(p, [T.phoneIn[0], T.phoneIn[1]], [0, compact ? 0 : LOGO_SYMBOL_X * scale]);
  const symbolScale = useTransform(p, [T.engineIn[0], T.engineIn[1], T.phoneIn[0], T.phoneIn[1]], [0.7, 1, 1, compact ? 1 : symbolTarget]);
  // 11/12 CEO: 마지막에 뜨는 텐투텐 로고는 반투명 말고 또렷하게(불투명) — 엔진 심볼이 그대로 로고 심볼이 된다
  const symbolOpacity = useTransform(
    p,
    [T.engineIn[0], T.engineIn[1], T.phoneIn[0], T.phoneIn[0] + 0.05],
    [0, 1, 1, compact ? 0 : 1],
  );
  const wordmarkOpacity = useTransform(p, [T.phoneIn[0] + 0.03, T.phoneIn[1] + 0.02], [0, 1]);
  // 휴대폰은 불투명 유지(뒤 로고가 비치지 않게) — 설명회 카드가 나올 땐 휴대폰 화면 위에 어두운 막을 덮어 카드로 시선을 모음
  const phoneOpacity = useTransform(p, [T.phoneIn[0], T.phoneIn[0] + 0.07], [0, 1]);
  const phoneDim = useTransform(p, [T.cardIn[0], T.cardIn[1]], [0, 0.55]);
  const phoneScale = useTransform(p, [T.phoneIn[0], T.phoneIn[1]], [0.3, 1]);

  // 맞춤 소식이 엔진에 들어갈 때마다 고리가 한 번씩 퍼진다
  const pulseOpacity = useTransform(p, PULSE_INPUT, PULSE_OPACITY);
  const pulseScale = useTransform(p, PULSE_INPUT, PULSE_SCALE);

  if (reduce) return <StaticGather prereg={prereg} variant={variant} />;

  const D = 136 * k; // 엔진 지름

  return (
    <section ref={ref} aria-labelledby="gather-title" className="relative">
      {/* 11/18 CEO(휴대폰에서 위 로고·아래 글이 잘림): 넓은 화면만 화면 한 장 높이로 고정. 휴대폰·태블릿은 무대 높이를 px로 정하고
          글은 세 장면을 같은 칸에 겹쳐 쌓아(grid) 가장 긴 장면만큼 높이를 차지하게 → 화면 높이와 상관없이 잘리지 않음 */}
      <div className="relative flex flex-col overflow-hidden lg:h-[calc(100svh-4rem)] lg:min-h-[600px] lg:flex-row lg:items-center">
        {/* 무대 — 쏟아지는 소식 → 엔진 → 피드 → 신청 */}
        <div ref={stageRef} className="relative h-[400px] w-full sm:h-[560px] lg:order-2 lg:h-full lg:w-1/2">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(80,227,194,0.16)_0%,rgba(80,227,194,0)_100%)]"
          />

          {/* 휴대폰 뒤 풀 로고의 워드마크 — 심볼 자리는 비워 두고, 엔진 심볼이 그 자리로 옮겨 온다 */}
          {!compact && (
            <motion.div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: wordmarkOpacity }}>
              <LogoRow scale={scale} hideSymbol />
            </motion.div>
          )}

          {/* 엔진 — 그래파이트 원 + 도는 점선 고리 + 맞춤이 들어올 때 퍼지는 고리 + 기준 알약 */}
          <motion.div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: coreOpacity, scale: coreScale }}
          >
            <div className="relative flex items-center justify-center" style={{ width: D, height: D }}>
              <SpinRing size={D * 1.95} duration={48} dash="1 3.2" strokeOpacity={0.22} />
              <SpinRing size={D * 1.42} duration={26} dash="7 4" strokeOpacity={0.45} reverse />
              <motion.span
                className="absolute inset-0 rounded-full ring-2 ring-[var(--color-mint-500)]"
                style={{ opacity: pulseOpacity, scale: pulseScale }}
              />
              <span className="absolute inset-0 rounded-full bg-[var(--color-graphite)] ring-1 ring-[var(--color-mint-500)]/50" />
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(60%_60%_at_50%_45%,rgba(80,227,194,0.22)_0%,rgba(80,227,194,0)_100%)]" />
            </div>
            <CriteriaPill className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2" compact={compact} />
          </motion.div>

          {/* 엔진 심볼 → 피드가 열리면 풀 로고의 심볼 자리로 */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ x: symbolX, scale: symbolScale, opacity: symbolOpacity }}
          >
            <Symbol variant="mint" size={ENGINE_SYMBOL * k} role="presentation" aria-label={undefined} />
          </motion.div>

          {HOME_ENGINE.chips.map((chip, i) => (
            <Chip key={chip.title} progress={p} index={i} scale={scale} compact={compact} {...chip} />
          ))}

          {/* 가운데 맞춤은 CSS translate(Tailwind), 움직임은 motion transform — 두 속성이 따로 합쳐짐 */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: phoneOpacity, scale: phoneScale }}
          >
            <div className="relative origin-center" style={{ transform: `scale(${scale * 0.92})` }}>
              {/* 휴대폰(폭 640 미만)에선 이 캡션이 아주 작게 줄어 카드 아래 읽히는 크기의 캡션과 겹치므로 자리만 남기고 숨김(11/18 CEO) */}
              <PhoneFeedMock className="[&>div]:shadow-none [&_figcaption_span]:bg-white/10 [&_figcaption_span]:text-[var(--color-ash)] max-sm:[&_figcaption]:invisible" />
              {/* 휴대폰(좁은 화면) 전용 — 휴대폰 위에 텐투텐 풀 로고(불투명). 휴대폰과 같이 축소되므로 원래 크기로 그림 */}
              {compact && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute bottom-full left-1/2 mb-7 flex -translate-x-1/2 items-center gap-3"
                  style={{ opacity: wordmarkOpacity }}
                >
                  <Symbol variant="mint" size={64} role="presentation" aria-label={undefined} />
                  <Wordmark variant="mint" height={48} role="presentation" aria-label={undefined} />
                </motion.div>
              )}
              {/* 휴대폰 화면만 덮는 어두운 막(아래 '화면 예시' 캡션은 그대로) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 bottom-[44px] mx-auto w-[300px] rounded-[2.6rem] bg-[var(--color-onyx)]"
                style={{ opacity: phoneDim }}
              />
            </div>
          </motion.div>

          <SeminarCard progress={p} compact={compact} stageScale={scale} />

          <motion.button
            type="button"
            onClick={replay}
            initial={false}
            animate={{ opacity: finished ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            tabIndex={finished ? 0 : -1}
            aria-hidden={!finished}
            className={`absolute top-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[var(--color-onyx)]/80 px-3 py-1.5 text-[13px] text-[var(--color-ivory)] backdrop-blur transition-colors hover:border-[var(--color-mint-500)] md:top-5 md:right-6 ${
              finished ? "" : "pointer-events-none"
            }`}
          >
            <span aria-hidden>↻</span> 다시 보기
          </motion.button>
        </div>

        {/* 문장 — 세 장면이 같은 자리에서 바뀜 */}
        <div className="relative w-full lg:order-1 lg:h-full lg:w-1/2">
          {/* 넓은 화면에선 왼쪽 반의 오른쪽 600px — 글 시작선이 위아래 섹션(1200px 폭)과 맞도록. m-wrap을 쓰면 최대 폭 규칙이 겹쳐 글이 화면 왼쪽 끝으로 붙음 */}
          <div className="relative grid w-full px-6 pt-4 pb-14 md:px-8 lg:block lg:h-full lg:p-0 lg:mr-0 lg:ml-auto lg:max-w-[600px]">
            <motion.div className="col-start-1 row-start-1 lg:absolute lg:inset-x-8 lg:top-1/2 lg:-translate-y-1/2" style={{ opacity: aOpacity }}>
              <p className="m-eyebrow">{HOME_GATHER.eyebrow}</p>
              <Heading id="gather-title" className="m-heading mt-3 whitespace-pre-line text-[clamp(1.6rem,3.2vw,2.65rem)] text-[var(--color-ivory)]">
                {HOME_GATHER.before.headline}
              </Heading>
              <p className="mt-4 max-w-md break-keep text-[15px] leading-[1.6] text-[var(--color-ash)] md:text-[18px]">
                <Emph text={HOME_GATHER.before.sub} />
              </p>
            </motion.div>

            <motion.div className="col-start-1 row-start-1 lg:absolute lg:inset-x-8 lg:top-1/2 lg:-translate-y-1/2" style={{ opacity: bOpacity, y: bY }}>
              <p className="m-eyebrow">{HOME_GATHER.eyebrow}</p>
              <p className="m-heading mt-3 whitespace-pre-line text-[clamp(1.6rem,3.2vw,2.65rem)] text-[var(--color-ivory)]">
                {HOME_GATHER.after.headline}
              </p>
              <EngineBadge className="mt-3 md:mt-5" />
              <p className="mt-2.5 max-w-md break-keep text-[15px] leading-[1.55] text-[var(--color-ash)] md:mt-3 md:text-[18px] md:leading-[1.6]">
                <Emph text={HOME_GATHER.after.sub} />
              </p>
            </motion.div>

            <motion.div className="col-start-1 row-start-1 lg:absolute lg:inset-x-8 lg:top-1/2 lg:-translate-y-1/2" style={{ opacity: cOpacity, y: cY, visibility: cVisibility }}>
              <p className="m-eyebrow">{HOME_GATHER.eyebrow}</p>
              <p className="m-heading mt-3 whitespace-pre-line text-[clamp(1.2rem,5.6vw,1.45rem)] text-[var(--color-ivory)] sm:text-[clamp(1.45rem,2.4vw,2.1rem)]">
                {HOME_GATHER.apply.headline}
              </p>
              <p className="mt-2.5 max-w-md break-keep text-[15px] leading-[1.55] text-[var(--color-ash)] md:mt-4 md:text-[18px] md:leading-[1.6]">
                <Emph text={HOME_GATHER.apply.sub} />
              </p>
              {/* 버튼 링크를 운영 상태 문구보다 먼저 — 휴대폰 오른쪽 아래 카카오 상담 버튼에 가리지 않게 */}
              <Links prereg={prereg} variant={variant} className="mt-3.5 md:mt-6" />
              <p className="mt-3 max-w-md break-keep text-[12.5px] leading-[1.5] text-[var(--color-ash)]/75 md:mt-5 md:text-[14px]">
                {HOME_GATHER.apply.status}
              </p>
            </motion.div>

            <Steps progress={p} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** 카드 i의 시간표 — 차례로 엔진 앞(관문)까지 와서 판정을 받고, 맞춤이면 엔진 안으로, 아니면 밖으로 밀려난다 */
function chipTimes(i: number) {
  const start = T.chipStart + i * T.chipGap;
  return {
    start,
    gate: start + 0.07, // 관문 도착
    judge: start + 0.06, // 판정 표시 시작
    leave: start + 0.1, // 관문을 떠남
    absorb: start + 0.125, // 맞춤이 엔진에 들어간 순간
    end: start + 0.15,
  };
}

// 맞춤 소식이 엔진에 들어가는 순간들 — 고리 퍼짐 키프레임
const PASS_TIMES = HOME_ENGINE.chips.flatMap((c, i) => (c.pass ? [chipTimes(i).absorb] : []));
const PULSE_INPUT = PASS_TIMES.flatMap((t) => [t - 0.012, t, t + 0.016]);
const PULSE_OPACITY = PASS_TIMES.flatMap(() => [0, 0.9, 0]);
const PULSE_SCALE = PASS_TIMES.flatMap(() => [1, 1.08, 1.32]);

function Chip({
  progress,
  index,
  scale,
  compact,
  tag,
  title,
  pass,
  why,
}: {
  progress: MotionValue<number>;
  index: number;
  scale: number;
  compact: boolean;
  tag: string;
  title: string;
  pass: boolean;
  why?: string;
}) {
  const s = compact ? SCATTER_SM[index % SCATTER_SM.length] : SCATTER[index % SCATTER.length];
  const k = compact ? 1 : scale;
  const sy = s.y * k * (compact ? 0.86 : 1); // 휴대폰은 무대가 화면의 48%라 세로로 덜 흩어지게
  const sx = s.x * k;
  // 관문 = 엔진 둘레의 타원(가로로 넓게 — 카드가 가로로 길어서)
  const len = Math.hypot(s.x, s.y) || 1;
  const gx = (s.x / len) * (compact ? 96 : 215 * scale);
  const gy = (s.y / len) * (compact ? 74 : 135 * scale);
  const t = chipTimes(index);

  const inT = [0, t.start, t.gate, t.leave, pass ? t.absorb : t.end];
  const x = useTransform(progress, inT, [sx, sx, gx, gx, pass ? 0 : gx * 1.55]);
  const y = useTransform(progress, inT, [sy, sy, gy, gy, pass ? 0 : gy * 1.55 + 40 * (compact ? 0.6 : scale)]);
  const rotate = useTransform(progress, inT, [s.r, s.r, 0, 0, pass ? 0 : s.r * 1.5]);
  const cardScale = useTransform(progress, inT, [1, 1, 1, 1, pass ? 0.3 : 0.92]);
  // 엔진이 켜지면 아직 차례가 안 온 카드는 잠깐 흐려져 엔진이 먼저 보이고, 제 차례가 오면 다시 또렷해진다
  const waits = t.start > T.engineIn[1] + 0.005;
  const fadeOut = pass ? [t.leave + 0.012, t.absorb] : [t.leave, t.end];
  const opacity = useTransform(
    progress,
    waits ? [0, T.engineIn[0], T.engineIn[1], t.start, t.start + 0.02, ...fadeOut] : [0, ...fadeOut],
    waits ? [1, 1, 0.45, 0.45, 1, 1, 0] : [1, 1, 0],
  );
  // 판정 — 알약이 톡 나타나고, 걸러지는 카드는 내용이 흐려진다
  const verdictOpacity = useTransform(progress, [t.judge, t.judge + 0.014], [0, 1]);
  const verdictScale = useTransform(progress, [t.judge, t.judge + 0.014], [0.6, 1]);
  const bodyOpacity = useTransform(progress, [t.judge, t.judge + 0.02], [1, pass ? 1 : 0.4]);

  return (
    <motion.div
      aria-hidden
      className="absolute top-1/2 left-1/2 w-[128px] -translate-x-1/2 -translate-y-1/2 sm:w-max sm:max-w-[220px]"
      style={{ x, y, rotate, scale: cardScale, opacity }}
    >
      <div className="relative rounded-[12px] bg-[var(--color-obsidian)] px-3 py-2 ring-1 ring-white/[0.06] sm:px-3.5 sm:py-2.5">
        {pass && (
          <motion.span
            className="absolute inset-0 rounded-[12px] ring-1 ring-[var(--color-mint-500)]"
            style={{ opacity: verdictOpacity }}
          />
        )}
        <motion.div style={{ opacity: bodyOpacity }}>
          <span className="block text-[11px] text-[var(--color-mint-500)]">{tag}</span>
          <span className="mt-0.5 block truncate text-[11.5px] text-[var(--color-ivory)] sm:text-[13px]">{title}</span>
        </motion.div>
        <motion.span
          className={`absolute -top-2.5 right-2 rounded-full px-2 py-0.5 text-[10.5px] leading-[1.4] font-semibold whitespace-nowrap sm:text-[11px] ${
            pass ? "bg-[var(--color-mint-500)] text-[var(--color-ink-950)]" : "bg-[#3A3A4A] text-[var(--color-ash)]"
          }`}
          style={{ opacity: verdictOpacity, scale: verdictScale }}
        >
          {pass ? "✓ 맞춤" : `✕ ${why}`}
        </motion.span>
      </div>
    </motion.div>
  );
}

/** 피드 속 설명회 카드가 앞으로 나와 신청 버튼이 '신청 완료'로 바뀐다(장식 — 실제로 눌리지 않음) */
function SeminarCard({ progress, compact, stageScale }: { progress: MotionValue<number>; compact: boolean; stageScale: number }) {
  const s = HOME_ENGINE.seminar;
  // 무대가 작아지면(좁거나 낮은 창) 카드도 위치·크기를 같이 줄여 아래 문장과 겹치지 않게
  const fit = compact ? 1 : Math.min(1, Math.max(0.62, stageScale));
  const baseY = compact ? 34 : 120 * stageScale;
  const opacity = useTransform(progress, [T.cardIn[0], T.cardIn[1]], [0, 1]);
  const y = useTransform(progress, [T.cardIn[0], T.cardIn[1]], [baseY + 48, baseY]);
  const scale = useTransform(progress, [T.cardIn[0], T.cardIn[1]], [0.9 * fit, fit]);
  const tapOpacity = useTransform(progress, [T.tap[0], T.tap[0] + 0.006, T.tap[1]], [0, 0.55, 0]);
  const tapScale = useTransform(progress, [T.tap[0], T.tap[1]], [0.4, 2.4]);
  const applyOpacity = useTransform(progress, [T.done[0], T.done[0] + 0.015], [1, 0]);
  const applyY = useTransform(progress, [T.done[0], T.done[0] + 0.015], [0, -14]);
  const doneOpacity = useTransform(progress, [T.done[0] + 0.01, T.done[1]], [0, 1]);
  const doneY = useTransform(progress, [T.done[0] + 0.01, T.done[1]], [14, 0]);
  const noteOpacity = useTransform(progress, [T.done[1], T.done[1] + 0.03], [0, 1]);

  return (
    <motion.div
      aria-hidden
      className="absolute top-1/2 left-1/2 w-[236px] -translate-x-1/2 -translate-y-1/2 sm:w-[290px] lg:w-[310px]"
      style={{ opacity, y, scale }}
    >
      <div className="rounded-[12px] bg-[var(--color-graphite)] p-4 ring-1 ring-white/[0.1] sm:p-5">
        <div className="flex items-center justify-between text-[11px] sm:text-[12px]">
          <span className="rounded-full bg-[var(--color-mint-500)]/15 px-2.5 py-0.5 text-[var(--color-mint-500)]">{s.tag}</span>
          <span className="text-[var(--color-ash)]">Powered by 10to10</span>
        </div>
        <p className="mt-2.5 break-keep text-[14px] leading-snug font-semibold text-[var(--color-ivory)] sm:mt-3 sm:text-[16px]">{s.title}</p>
        <p className="mt-1 text-[11.5px] text-[var(--color-ash)] sm:text-[13px]">{s.meta}</p>
        <div className="relative mt-3.5 flex h-10 items-center justify-center overflow-hidden rounded-full bg-[var(--color-mint-500)] text-[13px] font-medium text-[var(--color-ink-950)] sm:mt-4 sm:h-11 sm:text-[14px]">
          <motion.span className="absolute h-10 w-10 rounded-full bg-white" style={{ opacity: tapOpacity, scale: tapScale }} />
          <motion.span className="relative" style={{ opacity: applyOpacity, y: applyY }}>
            앱에서 바로 신청하기
          </motion.span>
          <motion.span className="absolute" style={{ opacity: doneOpacity, y: doneY }}>
            ✓ 신청 완료
          </motion.span>
        </div>
        <motion.p className="mt-2 text-center text-[11px] text-[var(--color-ash)] sm:text-[12px]" style={{ opacity: noteOpacity }}>
          내 예약에 바로 담겼어요
        </motion.p>
      </div>
      {/* 휴대폰(폭 640 미만)에선 화면 예시 캡션이 축소돼 읽기 어려우므로 카드 아래에 읽을 수 있는 크기로. 넓은 화면은 휴대폰 캡션이 그대로 읽힘 */}
      <p className="mt-2.5 text-center text-[11px] text-[var(--color-ash)]/80 sm:hidden">화면 예시 · 실제 앱 화면은 달라질 수 있습니다</p>
    </motion.div>
  );
}

/** 세 장면 표시(넓은 화면) — 지금 어느 단계인지 */
function Steps({ progress }: { progress: MotionValue<number> }) {
  const o1 = useTransform(progress, [0, 0.15, 0.19], [1, 1, 0.35]);
  const o2 = useTransform(progress, [0.15, 0.19, 0.57, 0.61], [0.35, 1, 1, 0.35]);
  const o3 = useTransform(progress, [0.57, 0.61], [0.35, 1]);
  const ops = [o1, o2, o3];
  return (
    <ol aria-hidden className="absolute inset-x-8 bottom-12 hidden items-center gap-3 text-[14px] text-[var(--color-ivory)] lg:flex">
      {HOME_GATHER.steps.map((label, i) => (
        <motion.li key={label} className="flex items-center gap-3" style={{ opacity: ops[i] }}>
          <span className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-[var(--color-mint-500)] text-[12px] text-[var(--color-mint-500)]">
              {i + 1}
            </span>
            {label}
          </span>
          {i < HOME_GATHER.steps.length - 1 && <span className="h-px w-8 bg-white/25" />}
        </motion.li>
      ))}
    </ol>
  );
}

/** 엔진이 보는 기준 — 휴대폰 화면 예시의 동네·학년과 같은 값 */
function CriteriaPill({ className = "", compact }: { className?: string; compact: boolean }) {
  return (
    <p
      className={`flex items-center gap-1.5 rounded-full bg-[var(--color-onyx)] px-3 py-1 whitespace-nowrap text-[var(--color-ivory)] ring-1 ring-[var(--color-mint-500)]/45 ${
        compact ? "text-[11px]" : "text-[13px]"
      } ${className}`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint-500)" strokeWidth="2.4" aria-hidden>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.4" />
      </svg>
      {HOME_ENGINE.criteria.join(" · ")} 맞춤
    </p>
  );
}

/** 천천히 도는 점선 고리 — 엔진이 돌아가고 있다는 느낌만(장식) */
function SpinRing({
  size,
  duration,
  dash,
  strokeOpacity,
  reverse = false,
}: {
  size: number;
  duration: number;
  dash: string;
  strokeOpacity: number;
  reverse?: boolean;
}) {
  return (
    // CSS 회전 — 자바스크립트 프레임을 쓰지 않고, 화면 밖에선 브라우저가 쉬게 한다. 모션 줄이기 설정이면 멈춤
    <svg
      className="absolute animate-spin motion-reduce:animate-none"
      style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="49" fill="none" stroke="var(--color-mint-500)" strokeOpacity={strokeOpacity} strokeWidth="0.7" strokeDasharray={dash} />
    </svg>
  );
}

/** 자체 개발 엔진 표시 — 테두리 알약(민트는 점과 글자만, 채움 ✗) */
function EngineBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-mint-500)]/40 px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-mint-500)] md:text-[14px] ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-500)]" />
      {HOME_GATHER.after.engine}
    </p>
  );
}

function Links({ prereg, variant, className = "" }: { prereg: boolean; variant: GatherVariant; className?: string }) {
  if (variant === "platform") {
    // /platform에선 자기 페이지로 가는 링크 대신, 문구(정보방·인스타그램에서 소식을 먼저 전하고 있고)가 말하는 두 곳으로
    return (
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
        <a
          href={PLATFORM_INFO_ROOM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[15px] text-[var(--color-mint-500)] underline-offset-4 hover:underline"
        >
          학부모 정보방 입장하기 <span aria-hidden>→</span>
        </a>
        <a
          href={PLATFORM_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[15px] text-[var(--color-ivory)] underline-offset-4 hover:underline"
        >
          인스타그램 @10to10.kr <span aria-hidden>→</span>
        </a>
      </div>
    );
  }
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
      <Link
        href="/platform"
        className="inline-flex items-center gap-1.5 text-[15px] text-[var(--color-ivory)] underline-offset-4 hover:underline"
      >
        텐투텐 앱 자세히 보기 <span aria-hidden>→</span>
      </Link>
      {prereg && (
        <a href="#prereg" className="inline-flex items-center gap-1.5 text-[15px] text-[var(--color-mint-500)] underline-offset-4 hover:underline">
          {HOME_PREREG.cta} <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );
}

/** 텐투텐 풀 로고(심볼 + 워드마크)를 옅게 — hideSymbol이면 심볼 자리만 비워 둔다(엔진 심볼이 그 자리로 옮겨 옴) */
function LogoRow({ scale, hideSymbol = false }: { scale: number; hideSymbol?: boolean }) {
  return (
    // 데스크톱 폭 약 650px — 무대(화면 반쪽 720px) 안에 다 들어오게
    <div className="flex items-center gap-4" style={{ transform: `scale(${scale})` }}>
      {hideSymbol ? (
        <span style={{ width: 128, height: 137 }} />
      ) : (
        <Symbol variant="mint" size={128} role="presentation" aria-label={undefined} />
      )}
      <Wordmark variant="mint" height={96} role="presentation" aria-label={undefined} />
    </div>
  );
}

// 무대에 휴대폰·카드·흩어진 소식이 다 들어가는 데 필요한 높이(배율 1 기준 px)
const STAGE_DESIGN_H = 700;

/**
 * 무대 크기에 맞춘 배율 — 폭과 높이 중 더 빠듯한 쪽을 따른다.
 *  폭: 넓은 화면은 무대(화면 반쪽)가 1440px 기준 720px보다 좁아지는 만큼(1280 → 0.89, 1024 → 0.71), 태블릿 0.8.
 *  높이(11/12 CEO: 창을 좁히면 휴대폰·설명회 카드가 아래 문장과 겹침): 무대 높이가 700px보다 낮으면 그만큼 줄임.
 *  휴대폰(폭 640 미만)은 전용 배치라 0.42 고정. compact = 휴대폰 배치 여부(폭으로만 정함).
 */
function useStageScale(stageRef: React.RefObject<HTMLDivElement | null>) {
  const [state, setState] = useState({ scale: 1, compact: false });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setState({ scale: 0.42, compact: true });
        return;
      }
      const byWidth = w >= 1024 ? Math.min(1, w / 1440) : 0.8;
      const h = stageRef.current?.clientHeight ?? 0;
      const byHeight = h > 0 ? h / STAGE_DESIGN_H : 1;
      setState({ scale: Math.max(0.4, Math.min(byWidth, byHeight)), compact: false });
    };
    update();
    const ro = new ResizeObserver(update);
    if (stageRef.current) ro.observe(stageRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [stageRef]);
  return state;
}

/** 모션 줄이기 — 고정 무대 없이 마지막 상태를 그대로: 문장 세 개 + 엔진 기준 + 피드 화면 + 신청 완료 카드 */
function StaticGather({ prereg, variant }: { prereg: boolean; variant: GatherVariant }) {
  const s = HOME_ENGINE.seminar;
  const Heading = variant === "platform" ? "h1" : "h2";
  return (
    <section aria-labelledby="gather-title" className="py-[72px] md:py-28">
      <div className="m-wrap grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="m-eyebrow">{HOME_GATHER.eyebrow}</p>
          <Heading id="gather-title" className="m-heading mt-3 whitespace-pre-line text-[clamp(1.6rem,3.2vw,2.65rem)] text-[var(--color-ivory)]">
            {HOME_GATHER.before.headline}
          </Heading>
          <p className="mt-4 break-keep text-[16px] leading-[1.6] text-[var(--color-ash)]"><Emph text={HOME_GATHER.before.sub} /></p>
          <p className="m-heading mt-10 whitespace-pre-line text-[clamp(1.4rem,2.6vw,2rem)] text-[var(--color-ivory)]">
            {HOME_GATHER.after.headline}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <EngineBadge />
            <CriteriaPill compact={false} />
          </div>
          <p className="mt-3 break-keep text-[16px] leading-[1.6] text-[var(--color-ash)]"><Emph text={HOME_GATHER.after.sub} /></p>
          <p className="m-heading mt-10 whitespace-pre-line text-[clamp(1.3rem,2.4vw,1.85rem)] text-[var(--color-ivory)]">
            {HOME_GATHER.apply.headline}
          </p>
          <p className="mt-3 break-keep text-[16px] leading-[1.6] text-[var(--color-ash)]"><Emph text={HOME_GATHER.apply.sub} /></p>
          <p className="mt-3 break-keep text-[14px] leading-[1.5] text-[var(--color-ash)]/75">{HOME_GATHER.apply.status}</p>
          <Links prereg={prereg} variant={variant} className="mt-6" />
        </div>
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LogoRow scale={1} />
          </div>
          <PhoneFeedMock className="relative [&>div]:shadow-none" />
          <div aria-hidden className="absolute bottom-24 left-1/2 w-[290px] -translate-x-1/2 rounded-[12px] bg-[var(--color-graphite)] p-5 ring-1 ring-white/[0.1]">
            <div className="flex items-center justify-between text-[12px]">
              <span className="rounded-full bg-[var(--color-mint-500)]/15 px-2.5 py-0.5 text-[var(--color-mint-500)]">{s.tag}</span>
              <span className="text-[var(--color-ash)]">Powered by 10to10</span>
            </div>
            <p className="mt-3 break-keep text-[16px] leading-snug font-semibold text-[var(--color-ivory)]">{s.title}</p>
            <p className="mt-1 text-[13px] text-[var(--color-ash)]">{s.meta}</p>
            <p className="mt-4 flex h-11 items-center justify-center rounded-full bg-[var(--color-mint-500)] text-[14px] font-medium text-[var(--color-ink-950)]">
              ✓ 신청 완료
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
