type Tone = "white" | "muted" | "dark" | "mint";

const TONE_HEX: Record<Tone, string> = {
  white: "#FFFFFF",
  muted: "#FAFAFA",
  dark: "#1A1A1A",
  mint: "#E6FAF5",
};

const HEIGHTS = {
  sm: "h-12 md:h-16",
  md: "h-20 md:h-24",
  lg: "h-28 md:h-36",
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
