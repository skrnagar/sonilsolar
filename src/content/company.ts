export const company = {
  brand: "SONIL Solar",
  legalName: "Sonil Buildcon Private Limited",
  parent: "Sonil Buildcon Pvt. Ltd.",
  tagline: "Rooftop solar and solar EPC for homes, businesses and industry.",
  positioning:
    "SONIL Solar is the rooftop and distributed-solar brand of Sonil Buildcon Pvt. Ltd., an engineering, procurement and construction company. We design, install and document on-grid, hybrid and off-grid solar systems for residences, housing societies, commercial buildings and industrial plants up to 1 MW.",
  entitySummary:
    "SONIL Solar provides residential, commercial and industrial rooftop solar installation, solar EPC up to 1 MW, net-metering documentation support, and operation & maintenance across Indore, Bhopal, Pune and Madhya Pradesh.",
  phoneDisplay: "+91 93405 83565",
  phoneTel: "+919340583565",
  whatsapp: "919340583565",
  email: "info@sonilbuildcon.com",
  hours: "Monday–Saturday, 9:00 AM – 7:00 PM IST",
  addressLine: "Indore, Madhya Pradesh 452016, India",
  city: "Indore",
  state: "Madhya Pradesh",
  pincode: "452016",
  country: "IN",
  geo: { lat: 22.7196, lng: 75.8577 },
  parentSite: "https://sonilbuildcon.com",
  officialSources: {
    pmSuryaGhar: "https://pmsuryaghar.gov.in/",
    mnre: "https://mnre.gov.in/",
    mpercl: "https://mperc.in/",
  },
  lastVerified: "September 2026",
  responseSla: "We respond to complete enquiries within one business day.",
} as const;

export const nav = {
  solutions: [
    { href: "/residential-solar", label: "Residential rooftop" },
    { href: "/commercial-solar", label: "Commercial rooftop" },
    { href: "/industrial-solar", label: "Industrial solar" },
    { href: "/housing-society-solar", label: "Housing society / RWA" },
    { href: "/solar-epc", label: "Solar EPC (up to 1 MW)" },
    { href: "/on-grid-solar", label: "On-grid solar" },
    { href: "/hybrid-solar", label: "Hybrid solar" },
    { href: "/off-grid-solar", label: "Off-grid solar" },
    { href: "/solar-maintenance", label: "O&M / AMC" },
  ],
  primary: [
    { href: "/projects", label: "Projects" },
    { href: "/solar-calculator", label: "Calculator" },
    { href: "/pm-surya-ghar-yojana", label: "Subsidy" },
    { href: "/locations", label: "Locations" },
  ],
} as const;
