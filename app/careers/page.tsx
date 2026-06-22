import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { MailtoForm, type MailtoField } from "@/components/forms/MailtoForm";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { COMPANY } from "@/lib/content/company";
import {
  CAREERS_HERO,
  CAREERS_VALUES,
  CAREERS_OPEN_ROLES,
  CAREERS_NOTION_REF,
} from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "채용 — 10to10",
  description:
    "직무보다 먼저, 비전에 공감하는 분을 찾습니다. 10to10 채용 안내와 지원 폼.",
};

const APPLY_FIELDS: MailtoField[] = [
  { name: "name", label: "이름", required: true },
  { name: "phone", label: "휴대폰", placeholder: "010-1234-5678" },
  {
    name: "role",
    label: "지원 직무",
    placeholder: "예: Backend / Growth / Open Application",
    required: true,
  },
  {
    name: "vision",
    label: "10to10의 비전 중 가장 공감되는 한 문장과 그 이유",
    type: "textarea",
    rows: 4,
    required: true,
  },
  {
    name: "strength",
    label: "내가 가장 잘 메울 수 있는 빈칸",
    type: "textarea",
    rows: 4,
    placeholder: "직무 역량, 성취, 협업 방식 등 자유롭게",
    required: true,
  },
  {
    name: "portfolio",
    label: "포트폴리오 / GitHub / 노션 / 링크드인 URL",
    type: "url",
    placeholder: "https://",
  },
  {
    name: "etc",
    label: "그 밖에 알리고 싶은 것",
    type: "textarea",
    rows: 3,
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              {CAREERS_HERO.eyebrow}
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {CAREERS_HERO.title}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-700)] leading-relaxed">
              {CAREERS_HERO.desc}
            </p>
          </FadeIn>
        </Container>
      </section>

      <SectionDivider from="white" to="muted" />

      <section className="py-20 md:py-24 bg-[var(--color-ink-50)]">
        <Container>
          <FadeIn className="mb-10 max-w-2xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              OUR VALUES
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              우리가 일하는 방식.
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-5 md:grid-cols-3">
            {CAREERS_VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <Card className="h-full">
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-[var(--color-ink-700)] leading-relaxed">
                    {v.desc}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <SectionDivider from="muted" to="white" />

      <section className="py-24 md:py-32">
        <Container>
          <FadeIn className="mb-10 max-w-2xl">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              OPEN ROLES
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              지금 열린 자리.
            </h2>
          </FadeIn>
          <StaggerChildren className="grid gap-5 md:grid-cols-3">
            {CAREERS_OPEN_ROLES.map((r) => (
              <StaggerItem key={r.title}>
                <Card className="h-full flex flex-col">
                  <div className="text-xs font-bold tracking-widest text-[var(--color-mint-600)]">
                    {r.type}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{r.title}</h3>
                  <p className="mt-3 text-[var(--color-ink-700)] leading-relaxed flex-1">
                    {r.desc}
                  </p>
                  <Button href="#apply" variant="outline" size="sm" className="mt-6 w-fit">
                    지원하기 →
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <SectionDivider from="white" to="muted" />

      <section id="apply" className="py-24 md:py-32 bg-[var(--color-ink-50)]">
        <Container size="narrow">
          <FadeIn className="mb-10">
            <div className="text-sm font-bold tracking-widest text-[var(--color-mint-600)]">
              APPLY
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              지원하기
            </h2>
            <p className="mt-4 text-[var(--color-ink-700)] leading-relaxed">
              아래 폼을 채우고 “메일 작성하기”를 누르면 메일이 자동으로 작성됩니다.
              검토 후 영업일 기준 3일 내 회신드립니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card>
              <MailtoForm
                to={COMPANY.email}
                subjectPrefix="[10to10 채용 지원]"
                fields={APPLY_FIELDS}
                submitLabel="메일 작성하기 →"
                note="메일 클라이언트가 없는 경우 카카오톡으로 연락 주세요."
              />
            </Card>
          </FadeIn>
        </Container>
      </section>

      <SectionDivider from="muted" to="white" />

      <section className="pb-24 md:pb-32 pt-16 md:pt-20">
        <Container size="narrow">
          <FadeIn>
            <Card className="bg-gradient-to-br from-[var(--color-mint-500)]/10 to-[var(--color-sky-500)]/10 border-[var(--color-mint-500)]/40 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                먼저 가볍게 커피챗부터.
              </h2>
              <p className="mt-3 text-[var(--color-ink-700)] max-w-xl mx-auto leading-relaxed">
                지원이 망설여진다면 30분 커피챗부터 시작해 보세요. 카카오톡 채널로
                편하게 연락 주시면 일정 잡아드립니다.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={COMPANY.kakaoUrl} variant="primary" external>
                  카카오톡으로 커피챗 신청 →
                </Button>
                <Button href={CAREERS_NOTION_REF} variant="ghost" external>
                  노션 채용 페이지 (상세)
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
