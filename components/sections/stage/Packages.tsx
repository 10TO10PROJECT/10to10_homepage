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
            두 가지 시작점.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-700)]">
            학원 규모와 목표에 맞춰 선택하세요. 옵션은 자유롭게 추가 가능합니다.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {items.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <Card
                interactive
                className={`relative flex flex-col h-full ${
                  p.id === "premium" ? "border-[var(--color-mint-500)] shadow-lg" : ""
                }`}
              >
                {p.badge && (
                  <Badge className="absolute -top-3 right-6">{p.badge}</Badge>
                )}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{p.fromPrice}</span>
                  <span className="text-[var(--color-ink-500)]">원~ / 월</span>
                </div>
                <div className="text-sm text-[var(--color-ink-500)] mt-2">
                  운영 인건비 {p.monthly} 포함
                </div>
                <ul className="mt-8 space-y-3 text-[var(--color-ink-700)] flex-1">
                  {p.includes.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-[var(--color-mint-600)] flex-shrink-0">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
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
          * 표시 금액은 시작가입니다. 학원 상황·옵션에 따라 맞춤 견적을 제공해 드립니다.
        </p>
      </Container>
    </section>
  );
}
