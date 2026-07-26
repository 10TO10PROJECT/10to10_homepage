import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * 에디토리얼 히어로 — 타이포가 지면을 지배하고, 듀오톤 사진 타일이
 * 디스플레이 행 사이에 끼어드는 브로드시트 문법 (DESIGN.md 번안).
 * 카피는 P1-F: 설명회 우선, AI 플랫폼은 서브 지위.
 */
export function Hero() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container size="wide">
        <FadeIn>
          <div className="micro-label text-[var(--color-ink-500)]">
            동네 학원 마케팅 파트너 · 10to10
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8">
          <h1 className="display-type text-[clamp(2.8rem,8.5vw,7rem)] text-[var(--color-ink-950)]">
            <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
              학원 설명회,
              <PhotoTile
                src="/info-session/01-hall-wide.jpg"
                alt="설명회 현장 — 학부모로 가득 찬 강의실"
              />
            </span>
            <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <PhotoTile
                src="/info-session/02-speaker-female.jpg"
                alt="설명회 연사 세션"
                className="hidden sm:inline-block"
              />
              원장님은
            </span>
            <span className="relative inline-block">
              <span className="relative z-10">발표만 하세요.</span>
              <span
                aria-hidden
                className="absolute inset-x-[-0.08em] bottom-[0.03em] z-0 h-[0.4em] bg-[var(--color-mint-500)]/70"
              />
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} className="mt-10">
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-ink-700)] md:text-xl">
            블로그도 인스타도 하는데 등록은 안 늘죠. 등록을 만드는 건 학부모가
            원장님을 직접 만나는 순간입니다 — 그 하루를 10to10 전담팀이 통째로
            만들어 드립니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.35} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href="/stage" variant="primary" size="lg">
            설명회 풀케어 보기
          </Button>
          <Link
            href="/platform"
            className="text-base font-medium text-[var(--color-ink-700)] underline decoration-[var(--color-ink-900)]/30 underline-offset-4 transition hover:text-[var(--color-ink-950)] hover:decoration-[var(--color-ink-950)]"
          >
            AI 플랫폼도 준비 중입니다 →
          </Link>
        </FadeIn>
        <FadeIn delay={0.45} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[var(--color-ink-700)]">
          <span className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-mint-600)]">4.32</span>
            설명회 만족도 / 5.0 (실측)
          </span>
          <span className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-mint-600)]">100%</span>
            재참석 의사
          </span>
          <span className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-mint-600)]">✓</span>
            모두의 창업 선정
          </span>
        </FadeIn>
      </Container>
    </section>
  );
}

function PhotoTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block h-[0.85em] w-[1.7em] shrink-0 overflow-hidden rounded-[var(--radius-img)] align-middle ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="240px"
        className="img-duotone object-cover"
        priority
      />
    </span>
  );
}
