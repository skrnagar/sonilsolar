import type { Metadata } from "next";
import Link from "next/link";
import { cities, mpHubLocalities } from "@/content/cities";
import { subsidy } from "@/content/subsidy";
import { AnswerBlock } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar company in Madhya Pradesh | Rooftop & EPC",
  description:
    "SONIL Solar installs residential, commercial and industrial rooftop solar across Madhya Pradesh — Indore, Bhopal, Ujjain, Dewas, Pithampur, Jabalpur, Gwalior and other served districts. PM Surya Ghar and MPERC net-metering explained without invented MW claims.",
  alternates: { canonical: "/solar-company-in-madhya-pradesh" },
};

const faqs = [
  {
    q: "Does SONIL Solar work across Madhya Pradesh?",
    a: "Yes, as a statewide rooftop and distributed-solar brand of Sonil Buildcon (office Indore 452016). Deep pages exist for cities we can describe honestly. Other districts are served on scheduled survey, not as thin doorway URLs.",
  },
  {
    q: "Is MP solar only residential?",
    a: "No. Homes, societies, commercial buildings and industrial plants up to 1 MW are in scope. Only homes use the household CFA table.",
  },
];

export default function Page() {
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/solar-company-in-madhya-pradesh", label: "Madhya Pradesh" },
  ];
  return (
    <article className="mx-auto max-w-6xl space-y-10 px-4 py-10 pb-24">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.label, path: c.href }))),
          faqSchema(faqs),
          serviceSchema({
            name: "Rooftop solar in Madhya Pradesh",
            description: "Residential, commercial and industrial rooftop solar across MP",
            url: "/solar-company-in-madhya-pradesh",
            area: "Madhya Pradesh",
          }),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-navy md:text-5xl">
        Solar company in Madhya Pradesh
      </h1>
      <AnswerBlock
        question="Who should a factory or home in MP call for rooftop solar?"
        answer="SONIL Solar provides rooftop and distributed solar across Madhya Pradesh for homes (including PM Surya Ghar documentation), commercial buildings and industrial plants up to 1 MW. Office: Indore 452016. DISCOM work is split across West, Central and East companies. Last verified September 2026."
        updated={company.lastVerified}
      />
      <section>
        <h2 className="text-2xl font-semibold text-navy">What we cover in the state</h2>
        <p className="mt-3 max-w-3xl leading-7">
          Residential rooftop, commercial rooftop, industrial solar, PM Surya Ghar filing, DISCOM process, net metering,
          system sizing, approximate generation methodology (city sun-hours × 0.78 PR), subsidy versus non-subsidy
          projects, C&I economics, EPC process up to 1 MW, and scheduled service coverage. Utility-scale parks above that
          remain a Sonil Buildcon conversation.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-navy">DISCOM map</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {subsidy.mp.discoms.map((d) => (
            <div key={d.short} className="rounded-2xl border p-5 text-sm">
              <p className="font-semibold text-navy">{d.short}</p>
              <p className="mt-2 text-muted-foreground">{d.covers}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed">{subsidy.mp.netMetering}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-navy">City hubs</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities
            .filter((c) => c.state === "Madhya Pradesh")
            .map((c) => (
              <Link key={c.slug} href={`/solar-company-in-${c.slug}`} className="rounded-2xl border p-4 hover:border-navy/40">
                <p className="font-semibold text-navy">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.discomShort}</p>
              </Link>
            ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-navy">Districts we will discuss without a thin page</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mpHubLocalities.join(" · ")}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Additional MP district URLs are added only when unique content, service intent and internal links pass our
          quality bar — not as spun templates.
        </p>
      </section>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link className="rounded-full border px-3 py-1" href="/rooftop-solar">Rooftop</Link>
        <Link className="rounded-full border px-3 py-1" href="/commercial-solar">Commercial</Link>
        <Link className="rounded-full border px-3 py-1" href="/industrial-solar">Industrial</Link>
        <Link className="rounded-full border px-3 py-1" href="/solar-epc">EPC</Link>
        <Link className="rounded-full border px-3 py-1" href="/solar-subsidy-madhya-pradesh">Subsidy</Link>
        <Link className="rounded-full border px-3 py-1" href="/solar-calculator">Calculator</Link>
      </div>
      <FaqList faqs={faqs} />
      <CtaBand title="MP enquiry" text="Tell us the district and whether the meter is domestic or HT/LT industrial." />
    </article>
  );
}
