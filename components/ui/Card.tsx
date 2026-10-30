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
        "rounded-[var(--radius-card)] bg-white p-7 shadow-card",
        interactive && "transition-shadow duration-300 hover:shadow-elevated",
        className,
      )}
    >
      {children}
    </div>
  );
}
