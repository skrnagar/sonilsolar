import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { systemGuides } from "@/content/systems";

export const metadata: Metadata = {
  title: "Solar projects & case studies",
  description:
    "SONIL Solar project types for homes, societies, factories and warehouses. Verified named case studies are published only with client-approved data — we do not invent plants.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-6xl space-y-10 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }]} />
      <h1 className="text-4xl font-semibold tracking-tight text-navy">Projects</h1>
      <p className="max-w-3xl leading-7">
        This page lists <strong>project types</strong> we design for. Named rooftop case studies (location, kW, bills,
        photographs, testimonials) appear only when the file is real and the client allows publication. Empty is more
        useful to Google and to you than a fabricated Pithampur 100 kW story.
      </p>
      <div className="rounded-2xl border border-dashed bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
        CMS fields ready: location, capacity, customer segment, technology, status, photos, results, testimonial, date.
        Admin can add a verified project without a code change once storage is connected. Until then, treat this as the
        public placeholder.
      </div>
      <h2 className="text-2xl font-semibold text-navy">Engineering scopes we will discuss</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {systemGuides.map((g) => (
          <Link key={g.slug} href={`/${g.slug}`} className="rounded-2xl border bg-card p-5 hover:border-navy/40">
            <p className="text-xs text-muted-foreground">{g.kw} kW class</p>
            <h3 className="mt-1 font-semibold text-navy">{g.h1}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{g.answer}</p>
          </Link>
        ))}
        <Link href="/residential-solar" className="rounded-2xl border bg-card p-5 hover:border-navy/40">
          <p className="text-xs text-muted-foreground">1–10 kW</p>
          <h3 className="mt-1 font-semibold text-navy">Residential rooftop</h3>
          <p className="mt-2 text-sm text-muted-foreground">Homes and villas, CFA path where eligible.</p>
        </Link>
        <Link href="/housing-society-solar" className="rounded-2xl border bg-card p-5 hover:border-navy/40">
          <p className="text-xs text-muted-foreground">RWA</p>
          <h3 className="mt-1 font-semibold text-navy">Housing society common roof</h3>
          <p className="mt-2 text-sm text-muted-foreground">Resolution and structure first.</p>
        </Link>
      </div>
      <CtaBand title="Have a plant we can document?" text="If you become a client, you control whether bills and photos go public." />
    </article>
  );
}
