import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function DualProducts() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn className="mb-12">
          <Badge>두 개의 제품, 하나의 비전</Badge>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            학원 운영 자동화와,
            <br />
            학원 영업 파트너십.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)] max-w-2xl">
            기술과 운영, 두 축으로 동네 학원이 빛날 수 있도록 돕습니다.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <Link href="/platform" className="block h-full">
              <Card interactive className="h-full">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
                    PRODUCT 01
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[var(--color-ink-500)] px-2 py-0.5 rounded-full bg-[var(--color-ink-100)]">
                    PHASE 3 SaaS
                  </span>
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold">10to10 AI 플랫폼</h3>
                <p className="mt-4 text-[var(--color-ink-700)] leading-relaxed">
                  학원 운영 SaaS + 학부모·학생 탐색 앱. AI 에이전트가 상담·시간표·공지를
                  자동화합니다.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[var(--color-ink-700)]">
                  <li>· 양면 플랫폼 — 학원 + 학부모/학생</li>
                  <li>· AI Agent — 상담 요약 · 시간표 · 공지</li>
                  <li>· Beta 운영 중 → 7/28 정규 v1.0</li>
                </ul>
                <div className="mt-8 text-sm font-semibold text-[var(--color-mint-600)]">
                  자세히 보기 →
                </div>
              </Card>
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/stage" className="block h-full">
              <Card interactive className="h-full">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
                    PRODUCT 02
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[var(--color-mint-700)] px-2 py-0.5 rounded-full bg-[var(--color-mint-100)]">
                    PHASE 1 · 진행 중
                  </span>
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold">10to10 STAGE</h3>
                <p className="mt-4 text-[var(--color-ink-700)] leading-relaxed">
                  학원 설명회 풀케어. 기획·디자인·모객·쿠폰·현장 운영·등록률 트래킹까지
                  한 팀이 전담합니다. 원장님은 발표만 하세요.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[var(--color-ink-700)]">
                  <li>· 설명회 만족도 4.32 / 5.0</li>
                  <li>· 재참석 의사 100% · 추천 95.2%</li>
                  <li>· Phase 2 학원 마케팅 전반 확장 예정</li>
                </ul>
                <div className="mt-8 text-sm font-semibold text-[var(--color-mint-600)]">
                  자세히 보기 →
                </div>
              </Card>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
