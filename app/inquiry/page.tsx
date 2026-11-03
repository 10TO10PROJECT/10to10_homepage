import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const TITLE = "학원 문의 — 10to10";
const DESCRIPTION =
  "10to10은 두 가지 트랙으로 학원을 지원합니다. STAGE 설명회 풀케어와 텐투텐 앱 설명회 등록 문의를 트랙별로 안내합니다.";

// openGraph는 레이아웃 값을 통째로 덮으므로 링크 공유(카카오톡 등)에 쓰이는 필드를 여기서 모두 적음.
// 썸네일은 루트 opengraph-image.png — openGraph를 덮으면 자동 상속이 끊기므로 parent에서 images를 이어받음
export async function generateMetadata(
  _props: PageProps<"/inquiry">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { openGraph } = await parent;
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/inquiry" },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/inquiry",
      siteName: "10to10",
      locale: "ko_KR",
      type: "website",
      images: openGraph?.images,
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  };
}

export default function InquiryPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn className="max-w-3xl">
          <div className="micro-label text-[var(--color-ink-500)]">
            INQUIRY
          </div>
          <h1 className="display-type mt-4 text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-ink-950)]">
            어떤 문의를 하시나요?
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[var(--color-ink-700)] leading-relaxed">
            10to10은 두 가지 트랙으로 학원을 지원합니다.
            <br className="hidden sm:inline" />
            필요한 트랙을 선택해 주세요.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          <FadeIn delay={0.15}>
            <InquiryCard
              eyebrow="10to10 STAGE"
              title="학원 설명회 풀케어 문의"
              desc="전담팀이 학원 설명회를 기획·모객·자료 제작·현장 운영까지 풀케어합니다."
              bullets={[
                "모객 20명 → 등록 6명 = 예상 매출 720만 원",
                "만족도 4.25 / 5.0 · 재참석 의사 100%(4~5점 응답, 21명)",
                "합의 인원 80% 미달 시 대행료 반액 환급 — 모객 보장",
              ]}
              primary={{ href: "/#contact", label: "설명회 견적 문의하기" }}
              secondary={{ href: "/", label: "STAGE 자세히 보기" }}
              tone="mint"
            />
          </FadeIn>
          <FadeIn delay={0.25}>
            <InquiryCard
              eyebrow="텐투텐 앱"
              title="앱에 설명회 알리기"
              desc="학부모·학생이 학년과 동네에 맞춰 교육 소식을 받아 보는 텐투텐 앱입니다. 학원 설명회를 앱에 올리는 방법을 안내드립니다."
              bullets={[
                "학부모·학생용 학년·동네 맞춤 소식",
                "동네 설명회 모아보기 (업데이트 예정)",
                "신청은 학원의 신청 폼으로 바로 연결",
              ]}
              primary={{ href: "/#contact", label: "등록 문의하기" }}
              secondary={{ href: "/platform", label: "텐투텐 앱 자세히 보기" }}
              tone="ink"
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center text-sm text-[var(--color-ink-500)]">
          어떤 트랙인지 모르겠다면{" "}
          <Link
            href="/#contact"
            className="font-semibold text-[var(--color-ink-950)] underline decoration-[var(--color-ink-300)] underline-offset-4 hover:decoration-[var(--color-ink-950)]"
          >
            STAGE 문의 폼
          </Link>
          에 남겨주세요. 상담 단계에서 트랙을 함께 정해드립니다.
        </FadeIn>
      </Container>
    </section>
  );
}

function InquiryCard({
  eyebrow,
  phase,
  title,
  desc,
  bullets,
  primary,
  secondary,
  tone,
}: {
  eyebrow: string;
  phase?: string;
  title: string;
  desc: string;
  bullets: string[];
  primary: { href: string; label: string; external?: boolean };
  secondary: { href: string; label: string };
  tone: "mint" | "ink";
}) {
  const primaryCls =
    "inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-btn-dark)] transition hover:bg-black";

  const phaseBadgeCls =
    tone === "mint"
      ? "micro-label rounded-[var(--radius-badge)] bg-[var(--color-mint-500)] px-2 py-1 text-[var(--color-ink-950)]"
      : "micro-label rounded-[var(--radius-badge)] bg-[var(--color-ink-100)] px-2 py-1 text-[var(--color-ink-500)]";

  return (
    <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7 md:p-9 transition-colors hover:border-[var(--color-ink-500)]">
      <div className="flex items-center flex-wrap gap-2">
        <span className="micro-label text-[var(--color-ink-500)]">
          {eyebrow}
        </span>
        {phase && <span className={phaseBadgeCls}>{phase}</span>}
      </div>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-ink-900)]">
        {title}
      </h2>
      <p className="mt-4 text-[15px] md:text-base text-[var(--color-ink-700)] leading-relaxed">
        {desc}
      </p>
      <ul className="mt-6 space-y-2 text-sm text-[var(--color-ink-700)]">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-[var(--color-mint-600)] flex-shrink-0">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        {primary.external ? (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryCls}
          >
            {primary.label}
            <span aria-hidden>→</span>
          </a>
        ) : (
          <Link href={primary.href} className={primaryCls}>
            {primary.label}
            <span aria-hidden>→</span>
          </Link>
        )}
        <Link
          href={secondary.href}
          className="text-sm font-medium text-[var(--color-ink-500)] underline-offset-4 hover:text-[var(--color-ink-900)] hover:underline"
        >
          {secondary.label} →
        </Link>
      </div>
    </div>
  );
}
