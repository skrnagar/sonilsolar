import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileDock } from "@/components/layout/mobile-dock";
import { JsonLd } from "@/components/seo/json-ld";
import { orgSchema, websiteSchema } from "@/lib/schema";
import { company } from "@/content/company";
import { siteUrl } from "@/lib/format";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "SONIL Solar | Rooftop Solar in Indore, Bhopal, Pune & Madhya Pradesh",
    template: "%s | SONIL Solar",
  },
  description:
    "SONIL Solar — rooftop and distributed solar for homes, businesses and industry up to 1 MW. Indore, Bhopal, Pune and Madhya Pradesh. PM Surya Ghar documentation support.",
  openGraph: {
    siteName: "SONIL Solar",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Indore",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <JsonLd data={[orgSchema(), websiteSchema()]} />
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileDock />
        <p className="sr-only">{company.entitySummary}</p>
      </body>
    </html>
  );
}
