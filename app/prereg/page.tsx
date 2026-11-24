import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PreregForm } from "@/components/forms/PreregForm";
import { Emph } from "@/components/sections/home/Emph";
import { PREREG_PAGE } from "@/lib/content/home";
import { isPreregOpen } from "@/lib/prereg";

const TITLE = PREREG_PAGE.title;
const DESCRIPTION = PREREG_PAGE.description;

// openGraph는 레이아웃 값을 통째로 덮으므로 링크 공유(카카오톡 등)에 쓰이는 필드를 여기서 모두 적음.
// 썸네일은 같은 폴더 opengraph-image.png(11/24 CEO: 출시 알림 페이지 전용 썸네일) — 파일이 메타 객체보다 우선
export const metadata: Metadata = {
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
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/**
 * 앱 출시 알림 전용 페이지(구 '사전 예약', 11/22 CEO: 인스타 프로필 링크로 들어오면 휴대폰에서 메인의 신청 위치로 바로 가지지 않음).
 * 채널 주소(10to10.kr/?utm_source=insta 등)는 next.config의 리디렉트로 여기로 온다 — 유입은 PreregForm이 주소의 utm_source로 기록.
 * 11/23 CEO: 제목 → 신청자 혜택 → 앱 화면 1장과 설명 3줄 → 폼. 휴대폰에선 앱 화면을 작게 설명 옆에 두어 폼이 너무 밀리지 않게.
 * 애니메이션 없이 바로 보인다. 옛 주소의 해시(#prereg)가 따라와도 이 페이지엔 그 id가 없어 스크롤 없이 맨 위(상단 띠부터)가 보인다.
 * 사이트 틀은 메인처럼 어둡게(lib/site-chrome.ts), 하단 바·카톡 버튼은 띄우지 않음(lib/sticky-cta.ts, KakaoFab) — 폼에만 집중.
 */
export default function PreregPage() {
  const P = PREREG_PAGE;
  const open = isPreregOpen();
  return (
    <div className="m-dark -mt-16 bg-[var(--color-onyx)] pt-16 text-[var(--color-ivory)]">
      <section aria-labelledby="prereg-title" className="pt-6 pb-20 md:pt-16 md:pb-28">
        <div className="m-wrap grid gap-6 lg:grid-cols-[1fr_460px] lg:items-start lg:gap-16">
          <div>
            <p className="m-eyebrow">{P.eyebrow}</p>
            <h1
              id="prereg-title"
              className="m-heading mt-2 whitespace-pre-line text-[clamp(1.6rem,3.4vw,2.65rem)] text-[var(--color-ivory)]"
            >
              {P.headline}
            </h1>
            <p className="mt-2 break-keep text-[15px] leading-[1.6] text-[var(--color-ash)] md:mt-4 md:text-[18px]">
              <Emph text={P.sub} />
            </p>

            <div className="mt-4 max-w-lg rounded-[12px] border border-[var(--color-mint-500)]/30 bg-[var(--color-mint-500)]/[0.08] px-4 py-3 md:mt-6 md:px-5 md:py-4">
              <p className="text-[13px] font-semibold text-[var(--color-mint-500)]">{P.benefitLabel}</p>
              <p className="mt-1 break-keep text-[15px] leading-[1.55] text-[var(--color-ivory)] md:text-[17px]">{P.benefit}</p>
            </div>

            <figure className="mt-5 grid max-w-lg grid-cols-[112px_1fr] items-center gap-4 md:mt-8 md:grid-cols-[180px_1fr] md:gap-6">
              <div className="overflow-hidden rounded-[18px] border-[3px] border-white/15 bg-white md:rounded-[26px] md:border-4">
                <Image
                  src={P.shot.src}
                  alt={P.shot.alt}
                  width={477}
                  height={758}
                  preload
                  sizes="(min-width: 768px) 180px, 112px"
                  className="block h-auto w-full"
                />
              </div>
              <ul className="space-y-3 md:space-y-4">
                {P.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 break-keep text-[14px] leading-[1.5] text-[var(--color-ivory)] md:text-[16px]">
                    <span aria-hidden className="mt-[3px] text-[12px] text-[var(--color-mint-500)] md:mt-1">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <figcaption className="col-span-2 text-[12px] text-[var(--color-ash)] md:text-[13px]">{P.shot.caption}</figcaption>
            </figure>
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
