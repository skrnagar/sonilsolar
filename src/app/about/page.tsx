import type { Metadata } from "next";
import { company } from "@/content/company";
import { AnswerBlock } from "@/components/content/answer-block";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = {
  title: "About SONIL Solar",
  description:
    "SONIL Solar is the rooftop and distributed-solar brand of Sonil Buildcon Pvt. Ltd., Indore. Homes, C&I and EPC up to 1 MW in MP and Pune.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]} />
      <h1 className="text-4xl font-semibold tracking-tight text-navy">About SONIL Solar</h1>
      <AnswerBlock question="Who is SONIL Solar?" answer={company.positioning} />
      <p className="leading-7">
        Sonil Buildcon Private Limited is an engineering, procurement and construction company. Public company materials
        list an office in Indore, Madhya Pradesh 452016, and work across transmission, solar civil / MMS, substations and
        related infrastructure. SONIL Solar is the brand for rooftop and distributed plants that a homeowner, RWA or
        plant manager can actually buy: survey, design, install, DISCOM file, O&M.
      </p>
      <p className="leading-7">
        We do not publish installation counters, star ratings or awards that are not on the company file. When verified
        rooftop case studies exist, they will appear on the projects page with location, capacity and what we are allowed
        to show.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
        <li>Legal name: {company.legalName}</li>
        <li>Brand: {company.brand}</li>
        <li>Office: {company.addressLine}</li>
        <li>Phone: {company.phoneDisplay}</li>
        <li>Email: {company.email}</li>
        <li>Hours: {company.hours}</li>
        <li>Parent site: <a className="underline" href={company.parentSite}>{company.parentSite}</a></li>
      </ul>
      <CtaBand title="Talk to the same number as the EPC firm" text="Rooftop enquiries and infrastructure enquiries share +91 93405 83565. Say which you are." />
    </article>
  );
}
