import { cn } from "@/lib/cn";

/**
 * 브로슈어 커버의 10to10 + STAGE 민트 블록 락업 차용.
 * tone="dark" = 다크 배경 위 (10to10 화이트), 기본 = 라이트 배경.
 */
export function StageLogo({
  height = 18,
  tone = "light",
  className,
}: {
  height?: number;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 leading-none", className)}
      style={{ fontSize: height }}
    >
      <span
        className={cn(
          "font-extrabold tracking-tight",
          tone === "dark" ? "text-white" : "text-[var(--color-ink-950)]",
        )}
      >
        10to10
      </span>
      <span
        className="inline-flex items-center rounded-[0.22em] bg-[var(--color-mint-500)] px-[0.35em] pb-[0.12em] pt-[0.16em] font-extrabold uppercase italic tracking-[0.04em] text-[var(--color-ink-950)]"
        style={{ fontSize: "0.82em" }}
      >
        STAGE
      </span>
    </span>
  );
}
