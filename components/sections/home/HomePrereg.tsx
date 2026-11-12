import { FadeIn } from "@/components/motion/FadeIn";
import { PreregForm } from "@/components/forms/PreregForm";
import { HOME_PREREG } from "@/lib/content/home";

/**
 * 앱 사전 예약 — 10to10 STAGE 장면 다음. 왼쪽 안내 + 오른쪽 그래파이트 카드 폼.
 * 저장소가 연결된 배포에서만 보인다(app/page.tsx의 isPreregOpen). 다른 곳의 '앱 사전 예약하기'는 #prereg로 온다.
 */
export function HomePrereg() {
  const P = HOME_PREREG;
  return (
    <section id="prereg" aria-labelledby="prereg-title" className="scroll-mt-20 py-[72px] md:py-28">
      <div className="m-wrap grid items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-16">
        <FadeIn>
          <p className="m-eyebrow">{P.eyebrow}</p>
          <h2 id="prereg-title" className="m-heading mt-3 whitespace-pre-line text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">
            {P.headline}
          </h2>
          <p className="mt-5 max-w-md break-keep text-[16px] leading-[1.6] text-[var(--color-ash)] md:text-[18px]">{P.sub}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-[12px] bg-[var(--color-graphite)] p-6 md:p-8">
            <PreregForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
