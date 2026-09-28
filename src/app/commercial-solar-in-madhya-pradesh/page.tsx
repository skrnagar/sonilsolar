import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/content/answer-block";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Commercial solar in Madhya Pradesh",
  description: "Commercial rooftop solar in MP for offices, retail and institutions. Not household CFA. DISCOM-led interconnection.",
  alternates: { canonical: "/commercial-solar-in-madhya-pradesh" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/commercial-solar-in-madhya-pradesh", label: "Commercial MP" }]} />
      <h1 className="text-4xl font-semibold text-navy">Commercial solar in Madhya Pradesh</h1>
      <AnswerBlock
        question="Do MP commercial connections get PM Surya Ghar?"
        answer="No. Offices, shops, most schools and hospitals in Madhya Pradesh should not budget household CFA. SONIL Solar sizes commercial rooftop on tariff and daytime load, filed with West, Central or East DISCOM as on the bill."
        updated={company.lastVerified}
      />
      <p className="leading-7">
        Continue: <Link className="underline" href="/commercial-solar">commercial service</Link>,{" "}
        <Link className="underline" href="/commercial-solar-in-indore">Indore commercial</Link>,{" "}
        <Link className="underline" href="/commercial-solar-in-bhopal">Bhopal commercial</Link>.
      </p>
      <CtaBand title="Commercial enquiry" text="Share 12 months of bills if you have them." />
    </article>
  );
}
