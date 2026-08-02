/**
 * 월계수 리스 — 브로슈어 P1·P5 지표 장식 차용.
 * side="left" 기본, right는 미러. currentColor로 칠해 톤을 상속.
 */
export function LaurelBranch({
  size = 40,
  side = "left",
  className,
}: {
  size?: number;
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      width={size * 0.55}
      height={size}
      viewBox="0 0 22 40"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M18.5 38.5c-6.5-2.6-11-7.3-13.4-13.2C2.7 19.4 2.9 12.6 5.8 5.9c.3-.7 1.3-.6 1.5.1 1.7 6.5 3.4 12.4 6 17.6 2.4 4.9 5.5 9.4 9.9 13.6.6.6-.1 1.6-.9 1.4-1.3-.4-2.6-.7-3.8-1.1z" opacity=".28" />
      <ellipse cx="4.5" cy="6" rx="2.6" ry="5" transform="rotate(24 4.5 6)" />
      <ellipse cx="3.6" cy="14" rx="2.7" ry="5.2" transform="rotate(38 3.6 14)" />
      <ellipse cx="5" cy="22" rx="2.8" ry="5.4" transform="rotate(52 5 22)" />
      <ellipse cx="8.2" cy="29.5" rx="2.9" ry="5.4" transform="rotate(66 8.2 29.5)" />
      <ellipse cx="13.4" cy="35.5" rx="2.9" ry="5.2" transform="rotate(80 13.4 35.5)" />
    </svg>
  );
}
