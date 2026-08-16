"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

/* 채용·투자·팀 네비 제거 (2026-08-16 멘토링 반영 — 랜딩 목적 집중). 팀은 메인 본문 섹션으로 이동 */
const NAV_ITEMS = [
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/platform", label: "플랫폼" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--color-paper)]/90 backdrop-blur transition-shadow ${
        scrolled ? "border-b border-[var(--color-cloud)]" : ""
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo height={28} />
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-[var(--color-ink-700)] md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--color-ink-950)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/inquiry"
            className="hidden h-10 items-center rounded-full bg-[var(--color-ink-950)] px-5 text-sm font-semibold text-white shadow-[var(--shadow-btn-dark)] transition hover:bg-black md:inline-flex"
          >
            견적 문의
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] text-[var(--color-ink-900)] transition-colors hover:bg-[var(--color-cloud)] md:hidden"
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
          className="border-t border-[var(--color-cloud)] bg-[var(--color-paper)] md:hidden"
        >
          <Container className="grid gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-[var(--radius-btn)] px-3 py-3 text-base font-medium text-[var(--color-ink-700)] transition-colors hover:bg-[var(--color-cloud)] hover:text-[var(--color-ink-950)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] px-5 text-base font-bold text-white transition-colors hover:bg-black"
            >
              견적 문의 →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
