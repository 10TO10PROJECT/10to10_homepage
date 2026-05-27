import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schema/inquiry";
import { createInquiryRow } from "@/lib/notion";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
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
    await createInquiryRow(parsed.data);
  } catch (err) {
    console.error("notion create failed", err);
    return NextResponse.json({ ok: false, error: "notion failure" }, { status: 502 });
  }

  if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "10to10 <onboarding@resend.dev>",
          to: process.env.RESEND_TO_EMAIL,
          subject: `[${parsed.data.source}] ${parsed.data.academyName} (${parsed.data.name})`,
          text: [
            `이름: ${parsed.data.name}`,
            `전화: ${parsed.data.phone}`,
            `학원: ${parsed.data.academyName}`,
            `지역: ${parsed.data.region}`,
            `패키지: ${parsed.data.package}`,
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
