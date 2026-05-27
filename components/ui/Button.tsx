import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
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
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-mint-600)] disabled:opacity-50 disabled:cursor-not-allowed select-none";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-[var(--radius-sm)]",
  md: "h-11 px-5 text-base rounded-[var(--radius-md)]",
  lg: "h-14 px-7 text-lg rounded-[var(--radius-md)]",
};

const variants: Record<Variant, string> = {
  primary: "bg-[var(--color-mint-500)] text-white hover:bg-[var(--color-mint-600)]",
  secondary: "bg-[var(--color-ink-900)] text-white hover:bg-black",
  ghost: "text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)]",
  outline:
    "border border-[var(--color-ink-300)] text-[var(--color-ink-900)] hover:border-[var(--color-mint-500)] hover:text-[var(--color-mint-600)]",
};

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
