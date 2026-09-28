import { z } from "zod";

export const leadSchema = z.object({
  propertyType: z.string().min(1),
  monthlyBillBand: z.string().min(1),
  city: z.string().min(1),
  district: z.string().optional().default(""),
  pincode: z.string().optional().default(""),
  objective: z.string().min(1),
  systemPref: z.string().min(1),
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
  whatsapp: z.string().optional().default(""),
  email: z.string().email().optional().or(z.literal("")),
  consultation: z.string().min(1),
  estimatedKw: z.number().optional(),
  landingPage: z.string().optional().default(""),
  utmSource: z.string().optional().default(""),
  utmMedium: z.string().optional().default(""),
  utmCampaign: z.string().optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type Lead = LeadInput & {
  id: string;
  createdAt: string;
  stage: string;
};

const stages = [
  "New",
  "Contacted",
  "Qualified",
  "Site Survey Scheduled",
  "Site Survey Completed",
  "Proposal Sent",
  "Negotiation",
  "Won",
  "Lost",
  "Follow-up",
] as const;

export { stages };
