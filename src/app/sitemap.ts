import type { MetadataRoute } from "next";
import { cities, intentCities } from "@/content/cities";
import { services } from "@/content/services";
import { articles } from "@/content/blog";
import { systemGuides } from "@/content/systems";
import { intentMeta, type LocationIntent } from "@/content/intents";
import { siteUrl } from "@/lib/format";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/get-quote",
    "/solar-calculator",
    "/pm-surya-ghar-yojana",
    "/solar-subsidy-madhya-pradesh",
    "/solar-company-in-madhya-pradesh",
    "/rooftop-solar-in-madhya-pradesh",
    "/locations",
    "/projects",
    "/blog",
    "/faq",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/solar-panel-price-in-madhya-pradesh",
    "/commercial-solar-in-madhya-pradesh",
    "/industrial-solar-in-madhya-pradesh",
    "/solar-epc-in-madhya-pradesh",
    "/solar-installation-in-madhya-pradesh",
  ].map((path) => ({ url: `${base}${path || "/"}`, lastModified: now, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 }));

  for (const s of services) {
    urls.push({ url: `${base}/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const g of systemGuides) {
    urls.push({ url: `${base}/${g.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const a of articles) {
    urls.push({ url: `${base}/blog/${a.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const c of cities) {
    urls.push({
      url: `${base}/solar-company-in-${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: c.mega ? 0.9 : 0.7,
    });
  }
  const intents = Object.keys(intentMeta) as LocationIntent[];
  for (const c of intentCities()) {
    for (const intent of intents) {
      if (intent === "company") continue;
      urls.push({
        url: `${base}${intentMeta[intent].path(c.slug)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
  }
  return urls;
}
