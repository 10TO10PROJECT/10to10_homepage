import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-sm)] border border-[var(--color-ink-900)]/15 bg-white p-8",
        interactive &&
          "transition-colors duration-300 hover:border-[var(--color-ink-900)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
