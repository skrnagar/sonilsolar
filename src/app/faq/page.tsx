import type { Metadata } from "next";
import { FaqList } from "@/components/content/faq-list";
import { cities } from "@/content/cities";
import { Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar FAQ",
  description: "Direct answers on rooftop solar cost, subsidy, generation, batteries, net metering and SONIL Solar process.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What is the cost of solar installation in Indore?",
    a: "Residential 3 kW on-grid systems typically plan at ₹1.70–₹2.30 lakh gross before eligible CFA up to ₹78,000. See the Indore price page for the full band table.",
  },
  {
    q: "How much subsidy is available for rooftop solar in MP?",
    a: "Household CFA under PM Surya Ghar: ₹30,000/kW for the first 2 kW, ₹18,000 for the next 1 kW, cap ₹78,000. Last verified September 2026.",
  },
  {
    q: "What is the price of a 3 kW solar system?",
    a: "About ₹1.70–₹2.30 lakh installed before CFA; net often near ₹0.92–₹1.52 lakh if eligible. Not a quotation.",
  },
  {
    q: "What is the price of a 5 kW solar system?",
    a: "About ₹2.70–₹3.50 lakh gross; CFA still caps at ₹78,000.",
  },
  {
    q: "How much electricity does 3 kW solar generate?",
    a: "In Indore-class climate, roughly 330–420 units/month as a yearly average on a low-shade roof.",
  },
  {
    q: "Can solar run two ACs?",
    a: "It can offset their daytime units; 5 kW is a common conversation. It will not island them without hybrid batteries.",
  },
  {
    q: "How much roof area is required?",
    a: "About 8 m² unshaded per kW plus access.",
  },
  {
    q: "How long does solar installation take?",
    a: "Lifting may be days; DISCOM commissioning is usually weeks.",
  },
  {
    q: "Is battery required?",
    a: "Not for standard on-grid.",
  },
  {
    q: "Is subsidy available for commercial solar?",
    a: "Not the household table. Societies have a separate GHS/RWA path.",
  },
  {
    q: "What is net metering?",
    a: "A bidirectional meter arrangement so export can offset later import, under DISCOM/regulatory rules.",
  },
  {
    q: "How does PM Surya Ghar work?",
    a: "Portal application, DISCOM feasibility, eligible install, net meter, inspection, CFA by DBT.",
  },
  {
    q: "Which solar panel is best?",
    a: "The one that is eligible (for CFA jobs), warranted, and matches the design — not a brand slogan. We specify after survey.",
  },
  {
    q: "Which inverter is best for rooftop solar?",
    a: "String inverters are the on-grid default; hybrid if backup is specified. We do not pick from a homepage banner.",
  },
  {
    q: "How much can a factory save with solar?",
    a: "Daytime kWh × energy charge × self-consumption fraction, minus O&M. Needs a load file.",
  },
  {
    q: "Is 100 kW solar suitable for my factory?",
    a: "Only if roof and daytime load say so. See the 100 kW planning page.",
  },
  {
    q: "Does SONIL Solar handle documentation?",
    a: "Yes — feasibility, net meter and inspection support. You still register on the national portal for CFA jobs.",
  },
  {
    q: "Do you provide maintenance?",
    a: "O&M/AMC is offered for plants we install, and third-party plants case by case.",
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 pb-24">
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/faq", label: "FAQ" }]} />
      <h1 className="text-4xl font-semibold text-navy">FAQ</h1>
      <FaqList faqs={faqs} title="Answer-first questions" />
      <p className="text-sm text-muted-foreground">
        City-specific FAQs live on {cities.filter((c) => c.mega).map((c) => c.name).join(", ")} pages.
      </p>
    </div>
  );
}
