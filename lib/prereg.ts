/**
 * 앱 사전 예약 폼을 열지 여부(서버에서만 호출).
 * 저장소(노션 DB, NOTION_PREREG_DB_ID)가 연결된 배포에서만 연다 — 연결 전에 배포되면 학부모가 제출해도 저장이 안 되기 때문.
 * 로컬 개발은 화면 확인용으로 항상 열고, 제출하면 "저장되지 않음"을 표시한다.
 */
export function isPreregOpen(env: Record<string, string | undefined> = process.env) {
  return Boolean(env.NOTION_PREREG_DB_ID) || env.NODE_ENV !== "production";
}
