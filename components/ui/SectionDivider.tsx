type Tone = "white" | "muted" | "dark" | "mint";

const TONE_HEX: Record<Tone, string> = {
  white: "#FAFFFD",
  muted: "#F2F8F5",
  dark: "#111614",
  mint: "#E6FAF5",
};

const HEIGHTS = {
  sm: "h-10 md:h-12",
  md: "h-14 md:h-20",
  lg: "h-20 md:h-28",
} as const;

export function SectionDivider({
  from,
  to,
  size = "md",
}: {
  from: Tone;
  to: Tone;
  size?: keyof typeof HEIGHTS;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full ${HEIGHTS[size]}`}
      style={{
        background: `linear-gradient(to bottom, ${TONE_HEX[from]} 0%, ${TONE_HEX[to]} 100%)`,
      }}
    />
  );
}
