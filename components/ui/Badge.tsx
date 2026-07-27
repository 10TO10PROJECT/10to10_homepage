import { cn } from "@/lib/cn";

type Variant = "mint" | "dark" | "outline";

/**
 * 뱃지 = 시스템에서 민트가 허용되는 몇 안 되는 자리.
 * 민트 필 + ink-950 텍스트만 허용 (소형 민트 텍스트는 대비 미달로 금지).
 */
export function Badge({
  children,
  variant = "mint",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    mint: "bg-[var(--color-mint-500)] text-[var(--color-ink-950)]",
    dark: "bg-[var(--color-ink-900)] text-white",
    outline: "border border-[var(--color-cloud)] bg-white text-[var(--color-ink-700)]",
  };
  return (
    <span
      className={cn(
        "micro-label inline-flex items-center rounded-[var(--radius-badge)] px-2.5 py-1.5",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
