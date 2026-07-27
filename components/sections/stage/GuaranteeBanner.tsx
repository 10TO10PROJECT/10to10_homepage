import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_GUARANTEE } from "@/lib/content/stage";

const GUARANTEE_TERMS = [
  { label: "목표 신청 인원", value: "20명" },
  { label: "미달 시 환급", value: "1인당 5만 원" },
  { label: "환급 상한", value: "대행료의 50%" },
] as const;

/**
 * 심리 1 — 손실 회피가 최대 전환 장치. 주변 화이트 섹션과 대비되는 다크 블록 +
 * 대형 '20' 워터마크 + 보장 조건 스펙 패널 + 개런티 씰.
 */
export function GuaranteeBanner() {
  return (
    <section className="py-10 md:py-14">
      <Container size="wide">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[var(--radius-break)] bg-[var(--color-ink-900)] text-white">
            {/* 대형 숫자 워터마크 */}
            <div
              aria-hidden
              className="display-type pointer-events-none absolute -right-6 -top-14 select-none text-[16rem] leading-none text-white/[0.05] md:-top-24 md:text-[26rem]"
            >
              20
            </div>

            <div className="relative grid gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:gap-12 md:p-14">
              <div>
                <div className="flex items-center gap-3">
                  <span className="micro-label rounded-[var(--radius-badge)] bg-[var(--color-mint-500)] px-2.5 py-1.5 text-[var(--color-ink-950)]">
                    {STAGE_GUARANTEE.eyebrow}
                  </span>
                  <span className="micro-label text-white/50">10to10 Guarantee</span>
                </div>
                <h2 className="display-type mt-6 whitespace-pre-line text-3xl md:text-5xl">
                  신청 20명을 못 채우면,
                  {"\n"}
                  <span className="text-[var(--color-mint-500)]">
                    부족한 만큼 돌려드립니다.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-base">
                  모객을 저희가 책임지기 때문에 드릴 수 있는 약속입니다. 자체
                  최다 모객 실적 47명 — 목표 20명은 보수적인 숫자입니다.
                </p>

                {/* 개런티 씰 */}
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-mint-500)]/50 py-2 pl-2 pr-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-mint-500)] text-lg font-bold text-[var(--color-ink-950)]">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-white/90">
                    계약서에 명시되는 환급 조건
                  </span>
                </div>
              </div>

              {/* 보장 조건 스펙 패널 */}
              <div className="flex flex-col justify-center rounded-[var(--radius-card)] border border-white/10 bg-white/[0.05] p-6 md:p-7">
                <div className="micro-label text-white/50">보장 조건</div>
                <dl className="mt-4 divide-y divide-white/10">
                  {GUARANTEE_TERMS.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <dt className="text-sm text-white/65">{t.label}</dt>
                      <dd className="display-type text-xl text-white md:text-2xl">
                        {t.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[13px] leading-relaxed text-white/45">
                  세부 기준은 계약 시 안내드립니다.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
