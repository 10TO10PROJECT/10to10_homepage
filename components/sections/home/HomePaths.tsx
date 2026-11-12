import Image from "next/image";
import Link from "next/link";
import { RiseIn } from "@/components/motion/RiseIn";
import { PhoneFeedMock } from "@/components/sections/platform/PhoneFeedMock";
import { HOME_PATHS } from "@/lib/content/home";

/**
 * 갈림길 — 히어로 바로 아래(히어로 끝에 겹쳐 올라와 첫 화면에서도 윗부분이 보임).
 * 히어로 문장의 '모으고'·'엽니다'에 밑줄이 그어진 뒤 카드가 떠오르고(RiseIn, 스크롤과 무관), 누구에게 무엇을 해 드리는지로 받는다:
 * 학부모·학생에게는 모은 정보를 '챙겨 드립니다'(/platform), 원장님께는 설명회를 '열어 드립니다'(/stage).
 * 템플릿 그래파이트 카드: 12px 모서리 · 32px 안쪽 여백 · 그림자 없음 · 카드 전체가 링크(올리면 한 단계 밝아짐).
 */
export function HomePaths() {
  const { app, stage } = HOME_PATHS;
  return (
    <section id="paths" aria-label="어떤 분이신가요" className="relative z-10 -mt-28 pb-6 md:-mt-36">
      <div className="m-wrap grid gap-3 md:grid-cols-2">
        <RiseIn delay={1.05} className="h-full">
          <PathCard path={app}>
            <div className="relative h-[210px] overflow-hidden rounded-[12px] bg-[var(--color-onyx)]/60">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(80,227,194,0.22)_0%,rgba(80,227,194,0)_70%)]"
              />
              <div aria-hidden className="pointer-events-none relative origin-top scale-[0.82] pt-6">
                <PhoneFeedMock className="[&>div]:shadow-none [&_figcaption]:hidden" />
              </div>
              <span className="absolute top-3 right-3 rounded-full bg-white/[0.08] px-2.5 py-1 text-[12px] text-[var(--color-ash)]">
                화면 예시
              </span>
            </div>
          </PathCard>
        </RiseIn>
        <RiseIn delay={1.2} className="h-full">
          <PathCard path={stage}>
            <figure className="relative h-[210px] overflow-hidden rounded-[12px]">
              <Image src={stage.photo.src} alt={stage.photo.alt} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(23,23,33,0)_0%,rgba(23,23,33,0.8)_100%)] px-4 pt-8 pb-3 text-[12px] text-[var(--color-ivory)]/85">
                {stage.photo.caption}
              </figcaption>
            </figure>
          </PathCard>
        </RiseIn>
      </div>
    </section>
  );
}

type Path = (typeof HOME_PATHS)[keyof typeof HOME_PATHS];

function PathCard({ path, children }: { path: Path; children: React.ReactNode }) {
  return (
    <Link
      href={path.href}
      className="group flex h-full flex-col rounded-[12px] bg-[var(--color-graphite)] p-6 transition-colors hover:bg-[#232331] md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[14px] text-[var(--color-ash)]">{path.who}</p>
          {/* 무엇을(윗줄) + 해 드립니다(아랫줄, 민트 밑줄) */}
          <p className="m-display mt-2 text-[32px] leading-[1.18] text-[var(--color-ivory)] md:text-[40px]">
            <span className="block">{path.lead}</span>
            <span className="relative inline-block">
              {path.keyword}
              <span aria-hidden className="absolute right-0 -bottom-[0.08em] left-0 h-[0.08em] rounded-full bg-[var(--color-mint-500)]" />
            </span>
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-[var(--color-ivory)] transition group-hover:translate-x-0.5 group-hover:border-[var(--color-mint-500)] group-hover:bg-[var(--color-mint-500)] group-hover:text-[var(--color-ink-950)]"
        >
          →
        </span>
      </div>

      <p className="mt-5 text-[15px] text-[var(--color-mint-500)]">{path.product}</p>
      <h2 className="m-heading mt-1.5 whitespace-pre-line text-[22px] text-[var(--color-ivory)] md:text-[26px]">{path.title}</h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[14px] text-[var(--color-ash)]">
        {path.points.map((p) => (
          <li key={p} className="flex items-center gap-1.5">
            <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-mint-500)]" />
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-6 hidden md:block">{children}</div>

      <p className="mt-6 text-[15px] text-[var(--color-ivory)] md:mt-7">
        {path.cta} <span aria-hidden className="inline-block transition group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}
