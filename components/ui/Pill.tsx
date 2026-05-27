import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[var(--color-ink-100)] px-4 py-1.5 text-sm text-[var(--color-ink-700)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
