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
        "rounded-[var(--radius-card)] border border-[var(--color-cloud)] bg-white p-7",
        interactive && "transition-colors duration-300 hover:border-[var(--color-ink-500)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
