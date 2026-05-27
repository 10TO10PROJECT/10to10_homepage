import { describe, it, expect } from "vitest";
import { inquirySchema } from "@/lib/schema/inquiry";

describe("inquirySchema", () => {
  const valid = {
    name: "홍길동",
    phone: "010-1234-5678",
    academyName: "10to10 학원",
    region: "서울 강남",
    package: "basic" as const,
    message: "문의드립니다",
    source: "stage" as const,
    honeypot: "",
  };

  it("accepts valid input", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects short name", () => {
    expect(inquirySchema.safeParse({ ...valid, name: "홍" }).success).toBe(false);
  });

  it("rejects non-mobile phone", () => {
    expect(inquirySchema.safeParse({ ...valid, phone: "02-1234-5678" }).success).toBe(false);
  });

  it("accepts phone without dashes", () => {
    expect(inquirySchema.safeParse({ ...valid, phone: "01012345678" }).success).toBe(true);
  });

  it("rejects unknown package", () => {
    expect(
      inquirySchema.safeParse({ ...valid, package: "diamond" as unknown as "basic" })
        .success,
    ).toBe(false);
  });

  it("rejects when honeypot is filled", () => {
    expect(inquirySchema.safeParse({ ...valid, honeypot: "bot" }).success).toBe(false);
  });

  it("rejects missing academy name", () => {
    expect(inquirySchema.safeParse({ ...valid, academyName: "" }).success).toBe(false);
  });
});
