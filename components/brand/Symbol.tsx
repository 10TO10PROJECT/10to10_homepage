type Variant = "dark" | "mint" | "gradient" | "white";

interface SymbolProps extends Omit<React.SVGProps<SVGSVGElement>, "fill"> {
  variant?: Variant;
  size?: number;
}

const PATH =
  "M314.51,15.16C287.08,5.37,257.55,0,226.75,0H.17v147.99h226.58c60.19,0,109.15,52.91,109.15,113.09s-48.97,109.15-109.15,109.15-109.16-48.97-109.16-109.15c0-29.01,11.45-55.34,29.97-74.91h-2.45c-14.91.22-94.53,4.65-129.24,73.53,0,0-49.93,97.61,27.26,186.97,47.17,46.66,112.02,75.49,183.61,75.49,144.19,0,261.08-116.89,261.08-261.08,0-113.4-72.31-209.87-173.32-245.92Z";

export function Symbol({ variant = "mint", size = 32, ...props }: SymbolProps) {
  const fill =
    variant === "dark"
      ? "#1E1E1E"
      : variant === "white"
      ? "#FFFFFF"
      : variant === "mint"
      ? "var(--color-mint-500)"
      : "url(#symbol-gradient)";

  const height = Math.round(size * (522.17 / 487.84));

  return (
    <svg
      viewBox="0 0 487.84 522.17"
      width={size}
      height={height}
      role="img"
      aria-label="10to10"
      {...props}
    >
      {variant === "gradient" && (
        <defs>
          <linearGradient
            id="symbol-gradient"
            x1="-17.08"
            y1="17.25"
            x2="411.36"
            y2="445.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#50E3C2" />
            <stop offset="0.24" stopColor="#4BE0C6" />
            <stop offset="0.51" stopColor="#3ED7D4" />
            <stop offset="0.8" stopColor="#28C9EB" />
            <stop offset="1" stopColor="#15BDFF" />
          </linearGradient>
        </defs>
      )}
      <path d={PATH} fill={fill} />
    </svg>
  );
}
