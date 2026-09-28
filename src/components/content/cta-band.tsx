import Link from "next/link";
import { Button } from "@/components/ui/button";
import { waLink, telLink } from "@/lib/format";

export function CtaBand({
  title,
  text,
  city,
}: {
  title: string;
  text: string;
  city?: string;
}) {
  const quote = city ? `/get-quote?city=${city}` : "/get-quote";
  return (
    <section className="hero-wash relative overflow-hidden rounded-3xl px-6 py-10 text-white md:px-10 md:py-14">
      <div className="panel-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <p className="mt-3 text-white/75">{text}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-amber text-navy hover:bg-amber/90">
            <Link href={quote}>Get solar quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link href="/solar-calculator">Calculate savings</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            <a href={waLink(`Hello SONIL Solar, I want a consultation${city ? ` in ${city}` : ""}.`)}>WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap gap-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 ? <span>/</span> : null}
            {i === items.length - 1 ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-navy">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { waLink, telLink };
