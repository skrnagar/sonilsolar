import type { Metadata } from "next";
import Link from "next/link";
import type { ServicePage } from "@/content/services";
import { AnswerBlock } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { company } from "@/content/company";

export function serviceMetadata(s: ServicePage): Metadata {
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/${s.slug}` },
  };
}

export function ServiceLanding({ service }: { service: ServicePage }) {
  const crumbs = [
    { href: "/", label: "Home" },
    { href: `/${service.slug}`, label: service.h1 },
  ];
  return (
    <article className="mx-auto max-w-6xl space-y-10 px-4 py-10 pb-24">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.label, path: c.href }))),
          faqSchema(service.faqs),
          serviceSchema({ name: service.h1, description: service.description, url: `/${service.slug}` }),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-navy md:text-5xl">{service.h1}</h1>
      <AnswerBlock question={`What is ${service.h1.split("—")[0].trim()} at SONIL Solar?`} answer={service.answer} updated={company.lastVerified} />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border bg-card p-4 text-sm">
          <p className="text-xs text-muted-foreground">Who it serves</p>
          <p className="mt-1 font-medium text-navy">{service.audience}</p>
        </div>
        <div className="rounded-2xl border bg-card p-4 text-sm">
          <p className="text-xs text-muted-foreground">Typical size</p>
          <p className="mt-1 font-medium text-navy">{service.sizeRange}</p>
        </div>
      </div>
      {service.sections.map((sec) => (
        <section key={sec.h2}>
          <h2 className="text-2xl font-semibold text-navy">{sec.h2}</h2>
          <p className="mt-3 max-w-3xl text-[16px] leading-7">{sec.body}</p>
        </section>
      ))}
      <p className="text-sm text-muted-foreground">
        SONIL Solar provides {service.h1.toLowerCase()} in Indore, Bhopal, Pune and Madhya Pradesh for {service.audience.toLowerCase()}.
      </p>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link className="rounded-full border px-3 py-1" href="/solar-company-in-indore">Indore</Link>
        <Link className="rounded-full border px-3 py-1" href="/solar-company-in-bhopal">Bhopal</Link>
        <Link className="rounded-full border px-3 py-1" href="/solar-company-in-pune">Pune</Link>
        <Link className="rounded-full border px-3 py-1" href="/solar-calculator">Calculator</Link>
      </div>
      <FaqList faqs={service.faqs} />
      <CtaBand title="Talk through this scope" text="Send the bill and roof context. We will tell you if this service page is the wrong product." />
    </article>
  );
}
