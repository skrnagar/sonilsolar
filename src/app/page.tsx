import Link from "next/link";
import { SolarCalculator } from "@/components/calculator/solar-calculator";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/content/faq-list";
import { CtaBand } from "@/components/content/cta-band";
import { AnswerBlock } from "@/components/content/answer-block";
import { company } from "@/content/company";
import { cities } from "@/content/cities";
import { services } from "@/content/services";
import { articles } from "@/content/blog";
import { ArrowRight, Building2, Factory, Home, Landmark, ShieldCheck, Sun } from "lucide-react";

const homeFaqs = [
  {
    q: "What is the cost of rooftop solar in Indore?",
    a: "A 3 kW residential on-grid system typically costs about ₹1.70–₹2.30 lakh before eligible PM Surya Ghar CFA of up to ₹78,000. 5 kW is commonly ₹2.70–₹3.50 lakh gross. These are 2026 planning bands, not quotations.",
  },
  {
    q: "How much subsidy is available for rooftop solar in MP?",
    a: "Eligible homes can claim central CFA of ₹30,000/kW for the first 2 kW and ₹18,000 for the next 1 kW, capped at ₹78,000. Commercial and industrial connections do not get this household CFA. Last verified September 2026 on the national scheme structure.",
  },
  {
    q: "How much electricity does 3 kW solar generate?",
    a: "In Malwa (Indore/Ujjain/Dewas) plan roughly 330–420 units per month as a yearly average on a low-shade roof. Pune and Jabalpur sit a little lower because of monsoon. Shade and soiling reduce this.",
  },
  {
    q: "Can solar run two ACs?",
    a: "Grid-tied solar can offset the daytime units two inverter ACs consume. That usually points at 5 kW or more after a bill check. It will not run those ACs during a power cut unless you specify hybrid batteries.",
  },
  {
    q: "How much roof area is required?",
    a: "About 8 m² of unshaded area per kW, plus access around tanks and parapets. A 3 kW system wants roughly 24 m² of useful roof.",
  },
  {
    q: "Is battery required?",
    a: "Not for a standard on-grid net-metered plant. Batteries are a hybrid/off-grid choice after you quantify outages.",
  },
  {
    q: "Is subsidy available for commercial solar?",
    a: "Not the household PM Surya Ghar table. Housing-society common facilities have a separate CFA path. Factories and offices should model tariff savings, not ₹78,000 DBT.",
  },
  {
    q: "How long does solar installation take?",
    a: "Lifting on a clear residential RCC roof is often a few days after design freeze. DISCOM feasibility, net meter and inspection usually dominate the calendar.",
  },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="hero-wash relative overflow-hidden">
        <div className="panel-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              Indore · Bhopal · Pune · Madhya Pradesh
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Rooftop solar for homes, factories and institutions — designed properly.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              SONIL Solar is the customer-facing rooftop and distributed-solar brand of Sonil Buildcon Pvt. Ltd., an EPC
              company in Indore. We size systems to the bill and the roof, file the DISCOM path, and do not invent
              installation counts or reviews.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-amber text-navy hover:bg-amber/90">
                <Link href="/get-quote">Get solar quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link href="/solar-calculator">Calculate savings</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 text-white">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-white/50">Office</dt>
                <dd className="text-sm font-medium">Indore 452016</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-white/50">Scope</dt>
                <dd className="text-sm font-medium">1 kW – 1 MW</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-white/50">CFA (homes)</dt>
                <dd className="text-sm font-medium">Up to ₹78,000</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-2xl md:p-5">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">Quick savings check</p>
            <h2 className="mt-1 text-lg font-semibold text-navy">See a planning size in under a minute</h2>
            <div className="mt-4">
              <SolarCalculator compact />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "EPC parentage", d: "Sonil Buildcon already executes solar civil, transmission and substation work. Rooftop is documented like a project, not a kit." },
            { icon: Landmark, t: "Subsidy without theatre", d: "PM Surya Ghar CFA is explained with official links and a last-verified date. We do not promise DBT before feasibility." },
            { icon: Sun, t: "Honest numbers", d: "Yield uses city sun-hours and a 0.78 performance ratio. No fake MW counters, no fabricated five-star schema." },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl border bg-card p-5">
              <item.icon className="size-5 text-amber" />
              <h2 className="mt-3 font-semibold text-navy">{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <AnswerBlock
          question="What does SONIL Solar do?"
          answer={company.entitySummary}
          updated={company.lastVerified}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-muted-foreground">Solutions</p>
            <h2 className="mt-1 text-3xl font-semibold text-navy">Homes, businesses and plants</h2>
          </div>
          <Link href="/rooftop-solar" className="hidden text-sm font-medium text-navy md:inline-flex">
            All rooftop solar <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { href: "/residential-solar", icon: Home, t: "Residential", d: "1–10 kW on-grid homes and villas, PM Surya Ghar documentation where eligible." },
            { href: "/commercial-solar", icon: Building2, t: "Commercial", d: "Offices, retail, schools, hospitals — tariff-led, not household CFA." },
            { href: "/industrial-solar", icon: Factory, t: "Industrial / EPC", d: "50 kW–1 MW on sheds in Pithampur, Dewas, Mandideep, Chakan and beyond." },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="group rounded-2xl border bg-card p-6 transition hover:border-navy/40">
              <s.icon className="size-6 text-navy" />
              <h3 className="mt-4 text-lg font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-navy">
                Explore <ArrowRight className="ml-1 size-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {services.slice(3, 10).map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="rounded-full border px-3 py-1 text-sm hover:border-navy">
              {s.h1.split("—")[0]}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-amber">How it works</p>
            <h2 className="mt-2 text-3xl font-semibold">From bill to commissioned plant</h2>
            <ol className="mt-6 space-y-4">
              {[
                ["Consult", "Bill, roof photos, objective — CFA, industrial cost, or backup."],
                ["Survey", "Shade, structure, meter, sanctioned load. This is what a quote may stand on."],
                ["Design", "Layout, SLD, structure note, protection. No lifting from a napkin sketch."],
                ["DISCOM", "Feasibility, net meter, inspection. We file; we do not invent timelines."],
                ["Handover", "Monitoring, documents, optional AMC. Residential CFA waits on inspection and DBT."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-amber text-sm font-semibold text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="text-sm text-white/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-amber">Subsidy, stated carefully</p>
            <h2 className="mt-2 text-3xl font-semibold">PM Surya Ghar for eligible homes</h2>
            <p className="mt-4 text-white/75">
              ₹30,000/kW for the first 2 kW, ₹18,000 for the next 1 kW, no extra central CFA beyond 3 kW — maximum
              ₹78,000. Filed on the national portal. Not for factory meters.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="bg-amber text-navy hover:bg-amber/90">
                <Link href="/pm-surya-ghar-yojana">PM Surya Ghar guide</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/solar-subsidy-madhya-pradesh">MP subsidy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold text-navy">Cities we publish — because we serve them</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Tier-1 pages are written in full. Tier-2 district HQ pages exist only with unique DISCOM, climate and customer notes.
          We are not generating fifty identical doorway pages.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Link key={c.slug} href={`/solar-company-in-${c.slug}`} className="rounded-2xl border bg-card p-4 hover:border-navy/40">
              <p className="text-xs text-muted-foreground">{c.state} · {c.discomShort}</p>
              <p className="mt-1 font-semibold text-navy">{c.name}</p>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.serviceRadius}</p>
            </Link>
          ))}
        </div>
        <Link href="/locations" className="mt-4 inline-flex text-sm font-medium text-navy">
          All locations <ArrowRight className="ml-1 size-4" />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-navy">Guides written to be cited</h2>
          <Link href="/blog" className="text-sm font-medium text-navy">
            All guides
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-2xl border bg-card p-5 hover:border-navy/40">
              <p className="text-xs text-muted-foreground">{a.category} · Updated {a.updated}</p>
              <h3 className="mt-2 font-semibold text-navy">{a.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.answer}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <FaqList faqs={homeFaqs} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <CtaBand
          title="Get a planning estimate, then a survey"
          text="The calculator is a model. The quote is a site. Call +91 93405 83565 or start the 7-step consultation."
        />
      </section>
    </div>
  );
}
