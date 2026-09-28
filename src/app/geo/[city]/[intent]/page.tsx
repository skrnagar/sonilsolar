import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCity, intentCities, publishedCities } from "@/content/cities";
import type { LocationIntent } from "@/content/intents";
import { LocationLanding, locationCopy } from "@/components/pages/location-landing";

const intents: LocationIntent[] = [
  "company",
  "rooftop",
  "installation",
  "residential",
  "commercial",
  "industrial",
  "price",
  "subsidy",
  "3kw",
  "5kw",
  "10kw",
];

function parseIntent(raw: string): LocationIntent | null {
  return intents.includes(raw as LocationIntent) ? (raw as LocationIntent) : null;
}

export function generateStaticParams() {
  const rows: { city: string; intent: string }[] = [];
  for (const c of publishedCities()) {
    rows.push({ city: c.slug, intent: "company" });
  }
  for (const c of intentCities()) {
    for (const intent of intents) {
      if (intent === "company") continue;
      rows.push({ city: c.slug, intent });
    }
  }
  return rows;
}

type Props = { params: Promise<{ city: string; intent: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug, intent: raw } = await params;
  const intent = parseIntent(raw);
  const city = getCity(slug);
  if (!city || !intent) return {};
  if (intent !== "company" && !city.intents) return {};
  const copy = locationCopy(city, intent);
  const path = canonicalPath(intent, city.slug);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${path}` },
  };
}

function canonicalPath(intent: LocationIntent, slug: string) {
  const map: Record<LocationIntent, string> = {
    company: `solar-company-in-${slug}`,
    rooftop: `rooftop-solar-in-${slug}`,
    installation: `solar-installation-in-${slug}`,
    residential: `residential-solar-in-${slug}`,
    commercial: `commercial-solar-in-${slug}`,
    industrial: `industrial-solar-in-${slug}`,
    price: `solar-panel-price-in-${slug}`,
    subsidy: `solar-subsidy-in-${slug}`,
    "3kw": `3kw-solar-system-in-${slug}`,
    "5kw": `5kw-solar-system-in-${slug}`,
    "10kw": `10kw-solar-system-in-${slug}`,
  };
  return map[intent];
}

export default async function Page({ params }: Props) {
  const { city: slug, intent: raw } = await params;
  const intent = parseIntent(raw);
  const city = getCity(slug);
  if (!city || !intent) notFound();
  if (intent !== "company" && !city.intents) notFound();
  return <LocationLanding city={city} intent={intent} />;
}
