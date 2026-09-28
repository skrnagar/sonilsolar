import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 pb-24 leading-7">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/terms", label: "Terms" }]} />
      <h1 className="text-3xl font-semibold text-navy">Terms</h1>
      <p>
        Website calculators and price bands are estimates. A contract exists only in a written quotation / work order.
        Subsidy is never guaranteed by this website. Equipment warranties are manufacturer terms plus whatever is written
        in your handover pack.
      </p>
    </article>
  );
}
