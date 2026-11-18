import { FadeIn } from "@/components/motion/FadeIn";
import { KakaoSymbol } from "@/components/ui/Button";
import { PillLink } from "@/components/sections/home/HomeButtons";
import { HOME_CTA, HOME_PREREG } from "@/lib/content/home";
import { PLATFORM_INFO_ROOM_URL } from "@/lib/content/platform";

/**
 * 마무리 — 이야기를 끝까지 읽은 분께 두 갈래를 다시 한 번. 템플릿처럼 가운데 정렬 큰 제목 + 알약 버튼.
 * 채운 민트는 하나(학부모 정보방), 나머지는 외곽선 — 원장님 주 행동(견적 확인)은 헤더의 민트 버튼이 맡는다.
 */
export function HomeCta({ prereg = false }: { prereg?: boolean }) {
  return (
    <section className="pt-10 pb-28 md:pt-16 md:pb-36">
      <div className="m-wrap text-center">
        <FadeIn>
          <h2 className="m-display mx-auto whitespace-pre-line text-[clamp(2rem,4.6vw,3.4rem)] text-white">{HOME_CTA.headline}</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
          <PillLink href={PLATFORM_INFO_ROOM_URL} external>
            <KakaoSymbol size={17} />
            학부모·학생이라면 · 정보방 입장
          </PillLink>
          <PillLink href="/stage#estimate" variant="ghost">
            학원 원장님이라면 · 견적 확인 <span aria-hidden>→</span>
          </PillLink>
        </FadeIn>
        {prereg && (
          <FadeIn delay={0.15} className="mt-6">
            <a href="#prereg" className="text-[15px] text-[var(--color-ivory)] underline-offset-4 hover:underline">
              {HOME_PREREG.cta} <span aria-hidden>→</span>
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
