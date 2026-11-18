import { Client } from "@notionhq/client";

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function createInquiryRow(input: {
  name: string;
  phone: string;
  academyName: string;
  region: string;
  package: "info_session" | "custom" | "phase2" | "basic" | "premium" | "blog_build";
  message: string;
  source: "stage" | "platform" | "main";
}) {
  const dbId = process.env.NOTION_INQUIRY_DB_ID;
  if (!dbId) throw new Error("NOTION_INQUIRY_DB_ID is not set");

  return notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      이름: { title: [{ text: { content: input.name } }] },
      연락처: { phone_number: input.phone },
      학원명: { rich_text: [{ text: { content: input.academyName } }] },
      지역: { rich_text: [{ text: { content: input.region } }] },
      "관심 패키지": { select: { name: input.package } },
      "문의 내용": {
        rich_text: [{ text: { content: input.message.slice(0, 2000) } }],
      },
      source: { select: { name: input.source } },
      상태: { select: { name: "신규" } },
    },
  });
}

/**
 * 앱 사전 예약 한 건 — 노션 DB(NOTION_PREREG_DB_ID) 속성: 신청(제목) · 휴대폰(전화) · 구분(선택) · 학년(선택) · 상태(선택).
 * 개인정보 동의는 폼·API에서 필수로 검사하므로 저장된 행은 모두 동의한 건이다.
 */
export async function createPreregRow(input: { role: "parent" | "student"; grade: string; phone: string }) {
  const dbId = process.env.NOTION_PREREG_DB_ID;
  if (!dbId) throw new Error("NOTION_PREREG_DB_ID is not set");
  const roleLabel = input.role === "parent" ? "학부모" : "학생";

  return notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      신청: { title: [{ text: { content: `${roleLabel} · ${input.grade}` } }] },
      휴대폰: { phone_number: input.phone },
      구분: { select: { name: roleLabel } },
      학년: { select: { name: input.grade } },
      상태: { select: { name: "알림 대기" } },
    },
  });
}

export async function createInvestInquiryRow(input: {
  name: string;
  organization: string;
  email: string;
  topic: string;
  message: string;
}) {
  const dbId = process.env.NOTION_INVEST_INQUIRY_DB_ID;
  if (!dbId) throw new Error("NOTION_INVEST_INQUIRY_DB_ID is not set");

  return notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      이름: { title: [{ text: { content: input.name } }] },
      "소속/기관": { rich_text: [{ text: { content: input.organization } }] },
      이메일: { email: input.email },
      "관심 주제": { rich_text: [{ text: { content: input.topic } }] },
      메시지: {
        rich_text: [{ text: { content: input.message.slice(0, 3000) } }],
      },
      상태: { select: { name: "신규" } },
    },
  });
}
