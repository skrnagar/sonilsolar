import type { Metadata } from "next";
import { getSystem } from "@/content/systems";
import { AnswerBlock } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { company } from "@/content/company";

const sys = getSystem("1mw-rooftop-solar");
export const metadata: Metadata = sys
  ? { title: sys.title, description: sys.answer.slice(0, 155), alternates: { canonical: "/1mw-rooftop-solar" } }
  : {};

export default function Page() {
  if (!sys) notFound();
  const crumbs = [{ href: "/", label: "Home" }, { href: "/1mw-rooftop-solar", label: sys.h1 }];
  return (
    <article className="mx-auto max-w-6xl space-y-10 px-4 py-10 pb-24">
      <JsonLd data={[breadcrumbSchema(crumbs.map(c => ({ name: c.label, path: c.href }))), faqSchema(sys.faqs), serviceSchema({ name: sys.h1, description: sys.answer, url: "/1mw-rooftop-solar" })]} />
      <Breadcrumbs items={crumbs} />
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy">{sys.h1}</h1>
      <AnswerBlock question={`What is a ${sys.kw} kW rooftop plant?`} answer={sys.answer} updated={company.lastVerified} />
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border bg-card p-4"><p className="text-xs text-muted-foreground">Roof</p><p className="mt-1 text-sm font-medium text-navy">{sys.roofSqm}</p></div>
        <div className="rounded-2xl border bg-card p-4"><p className="text-xs text-muted-foreground">Generation</p><p className="mt-1 text-sm font-medium text-navy">{sys.annualGen}</p></div>
        <div className="rounded-2xl border bg-card p-4"><p className="text-xs text-muted-foreground">Typical use</p><p className="mt-1 text-sm font-medium text-navy">{sys.use}</p></div>
      </div>
      {sys.sections.map(s => (
        <section key={s.h2}>
          <h2 className="text-2xl font-semibold text-navy">{s.h2}</h2>
          <p className="mt-3 max-w-3xl leading-7">{s.body}</p>
        </section>
      ))}
      <FaqList faqs={sys.faqs} />
      <CtaBand title="Industrial / C&I enquiry" text="This capacity is quoted after a load and roof study — not from the residential CFA table." />
    </article>
  );
}
