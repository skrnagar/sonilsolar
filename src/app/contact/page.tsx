import type { Metadata } from "next";
import { company } from "@/content/company";
import { QuoteWizard } from "@/components/leads/quote-wizard";
import { telLink, waLink } from "@/lib/format";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = {
  title: "Contact SONIL Solar",
  description: `Call ${company.phoneDisplay}, WhatsApp, or send a solar consultation. Office: ${company.addressLine}.`,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-24">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }]} />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy">Contact</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="leading-7">{company.responseSla}</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Phone</dt>
              <dd className="font-medium">
                <a href={telLink()}>{company.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">WhatsApp</dt>
              <dd className="font-medium">
                <a href={waLink()}>{company.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="font-medium">
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Office (on company file)</dt>
              <dd className="font-medium">{company.addressLine}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Hours</dt>
              <dd className="font-medium">{company.hours}</dd>
            </div>
          </dl>
          <div className="mt-6 overflow-hidden rounded-2xl border">
            <iframe
              title="Indore office area"
              className="h-56 w-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=Indore%20Madhya%20Pradesh%20452016&z=12&output=embed"
            />
          </div>
        </div>
        <QuoteWizard />
      </div>
    </div>
  );
}
