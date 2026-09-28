"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { Lead } from "@/lib/lead-schema";
import { stages } from "@/lib/lead-schema";

export default function AdminHome() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const router = useRouter();

  async function load() {
    const res = await fetch("/api/admin");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const json = await res.json();
    setLeads(json.leads || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function setStage(id: string, stage: string) {
    await fetch("/api/admin", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, stage }),
    });
    load();
  }

  if (!leads) return <p className="p-8 text-sm text-muted-foreground">Loading leads…</p>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-24">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold text-navy">Leads</h1>
        <Button
          variant="outline"
          onClick={async () => {
            await fetch("/api/admin", { method: "DELETE" });
            router.push("/admin/login");
          }}
        >
          Log out
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        File-backed store at data/leads.json (local / persistent disk). On serverless hosts, connect Supabase using the
        documented env vars — until then this inbox is the working CRM.
      </p>
      {leads.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed p-8 text-sm text-muted-foreground">No leads yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-3 py-2">When</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Phone</th>
                <th className="px-3 py-2">City</th>
                <th className="px-3 py-2">Property</th>
                <th className="px-3 py-2">kW est.</th>
                <th className="px-3 py-2">Stage</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} className="border-t">
                  <td className="px-3 py-2 text-xs">{new Date(l.createdAt).toLocaleString("en-IN")}</td>
                  <td className="px-3 py-2">{l.name}</td>
                  <td className="px-3 py-2">{l.phone}</td>
                  <td className="px-3 py-2">{l.city}</td>
                  <td className="px-3 py-2">{l.propertyType}</td>
                  <td className="px-3 py-2">{l.estimatedKw ?? "—"}</td>
                  <td className="px-3 py-2">
                    <select
                      className="h-8 rounded border bg-transparent text-xs"
                      value={l.stage}
                      onChange={(e) => setStage(l.id, e.target.value)}
                    >
                      {stages.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
