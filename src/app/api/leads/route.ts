import { createLead } from "@/lib/leads";
import { leadSchema } from "@/lib/lead-schema";
import { NextRequest, NextResponse } from "next/server";

const hits = new Map<string, { n: number; t: number }>();

function limited(ip: string) {
  const now = Date.now();
  const cur = hits.get(ip);
  if (!cur || now - cur.t > 15 * 60 * 1000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  cur.n += 1;
  return cur.n > 8;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Please wait and try again." }, { status: 429 });
  }
  try {
    const body = await req.json();
    const parsed = leadSchema.parse({
      ...body,
      email: body.email || undefined,
    });
    const lead = await createLead({ ...parsed, email: parsed.email || "" });
    return NextResponse.json({ id: lead.id, ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Invalid submission";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
