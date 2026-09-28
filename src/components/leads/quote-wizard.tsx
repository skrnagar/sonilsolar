"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cities } from "@/content/cities";
import { calculateSolar, type PropertyType } from "@/lib/calculator";
import { inr, waLink } from "@/lib/format";

const propertyOptions: { id: PropertyType; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "villa", label: "Villa" },
  { id: "apartment", label: "Apartment / society" },
  { id: "shop", label: "Shop" },
  { id: "office", label: "Office" },
  { id: "school", label: "School" },
  { id: "hospital", label: "Hospital" },
  { id: "factory", label: "Factory" },
  { id: "warehouse", label: "Warehouse" },
  { id: "commercial", label: "Commercial building" },
  { id: "other", label: "Other" },
];

const billBands = [
  { id: "1500", label: "Below ₹1,500", value: 1200 },
  { id: "1500-3000", label: "₹1,500–₹3,000", value: 2200 },
  { id: "3000-5000", label: "₹3,000–₹5,000", value: 4000 },
  { id: "5000-10000", label: "₹5,000–₹10,000", value: 7500 },
  { id: "10000-25000", label: "₹10,000–₹25,000", value: 16000 },
  { id: "25000-50000", label: "₹25,000–₹50,000", value: 35000 },
  { id: "50000+", label: "₹50,000+", value: 65000 },
];

const objectives = [
  "Reduce electricity bill",
  "Subsidy solar",
  "Industrial cost reduction",
  "Backup power",
  "Sustainability / ESG",
  "New solar project",
  "Replace existing system",
];

const systemPrefs = [
  "Don't know",
  "1–3 kW",
  "3–5 kW",
  "5–10 kW",
  "10–25 kW",
  "25–100 kW",
  "100–500 kW",
  "500 kW–1 MW",
];

const consult = ["Call", "WhatsApp", "Site survey"];

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-2.5 text-left text-sm transition ${
        selected ? "border-navy bg-navy text-white" : "bg-card hover:border-navy/40"
      }`}
    >
      {children}
    </button>
  );
}

export function QuoteWizard({ defaultCity }: { defaultCity?: string }) {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<PropertyType | "">("");
  const [bill, setBill] = useState("");
  const [city, setCity] = useState(defaultCity || "indore");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [objective, setObjective] = useState("");
  const [systemPref, setSystemPref] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [consultation, setConsultation] = useState("WhatsApp");
  const [error, setError] = useState("");
  const [done, setDone] = useState<null | { id: string }>(null);
  const [busy, setBusy] = useState(false);

  const billValue = billBands.find((b) => b.id === bill)?.value ?? 4000;
  const preview = useMemo(() => {
    if (!propertyType) return null;
    return calculateSolar({
      monthlyBill: billValue,
      tariff: 0,
      citySlug: city,
      propertyType,
    });
  }, [billValue, city, propertyType]);

  async function submit() {
    setError("");
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyType,
          monthlyBillBand: bill,
          city,
          district,
          pincode,
          objective,
          systemPref,
          name,
          phone,
          whatsapp: whatsapp || phone,
          email,
          consultation,
          estimatedKw: preview?.recommendedKw,
          landingPage: typeof window !== "undefined" ? window.location.pathname : "",
          utmSource: new URLSearchParams(window.location.search).get("utm_source") || "",
          utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || "",
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not submit");
      setDone({ id: json.id });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not submit");
    } finally {
      setBusy(false);
    }
  }

  if (done && preview) {
    return (
      <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-amber-foreground">Enquiry {done.id}</p>
        <h2 className="mt-2 text-2xl font-semibold text-navy">Estimated solar recommendation</h2>
        <p className="mt-2 text-sm text-muted-foreground">{preview.disclaimer}</p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          <Stat k="Suggested capacity" v={`${preview.recommendedKw} kW`} />
          <Stat k="Indicative monthly generation" v={`${preview.monthlyGeneration.toLocaleString("en-IN")} kWh`} />
          <Stat k="Indicative monthly savings" v={inr(preview.monthlySavings)} />
          <Stat k="Subsidy eligibility (residential types only)" v={preview.subsidyEligible ? `Up to ${inr(preview.subsidy)}` : "Not household CFA"} />
          <Stat k="Indicative project range" v={`${inr(preview.netCost)} net of modelled CFA`} />
          <Stat k="Recommended next step" v={consultation === "Site survey" ? "Schedule a roof survey" : `We will ${consultation.toLowerCase()} you`} />
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="bg-navy">
            <a href={waLink(`Hi SONIL Solar, enquiry ${done.id}. ${name}, ${city}, ~${preview.recommendedKw} kW.`)}>
              WhatsApp this report
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/solar-calculator">Open full calculator</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border bg-card p-5 shadow-sm md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-navy">Solar consultation · step {step} of 7</p>
        <span className="text-xs text-muted-foreground">{Math.round((step / 7) * 100)}%</span>
      </div>
      <Progress value={(step / 7) * 100} className="mt-3 h-1.5" />

      {step === 1 && (
        <Step title="What type of property do you have?">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {propertyOptions.map((o) => (
              <Chip key={o.id} selected={propertyType === o.id} onClick={() => setPropertyType(o.id)}>
                {o.label}
              </Chip>
            ))}
          </div>
        </Step>
      )}
      {step === 2 && (
        <Step title="Monthly electricity bill">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {billBands.map((o) => (
              <Chip key={o.id} selected={bill === o.id} onClick={() => setBill(o.id)}>
                {o.label}
              </Chip>
            ))}
          </div>
        </Step>
      )}
      {step === 3 && (
        <Step title="Location">
          <div className="grid gap-3">
            <div>
              <Label htmlFor="city">City</Label>
              <select
                id="city"
                className="mt-1.5 h-10 w-full rounded-lg border bg-transparent px-3 text-sm"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
                <option value="other-mp">Other MP district</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="district">District</Label>
              <Input id="district" className="mt-1.5 h-10" value={district} onChange={(e) => setDistrict(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="pin">Pincode</Label>
              <Input id="pin" className="mt-1.5 h-10" inputMode="numeric" value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>
          </div>
        </Step>
      )}
      {step === 4 && (
        <Step title="Solar objective">
          <div className="grid gap-2">
            {objectives.map((o) => (
              <Chip key={o} selected={objective === o} onClick={() => setObjective(o)}>
                {o}
              </Chip>
            ))}
          </div>
        </Step>
      )}
      {step === 5 && (
        <Step title="System preference">
          <div className="grid grid-cols-2 gap-2">
            {systemPrefs.map((o) => (
              <Chip key={o} selected={systemPref === o} onClick={() => setSystemPref(o)}>
                {o}
              </Chip>
            ))}
          </div>
        </Step>
      )}
      {step === 6 && (
        <Step title="How should we reach you?">
          <div className="grid gap-3">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="mt-1.5 h-10" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="phone">Mobile</Label>
              <Input id="phone" className="mt-1.5 h-10" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="wa">WhatsApp (if different)</Label>
              <Input id="wa" className="mt-1.5 h-10" inputMode="numeric" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email">Email (optional)</Label>
              <Input id="email" className="mt-1.5 h-10" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
        </Step>
      )}
      {step === 7 && (
        <Step title="Preferred consultation">
          <div className="grid gap-2">
            {consult.map((o) => (
              <Chip key={o} selected={consultation === o} onClick={() => setConsultation(o)}>
                {o}
              </Chip>
            ))}
          </div>
          {preview ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Planning size from your bill band: about <strong>{preview.recommendedKw} kW</strong>. Confirmed only after survey.
            </p>
          ) : null}
        </Step>
      )}

      {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}

      <div className="mt-6 flex gap-3">
        {step > 1 ? (
          <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : null}
        {step < 7 ? (
          <Button
            type="button"
            className="bg-navy"
            disabled={
              (step === 1 && !propertyType) ||
              (step === 2 && !bill) ||
              (step === 4 && !objective) ||
              (step === 5 && !systemPref)
            }
            onClick={() => setStep((s) => s + 1)}
          >
            Continue
          </Button>
        ) : (
          <Button type="button" className="bg-navy" disabled={busy} onClick={submit}>
            {busy ? "Submitting…" : "Submit consultation"}
          </Button>
        )}
      </div>
    </div>
  );
}

function Step({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-muted/60 p-3">
      <dt className="text-xs text-muted-foreground">{k}</dt>
      <dd className="mt-1 text-sm font-medium text-navy">{v}</dd>
    </div>
  );
}
