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
        "rounded-[var(--radius-lg)] border border-[var(--color-ink-300)] bg-white p-8",
        interactive &&
          "transition-all duration-300 hover:border-[var(--color-mint-500)] hover:shadow-[0_8px_32px_-12px_rgba(80,227,194,0.4)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
