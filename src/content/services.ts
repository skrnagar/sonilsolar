export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  answer: string;
  description: string;
  audience: string;
  sizeRange: string;
  sections: { h2: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: ServicePage[] = [
  {
    slug: "residential-solar",
    title: "Residential Rooftop Solar",
    h1: "Residential rooftop solar for homes and villas",
    answer:
      "SONIL Solar designs on-grid rooftop solar for independent houses and villas in Indore, Bhopal, Pune and across Madhya Pradesh. Eligible homes can apply for PM Surya Ghar CFA up to ₹78,000 on qualifying 3 kW systems. A typical 3 kW plant needs about 24 m² of unshaded roof and produces roughly 330–420 units/month in Malwa, depending on shade and season.",
    description:
      "Residential rooftop solar installation for homes in Indore, Bhopal, Pune and Madhya Pradesh, including PM Surya Ghar documentation support.",
    audience: "Homeowners with a domestic DISCOM connection",
    sizeRange: "1–10 kW typical; larger villas after load study",
    sections: [
      {
        h2: "Who it is for",
        body: "Independent houses, duplexes and villas with a domestic electricity connection, a usable RCC or sheet roof, and a bill that is high enough for solar to matter — in practice often ₹2,000/month and above. Apartments need a society path; that is a different product (housing-society solar), not a balcony kit.",
      },
      {
        h2: "What we install",
        body: "ALMM-aware module selection for CFA jobs, string or hybrid inverter as specified, hot-dip galvanised or equivalent structure designed for the roof, DC and AC protection, earthing, monitoring, and documentation for feasibility, net meter and inspection. We do not treat ‘panel + inverter’ as a complete system.",
      },
      {
        h2: "Subsidy versus the invoice",
        body: "CFA is paid by DBT after inspection on eligible residential systems. It is not a discount we invent on day one. Commercial shops running on a non-domestic connection should not be sold this page’s subsidy table.",
      },
      {
        h2: "Process",
        body: "Bill and roof review → site survey → design (layout, SLD, structure) → portal/DISCOM feasibility for CFA jobs → installation → net meter → inspection → handover and O&M options.",
      },
    ],
    faqs: [
      {
        q: "Is a battery required for home solar?",
        a: "No, not for a standard on-grid net-metered home. Add hybrid batteries only if you are buying backup, after looking at outage hours and cost.",
      },
      {
        q: "How long does a home installation take?",
        a: "Lifting on a clear RCC roof is often a few days after material is on site. Commissioning waits on DISCOM meter and inspection, which is usually the longer path.",
      },
    ],
  },
  {
    slug: "commercial-solar",
    title: "Commercial Rooftop Solar",
    h1: "Commercial rooftop solar for offices, shops and institutions",
    answer:
      "SONIL Solar installs commercial rooftop solar in Indore, Bhopal, Pune and Madhya Pradesh for offices, retail, schools, hospitals and other non-domestic connections — typically 10 kW to 500 kW, up to 1 MW. These projects do not receive residential PM Surya Ghar CFA. Economics come from daytime self-consumption against commercial tariff and from a correctly designed net-metering / net-billing arrangement.",
    description:
      "Commercial rooftop solar for offices, retail and institutions in Indore, Bhopal, Pune and Madhya Pradesh, up to 1 MW.",
    audience: "Offices, retail, clinics, schools, hospitals, commercial buildings",
    sizeRange: "10 kW–1 MW",
    sections: [
      {
        h2: "Why commercial is not a large home kit",
        body: "Different tariff, different sanctioned load, different DISCOM file, different fire and access rules, and usually a sheet or crowded RCC roof with HVAC. The calculator’s residential CFA switch stays off on this page on purpose.",
      },
      {
        h2: "Design inputs",
        body: "12 months of bills if available, sanctioned load, transformer nameplate, roof drawings or a measured survey, equipment congestion, and whether the load is weekday-daytime (offices) or continuous (hospitals).",
      },
      {
        h2: "What you receive",
        body: "Layout, stringing, structure note, SLD, protection scheme, monitoring, installation, DISCOM file support, and an O&M proposal. Indicative ₹/kW is given as a band after survey, not as a website sticker price.",
      },
    ],
    faqs: [
      {
        q: "Is commercial solar subsidised like homes?",
        a: "Not under the household PM Surya Ghar CFA table. GHS/RWA common facilities have a separate CFA path. Factories and shops should not assume ₹78,000 DBT.",
      },
      {
        q: "Can a shop with a small roof go solar?",
        a: "If unshaded area and sanctioned load support even 3–10 kW and the connection category is understood, yes. Many AB Road / MG Road shops fail the shade or load test; we will say so.",
      },
    ],
  },
  {
    slug: "industrial-solar",
    title: "Industrial Solar up to 1 MW",
    h1: "Industrial rooftop and distributed solar up to 1 MW",
    answer:
      "SONIL Solar executes industrial rooftop and distributed solar up to 1 MW for factories, warehouses and process plants in Pithampur, Dewas, Sanwer Road, Mandideep, Chakan, Talegaon and other catchments. These are EPC-style jobs: survey, design, procurement, construction, testing, commissioning and O&M. They are not residential subsidy installations.",
    description:
      "Industrial rooftop solar and solar EPC up to 1 MW for factories and warehouses in Madhya Pradesh and Pune.",
    audience: "Factories, warehouses, process plants, logistics",
    sizeRange: "50 kW–1 MW",
    sections: [
      {
        h2: "Where this is real",
        body: "Pithampur, Dewas Industrial Area, Sanwer Road, Mandideep, Chakan, Talegaon, Bhosari. If your plant is elsewhere in MP, send the location — we will not auto-publish a district page without service intent.",
      },
      {
        h2: "Engineering",
        body: "Purlin and wind-load checks, walkways, DC isolation, AC protection, earthing grid, inverter siting out of process heat, monitoring, and a commissioning file a plant engineer can read. Parent company Sonil Buildcon already works in solar civil, MMS and infrastructure EPC; that discipline is the point of this brand’s industrial offer.",
      },
      {
        h2: "Grid",
        body: "HT versus LT, transformer headroom, APFC, export permission, and the live MPERC or MERC order. Net metering up to the capacity your regulation and feasibility actually allow — in MP this is commonly discussed up to 500 kW for eligible rooftop, which is why 500 kW and 1 MW have their own planning pages.",
      },
    ],
    faqs: [
      {
        q: "Do factories get PM Surya Ghar subsidy?",
        a: "No. Do not budget industrial capex against ₹78,000 household CFA.",
      },
      {
        q: "How long does a 100 kW industrial install take?",
        a: "Design and DISCOM path usually dominate. Installation on a clear shed can be scheduled in a planned shutdown window. We will not quote a marketing number of ‘7 days’ that ignores feasibility.",
      },
    ],
  },
  {
    slug: "rooftop-solar",
    title: "Rooftop Solar Installation",
    h1: "Rooftop solar installation — residential, commercial and industrial",
    answer:
      "Rooftop solar at SONIL Solar means a grid-interactive (or hybrid/off-grid) photovoltaic system mounted on your building, sized to load and roof, documented with the DISCOM, and handed over with protection and monitoring. We cover homes (1–10 kW), commercial roofs, and industrial sheds up to 1 MW in Indore, Bhopal, Pune and Madhya Pradesh.",
    description:
      "Rooftop solar installation for homes, businesses and industry in Indore, Bhopal, Pune and Madhya Pradesh.",
    audience: "Any building owner with a viable roof and a DISCOM connection",
    sizeRange: "1 kW–1 MW",
    sections: [
      {
        h2: "On-grid, hybrid, off-grid",
        body: "On-grid with net metering is the default for cities in this footprint. Hybrid adds batteries for backup. Off-grid is for sites where the grid cannot be the backbone. Each has a different bill of materials and a different sales pitch — we will not upsell batteries onto a stable urban feeder without a reason.",
      },
      {
        h2: "Roof first",
        body: "Useful area, shade, waterproofing, structure type (RCC, truss, standing seam), access, and lightning/earthing. A 10 kW sale on a 6 kW roof is a callback, not a project.",
      },
    ],
    faqs: [
      {
        q: "How much roof area per kW?",
        a: "About 8 m² of unshaded area per kW for common module layouts, plus access. Always confirmed on site.",
      },
    ],
  },
  {
    slug: "solar-epc",
    title: "Solar EPC up to 1 MW",
    h1: "Solar EPC for distributed projects up to 1 MW",
    answer:
      "SONIL Solar offers engineering, procurement and construction for distributed solar up to 1 MW — rooftop and selected ground-mount — building on Sonil Buildcon’s existing EPC practice in solar civil, transmission and substations. EPC here means single-point design-to-commissioning responsibility, not a brokerage of panels.",
    description:
      "Solar EPC up to 1 MW for commercial and industrial clients in Madhya Pradesh and Pune.",
    audience: "Industrial and institutional clients needing a single execution package",
    sizeRange: "50 kW–1 MW",
    sections: [
      {
        h2: "Scope",
        body: "Survey, yield and electrical design, structure, procurement of specified equipment, installation, testing, commissioning, DISCOM interconnection support, documentation pack, and optional O&M. Utility-scale parks beyond 1 MW remain a Sonil Buildcon / Sonil Power conversation, not this rooftop brand’s default SKU.",
      },
      {
        h2: "How this differs from a residential installer",
        body: "Method statements, QA, safety, and a drawing list. If you want only a household 3 kW CFA job, use the residential page — that is a valid product, just a different one.",
      },
    ],
    faqs: [
      {
        q: "Do you take only full EPC or also partial packages?",
        a: "Default is full rooftop EPC up to 1 MW. Partial (structure-only, electrical-only) can be discussed for plants that already have a consultant SLD. We do not take undocumented ‘supply and forget’ jobs.",
      },
    ],
  },
  {
    slug: "housing-society-solar",
    title: "Housing Society and RWA Solar",
    h1: "Solar for housing societies and RWAs",
    answer:
      "SONIL Solar designs common-area and society rooftop solar for RWAs in Indore, Bhopal and Pune. This is not a flat-owner putting 3 kW on a common terrace without a resolution. GHS/RWA CFA, where claimed, follows the national common-facility rules (commonly ₹18,000/kW with per-dwelling and 500 kW caps), not the individual household ₹78,000 table.",
    description:
      "Housing society and RWA rooftop solar in Indore, Bhopal and Pune, including common-area CFA documentation where eligible.",
    audience: "RWAs, GHS, apartment associations",
    sizeRange: "10 kW–500 kW typical",
    sections: [
      {
        h2: "Legal first",
        body: "Society resolution, ownership of the terrace, who pays, who receives CFA, and which meter is offset. Skipping this is how society projects die after a sales visit.",
      },
      {
        h2: "Technical",
        body: "Load of lifts, pumps, common lights, and optional EV charging. Structural review of the common roof. Walkways so maintenance does not become a dispute.",
      },
    ],
    faqs: [
      {
        q: "Can I use my flat’s PM Surya Ghar quota on the society roof?",
        a: "Not as a casual swap. Individual CFA and GHS/RWA CFA are different portal paths. The society’s documents decide.",
      },
    ],
  },
  {
    slug: "factory-solar",
    title: "Factory Rooftop Solar",
    h1: "Rooftop solar for factories",
    answer:
      "SONIL Solar installs factory rooftop solar up to 1 MW in industrial catchments including Pithampur, Dewas, Sanwer Road, Mandideep, Chakan and Talegaon. Sizing follows daytime process load, sanctioned capacity and roof steel — not a residential subsidy chart.",
    description:
      "Factory rooftop solar up to 1 MW in Madhya Pradesh and Pune industrial areas.",
    audience: "Manufacturing plants",
    sizeRange: "50 kW–1 MW",
    sections: [
      {
        h2: "Load shape",
        body: "Shift patterns, weekly offs, and whether compressors/furnaces spike beyond what a rooftop plant should chase. We size for a high self-consumption fraction unless export is explicitly designed and permitted.",
      },
      {
        h2: "Roof",
        body: "GI sheet, north-light, RCC utility blocks. Exhausts and skylights are layout constraints. Cleaning access is part of design because industrial soiling is not residential dust.",
      },
    ],
    faqs: [
      {
        q: "Is 100 kW enough for my factory?",
        a: "Only a load file can say. 100 kW is a common conversation starter for a medium shed, not a universal answer. See the 100 kW planning page for area and generation ranges.",
      },
    ],
  },
  {
    slug: "warehouse-solar",
    title: "Warehouse Rooftop Solar",
    h1: "Rooftop solar for warehouses",
    answer:
      "Warehouses often have the roof area factories wish they had, and a milder, lighting-and-handling load. SONIL Solar designs warehouse rooftop solar in MP and Pune logistics belts, typically 50 kW–1 MW, with structure design that respects sheet roofs and insurance conditions.",
    description:
      "Warehouse rooftop solar in Madhya Pradesh and Pune logistics catchments.",
    audience: "Logistics and storage operators",
    sizeRange: "50 kW–1 MW",
    sections: [
      {
        h2: "Watch-outs",
        body: "Low daytime load relative to roof area (export risk), standing-seam clamp compatibility, and fire/insurance conditions on penetrations. A warehouse can take 500 kW of modules and only need 80 kW of load — we will say that before you buy the extra.",
      },
    ],
    faqs: [
      {
        q: "Can a warehouse export surplus?",
        a: "Only if the DISCOM and the applicable MPERC/MERC order allow it for your category and capacity. Do not assume residential-style banking on an HT warehouse feeder.",
      },
    ],
  },
  {
    slug: "school-solar",
    title: "School Rooftop Solar",
    h1: "Rooftop solar for schools",
    answer:
      "Schools have weekday-daytime load that matches solar, and roofs that are often usable if playground shade structures and tanks are mapped. SONIL Solar installs school rooftop systems in MP and Pune. Connection category (institutional versus commercial) decides subsidy and tariff treatment — we do not assume household CFA on a school meter.",
    description:
      "School rooftop solar installation in Indore, Bhopal, Pune and Madhya Pradesh.",
    audience: "Schools and educational trusts",
    sizeRange: "10 kW–200 kW typical",
    sections: [
      {
        h2: "Safety",
        body: "Access control, walkways, and DC isolation so a terrace is not a student hazard. This is non-negotiable on education sites.",
      },
    ],
    faqs: [
      {
        q: "Do schools get PM Surya Ghar subsidy?",
        a: "Only if the connection and portal path actually qualify — most school meters do not sit on the household CFA table. We check the bill first.",
      },
    ],
  },
  {
    slug: "hospital-solar",
    title: "Hospital Solar",
    h1: "Solar for hospitals and clinics",
    answer:
      "Hospitals run daytime clinical load plus 24×7 critical circuits. SONIL Solar designs rooftop solar that offsets non-critical daytime energy; backup of OT and ICU is a separate electrical conversation (DG, UPS, hybrid). We will not claim that on-grid solar ‘keeps the hospital running in a blackout’ without batteries and a designed islanding scheme.",
    description:
      "Hospital and clinic rooftop solar in Indore, Bhopal, Pune and Madhya Pradesh.",
    audience: "Hospitals, nursing homes, clinics",
    sizeRange: "10 kW–500 kW",
    sections: [
      {
        h2: "Electrical manners",
        body: "Inverter siting away from sensitive equipment, earthing, and a clear statement of what is and is not backed up. Net metering on a hospital feeder follows the DISCOM category on the bill.",
      },
    ],
    faqs: [
      {
        q: "Will solar replace the diesel generator?",
        a: "On-grid solar will not. Hybrid can reduce DG run hours for designed circuits. Critical care backup remains a hospital engineering specification.",
      },
    ],
  },
  {
    slug: "on-grid-solar",
    title: "On-Grid Solar",
    h1: "On-grid rooftop solar with net metering",
    answer:
      "On-grid (grid-tied) solar is the default SONIL Solar product in Indore, Bhopal, Pune and MP: modules and inverter export unused energy to the DISCOM under a net-metering or net-billing arrangement. It lowers the bill; it does not work as a backup during a grid outage unless you add a hybrid islanding design.",
    description:
      "On-grid solar installation with DISCOM net-metering support in Madhya Pradesh and Pune.",
    audience: "Homes and businesses with a stable grid connection",
    sizeRange: "1 kW–1 MW",
    sections: [
      {
        h2: "Net metering in one paragraph",
        body: "A bidirectional meter records import and export. Credits follow the DISCOM’s regulation — in MP, surplus treatment is commonly described as banking with annual September settlement against APPC; in Pune, MSEDCL/MERC rules apply. The live order wins over this paragraph.",
      },
    ],
    faqs: [
      {
        q: "Why does on-grid solar shut down in a power cut?",
        a: "Anti-islanding: the inverter must not energise a dead grid and kill a lineman. That is a safety requirement, not a defect.",
      },
    ],
  },
  {
    slug: "hybrid-solar",
    title: "Hybrid Solar",
    h1: "Hybrid solar with battery backup",
    answer:
      "Hybrid solar pairs a rooftop array with batteries so selected loads can run when the grid is down or when you choose to time-shift. SONIL Solar specifies hybrid only after outage hours and critical-load listing. It costs more than on-grid and is not required for PM Surya Ghar CFA.",
    description:
      "Hybrid solar and battery backup systems for homes and businesses in MP and Pune.",
    audience: "Sites with material outages or defined backup circuits",
    sizeRange: "3 kW–50 kW typical residential/commercial hybrid",
    sections: [
      {
        h2: "What we will not do",
        body: "We will not hide battery cost inside a ‘solar package’ to win a 3 kW CFA comparison. Backup is itemised.",
      },
    ],
    faqs: [
      {
        q: "Does subsidy cover batteries?",
        a: "Household CFA is framed around rooftop solar capacity, not as a blank cheque for lithium banks. Confirm the live portal. Budget batteries as owner capex unless a written scheme says otherwise.",
      },
    ],
  },
  {
    slug: "off-grid-solar",
    title: "Off-Grid Solar",
    h1: "Off-grid solar for sites without a reliable grid",
    answer:
      "Off-grid solar is a generating plant plus storage (and often a small DG) that does not depend on net metering. SONIL Solar uses it for farms, remote stores and construction sites where the grid is absent or unusable. It is the wrong default for a city bungalow with a working feeder.",
    description:
      "Off-grid solar systems for remote and unreliable-grid sites in Madhya Pradesh.",
    audience: "Farms, remote facilities, temporary sites",
    sizeRange: "1 kW–25 kW typical",
    sections: [
      {
        h2: "Sizing",
        body: "Night load and autonomy hours dominate cost. A honest off-grid quote is mostly battery and load discipline.",
      },
    ],
    faqs: [
      {
        q: "Can I get PM Surya Ghar on off-grid?",
        a: "The scheme is built around grid-connected residential rooftop. Do not assume CFA on a standalone plant. Check the live portal.",
      },
    ],
  },
  {
    slug: "solar-maintenance",
    title: "Solar O&M and AMC",
    h1: "Solar maintenance, O&M and AMC",
    answer:
      "SONIL Solar offers operation and maintenance for rooftop plants we install, and will review third-party plants case by case. O&M is module washing, electrical checks, inverter logs, earthing tests and a yearly performance note — not a verbal ‘call us if something happens’.",
    description:
      "Solar O&M and AMC for rooftop plants in Indore, Bhopal, Pune and Madhya Pradesh.",
    audience: "Existing plant owners",
    sizeRange: "Residential through 1 MW",
    sections: [
      {
        h2: "Why it exists",
        body: "Malwa dust, Pune monsoon corrosion, and industrial soiling will eat the yield file if nobody washes or reads inverter faults. CFA vendor rules also expect a maintenance period on eligible residential plants — we design to that expectation rather than disappearing after lifting.",
      },
    ],
    faqs: [
      {
        q: "How often should modules be washed in Indore?",
        a: "Many Indore and Pithampur roofs need a look every 1–3 months depending on dust. We set the cycle after seeing the roof, not from a national average.",
      },
    ],
  },
  {
    slug: "solar-consultation",
    title: "Solar Consultation and Site Survey",
    h1: "Solar consultation and site survey",
    answer:
      "A SONIL Solar consultation is a bill review plus a roof survey: shade, structure, cable route, meter type, sanctioned load. The website calculator is a planning tool. The survey is what a quotation is allowed to stand on.",
    description:
      "Paid-path solar consultation and site survey in Indore, Bhopal, Pune and Madhya Pradesh.",
    audience: "Anyone before they buy a kit",
    sizeRange: "Any",
    sections: [
      {
        h2: "What to send before we visit",
        body: "Latest bill (all pages), roof photos including tanks and neighbouring height, and whether you want CFA, backup, or industrial cost reduction. That pre-work keeps the visit short.",
      },
    ],
    faqs: [
      {
        q: "Is the survey free?",
        a: "Serious, complete enquiries in our service cities are taken through a free-to-start consultation path. Remote or speculative ‘just send a price’ requests get a planning estimate first, not a fake 2-hour site circus.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
