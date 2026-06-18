import { z } from "zod";

const KOREAN_MOBILE = /^010[-]?\d{3,4}[-]?\d{4}$/;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "이름은 2자 이상이어야 합니다").max(20),
  phone: z
    .string()
    .trim()
    .regex(KOREAN_MOBILE, "휴대폰 번호 형식이 올바르지 않습니다 (예: 010-1234-5678)"),
  academyName: z.string().trim().min(1, "학원명은 필수입니다").max(50),
  region: z.string().trim().max(50).optional().default(""),
  package: z.enum(["basic", "premium", "info_session", "blog_build", "custom"]),
  message: z.string().trim().max(2000).optional().default(""),
  source: z.enum(["stage", "platform", "main"]),
  honeypot: z.string().max(0, "bot detected"),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
