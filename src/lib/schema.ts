import { company } from "@/content/company";
import { siteUrl } from "@/lib/format";
import type { City } from "@/content/cities";
import type { Faq } from "@/content/cities";

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    name: company.brand,
    legalName: company.legalName,
    url: siteUrl(),
    telephone: company.phoneTel,
    email: company.email,
    parentOrganization: {
      "@type": "Organization",
      name: company.parent,
      url: company.parentSite,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    areaServed: ["Indore", "Bhopal", "Pune", "Madhya Pradesh", "Maharashtra"],
    openingHours: "Mo-Sa 09:00-19:00",
    description: company.entitySummary,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brand,
    url: siteUrl(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl()}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl()}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${siteUrl()}${opts.url}`,
    provider: { "@type": "Organization", name: company.brand },
    areaServed: opts.area || "Madhya Pradesh",
  };
}

export function localBusinessSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${company.brand} — ${city.name}`,
    legalName: company.legalName,
    url: `${siteUrl()}/solar-company-in-${city.slug}`,
    telephone: company.phoneTel,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.slug === "pune" ? "Pune" : company.city,
      addressRegion: city.state,
      postalCode: city.slug === "indore" ? company.pincode : undefined,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    openingHours: "Mo-Sa 09:00-19:00",
    description: city.intro,
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  date: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.updated,
    author: { "@type": "Organization", name: company.brand },
    publisher: { "@type": "Organization", name: company.brand },
    mainEntityOfPage: `${siteUrl()}${opts.url}`,
  };
}
