"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function Accordion({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--color-ink-300)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-5">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-lg font-semibold text-[var(--color-ink-900)]">
                {it.q}
              </span>
              <span
                className={cn(
                  "text-2xl text-[var(--color-mint-600)] transition-transform duration-200",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden text-[var(--color-ink-700)] leading-relaxed">
                {it.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
