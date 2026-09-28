import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/content/answer-block";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Industrial solar in Madhya Pradesh",
  description: "Industrial rooftop solar up to 1 MW in MP — Pithampur, Dewas, Sanwer Road, Mandideep and scheduled statewide surveys.",
  alternates: { canonical: "/industrial-solar-in-madhya-pradesh" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/industrial-solar-in-madhya-pradesh", label: "Industrial MP" }]} />
      <h1 className="text-4xl font-semibold text-navy">Industrial solar in Madhya Pradesh</h1>
      <AnswerBlock
        question="Where is industrial rooftop solar actually happening in MP?"
        answer="Pithampur, Dewas Industrial Area, Sanwer Road (Indore), Mandideep (Bhopal), plus scheduled plants elsewhere. SONIL Solar treats these as EPC-style jobs up to 1 MW. Household CFA does not apply. Net metering capacity must match the live MPERC order and DISCOM letter."
        updated={company.lastVerified}
      />
      <p className="leading-7">
        <Link className="underline" href="/solar-company-in-pithampur">Pithampur</Link> ·{" "}
        <Link className="underline" href="/solar-company-in-dewas">Dewas</Link> ·{" "}
        <Link className="underline" href="/industrial-solar">Industrial service</Link> ·{" "}
        <Link className="underline" href="/solar-epc-in-madhya-pradesh">EPC in MP</Link>
      </p>
      <CtaBand title="Factory / warehouse enquiry" text="HT or LT, shed photos, and a recent bill get a useful first response." />
    </article>
  );
}
