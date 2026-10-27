import { NextResponse } from "next/server";
import { resendAddresses } from "@/lib/resend";
import { investInquirySchema } from "@/lib/schema/invest-inquiry";
import { createInvestInquiryRow } from "@/lib/notion";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const parsed = investInquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation failed", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  if (parsed.data.honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await createInvestInquiryRow(parsed.data);
  } catch (err) {
    console.error("notion invest-inquiry create failed", err);
    return NextResponse.json({ ok: false, error: "notion failure" }, { status: 502 });
  }

  if (process.env.RESEND_API_KEY) {
    const { from, to } = resendAddresses();
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from,
          to,
          subject: `[10to10 투자·지원 문의] ${parsed.data.organization} (${parsed.data.name})`,
          text: [
            `이름: ${parsed.data.name}`,
            `소속/기관: ${parsed.data.organization}`,
            `이메일: ${parsed.data.email}`,
            `관심 주제: ${parsed.data.topic}`,
            `메시지:\n${parsed.data.message}`,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error("resend failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
