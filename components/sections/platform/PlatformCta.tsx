import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button, KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Symbol } from "@/components/brand/Symbol";
import {
  PLATFORM_BETA_URL,
  PLATFORM_CTA_PHOTO,
  PLATFORM_INFO_ROOM_URL,
  PLATFORM_INSTAGRAM_URL,
} from "@/lib/content/platform";

/** 마무리 CTA — 출시 소식 받기(정보방·인스타). 웹 베타는 보조 링크. 카드 배경은 설명회 현장 사진 + 흰 심볼 */
export function PlatformCta() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="band-brand relative overflow-hidden rounded-[var(--radius-break)] px-7 py-14 text-center md:px-14 md:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <Image
                src={PLATFORM_CTA_PHOTO.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover opacity-25 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,243,228,0.92)_0%,rgba(165,238,236,0.8)_55%,rgba(163,227,255,0.55)_100%)]" />
              <Symbol
                variant="white"
                size={420}
                role="presentation"
                aria-hidden
                aria-label={undefined}
                className="absolute -bottom-28 -right-20 h-auto w-[260px] opacity-60 md:-bottom-36 md:-right-16 md:w-[420px]"
              />
              <Symbol
                variant="white"
                size={160}
                role="presentation"
                aria-hidden
                aria-label={undefined}
                className="absolute -left-10 -top-12 h-auto w-[110px] opacity-50 md:w-[160px]"
              />
            </div>
            <div className="relative">
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
          </div>
          <p className="mt-3 break-keep text-center text-[12px] text-[var(--color-ink-500)]">{PLATFORM_CTA_PHOTO.caption}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
