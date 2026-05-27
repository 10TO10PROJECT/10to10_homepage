import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink-300)]/60 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo height={28} />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-ink-700)]">
          <Link href="/platform" className="hover:text-[var(--color-mint-600)] transition-colors">
            AI 플랫폼
          </Link>
          <Link href="/stage" className="hover:text-[var(--color-mint-600)] transition-colors">
            STAGE
          </Link>
          <Link href="/team" className="hover:text-[var(--color-mint-600)] transition-colors">
            팀
          </Link>
          <Link href="/careers" className="hover:text-[var(--color-mint-600)] transition-colors">
            채용
          </Link>
          <Link href="/invest" className="hover:text-[var(--color-mint-600)] transition-colors">
            투자·지원
          </Link>
        </nav>
        <Button href="/stage" variant="primary" size="sm">
          학원 문의
        </Button>
      </Container>
    </header>
  );
}
