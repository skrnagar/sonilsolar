import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/content/cities";
import { intentMeta } from "@/content/intents";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = {
  title: "Solar locations — Indore, Bhopal, Pune, Madhya Pradesh",
  description: "SONIL Solar service cities. Deep pages for Indore, Bhopal and Pune; unique district pages for selected MP cities. No thin doorway spam.",
  alternates: { canonical: "/locations" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/locations", label: "Locations" }]} />
      <h1 className="mt-6 text-4xl font-semibold text-navy">Locations</h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        One URL per city. Intent pages (rooftop, price, 3 kW…) exist for Indore, Bhopal and Pune only. Other MP cities
        have a single unique company page until content quality supports more.
      </p>
      <div className="mt-10 space-y-8">
        {cities.map((c) => (
          <section key={c.slug} className="rounded-2xl border bg-card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-navy">
                <Link href={`/solar-company-in-${c.slug}`}>{c.name}</Link>
              </h2>
              <p className="text-xs text-muted-foreground">{c.state} · {c.discomShort}</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.serviceRadius}</p>
            {c.intents ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.entries(intentMeta).map(([k, v]) => (
                  <Link key={k} href={v.path(c.slug)} className="rounded-full border px-3 py-1 text-xs hover:border-navy">
                    {v.navLabel}
                  </Link>
                ))}
              </div>
            ) : (
              <Link href={`/solar-company-in-${c.slug}`} className="mt-3 inline-block text-sm font-medium text-navy">
                Open {c.name} page
              </Link>
            )}
          </section>
        ))}
        <section className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold text-navy">
            <Link href="/solar-company-in-madhya-pradesh">Madhya Pradesh hub</Link>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Statewide DISCOM, subsidy and EPC context.</p>
        </section>
      </div>
    </div>
  );
}
