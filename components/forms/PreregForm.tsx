"use client";

import { useState } from "react";
import { PREREG_GRADES, PREREG_ROLES, PREREG_STUDENT_GRADES, preregSchema } from "@/lib/schema/prereg";
import { HOME_PREREG } from "@/lib/content/home";

type Role = keyof typeof PREREG_ROLES;

/**
 * 앱 사전 예약 폼(어두운 메인 전용) — 구분 · 학년 · 휴대폰 · [필수] 개인정보 동의.
 * 학생 본인은 중3 이상 + 만 14세 확인이 있어야 신청 가능(그 아래는 보호자가 '학부모'로). 검사는 서버와 같은 스키마.
 */
export function PreregForm() {
  const P = HOME_PREREG;
  const [role, setRole] = useState<Role>("parent");
  const [grade, setGrade] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [stored, setStored] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const grades: readonly string[] = role === "parent" ? PREREG_GRADES : PREREG_STUDENT_GRADES;

  function pickRole(next: Role) {
    setRole(next);
    if (!(next === "parent" ? PREREG_GRADES : PREREG_STUDENT_GRADES).some((g) => g === grade)) setGrade("");
    setErrors({});
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = preregSchema.safeParse({
      role,
      grade,
      phone: String(fd.get("phone") ?? ""),
      consent: fd.get("consent") === "on",
      over14: fd.get("over14") === "on",
      honeypot: String(fd.get("website") ?? ""),
    });
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!map[k]) map[k] = issue.message;
      }
      setErrors(map);
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/prereg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; stored?: boolean };
      if (!res.ok || !json.ok) throw new Error("server error");
      setStored(json.stored !== false);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="py-6 text-center">
        <span aria-hidden className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-mint-500)]/15 text-[22px] text-[var(--color-mint-500)]">
          ✓
        </span>
        <p className="m-heading mt-5 whitespace-pre-line text-[20px] text-[var(--color-ivory)] md:text-[22px]">{P.done}</p>
        {!stored && (
          <p className="mt-4 text-[13px] text-amber-300">로컬 미리보기 — 저장소가 아직 연결되지 않아 실제로 저장되지 않았습니다.</p>
        )}
      </div>
    );
  }

  const field = "h-12 w-full rounded-[12px] border border-white/20 bg-[var(--color-onyx)] px-4 text-[16px] text-[var(--color-ivory)] outline-none transition focus:border-[var(--color-mint-500)]";
  const errId = (k: string) => `prereg-${k}-error`;
  const err = (k: string) =>
    errors[k] && (
      <p id={errId(k)} role="alert" className="mt-1.5 text-[13px] text-rose-300">
        {errors[k]}
      </p>
    );
  const describe = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": errId(k) } : {});

  return (
    // method="post": 자바스크립트가 돌기 전에 제출돼도 휴대폰 번호가 주소창(URL)에 붙지 않게
    <form method="post" onSubmit={onSubmit} noValidate className="space-y-5">
      <fieldset>
        <legend className="text-[14px] text-[var(--color-ash)]">신청하시는 분</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(Object.keys(PREREG_ROLES) as Role[]).map((r) => (
            <label
              key={r}
              className={`flex h-12 cursor-pointer items-center justify-center rounded-full border text-[15px] transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--color-mint-500)] ${
                role === r
                  ? "border-[var(--color-mint-500)] bg-[var(--color-mint-500)]/10 text-[var(--color-ivory)]"
                  : "border-white/20 text-[var(--color-ash)] hover:border-white/40"
              }`}
            >
              <input type="radio" name="role" value={r} checked={role === r} onChange={() => pickRole(r)} className="sr-only" />
              {PREREG_ROLES[r]}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="prereg-grade" className="text-[14px] text-[var(--color-ash)]">
          {role === "parent" ? "자녀 학년" : "내 학년"}
        </label>
        <div className="relative mt-2">
          <select
            id="prereg-grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={`${field} appearance-none pr-10`}
            {...describe("grade")}
          >
            <option value="" disabled>
              학년을 골라 주세요
            </option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[12px] text-[var(--color-ash)]">
            ▼
          </span>
        </div>
        {err("grade")}
      </div>

      <div>
        <label htmlFor="prereg-phone" className="text-[14px] text-[var(--color-ash)]">
          휴대폰 번호
        </label>
        <input
          id="prereg-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="010-1234-5678"
          className={`${field} mt-2 placeholder:text-white/30`}
          {...describe("phone")}
        />
        {err("phone")}
      </div>

      {/* 봇 차단 — 사람에게는 보이지 않음 */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {role === "student" && (
        <div>
          <label className="flex items-start gap-2.5 text-[15px] text-[var(--color-ivory)]">
            <input type="checkbox" name="over14" className="mt-1 h-4 w-4 accent-[var(--color-mint-500)]" {...describe("over14")} />
            만 14세 이상입니다
          </label>
          {err("over14")}
        </div>
      )}

      <div className="rounded-[12px] border border-white/10 p-4">
        <label className="flex items-start gap-2.5 text-[15px] text-[var(--color-ivory)]">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[var(--color-mint-500)]" {...describe("consent")} />
          {P.consent.label}
        </label>
        <dl className="mt-3 space-y-1 pl-[26px] text-[13px] leading-relaxed text-[var(--color-ash)]">
          {P.consent.items.map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="shrink-0 text-[var(--color-ivory)]/70">{k}</dt>
              <dd className="break-keep">{v}</dd>
            </div>
          ))}
          <p className="pt-1 break-keep">{P.consent.refuse}</p>
        </dl>
        {err("consent")}
      </div>

      <p className="break-keep text-[13px] text-[var(--color-ash)]">{P.minorNote}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex h-12 w-full items-center justify-center rounded-full bg-[var(--color-mint-500)] text-[16px] font-medium text-[var(--color-ink-950)] transition hover:bg-[#6BE9CD] disabled:opacity-60"
      >
        {status === "submitting" ? "보내는 중…" : P.submit}
      </button>
      {status === "error" && (
        <p role="alert" className="text-center text-[13px] text-rose-300">
          잠시 문제가 생겼어요. 조금 뒤에 다시 시도해 주세요.
        </p>
      )}
    </form>
  );
}
