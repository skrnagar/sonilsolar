import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/content/cta-band";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy" } };

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 pb-24 leading-7">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/privacy", label: "Privacy" }]} />
      <h1 className="text-3xl font-semibold text-navy">Privacy</h1>
      <p>
        Consultation forms collect name, phone, optional email, location and project answers so SONIL Solar / Sonil
        Buildcon can respond. Leads are stored for follow-up and are not published. Do not submit other people’s personal
        data. For deletion requests write to info@sonilbuildcon.com. Analytics (when configured) may use GA4, GTM, Ads
        and similar tools — set NEXT_PUBLIC_GA_ID only when you have a measurement ID. This page is a working policy for
        a lead-gen site, not a substitute for counsel.
      </p>
    </article>
  );
}
