import { NextResponse } from "next/server";
import { preregSchema } from "@/lib/schema/prereg";
import { createPreregRow } from "@/lib/notion";
import { isPreregStoreReady } from "@/lib/prereg";

export const runtime = "nodejs";

/** 앱 사전 예약 — 검사(동의·만 14세) 후 노션 DB에 저장. 저장소가 없으면 운영에선 거절, 로컬에선 저장 안 함을 알려 준다 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const parsed = preregSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation failed", issues: parsed.error.issues }, { status: 422 });
  }
  if (parsed.data.honeypot.length > 0) return NextResponse.json({ ok: true, stored: true });

  if (!isPreregStoreReady()) {
    if (process.env.NODE_ENV !== "production") {
      // 로컬 미리보기 — 번호는 로그에 남기지 않음
      console.info("[prereg] 저장소 미연결 — 로컬 미리보기라 저장하지 않음", parsed.data.role, parsed.data.grade);
      return NextResponse.json({ ok: true, stored: false });
    }
    return NextResponse.json({ ok: false, error: "prereg closed" }, { status: 503 });
  }

  try {
    await createPreregRow(parsed.data);
  } catch (err) {
    console.error("notion prereg create failed", err);
    return NextResponse.json({ ok: false, error: "notion failure" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, stored: true });
}
