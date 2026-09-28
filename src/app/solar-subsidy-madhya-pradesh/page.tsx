import type { Metadata } from "next";
import Link from "next/link";
import { subsidy } from "@/content/subsidy";
import { cities, mpHubLocalities } from "@/content/cities";
import { AnswerBlock, VerifyNote } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { PriceTable } from "@/components/content/price-table";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solar subsidy in Madhya Pradesh | Net metering & PM Surya Ghar",
  description:
    "How rooftop solar subsidy and net metering work in Madhya Pradesh: PM Surya Ghar CFA, MPUVNL, West/Central/East DISCOMs, and MPERC surplus settlement notes. Last verified September 2026.",
  alternates: { canonical: "/solar-subsidy-madhya-pradesh" },
};

const faqs = [
  {
    q: "What is the solar subsidy in Madhya Pradesh?",
    a: "Homes use national PM Surya Ghar CFA (max ₹78,000 at 3 kW), filed with the correct MP DISCOM. MPUVNL is the state implementing agency. We do not print a separate household state percentage without a live MPUVNL circular.",
  },
  {
    q: "Which DISCOM do I select?",
    a: "West (Paschim, Indore), Central (Madhya, Bhopal) or East (Poorv, Jabalpur) — the one printed on the bill, not the nearest marketing city.",
  },
  {
    q: "How does net metering work in MP?",
    a: "Eligible rooftop systems can be net-metered under MPERC. Practitioner guidance around RG-39 of 2024 commonly cites up to 500 kW, with surplus often described as banked and settled annually in September against APPC. Confirm the live order.",
  },
];

export default function Page() {
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/solar-subsidy-madhya-pradesh", label: "MP solar subsidy" },
  ];
  return (
    <article className="mx-auto max-w-6xl space-y-10 px-4 py-10 pb-24">
      <JsonLd data={[breadcrumbSchema(crumbs.map((c) => ({ name: c.label, path: c.href }))), faqSchema(faqs)]} />
      <Breadcrumbs items={crumbs} />
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-navy md:text-5xl">
        Solar subsidy in Madhya Pradesh
      </h1>
      <AnswerBlock
        question="How do MP homes actually get solar subsidy?"
        answer="Apply on pmsuryaghar.gov.in, select Madhya Pradesh and the DISCOM on your bill (West / Central / East), obtain feasibility, install through an eligible vendor path, complete net metering and inspection, then receive CFA by DBT. MPUVNL implements the scheme in the state. Last verified September 2026."
        updated={subsidy.lastVerified}
      />
      <VerifyNote />

      <section>
        <h2 className="text-2xl font-semibold text-navy">Three DISCOMs, one CFA table</h2>
        <p className="mt-3 max-w-3xl leading-7">
          Central CFA does not change when you cross from Indore to Jabalpur. The login, circle office and inspection staff
          do. MPUVNL: {subsidy.mp.implementingAgency}.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {subsidy.mp.discoms.map((d) => (
            <div key={d.short} className="rounded-2xl border bg-card p-5">
              <h3 className="font-semibold text-navy">{d.short}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{d.legal}</p>
              <p className="mt-2 text-sm">HQ: {d.hq}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.covers}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">Net metering (read the order)</h2>
        <p className="mt-3 max-w-3xl leading-7">{subsidy.mp.netMetering}</p>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{subsidy.mp.institutionalNote}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">Residential cost bands used with this subsidy</h2>
        <div className="mt-4">
          <PriceTable />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">MP cities with unique pages</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {cities
            .filter((c) => c.state === "Madhya Pradesh")
            .map((c) => (
              <Link key={c.slug} href={`/solar-company-in-${c.slug}`} className="rounded-full border px-3 py-1.5 text-sm">
                {c.name}
              </Link>
            ))}
          <Link href="/solar-company-in-madhya-pradesh" className="rounded-full border px-3 py-1.5 text-sm">
            State hub
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Wider catchment we will discuss on enquiry: {mpHubLocalities.join(", ")}.</p>
      </section>

      <FaqList faqs={faqs} />
      <CtaBand title="File under the correct DISCOM" text="Send a photo of the bill header. Wrong circle selection is the slowest own-goal in MP rooftop." />
    </article>
  );
}
