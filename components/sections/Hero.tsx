import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

/**
 * 히어로 v3 — 훅을 '편함'이 아니라 원장의 궁극 KPI(등록)로.
 * 리서치 근거: 원장 커뮤니티(학관노)·마케팅 가이드 공통 — 설명회의 목적은
 * ①신규 등록 ②학부모 신뢰(재원 유지) ③신청자 데이터. 이 3개를 시각화한다.
 * 모바일 스택(T3): 헤드라인 → CTA 카드 → KPI·서브.
 */
const HERO_OUTCOMES = [
  {
    title: "신규 등록",
    value: "모객 20명 → 등록 6명",
    note: "등록 전환 30% · 학원장 인터뷰 데이터",
  },
  {
    title: "학부모 신뢰",
    value: "만족도 4.32 / 5.0",
    note: "재참석 의사 100% · 실측",
  },
  {
    title: "신청자 데이터",
    value: "명단 · 성과 리포트",
    note: "설명회가 끝나도 학원에 귀속",
  },
] as const;

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container size="wide">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14">
          <div>
            <FadeIn>
              <div className="micro-label text-[var(--color-ink-500)]">
                학원 설명회 풀케어 · 10to10 STAGE
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="display-type text-[clamp(2.2rem,6vw,3.8rem)] text-[var(--color-ink-950)]">
                등록은, 학부모가
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">원장님을 만난 날</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-[-0.08em] bottom-[0.04em] z-0 h-[0.38em] bg-[var(--color-mint-500)]/70"
                  />
                </span>
                <br />
                일어납니다.
              </h1>
            </FadeIn>
            <FadeIn delay={0.25} className="mt-7 hidden md:block">
              <HeroSub />
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <CtaCard />
          </FadeIn>

          <FadeIn delay={0.25} className="md:hidden">
            <HeroSub />
          </FadeIn>
        </div>

        {/* 설명회 하루로 얻는 것 — 원장 KPI 3종 시각화 */}
        <FadeIn delay={0.35} className="mt-10 md:mt-14">
          <div className="micro-label mb-3 text-[var(--color-ink-500)]">
            설명회 하루로 얻는 것
          </div>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-[var(--color-cloud)] md:grid-cols-3">
            {HERO_OUTCOMES.map((o, i) => (
              <div key={o.title} className="bg-white p-5 md:p-6">
                <div className="flex items-center gap-2">
                  <span className="display-type text-xl text-[var(--color-ink-300)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-bold text-[var(--color-ink-950)]">
                    {o.title}
                  </span>
                </div>
                <div className="mt-2 text-lg font-bold text-[var(--color-ink-900)] md:text-xl">
                  {o.value}
                </div>
                <div className="mt-1 text-[13px] text-[var(--color-ink-500)]">{o.note}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function HeroSub() {
  return (
    <p className="max-w-2xl text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
      블로그와 인스타는 &lsquo;인지&rsquo;까지만 만듭니다. 등록을 결정짓는 건
      학부모가 원장님을 직접 만나는 설명회 하루 — 홍보·모객, 연사 섭외, 홍보물
      제작, 현장 운영, 등록 관리까지 10to10이 전부 준비합니다. 원장님은{" "}
      <strong className="text-[var(--color-ink-950)]">개최와 강연만</strong>{" "}
      하시면 됩니다.
    </p>
  );
}

function CtaCard() {
  return (
    <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-8">
      <div className="micro-label text-[var(--color-ink-500)]">지금 바로 상담</div>
      <a
        href={COMPANY.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-lg font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
      >
        <KakaoSymbol size={20} />
        카톡으로 3분 상담
      </a>
      <p className="mt-2.5 text-center text-[13px] text-[var(--color-ink-500)]">
        평균 응답 30분 · 영업 전화 드리지 않습니다
      </p>
      {/* 심리 1 — 손실 회피를 첫 화면에서 제거 */}
      <div className="mt-6 rounded-[var(--radius-btn)] border-2 border-[var(--color-mint-500)] bg-white px-4 py-3.5">
        <div className="text-[15px] font-bold text-[var(--color-ink-950)]">
          모객 보장
        </div>
        <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-700)]">
          신청 20명을 못 채우면, 부족한 만큼 돌려드립니다.
        </p>
      </div>
      <ul className="mt-5 space-y-2 text-[15px] text-[var(--color-ink-700)]">
        <li className="flex items-center justify-between">
          <span>설명회 1회 예상 학원 매출</span>
          <strong className="text-[var(--color-ink-950)]">720만 원</strong>
        </li>
        <li className="flex items-center justify-between">
          <span>정부 지원</span>
          <strong className="text-[var(--color-ink-950)]">모두의 창업 선정</strong>
        </li>
      </ul>
      <Link
        href="/stage"
        className="mt-5 text-center text-sm font-semibold text-[var(--color-ink-700)] underline decoration-[var(--color-ink-300)] underline-offset-4 transition hover:text-[var(--color-ink-950)]"
      >
        설명회 풀케어 자세히 보기 →
      </Link>
    </div>
  );
}
