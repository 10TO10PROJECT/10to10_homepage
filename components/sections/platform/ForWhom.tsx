import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, KakaoSymbol } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  PLATFORM_AUDIENCE,
  PLATFORM_AUDIENCE_MEDIA,
  PLATFORM_INFO_ROOM_URL,
  PLATFORM_INSTAGRAM_URL,
} from "@/lib/content/platform";

/** 학부모·학생 대상 카드(상단에 실제 현장·게시물 사진) + 원장님 안내 한 줄(STAGE로) */
export function ForWhom() {
  const { parents, students } = PLATFORM_AUDIENCE;
  const media = PLATFORM_AUDIENCE_MEDIA;
  const cards = [
    {
      ...parents,
      media: (
        <Image
          src={media.parents.src}
          alt=""
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover"
        />
      ),
      caption: media.parents.caption,
      cta: (
        <Button href={PLATFORM_INFO_ROOM_URL} variant="kakao" size="md" external>
          <KakaoSymbol />
          동탄 교육·입시 정보방
        </Button>
      ),
    },
    {
      ...students,
      media: (
        <div className="grid h-full grid-cols-3 content-center gap-2.5 bg-[var(--color-paper-dim)] px-4 md:px-6">
          {media.students.posts.map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[10px] shadow-card">
              <Image src={src} alt="" fill sizes="(min-width: 768px) 180px, 30vw" className="object-cover" />
            </div>
          ))}
        </div>
      ),
      caption: media.students.caption,
      cta: (
        <Button href={PLATFORM_INSTAGRAM_URL} variant="secondary" size="md" external>
          인스타그램 보러 가기 ↗
        </Button>
      ),
    },
  ];

  return (
    <section className="band-wash py-20 md:py-28">
      <Container size="wide">
        <FadeIn className="mb-12 max-w-5xl">
          <div className="micro-label text-[var(--color-ink-500)]">For Parents & Students</div>
          <h2 className="display-type mt-4 break-keep text-3xl text-[var(--color-ink-950)] md:text-5xl">
            앱 출시 이전에도,
            <br />
            저희는 교육 현장에서 양질의 정보를 전달해왔습니다.
          </h2>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-card">
                <figure>
                  <div aria-hidden className="relative aspect-[16/9] overflow-hidden bg-[var(--color-ink-100)]">
                    {c.media}
                  </div>
                  <figcaption className="px-7 pt-2.5 text-[12px] text-[var(--color-ink-500)] md:px-9">{c.caption}</figcaption>
                </figure>
                <div className="flex flex-1 flex-col px-7 pb-7 pt-5 md:px-9 md:pb-9">
                  <div className="micro-label text-[var(--color-mint-700)]">{c.label}</div>
                  <h3 className="mt-3 break-keep text-2xl font-bold text-[var(--color-ink-950)]">{c.title}</h3>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 break-keep text-[15px] leading-relaxed text-[var(--color-ink-700)]">
                        <span className="text-[var(--color-mint-600)]">✓</span>
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
        <FadeIn delay={0.15} className="mt-6">
          <p className="break-keep rounded-[var(--radius-card)] bg-white px-6 py-4 shadow-card text-[15px] text-[var(--color-ink-700)]">
            원장님이신가요? 학원 설명회 기획부터 모객·현장 운영까지는{" "}
            <Link href="/" className="font-bold text-[var(--color-ink-950)] underline underline-offset-4">
              텐투텐 STAGE
            </Link>
            에서 안내드립니다.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
