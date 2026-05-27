"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FieldType = "text" | "email" | "url" | "textarea";

export type MailtoField = {
  name: string;
  label: string;
  type?: FieldType;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

type Props = {
  to: string;
  subjectPrefix: string;
  fields: MailtoField[];
  submitLabel?: string;
  note?: string;
};

export function MailtoForm({
  to,
  subjectPrefix,
  fields,
  submitLabel = "메일 작성하기",
  note,
}: Props) {
  const initial = useMemo<Record<string, string>>(
    () => Object.fromEntries(fields.map((f) => [f.name, ""])),
    [fields],
  );
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [touched, setTouched] = useState(false);

  function missingRequired() {
    return fields
      .filter((f) => f.required)
      .some((f) => !values[f.name]?.trim());
  }

  function buildMailtoHref() {
    const headline = values["name"] ? `${subjectPrefix} · ${values["name"]}` : subjectPrefix;
    const bodyLines = fields.map((f) => {
      const v = (values[f.name] ?? "").trim();
      return `[${f.label}]\n${v || "-"}`;
    });
    const body = bodyLines.join("\n\n");
    const qs = new URLSearchParams({ subject: headline, body });
    return `mailto:${to}?${qs.toString()}`;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    if (missingRequired()) return;
    window.location.href = buildMailtoHref();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      {fields.map((f) => {
        const v = values[f.name] ?? "";
        const showError = touched && f.required && !v.trim();
        const commonCls = cn(
          "rounded-[var(--radius-md)] border bg-white px-3",
          showError ? "border-red-500" : "border-[var(--color-ink-300)]",
        );

        return (
          <label key={f.name} className="grid gap-1.5">
            <span className="text-sm font-semibold">
              {f.label}
              {f.required && <span className="text-red-500 ml-0.5">*</span>}
            </span>
            {f.type === "textarea" ? (
              <textarea
                name={f.name}
                rows={f.rows ?? 5}
                placeholder={f.placeholder}
                value={v}
                onChange={(e) =>
                  setValues((s) => ({ ...s, [f.name]: e.target.value }))
                }
                className={cn(commonCls, "p-3 resize-y")}
              />
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                value={v}
                onChange={(e) =>
                  setValues((s) => ({ ...s, [f.name]: e.target.value }))
                }
                className={cn(commonCls, "h-11")}
              />
            )}
            {showError && (
              <span className="text-sm text-red-500">필수 항목입니다</span>
            )}
          </label>
        );
      })}

      <Button type="submit" className="mt-2 w-full">
        {submitLabel}
      </Button>

      {note && (
        <p className="text-xs text-[var(--color-ink-500)] text-center leading-relaxed">
          {note}
        </p>
      )}
    </form>
  );
}
