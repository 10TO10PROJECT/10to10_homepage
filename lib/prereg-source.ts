/**
 * 앱 사전 예약 유입 경로(11/21) — 채널별 주소의 utm_source(예: 10to10.kr/?utm_source=chat#prereg)를 읽는다.
 * 주소에 없거나 모르는 값이면 direct. 노션 '유입'에는 오른쪽 한국어 이름으로 저장.
 * 모든 페이지의 방문 통계(SiteAnalytics)에서도 쓰므로 검사 라이브러리(zod) 없이 따로 둔다.
 */
export const PREREG_SOURCES = { chat: "오픈채팅", insta: "인스타그램", threads: "스레드", ad: "광고", direct: "직접 방문" } as const;
export type PreregSource = keyof typeof PREREG_SOURCES;
export const PREREG_SOURCE_KEYS = Object.keys(PREREG_SOURCES) as [PreregSource, ...PreregSource[]];

export function parsePreregSource(raw: string | null | undefined): PreregSource {
  const v = (raw ?? "").trim().toLowerCase();
  return (PREREG_SOURCE_KEYS as string[]).includes(v) ? (v as PreregSource) : "direct";
}

/**
 * 채널별 방문 수 — Vercel 웹 통계의 utm 집계는 유료(Web Analytics Plus)라, 채널 주소로 들어온 첫 방문의 기록 주소를
 * /utm/<채널>(+원래 경로)로 바꿔 '페이지' 통계에서 채널별로 셀 수 있게 한다. 실제 화면 주소는 바뀌지 않는다.
 * 예: https://10to10.kr/?utm_source=chat#prereg → https://10to10.kr/utm/chat
 */
export function channelPageviewUrl(rawUrl: string): string {
  let u: URL;
  try {
    u = new URL(rawUrl);
  } catch {
    return rawUrl;
  }
  const src = parsePreregSource(u.searchParams.get("utm_source"));
  if (src === "direct") return rawUrl;
  return `${u.origin}/utm/${src}${u.pathname === "/" ? "" : u.pathname}`;
}
