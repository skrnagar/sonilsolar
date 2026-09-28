export type SystemGuide = {
  slug: string;
  kw: number;
  title: string;
  h1: string;
  answer: string;
  roofSqm: string;
  annualGen: string;
  use: string;
  sections: { h2: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const systemGuides: SystemGuide[] = [
  {
    slug: "100kw-rooftop-solar",
    kw: 100,
    title: "100 kW Rooftop Solar",
    h1: "100 kW rooftop solar — planning guide",
    answer:
      "A 100 kW rooftop plant typically needs about 700 m² of unshaded roof, produces roughly 1.3–1.6 lakh kWh per year in MP (using ~5.4 sun hours and 0.78 PR), and is a commercial/industrial project — not a residential CFA kit. It suits a factory shed, warehouse bay or large institution with matching daytime load.",
    roofSqm: "About 700 m² unshaded, plus walkways",
    annualGen: "130–160 MWh/year in a typical MP year on a clean roof",
    use: "Medium factory, warehouse, hospital block, campus",
    sections: [
      {
        h2: "When 100 kW is honest",
        body: "When the daytime load can swallow most of the generation and the steel can take the array. If the shed is 100 kW of roof and 25 kW of load, we will say so.",
      },
      {
        h2: "Equipment",
        body: "Multiple strings, commercial inverters, DC isolation, AC protection, monitoring, and a structure note. Not a residential 5 kW string inverter scaled with wishful thinking.",
      },
      {
        h2: "Grid",
        body: "LT or HT as on the bill, feasibility, and protection coordination. No household subsidy line item.",
      },
    ],
    faqs: [
      {
        q: "What does 100 kW cost?",
        a: "Indicative ₹/kW is lower than 3 kW homes but still site-specific. We issue a band after survey. Anyone giving you a single rupee figure from this page is not us.",
      },
    ],
  },
  {
    slug: "250kw-rooftop-solar",
    kw: 250,
    title: "250 kW Rooftop Solar",
    h1: "250 kW rooftop solar — planning guide",
    answer:
      "250 kW is a multi-inverter industrial rooftop, roughly 1,750 m² of unshaded roof and about 325–400 MWh/year in a typical MP climate file. It is an EPC package: shutdown planning, protection, and DISCOM interconnection — still under SONIL Solar’s 1 MW distributed-solar mandate.",
    roofSqm: "About 1,750 m² unshaded",
    annualGen: "325–400 MWh/year typical MP assumption set",
    use: "Multi-shed manufacturing, large warehouse",
    sections: [
      {
        h2: "Project shape",
        body: "Often split across sheds with different orientations. East-west layouts are common. Cable routes and inverter rooms become the design, not the module count.",
      },
    ],
    faqs: [
      {
        q: "Is 250 kW net-meterable in MP?",
        a: "It sits under the 500 kW figure commonly discussed for eligible rooftop net metering in current MPERC practice, but only the feasibility letter counts.",
      },
    ],
  },
  {
    slug: "500kw-rooftop-solar",
    kw: 500,
    title: "500 kW Rooftop Solar",
    h1: "500 kW rooftop solar — planning guide",
    answer:
      "500 kW sits at the capacity often discussed as the upper rooftop net-metering conversation in Madhya Pradesh. It needs on the order of 3,500 m² unshaded roof and may yield ~650–800 MWh/year under our MP assumption set. Treat interconnection as a regulatory and DISCOM problem first.",
    roofSqm: "About 3,500 m² unshaded",
    annualGen: "650–800 MWh/year typical MP assumption set",
    use: "Large factories and warehouse clusters",
    sections: [
      {
        h2: "Regulation",
        body: "Confirm the live MPERC order (including any RG-39/2024 successor) and MSEDCL/MERC if the site is Pune. This page will not freeze a legal cap in marketing copy without the order attached to the project.",
      },
    ],
    faqs: [
      {
        q: "Is 500 kW the maximum?",
        a: "It is the number commonly discussed for eligible MP rooftop net metering. Your letter may be lower. 1 MW is a different planning conversation.",
      },
    ],
  },
  {
    slug: "1mw-rooftop-solar",
    kw: 1000,
    title: "1 MW Rooftop Solar",
    h1: "1 MW rooftop solar — planning guide",
    answer:
      "1 MW is the upper end of SONIL Solar’s distributed-solar mandate: roughly 7,000 m² unshaded roof or a mix of rooftop and limited ground-mount, ~1,300–1,600 MWh/year under MP assumptions. Interconnection may not be a simple residential-style net meter. This is full EPC.",
    roofSqm: "About 7,000 m² unshaded equivalent",
    annualGen: "1,300–1,600 MWh/year typical MP assumption set",
    use: "Large industrial campuses",
    sections: [
      {
        h2: "Do not copy a 3 kW flowchart",
        body: "Protection, bay, metering, shutdown, and O&M staffing are the project. Parent Sonil Buildcon’s EPC background is relevant; the household CFA table is not.",
      },
    ],
    faqs: [
      {
        q: "Is 1 MW still ‘rooftop’?",
        a: "If the roof exists, yes. Many 1 MW jobs become a mix of sheds. If you actually need a ground-mount park above this scale, that is a Sonil Buildcon utility conversation.",
      },
    ],
  },
];

export function getSystem(slug: string) {
  return systemGuides.find((s) => s.slug === slug);
}
