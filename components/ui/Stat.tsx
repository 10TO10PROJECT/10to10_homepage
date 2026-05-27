export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink-900)]">
        {value}
      </div>
      <div className="text-sm md:text-base text-[var(--color-ink-500)]">{label}</div>
    </div>
  );
}
