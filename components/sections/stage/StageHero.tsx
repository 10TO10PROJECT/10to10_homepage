import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { StageLogo } from "@/components/brand/StageLogo";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * 풀블리드 현장 사진 히어로 — 사진 위 좌측 헤드라인 + 우측 실적 카드.
 * 신뢰 신호(정부 프로그램·실측 지표)를 첫 화면에 모은다. 모바일은 헤드라인 → 실적 카드 순 스택.
 */
export function StageHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink-950)]">
      <Image
        src="/info-session/01-hall-wide.jpg"
        alt="2026년 2월 콜라보 설명회 현장 — 학부모로 가득 찬 강의실"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,12,0.86)_0%,rgba(11,12,12,0.66)_48%,rgba(11,12,12,0.28)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(80,227,194,0)_0%,rgba(80,227,194,0.22)_100%)]"
      />

      <Container size="wide" className="relative">
        <div className="grid gap-10 pt-20 pb-16 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-14 md:pt-28 md:pb-24">
          <div>
            <FadeIn>
              <div className="flex flex-wrap items-center gap-3">
                <StageLogo height={20} tone="dark" />
                <span className="micro-label text-white/70">학원 설명회 풀케어 서비스</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="display-type text-[clamp(2.3rem,5.2vw,3.8rem)] text-white">
                설명회 하루가
                <br />
                학원의 <span className="hl hl-solid text-[var(--color-ink-950)]">한 학기</span>를 바꿉니다.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-6">
              <p className="max-w-2xl break-keep text-lg font-semibold leading-relaxed text-white md:text-xl">
                학부모가 직접 찾아오는 설명회는, 등록으로 이어지는 가장 확실한 길입니다.
              </p>
              <p className="mt-3 max-w-2xl break-keep text-base leading-relaxed text-white/75 md:text-lg">
                홍보·모객, 연사 섭외, 홍보물 제작, 현장 운영, 사후 등록 관리까지 전담팀이 대신합니다.
              </p>
            </FadeIn>
            <FadeIn delay={0.28} className="mt-8 flex flex-wrap gap-3">
              <a
                href="?service=info_session#contact"
                className="inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-white px-7 text-base font-bold text-[var(--color-ink-950)] transition hover:bg-white/90"
              >
                견적 문의하기 <span aria-hidden>→</span>
              </a>
              <a
                href="#diagnosis"
                className="inline-flex h-13 min-h-12 items-center justify-center rounded-[var(--radius-btn)] border border-white/70 px-7 text-base font-semibold text-white transition hover:bg-white/10"
              >
                무료 모객 진단
              </a>
            </FadeIn>
            <FadeIn delay={0.34} className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/12 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/25">
                중소벤처기업부 「모두의 창업」 3라운드 · 상위 0.3%
              </span>
              <span className="rounded-full bg-white/12 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/25">
                평균 응답 30분 · 영업 전화 없음
              </span>
            </FadeIn>
          </div>

          <FadeIn delay={0.22}>
            <ProofCard />
          </FadeIn>
        </div>
        <p className="relative pb-5 text-[12px] font-medium text-white/60">
          배경 사진: 2026년 2월 콜라보 설명회 현장
        </p>
      </Container>
    </section>
  );
}

function ProofCard() {
  return (
    <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-elevated md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-bold text-[var(--color-ink-950)]">실제로 열어 본 설명회</span>
        <span className="rounded-full bg-[var(--color-mint-wash)] px-3 py-1 text-[12px] font-bold text-[var(--color-mint-600)]">
          실측 데이터
        </span>
      </div>

      <div className="mt-5 border-t border-[var(--color-cloud)] pt-5">
        <div className="text-[13px] font-semibold text-[var(--color-ink-500)]">2026.02 · 동탄 콜라보 설명회</div>
        <dl className="mt-3 grid grid-cols-3 gap-3">
          <ProofStat value="37" unit="명" label="신청" />
          <ProofStat value="4.25" label="만족도 /5" />
          <ProofStat value="95.2" unit="%" label="추천 의사*" />
        </dl>
      </div>

      <div className="mt-5 border-t border-[var(--color-cloud)] pt-5">
        <div className="text-[13px] font-semibold text-[var(--color-ink-500)]">2026.10.09 · 고등 수학 설명회</div>
        <dl className="mt-3 grid grid-cols-3 gap-3">
          <ProofStat value="4.8" label="도움 정도 /5" />
          <ProofStat value="9.0" label="추천 /10" />
          <ProofStat value="0" unit="건" label="비추천" />
        </dl>
      </div>

      <p className="mt-5 rounded-[var(--radius-img)] bg-[var(--color-paper-dim)] px-4 py-3 text-[14px] leading-relaxed text-[var(--color-ink-700)]">
        약속한 인원의 80%를 못 채우면 대행료의 절반을 돌려드리는{" "}
        <strong className="text-[var(--color-ink-950)]">모객 보장</strong>까지.
      </p>
      <p className="mt-3 text-[12px] leading-relaxed text-[var(--color-ink-500)]">
        * 2월 학부모 응답 21명 중 4~5점 비율 · 10월은 현장 설문 5건 기준
      </p>
    </div>
  );
}

function ProofStat({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div>
      <dd className="display-type text-[28px] text-[var(--color-ink-950)]">
        {value}
        {unit && <span className="ml-0.5 text-[15px] font-bold">{unit}</span>}
      </dd>
      <dt className="mt-1 text-[12px] font-semibold text-[var(--color-ink-500)]">{label}</dt>
    </div>
  );
}
