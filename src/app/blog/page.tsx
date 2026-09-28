import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/blog";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = {
  title: "Solar guides",
  description: "Price, subsidy, net metering and industrial rooftop guides from SONIL Solar — written to be cited, dated, and sourced.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/blog", label: "Guides" }]} />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy">Guides</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Long-form answers for search and AI assistants. Every policy number carries a last-verified date.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {articles.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-2xl border bg-card p-5 hover:border-navy/40">
            <p className="text-xs text-muted-foreground">
              {a.category} · Updated {a.updated}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-navy">{a.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.answer}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
