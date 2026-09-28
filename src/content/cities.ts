import { company } from "./company";

export type Faq = { q: string; a: string };

export type City = {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  tier: 1 | 2 | 3;
  intents: boolean;
  pinHint: string;
  lat: number;
  lng: number;
  discom: string;
  discomShort: string;
  tariffNote: string;
  peakSunHours: number;
  generationPerKwDay: string;
  localities: string[];
  industrialClusters: string[];
  serviceRadius: string;
  nearestHub: string;
  distanceFromHq: string;
  climate: string;
  rooftopTypes: string;
  customerProfile: string;
  intro: string;
  longform: string[];
  faqs: Faq[];
  mega?: boolean;
};

export const cities: City[] = [
  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 1,
    intents: true,
    mega: true,
    pinHint: "452001–453771",
    lat: 22.7196,
    lng: 75.8577,
    discom: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. (West DISCOM)",
    discomShort: "West DISCOM / Paschim Kshetra",
    tariffNote:
      "Indore domestic consumers typically sit on MPERC slabs that rise into the ₹6.5–₹7.3/kWh range at higher monthly units. Commercial and industrial tariffs are higher and should be read from the latest MPERC tariff order for the relevant HT/LT category. Use the bill’s energy charge, not only the total payable, when sizing solar.",
    peakSunHours: 5.5,
    generationPerKwDay: "4.2–4.8 kWh per kW on a well-designed, low-shade roof in a typical year",
    localities: [
      "Vijay Nagar",
      "Rau",
      "Palasia",
      "Bhawarkuan",
      "Super Corridor",
      "Scheme No. 54",
      "Scheme No. 78",
      "MR-10",
      "Lasudia",
      "Sudama Nagar",
      "Rajendra Nagar",
      "Bengali Square",
      "Sapna Sangeeta",
      "AB Road",
      "Ring Road",
      "Nipania",
      "Bicholi Mardana",
      "Talawali Chanda",
      "Sanwer Road",
      "Pithampur approach",
    ],
    industrialClusters: ["Sanwer Road", "Rau / Rau Industrial Area", "Pithampur (adjacent)", "Super Corridor commercial belt"],
    serviceRadius: "Indore urban, Rau, Pithampur industrial area and adjoining Dewas / Dhar approaches",
    nearestHub: "Indore (company office pin 452016)",
    distanceFromHq: "Headquarters city",
    climate:
      "Indore sits on the Malwa plateau with a hot-summer, distinct-monsoon climate. Summer irradiance is high; the monsoon (roughly June–September) cuts generation on overcast days but does not stop a grid-tied system. Dust from construction corridors and the industrial belt is the practical operations issue — quarterly module washing and a bird/mesh plan on water-tank roofs matter more here than snow or hail. Winter fog is milder than in northern plains cities, so December–January yield is usually usable.",
    rooftopTypes:
      "Independent houses and duplexes in Vijay Nagar, Scheme 54/78 and Palasia typically have RCC roofs with overhead tanks and lift machine rooms that throw afternoon shade. Older inner-city properties around Palasia and Rajendra Nagar may have mixed parapets and neighbouring walls. Sheet roofs on Sanwer Road and Rau industrial sheds need purlin checks and wind-load design, not a residential mini-rail copy-paste. Housing societies along Super Corridor and MR-10 often need a common-area / RWA structure rather than a single-flat net meter.",
    customerProfile:
      "Residential demand is strongest among 3 BHK and bungalow owners with bills above ₹3,000/month and at least one AC. Commercial demand follows retail, clinics, coaching centres and offices on AB Road and Ring Road. Industrial demand is concentrated on Sanwer Road and the Pithampur–Rau corridor, typically 50 kW–1 MW against daytime factory load.",
    intro:
      "SONIL Solar designs and installs rooftop solar in Indore for homes, housing societies, shops, offices and factories. Indore is both our registered office city (pin 452016) and the largest rooftop-solar market in western Madhya Pradesh: high irradiance on the Malwa plateau, a dense West DISCOM network, and a neighbouring industrial belt at Pithampur and Sanwer Road. A typical 3 kW on-grid home system here is sized against the electricity bill and the unshaded RCC area, not against a generic ‘kit’. After PM Surya Ghar CFA (up to ₹78,000 for eligible 3 kW residential systems, last verified September 2026 on the national portal), net household outlay is usually in a mid-five to low-six figure band depending on modules and structure — we publish ranges, not a fake exact price. Commercial and industrial connections in Indore do not receive that household subsidy; those projects are justified on tariff savings and daytime self-consumption.",
    longform: [
      "How much does rooftop solar cost in Indore? For an eligible residential on-grid system, planning ranges in 2026 are approximately ₹65,000–₹85,000 gross for 1 kW, ₹1.70–₹2.30 lakh gross for 3 kW, and ₹2.70–₹3.50 lakh gross for 5 kW, before CFA. Subtract up to ₹30,000 / ₹60,000 / ₹78,000 respectively if the connection, modules and vendor path qualify under PM Surya Ghar. These are market bands for a complete installed system (modules, inverter, galvanised structure, cabling, earthing, ACDB/DCDB, monitoring). They are not a SONIL quotation. Sheet-roof industrial installs, elevated walkways, and long AC runs cost more.",
      "Indore’s DISCOM process runs through the West DISCOM (Paschim Kshetra Vidyut Vitaran). The consumer number on the bill, sanctioned load and the correct circle office decide feasibility. Net metering, where approved, lets unused generation offset later consumption subject to MPERC rules; surplus settlement in Madhya Pradesh is commonly described as an annual September exercise against APPC. Do not design a factory export strategy on a blog summary — read the live order and the feasibility letter.",
      "Generation: with about 5.5 peak sun hours in a typical meteorological year and a 0.78 performance ratio, a clean 1 kW array in Indore yields roughly 4.2–4.8 kWh/day, or about 1,500–1,750 kWh/year, before soiling and outages. A 3 kW system therefore lands near 330–420 units/month in a good layout. Monsoon months will undershoot; March–May will overshoot. Anyone promising a flat 5 units/kW/day every calendar month in Indore is selling a brochure, not a yield file.",
      "Local service: we survey roofs in Vijay Nagar, Rau, Palasia, Bhawarkuan, Super Corridor, Scheme 54 and 78, MR-10, Lasudia, Nipania, Sanwer Road and the Pithampur approach. A site survey checks shade (water tanks, neighbouring elevations, future lift rooms), roof waterproofing, earthing pits, inverter wall space, cable route to the meter, and whether the connection is domestic, non-domestic or HT. That survey — not the website calculator — is the document a quotation is built on.",
      "Why Indore roofs fail when they are copied from another city: black-cotton-adjacent pockets need structure and waterproofing discipline; industrial GI sheets need spanning and purlin verification; society roofs need load sharing and a legal net-meter path. SONIL Solar’s parent, Sonil Buildcon, already executes solar civil, MMS and infrastructure work as an EPC contractor. The rooftop brand uses that engineering habit: drawings, protection, earthing and paperwork, not only panel lifting.",
    ],
    faqs: [
      {
        q: "What is the cost of a 3 kW solar system in Indore after subsidy?",
        a: "A 3 kW residential on-grid system in Indore typically costs about ₹1.70–₹2.30 lakh before subsidy. Eligible households may receive up to ₹78,000 CFA under PM Surya Ghar, putting a common net band near ₹0.92–₹1.52 lakh. Final price depends on modules, inverter, structure and site conditions. Last reviewed September 2026. This is not a quotation.",
      },
      {
        q: "Which DISCOM handles rooftop solar in Indore?",
        a: "West DISCOM — Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. Feasibility, net meter and inspection follow that DISCOM’s circle for your consumer number.",
      },
      {
        q: "How much electricity does 1 kW solar generate in Indore?",
        a: "On a low-shade Indore roof, plan for about 4.2–4.8 kWh per kW per day as a yearly average (roughly 110–140 units/month per kW), using ~5.5 peak sun hours and a 0.78 performance ratio. Soiling, monsoon and outages reduce this.",
      },
      {
        q: "Is PM Surya Ghar subsidy available for factories in Indore?",
        a: "No. Household CFA is for eligible residential (and specified GHS/RWA common-area) connections. Sanwer Road and Pithampur factories are commercial/industrial projects sized on tariff and load, not on the ₹78,000 household cap.",
      },
      {
        q: "Can solar run air conditioners in Indore?",
        a: "Grid-tied solar offsets the units an AC consumes while the sun is up; it does not replace the grid or a generator by itself. A 1.5-ton inverter AC on a hot Indore afternoon may draw 1–1.5 kW. Two ACs plus household load usually points at 5 kW or more, subject to the bill and roof. Batteries are a separate hybrid/off-grid decision.",
      },
      {
        q: "How long does installation take in Indore?",
        a: "A straightforward residential RCC roof is often installed in a few days after design freeze and material delivery. The longer path is DISCOM feasibility, net-meter replacement and inspection. Plan weeks, not hours, for a commissioned, billed system.",
      },
      {
        q: "Do you serve Pithampur from Indore?",
        a: "Yes. Pithampur is treated as a high-value industrial satellite of Indore. Factory and warehouse rooftops there are scoped as C&I / EPC jobs, typically 50 kW–1 MW.",
      },
      {
        q: "Where is SONIL Solar’s office?",
        a: "Sonil Buildcon Pvt. Ltd. lists its office in Indore, Madhya Pradesh 452016. Call +91 93405 83565 or write to info@sonilbuildcon.com. We do not invent a street-level shopfront that is not on the company file.",
      },
    ],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 1,
    intents: true,
    mega: true,
    pinHint: "462001–462066",
    lat: 23.2599,
    lng: 77.4126,
    discom: "Madhya Pradesh Madhya Kshetra Vidyut Vitaran Co. Ltd. (Central DISCOM)",
    discomShort: "Central DISCOM / Madhya Kshetra",
    tariffNote:
      "Bhopal domestic tariffs follow the same MPERC order as the rest of MP, with higher-slab energy charges typically in the mid-to-high ₹6–₹7/kWh band. Many government and institutional buildings in the capital have distinct connection categories — those are not household CFA cases. Always size from the bill’s energy charge and sanctioned load.",
    peakSunHours: 5.4,
    generationPerKwDay: "4.1–4.7 kWh per kW on a well-designed, low-shade roof in a typical year",
    localities: [
      "Kolar Road",
      "Arera Colony",
      "MP Nagar",
      "Bairagarh",
      "Hoshangabad Road",
      "Bawadia Kalan",
      "Misrod",
      "Govindpura",
      "Mandideep",
      "Shahpura",
      "Gulmohar",
      "TT Nagar",
      "Shivaji Nagar",
      "Ayodhya Bypass",
      "Bagsewania",
      "Piplani",
      "Habibganj",
      "Awadhpuri",
    ],
    industrialClusters: ["Govindpura", "Mandideep", "Misrod industrial pockets"],
    serviceRadius: "Bhopal urban, Mandideep, and adjoining Sehore / Raisen approaches",
    nearestHub: "Bhopal service city; company office in Indore (452016)",
    distanceFromHq: "About 190 km from the Indore office",
    climate:
      "Bhopal’s lakes moderate some heat relative to the Malwa plateau, but summers are still severe and the monsoon is a real generation dip. Winter mornings can be mistier than Indore, which trims early-hour yield in December–January. Bird droppings on lakeside and tree-lined colonies (Arera, Shahpura, Kolar) are a cleaning issue. Design should use actual shade, not a capital-city stock photo.",
    rooftopTypes:
      "Arera Colony, Shahpura and Gulmohar have large independent RCC roofs — good candidates if water tanks and trees are mapped. Kolar Road and Hoshangabad Road mix new duplexes with society towers; towers need RWA common-area design. Govindpura and Mandideep are industrial: truss/sheet roofs, crane access, and plant shutdown windows. Older TT Nagar / Shivaji Nagar inner plots may fail a shade test because of neighbouring height.",
    customerProfile:
      "Residential: bungalows and large 3–4 BHKs with bills ₹4,000+. Institutional: schools, clinics and offices around MP Nagar. Industrial: Mandideep and Govindpura units looking at 50 kW–500 kW against shift load. Capital-city government buildings are a separate MPUVNL / departmental path — we do not advertise a state percentage until the live circular is on file.",
    intro:
      "SONIL Solar provides rooftop solar installation in Bhopal for homeowners, housing societies, institutions and factories. Bhopal sits on Central DISCOM (Madhya Kshetra Vidyut Vitaran). A well-sited 1 kW in Bhopal typically yields about 4.1–4.7 kWh/day as a yearly average. Eligible homes can apply for PM Surya Ghar CFA — ₹30,000/kW for the first 2 kW and ₹18,000 for the next 1 kW, capped at ₹78,000 (verified against the national scheme structure, September 2026). Commercial and industrial projects in Mandideep or Govindpura are not household-subsidy jobs; they are designed on sanctioned load, daytime kWh and the MPERC net-metering framework.",
    longform: [
      "What does a 5 kW system cost in Bhopal? Gross installed residential ranges in 2026 commonly fall near ₹2.70–₹3.50 lakh before CFA, with the same ₹78,000 cap if the system is eligible and at least 3 kW. Net outlay therefore stays in a roughly ₹1.9–₹2.7 lakh band for many 5 kW homes. Larger is not ‘more subsidy’ — the central residential cap does not grow past 3 kW.",
      "Central DISCOM documentation is specific: consumer number, load, and the circle that actually serves Habibganj versus Bairagarh versus Mandideep. Feasibility is not interchangeable with Indore’s West DISCOM login. Surplus banking and September APPC settlement, as discussed under current MP practice, apply at the state regulatory layer, but the field process is still the Bhopal / Mandideep office in front of you.",
      "Lakeside and green colonies look photogenic and shade badly. A 10 kW proposal on a tree-lined Arera roof that ignores the western neem line will miss yield in the same months the AC bill peaks. We treat a shade report as a design input, not an afterthought.",
      "Mandideep deserves its own sentence. It is not a Bhopal ‘area page’ filler; it is an industrial town with HT/LT factory load, sheet roofs and a different consumption shape (shifts, holidays, furnace/compressor spikes). A 100 kW or 250 kW plant there is an EPC-style package: SLD, structure, protection, metering, and an O&M plan. Copying a 3 kW home flowchart onto Mandideep is how projects stall at inspection.",
      "SONIL Solar operates Bhopal as a priority service city about 190 km from the Indore office. Enquiries go to +91 93405 83565. We will not publish a fake Bhopal shop address. When a dedicated local office exists on the company file, it will be added to this page and to NAP listings in the same words.",
    ],
    faqs: [
      {
        q: "What is the solar subsidy in Bhopal?",
        a: "Eligible residential consumers in Bhopal can apply for PM Surya Ghar CFA: ₹30,000/kW for the first 2 kW and ₹18,000 for the next 1 kW, maximum ₹78,000. It is processed via the national portal and Central DISCOM. Commercial/industrial connections are outside this household CFA. Last verified September 2026.",
      },
      {
        q: "Which DISCOM is Bhopal under?",
        a: "Central DISCOM — Madhya Pradesh Madhya Kshetra Vidyut Vitaran Co. Ltd., headquartered in Bhopal.",
      },
      {
        q: "How much roof area do I need in Bhopal?",
        a: "Plan about 8 m² of unshaded area per kW for standard landscape modules on RCC, plus walkways and tank setbacks. A 3 kW system therefore wants roughly 24 m² of useful roof, not 24 m² of total terrace including the tank.",
      },
      {
        q: "Do solar panels work during Bhopal’s monsoon?",
        a: "Yes, at reduced output. Overcast days generate less; the system remains grid-tied. Annual yield already assumes a monsoon dip. Cleaning after dusty pre-monsoon storms matters.",
      },
      {
        q: "Can housing societies in Kolar or Hoshangabad Road get subsidy?",
        a: "GHS/RWA common-facility solar has a separate CFA path (commonly described as ₹18,000/kW with per-dwelling and 500 kW caps). Individual flats usually cannot put a personal plant on a common roof without society NOC and the correct consumer category.",
      },
      {
        q: "Is Mandideep covered?",
        a: "Yes. Mandideep industrial rooftops are a core C&I catchment for our Bhopal service city, scoped as commercial/industrial EPC, not as residential subsidy kits.",
      },
      {
        q: "What is the payback period in Bhopal?",
        a: "For a bill-matched residential 3–5 kW system on a higher slab, planning payback is often in a 4–7 year band after eligible CFA, using ~₹7/kWh and the yield above. It is not a guarantee. Tariff category, shade, and whether you export or self-consume change the number.",
      },
      {
        q: "Do I need batteries in Bhopal?",
        a: "Not for a standard on-grid net-metered home. Batteries add cost and are justified for backup or time-shifting, as a hybrid design, after the outage pattern is understood.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    tier: 1,
    intents: true,
    mega: true,
    pinHint: "411001–412115",
    lat: 18.5204,
    lng: 73.8567,
    discom: "Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL)",
    discomShort: "MSEDCL",
    tariffNote:
      "Pune residential and commercial tariffs follow MERC / MSEDCL schedules and are often higher than MP domestic slabs, especially for non-domestic and HT industrial categories. Use the energy charge on the MSEDCL bill. Pimpri-Chinchwad and Pune city circles are not the same login — pick the circle printed on the bill.",
    peakSunHours: 5.3,
    generationPerKwDay: "4.0–4.6 kWh per kW on a well-designed, low-shade roof in a typical year",
    localities: [
      "Hinjewadi",
      "Wakad",
      "Baner",
      "Aundh",
      "Kothrud",
      "Hadapsar",
      "Kharadi",
      "Viman Nagar",
      "Pimpri",
      "Chinchwad",
      "Bhosari",
      "Talegaon",
      "Chakan",
      "Magarpatta",
      "Bavdhan",
      "Pimple Saudagar",
      "Wagholi",
      "Kondhwa",
    ],
    industrialClusters: ["Hinjewadi", "Chakan", "Talegaon", "Bhosari", "Ranjangaon approach", "PCMC industrial belts"],
    serviceRadius: "Pune city, Pimpri-Chinchwad (PCMC), Hinjewadi, Chakan and Talegaon industrial catchments",
    nearestHub: "Pune expansion market; company office in Indore (452016)",
    distanceFromHq: "Priority Maharashtra expansion market",
    climate:
      "Pune’s elevation and monsoon are the design facts. The city is not Rajasthan: the wet season is longer and more dependable, so annual specific yield is a bit lower than Indore. Western ghats-side humidity and a defined rainy season mean structure corrosion protection and drainage around RCC penetrations are not optional. Winters are mild; summer peaks are real in the rain-shadow months before the monsoon.",
    rooftopTypes:
      "Baner, Wakad, Aundh and Kothrud mix societies (common roof, RWA) with bungalows. Hinjewadi IT campuses and Chakan / Talegaon / Bhosari factories are metal-sheet and RCC industrial roofs with equipment congestion — AHUs, diesel stacks, skylights. PCMC chawls and older Pimpri plots often fail shade and ownership tests. A Pune society job is a legal and structural exercise first, a module count second.",
    customerProfile:
      "Residential: bungalows and high-bill apartments in Baner, Kothrud, Hadapsar. Commercial: offices, hospitals, schools, retail. Industrial: auto and manufacturing belts in Chakan, Talegaon and Bhosari, plus warehousing toward Hadapsar and Wagholi. IT campuses in Hinjewadi are ESG + tariff projects, not PM Surya Ghar household cases.",
    intro:
      "SONIL Solar installs rooftop solar in Pune and Pimpri-Chinchwad for homes, societies, commercial buildings and industrial plants up to 1 MW. Pune is our priority Maharashtra market, served under MSEDCL net-metering rules (not MP West DISCOM). Eligible Pune homes can still use the national PM Surya Ghar CFA — the subsidy is central, the DISCOM process is MSEDCL. A 3 kW residential planning band remains about ₹1.70–₹2.30 lakh gross before up to ₹78,000 CFA. Factories in Chakan or Talegaon are sized on HT/LT load and roof steel, with no household subsidy assumed.",
    longform: [
      "Why Pune is not a copy of the Indore page: different DISCOM, different monsoon, different roof stock, different industrial map. MSEDCL feasibility, meter type and circle office (Pune city vs PCMC vs rural feeders toward Chakan) control the critical path. We file what the bill says, not what a marketing city list says.",
      "How much does commercial solar cost in Pune? There is no honest single number. A 50–100 kW office or warehouse is budgeted in ₹/kW that is usually lower than 3 kW residential kits because inverters and structure scale, but Pune labour, lifting, and corrosion-spec structures move the band. We issue a range after a roof and load study. Anyone quoting a Pune factory to two significant figures on a web form is guessing.",
      "Societies: Maharashtra housing societies are a volume rooftop opportunity and a documentation trap. Common-area CFA for GHS/RWA, if claimed, follows the national GHS rules (₹18,000/kW with caps), not the individual 3 kW household table. Individual owners cannot treat a common terrace as personal CFA roof without the society’s resolution and the correct meter.",
      "Industrial geography: Hinjewadi (IT + some industrial), Bhosari (established industry), Chakan (auto), Talegaon (manufacturing). Each has different shutdown culture and roof vendors. SONIL Solar’s EPC parentage is relevant here: industrial solar is a construction and electrical-protection job, not a residential sales kit with a larger invoice.",
      "NAP: company office remains Indore 452016; Pune is a service market. Phone +91 93405 83565, email info@sonilbuildcon.com. When a Pune local office is opened, this page, Google Business Profile and directories will be updated in identical words. We will not list a coworking reception as a branch.",
    ],
    faqs: [
      {
        q: "Is solar subsidy available in Pune?",
        a: "Yes, for eligible residential consumers, through PM Surya Ghar on the national portal, with MSEDCL as the DISCOM. CFA is up to ₹78,000 for 3 kW. Commercial and industrial Pune connections do not get this household CFA. Last verified September 2026.",
      },
      {
        q: "Which DISCOM handles Pune rooftop solar?",
        a: "MSEDCL. Use the circle and consumer number on the bill. PCMC and Pune city are processed in their respective offices.",
      },
      {
        q: "What is the price of a 5 kW solar system in Pune?",
        a: "Indicative gross installed cost for a residential 5 kW on-grid system is about ₹2.70–₹3.50 lakh, with up to ₹78,000 CFA if eligible — net often near ₹1.9–₹2.7 lakh. Pune society and sheet-roof jobs can sit outside this band. Not a quotation.",
      },
      {
        q: "How much does 3 kW generate in Pune?",
        a: "Using ~5.3 peak sun hours and a 0.78 PR, plan roughly 4.0–4.6 kWh/kW/day as a yearly average — about 360–410 units/month for 3 kW before soiling and monsoon clustering.",
      },
      {
        q: "Do you install in Hinjewadi, Chakan and Talegaon?",
        a: "Yes. Those are explicit C&I catchments on this page. They are scoped as commercial/industrial rooftop or EPC projects.",
      },
      {
        q: "Can solar work for a Pune housing society?",
        a: "Yes, with a society resolution, structural review of the common roof, and the correct common-facility or bulk-consumer metering path. This is not the same form as a bungalow net meter.",
      },
      {
        q: "Is battery mandatory in Pune?",
        a: "No for standard on-grid. Hybrid batteries are a backup/time-shift choice, sized after outage data, not as a default add-on.",
      },
      {
        q: "Does SONIL Solar have a Pune office?",
        a: "Pune is a priority service market. The published office on the company file is Indore, MP 452016. Contact +91 93405 83565. We do not list an unofficial Pune address.",
      },
    ],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "456001",
    lat: 23.1765,
    lng: 75.7885,
    discom: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. (West DISCOM)",
    discomShort: "West DISCOM",
    tariffNote: "MPERC domestic and commercial slabs via West DISCOM. Temple-town commercial loads and residential colonies should be sized from the actual bill category.",
    peakSunHours: 5.5,
    generationPerKwDay: "4.2–4.8 kWh per kW typical-year average on a low-shade roof",
    localities: ["Freeganj", "Mahakal area approaches", "Dewas Road", "Nanakheda", "Agar Road", "Indore Road"],
    industrialClusters: ["Dewas Road industrial pockets"],
    serviceRadius: "Ujjain urban and adjoining Dewas / Indore corridor",
    nearestHub: "Indore",
    distanceFromHq: "About 55 km from Indore",
    climate:
      "Ujjain shares Malwa irradiance with Indore — strong summers, a defined monsoon, low winter fog relative to the north. Festival-season load spikes around pilgrimage infrastructure are a commercial sizing quirk, not a residential one.",
    rooftopTypes:
      "Mix of older inner-city RCC with tight neighbouring shade, and newer Dewas Road / Indore Road houses with cleaner terraces. Commercial dharamshala and lodging roofs need waterproofing and walkway discipline because of heavy foot traffic.",
    customerProfile:
      "Homes on Indore and Dewas roads, shops and lodges serving pilgrimage traffic, and small manufacturing on the Dewas side. 2–5 kW residential and 10–50 kW commercial are the realistic first wave — not 1 MW parks.",
    intro:
      "SONIL Solar installs rooftop solar in Ujjain under West DISCOM, with engineering support from Indore (about 55 km). Eligible homes use the same national PM Surya Ghar CFA as the rest of India — up to ₹78,000 for 3 kW — processed on pmsuryaghar.gov.in with the Ujjain consumer number. Yield on the Malwa plateau is comparable to Indore: plan about 4.2–4.8 kWh/kW/day as a yearly average on a clean roof. Inner-city plots near older construction often fail shade; Indore Road and Dewas Road houses are usually cleaner candidates.",
    longform: [
      "Ujjain is not a thin doorway page for ‘solar company in Ujjain’. The practical differences versus Indore are roof congestion in the old city, pilgrimage-related commercial load, and the same West DISCOM process with a different circle office. We will not pretend a 500 kW pipeline exists where the building stock is 3–10 kW homes and lodges.",
      "Net metering and CFA follow the MP + national path. Festival lighting and lodge occupancy do not change CFA rules. Commercial lodges should not be sold a household subsidy story.",
    ],
    faqs: [
      {
        q: "Is PM Surya Ghar available in Ujjain?",
        a: "Yes, for eligible residential consumers, via the national portal and West DISCOM. Cap ₹78,000 at 3 kW. Last verified September 2026.",
      },
      {
        q: "How far is service from Indore?",
        a: "About 55 km. Site surveys and installation crews are routed from the Indore hub.",
      },
      {
        q: "What size suits a typical Ujjain home?",
        a: "Most independent houses with bills ₹2,000–₹5,000/month land in the 2–5 kW range after a bill and roof check.",
      },
    ],
  },
  {
    slug: "dewas",
    name: "Dewas",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "455001",
    lat: 22.9676,
    lng: 76.0534,
    discom: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. (West DISCOM)",
    discomShort: "West DISCOM",
    tariffNote: "West DISCOM / MPERC. Industrial feeders toward the Dewas industrial area should use HT/LT invoices, not a household calculator default.",
    peakSunHours: 5.5,
    generationPerKwDay: "4.2–4.8 kWh per kW typical-year average on a low-shade roof",
    localities: ["Industrial Area", "AB Road", "Ujjain Road", "Indore Road", "Station area", "Bhopal Road"],
    industrialClusters: ["Dewas Industrial Area"],
    serviceRadius: "Dewas town and industrial area, on the Indore–Ujjain belt",
    nearestHub: "Indore",
    distanceFromHq: "About 35 km from Indore",
    climate:
      "Dewas is Malwa plateau climate: high summer irradiance, monsoon dip, industrial dust that soiling models should not ignore. Generation assumptions can track Indore, minus extra soiling on factory roofs near the industrial area.",
    rooftopTypes:
      "Town residences on RCC; factory sheds with GI sheets, vents and process exhaust. Industrial roofs need corrosion and wind design plus a cleaning cycle that matches powder, fibre or foundry dust if present.",
    customerProfile:
      "A split market: 3–10 kW homes in town, and 50 kW–1 MW industrial rooftops in the notified industrial area. Do not blend those into one subsidy speech.",
    intro:
      "SONIL Solar covers Dewas as an Indore-adjacent industrial and residential market (about 35 km). West DISCOM handles net metering. Residential CFA is the national PM Surya Ghar structure. Factory rooftops in Dewas Industrial Area are C&I projects: load data, transformer headroom, sheet-roof steel and shutdown windows decide capacity — not the ₹78,000 household cap.",
    longform: [
      "Dewas is one of the more honest ‘solar in MP’ industrial stories: it is close enough to Indore for crew efficiency and has real factory roofs. A 100 kW or 250 kW plant here is a standard C&I design if the shed steel cooperates. We still require a site survey; we will not publish a fake completed-MW number for Dewas.",
    ],
    faqs: [
      {
        q: "Do Dewas factories get PM Surya Ghar subsidy?",
        a: "No. Household CFA does not apply to industrial connections. Factory economics are tariff savings and capex, with net metering where the DISCOM approves.",
      },
      {
        q: "Can you install 100 kW in Dewas Industrial Area?",
        a: "Yes, subject to roof, load and DISCOM feasibility. That is an industrial rooftop / EPC scope, not a residential kit.",
      },
      {
        q: "What about homes in Dewas town?",
        a: "Eligible domestic connections follow the same 1–10 kW residential path and CFA table as Indore, processed under West DISCOM.",
      },
    ],
  },
  {
    slug: "pithampur",
    name: "Pithampur",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "454775",
    lat: 22.6107,
    lng: 75.6969,
    discom: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. (West DISCOM)",
    discomShort: "West DISCOM",
    tariffNote: "Industrial HT/LT tariffs dominate. Do not use domestic ₹/kWh defaults for a Pithampur factory model.",
    peakSunHours: 5.5,
    generationPerKwDay: "4.2–4.8 kWh per kW typical-year average before heavy industrial soiling",
    localities: ["Sector 1–3 industrial", "Mhow-Neemuch road approaches", "Rau–Pithampur corridor"],
    industrialClusters: ["Pithampur industrial area (auto, engineering, pharma, logistics)"],
    serviceRadius: "Pithampur industrial area and the Rau corridor",
    nearestHub: "Indore",
    distanceFromHq: "About 25–35 km from Indore depending on sector",
    climate:
      "Same Malwa sun as Indore, with more airborne dust and process exhaust. Soiling can be the difference between a brochure PR of 0.78 and a real 0.70 if washing is ignored.",
    rooftopTypes:
      "Long industrial sheds, north-light roofs, RCC utility blocks, warehouse standing-seam or GI sheets. Equipment congestion (AHU, dust collectors) is the main layout constraint.",
    customerProfile:
      "Almost entirely C&I: 50 kW–1 MW industrial rooftop and warehouse solar. Residential pages for Pithampur are secondary; workers’ housing is not the demand centre.",
    intro:
      "SONIL Solar treats Pithampur as an industrial rooftop market, not as a residential suburb with a city-kit landing page. Plants here need SLD, structure design on existing purlins, protection coordination, and a West DISCOM industrial metering path. There is no PM Surya Ghar household CFA on a factory connection. Payback is a function of HT/LT energy charge, daytime load factor and whether generation is fully self-consumed.",
    longform: [
      "A 100 kW system on a Pithampur shed is a realistic starting conversation for many units; 250 kW–1 MW is a roof-steel and load-factor conversation. We publish application notes on those capacities as engineering ranges. We do not invent a completed Pithampur case study until the project file has photographs, capacity and a client-approved summary.",
    ],
    faqs: [
      {
        q: "Is Pithampur served from Indore?",
        a: "Yes. It is a primary industrial catchment of the Indore hub, about 30 km depending on sector.",
      },
      {
        q: "What size is typical for a Pithampur factory?",
        a: "Many conversations start at 50–100 kW and move to 250 kW–1 MW if roof and sanctioned load allow. The calculator on this site will not replace a load study.",
      },
      {
        q: "Is subsidy available?",
        a: "Not the residential PM Surya Ghar CFA. Ask us about current C&I policy, accelerated depreciation (where applicable) and DISCOM interconnection — not a household DBT story.",
      },
    ],
  },
  {
    slug: "jabalpur",
    name: "Jabalpur",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "482001",
    lat: 23.1815,
    lng: 79.9864,
    discom: "Madhya Pradesh Poorv Kshetra Vidyut Vitaran Co. Ltd. (East DISCOM)",
    discomShort: "East DISCOM",
    tariffNote: "East DISCOM / MPERC. Do not file Jabalpur applications on a West DISCOM Indore login.",
    peakSunHours: 5.3,
    generationPerKwDay: "4.0–4.6 kWh per kW typical-year average on a low-shade roof",
    localities: ["Wright Town", "Civil Lines", "Napier Town", "Adhartal", "Ranjhi", "Medical College area", "Gorakhpur"],
    industrialClusters: ["Adhartal", "industrial pockets toward Katni corridor"],
    serviceRadius: "Jabalpur urban and adjoining Katni approaches",
    nearestHub: "Indore (state hub); Jabalpur is the East DISCOM headquarters city",
    distanceFromHq: "About 360 km from Indore",
    climate:
      "Slightly more humid and monsoon-influenced than Malwa. Specific yield is a little lower than Indore in most typical years. Winter fog can trim mornings.",
    rooftopTypes:
      "Cantonment and civil-lines bungalows with trees; denser inner-city shade; industrial sheds at Adhartal. Tree shade is the residential killer, not irradiance.",
    customerProfile:
      "Residential 3–5 kW in Civil Lines / Wright Town, institutional buildings, and scattered industrial load. This is an East DISCOM process city — documentation is the product as much as modules.",
    intro:
      "SONIL Solar provides rooftop solar in Jabalpur under East DISCOM (Poorv Kshetra Vidyut Vitaran), which is headquartered here. That is the local fact that matters: feasibility and net meters do not travel from Indore’s West DISCOM. Eligible homes still use national PM Surya Ghar CFA. Generation assumptions should be a notch more conservative than Indore because of monsoon and trees. We serve Jabalpur as a statewide C&I and residential market from the Indore hub, with site surveys scheduled rather than implied as a same-day local shop.",
    longform: [
      "Distance is disclosed on purpose. A serious EPC-backed rooftop brand can serve Jabalpur without pretending it is a 10-minute locality of Indore. Survey dates, structure fabrication and inspection coordination are planned. If you need a neighbourhood electrician tomorrow, this is the wrong page.",
    ],
    faqs: [
      {
        q: "Which DISCOM is Jabalpur?",
        a: "East DISCOM — Madhya Pradesh Poorv Kshetra Vidyut Vitaran Co. Ltd.",
      },
      {
        q: "Is subsidy the same as Indore?",
        a: "The central CFA table is national. The DISCOM workflow is East DISCOM, not West. Last verified September 2026.",
      },
      {
        q: "Do you have a Jabalpur office?",
        a: "No separate office is listed on the company file. Enquiries: +91 93405 83565, Indore 452016.",
      },
    ],
  },
  {
    slug: "gwalior",
    name: "Gwalior",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "474001",
    lat: 26.2183,
    lng: 78.1828,
    discom: "Madhya Pradesh Madhya Kshetra Vidyut Vitaran Co. Ltd. (Central DISCOM)",
    discomShort: "Central DISCOM",
    tariffNote: "Central DISCOM / MPERC. Gwalior is not West DISCOM.",
    peakSunHours: 5.4,
    generationPerKwDay: "4.1–4.7 kWh per kW typical-year average on a low-shade roof",
    localities: ["Lashkar", "Morar", "City Centre", "Thatipur", "DD Nagar", "Mahalgaon"],
    industrialClusters: ["Banmore approach", "industrial pockets on Agra–Mumbai / Jhansi corridors"],
    serviceRadius: "Gwalior urban and Banmore approaches",
    nearestHub: "Bhopal service city / Indore office",
    distanceFromHq: "About 480 km from Indore; nearer to the Bhopal service axis",
    climate:
      "More north-Indian winter haze than Malwa. Summers are intense. Design should not copy an Indore December yield into Gwalior without a seasonal file.",
    rooftopTypes:
      "Older Lashkar fabric with shade and access issues; newer Morar / City Centre RCC; industrial sheds toward Banmore. Heritage-adjacent construction may have access and permission constraints we will not wave away.",
    customerProfile:
      "Residential 3–5 kW, commercial in City Centre, industrial toward Banmore. Central DISCOM documentation.",
    intro:
      "SONIL Solar serves Gwalior as a Central DISCOM rooftop market. Eligible homes use PM Surya Ghar CFA on the national portal with a Gwalior consumer number. Winter haze means we do not sell Indore’s December yield here. Industrial conversations toward Banmore are C&I, not household subsidy. Service is scheduled from our MP hub — the Indore office is on the company file; we do not invent a Gwalior branch.",
    longform: [
      "Gwalior’s grid and climate sit closer to the northern plains than to Indore. That affects soiling, winter yield and sometimes outage behaviour. A hybrid discussion is more common here than in Malwa, but batteries remain optional and costed separately.",
    ],
    faqs: [
      {
        q: "Which DISCOM serves Gwalior?",
        a: "Central DISCOM (Madhya Kshetra Vidyut Vitaran).",
      },
      {
        q: "Can I get ₹78,000 subsidy in Gwalior?",
        a: "If you are an eligible residential consumer installing a qualifying ≥3 kW system under PM Surya Ghar, the current CFA cap is ₹78,000. Not for commercial/industrial connections. Last verified September 2026.",
      },
      {
        q: "Do you install in Banmore?",
        a: "Industrial Banmore is in catchment as a C&I survey job, subject to scheduling from the MP hub.",
      },
    ],
  },
  {
    slug: "ratlam",
    name: "Ratlam",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "457001",
    lat: 23.3315,
    lng: 75.0367,
    discom: "Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. (West DISCOM)",
    discomShort: "West DISCOM",
    tariffNote: "West DISCOM / MPERC.",
    peakSunHours: 5.5,
    generationPerKwDay: "4.2–4.8 kWh per kW typical-year average on a low-shade roof",
    localities: ["Station area", "Industrial area", "Jaora road", "Mandsaur road", "Doogaji"],
    industrialClusters: ["Ratlam industrial area"],
    serviceRadius: "Ratlam town and industrial area; Mandsaur / Jaora approaches on survey",
    nearestHub: "Indore",
    distanceFromHq: "About 140 km from Indore",
    climate:
      "Western Malwa: high sun, monsoon dip, agricultural dust in harvest months. Similar yield class to Indore if the roof is clean.",
    rooftopTypes:
      "RCC homes and mixed industrial sheds. Railway-town older housing may have access and shade constraints.",
    customerProfile:
      "Residential 2–5 kW and small-to-mid industrial rooftops. Not a default 1 MW market.",
    intro:
      "SONIL Solar covers Ratlam under West DISCOM, routed from Indore (about 140 km). Residential CFA is national PM Surya Ghar. Ratlam’s industrial area is a C&I survey market. We write this as a real serviceable district HQ, not as 400 words of Indore text with the name swapped: the distance, the industrial mix and the railway-town housing stock are the local constraints.",
    longform: [
      "If your Ratlam roof is a clean RCC 3 BHK, the engineering looks like other Malwa homes. If it is a process shed, we will talk soiling, steel and HT/LT category instead of a 3 kW subsidy table.",
    ],
    faqs: [
      {
        q: "Is Ratlam in West DISCOM?",
        a: "Yes. Use the Ratlam consumer number on the national portal.",
      },
      {
        q: "Do you visit Ratlam for surveys?",
        a: "Yes, scheduled from the Indore hub. Share the bill and roof photographs first so the visit is useful.",
      },
      {
        q: "Typical home system size?",
        a: "Often 2–5 kW after bill analysis. We will not push 10 kW onto a 2 kW sanctioned load.",
      },
    ],
  },
  {
    slug: "sagar",
    name: "Sagar",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    tier: 2,
    intents: false,
    pinHint: "470001",
    lat: 23.8388,
    lng: 78.7378,
    discom: "Madhya Pradesh Poorv Kshetra Vidyut Vitaran Co. Ltd. (East DISCOM)",
    discomShort: "East DISCOM",
    tariffNote: "East DISCOM / MPERC.",
    peakSunHours: 5.3,
    generationPerKwDay: "4.0–4.6 kWh per kW typical-year average on a low-shade roof",
    localities: ["Civil Lines", "Makronia", "Tilli", "Bhopal road", "University area"],
    industrialClusters: ["Scattered agro and small industry"],
    serviceRadius: "Sagar town; Damoh / Vidisha approaches on scheduled survey",
    nearestHub: "Bhopal service axis / Indore office",
    distanceFromHq: "About 320 km from Indore",
    climate:
      "Central-eastern MP: hot summers, monsoon, some winter haze. Yield a little below Malwa plateau figures in a typical year.",
    rooftopTypes:
      "University-town RCC housing, some large independent roofs in Civil Lines, limited large industrial sheds compared with Dewas or Pithampur.",
    customerProfile:
      "Primarily residential and small commercial; institutional (education) roofs where the connection category allows. Industrial 100 kW+ is opportunistic, not the default story.",
    intro:
      "SONIL Solar serves Sagar under East DISCOM. This is a residential and small-commercial rooftop market with educational-institution buildings in the mix. PM Surya Ghar CFA applies to eligible homes. We will not dress Sagar up as a 1 MW industrial cluster; the honest offer is 2–10 kW homes, society/institution roofs where documents exist, and the occasional larger plant after a survey.",
    longform: [
      "East DISCOM paperwork and distance from Indore mean we schedule Sagar visits. Send the bill, sanctioned load and roof photos. If the roof is heavily shaded by neighbouring construction, we will say no rather than sell a 3 kW kit.",
    ],
    faqs: [
      {
        q: "DISCOM for Sagar?",
        a: "East DISCOM (Poorv Kshetra Vidyut Vitaran).",
      },
      {
        q: "Subsidy for homes in Sagar?",
        a: "Eligible residential CFA under PM Surya Ghar, cap ₹78,000 at 3 kW. Last verified September 2026.",
      },
      {
        q: "Do you do 100 kW in Sagar?",
        a: "If a genuine roof and load exist, yes as a C&I enquiry. We do not advertise a pipeline we do not have.",
      },
    ],
  },
];

export const mpHubLocalities = [
  "Indore",
  "Bhopal",
  "Ujjain",
  "Dewas",
  "Pithampur",
  "Jabalpur",
  "Gwalior",
  "Ratlam",
  "Sagar",
  "Rewa",
  "Satna",
  "Vidisha",
  "Sehore",
  "Narmadapuram",
  "Chhindwara",
  "Khandwa",
  "Khargone",
  "Burhanpur",
  "Mandsaur",
  "Neemuch",
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function megaCities() {
  return cities.filter((c) => c.mega);
}

export function publishedCities() {
  return cities;
}

export function intentCities() {
  return cities.filter((c) => c.intents);
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://127.0.0.1:43123";
