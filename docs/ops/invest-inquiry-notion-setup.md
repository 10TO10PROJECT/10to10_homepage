# /invest 문의 폼 — Notion DB 세팅 가이드

## 개요

`/invest` 페이지의 투자·지원 문의 폼은 `/api/invest-inquiry` 라우트를 통해 **Notion DB**에 row를 생성합니다. (학원 문의와 별도 DB)

## 1. Notion DB 생성

새 데이터베이스 생성 — 이름 예시: `10to10 — 투자·지원 문의 inbox`

### 컬럼 스펙 (정확히 이 이름으로)

| 컬럼명 | 타입 | 비고 |
|---|---|---|
| 이름 | Title | 필수 (DB 기본 title) |
| 소속/기관 | Text (rich_text) | |
| 이메일 | Email | |
| 관심 주제 | Text (rich_text) | |
| 메시지 | Text (rich_text) | |
| 상태 | Select | 옵션: `신규` / `검토중` / `회신완료` |
| 생성일 | Created time | 자동 |

> 컬럼명이 정확히 일치해야 합니다 (`lib/notion.ts::createInvestInquiryRow` 참조).
> 띄어쓰기·슬래시 포함 그대로.

## 2. Notion Integration 권한

기존 `10to10 inquiry bot`(학원 문의용) Integration을 새 DB에도 **Connections → Add connections**로 추가하세요. (별도 Integration 안 만들어도 됨)

## 3. Vercel 환경변수 추가

**Project → Settings → Environment Variables**

| Key | Value | Environments |
|---|---|---|
| `NOTION_INVEST_INQUIRY_DB_ID` | (새 DB ID — 32자 hex) | Production, Preview, Development |

DB ID 확인: 노션 DB 페이지를 브라우저로 열고, URL의 `?v=...` 앞의 32자 hex (대시 없음).

예: `https://www.notion.so/.../1234567890abcdef1234567890abcdef?v=...`
→ ID = `1234567890abcdef1234567890abcdef`

## 4. 재배포

환경변수 추가 후 **Deployments → 최신 → Redeploy** (또는 새 커밋 푸시).

## 5. 검증

```bash
curl -X POST https://10to10.kr/api/invest-inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name":"테스트",
    "organization":"테스트 벤처스",
    "email":"test@example.com",
    "topic":"시드 투자",
    "message":"검토 단계 문의",
    "honeypot":""
  }'
```

- 정상: `{"ok":true}` + Notion DB에 row 생성
- 422: validation 실패 (issues 배열 확인)
- 502 + log "NOTION_INVEST_INQUIRY_DB_ID is not set" → env 미설정
- 502 + log "object_not_found" → Integration이 DB에 연결 안 됨

## 참고

- 학원 문의 DB와 컬럼 스키마가 다릅니다. `phone_number` 필수가 아니어서 별도 DB 사용.
- Resend 알림은 학원 문의와 동일한 `RESEND_API_KEY`/`RESEND_TO_EMAIL` 환경변수 재사용.
