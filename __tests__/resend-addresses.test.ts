import { describe, it, expect } from "vitest";
import { resendAddresses } from "@/lib/resend";
import { COMPANY } from "@/lib/content/company";

describe("resendAddresses", () => {
  it("sends inquiry alerts to the company email by default", () => {
    const { from, to } = resendAddresses({} as NodeJS.ProcessEnv);
    expect(to).toBe(COMPANY.email);
    expect(from).toBe("10to10 <onboarding@resend.dev>");
  });

  it("uses RESEND_FROM and RESEND_TO_EMAIL when they are set", () => {
    const { from, to } = resendAddresses({
      RESEND_FROM: "10to10 <noreply@10to10.kr>",
      RESEND_TO_EMAIL: "ops@example.com",
    } as unknown as NodeJS.ProcessEnv);
    expect(from).toBe("10to10 <noreply@10to10.kr>");
    expect(to).toBe("ops@example.com");
  });

  it("falls back when the variables are set but empty", () => {
    const { from, to } = resendAddresses({ RESEND_FROM: "", RESEND_TO_EMAIL: "" } as unknown as NodeJS.ProcessEnv);
    expect(to).toBe(COMPANY.email);
    expect(from).toBe("10to10 <onboarding@resend.dev>");
  });
});
