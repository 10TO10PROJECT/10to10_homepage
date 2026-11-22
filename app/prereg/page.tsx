import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { PreregForm } from "@/components/forms/PreregForm";
import { Emph } from "@/components/sections/home/Emph";
import { PREREG_PAGE } from "@/lib/content/home";
import { isPreregOpen } from "@/lib/prereg";

const TITLE = PREREG_PAGE.title;
const DESCRIPTION = PREREG_PAGE.description;

// openGraph는 레이아웃 값을 통째로 덮으므로 링크 공유(카카오톡 등)에 쓰이는 필드를 여기서 모두 적음.
// 썸네일은 루트 opengraph-image.png — openGraph를 덮으면 자동 상속이 끊기므로 parent에서 images를 이어받음
export async function generateMetadata(
  _props: PageProps<"/prereg">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { openGraph } = await parent;
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/prereg" },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "/prereg",
      siteName: "10to10",
      locale: "ko_KR",
      type: "website",
      images: openGraph?.images,
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  };
}

/**
 * 앱 사전 예약 전용 페이지 (11/22 CEO: 인스타 프로필 링크로 들어오면 휴대폰에서 메인의 사전 예약 위치로 바로 가지지 않음).
 * 채널 주소(10to10.kr/?utm_source=insta 등)는 next.config의 리디렉트로 여기로 온다 — 유입은 PreregForm이 주소의 utm_source로 기록.
 * 휴대폰 첫 화면에 제목·한 문단·폼 시작이 함께 보이게: 애니메이션 없이 바로 보인다. 옛 주소의 해시(#prereg)가 따라와도
 * 이 페이지엔 그 id가 없어 스크롤 없이 맨 위(상단 띠부터)가 그대로 보인다.
 * 사이트 틀은 메인처럼 어둡게(lib/site-chrome.ts), 하단 바·카톡 버튼은 띄우지 않음(lib/sticky-cta.ts, KakaoFab) — 폼에만 집중.
 */
export default function PreregPage() {
  const P = PREREG_PAGE;
  const open = isPreregOpen();
  return (
    <div className="m-dark -mt-16 bg-[var(--color-onyx)] pt-16 text-[var(--color-ivory)]">
      <section aria-labelledby="prereg-title" className="pt-6 pb-20 md:pt-16 md:pb-28">
        <div className="m-wrap grid gap-6 lg:grid-cols-[1fr_460px] lg:items-center lg:gap-16">
          <div>
            <p className="m-eyebrow">{P.eyebrow}</p>
            <h1
              id="prereg-title"
              className="m-heading mt-2 whitespace-pre-line text-[clamp(1.6rem,3.4vw,2.65rem)] text-[var(--color-ivory)]"
            >
              {P.headline}
            </h1>
            <p className="mt-3 max-w-md break-keep text-[15px] leading-[1.6] text-[var(--color-ash)] md:mt-5 md:text-[18px]">
              <Emph text={P.sub} />
            </p>
          </div>
          <div className="rounded-[12px] bg-[var(--color-graphite)] p-5 md:p-8">
            {open ? (
              <PreregForm />
            ) : (
              <p className="break-keep text-[15px] leading-[1.6] text-[var(--color-ash)]">
                {P.closed}{" "}
                <Link href="/" className="text-[var(--color-mint-500)] underline-offset-4 hover:underline">
                  메인으로
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
