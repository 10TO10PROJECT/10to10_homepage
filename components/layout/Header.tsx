"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const NAV_ITEMS = [
  { href: "/platform", label: "AI 플랫폼" },
  { href: "/stage", label: "STAGE" },
  { href: "/team", label: "팀" },
  { href: "/careers", label: "채용" },
  { href: "/invest", label: "투자·지원" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink-300)]/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <Container className="flex h-16 items-center justify-between">
        <Logo height={28} />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-ink-700)]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--color-mint-600)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            href="/inquiry"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            학원 문의
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)] transition-colors"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--color-ink-300)]/60 bg-white"
        >
          <Container className="py-4 grid gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-[var(--color-ink-700)] hover:bg-[var(--color-ink-100)] hover:text-[var(--color-mint-600)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-mint-500)] px-5 text-base font-semibold text-white hover:bg-[var(--color-mint-600)] transition-colors"
            >
              학원 문의 →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
