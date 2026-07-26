import { cn } from "@/lib/cn";

type Variant = "mint" | "dark" | "outline";

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
    mint: "bg-[var(--color-mint-100)] text-[var(--color-mint-600)]",
    dark: "bg-[var(--color-ink-950)] text-white",
    outline: "border border-[var(--color-ink-900)]/20 text-[var(--color-ink-700)]",
  };
  return (
    <span
      className={cn(
        "micro-label inline-flex items-center rounded-[var(--radius-xs)] px-3 py-1.5",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
