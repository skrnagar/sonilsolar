/**
 * Indicative installed-cost bands for on-grid rooftop systems.
 * These are planning ranges, not quotations. Actual price depends on
 * module technology, inverter, structure (RCC / sheet / elevated),
 * cable run, shadow mitigation, DISCOM charges and site access.
 */
export type PriceBand = {
  kw: number;
  grossMin: number;
  grossMax: number;
  roofSqm: number;
  monthlyGenMin: number;
  monthlyGenMax: number;
  typicalUse: string;
};

export const residentialBands: PriceBand[] = [
  {
    kw: 1,
    grossMin: 65000,
    grossMax: 85000,
    roofSqm: 8,
    monthlyGenMin: 110,
    monthlyGenMax: 140,
    typicalUse: "Small connection, 1–2 rooms, bill roughly ₹1,000–1,800/month",
  },
  {
    kw: 2,
    grossMin: 120000,
    grossMax: 155000,
    roofSqm: 16,
    monthlyGenMin: 220,
    monthlyGenMax: 280,
    typicalUse: "2 BHK with moderate daytime use",
  },
  {
    kw: 3,
    grossMin: 170000,
    grossMax: 230000,
    roofSqm: 24,
    monthlyGenMin: 330,
    monthlyGenMax: 420,
    typicalUse: "Most common 3 BHK / 1 AC household size",
  },
  {
    kw: 5,
    grossMin: 270000,
    grossMax: 350000,
    roofSqm: 40,
    monthlyGenMin: 550,
    monthlyGenMax: 700,
    typicalUse: "Larger home, 2 ACs, higher slab tariff",
  },
  {
    kw: 10,
    grossMin: 500000,
    grossMax: 700000,
    roofSqm: 80,
    monthlyGenMin: 1100,
    monthlyGenMax: 1400,
    typicalUse: "Large bungalow, villa, or small shop / clinic",
  },
];

export const ciBands: {
  kw: number;
  label: string;
  roofSqm: number;
  annualGenMwh: string;
  use: string;
  costNote: string;
}[] = [
  {
    kw: 25,
    label: "25 kW",
    roofSqm: 180,
    annualGenMwh: "32–40",
    use: "Showroom, school wing, clinic, small office",
    costNote: "Indicative installed cost typically falls as ₹/kW versus 5–10 kW homes, because structure and inverter scale better. Site survey required.",
  },
  {
    kw: 50,
    label: "50 kW",
    roofSqm: 360,
    annualGenMwh: "65–80",
    use: "Warehouse bay, hotel, mid-size office",
    costNote: "Usually designed against daytime load, sanctioned load and transformer headroom — not against a residential subsidy table.",
  },
  {
    kw: 100,
    label: "100 kW",
    roofSqm: 700,
    annualGenMwh: "130–160",
    use: "Factory shed, cold storage, hospital block",
    costNote: "Engineering package includes SLD, structure design, protection coordination and DISCOM documentation. Budget only after a roof and load study.",
  },
  {
    kw: 250,
    label: "250 kW",
    roofSqm: 1750,
    annualGenMwh: "325–400",
    use: "Multi-shed industrial campus",
    costNote: "May involve multiple inverters, string design for east-west sheds, and shutdown planning with plant maintenance.",
  },
  {
    kw: 500,
    label: "500 kW",
    roofSqm: 3500,
    annualGenMwh: "650–800",
    use: "Large factory / warehouse cluster near the net-metering ceiling commonly discussed in MP",
    costNote: "Grid interconnection, APFC, and export settlement must be checked against the live MPERC / MERC order.",
  },
  {
    kw: 1000,
    label: "1 MW",
    roofSqm: 7000,
    annualGenMwh: "1,300–1,600",
    use: "Industrial rooftop or ground-mount at the upper end of SONIL Solar’s distributed-solar mandate",
    costNote: "Treated as a full EPC package: survey, design, procurement, construction, testing, commissioning and O&M handover.",
  },
];

export const calculatorAssumptions = {
  performanceRatio: 0.78,
  defaultTariffMp: 7.0,
  defaultTariffPune: 8.5,
  degradationYear1: 0.02,
  degradationThereafter: 0.005,
  systemLifeYears: 25,
  rupeesPerKwResidential: [
    { upToKw: 2, rate: 72500 },
    { upToKw: 3, rate: 68000 },
    { upToKw: 5, rate: 62000 },
    { upToKw: 10, rate: 56000 },
    { upToKw: 25, rate: 50000 },
    { upToKw: 100, rate: 44000 },
    { upToKw: 500, rate: 39000 },
    { upToKw: 1000, rate: 36000 },
  ],
  co2KgPerKwh: 0.82,
  roofSqmPerKw: 8,
  lastVerified: "September 2026",
};

export function rateForKw(kw: number): number {
  const rows = calculatorAssumptions.rupeesPerKwResidential;
  for (const row of rows) {
    if (kw <= row.upToKw) return row.rate;
  }
  return rows[rows.length - 1].rate;
}
