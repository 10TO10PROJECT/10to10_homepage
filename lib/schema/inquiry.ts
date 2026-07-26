import { z } from "zod";

const KOREAN_MOBILE = /^010[-]?\d{3,4}[-]?\d{4}$/;

// 필수 = 성함·연락처·학원명 3필드 (개편안 v2 §2 — 필드 축소가 CVR 직결).
// basic/premium/blog_build 값은 기존 ?service= URL 호환을 위해 유지 (Phase 전략 락).
export const inquirySchema = z.object({
  name: z.string().trim().min(2, "성함은 2자 이상이어야 합니다").max(20),
  phone: z
    .string()
    .trim()
    .regex(KOREAN_MOBILE, "휴대폰 번호 형식이 올바르지 않습니다 (예: 010-1234-5678)"),
  academyName: z.string().trim().min(1, "학원명은 필수입니다").max(50),
  region: z.string().trim().max(50).optional().default(""),
  package: z.enum(["info_session", "custom", "phase2", "basic", "premium", "blog_build"]),
  message: z.string().trim().max(2000).optional().default(""),
  source: z.enum(["stage", "platform", "main"]),
  honeypot: z.string().max(0, "bot detected"),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
