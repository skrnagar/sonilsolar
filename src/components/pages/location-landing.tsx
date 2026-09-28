import Link from "next/link";
import type { City } from "@/content/cities";
import type { LocationIntent } from "@/content/intents";
import { intentMeta } from "@/content/intents";
import { company } from "@/content/company";
import { subsidy } from "@/content/subsidy";
import { residentialBands } from "@/content/pricing";
import { AnswerBlock } from "@/components/content/answer-block";
import { FaqList } from "@/components/content/faq-list";
import { PriceTable } from "@/components/content/price-table";
import { CtaBand, Breadcrumbs } from "@/components/content/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/format";
import { MapPin, Sun, Building2, Zap } from "lucide-react";
import { StickyCityBar } from "@/components/layout/sticky-city-bar";

export function locationCopy(city: City, intent: LocationIntent) {
  const n = city.name;
  const titles: Record<LocationIntent, { title: string; h1: string; question: string; answer: string; description: string }> = {
    company: {
      title: `Solar Company in ${n} | Rooftop Solar Installation`,
      h1: `Rooftop solar installation in ${n} — residential & commercial`,
      question: `Who installs rooftop solar in ${n}?`,
      answer: `SONIL Solar provides residential, commercial and industrial rooftop solar installation in ${n} for homeowners, businesses and factories. We are the rooftop brand of Sonil Buildcon Pvt. Ltd. (${company.addressLine}). ${city.discomShort} handles the local DISCOM file. Eligible homes can apply for PM Surya Ghar CFA up to ₹78,000. Last verified ${company.lastVerified}.`,
      description: `SONIL Solar is a rooftop solar company serving ${n}: homes, housing societies, commercial buildings and industrial plants up to 1 MW. DISCOM: ${city.discomShort}.`,
    },
    rooftop: {
      title: `Rooftop Solar in ${n} | Residential & Industrial`,
      h1: `Rooftop solar in ${n}`,
      question: `Is rooftop solar viable in ${n}?`,
      answer: `Yes. ${n} sees about ${city.peakSunHours} peak sun hours in our city file, or ${city.generationPerKwDay}. SONIL Solar installs on-grid rooftop systems for homes and businesses, with hybrid only when backup is specified. Roof type locally: ${city.rooftopTypes.slice(0, 220)}`,
      description: `Rooftop solar in ${n} — yield, roof types, DISCOM process and SONIL Solar installation for homes and industry.`,
    },
    installation: {
      title: `Solar Installation in ${n}`,
      h1: `Solar panel installation in ${n}`,
      question: `How does solar installation work in ${n}?`,
      answer: `SONIL Solar’s ${n} installation path is survey → design → DISCOM feasibility (especially for CFA homes) → structure and electrical install → net meter → inspection. Crews are routed from ${city.nearestHub}. ${city.distanceFromHq}. The long pole is usually paperwork, not lifting.`,
      description: `Solar panel installation process in ${n}, including DISCOM net metering with ${city.discomShort}.`,
    },
    residential: {
      title: `Residential Solar in ${n} | PM Surya Ghar`,
      h1: `Residential rooftop solar in ${n}`,
      question: `Can homeowners in ${n} get PM Surya Ghar subsidy?`,
      answer: `Eligible domestic consumers in ${n} can apply for central CFA: ₹30,000/kW for the first 2 kW and ₹18,000 for the next 1 kW, cap ₹78,000, via pmsuryaghar.gov.in and ${city.discomShort}. Typical home sizes here: ${city.customerProfile}`,
      description: `Residential solar in ${n} with PM Surya Ghar documentation support and West/Central/East DISCOM filing as applicable.`,
    },
    commercial: {
      title: `Commercial Solar in ${n}`,
      h1: `Commercial rooftop solar in ${n}`,
      question: `Does commercial solar in ${n} get household subsidy?`,
      answer: `No. Shops, offices, clinics and most institutions in ${n} do not receive PM Surya Ghar household CFA. SONIL Solar sizes commercial plants on tariff and daytime load under ${city.discomShort}. Local commercial/industrial geography: ${city.industrialClusters.join(", ") || "city commercial belts"}.`,
      description: `Commercial rooftop solar in ${n} for offices, retail and institutions — tariff-led, not household CFA.`,
    },
    industrial: {
      title: `Industrial Solar in ${n} | Up to 1 MW`,
      h1: `Industrial solar in ${n} up to 1 MW`,
      question: `Where does industrial rooftop solar go in ${n}?`,
      answer: `SONIL Solar scopes factory and warehouse plants in ${n} around ${city.industrialClusters.join(", ") || "local industrial pockets"}, typically 50 kW–1 MW. These are EPC-style jobs under ${city.discomShort}. No household CFA. Climate/soiling: ${city.climate.slice(0, 180)}`,
      description: `Industrial rooftop solar in ${n} up to 1 MW for factories and warehouses.`,
    },
    price: {
      title: `Solar Panel Price in ${n} | 1–10 kW`,
      h1: `Solar panel price in ${n} (indicative 2026)`,
      question: `What is the solar panel price in ${n}?`,
      answer: `For an eligible residential on-grid system in ${n}, 2026 planning bands are about ₹65,000–₹85,000 gross per 1 kW, ₹1.70–₹2.30 lakh for 3 kW, and ₹2.70–₹3.50 lakh for 5 kW, before CFA. After eligible CFA, 3 kW often nets near ₹0.92–₹1.52 lakh. Not a quotation. Site, structure and module choice move the number.`,
      description: `Indicative solar panel and rooftop system prices in ${n} for 1–10 kW, with PM Surya Ghar CFA treatment.`,
    },
    subsidy: {
      title: `Solar Subsidy in ${n} | PM Surya Ghar`,
      h1: `Solar subsidy in ${n}`,
      question: `What solar subsidy is available in ${n}?`,
      answer: `Homes in ${n} use the national PM Surya Ghar CFA table (max ₹78,000 at 3 kW), filed on the national portal with ${city.discomShort}. ${city.tariffNote} Commercial and industrial connections in ${n} do not get this household CFA.`,
      description: `Solar subsidy in ${n}: PM Surya Ghar CFA, DISCOM process, and what factories cannot claim.`,
    },
    "3kw": {
      title: `3 kW Solar System in ${n} | Price with Subsidy`,
      h1: `3 kW solar system in ${n}`,
      question: `How much does a 3 kW solar system cost in ${n}?`,
      answer: `A 3 kW on-grid home system in ${n} typically costs ₹1.70–₹2.30 lakh gross. Eligible CFA is up to ₹78,000, for a common net band near ₹0.92–₹1.52 lakh. Roof: ~24 m² unshaded. Generation: about 3 × (${city.generationPerKwDay}). Last reviewed ${company.lastVerified}.`,
      description: `3 kW solar system cost, generation and subsidy in ${n}.`,
    },
    "5kw": {
      title: `5 kW Solar System in ${n}`,
      h1: `5 kW solar system in ${n}`,
      question: `How much does a 5 kW solar system cost in ${n}?`,
      answer: `A 5 kW residential system in ${n} typically costs ₹2.70–₹3.50 lakh gross. CFA does not increase past 3 kW, so eligible homes still receive at most ₹78,000. Roof: ~40 m². Two ACs plus household load is the usual reason people land here.`,
      description: `5 kW solar system price, roof and generation in ${n}.`,
    },
    "10kw": {
      title: `10 kW Solar System in ${n}`,
      h1: `10 kW solar system in ${n}`,
      question: `Is 10 kW solar suitable in ${n}?`,
      answer: `10 kW suits large homes, villas or small commercial loads in ${n} with ~80 m² unshaded roof and a bill that can absorb ~1,100–1,400 units/month. Gross residential planning band ₹5–7 lakh; CFA still caps at ₹78,000 if eligible. Many 10 kW conversations are actually commercial meters — those skip household CFA.`,
      description: `10 kW solar system in ${n} for large homes and small commercial loads.`,
    },
  };
  return titles[intent];
}

export function LocationLanding({ city, intent }: { city: City; intent: LocationIntent }) {
  const copy = locationCopy(city, intent);
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/locations", label: "Locations" },
    { href: `/solar-company-in-${city.slug}`, label: city.name },
    { href: intentMeta[intent].path(city.slug), label: copy.h1 },
  ];
  const related = (Object.keys(intentMeta) as LocationIntent[]).filter((k) => (city.intents ? true : k === "company") && k !== intent);

  return (
    <article className="pb-24">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.label, path: c.href }))),
          faqSchema(city.faqs),
          localBusinessSchema(city),
          serviceSchema({
            name: copy.h1,
            description: copy.description,
            url: intentMeta[intent].path(city.slug),
            area: city.name,
          }),
        ]}
      />
      <StickyCityBar city={city.name} slug={city.slug} />

      <div className="hero-wash relative overflow-hidden">
        <div className="panel-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-20">
          <Breadcrumbs items={crumbs.slice(0, 3).concat([{ href: intentMeta[intent].path(city.slug), label: intentMeta[intent].navLabel }])} />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            <MapPin className="size-3.5" /> {city.name}, {city.state} · {city.discomShort}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{copy.h1}</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Save on electricity bills with professionally designed residential, commercial and industrial rooftop solar
            systems in {city.name}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-amber text-navy hover:bg-amber/90">
              <Link href={`/get-quote?city=${city.slug}`}>Get free solar quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link href={`/solar-calculator?city=${city.slug}`}>Calculate solar savings</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              <a href={waLink(`Hello SONIL Solar, I want a quote in ${city.name}.`)}>WhatsApp solar expert</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <AnswerBlock question={copy.question} answer={copy.answer} updated={company.lastVerified} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Info icon={Sun} k="Peak sun hours" v={`${city.peakSunHours} (city file)`} />
          <Info icon={Zap} k="Yield per kW" v={city.generationPerKwDay} />
          <Info icon={Building2} k="Service hub" v={city.nearestHub} />
          <Info icon={MapPin} k="Coverage" v={city.serviceRadius} />
        </div>

        <section className="prose-sonil">
          <h2 className="text-2xl font-semibold text-navy">Solar in {city.name} — local context</h2>
          <p className="mt-3 max-w-3xl text-[16px] leading-7 text-foreground/90">{city.intro}</p>
          {((intent === "company" || city.mega) ? city.longform : city.longform.slice(0, 1)).map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 max-w-3xl text-[16px] leading-7 text-foreground/90">
              {p}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy">Localities we actually name</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            These are service catchments, not a claim that every lane has a completed plant. Pages for individual
            localities are only added when there is real service relevance.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {city.localities.map((l) => (
              <li key={l} className="rounded-full border bg-card px-3 py-1 text-sm">
                {l}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy">{city.name} climate and roofs</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="font-medium text-navy">Climate / sunlight</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{city.climate}</p>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="font-medium text-navy">Roofs we see</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{city.rooftopTypes}</p>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            <strong className="text-navy">Who buys:</strong> {city.customerProfile}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy">DISCOM and net metering in {city.name}</h2>
          <p className="mt-3 max-w-3xl text-[16px] leading-7">
            Utility: <strong>{city.discom}</strong>. {city.tariffNote}
          </p>
          <p className="mt-3 max-w-3xl text-[16px] leading-7 text-foreground/90">
            {city.state === "Maharashtra" ? subsidy.pune.netMetering : subsidy.mp.netMetering}
          </p>
        </section>

        {(intent === "company" || intent === "price" || intent === "3kw" || intent === "5kw" || intent === "10kw" || intent === "residential") && (
          <section>
            <h2 className="text-2xl font-semibold text-navy">Indicative residential pricing in {city.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Starting-from logic: the low end of each band is a planning floor for a simple RCC roof, not a promise.
            </p>
            <div className="mt-4">
              <PriceTable city={city.intents ? city.slug : undefined} />
            </div>
            {intent === "3kw" || intent === "5kw" || intent === "10kw" ? (
              <p className="mt-4 max-w-3xl text-sm">
                Focus row: {intent.replace("kw", "")} kW — typical use{" "}
                {residentialBands.find((b) => `${b.kw}kw` === intent)?.typicalUse}.
              </p>
            ) : null}
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold text-navy">Projects in {city.name}</h2>
          <div className="mt-4 rounded-2xl border border-dashed bg-muted/40 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Verified rooftop case studies with bills and photographs will be published here when the client file allows.
              We do not invent testimonials, kW counts or “before/after” bills. If you have a comparable plant type (home,
              society, factory) in {city.name}, request a survey and we will share what we can show from similar engineering
              scopes — clearly labelled as such.
            </p>
            <Button asChild className="mt-4 bg-navy">
              <Link href="/projects">Project types we design for</Link>
            </Button>
          </div>
        </section>

        {city.intents ? (
          <section>
            <h2 className="text-2xl font-semibold text-navy">Continue in {city.name}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((k) => (
                <Link
                  key={k}
                  href={intentMeta[k].path(city.slug)}
                  className="rounded-full border bg-card px-3 py-1.5 text-sm hover:border-navy"
                >
                  {intentMeta[k].navLabel}
                </Link>
              ))}
              <Link href="/pm-surya-ghar-yojana" className="rounded-full border bg-card px-3 py-1.5 text-sm hover:border-navy">
                PM Surya Ghar
              </Link>
              <Link href="/solar-calculator" className="rounded-full border bg-card px-3 py-1.5 text-sm hover:border-navy">
                Calculator
              </Link>
              <Link href="/solar-company-in-madhya-pradesh" className="rounded-full border bg-card px-3 py-1.5 text-sm hover:border-navy">
                Madhya Pradesh hub
              </Link>
            </div>
          </section>
        ) : (
          <section>
            <h2 className="text-2xl font-semibold text-navy">Nearby hubs</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/solar-company-in-indore" className="rounded-full border px-3 py-1.5 text-sm">
                Indore
              </Link>
              <Link href="/solar-company-in-bhopal" className="rounded-full border px-3 py-1.5 text-sm">
                Bhopal
              </Link>
              <Link href="/pm-surya-ghar-yojana" className="rounded-full border px-3 py-1.5 text-sm">
                Subsidy hub
              </Link>
              <Link href="/solar-calculator" className="rounded-full border px-3 py-1.5 text-sm">
                Calculator
              </Link>
            </div>
          </section>
        )}

        <div className="overflow-hidden rounded-2xl border">
          <iframe
            title={`Map of ${city.name}`}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`rooftop solar ${city.name}`)}&z=11&output=embed`}
          />
        </div>

        <FaqList faqs={city.faqs} title={`FAQs — solar in ${city.name}`} />
        <CtaBand
          city={city.slug}
          title={`Check price in ${city.name}`}
          text="Share your bill and roof photos. You get a planning estimate, then a survey-based quote — not a website sticker."
        />
      </div>
    </article>
  );
}

function Info({
  icon: Icon,
  k,
  v,
}: {
  icon: typeof Sun;
  k: string;
  v: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <Icon className="size-4 text-amber" />
      <p className="mt-2 text-xs text-muted-foreground">{k}</p>
      <p className="mt-1 text-sm font-medium text-navy">{v}</p>
    </div>
  );
}
