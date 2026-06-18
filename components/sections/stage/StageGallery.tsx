import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { STAGE_GALLERY } from "@/lib/content/stage";

export function StageGallery() {
  const tall = STAGE_GALLERY.filter((g) => g.span === "tall");
  const square = STAGE_GALLERY.filter((g) => g.span === "square");

  return (
    <section className="py-24 md:py-32 bg-[var(--color-ink-50)]">
      <Container>
        <FadeIn className="mb-12 max-w-3xl">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            PORTFOLIO
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            이런 결과를
            <br />
            만들어 드립니다.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            성적 인증·강사 소개·시즌 특강·플레이스·앱 노출까지.
            <br className="hidden sm:inline" />
            학원 마케팅에 필요한 모든 자산을 한 팀이 일관된 톤으로 제작합니다.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tall.map((g) => (
            <StaggerItem key={g.src}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-white ring-1 ring-[var(--color-ink-300)]/40 shadow-sm">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-xs font-semibold text-white">
                  {g.label}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <StaggerChildren className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {square.map((g) => (
            <StaggerItem key={g.src}>
              <figure className="group relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-white ring-1 ring-[var(--color-ink-300)]/40 shadow-sm">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-xs font-semibold text-white">
                  {g.label}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <p className="mt-8 text-center text-sm text-[var(--color-ink-500)]">
          * 실제 운영 학원 사례 일부. 학원별 상황에 맞춰 톤·구성을 새로 설계해 드립니다.
        </p>
      </Container>
    </section>
  );
}
