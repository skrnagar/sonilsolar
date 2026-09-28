import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/content/answer-block";
import { PriceTable } from "@/components/content/price-table";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Solar panel price in Madhya Pradesh",
  description: "Indicative 1–10 kW rooftop solar prices in Madhya Pradesh with PM Surya Ghar CFA treatment. Planning bands, not quotations.",
  alternates: { canonical: "/solar-panel-price-in-madhya-pradesh" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-5xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/solar-panel-price-in-madhya-pradesh", label: "MP prices" }]} />
      <h1 className="text-4xl font-semibold text-navy">Solar panel price in Madhya Pradesh</h1>
      <AnswerBlock
        question="What does rooftop solar cost in MP?"
        answer="Residential on-grid planning bands in 2026 are about ₹65,000–₹85,000 gross per kW at 1 kW, ₹1.70–₹2.30 lakh at 3 kW, and ₹2.70–₹3.50 lakh at 5 kW, before eligible CFA (max ₹78,000 at 3 kW+). Industrial ₹/kW is usually lower but site-specific. Not a quotation."
        updated={company.lastVerified}
      />
      <PriceTable city="indore" />
      <p className="text-sm">
        City tables: <Link className="underline" href="/solar-panel-price-in-indore">Indore</Link> ·{" "}
        <Link className="underline" href="/solar-panel-price-in-bhopal">Bhopal</Link>
      </p>
      <CtaBand title="Price a real roof" text="Bands are for orientation. Structure and shade decide the quote." />
    </article>
  );
}
