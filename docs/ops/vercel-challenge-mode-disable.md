# www.10to10.kr 403 — Challenge Mode 해제 가이드

## 현상

`https://www.10to10.kr` 접속 시 403 Forbidden 발생.
원인: Vercel **Attack Challenge Mode** 또는 **BotID Protection**이 해당 도메인에 활성화됨.

## 해제 절차 (Vercel 대시보드에서 직접 수행)

### 1. 프로젝트 진입
1. https://vercel.com/dashboard 접속
2. **10to10-homepage** 프로젝트 클릭

### 2. Attack Challenge Mode 확인·해제
1. 좌측 **Settings** → **Firewall** (또는 **Security**)
2. **Attack Challenge Mode** 섹션 확인
3. 토글이 ON이면 → **Off**로 전환
4. **Save** 클릭

### 3. BotID Protection 확인
1. **Settings** → **Firewall** → **BotID** 또는 **Bot Protection**
2. 활성화돼 있다면 `www.10to10.kr` 도메인을 예외 목록에 추가하거나 Off 처리

### 4. 도메인 설정 점검
1. **Settings** → **Domains**
2. `www.10to10.kr` 도메인 상태 확인:
   - **Valid Configuration** 표시되는지
   - **Redirect to 10to10.kr** 설정이 정상인지 (이미 PR #2에서 host-based redirect 설정됨)
3. 비정상이면 도메인 삭제 후 재등록

### 5. 검증
```bash
curl -I https://www.10to10.kr
```
- 정상: `HTTP/2 308` (apex 도메인으로 리다이렉트)
- 비정상: `HTTP/2 403` (Challenge Mode 여전히 활성)

브라우저 시크릿 모드에서 https://www.10to10.kr 직접 접속해도 정상 리다이렉트되는지 확인.

## 참고

- Vercel BotID는 2025-06 GA. 일부 신규 프로젝트는 기본 ON.
- 대시보드 항목명은 Vercel UI 업데이트로 다소 변경될 수 있음 (Firewall / Security / Bot Protection).
- 해결 안 되면 Vercel Support 티켓 (project ID 첨부).
