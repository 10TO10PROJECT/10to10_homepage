import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * Breakthrough 이미지 — 섹션 사이의 숨. 오버레이 없는 원본 사진 + 대형 라디우스.
 * 사진 품질 미달 시 이 섹션을 제거하고 다음 섹션으로 바로 연결 (T3 폴백 규칙).
 */
export function BreakImage() {
  return (
    <section className="py-10 md:py-14">
      <Container size="wide">
        <FadeIn>
          <figure className="relative aspect-[16/8] overflow-hidden rounded-[var(--radius-break)] md:aspect-[21/8]">
            <Image
              src="/info-session/01-hall-wide.jpg"
              alt="10to10이 운영한 설명회 현장 — 학부모로 가득 찬 강의실"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              quality={75}
              className="object-cover"
            />
            <figcaption className="micro-label absolute bottom-4 left-4 rounded-[var(--radius-badge)] bg-[var(--color-ink-950)]/80 px-2.5 py-1.5 text-white">
              실제 운영 현장 · 2026.02
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </section>
  );
}
