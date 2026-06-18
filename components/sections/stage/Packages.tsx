import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { STAGE_PRICING } from "@/lib/content/stage";

export function Packages() {
  const items = [STAGE_PRICING.basic, STAGE_PRICING.premium];
  return (
    <section id="packages" className="py-24 md:py-32">
      <Container>
        <FadeIn className="mb-12 text-center max-w-3xl mx-auto">
          <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
            PACKAGES
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            연 단위 정찰 가격,
            <br />
            두 가지 패키지.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            계약 시점 단가가 다음 해에도 그대로 유지됩니다.
            <br className="hidden sm:inline" />
            광고비·디자인비 별도 청구 없이, 약속한 운영을 끝까지 책임집니다.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <Card
                className={`relative flex flex-col h-full ${
                  p.id === "premium"
                    ? "border-[var(--color-mint-500)] shadow-xl shadow-[var(--color-mint-600)]/10 ring-1 ring-[var(--color-mint-500)]/30"
                    : ""
                }`}
              >
                {p.badge && (
                  <Badge className="absolute -top-3 right-6">{p.badge}</Badge>
                )}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-700)]">{p.tagline}</p>

                <div className="mt-6">
                  {p.discountBadge && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-red-500/30 animate-pulse">
                      🔥 {p.discountBadge} · 47% OFF
                    </div>
                  )}
                  {p.originalPrice && (
                    <div className="mb-1 flex items-baseline gap-2 text-base">
                      <span className="text-[var(--color-ink-500)]">정가</span>
                      <span className="text-[var(--color-ink-500)] line-through decoration-red-500 decoration-2">
                        {p.originalPrice}원
                      </span>
                      <span className="text-red-500 font-bold">→</span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-6xl font-extrabold tracking-tight ${
                        p.discountBadge
                          ? "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {p.fromPrice}
                    </span>
                    <span className="text-[var(--color-ink-500)]">{p.priceUnit}</span>
                  </div>
                  {p.originalPrice && (
                    <div className="mt-1 text-sm font-bold text-red-500">
                      💸 연 70만원 절약
                    </div>
                  )}
                  <div className="mt-2 text-xs text-[var(--color-ink-500)]">
                    {p.annualNote}
                  </div>
                </div>

                <div className="mt-8 space-y-5 flex-1">
                  {p.areas.map((area) => (
                    <div key={area.title}>
                      <div className="text-sm font-bold text-[var(--color-ink-900)]">
                        {area.title}
                      </div>
                      <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-ink-700)]">
                        {area.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span className="text-[var(--color-mint-600)] flex-shrink-0">✓</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button
                  href="#contact"
                  variant={p.id === "premium" ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.name} 문의하기
                </Button>
              </Card>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--color-ink-500)]">
          * 네이버·구글 광고 매체비는 학원이 직접 결제하며, 권장 예산을 함께 제안드립니다.
          <br className="hidden sm:inline" />
          * 프리미엄 오픈 할인은 초기 파트너 학원 한정이며, 가입 시점 단가는 다음 해에도 유지됩니다.
        </p>
      </Container>
    </section>
  );
}
