export const subsidy = {
  lastVerified: "September 2026",
  sources: [
    {
      name: "PM Surya Ghar National Portal",
      href: "https://pmsuryaghar.gov.in/",
    },
    {
      name: "Ministry of New and Renewable Energy (MNRE)",
      href: "https://mnre.gov.in/",
    },
  ],
  schemeName: "PM Surya Ghar: Muft Bijli Yojana",
  launched: "February 2024",
  outlay: "₹75,021 crore",
  householdTarget: "1 crore residential rooftop systems",
  note: "Central Financial Assistance (CFA) figures below follow the current residential CFA structure published by MNRE for PM Surya Ghar. Slabs are revised periodically. Eligibility, DCR/ALMM module requirements, DISCOM feasibility and inspection decide what is actually disbursed. SONIL Solar does not treat subsidy as guaranteed until those checks are complete.",
  residentialCfa: [
    {
      segment: "First 2 kW (or part thereof)",
      rate: 30000,
      label: "₹30,000 per kW",
    },
    {
      segment: "Additional capacity from 2 kW to 3 kW",
      rate: 18000,
      label: "₹18,000 per kW",
    },
    {
      segment: "Capacity above 3 kW",
      rate: 0,
      label: "No additional CFA",
    },
  ],
  maxResidentialCfa: 78000,
  examples: [
    { sizeKw: 1, cfa: 30000 },
    { sizeKw: 1.5, cfa: 45000 },
    { sizeKw: 2, cfa: 60000 },
    { sizeKw: 2.5, cfa: 69000 },
    { sizeKw: 3, cfa: 78000 },
    { sizeKw: 5, cfa: 78000 },
    { sizeKw: 10, cfa: 78000 },
  ],
  ghsRwa:
    "Group Housing Societies / RWAs may receive CFA of ₹18,000 per kW for common facilities (including EV charging), generally limited to 3 kW per dwelling and capped at 500 kW overall. Confirm current portal rules before applying.",
  notForCi:
    "PM Surya Ghar CFA is a residential (and specified GHS/RWA common-area) scheme. Commercial, industrial, warehouse, hospital (non-residential connection) and factory projects do not automatically receive this household subsidy. Those projects are evaluated on tariff savings, accelerated depreciation where applicable, and net-metering / open-access rules.",
  mp: {
    implementingAgency: "Madhya Pradesh Urja Vikas Nigam Limited (MPUVNL)",
    netMetering:
      "MPERC regulations (including RG-39 of 2024 as referenced in current practitioner guidance) allow net metering for eligible rooftop systems, commonly discussed up to 500 kW. Surplus energy is typically banked and settled on the DISCOM’s published settlement cycle — in Madhya Pradesh this is widely described as an annual September settlement against the APPC rate. Always confirm the live MPERC order and your DISCOM’s circular before designing export.",
    discoms: [
      {
        short: "West DISCOM (Paschim Kshetra)",
        legal: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd.",
        hq: "Indore",
        covers: "Indore, Ujjain, Dewas, Dhar, Ratlam, Mandsaur, Neemuch, Khandwa, Khargone, Burhanpur, Barwani, Alirajpur, Jhabua, Shajapur, Agar Malwa and adjoining western circles",
      },
      {
        short: "Central DISCOM (Madhya Kshetra)",
        legal: "Madhya Pradesh Madhya Kshetra Vidyut Vitaran Co. Ltd.",
        hq: "Bhopal",
        covers: "Bhopal, Vidisha, Sehore, Raisen, Rajgarh, Narmadapuram (Hoshangabad), Harda, Betul, Guna, Ashoknagar, Shivpuri, Sheopur, Gwalior, Morena, Bhind, Datia and adjoining central circles",
      },
      {
        short: "East DISCOM (Poorv Kshetra)",
        legal: "Madhya Pradesh Poorv Kshetra Vidyut Vitaran Co. Ltd.",
        hq: "Jabalpur",
        covers: "Jabalpur, Katni, Sagar, Damoh, Rewa, Satna, Sidhi, Singrauli, Shahdol, Anuppur, Umaria, Mandla, Dindori, Balaghat, Seoni, Chhindwara, Panna, Chhatarpur, Tikamgarh, Niwari, Maihar and adjoining eastern circles",
      },
    ],
    institutionalNote:
      "Madhya Pradesh has historically notified separate support for certain government / institutional buildings through MPUVNL. Those circulars change. We do not publish a current state-percentage figure here until the live MPUVNL circular is attached to the project file.",
  },
  pune: {
    discom: "Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL)",
    netMetering:
      "Pune rooftop systems follow MSEDCL net-metering / net-billing procedures under MERC regulations. Application, technical feasibility, meter replacement and commissioning are processed in the MSEDCL circle that serves the connection. Commercial and industrial consumers should confirm sanctioned load, transformer capacity and any banking/settlement rules that apply to their tariff category.",
  },
  applicationSteps: [
    {
      title: "Register on the National Portal",
      detail:
        "Create an account at pmsuryaghar.gov.in with the consumer number printed on the electricity bill, Aadhaar-linked mobile and bank details for DBT.",
    },
    {
      title: "Select state and DISCOM",
      detail:
        "Choose Madhya Pradesh (or Maharashtra for Pune) and the correct DISCOM circle. A mismatch here is the most common cause of delayed feasibility.",
    },
    {
      title: "Feasibility approval",
      detail:
        "The DISCOM reviews sanctioned load, existing connection type and network capacity. Do not procure equipment on a verbal promise — wait for portal feasibility.",
    },
    {
      title: "Install through an empanelled vendor",
      detail:
        "Residential CFA generally requires an empanelled vendor and eligible (typically DCR / ALMM-listed) modules. SONIL Solar handles design, structure, DC/AC protection, earthing and monitoring to the approved drawing.",
    },
    {
      title: "Apply for the net meter",
      detail:
        "After installation, the net-meter / bidirectional meter request is filed with the DISCOM. Meter cost and security, where applicable, follow the DISCOM schedule.",
    },
    {
      title: "Inspection and commissioning",
      detail:
        "DISCOM / designated inspectors verify capacity, protection, earthing and documents. Generation starts contributing to the bill after meter commissioning — not on the day panels are lifted.",
    },
    {
      title: "Subsidy disbursed by DBT",
      detail:
        "On successful inspection and portal processing, CFA is transferred to the registered bank account. Timelines vary by DISCOM workload. Keep the consumer number, invoice and commissioning report.",
    },
  ],
  documents: [
    "Latest electricity bill (name must match the applicant where required)",
    "Consumer number and sanctioned load",
    "Aadhaar and mobile number used on the portal",
    "Cancelled cheque / bank proof for DBT",
    "Roof ownership or NOC from society / owner where the applicant is not the sole owner",
    "Identity and address proof as listed on the portal",
    "Photographs of the proposed roof and existing meter",
  ],
  mistakes: [
    "Assuming commercial or industrial connections get household CFA",
    "Applying under the wrong DISCOM circle or consumer number",
    "Installing before feasibility, then finding the approved capacity is lower",
    "Using modules or inverters that are not eligible for CFA",
    "Ignoring shadow from neighbouring water tanks, parapets and future lift rooms",
    "Undersizing AC cables, earthing or DC isolation to ‘save cost’",
    "Expecting zero bills without matching daytime load, sanctioned load and export rules",
  ],
};

export function residentialCfaForKw(kw: number): number {
  if (kw <= 0) return 0;
  const first = Math.min(kw, 2) * 30000;
  const second = kw > 2 ? Math.min(kw - 2, 1) * 18000 : 0;
  return Math.round(first + second);
}
