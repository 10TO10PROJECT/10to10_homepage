/**
 * 휴대폰 하단 '견적 확인하기' 바(StickyCta)를 띄우지 않는 페이지.
 * 개인정보 처리방침처럼 법정 고지를 읽는 페이지에는 영업 버튼이 어울리지 않는다(2026-11-18 CEO).
 * 바가 없으면 우하단 카톡 버튼(KakaoFab)도 바 위로 띄우지 않고 화면 아래로 내린다.
 * 사전 예약 전용 페이지(/prereg, 11/22)도 — 폼 하나만 있는 페이지라 하단 바가 제출 버튼을 가리지 않게.
 */
export const STICKY_CTA_HIDDEN_PATHS = ["/privacy", "/prereg"] as const;

export function hasStickyCta(pathname: string | null | undefined): boolean {
  if (!pathname) return true;
  return !STICKY_CTA_HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
