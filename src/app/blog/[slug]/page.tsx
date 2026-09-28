import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/blog";
import { AnswerBlock } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.description, alternates: { canonical: `/blog/${a.slug}` } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Guides" },
    { href: `/blog/${a.slug}`, label: a.title },
  ];
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 pb-24">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.label, path: c.href }))),
          faqSchema(a.faqs),
          articleSchema({
            title: a.title,
            description: a.description,
            url: `/blog/${a.slug}`,
            date: a.date,
            updated: a.updated,
          }),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <p className="text-xs text-muted-foreground">
        {a.category} · Published {a.date} · Updated {a.updated}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">{a.title}</h1>
      <AnswerBlock question={a.title.replace(" (2026)", "").replace(" —", "?")} answer={a.answer} updated={a.updated} />
      {a.body.map((b) => (
        <section key={b.h2}>
          <h2 className="text-2xl font-semibold text-navy">{b.h2}</h2>
          <div className="mt-3 space-y-3 text-[16px] leading-7" dangerouslySetInnerHTML={{ __html: b.html }} />
        </section>
      ))}
      {a.sources?.length ? (
        <p className="text-sm">
          Sources:{" "}
          {a.sources.map((s, i) => (
            <span key={s.href}>
              {i > 0 ? " · " : ""}
              <a className="underline" href={s.href} rel="noopener">
                {s.name}
              </a>
            </span>
          ))}
        </p>
      ) : null}
      <FaqList faqs={a.faqs} />
      <CtaBand title="Use this with a bill, not instead of a survey" text="Guides are for orientation. Quotes need a roof." />
    </article>
  );
}
