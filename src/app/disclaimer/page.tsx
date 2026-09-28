import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = { title: "Disclaimer", alternates: { canonical: "/disclaimer" } };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 pb-24 leading-7">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/disclaimer", label: "Disclaimer" }]} />
      <h1 className="text-3xl font-semibold text-navy">Disclaimer</h1>
      <p>
        Tariff, CFA, net-metering and generation figures are planning values last reviewed September 2026 against public
        scheme structure. MNRE, the national portal, MPERC, MERC and DISCOM circulars prevail. We are not the government.
        We do not claim to be “#1” in any city.
      </p>
    </article>
  );
}
