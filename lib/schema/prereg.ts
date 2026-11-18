import { z } from "zod";

const KOREAN_MOBILE = /^010[-]?\d{3,4}[-]?\d{4}$/;

/** 저장 형식 통일(01012345678 · 010-1234-5678 → 010-1234-5678) — 같은 번호가 여러 형식으로 쌓이지 않게 */
export function normalizePhone(raw: string) {
  const d = raw.replace(/\D/g, "");
  return d.length === 11 ? `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}` : `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

// 학부모는 자녀 학년 전체, 학생 본인은 만 14세 이상이 확실한 중3부터만 직접 신청(만 14세 미만은 보호자 동의 필요 → '학부모'로 신청)
export const PREREG_GRADES = ["초1~3", "초4", "초5", "초6", "중1", "중2", "중3", "고1", "고2", "고3", "N수·기타"] as const;
export const PREREG_STUDENT_GRADES = ["중3", "고1", "고2", "고3", "N수·기타"] as const;

export const PREREG_ROLES = { parent: "학부모", student: "학생" } as const;

/** 앱 사전 예약 — 클라이언트와 API가 같은 스키마로 검사(동의·14세 확인은 서버에서도 강제) */
export const preregSchema = z
  .object({
    role: z.enum(["parent", "student"]),
    grade: z.enum(PREREG_GRADES, { error: "학년을 골라 주세요" }),
    phone: z.string().trim().regex(KOREAN_MOBILE, "휴대폰 번호 형식이 올바르지 않습니다 (예: 010-1234-5678)").transform(normalizePhone),
    consent: z.literal(true, { error: "개인정보 수집·이용에 동의해 주세요" }),
    over14: z.boolean().default(false),
    // 봇 차단 칸 — 여기서 거르지 않고 API가 조용히 성공처럼 응답한다(봇에게 걸렸다는 신호를 주지 않음)
    honeypot: z.string().optional().default(""),
  })
  .superRefine((v, ctx) => {
    if (v.role !== "student") return;
    if (!(PREREG_STUDENT_GRADES as readonly string[]).includes(v.grade)) {
      ctx.addIssue({ code: "custom", path: ["grade"], message: "중학교 2학년 이하는 보호자가 '학부모'로 신청해 주세요" });
    }
    if (!v.over14) {
      ctx.addIssue({ code: "custom", path: ["over14"], message: "만 14세 이상인지 확인해 주세요" });
    }
  });

export type PreregInput = z.input<typeof preregSchema>;
export type PreregData = z.output<typeof preregSchema>;
