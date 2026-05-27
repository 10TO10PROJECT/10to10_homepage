import Link from "next/link";
import { Symbol } from "./Symbol";
import { Wordmark } from "./Wordmark";

interface LogoProps {
  variant?: "dark" | "mint" | "gradient" | "white";
  height?: number;
  href?: string | null;
  className?: string;
}

export function Logo({ variant = "dark", height = 28, href = "/", className }: LogoProps) {
  const symbolVariant = variant === "gradient" ? "gradient" : variant;
  const wordmarkVariant = variant === "gradient" ? "dark" : variant;

  const content = (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <Symbol variant={symbolVariant} size={height} />
      <Wordmark variant={wordmarkVariant} height={Math.round(height * 0.7)} />
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="10to10 홈으로">
        {content}
      </Link>
    );
  }
  return content;
}
