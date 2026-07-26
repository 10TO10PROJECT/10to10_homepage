"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { inquirySchema, type InquiryInput } from "@/lib/schema/inquiry";
import { cn } from "@/lib/cn";
import { COMPANY } from "@/lib/content/company";

type Source = "stage" | "platform" | "main";
type PackageValue = InquiryInput["package"];

// 기존 ?service= URL 호환 유지 (Phase 전략 락 — 최소 3개월).
// 구독형 레거시(basic/premium)·블로그는 Phase 2 사전 상담으로 흡수.
const SERVICE_TO_PACKAGE: Record<string, PackageValue> = {
  info_session: "info_session",
  basic: "phase2",
  premium: "phase2",
  "blog-build": "phase2",
  "offline-print": "custom",
};

// 옵션 순서 락 (P0-C): ① 설명회 풀케어 ② 맞춤 견적 ③ Phase 2 사전 상담
const PACKAGE_OPTIONS: ReadonlyArray<{ value: PackageValue; label: string }> = [
  { value: "info_session", label: "설명회 풀케어 (견적 문의)" },
  { value: "custom", label: "맞춤 견적 (오프라인 제작물 등)" },
  { value: "phase2", label: "Phase 2 사전 상담 (연 단위 마케팅·블로그)" },
];

export function InquiryForm({ source = "stage" }: { source?: Source }) {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const [pkg, setPkg] = useState<PackageValue>(
    SERVICE_TO_PACKAGE[serviceParam] ?? "info_session",
  );

  useEffect(() => {
    const mapped = SERVICE_TO_PACKAGE[serviceParam];
    if (mapped) setPkg(mapped);
  }, [serviceParam]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload: InquiryInput = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      academyName: String(fd.get("academyName") ?? ""),
      region: String(fd.get("region") ?? ""),
      package: fd.get("package") as InquiryInput["package"],
      message: String(fd.get("message") ?? ""),
      source,
      honeypot: String(fd.get("website") ?? ""),
    };

    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!map[k]) map[k] = issue.message;
      }
      setErrors(map);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-sm)] border-2 border-[var(--color-mint-500)] bg-[var(--color-mint-100)] p-10 text-center">
        <div className="text-2xl font-bold text-[var(--color-ink-950)]">
          문의 접수 완료!
        </div>
        <p className="mt-3 text-[var(--color-ink-700)]">
          영업일 기준 24시간 내 카톡으로 연락드립니다.
        </p>
        <a
          href={COMPANY.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-xs)] bg-[var(--color-mint-500)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink-950)] shadow-[var(--shadow-mint-soft)] transition hover:bg-[var(--color-mint-600)] hover:text-white"
        >
          카톡 채널 바로가기
          <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      {/* 필수 3필드 — 성함 · 연락처 · 학원명 */}
      <Field label="성함" name="name" error={errors.name} required />
      <Field
        label="연락처"
        name="phone"
        placeholder="010-1234-5678"
        error={errors.phone}
        required
        inputMode="tel"
      />
      <Field label="학원명" name="academyName" error={errors.academyName} required />

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">
          문의 종류 <span className="font-normal text-[var(--color-ink-500)]">(선택)</span>
        </span>
        <select
          name="package"
          value={pkg}
          onChange={(e) => setPkg(e.target.value as PackageValue)}
          className="h-11 rounded-[var(--radius-xs)] border border-[var(--color-ink-900)]/25 px-3 bg-white"
        >
          {PACKAGE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <Field
        label="지역"
        name="region"
        placeholder="예: 서울 강남"
        error={errors.region}
        optional
      />

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">
          문의 내용 <span className="font-normal text-[var(--color-ink-500)]">(선택)</span>
        </span>
        <textarea
          name="message"
          rows={3}
          className="rounded-[var(--radius-xs)] border border-[var(--color-ink-900)]/25 p-3 resize-y bg-white"
          placeholder="희망 시기, 학원 규모 등을 남겨주시면 견적이 더 정확해집니다."
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message}</span>
        )}
      </label>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-full">
        {status === "submitting" ? "전송 중..." : "견적 문의 보내기"}
      </Button>
      <p className="text-center text-xs text-[var(--color-ink-500)]">
        영업 전화 드리지 않습니다. 견적은 카톡으로만 답합니다.
      </p>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-500 text-center">
          전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  error,
  required,
  optional,
  inputMode,
}: {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
        {optional && (
          <span className="font-normal text-[var(--color-ink-500)]"> (선택)</span>
        )}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        inputMode={inputMode}
        className={cn(
          "h-11 rounded-[var(--radius-xs)] border bg-white px-3",
          error ? "border-red-500" : "border-[var(--color-ink-900)]/25",
        )}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </label>
  );
}
