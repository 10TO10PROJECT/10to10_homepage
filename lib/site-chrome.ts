/**
 * 어두운 사이트 틀(상단 띠·헤더·푸터, 휴대폰 하단 '원장님 · 견적 확인 / 학부모 · 정보방' 두 버튼 바)을 쓰는 페이지.
 * 메인(통합 랜딩)에 이어 11/18 CEO: 플랫폼·STAGE 페이지도 메인처럼 통일.
 * 투명 헤더 밑에 어두운 바탕이 깔리도록 각 페이지의 첫 섹션을 헤더 높이만큼(-mt-16) 끌어올려야 한다.
 */
export const DARK_CHROME_PATHS = ["/", "/platform", "/stage", "/prereg"] as const;

/** 휴대폰 하단 바에 원장님·학부모 두 버튼을 띄우는 페이지(두 갈래를 다 받는 곳). STAGE는 원장님 페이지라 '견적 확인하기' 하나 */
export const DUAL_CTA_PATHS = ["/", "/platform"] as const;

export function isDarkChrome(pathname: string | null | undefined): boolean {
  return !!pathname && (DARK_CHROME_PATHS as readonly string[]).includes(pathname);
}

export function hasDualCta(pathname: string | null | undefined): boolean {
  return !!pathname && (DUAL_CTA_PATHS as readonly string[]).includes(pathname);
}
