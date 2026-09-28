import type { Metadata } from "next";
import { SolarCalculator } from "@/components/calculator/solar-calculator";
import { AnswerBlock } from "@/components/content/answer-block";
import { Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Solar savings calculator | Size, subsidy, payback",
  description:
    "SONIL Solar calculator: monthly bill, city, tariff and roof in; recommended kW, CFA where eligible, payback and CO₂ out. Estimates only — Indore, Bhopal, Pune and MP sun-hour files.",
  alternates: { canonical: "/solar-calculator" },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city } = await searchParams;
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/solar-calculator", label: "Calculator" }]} />
      <h1 className="text-3xl font-semibold tracking-tight text-navy md:text-5xl">Solar savings calculator</h1>
      <AnswerBlock
        question="How do you estimate system size?"
        answer="We convert your monthly bill into kWh using the tariff you enter (or a city default), assume a daytime share of that energy, divide by city peak sun hours × 30 × 0.78 performance ratio, then cap by optional roof area and sanctioned load. Residential property types apply the current PM Surya Ghar CFA table. Results are planning estimates, not quotations."
        updated={company.lastVerified}
      />
      <SolarCalculator defaultCity={city || "indore"} />
    </div>
  );
}
