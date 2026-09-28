import { calculatorAssumptions, rateForKw } from "@/content/pricing";
import { residentialCfaForKw } from "@/content/subsidy";
import { getCity } from "@/content/cities";

export type PropertyType =
  | "home"
  | "villa"
  | "apartment"
  | "shop"
  | "office"
  | "school"
  | "hospital"
  | "factory"
  | "warehouse"
  | "commercial"
  | "other";

export type CalculatorInput = {
  monthlyBill: number;
  tariff: number;
  citySlug: string;
  propertyType: PropertyType;
  roofSqm?: number;
  daytimeShare?: number;
  acCount?: number;
  sanctionedKw?: number;
};

export type CalculatorResult = {
  recommendedKw: number;
  billKw: number;
  roofLimitedKw: number | null;
  loadLimitedKw: number | null;
  grossCost: number;
  subsidy: number;
  subsidyEligible: boolean;
  netCost: number;
  annualGeneration: number;
  monthlyGeneration: number;
  monthlySavings: number;
  annualSavings: number;
  savings10: number;
  savings20: number;
  savings25: number;
  paybackYears: number | null;
  roi25: number | null;
  roofRequiredSqm: number;
  co2KgPerYear: number;
  peakSunHours: number;
  tariff: number;
  assumptions: string[];
  disclaimer: string;
};

const residentialTypes: PropertyType[] = ["home", "villa", "apartment"];

export function defaultTariffForCity(slug: string): number {
  if (slug === "pune") return calculatorAssumptions.defaultTariffPune;
  return calculatorAssumptions.defaultTariffMp;
}

export function calculateSolar(input: CalculatorInput): CalculatorResult {
  const city = getCity(input.citySlug);
  const sun = city?.peakSunHours ?? 5.4;
  const tariff = input.tariff > 0 ? input.tariff : defaultTariffForCity(input.citySlug);
  const monthlyKwh = input.monthlyBill / tariff;
  const daytime = input.daytimeShare ?? (residentialTypes.includes(input.propertyType) ? 0.55 : 0.75);
  const usableKwh = monthlyKwh * daytime;
  const hoursMonth = sun * 30 * calculatorAssumptions.performanceRatio;
  const billKw = usableKwh / hoursMonth;

  let recommended = Math.max(1, Math.round(billKw * 2) / 2);
  if (input.acCount && input.acCount >= 2 && recommended < 5 && residentialTypes.includes(input.propertyType)) {
    recommended = Math.max(recommended, 5);
  }

  let roofLimited: number | null = null;
  if (input.roofSqm && input.roofSqm > 0) {
    roofLimited = Math.floor((input.roofSqm / calculatorAssumptions.roofSqmPerKw) * 2) / 2;
    recommended = Math.min(recommended, Math.max(1, roofLimited));
  }

  let loadLimited: number | null = null;
  if (input.sanctionedKw && input.sanctionedKw > 0) {
    loadLimited = input.sanctionedKw;
    recommended = Math.min(recommended, input.sanctionedKw);
  }

  recommended = Math.min(1000, Math.max(1, recommended));

  const annualGeneration = recommended * sun * 365 * calculatorAssumptions.performanceRatio;
  const monthlyGeneration = annualGeneration / 12;
  const monthlySavings = Math.min(input.monthlyBill, monthlyGeneration * tariff);
  const annualSavings = monthlySavings * 12;

  const subsidyEligible = residentialTypes.includes(input.propertyType);
  const subsidy = subsidyEligible ? residentialCfaForKw(recommended) : 0;
  const grossCost = recommended * rateForKw(recommended);
  const netCost = Math.max(0, grossCost - subsidy);

  let cumulative = 0;
  let payback: number | null = null;
  let gen = annualGeneration;
  let savings10 = 0;
  let savings20 = 0;
  let savings25 = 0;
  for (let y = 1; y <= calculatorAssumptions.systemLifeYears; y++) {
    if (y > 1) {
      gen *= 1 - (y === 2 ? calculatorAssumptions.degradationYear1 : calculatorAssumptions.degradationThereafter);
    }
    const yearSav = Math.min(input.monthlyBill * 12, gen * tariff);
    cumulative += yearSav;
    if (y === 10) savings10 = cumulative;
    if (y === 20) savings20 = cumulative;
    if (y === 25) savings25 = cumulative;
    if (payback === null && cumulative >= netCost) {
      const prev = cumulative - yearSav;
      const frac = yearSav > 0 ? (netCost - prev) / yearSav : 0;
      payback = Math.round((y - 1 + Math.max(0, frac)) * 10) / 10;
    }
  }

  const roi25 = netCost > 0 ? Math.round(((savings25 - netCost) / netCost) * 100) : null;

  const assumptions = [
    `Peak sun hours: ${sun} (city file${city ? ` for ${city.name}` : ""})`,
    `Performance ratio: ${calculatorAssumptions.performanceRatio}`,
    `Tariff used: ₹${tariff.toFixed(2)}/kWh (edit if your energy charge differs)`,
    `Daytime consumption share: ${Math.round(daytime * 100)}%`,
    `Indicative capex: ₹${rateForKw(recommended).toLocaleString("en-IN")}/kW`,
    `CFA applied only for home / villa / apartment property types, using the September 2026 PM Surya Ghar table`,
    `Degradation: ${calculatorAssumptions.degradationYear1 * 100}% then ${calculatorAssumptions.degradationThereafter * 100}% per year`,
    `Figures last reviewed ${calculatorAssumptions.lastVerified}`,
  ];

  return {
    recommendedKw: recommended,
    billKw: Math.round(billKw * 10) / 10,
    roofLimitedKw: roofLimited,
    loadLimitedKw: loadLimited,
    grossCost: Math.round(grossCost),
    subsidy,
    subsidyEligible,
    netCost: Math.round(netCost),
    annualGeneration: Math.round(annualGeneration),
    monthlyGeneration: Math.round(monthlyGeneration),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    savings10: Math.round(savings10),
    savings20: Math.round(savings20),
    savings25: Math.round(savings25),
    paybackYears: payback,
    roi25,
    roofRequiredSqm: Math.round(recommended * calculatorAssumptions.roofSqmPerKw),
    co2KgPerYear: Math.round(annualGeneration * calculatorAssumptions.co2KgPerKwh),
    peakSunHours: sun,
    tariff,
    assumptions,
    disclaimer:
      "Estimates only, until a site survey, shade report, sanctioned load check and live tariff/subsidy verification. Not a quotation, not a guaranteed saving, not a guaranteed CFA disbursement.",
  };
}
