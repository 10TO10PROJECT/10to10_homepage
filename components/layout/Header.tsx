"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

/* 채용·투자·팀 네비 제거 (2026-08-16 멘토링 반영 — 랜딩 목적 집중).
 * 2026-11-09: 메인 = STAGE·텐투텐 앱 통합 랜딩, 기존 STAGE 랜딩은 /stage로 이동 → STAGE 메뉴 추가 */
const NAV_ITEMS = [
  { href: "/stage", label: "STAGE" },
  { href: "/platform", label: "플랫폼" },
  { href: "/portfolio", label: "포트폴리오" },
];

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  const dark = tone === "dark";
  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);
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
      className={`sticky top-0 z-50 transition-colors ${
        dark
          ? // 메인 다크: 맨 위에서는 히어로 사진 위에 투명하게 겹치고(HomeHero가 -mt-16로 밑에 깔림), 스크롤하면 반투명 오닉스 + 블러
            scrolled
            ? "border-b border-white/[0.08] bg-[var(--color-onyx)]/80 backdrop-blur-xl"
            : "bg-transparent"
          : `bg-[var(--color-paper)]/90 backdrop-blur ${scrolled ? "border-b border-[var(--color-cloud)]" : ""}`
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo height={28} variant={dark ? "mint" : "dark"} />
        <nav
          className={`hidden items-center gap-1 text-[15px] font-medium md:flex ${
            dark ? "text-[var(--color-ash)]" : "text-[var(--color-ink-700)]"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 transition-colors ${
                dark
                  ? "hover:bg-white/[0.06] hover:text-[var(--color-ivory)] aria-[current=page]:text-[var(--color-ivory)]"
                  : "hover:text-[var(--color-ink-950)] aria-[current=page]:font-semibold aria-[current=page]:text-[var(--color-ink-950)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/stage#estimate"
            className={`hidden h-10 items-center rounded-full px-5 text-sm font-semibold transition md:inline-flex ${
              dark
                ? "bg-[var(--color-mint-500)] text-[var(--color-ink-950)] hover:brightness-105"
                : "bg-[var(--color-ink-950)] text-white shadow-[var(--shadow-btn-dark)] hover:bg-black"
            }`}
          >
            견적 확인
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] transition-colors md:hidden ${
              dark
                ? "text-[var(--color-ivory)] hover:bg-white/[0.08]"
                : "text-[var(--color-ink-900)] hover:bg-[var(--color-cloud)]"
            }`}
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
          className={`border-t md:hidden ${
            dark ? "border-white/[0.08] bg-[var(--color-onyx)]" : "border-[var(--color-cloud)] bg-[var(--color-paper)]"
          }`}
        >
          <Container className="grid gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-[var(--radius-btn)] px-3 py-3 text-base font-medium transition-colors ${
                  dark
                    ? "text-[var(--color-ash)] hover:bg-white/[0.06] hover:text-[var(--color-ivory)]"
                    : "text-[var(--color-ink-700)] hover:bg-[var(--color-cloud)] hover:text-[var(--color-ink-950)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/stage#estimate"
              onClick={() => setOpen(false)}
              className={`mt-2 inline-flex h-12 items-center justify-center px-5 text-base font-bold transition-colors ${
                dark
                  ? "rounded-full bg-[var(--color-mint-500)] text-[var(--color-ink-950)]"
                  : "rounded-[var(--radius-btn)] bg-[var(--color-ink-950)] text-white hover:bg-black"
              }`}
            >
              견적 확인 →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
