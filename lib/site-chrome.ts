/**
 * 어두운 사이트 틀(상단 띠·헤더·푸터, 휴대폰 하단 '원장님 · 견적 확인 / 학부모 · 정보방' 두 버튼 바)을 쓰는 페이지.
 * 메인(통합 랜딩)에 이어 11/18 CEO: 플랫폼 페이지도 메인처럼 통일(맨 위가 같은 어두운 AI 엄선 엔진 장면).
 * 투명 헤더 밑에 어두운 바탕이 깔리도록 각 페이지의 첫 섹션을 헤더 높이만큼(-mt-16) 끌어올려야 한다.
 */
export const DARK_CHROME_PATHS = ["/", "/platform"] as const;

export function isDarkChrome(pathname: string | null | undefined): boolean {
  return !!pathname && (DARK_CHROME_PATHS as readonly string[]).includes(pathname);
}
