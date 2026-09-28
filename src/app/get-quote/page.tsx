import type { Metadata } from "next";
import { QuoteWizard } from "@/components/leads/quote-wizard";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = {
  title: "Get a solar quote",
  description: "7-step SONIL Solar consultation: property, bill, location, objective, size preference and contact. Planning estimate after submit.",
  alternates: { canonical: "/get-quote" },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  const { city } = await searchParams;
  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/get-quote", label: "Get quote" }]} />
      <h1 className="text-3xl font-semibold tracking-tight text-navy">Solar consultation</h1>
      <p className="text-muted-foreground">
        Seven short steps. After submit you see a planning recommendation — capacity, indicative savings and whether
        household CFA even applies. A site survey still decides the quote.
      </p>
      <QuoteWizard defaultCity={city} />
    </div>
  );
}
