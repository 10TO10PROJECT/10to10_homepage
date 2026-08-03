/**
 * schema.org JSON-LD 스크립트 렌더러. 검색엔진(구글·네이버) 리치 결과용.
 * data는 반드시 빌드타임 정적 상수만 넘긴다(사용자 입력 금지).
 * `<` 이스케이프로 </script> 조기 종료·XSS를 차단한다.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
