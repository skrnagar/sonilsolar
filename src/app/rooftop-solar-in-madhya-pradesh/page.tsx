import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/content/answer-block";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { company } from "@/content/company";
import { cities } from "@/content/cities";

export const metadata: Metadata = {
  title: "Rooftop solar in Madhya Pradesh",
  description:
    "Rooftop solar across Madhya Pradesh for homes, businesses and industry. DISCOM split, yield assumptions, and links to city hubs.",
  alternates: { canonical: "/rooftop-solar-in-madhya-pradesh" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/solar-company-in-madhya-pradesh", label: "Madhya Pradesh" },
          { href: "/rooftop-solar-in-madhya-pradesh", label: "Rooftop" },
        ]}
      />
      <h1 className="text-4xl font-semibold text-navy">Rooftop solar in Madhya Pradesh</h1>
      <AnswerBlock
        question="Does rooftop solar work across MP?"
        answer="Yes. Malwa (Indore, Ujjain, Dewas) has slightly higher typical-year specific yield than eastern and far-northern districts. The binding constraint is usually shade, DISCOM circle and sanctioned load — not whether the sun exists. SONIL Solar installs 1 kW–1 MW rooftop across served MP cities. Last verified September 2026."
        updated={company.lastVerified}
      />
      <p className="leading-7">
        Use city pages for local DISCOM and roof stock. This hub exists so “rooftop solar in Madhya Pradesh” has a
        dedicated intent URL instead of blending into a generic locations dump.
      </p>
      <ul className="flex flex-wrap gap-2">
        {cities
          .filter((c) => c.state === "Madhya Pradesh")
          .map((c) => (
            <li key={c.slug}>
              <Link
                className="rounded-full border px-3 py-1 text-sm"
                href={c.intents ? `/rooftop-solar-in-${c.slug}` : `/solar-company-in-${c.slug}`}
              >
                {c.name}
              </Link>
            </li>
          ))}
      </ul>
      <CtaBand title="MP rooftop enquiry" text="Name the district and meter type." />
    </article>
  );
}
