import { COMPANY } from "@/lib/content/company";

/**
 * 문의 알림 메일의 보내는/받는 주소.
 * - 받는 주소 기본값은 대표 문의 이메일(COMPANY.email). RESEND_TO_EMAIL이 있으면 그 값을 쓴다.
 * - 보내는 주소 기본값은 Resend 공용 테스트 발신자다. 이 발신자는 Resend 계정 소유자 주소로만 보낼 수 있으므로,
 *   support@10to10.kr로 받으려면 Resend에서 10to10.kr 도메인을 인증하고 RESEND_FROM을 그 도메인 주소로 설정해야 한다.
 */
export function resendAddresses(env: NodeJS.ProcessEnv = process.env) {
  return {
    from: env.RESEND_FROM || "10to10 <onboarding@resend.dev>",
    to: env.RESEND_TO_EMAIL || COMPANY.email,
  };
}
