import type { ReactNode } from "react";

type SlideProps = {
  number: number;
  total: number;
  eyebrow?: string;
  children: ReactNode;
  variant?: "default" | "dark" | "cover";
  className?: string;
};

export function Slide({
  number,
  total,
  eyebrow,
  children,
  variant = "default",
  className = "",
}: SlideProps) {
  const bg =
    variant === "dark"
      ? "bg-[var(--color-ink-900)] text-white"
      : variant === "cover"
        ? "bg-gradient-to-br from-[var(--color-ink-900)] via-[var(--color-ink-900)] to-[var(--color-mint-600)] text-white"
        : "bg-white text-[var(--color-ink-900)]";

  return (
    <section
      className={`ir-slide aspect-[16/9] w-full max-w-[1280px] mx-auto mb-6 overflow-hidden rounded-2xl shadow-[0_8px_40px_-16px_rgba(0,0,0,0.18)] ${bg} ${className}`}
    >
      <div className="relative h-full w-full flex flex-col p-[4.5%]">
        {eyebrow && (
          <div className="flex items-center justify-between text-[0.85rem] font-semibold tracking-[0.18em] uppercase opacity-70">
            <span>{eyebrow}</span>
            <span>
              {number.toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
            </span>
          </div>
        )}
        {!eyebrow && (
          <div className="absolute right-[4.5%] top-[4.5%] text-[0.85rem] font-semibold tracking-[0.18em] uppercase opacity-50">
            {number.toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
          </div>
        )}
        <div className="flex-1 flex flex-col justify-center min-h-0">{children}</div>
        <div className="text-[0.75rem] tracking-[0.18em] uppercase opacity-50 font-medium">
          10to10 · Link Earth Inc.
        </div>
      </div>
    </section>
  );
}
