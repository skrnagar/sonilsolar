export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  city?: string;
  answer: string;
  body: { h2: string; html: string }[];
  faqs: { q: string; a: string }[];
  sources?: { name: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: "3kw-solar-panel-price-in-indore-with-subsidy",
    title: "3 kW solar panel price in Indore with subsidy (2026)",
    description:
      "Indicative 3 kW rooftop solar cost in Indore before and after PM Surya Ghar CFA, with assumptions, DISCOM notes and what actually changes the quote.",
    date: "2026-09-01",
    updated: "2026-09-01",
    category: "Prices",
    city: "indore",
    answer:
      "A 3 kW on-grid rooftop system in Indore typically costs about ₹1.70–₹2.30 lakh installed before subsidy. Eligible residential consumers may receive up to ₹78,000 CFA under PM Surya Ghar, putting a common net band near ₹0.92–₹1.52 lakh. These are 2026 market ranges, not a SONIL quotation. West DISCOM processes net metering. Last reviewed September 2026.",
    body: [
      {
        h2: "What the 3 kW price includes",
        html: "<p>A complete installed price in this article means modules, inverter, roof structure, DC/AC cabling, ACDB/DCDB, earthing, monitoring, and standard installation on an accessible RCC roof. It does not mean DISCOM security deposits, major civil waterproofing, elevated platforms, or batteries.</p>",
      },
      {
        h2: "Subsidy arithmetic",
        html: "<p>Under the current PM Surya Ghar CFA table, 3 kW residential capacity attracts ₹30,000/kW for the first 2 kW plus ₹18,000 for the third kW = ₹78,000, if the connection, modules and vendor path qualify. CFA is DBT after inspection, not an instant checkout coupon. Source: <a href='https://pmsuryaghar.gov.in/'>pmsuryaghar.gov.in</a>.</p>",
      },
      {
        h2: "What 3 kW generates in Indore",
        html: "<p>Using ~5.5 peak sun hours and a 0.78 performance ratio, plan roughly 330–420 units per month as a yearly average on a low-shade roof. Monsoon undershoots. Shade from tanks in Vijay Nagar or Palasia will take the bottom off that range.</p>",
      },
      {
        h2: "When 3 kW is the wrong size",
        html: "<p>If the bill is ₹8,000+ with two ACs, 3 kW will only shave a slice. If sanctioned load is 2 kW, DISCOM may not approve 3 kW without a load change. If useful roof is 15 m², you do not have a 3 kW roof.</p>",
      },
    ],
    faqs: [
      {
        q: "Is ₹78,000 guaranteed in Indore?",
        a: "No. It is the current CFA cap for a qualifying 3 kW residential system, subject to portal, DISCOM and inspection. Last verified September 2026.",
      },
    ],
    sources: [{ name: "PM Surya Ghar National Portal", href: "https://pmsuryaghar.gov.in/" }],
  },
  {
    slug: "how-to-apply-for-solar-subsidy-in-madhya-pradesh",
    title: "How to apply for solar subsidy in Madhya Pradesh — step by step",
    description:
      "Application walkthrough for PM Surya Ghar in MP: portal, DISCOM feasibility, vendor, net meter, inspection and DBT.",
    date: "2026-09-01",
    updated: "2026-09-01",
    category: "Subsidy",
    answer:
      "In Madhya Pradesh, residential rooftop CFA is applied on the PM Surya Ghar national portal (pmsuryaghar.gov.in), then processed with your DISCOM — West (Indore), Central (Bhopal) or East (Jabalpur). Steps: register → select MP and DISCOM → feasibility → install via an empanelled path → net meter → inspection → DBT. MPUVNL is the state implementing agency. Last reviewed September 2026.",
    body: [
      {
        h2: "Step-by-step",
        html: "<ol><li>Keep the electricity bill, Aadhaar-linked mobile and a cancelled cheque.</li><li>Register at pmsuryaghar.gov.in with the exact consumer number.</li><li>Select Madhya Pradesh and the DISCOM that printed the bill — do not guess Indore if you are in Jabalpur.</li><li>Wait for feasibility. Do not buy modules against a verbal ‘it will be approved’.</li><li>Install to the approved capacity with eligible equipment.</li><li>File the net-meter request.</li><li>Inspection, commissioning, then CFA by DBT.</li></ol>",
      },
      {
        h2: "State versus central",
        html: "<p>The CFA table used on SONIL pages is the central PM Surya Ghar structure. MP-specific institutional schemes through MPUVNL are circular-driven; we do not print a stale percentage. Net metering follows MPERC, with surplus treatment commonly described as annual September APPC settlement — confirm the live order.</p>",
      },
    ],
    faqs: [
      {
        q: "Can a factory in Pithampur apply on the same form?",
        a: "Not for household CFA. Industrial connections are a different product.",
      },
    ],
    sources: [
      { name: "PM Surya Ghar National Portal", href: "https://pmsuryaghar.gov.in/" },
      { name: "MNRE", href: "https://mnre.gov.in/" },
    ],
  },
  {
    slug: "solar-panel-subsidy-in-mp-for-home",
    title: "Solar panel subsidy in MP for home: complete guide",
    description:
      "What MP homeowners can actually claim under PM Surya Ghar, with CFA examples and what is not covered.",
    date: "2026-09-01",
    updated: "2026-09-01",
    category: "Subsidy",
    answer:
      "Madhya Pradesh homeowners with a domestic DISCOM connection can apply for central CFA under PM Surya Ghar: ₹30,000/kW for the first 2 kW, ₹18,000 for the next 1 kW, maximum ₹78,000. There is no extra central CFA beyond 3 kW. MP does not replace this with a separate ‘MP-only household percentage’ on our pages unless a live MPUVNL circular says so. Last reviewed September 2026.",
    body: [
      {
        h2: "Worked CFA examples",
        html: "<p>1 kW → ₹30,000. 2 kW → ₹60,000. 2.5 kW → ₹69,000. 3 kW and 10 kW → ₹78,000. A 10 kW home still only has ₹78,000 of this CFA, not 10 × ₹30,000.</p>",
      },
      {
        h2: "Housing societies",
        html: "<p>GHS/RWA common facilities use a different CFA (commonly ₹18,000/kW with caps). A flat owner cannot casually claim household CFA on a common terrace.</p>",
      },
    ],
    faqs: [
      {
        q: "Does MP add state subsidy on top for homes?",
        a: "Do not budget a second household slab until you have a current MPUVNL circular in hand. We keep that field explicit and empty rather than invent a number.",
      },
    ],
    sources: [{ name: "PM Surya Ghar National Portal", href: "https://pmsuryaghar.gov.in/" }],
  },
  {
    slug: "rooftop-solar-for-factories-under-1mw",
    title: "Rooftop solar for factories: how commercial solar under 1 MW works",
    description:
      "How 50 kW–1 MW industrial rooftop is designed, interconnected and costed — without residential subsidy myths.",
    date: "2026-09-01",
    updated: "2026-09-01",
    category: "Commercial",
    answer:
      "Factory rooftop solar under 1 MW is an EPC-style project: load study, roof steel, electrical protection, DISCOM interconnection and O&M. It does not receive PM Surya Ghar household CFA. In Madhya Pradesh, rooftop net metering is commonly discussed up to 500 kW under current MPERC practice — confirm the live order. Pune factories follow MSEDCL/MERC.",
    body: [
      {
        h2: "Typical conversation sizes",
        html: "<p>50 kW for a small unit, 100 kW as a common starter, 250–500 kW for multi-shed plants, 1 MW at the top of this brand’s distributed mandate. Roof area is roughly 7–8 m²/kW of unshaded sheet plus walkways.</p>",
      },
      {
        h2: "Economics without fairy tales",
        html: "<p>Payback tracks the energy charge, load factor and whether generation is self-consumed in daylight shifts. A weekly-off plant that is dark on Sunday does not earn like a 24×7 compressor house. We model that after bills, not before.</p>",
      },
    ],
    faqs: [
      {
        q: "Can I net-meter 1 MW in MP?",
        a: "Do not assume it. 500 kW is the figure commonly discussed for eligible rooftop net metering under current MP practitioner reading of MPERC. 1 MW may need a different interconnection path. We design after the order and the DISCOM letter, not after a blog.",
      },
    ],
  },
  {
    slug: "5kw-solar-system-in-bhopal",
    title: "5 kW solar system in Bhopal — cost, generation and subsidy cap",
    description:
      "What a 5 kW rooftop plant means in Bhopal: roof, yield, CFA cap at ₹78,000, and Central DISCOM process.",
    date: "2026-09-01",
    updated: "2026-09-01",
    category: "Prices",
    city: "bhopal",
    answer:
      "A 5 kW residential on-grid system in Bhopal typically costs about ₹2.70–₹3.50 lakh gross. CFA does not increase past 3 kW, so eligible homes still receive at most ₹78,000, for a common net band near ₹1.9–₹2.7 lakh. Plan about 40 m² unshaded roof and roughly 550–700 units/month as a yearly average on a clean Bhopal roof. Central DISCOM handles the file. Last reviewed September 2026.",
    body: [
      {
        h2: "Why people overbuy 5 kW",
        html: "<p>Because ‘5 kW’ is a round marketing number. If the bill is ₹3,000/month, 5 kW is often surplus. If the bill is ₹10,000 with two ACs and a pump, 5 kW may still be shy. Size to the bill and the roof.</p>",
      },
    ],
    faqs: [
      {
        q: "Will 5 kW run two ACs in Bhopal?",
        a: "It can offset a large share of daytime AC kWh on a good roof. It will not island those ACs in a power cut without hybrid batteries.",
      },
    ],
  },
  {
    slug: "net-metering-in-madhya-pradesh",
    title: "Net metering in Madhya Pradesh — what rooftop owners should actually know",
    description:
      "A cautious, source-aware explainer of MP net metering, banking and why the DISCOM letter beats a blog.",
    date: "2026-09-01",
    updated: "2026-09-01",
    category: "Education",
    answer:
      "In Madhya Pradesh, eligible rooftop plants can be net-metered under MPERC regulations. Practitioner guidance around RG-39 of 2024 commonly cites net metering up to 500 kW, with surplus energy banked and settled annually in September against the APPC rate. Your DISCOM (West, Central or East) still has to grant feasibility. This article is not legal advice; the live MPERC order is.",
    body: [
      {
        h2: "What net metering does",
        html: "<p>It measures import and export through a bidirectional meter so exported energy can offset later import, subject to the regulation’s banking and settlement rules.</p>",
      },
      {
        h2: "What it does not do",
        html: "<p>It does not pay you a rooftop ‘tariff’ like a PPA plant. It does not keep your lights on in a power cut. It does not override sanctioned load.",
      },
    ],
    faqs: [
      {
        q: "Is September settlement guaranteed forever?",
        a: "It is the cycle currently described in MP practitioner material. Regulations change. Read the order on mperc.in before you model export revenue.",
      },
    ],
    sources: [{ name: "MPERC", href: "https://mperc.in/" }],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
