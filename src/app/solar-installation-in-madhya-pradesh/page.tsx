import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/content/answer-block";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Solar installation in Madhya Pradesh",
  description: "How SONIL Solar installs rooftop solar in MP: survey, design, DISCOM, lifting, net meter, inspection.",
  alternates: { canonical: "/solar-installation-in-madhya-pradesh" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/solar-installation-in-madhya-pradesh", label: "Installation MP" }]} />
      <h1 className="text-4xl font-semibold text-navy">Solar installation in Madhya Pradesh</h1>
      <AnswerBlock
        question="How long does solar installation take in MP?"
        answer="Lifting on a clear residential RCC roof is often a few days after design freeze. The calendar is usually DISCOM feasibility, net-meter replacement and inspection — which varies by West, Central and East DISCOM workload. We will not advertise a statewide ‘48-hour install’ that ignores the meter."
        updated={company.lastVerified}
      />
      <p className="leading-7">
        City installation pages: <Link className="underline" href="/solar-installation-in-indore">Indore</Link>,{" "}
        <Link className="underline" href="/solar-installation-in-bhopal">Bhopal</Link>.
      </p>
      <CtaBand title="Book a survey" text="Photographs of the roof and the bill header save a wasted visit." />
    </article>
  );
}
