import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PRIVACY_POLICY, type PrivacyBlock, type PrivacyListItem } from "@/lib/content/privacy";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "텐투텐(10to10)이 처리하는 개인정보의 항목·목적·보유 기간과 정보주체의 권리를 안내합니다.",
  alternates: { canonical: "/privacy" },
};

const P = PRIVACY_POLICY;
const anchor = (no: number) => `article-${no}`;

// 이메일·기관 누리집 주소를 눌러서 열 수 있게
const LINK_RE = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|((?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:go|or)\.kr)/gi;
const linkCls = "font-medium text-[var(--color-ink-950)] underline decoration-[var(--color-mint-500)] decoration-2 underline-offset-2 hover:text-[var(--color-mint-700)]";

function Linkified({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    const [whole, email] = m;
    parts.push(
      email ? (
        <a key={i} href={`mailto:${email}`} className={linkCls}>
          {email}
        </a>
      ) : (
        <a key={i} href={`https://${whole}`} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {whole}
        </a>
      ),
    );
    last = i + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function ListItem({ item }: { item: PrivacyListItem }) {
  if (typeof item === "string") return <li className="pl-1"><Linkified text={item} /></li>;
  return (
    <li className="pl-1">
      <Linkified text={item.text} />
      <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-[var(--color-ink-300)]">
        {item.sub.map((s) => (
          <li key={s}>
            <Linkified text={s} />
          </li>
        ))}
      </ul>
    </li>
  );
}

function Block({ block }: { block: PrivacyBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <Linkified text={block.text} />
        </p>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-[var(--color-ink-500)]">
          {block.items.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-6 marker:text-[var(--color-ink-300)]">
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              <Linkified text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      // 칸이 많은 표(국외 이전 6칸)는 휴대폰에서 표만 옆으로 밀어서 봄
      return (
        <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px] leading-relaxed">
            <thead>
              <tr className="border-y border-[var(--color-ink-300)] bg-[var(--color-ink-50)]">
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-3 py-2.5 font-semibold text-[var(--color-ink-950)]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-[var(--color-ink-100)] align-top">
                  {row.map((cell, c) => (
                    <td key={c} className={`px-3 py-2.5 ${c === 0 ? "font-medium text-[var(--color-ink-950)]" : ""}`}>
                      <Linkified text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/** 개인정보 처리방침 — 앱스토어·구글 플레이 등록 URL(https://10to10.kr/privacy). 내용은 lib/content/privacy.ts */
export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <Container size="narrow">
        <div className="micro-label text-[var(--color-ink-500)]">PRIVACY POLICY</div>
        <h1 className="display-type mt-4 text-[clamp(2rem,5vw,3rem)] text-[var(--color-ink-950)]">{P.title}</h1>
        <p className="mt-3 text-sm text-[var(--color-ink-500)]">시행일 {P.effectiveDate}</p>
        <p className="mt-8 text-base leading-relaxed text-[var(--color-ink-700)] md:text-[17px]">{P.intro}</p>

        <nav aria-label="처리방침 목차" className="mt-10 rounded-[var(--radius-card)] bg-[var(--color-ink-50)] p-6 md:p-7">
          <div className="text-sm font-semibold text-[var(--color-ink-950)]">목차</div>
          <ol className="mt-4 grid gap-x-8 gap-y-2 text-[14px] sm:grid-cols-2">
            {P.articles.map((a) => (
              <li key={a.no}>
                <a href={`#${anchor(a.no)}`} className="text-[var(--color-ink-700)] transition hover:text-[var(--color-mint-700)]">
                  제{a.no}조 {a.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {P.articles.map((a) => (
          <section key={a.no} id={anchor(a.no)} aria-labelledby={`${anchor(a.no)}-h`} className="mt-14 scroll-mt-28">
            <h2 id={`${anchor(a.no)}-h`} className="text-xl font-bold tracking-[-0.02em] text-[var(--color-ink-950)] md:text-2xl">
              제{a.no}조 ({a.title})
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-[1.8] text-[var(--color-ink-700)] md:text-base">
              {a.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
          </section>
        ))}

        <p className="mt-16 border-t border-[var(--color-ink-100)] pt-6 text-sm text-[var(--color-ink-500)]">{P.signature}</p>
      </Container>
    </section>
  );
}
