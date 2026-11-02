import { Container } from "@/components/ui/Container";
import { Button, KakaoSymbol } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { PhoneFeedMock } from "@/components/sections/platform/PhoneFeedMock";
import {
  PLATFORM_HERO,
  PLATFORM_INFO_ROOM_URL,
  PLATFORM_INSTAGRAM_URL,
} from "@/lib/content/platform";

/** 텐투텐 앱 히어로 — 학부모·학생 대상. 왼쪽 카피 + 오른쪽 피드 화면 예시 */
export function PlatformHero() {
  return (
    <section className="band-wash pt-14 pb-20 md:pt-20 md:pb-24">
      <Container size="wide">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <div>
            <FadeIn>
              <Badge variant="outline">{PLATFORM_HERO.eyebrow}</Badge>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-6">
              <h1 className="display-type text-[clamp(2.1rem,5.2vw,3.75rem)] text-[var(--color-ink-950)]">
                흩어진 우리 동네 교육 정보,
                <br />
                학년에 맞춰 <span className="hl">한 곳에.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-6">
              <p className="max-w-xl break-keep text-lg leading-relaxed text-[var(--color-ink-700)] md:text-xl">
                {PLATFORM_HERO.sub}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-9 flex flex-wrap gap-3">
              <Button href={PLATFORM_INFO_ROOM_URL} variant="kakao" size="lg" external>
                <KakaoSymbol />
                학부모 정보방 입장하기
              </Button>
              <Button href={PLATFORM_INSTAGRAM_URL} variant="secondary" size="lg" external>
                인스타그램 @10to10.kr
              </Button>
            </FadeIn>
            <FadeIn delay={0.35} className="mt-7">
              <p className="break-keep text-[13px] text-[var(--color-ink-500)]">{PLATFORM_HERO.trust}</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <PhoneFeedMock />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
