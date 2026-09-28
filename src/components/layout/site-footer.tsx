import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { company } from "@/content/company";
import { cities } from "@/content/cities";
import { waLink, telLink } from "@/lib/format";

const cols = [
  {
    title: "Solutions",
    links: [
      ["/residential-solar", "Residential solar"],
      ["/commercial-solar", "Commercial solar"],
      ["/industrial-solar", "Industrial solar"],
      ["/rooftop-solar", "Rooftop solar"],
      ["/solar-epc", "Solar EPC"],
      ["/housing-society-solar", "Housing society"],
      ["/factory-solar", "Factory solar"],
      ["/warehouse-solar", "Warehouse solar"],
    ],
  },
  {
    title: "Technology",
    links: [
      ["/on-grid-solar", "On-grid"],
      ["/hybrid-solar", "Hybrid"],
      ["/off-grid-solar", "Off-grid"],
      ["/solar-maintenance", "O&M / AMC"],
      ["/100kw-rooftop-solar", "100 kW"],
      ["/250kw-rooftop-solar", "250 kW"],
      ["/500kw-rooftop-solar", "500 kW"],
      ["/1mw-rooftop-solar", "1 MW"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["/solar-calculator", "Solar calculator"],
      ["/pm-surya-ghar-yojana", "PM Surya Ghar"],
      ["/solar-subsidy-madhya-pradesh", "MP solar subsidy"],
      ["/projects", "Projects"],
      ["/blog", "Guides"],
      ["/faq", "FAQ"],
      ["/about", "About"],
      ["/contact", "Contact"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{company.positioning}</p>
          <p className="mt-4 text-sm text-white/80">
            {company.addressLine}
            <br />
            <a className="underline-offset-2 hover:underline" href={telLink()}>
              {company.phoneDisplay}
            </a>
            <br />
            <a className="underline-offset-2 hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a className="rounded-full bg-white/10 px-3 py-1" href={waLink()}>
              WhatsApp
            </a>
            <a className="rounded-full bg-white/10 px-3 py-1" href={telLink()}>
              Call
            </a>
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-amber">{col.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link className="hover:text-white" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            Cities:{" "}
            {cities.slice(0, 8).map((c, i) => (
              <span key={c.slug}>
                {i > 0 ? " · " : ""}
                <Link className="hover:text-white" href={`/solar-company-in-${c.slug}`}>
                  {c.name}
                </Link>
              </span>
            ))}
          </p>
          <p className="flex flex-wrap gap-3">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <span>© {new Date().getFullYear()} {company.legalName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
