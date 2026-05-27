import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-ink-300)] bg-[var(--color-ink-50)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo height={32} variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-700)]">
              {COMPANY.legalName} {COMPANY.legalNote}
              <br />
              대표 {COMPANY.ceo} · 사업자등록번호 {COMPANY.bizNo}
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-[var(--color-ink-900)] mb-3">제품</div>
            <ul className="space-y-2 text-[var(--color-ink-700)]">
              <li>
                <Link href="/platform" className="hover:text-[var(--color-mint-600)]">
                  10to10 AI 플랫폼
                </Link>
              </li>
              <li>
                <Link href="/stage" className="hover:text-[var(--color-mint-600)]">
                  10to10 STAGE
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-[var(--color-ink-900)] mb-3">회사</div>
            <ul className="space-y-2 text-[var(--color-ink-700)]">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[var(--color-mint-600)]"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.irPdfPath}
                  className="hover:text-[var(--color-mint-600)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IR 자료 다운로드
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.kakaoUrl}
                  className="hover:text-[var(--color-mint-600)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  카카오톡 문의
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--color-ink-300)] pt-6 text-xs text-[var(--color-ink-500)]">
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
