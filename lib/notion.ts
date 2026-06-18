import { Client } from "@notionhq/client";

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function createInquiryRow(input: {
  name: string;
  phone: string;
  academyName: string;
  region: string;
  package: "basic" | "premium" | "info_session" | "blog_build" | "custom";
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
