"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cities } from "@/content/cities";
import { calculateSolar, defaultTariffForCity, type PropertyType } from "@/lib/calculator";
import { inr, waLink } from "@/lib/format";

export function SolarCalculator({ compact = false, defaultCity = "indore" }: { compact?: boolean; defaultCity?: string }) {
  const [bill, setBill] = useState(4000);
  const [city, setCity] = useState(defaultCity);
  const [tariff, setTariff] = useState(defaultTariffForCity(defaultCity));
  const [propertyType, setPropertyType] = useState<PropertyType>("home");
  const [roof, setRoof] = useState<number | "">("");
  const [acs, setAcs] = useState(1);
  const [load, setLoad] = useState<number | "">("");
  const [daytime, setDaytime] = useState(55);

  const result = useMemo(
    () =>
      calculateSolar({
        monthlyBill: bill,
        tariff,
        citySlug: city,
        propertyType,
        roofSqm: roof === "" ? undefined : Number(roof),
        daytimeShare: daytime / 100,
        acCount: acs,
        sanctionedKw: load === "" ? undefined : Number(load),
      }),
    [bill, tariff, city, propertyType, roof, acs, load, daytime]
  );

  return (
    <div className={compact ? "" : "rounded-3xl border bg-card p-5 shadow-sm md:p-8"}>
      <div className={`grid gap-6 ${compact ? "" : "lg:grid-cols-2"}`}>
        <div className="space-y-4">
          <Field label="Monthly bill (₹)">
            <Input
              type="number"
              className="h-10"
              value={bill}
              min={500}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </Field>
          <Field label="City">
            <select
              className="h-10 w-full rounded-lg border bg-transparent px-3 text-sm"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setTariff(defaultTariffForCity(e.target.value));
              }}
            >
              {cities.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label={`Tariff (₹/kWh) — default ${defaultTariffForCity(city)}`}>
            <Input
              type="number"
              step="0.1"
              className="h-10"
              value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
            />
          </Field>
          {!compact ? (
            <>
              <Field label="Property type">
                <select
                  className="h-10 w-full rounded-lg border bg-transparent px-3 text-sm"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                >
                  <option value="home">Home</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment / society</option>
                  <option value="shop">Shop</option>
                  <option value="office">Office</option>
                  <option value="factory">Factory</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="commercial">Commercial building</option>
                </select>
              </Field>
              <Field label="Roof area (m², optional)">
                <Input
                  type="number"
                  className="h-10"
                  value={roof}
                  placeholder="Leave blank if unknown"
                  onChange={(e) => setRoof(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </Field>
              <Field label={`Daytime share of consumption: ${daytime}%`}>
                <input
                  type="range"
                  min={30}
                  max={95}
                  value={daytime}
                  onChange={(e) => setDaytime(Number(e.target.value))}
                  className="w-full"
                />
              </Field>
              <Field label="Number of ACs (optional)">
                <Input type="number" className="h-10" value={acs} onChange={(e) => setAcs(Number(e.target.value))} />
              </Field>
              <Field label="Sanctioned load kW (optional)">
                <Input
                  type="number"
                  className="h-10"
                  value={load}
                  onChange={(e) => setLoad(e.target.value === "" ? "" : Number(e.target.value))}
                />
              </Field>
            </>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground">Planning result</p>
          <p className="mt-1 font-serif text-3xl text-navy">{result.recommendedKw} kW</p>
          <p className="text-sm text-muted-foreground">Recommended capacity (estimate)</p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Metric label="Monthly generation" value={`${result.monthlyGeneration.toLocaleString("en-IN")} kWh`} />
            <Metric label="Monthly savings" value={inr(result.monthlySavings)} />
            <Metric label="Gross capex" value={inr(result.grossCost)} />
            <Metric
              label="Modelled CFA"
              value={result.subsidyEligible ? inr(result.subsidy) : "Not household"}
            />
            <Metric label="Net capex" value={inr(result.netCost)} />
            <Metric
              label="Payback"
              value={result.paybackYears ? `${result.paybackYears} years` : "Beyond 25 years"}
            />
            <Metric label="10-year savings" value={inr(result.savings10)} />
            <Metric label="25-year savings" value={inr(result.savings25)} />
            <Metric label="Roof needed" value={`${result.roofRequiredSqm} m²`} />
            <Metric label="CO₂ offset / year" value={`${result.co2KgPerYear.toLocaleString("en-IN")} kg`} />
          </div>

          <div className="mt-5 h-24 overflow-hidden rounded-xl bg-muted">
            <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
              {[8, 12, 18, 22, 28, 24, 16, 10, 14, 20, 26, 18].map((h, i) => (
                <rect
                  key={i}
                  x={i * 8.2 + 2}
                  y={40 - h}
                  width="6"
                  height={h}
                  rx="1"
                  className="fill-navy/80"
                />
              ))}
            </svg>
            <p className="sr-only">Illustrative monthly generation shape — monsoon dip, summer peak.</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild className="bg-navy">
              <a
                href={waLink(
                  `SONIL Solar report: ${result.recommendedKw} kW in ${city}, bill ₹${bill}, net ~${inr(result.netCost)}. Please schedule a site assessment.`
                )}
              >
                WhatsApp my solar report
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/get-quote?city=${city}`}>Get detailed site assessment</Link>
            </Button>
          </div>
        </div>
      </div>

      {!compact ? (
        <details className="mt-8 rounded-xl border bg-muted/40 p-4 text-sm">
          <summary className="cursor-pointer font-medium text-navy">Methodology and assumptions</summary>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
            {result.assumptions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="mt-3 text-muted-foreground">{result.disclaimer}</p>
        </details>
      ) : null}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted/70 p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}
