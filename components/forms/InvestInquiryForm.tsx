"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { investInquirySchema, type InvestInquiryInput } from "@/lib/schema/invest-inquiry";
import { cn } from "@/lib/cn";

export function InvestInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload: InvestInquiryInput = {
      name: String(fd.get("name") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      email: String(fd.get("email") ?? ""),
      topic: String(fd.get("topic") ?? ""),
      message: String(fd.get("message") ?? ""),
      honeypot: String(fd.get("website") ?? ""),
    };

    const parsed = investInquirySchema.safeParse(payload);
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
      const res = await fetch("/api/invest-inquiry", {
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
          CEO 신현우가 영업일 기준 2일 내에 직접 회신드리겠습니다.
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
        label="소속 / 기관"
        name="organization"
        placeholder="예: ㅇㅇ벤처스 · ㅇㅇ대학교 산학협력단"
        error={errors.organization}
        required
      />
      <Field
        label="회신용 이메일"
        name="email"
        type="email"
        placeholder="you@example.com"
        error={errors.email}
        required
      />
      <Field
        label="관심 주제"
        name="topic"
        placeholder="예: 시드 투자 · 지원사업 · 협업 · 산학협력"
        error={errors.topic}
        required
      />

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">
          메시지<span className="text-red-500 ml-0.5">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          className={cn(
            "rounded-[var(--radius-md)] border bg-white p-3 resize-y",
            errors.message ? "border-red-500" : "border-[var(--color-ink-300)]",
          )}
          placeholder="관심 영역, 검토 단계, 일정 등 자유롭게 알려주세요."
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message}</span>
        )}
      </label>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-full">
        {status === "submitting" ? "전송 중..." : "문의 보내기 →"}
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
  type,
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </span>
      <input
        name={name}
        type={type ?? "text"}
        placeholder={placeholder}
        className={cn(
          "h-11 rounded-[var(--radius-md)] border bg-white px-3",
          error ? "border-red-500" : "border-[var(--color-ink-300)]",
        )}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </label>
  );
}
