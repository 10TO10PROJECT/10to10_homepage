import { z } from "zod";

export const investInquirySchema = z.object({
  name: z.string().trim().min(2, "이름은 2자 이상이어야 합니다").max(20),
  organization: z.string().trim().min(1, "소속/기관은 필수입니다").max(100),
  email: z.string().trim().email("이메일 형식이 올바르지 않습니다").max(120),
  topic: z.string().trim().min(1, "관심 주제는 필수입니다").max(100),
  message: z.string().trim().min(1, "메시지는 필수입니다").max(3000),
  honeypot: z.string().max(0, "bot detected"),
});

export type InvestInquiryInput = z.infer<typeof investInquirySchema>;
