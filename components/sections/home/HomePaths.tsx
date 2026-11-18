import Image from "next/image";
import Link from "next/link";
import { RiseIn } from "@/components/motion/RiseIn";
import { Symbol } from "@/components/brand/Symbol";
import { HOME_ENGINE, HOME_PATHS } from "@/lib/content/home";
import { ChalkUnderline } from "@/components/sections/home/ChalkUnderline";

/**
 * 갈림길 — 히어로 바로 아래(히어로 끝에 겹쳐 올라와 첫 화면에서도 윗부분이 보임).
 * 히어로 문장의 '모으고'·'엽니다'에 밑줄이 그어진 뒤 카드가 떠오르고(RiseIn, 스크롤과 무관), 누구에게 무엇을 해 드리는지로 받는다:
 * 학부모·학생에게는 모은 정보를 '챙겨 드립니다'(/platform), 원장님께는 설명회를 '열어 드립니다'(/stage).
 * 템플릿 그래파이트 카드: 12px 모서리 · 32px 안쪽 여백 · 그림자 없음 · 카드 전체가 링크(올리면 한 단계 밝아짐).
 * 11/18 CEO: 카드마다 그림이 옆·배경으로 보이게(휴대폰 포함 — 전엔 넓은 화면에서만 보였음).
 *  - 앱: 텐투텐 로고가 엔진이 되어, 들어오는 소식 가운데 학년·동네에 맞는 것만 골라 내보내는 그림(AI 엄선) + 배경에 큰 심볼
 *  - STAGE: 우리가 진행한 설명회 현장 사진 콜라주(2월 콜라보 큰 칸 + 10월 리버스 두 칸) + 배경에 현장 사진을 옅게
 */
export function HomePaths() {
  const { app, stage } = HOME_PATHS;
  return (
    <section id="paths" aria-label="어떤 분이신가요" className="relative z-10 -mt-28 pb-6 md:-mt-36">
      <div className="m-wrap grid gap-3 md:grid-cols-2">
        <RiseIn delay={1.05} className="h-full">
          <PathCard
            path={app}
            backdrop={
              <>
                <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_100%,rgba(80,227,194,0.14)_0%,rgba(80,227,194,0)_70%)]" />
                <Symbol
                  variant="mint"
                  size={360}
                  role="presentation"
                  aria-label={undefined}
                  className="absolute -right-16 -bottom-24 h-auto w-[300px] opacity-[0.07] md:w-[360px]"
                />
              </>
            }
          >
            <CurationVisual />
          </PathCard>
        </RiseIn>
        <RiseIn delay={1.2} className="h-full">
          <PathCard
            path={stage}
            backdrop={
              <>
                <Image src={stage.photo.src} alt="" fill sizes="(min-width: 768px) 600px, 100vw" className="object-cover opacity-[0.16]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,42,0.55)_0%,rgba(30,30,42,0.92)_70%)]" />
              </>
            }
          >
            <StageCollage />
          </PathCard>
        </RiseIn>
      </div>
    </section>
  );
}

type Path = (typeof HOME_PATHS)[keyof typeof HOME_PATHS];

function PathCard({ path, backdrop, children }: { path: Path; backdrop?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={path.href}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[12px] bg-[var(--color-graphite)] p-6 transition-colors hover:bg-[#232331] md:p-8"
    >
      {backdrop && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {backdrop}
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[14px] text-[var(--color-ash)]">{path.who}</p>
          {/* 무엇을(윗줄) + 해 드립니다(아랫줄, 민트 밑줄) */}
          <p className="m-display mt-2 text-[32px] leading-[1.18] text-[var(--color-ivory)] md:text-[40px]">
            <span className="block">{path.lead}</span>
            <span className="relative inline-block">
              {path.keyword}
              <ChalkUnderline when="view" delay={0.15} />
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

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-[15px] text-[var(--color-ivory)] md:mt-7">
        {path.cta} <span aria-hidden className="inline-block transition group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}

/**
 * 앱 카드 그림 — 텐투텐 AI 엄선 엔진: 왼쪽에서 들어오는 소식 가운데 학년·동네에 맞는 것만 오른쪽으로 내보낸다.
 * 소식·기준은 메인 엔진 장면과 같은 값(HOME_ENGINE)이라 '엄선'이 장면과 어긋나지 않는다. 장식이라 읽기 도구에선 숨김.
 */
function CurationVisual() {
  const picked = HOME_ENGINE.chips.filter((c) => c.pass).slice(0, 2);
  const dropped = HOME_ENGINE.chips.filter((c) => !c.pass).slice(0, 2);
  const incoming = [dropped[0], picked[0], dropped[1]];
  return (
    <div aria-hidden className="relative h-[196px] overflow-hidden rounded-[12px] bg-[var(--color-onyx)]/70 md:h-[220px]">
      <div className="absolute inset-0 bg-[radial-gradient(40%_65%_at_50%_45%,rgba(80,227,194,0.2)_0%,rgba(80,227,194,0)_100%)]" />
      <p className="absolute top-2.5 left-3 flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-mint-500)] md:top-3 md:left-4 md:text-[12px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-500)]" />
        {HOME_ENGINE.name}
      </p>
      <div className="relative grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2.5 px-3 pt-8 pb-9 md:gap-5 md:px-5">
        <ul className="min-w-0 space-y-1.5 md:space-y-2">
          {incoming.map((c) => (
            <MiniChip key={c.title} chip={c} />
          ))}
        </ul>
        <div className="relative flex h-[68px] w-[68px] items-center justify-center md:h-[84px] md:w-[84px]">
          <svg
            viewBox="0 0 100 100"
            className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] motion-safe:animate-[spin_26s_linear_infinite]"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="var(--color-mint-500)" strokeOpacity={0.45} strokeWidth="1" strokeDasharray="6 4" />
          </svg>
          <span className="absolute inset-0 rounded-full bg-[var(--color-graphite)] ring-1 ring-[var(--color-mint-500)]/50" />
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(60%_60%_at_50%_45%,rgba(80,227,194,0.25)_0%,rgba(80,227,194,0)_100%)]" />
          <Symbol variant="mint" size={34} role="presentation" aria-label={undefined} className="relative h-auto w-[28px] md:w-[34px]" />
        </div>
        <ul className="min-w-0 space-y-1.5 md:space-y-2">
          {picked.map((c) => (
            <MiniChip key={c.title} chip={c} />
          ))}
        </ul>
      </div>
      <p className="absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-onyx)] px-2.5 py-0.5 text-[11px] text-[var(--color-ivory)] ring-1 ring-[var(--color-mint-500)]/45 md:text-[12px]">
        {HOME_ENGINE.criteria.join(" · ")} 맞춤
      </p>
    </div>
  );
}

type EngineChip = (typeof HOME_ENGINE.chips)[number];

function MiniChip({ chip }: { chip: EngineChip }) {
  return (
    <li
      className={`rounded-[8px] bg-[var(--color-graphite)] px-2 py-1.5 ring-1 md:px-2.5 ${
        chip.pass ? "ring-[var(--color-mint-500)]/40" : "opacity-45 ring-white/[0.06]"
      }`}
    >
      <span className={`block truncate text-[10px] leading-none md:text-[11px] ${chip.pass ? "text-[var(--color-mint-500)]" : "text-[var(--color-ash)]"}`}>
        {chip.pass ? `✓ 맞춤 · ${chip.tag}` : `${chip.why} · ${chip.tag}`}
      </span>
      <span className="mt-1 block truncate text-[11px] leading-tight text-[var(--color-ivory)] md:text-[12px]">{chip.title}</span>
    </li>
  );
}

/** STAGE 카드 그림 — 우리가 진행한 설명회 현장: 2월 콜라보(큰 칸) + 10월 리버스 두 장(작은 칸) */
function StageCollage() {
  const { photo, morePhotos, collageCaption } = HOME_PATHS.stage;
  return (
    <figure className="relative grid h-[196px] grid-cols-[1.7fr_1fr] grid-rows-2 gap-1.5 overflow-hidden rounded-[12px] md:h-[220px]">
      <div className="relative row-span-2">
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 360px, 60vw" className="object-cover" />
      </div>
      {morePhotos.map((ph, i) => (
        <div key={ph.src} className="relative">
          <Image
            src={ph.src}
            alt={ph.alt}
            fill
            sizes="(min-width: 768px) 210px, 35vw"
            className={`object-cover ${i === 1 ? "object-[22%_35%]" : "object-[40%_60%]"}`}
          />
        </div>
      ))}
      <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(23,23,33,0)_0%,rgba(23,23,33,0.85)_100%)] px-4 pt-8 pb-3 text-[12px] text-[var(--color-ivory)]/85">
        {collageCaption}
      </figcaption>
    </figure>
  );
}
