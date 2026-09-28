import { NextRequest, NextResponse } from "next/server";
import { listLeads, updateLeadStage } from "@/lib/leads";
import { cookies } from "next/headers";

function authorized(req: NextRequest) {
  const cookie = req.cookies.get("sonil_admin")?.value;
  return cookie === (process.env.ADMIN_PASSWORD || "sonil-admin-change-me");
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const leads = await listLeads();
  return NextResponse.json({ leads });
}

export async function PATCH(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, stage } = await req.json();
  const lead = await updateLeadStage(id, stage);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead });
}

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expected = process.env.ADMIN_PASSWORD || "sonil-admin-change-me";
  if (password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set("sonil_admin", expected, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return res;
}

export async function DELETE() {
  const store = await cookies();
  store.delete("sonil_admin");
  return NextResponse.json({ ok: true });
}
