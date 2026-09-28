export type LocationIntent =
  | "company"
  | "rooftop"
  | "installation"
  | "residential"
  | "commercial"
  | "industrial"
  | "price"
  | "subsidy"
  | "3kw"
  | "5kw"
  | "10kw";

export const intentMeta: Record<
  LocationIntent,
  { path: (city: string) => string; navLabel: string }
> = {
  company: {
    path: (c) => `/solar-company-in-${c}`,
    navLabel: "Solar company",
  },
  rooftop: {
    path: (c) => `/rooftop-solar-in-${c}`,
    navLabel: "Rooftop solar",
  },
  installation: {
    path: (c) => `/solar-installation-in-${c}`,
    navLabel: "Installation",
  },
  residential: {
    path: (c) => `/residential-solar-in-${c}`,
    navLabel: "Residential",
  },
  commercial: {
    path: (c) => `/commercial-solar-in-${c}`,
    navLabel: "Commercial",
  },
  industrial: {
    path: (c) => `/industrial-solar-in-${c}`,
    navLabel: "Industrial",
  },
  price: {
    path: (c) => `/solar-panel-price-in-${c}`,
    navLabel: "Panel price",
  },
  subsidy: {
    path: (c) => `/solar-subsidy-in-${c}`,
    navLabel: "Subsidy",
  },
  "3kw": {
    path: (c) => `/3kw-solar-system-in-${c}`,
    navLabel: "3 kW",
  },
  "5kw": {
    path: (c) => `/5kw-solar-system-in-${c}`,
    navLabel: "5 kW",
  },
  "10kw": {
    path: (c) => `/10kw-solar-system-in-${c}`,
    navLabel: "10 kW",
  },
};

export const mpIntents = [
  "company",
  "rooftop",
  "installation",
  "subsidy",
  "price",
  "commercial",
  "industrial",
  "epc",
] as const;
