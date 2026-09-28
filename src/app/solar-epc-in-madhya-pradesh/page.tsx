import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/content/answer-block";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Solar EPC in Madhya Pradesh",
  description: "Distributed solar EPC up to 1 MW in Madhya Pradesh from SONIL Solar / Sonil Buildcon.",
  alternates: { canonical: "/solar-epc-in-madhya-pradesh" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/solar-epc-in-madhya-pradesh", label: "EPC MP" }]} />
      <h1 className="text-4xl font-semibold text-navy">Solar EPC in Madhya Pradesh</h1>
      <AnswerBlock
        question="What does solar EPC mean here?"
        answer="Engineering, procurement and construction for distributed solar up to 1 MW in Madhya Pradesh — drawings, structure, electrical, testing, DISCOM interconnection and handover. Utility-scale parks above that remain a Sonil Buildcon infrastructure conversation. Office: Indore 452016."
        updated={company.lastVerified}
      />
      <p className="leading-7">
        <Link className="underline" href="/solar-epc">EPC service page</Link> ·{" "}
        <Link className="underline" href="/1mw-rooftop-solar">1 MW guide</Link>
      </p>
      <CtaBand title="EPC enquiry" text="Package size, location and grid voltage are the first three facts we need." />
    </article>
  );
}
