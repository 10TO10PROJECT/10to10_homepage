import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { KakaoSymbol } from "@/components/ui/Button";
import { COMPANY } from "@/lib/content/company";

export function Footer() {
  return (
    <footer className="mt-32 bg-[var(--color-ink-900)] text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo height={32} variant="mint" />
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              {COMPANY.legalName}
              <br />
              대표 {COMPANY.ceo} · 사업자등록번호 {COMPANY.bizNo}
            </p>
            <a
              href={COMPANY.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] px-5 py-3 text-sm font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
            >
              <KakaoSymbol size={16} />
              카톡으로 3분 상담
            </a>
            <p className="mt-2 text-xs text-white/45">평균 응답 30분 · 평일 09:00–19:00</p>
          </div>
          <div className="text-[15px]">
            <div className="micro-label mb-4 text-white/50">Product</div>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <Link href="/" className="transition hover:text-[var(--color-mint-500)]">
                  10to10 STAGE · 설명회 풀케어
                </Link>
              </li>
              <li>
                <Link href="/platform" className="transition hover:text-[var(--color-mint-500)]">
                  10to10 플랫폼
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-[15px]">
            <div className="micro-label mb-4 text-white/50">Contact</div>
            <ul className="space-y-2.5 text-white/75">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition hover:text-[var(--color-mint-500)]"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
