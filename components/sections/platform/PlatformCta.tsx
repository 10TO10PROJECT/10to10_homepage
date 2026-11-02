import { Container } from "@/components/ui/Container";
import { Button, KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  PLATFORM_BETA_URL,
  PLATFORM_INFO_ROOM_URL,
  PLATFORM_INSTAGRAM_URL,
} from "@/lib/content/platform";

/** 마무리 CTA — 출시 소식 받기(정보방·인스타). 웹 베타는 보조 링크 */
export function PlatformCta() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="band-brand rounded-[var(--radius-break)] px-7 py-14 text-center md:px-14 md:py-20">
            <h2 className="display-type text-3xl text-[var(--color-ink-950)] md:text-5xl">
              앱 출시 소식,
              <br />
              가장 먼저 알려 드릴게요.
            </h2>
            <p className="mx-auto mt-5 max-w-xl break-keep text-base leading-relaxed text-[var(--color-ink-700)] md:text-lg">
              학부모님은 정보방에서, 학생은 인스타그램에서 먼저 만나요.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={PLATFORM_INFO_ROOM_URL} variant="kakao" size="lg" external>
                <KakaoSymbol />
                학부모 정보방 입장하기
              </Button>
              <Button href={PLATFORM_INSTAGRAM_URL} variant="primary" size="lg" external>
                인스타그램 @10to10.kr
              </Button>
            </div>
            <a
              href={PLATFORM_BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block text-sm font-semibold text-[var(--color-ink-700)] underline underline-offset-4 hover:text-[var(--color-ink-950)]"
            >
              웹 베타 먼저 둘러보기 ↗
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
