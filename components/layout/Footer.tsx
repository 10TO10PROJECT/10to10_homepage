import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

export function Footer() {
  return (
    <footer className="mt-32">
      <div className="bg-[var(--color-ink-950)] text-white">
        <Container className="py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <Logo height={32} variant="mint" />
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {COMPANY.legalName}
                <br />
                대표 {COMPANY.ceo} · 사업자등록번호 {COMPANY.bizNo}
              </p>
              <a
                href={COMPANY.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-xs)] bg-[var(--color-mint-500)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink-950)] transition hover:bg-[var(--color-mint-600)] hover:text-white"
              >
                카톡으로 3분 상담
                <span aria-hidden>→</span>
              </a>
              <p className="mt-2 text-xs text-white/45">평균 응답 30분 · 평일 09:00–19:00</p>
            </div>
            <div className="text-sm">
              <div className="micro-label mb-4 text-white/50">Product</div>
              <ul className="space-y-2.5 text-white/75">
                <li>
                  <Link href="/stage" className="underline-offset-4 hover:text-[var(--color-mint-500)] hover:underline">
                    10to10 STAGE · 설명회 풀케어
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="underline-offset-4 hover:text-[var(--color-mint-500)] hover:underline">
                    10to10 AI 플랫폼
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="micro-label mb-4 text-white/50">Company</div>
              <ul className="space-y-2.5 text-white/75">
                <li>
                  <Link href="/team" className="underline-offset-4 hover:text-[var(--color-mint-500)] hover:underline">
                    팀
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="underline-offset-4 hover:text-[var(--color-mint-500)] hover:underline">
                    채용
                  </Link>
                </li>
                <li>
                  <Link href="/invest" className="underline-offset-4 hover:text-[var(--color-mint-500)] hover:underline">
                    투자·지원
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="underline-offset-4 hover:text-[var(--color-mint-500)] hover:underline"
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
      </div>

      {/* 풀블리드 민트 밴드 — 페이지를 닫는 브랜드 서명 */}
      <div aria-hidden className="bg-[var(--color-mint-500)]">
        <Container className="flex h-32 items-end justify-between pb-6 md:h-48 md:pb-8">
          <span className="display-type select-none text-4xl text-[var(--color-ink-950)] md:text-6xl">
            10to10
          </span>
          <span className="micro-label pb-1 text-[var(--color-ink-950)]/70">
            Academy Marketing Partner
          </span>
        </Container>
      </div>
    </footer>
  );
}
