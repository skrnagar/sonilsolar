import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { Lead, LeadInput } from "./lead-schema";

const file = path.join(process.cwd(), "data", "leads.json");

async function readAll(): Promise<Lead[]> {
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeAll(leads: Lead[]) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(leads, null, 2));
}

export async function createLead(input: LeadInput): Promise<Lead> {
  const leads = await readAll();
  const lead: Lead = {
    ...input,
    id: `L${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    stage: "New",
  };
  leads.unshift(lead);
  await writeAll(leads);
  return lead;
}

export async function listLeads(): Promise<Lead[]> {
  return readAll();
}

export async function updateLeadStage(id: string, stage: string): Promise<Lead | null> {
  const leads = await readAll();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx < 0) return null;
  leads[idx] = { ...leads[idx], stage };
  await writeAll(leads);
  return leads[idx];
}
