import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * 메인 다크 랜딩 공통 조각 — 템플릿(Mercury) 규칙:
 * 버튼은 모두 알약(pill), 채운 버튼은 민트 하나(화면마다 주된 행동 하나), 보조는 아이보리 외곽선, 글자는 굵지 않게.
 */
type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "mint" | "ghost";
  external?: boolean;
  className?: string;
};

export function PillLink({ href, children, variant = "mint", external, className }: Props) {
  const cls = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] transition-colors md:text-base",
    variant === "mint"
      ? "bg-[var(--color-mint-500)] font-medium text-[var(--color-ink-950)] hover:bg-[#6BE9CD]"
      : "border border-[var(--color-ivory)]/75 font-normal text-[var(--color-ivory)] hover:border-[var(--color-ivory)] hover:bg-white/[0.06]",
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** 섹션 머리 — 민트 눈썹 + 굵지 않은 제목(480) + 아이보리 본문 */
export function SectionHead({
  eyebrow,
  headline,
  sub,
  center,
  className,
}: {
  eyebrow: string;
  headline: string;
  sub?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "mx-auto text-center", className)}>
      <p className="m-eyebrow">{eyebrow}</p>
      <h2 className="m-heading mt-4 whitespace-pre-line text-[clamp(1.85rem,3.4vw,2.65rem)] text-[var(--color-ivory)]">
        {headline}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 max-w-xl break-keep text-[16px] leading-[1.6] text-[var(--color-ash)] md:text-[18px]",
            center && "mx-auto",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
