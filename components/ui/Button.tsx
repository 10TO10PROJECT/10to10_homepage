import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "kakao";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonOnlyProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkOnlyProps = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean | string;
};

type Props = ButtonOnlyProps | LinkOnlyProps;

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-ink-950)] disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[var(--radius-btn)]";

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-7 text-lg",
};

const variants: Record<Variant, string> = {
  // 다크 필 — 시스템의 유일한 주력 CTA (D3)
  primary:
    "bg-[var(--color-ink-950)] text-white font-bold shadow-[var(--shadow-btn-dark)] hover:bg-black",
  secondary: "bg-white text-[var(--color-ink-900)] hairline hover:border-[var(--color-ink-900)]",
  ghost: "text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)]",
  outline:
    "bg-[var(--color-ink-50)] text-[var(--color-ink-900)] hover:bg-[var(--color-cloud)]",
  // 카카오 CTA 전용 — 기능적 컬러 예외 (T2)
  kakao:
    "bg-[var(--color-kakao)] text-[var(--color-ink-950)] font-bold hover:brightness-95",
};

/** 카카오 말풍선 심볼 — kakao 변형 버튼 안에서 라벨 앞에 사용 */
export function KakaoSymbol({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3C6.48 3 2 6.54 2 10.9c0 2.8 1.86 5.26 4.66 6.65-.15.52-.96 3.33-.99 3.55 0 0-.02.17.09.23.11.06.24.01.24.01.32-.04 3.66-2.4 4.24-2.81.57.08 1.16.13 1.76.13 5.52 0 10-3.54 10-7.9S17.52 3 12 3z" />
    </svg>
  );
}

export function Button(props: Props) {
  const variantKey = props.variant ?? "primary";
  const sizeKey = props.size ?? "md";
  const cls = cn(base, sizes[sizeKey], variants[variantKey], props.className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, download, children } = props;
    if (external || download) {
      return (
        <a
          href={href}
          className={cls}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
        >
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

  const { variant: _v, size: _s, className: _c, children, ...rest } = props as ButtonOnlyProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
