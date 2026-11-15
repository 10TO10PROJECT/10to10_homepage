/**
 * 문구 속 **강조** 표시를 굵은 글씨로 바꿔 보여 준다(11/12 CEO: 글씨가 얇아 가독성이 낮음 → 강조할 부분은 두껍게).
 * 굵기·색은 globals.css의 `.m-dark strong`(메인 다크 랜딩)에서 정한다.
 */
export function Emph({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>;
}
