import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { KakaoSymbol } from "@/components/ui/Button";
import { PillLink } from "@/components/sections/home/HomeButtons";
import {
  PLATFORM_AUDIENCE,
  PLATFORM_AUDIENCE_MEDIA,
  PLATFORM_INFO_ROOM_URL,
  PLATFORM_INSTAGRAM_URL,
} from "@/lib/content/platform";

/**
 * 학부모·학생 대상 카드(상단에 실제 현장·게시물 사진) + 원장님 안내 한 줄(STAGE로).
 * 11/18 메인 템플릿(Mercury 다크)으로: 그래파이트 카드 · 알약 외곽선 버튼(채운 민트는 마지막 CTA 하나만) · 캡션은 사진 위 그라데이션
 */
export function ForWhom() {
  const { parents, students } = PLATFORM_AUDIENCE;
  const media = PLATFORM_AUDIENCE_MEDIA;
  const cards = [
    {
      ...parents,
      media: <Image src={media.parents.src} alt="" fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />,
      caption: media.parents.caption,
      cta: (
        <PillLink href={PLATFORM_INFO_ROOM_URL} variant="ghost" external>
          <KakaoSymbol size={17} />
          동탄 교육·입시 정보방
        </PillLink>
      ),
    },
    {
      ...students,
      media: (
        <div className="grid h-full grid-cols-3 content-center gap-2.5 bg-[var(--color-onyx)] px-4 md:px-6">
          {media.students.posts.map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[10px] ring-1 ring-white/10">
              <Image src={src} alt="" fill sizes="(min-width: 768px) 180px, 30vw" className="object-cover" />
            </div>
          ))}
        </div>
      ),
      caption: media.students.caption,
      cta: (
        <PillLink href={PLATFORM_INSTAGRAM_URL} variant="ghost" external>
          인스타그램 보러 가기 <span aria-hidden>↗</span>
        </PillLink>
      ),
    },
  ];

  return (
    <section aria-label="학부모·학생에게" className="py-[72px] md:py-28">
      <div className="m-wrap">
        <FadeIn className="max-w-4xl">
          <p className="m-eyebrow">학부모·학생에게</p>
          <h2 className="m-heading mt-4 break-keep text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">
            앱 출시 이전에도,
            <br />
            저희는 교육 현장에서 양질의 정보를 전달해왔습니다.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {cards.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[var(--color-graphite)]">
                <figure className="relative">
                  <div aria-hidden className="relative aspect-[16/9] overflow-hidden bg-[var(--color-onyx)]">
                    {c.media}
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(23,23,33,0)_0%,rgba(23,23,33,0.85)_100%)] px-6 pt-10 pb-3 text-[12px] text-[var(--color-ivory)]/85 md:px-8">
                    {c.caption}
                  </figcaption>
                </figure>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="m-eyebrow">{c.label}</p>
                  <h3 className="m-heading mt-3 break-keep text-[22px] text-[var(--color-ivory)] md:text-[24px]">{c.title}</h3>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 break-keep text-[15px] leading-[1.6] text-[var(--color-ash)]">
                        <span aria-hidden className="text-[var(--color-mint-500)]">
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">{c.cta}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.15} className="mt-3">
          <p className="break-keep rounded-[12px] bg-[var(--color-graphite)] px-6 py-4 text-[15px] text-[var(--color-ash)] md:px-8">
            원장님이신가요? 학원 설명회 기획부터 모객·현장 운영까지는{" "}
            <Link href="/stage" className="font-semibold text-[var(--color-ivory)] underline decoration-[var(--color-mint-500)] underline-offset-4">
              텐투텐 STAGE
            </Link>
            에서 안내드립니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
