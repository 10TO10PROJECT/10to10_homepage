import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { KakaoSymbol } from "@/components/ui/Button";
import { Symbol } from "@/components/brand/Symbol";
import { PillLink } from "@/components/sections/home/HomeButtons";
import {
  PLATFORM_BETA_URL,
  PLATFORM_CTA_PHOTO,
  PLATFORM_INFO_ROOM_URL,
  PLATFORM_INSTAGRAM_URL,
} from "@/lib/content/platform";

/**
 * 마무리 CTA — 출시 소식 받기(정보방·인스타). 웹 베타는 보조 링크.
 * 11/18 메인 템플릿(Mercury 다크)으로: 메인 마무리(HomeCta)처럼 가운데 큰 제목 + 알약 버튼(채운 민트는 정보방 하나),
 * 그래파이트 판 뒤에 설명회 현장 사진을 어둡게 깔고 옅은 심볼
 */
export function PlatformCta() {
  return (
    <section aria-label="출시 소식 받기" className="pt-6 pb-28 md:pt-10 md:pb-36">
      <div className="m-wrap">
        <FadeIn>
          <div className="relative isolate overflow-hidden rounded-[12px] bg-[var(--color-graphite)] px-6 py-16 text-center md:px-14 md:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <Image src={PLATFORM_CTA_PHOTO.src} alt="" fill sizes="(min-width: 1024px) 1140px, 100vw" className="object-cover opacity-25" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,42,0.55)_0%,rgba(30,30,42,0.92)_75%)]" />
              <Symbol
                variant="mint"
                size={420}
                role="presentation"
                aria-hidden
                aria-label={undefined}
                className="absolute -right-20 -bottom-28 h-auto w-[260px] opacity-[0.05] md:-right-16 md:-bottom-36 md:w-[420px]"
              />
            </div>
            <h2 className="m-display mx-auto text-[clamp(2rem,4.6vw,3.4rem)] text-white">
              앱 출시 소식,
              <br />
              가장 먼저 알려 드릴게요.
            </h2>
            <p className="mx-auto mt-5 max-w-xl break-keep text-[16px] leading-[1.6] text-[var(--color-ash)] md:text-[18px]">
              학부모님은 정보방에서, 학생은 인스타그램에서 먼저 만나요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <PillLink href={PLATFORM_INFO_ROOM_URL} external>
                <KakaoSymbol size={17} />
                학부모 정보방 입장하기
              </PillLink>
              <PillLink href={PLATFORM_INSTAGRAM_URL} variant="ghost" external>
                인스타그램 @10to10.kr
              </PillLink>
            </div>
            <a
              href={PLATFORM_BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-[14px] text-[var(--color-ivory)]/85 underline underline-offset-4 hover:text-[var(--color-ivory)]"
            >
              웹 베타 먼저 둘러보기 ↗
            </a>
          </div>
          <p className="mt-3 break-keep text-center text-[12px] text-[var(--color-ash)]/80">{PLATFORM_CTA_PHOTO.caption}</p>
        </FadeIn>
      </div>
    </section>
  );
}
