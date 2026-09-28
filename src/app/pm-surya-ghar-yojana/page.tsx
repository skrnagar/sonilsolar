import type { Metadata } from "next";
import Link from "next/link";
import { subsidy } from "@/content/subsidy";
import { company } from "@/content/company";
import { AnswerBlock, VerifyNote } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { inr } from "@/lib/format";

export const metadata: Metadata = {
  title: "PM Surya Ghar Muft Bijli Yojana — subsidy guide",
  description:
    "Authoritative planning guide to PM Surya Ghar CFA: ₹30,000/kW for the first 2 kW, ₹18,000 for the next 1 kW, max ₹78,000. Application steps, documents, GHS/RWA rules, and what commercial projects cannot claim.",
  alternates: { canonical: "/pm-surya-ghar-yojana" },
};

const faqs = [
  {
    q: "What is the solar subsidy under PM Surya Ghar?",
    a: "For eligible residential systems: ₹30,000 per kW for the first 2 kW and ₹18,000 per kW for additional capacity up to 3 kW. Maximum CFA ₹78,000. No extra central CFA beyond 3 kW. Last verified September 2026.",
  },
  {
    q: "Who is eligible?",
    a: "Residential consumers with a grid-connected DISCOM connection who apply on pmsuryaghar.gov.in and meet module/vendor/inspection conditions. Not automatic for commercial or industrial meters.",
  },
  {
    q: "How is CFA paid?",
    a: "Direct Benefit Transfer to the bank account registered on the portal after installation, net metering and inspection — not as an instant vendor discount unless a specific DISCOM process says otherwise.",
  },
  {
    q: "Do housing societies get the ₹78,000 cap?",
    a: "GHS/RWA common facilities follow a separate CFA (commonly ₹18,000/kW with per-house and 500 kW caps). Do not mix tables.",
  },
];

export default function Page() {
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/pm-surya-ghar-yojana", label: "PM Surya Ghar" },
  ];
  return (
    <article className="mx-auto max-w-6xl space-y-10 px-4 py-10 pb-24">
      <JsonLd data={[breadcrumbSchema(crumbs.map((c) => ({ name: c.label, path: c.href }))), faqSchema(faqs)]} />
      <Breadcrumbs items={crumbs} />
      <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">
        Last verified {subsidy.lastVerified} · Sources:{" "}
        {subsidy.sources.map((s, i) => (
          <span key={s.href}>
            {i > 0 ? " · " : ""}
            <a className="underline" href={s.href} rel="noopener">
              {s.name}
            </a>
          </span>
        ))}
      </p>
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-navy md:text-5xl">
        PM Surya Ghar: Muft Bijli Yojana
      </h1>
      <AnswerBlock
        question="How much central subsidy can a home get?"
        answer="₹30,000/kW for the first 2 kW, ₹18,000/kW for the next 1 kW, no additional CFA beyond 3 kW — maximum ₹78,000 for eligible residential rooftop systems. The scheme launched February 2024 with a ₹75,021 crore outlay and a 1 crore household target. Apply at pmsuryaghar.gov.in."
        updated={subsidy.lastVerified}
      />
      <VerifyNote>{subsidy.note}</VerifyNote>

      <section>
        <h2 className="text-2xl font-semibold text-navy">CFA table (residential)</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Segment</th>
                <th className="px-4 py-3">Rate</th>
              </tr>
            </thead>
            <tbody>
              {subsidy.residentialCfa.map((r) => (
                <tr key={r.segment} className="border-t">
                  <td className="px-4 py-3">{r.segment}</td>
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3">System size</th>
                <th className="px-4 py-3">CFA example</th>
              </tr>
            </thead>
            <tbody>
              {subsidy.examples.map((e) => (
                <tr key={e.sizeKw} className="border-t">
                  <td className="px-4 py-3">{e.sizeKw} kW</td>
                  <td className="px-4 py-3">{inr(e.cfa)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">GHS / RWA</h2>
        <p className="mt-3 max-w-3xl leading-7">{subsidy.ghsRwa}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">What commercial projects cannot claim</h2>
        <p className="mt-3 max-w-3xl leading-7">{subsidy.notForCi}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">Application walkthrough</h2>
        <ol className="mt-4 space-y-4">
          {subsidy.applicationSteps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border bg-card p-4">
              <p className="text-xs text-muted-foreground">Step {i + 1}</p>
              <h3 className="font-semibold text-navy">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-navy">Documents</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {subsidy.documents.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-navy">Common mistakes</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {subsidy.mistakes.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy">What SONIL Solar does — and what you do</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium text-navy">We</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Site survey, design, eligible equipment path, installation, protection, monitoring, and DISCOM file support
              for feasibility, net meter and inspection. Parent: {company.parent}.
            </p>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium text-navy">You</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Portal registration with the correct consumer number, bank details for DBT, society NOC if the roof is not
              solely yours, and access for survey and inspection.
            </p>
          </div>
        </div>
      </section>

      <p className="text-sm">
        Related: <Link className="underline" href="/solar-subsidy-madhya-pradesh">MP subsidy & net metering</Link> ·{" "}
        <Link className="underline" href="/blog/how-to-apply-for-solar-subsidy-in-madhya-pradesh">Step-by-step MP application</Link> ·{" "}
        <Link className="underline" href="/solar-calculator">Calculator</Link>
      </p>
      <FaqList faqs={faqs} />
      <CtaBand title="Check if your home connection can file" text="Bring the bill. We will not tell a factory it has household CFA." />
    </article>
  );
}
