"use client";

import { useMemo, useState } from "react";
import { KakaoSymbol } from "@/components/ui/Button";
import { COMPANY } from "@/lib/content/company";
import { STAGE_PRICING_PUBLIC } from "@/lib/content/stage";
import {
  calcEstimate,
  estimateSummary,
  formatWon,
  HEADCOUNT_OPTIONS,
  type AddonId,
} from "@/lib/estimate";

const P = STAGE_PRICING_PUBLIC;

/**
 * 견적 확인 — 보장 인원·초기 파트너 여부·선택 옵션을 고르면 바로 합계를 보여준다.
 * 문의는 받지 않고 카카오톡 상담으로 넘긴다(오픈채팅은 문구를 미리 채울 수 없어 "견적 복사"로 보조).
 */
export function EstimateCalculator() {
  const [headcount, setHeadcount] = useState<number>(P.base.headcount);
  const [partner, setPartner] = useState(false);
  const [addons, setAddons] = useState<Partial<Record<AddonId, number>>>({});
  const [copied, setCopied] = useState(false);

  const estimate = useMemo(() => calcEstimate({ headcount, partner, addons }), [headcount, partner, addons]);

  const setQty = (id: AddonId, qty: number) =>
    setAddons((prev) => ({ ...prev, [id]: Math.min(P.addonMax, Math.max(0, qty)) }));

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(estimateSummary(estimate, partner));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-card md:p-8">
        <fieldset>
          <legend className="text-base font-bold text-[var(--color-ink-950)]">1. 모객 보장 인원</legend>
          <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-ink-500)]">
            신청이 이 인원의 80%에 못 미치면 대행료의 절반을 돌려드립니다.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {HEADCOUNT_OPTIONS.map((n) => {
              const on = n === headcount;
              const price = calcEstimate({ headcount: n, partner, addons: {} }).feeBase;
              return (
                <label
                  key={n}
                  className={`cursor-pointer rounded-[12px] border-2 px-2 py-3 text-center transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--color-ink-950)] ${
                    on
                      ? "border-[var(--color-ink-950)] bg-[var(--color-ink-950)] text-white"
                      : "border-[var(--color-cloud)] bg-white text-[var(--color-ink-950)] hover:border-[var(--color-ink-300)]"
                  }`}
                >
                  <input
                    type="radio"
                    name="stage-headcount"
                    value={n}
                    checked={on}
                    onChange={() => setHeadcount(n)}
                    className="sr-only"
                  />
                  <span className="block text-lg font-extrabold">{n}명</span>
                  <span className={`mt-0.5 block text-[12px] font-semibold ${on ? "text-[var(--color-mint-500)]" : "text-[var(--color-ink-500)]"}`}>
                    {formatWon(price)}
                  </span>
                </label>
              );
            })}
          </div>
          <p className="mt-2.5 text-[12px] text-[var(--color-ink-500)]">{P.overMax}</p>
        </fieldset>

        <div className="mt-7 border-t border-[var(--color-cloud)] pt-6">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={partner}
              onChange={(ev) => setPartner(ev.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-mint-600)]"
            />
            <span>
              <span className="flex flex-wrap items-center gap-2 text-base font-bold text-[var(--color-ink-950)]">
                2. {P.partner.label}이에요
                <span className="rounded-full bg-[var(--color-mint-500)] px-2 py-0.5 text-[12px] font-extrabold text-[var(--color-ink-950)]">
                  {formatWon(-P.partner.discount)}
                </span>
              </span>
              <span className="mt-1 block text-[13px] leading-relaxed text-[var(--color-ink-500)]">{P.partner.sub}</span>
              {partner && (
                <span className="mt-1 block text-[12px] leading-relaxed text-[var(--color-ink-500)]">
                  조건: {P.partner.consent}
                </span>
              )}
            </span>
          </label>
        </div>

        <div className="mt-7 border-t border-[var(--color-cloud)] pt-6">
          <fieldset>
            <legend className="text-base font-bold text-[var(--color-ink-950)]">
              3. 선택 옵션 <span className="text-[13px] font-semibold text-[var(--color-ink-500)]">필요할 때만</span>
            </legend>
            <ul className="mt-2 divide-y divide-[var(--color-cloud)]">
              {P.addons.map((a) => {
                const qty = addons[a.id] ?? 0;
                return (
                  <li key={a.id} className="flex items-center justify-between gap-3 py-3.5">
                    <div className="min-w-0">
                      <div className="break-keep text-[15px] font-bold text-[var(--color-ink-950)]">
                        {a.title}{" "}
                        <span className="whitespace-nowrap font-semibold text-[var(--color-ink-500)]">
                          {a.unit}당 {formatWon(a.price)}
                        </span>
                      </div>
                      <div className="mt-0.5 break-keep text-[13px] text-[var(--color-ink-500)]">{a.desc}</div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1" role="group" aria-label={`${a.title} 수량`}>
                      <button
                        type="button"
                        onClick={() => setQty(a.id, qty - 1)}
                        disabled={qty === 0}
                        aria-label={`${a.title} 줄이기`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-cloud)] text-lg font-bold text-[var(--color-ink-950)] transition hover:bg-[var(--color-ink-100)] disabled:opacity-35"
                      >
                        −
                      </button>
                      <output aria-live="polite" className="w-7 text-center text-base font-extrabold text-[var(--color-ink-950)]">
                        {qty}
                      </output>
                      <button
                        type="button"
                        onClick={() => setQty(a.id, qty + 1)}
                        disabled={qty === P.addonMax}
                        aria-label={`${a.title} 늘리기`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-cloud)] text-lg font-bold text-[var(--color-ink-950)] transition hover:bg-[var(--color-ink-100)] disabled:opacity-35"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        </div>
      </div>

      <div className="rounded-[var(--radius-card)] bg-[var(--color-ink-900)] p-6 text-white md:p-8 lg:sticky lg:top-24">
        <div className="micro-label text-[var(--color-mint-500)]">내 견적</div>
        <ul className="mt-4 space-y-2.5 text-[14px]">
          {estimate.lines.map((l) => (
            <li key={l.label} className="flex items-baseline justify-between gap-3">
              <span className="break-keep text-white/75">{l.label}</span>
              <span className={`shrink-0 font-semibold ${l.amount < 0 ? "text-[var(--color-mint-500)]" : "text-white"}`}>
                {formatWon(l.amount)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-white/15 pt-5">
          <div className="text-[13px] text-white/60">합계 · 부가세 포함</div>
          <div aria-live="polite" className="display-type mt-1 text-4xl text-[var(--color-mint-500)] md:text-5xl">
            {formatWon(estimate.total)}
          </div>
        </div>
        <p className="mt-3 break-keep text-[12px] leading-relaxed text-white/55">{P.refundNote}</p>
        <a
          href={COMPANY.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex h-13 min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-kakao)] text-base font-bold text-[var(--color-ink-950)] transition hover:brightness-95"
        >
          <KakaoSymbol size={18} />
          이 견적으로 카톡 상담하기
        </a>
        <button
          type="button"
          onClick={copySummary}
          className="mt-2 flex h-12 w-full items-center justify-center rounded-[var(--radius-btn)] border border-white/30 text-[15px] font-semibold text-white transition hover:bg-white/10"
        >
          {copied ? "복사했어요 · 카톡에 붙여 넣어 주세요" : "견적 내용 복사하기"}
        </button>
      </div>
    </div>
  );
}
