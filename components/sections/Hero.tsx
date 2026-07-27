import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { COMPANY } from "@/lib/content/company";

/**
 * 히어로 v4 — H1: "학부모가 직접 방문하는 설명회 = 등록으로 이어지는 가장 확실한 퍼널".
 * 사진 전면 활용: 우측 = 현장 사진 카드(오버레이 CTA), KPI 3카드 = 사진 섬네일 결합.
 * 모바일 스택(T3): 헤드라인 → 사진 CTA 카드 → 서브 → KPI.
 */
const HERO_OUTCOMES = [
  {
    title: "신규 등록",
    value: "모객 20명 → 등록 6명",
    note: "등록 전환 30% · 학원장 인터뷰 데이터",
    src: "/info-session/05-hall-app.jpg",
    alt: "설명회 현장에서 신청·접수를 안내하는 장면",
  },
  {
    title: "학부모 신뢰",
    value: "만족도 4.32 / 5.0",
    note: "재참석 의사 100% · 실측",
    src: "/info-session/03-speaker-male.jpg",
    alt: "학부모 앞에서 진행되는 입시 컨설턴트 세션",
  },
  {
    title: "신청자 데이터",
    value: "명단 · 성과 리포트",
    note: "설명회가 끝나도 학원에 귀속",
    src: "/info-session/04-booklet.jpg",
    alt: "브랜드 톤으로 제작된 설명회 안내책자",
  },
] as const;

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container size="wide">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <div>
            <FadeIn>
              <div className="micro-label text-[var(--color-ink-500)]">
                학원 설명회 풀케어 · 10to10 STAGE
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="display-type text-[clamp(2rem,5.5vw,3.6rem)] text-[var(--color-ink-950)]">
                학부모가 직접 방문하는 설명회,
                <br />
                등록으로 이어지는
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">가장 확실한 퍼널</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-[-0.08em] bottom-[0.04em] z-0 h-[0.38em] bg-[var(--color-mint-500)]/70"
                  />
                </span>
                입니다.
              </h1>
            </FadeIn>
            <FadeIn delay={0.25} className="mt-7 hidden md:block">
              <HeroSub />
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <PhotoCtaCard />
          </FadeIn>

          <FadeIn delay={0.25} className="md:hidden">
            <HeroSub />
          </FadeIn>
        </div>

        {/* 설명회 하루로 얻는 것 — 원장 KPI 3종, 실사 섬네일 결합 */}
        <FadeIn delay={0.35} className="mt-10 md:mt-14">
          <div className="micro-label mb-3 text-[var(--color-ink-500)]">
            설명회 하루로 얻는 것
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {HERO_OUTCOMES.map((o, i) => (
              <div
                key={o.title}
                className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white"
              >
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={o.src}
                    alt={o.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    quality={70}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="micro-label absolute left-3 top-3 rounded-[var(--radius-badge)] bg-[var(--color-ink-950)]/75 px-2 py-1 text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <div className="text-[15px] font-bold text-[var(--color-ink-950)]">
                    {o.title}
                  </div>
                  <div className="mt-1.5 text-lg font-bold text-[var(--color-ink-900)] md:text-xl">
                    {o.value}
                  </div>
                  <div className="mt-1 text-[13px] text-[var(--color-ink-500)]">
                    {o.note}
                  </div>
                </div>
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
      블로그와 인스타는 &lsquo;인지&rsquo;까지만 만듭니다. 그 퍼널의 마지막 —
      홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 등록 관리까지 10to10이
      전부 준비합니다. 원장님은{" "}
      <strong className="text-[var(--color-ink-950)]">개최와 강연만</strong>{" "}
      하시면 됩니다.
    </p>
  );
}

/** 현장 사진을 배경으로 쓰는 CTA 카드 — 증거와 행동을 한 프레임에 */
function PhotoCtaCard() {
  return (
    <div className="relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] md:min-h-[480px]">
      <Image
        src="/info-session/01-hall-wide.jpg"
        alt="설명회 현장 — 학부모로 가득 찬 강의실"
        fill
        sizes="(min-width: 768px) 42vw, 100vw"
        className="object-cover"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5"
      />
      <span className="micro-label absolute left-4 top-4 rounded-[var(--radius-badge)] bg-[var(--color-ink-950)]/80 px-2.5 py-1.5 text-white">
        실제 현장 · 2026.02
      </span>
      <div className="relative p-6 md:p-7">
        <div className="flex items-start gap-2 text-white">
          <span aria-hidden className="mt-0.5 font-bold text-[var(--color-mint-500)]">✓</span>
          <p className="text-[15px] leading-snug">
            <strong>모객 보장</strong> — 신청 20명을 못 채우면, 부족한 만큼
            돌려드립니다.
          </p>
        </div>
        <a
          href={COMPANY.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-lg font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
        >
          <KakaoSymbol size={20} />
          카톡으로 3분 상담
        </a>
        <div className="mt-2.5 flex items-center justify-between text-[13px] text-white/75">
          <span>평균 응답 30분 · 영업 전화 없음</span>
          <Link
            href="/stage"
            className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
          >
            자세히 보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
