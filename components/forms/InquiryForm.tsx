"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { inquirySchema, type InquiryInput } from "@/lib/schema/inquiry";
import { cn } from "@/lib/cn";

type Source = "stage" | "platform" | "main";

export function InquiryForm({ source = "stage" }: { source?: Source }) {
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
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-mint-500)] bg-[var(--color-mint-100)] p-10 text-center">
        <div className="text-2xl font-bold text-[var(--color-mint-600)]">
          문의 접수 완료!
        </div>
        <p className="mt-3 text-[var(--color-ink-700)]">
          영업일 기준 1일 내에 연락드리겠습니다.
        </p>
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

      <Field label="이름" name="name" error={errors.name} required />
      <Field
        label="휴대폰"
        name="phone"
        placeholder="010-1234-5678"
        error={errors.phone}
        required
        inputMode="tel"
      />
      <Field label="학원명" name="academyName" error={errors.academyName} required />
      <Field label="지역" name="region" placeholder="예: 서울 강남" error={errors.region} />

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">관심 패키지</span>
        <select
          name="package"
          defaultValue="basic"
          className="h-11 rounded-[var(--radius-md)] border border-[var(--color-ink-300)] px-3 bg-white"
        >
          <option value="basic">베이직 (연 49만 · 오픈 할인)</option>
          <option value="premium">프리미엄 (연 79만 · 오픈 할인)</option>
          <option value="info_session">설명회 풀케어 (1회성 · 견적 문의)</option>
          <option value="blog_build">블로그 구축 (1회성 · 견적 문의)</option>
          <option value="custom">맞춤 견적</option>
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">문의 내용</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-[var(--radius-md)] border border-[var(--color-ink-300)] p-3 resize-y"
          placeholder="학원 규모, 위치, 목표 등을 알려주시면 더 정확한 견적을 드릴 수 있습니다."
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message}</span>
        )}
      </label>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-full">
        {status === "submitting" ? "전송 중..." : "문의 보내기"}
      </Button>

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
  inputMode,
}: {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        inputMode={inputMode}
        className={cn(
          "h-11 rounded-[var(--radius-md)] border bg-white px-3",
          error ? "border-red-500" : "border-[var(--color-ink-300)]",
        )}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </label>
  );
}
