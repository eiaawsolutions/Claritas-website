/**
 * BMMB "Intelligent Sales Engine" — Horizon 4 demo data.
 *
 * Scripted, deterministic mock data for the Claritas × Bank Muamalat
 * Relationship-Manager workspace demo. No backend, no API keys, no PII.
 *
 * Grounded in the Horizon-4 blueprint deck: the AI Sales Triad
 * (Predictive → Generative → Autonomous) operating on 8 years of CRM
 * behavioural data, surfacing Next-Best-Actions to the Customer 360 view
 * and digital channels (i-Muamalat, Atlas), with autonomous pipeline hygiene.
 *
 * All customers, figures, and messages are illustrative demo fixtures.
 */

export type Segment = "Retail" | "Priority" | "SME" | "Wealth";
export type Temperature = "Hot" | "Warm" | "Cold";
export type Channel = "Website" | "WhatsApp" | "Branch" | "i-Muamalat" | "Atlas" | "MAP Webform";

export interface SignalPoint {
  /** Short label shown as a scoring factor chip. */
  label: string;
  /** How this factor pushed the score, for the "why" breakdown. */
  weight: "strong" | "moderate" | "supporting";
}

export type NbaKind = "cross-sell" | "retention" | "wealth" | "service" | "onboarding";

export interface NextBestAction {
  id: string;
  kind: NbaKind;
  /** Imperative headline the RM reads first. */
  headline: string;
  /** Product / rationale detail. */
  detail: string;
  /** Model's stated propensity for THIS action. */
  propensity: number; // 0–100
  /** Shariah-compliant product this maps to. */
  product: string;
  /** Estimated annualised value of the opportunity, MYR. */
  estValue: number;
}

export type DraftChannel = "WhatsApp" | "Email" | "Call Script";

export interface OutreachDraft {
  channel: DraftChannel;
  /** For email only. */
  subject?: string;
  /** The generated body. Rendered with a typing animation. */
  body: string;
  /** Compliance note the RM sees before sending. */
  complianceNote: string;
}

export interface Lead {
  id: string;
  name: string;
  /** Masked identifier — never a real IC/account in a demo. */
  ref: string;
  segment: Segment;
  /** Relationship tenure in years — feeds "8 years of history" narrative. */
  tenureYears: number;
  channel: Channel;
  /** Predictive win-likelihood / lead score, 0–100. */
  score: number;
  temperature: Temperature;
  /** Human-readable buying signal (deck: "recent posting, launching..."). */
  buyingSignal: string;
  /** Portfolio one-liner for the Customer 360 header. */
  snapshot: string;
  /** Balance-trend arrow used in the funnel narrative. */
  balanceTrend: "Growing" | "Stable" | "Declining";
  /** Churn risk band. */
  churnRisk: "Low" | "Medium" | "High";
  /** Scoring factors for the "why this score" breakdown. */
  factors: SignalPoint[];
  /** Ranked Next-Best-Actions from the decisioning layer. */
  nbas: NextBestAction[];
  /** Generative drafts, keyed by channel. */
  drafts: Record<DraftChannel, OutreachDraft>;
  /** Product the RM most recently discussed — colours the drafts. */
  lastInteraction: string;
}

export const CURRENCY = new Intl.NumberFormat("en-MY", {
  style: "currency",
  currency: "MYR",
  maximumFractionDigits: 0,
});

/* ────────────────────────────────────────────────────────────────────────
   LEADS — the predictive feed. Ranked by score in the workspace.
   ──────────────────────────────────────────────────────────────────────── */

export const LEADS: Lead[] = [
  {
    id: "L-4821",
    name: "Ahmad Ridzuan bin Yusof",
    ref: "CIF ••• 4821",
    segment: "Priority",
    tenureYears: 8,
    channel: "Website",
    score: 95,
    temperature: "Hot",
    buyingSignal: "Viewed the Home Financing-i calculator 3× in 48 hours",
    snapshot: "Priority banking · dual-income household · CASA growing 14% QoQ",
    balanceTrend: "Growing",
    churnRisk: "Low",
    factors: [
      { label: "Home Financing-i page: 3 visits / 48h", weight: "strong" },
      { label: "CASA balance +14% QoQ", weight: "strong" },
      { label: "8-yr clean repayment record", weight: "moderate" },
      { label: "Age & life-stage: property-forming", weight: "moderate" },
      { label: "No active financing facility", weight: "supporting" },
    ],
    nbas: [
      {
        id: "nba-4821-1",
        kind: "cross-sell",
        headline: "Cross-sell Home Financing-i",
        detail: "High propensity from repeat calculator visits + rising CASA. Pre-qualified band suggests RM 480k envelope.",
        propensity: 92,
        product: "Home Financing-i (Tawarruq)",
        estValue: 480_000,
      },
      {
        id: "nba-4821-2",
        kind: "wealth",
        headline: "Introduce Wealth Management",
        detail: "Surplus liquidity trend indicates appetite for Shariah unit-trust allocation.",
        propensity: 61,
        product: "Wealth Advisory · ASNB / Unit Trust-i",
        estValue: 85_000,
      },
    ],
    drafts: {
      WhatsApp: {
        channel: "WhatsApp",
        body: "Assalamualaikum En. Ahmad, this is Nabilah from Bank Muamalat Priority. I noticed you've been exploring our Home Financing-i options — congratulations if a new home is on the horizon. Based on your 8-year relationship with us, you may qualify for our profit-rate package with zero processing fee this quarter. Would a short call this week suit you to walk through the figures? No obligation at all.",
        complianceNote: "Contains indicative pricing — Shariah & marketing-approved template v3. No profit-rate quoted numerically. Consent-to-contact on file.",
      },
      Email: {
        channel: "Email",
        subject: "A Home Financing-i package prepared for you, En. Ahmad",
        body: "Assalamualaikum En. Ahmad,\n\nThank you for your continued trust in Bank Muamalat over the past eight years.\n\nWe noticed your recent interest in home financing. As a valued Priority customer with an excellent standing, we have prepared an indicative Home Financing-i proposal — structured on a Tawarruq basis, fully Shariah-compliant, with a preferential arrangement reserved for long-standing customers this quarter.\n\nMay I arrange a brief, no-obligation session to take you through it? I'm happy to work around your schedule.\n\nWarm regards,\nNabilah · Priority Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Long-form template — reviewed for Shariah language & BNM fair-dealing. Unsubscribe footer auto-appended.",
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Warm greeting, confirm you're speaking to En. Ahmad. Reference the 8-year relationship — this earns the right to the call.\n\nHOOK: \"I'm reaching out because a few things in your profile lined up — you've been looking at home financing, and your standing with us is excellent.\"\n\nDISCOVER: Is a property purchase actually in motion, or exploratory? Timeline? Any existing financing elsewhere?\n\nVALUE: Preferential quarter package, zero processing fee, Tawarruq structure. Emphasise speed of approval for existing customers.\n\nOBJECTION — \"still comparing\": Acknowledge, offer to run an indicative side-by-side so the comparison is on his terms.\n\nCLOSE: Secure a follow-up slot + consent to send the indicative letter. Log outcome — the engine updates the score.",
        complianceNote: "Advisory script — RM must not state a firm profit rate verbally. Direct rate questions → route to formal indicative letter.",
      },
    },
    lastInteraction: "Home Financing-i calculator (self-serve, web)",
  },
  {
    id: "L-3390",
    name: "Tan Wei Ling",
    ref: "CIF ••• 3390",
    segment: "Wealth",
    tenureYears: 6,
    channel: "i-Muamalat",
    score: 88,
    temperature: "Hot",
    buyingSignal: "Fixed deposit-i maturing in 9 days · no rollover instruction set",
    snapshot: "Wealth segment · RM 620k term deposits maturing · balance stable",
    balanceTrend: "Stable",
    churnRisk: "Medium",
    factors: [
      { label: "Term Deposit-i maturing < 10 days", weight: "strong" },
      { label: "No auto-rollover instruction", weight: "strong" },
      { label: "Competitor rate campaign active in market", weight: "moderate" },
      { label: "Logged into i-Muamalat 4× this week", weight: "moderate" },
      { label: "No wealth-advisory contact in 5 months", weight: "supporting" },
    ],
    nbas: [
      {
        id: "nba-3390-1",
        kind: "retention",
        headline: "Pre-empt maturity — retention offer",
        detail: "RM 620k maturing without rollover instruction is a churn flashpoint. Engage before the competitor does.",
        propensity: 84,
        product: "Term Deposit-i · preferential retention tier",
        estValue: 620_000,
      },
      {
        id: "nba-3390-2",
        kind: "wealth",
        headline: "Reallocate to Wealth portfolio",
        detail: "Maturity is the natural moment to propose a diversified Shariah wealth allocation vs. flat rollover.",
        propensity: 58,
        product: "Wealth Advisory · Sukuk / Unit Trust-i mix",
        estValue: 240_000,
      },
    ],
    drafts: {
      WhatsApp: {
        channel: "WhatsApp",
        body: "Hi Ms. Tan, Farah here from Bank Muamalat Wealth. Just a friendly heads-up — your Term Deposit-i matures next week. Before it rolls over automatically, I'd love to show you a preferential tier we've set aside for valued customers, plus a couple of Shariah-compliant options that may work harder for you. Shall I hold 15 minutes for you this week?",
        complianceNote: "Retention template — time-sensitive. No specific rate quoted. Flagged HIGH priority by SLA monitor.",
      },
      Email: {
        channel: "Email",
        subject: "Before your deposit matures — a note from your RM",
        body: "Dear Ms. Tan,\n\nI'm writing ahead of your Term Deposit-i maturity next week.\n\nRather than let it roll over on standard terms, I'd like to share two things: a preferential retention tier reserved for our valued customers, and — should it suit your goals — a diversified Shariah-compliant allocation that balances stability with growth.\n\nThere's no pressure to change anything. But maturity is the ideal moment to make sure your funds are positioned the way you want them.\n\nMight I call you this week?\n\nKind regards,\nFarah · Wealth Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Wealth suitability language checked. Any product recommendation requires a documented suitability assessment before execution.",
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Greet Ms. Tan. State the reason plainly — maturity next week, wanted to reach her before it auto-rolls.\n\nHOOK: \"I didn't want your funds to default to standard terms without you seeing the alternatives.\"\n\nDISCOVER: What was the original goal for these funds — capital preservation, income, or growth? Has that changed?\n\nVALUE: Preferential retention tier for loyalty; optionally a suitability-assessed wealth mix. Frame as choice, not a switch.\n\nOBJECTION — \"just roll it over\": Fine — confirm the preferential tier applies, secure the instruction, note the wealth conversation for later.\n\nCLOSE: Lock the instruction OR a follow-up. Either way the maturity risk is neutralised. Log outcome.",
        complianceNote: "No wealth product to be positioned as advice without suitability assessment on record.",
      },
    },
    lastInteraction: "i-Muamalat balance & maturity enquiry",
  },
  {
    id: "L-7712",
    name: "Sharifah Nadia Group Sdn Bhd",
    ref: "CIF ••• 7712",
    segment: "SME",
    tenureYears: 4,
    channel: "MAP Webform",
    score: 81,
    temperature: "Warm",
    buyingSignal: "Submitted MAP 2.0 trade-financing enquiry · 2 payroll accounts opened",
    snapshot: "SME · F&B distribution · payroll + CASA growing · trade enquiry live",
    balanceTrend: "Growing",
    churnRisk: "Low",
    factors: [
      { label: "MAP 2.0 trade-financing webform submitted", weight: "strong" },
      { label: "2 new payroll accounts in 60 days", weight: "moderate" },
      { label: "Merchant CASA turnover +22%", weight: "moderate" },
      { label: "Directors hold personal accounts (household expansion)", weight: "supporting" },
    ],
    nbas: [
      {
        id: "nba-7712-1",
        kind: "cross-sell",
        headline: "Progress trade financing enquiry",
        detail: "Inbound MAP 2.0 form is a declared intent. Route to SME trade desk with pre-filled context.",
        propensity: 79,
        product: "Trade Financing-i · Working Capital",
        estValue: 350_000,
      },
      {
        id: "nba-7712-2",
        kind: "onboarding",
        headline: "Bundle merchant + payroll",
        detail: "Growing turnover + new payroll accounts suit a bundled SME package with cash-management add-on.",
        propensity: 66,
        product: "SME Business Package-i",
        estValue: 48_000,
      },
    ],
    drafts: {
      WhatsApp: {
        channel: "WhatsApp",
        body: "Salam & good day! This is Iqbal from Bank Muamalat SME Banking. Thank you for your trade-financing enquiry through our portal — we've already pulled your business profile so you won't need to repeat anything. I can get you an indicative working-capital structure quickly. When's a good time for a 20-minute call to scope it?",
        complianceNote: "Inbound-consent template — customer initiated via MAP 2.0 form, contact consent implicit. Business-banking tone.",
      },
      Email: {
        channel: "Email",
        subject: "Re: Your trade financing enquiry — next steps",
        body: "Dear Sharifah Nadia Group team,\n\nThank you for reaching out through our business portal regarding trade financing.\n\nWe've reviewed your existing relationship with us — your payroll and merchant activity give us a strong head-start, which means a faster, better-informed structure for you.\n\nI'd like to propose a short scoping call to understand your working-capital cycle and turnaround needs, after which we can prepare an indicative Trade Financing-i structure. If it's helpful, we can also look at bundling your merchant and payroll services for operational simplicity.\n\nDo let me know a convenient slot.\n\nBest regards,\nIqbal · SME Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Business-banking template. Trade facility subject to standard credit assessment — no approval implied.",
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Reference their inbound enquiry — they came to us, so lead with responsiveness.\n\nHOOK: \"We've already pulled your profile — payroll, merchant activity — so this call is about your needs, not paperwork.\"\n\nDISCOVER: Working-capital cycle length? Seasonality? Current financing arrangements? Growth plans that drove the enquiry?\n\nVALUE: Speed for an existing customer; optional merchant+payroll bundle for simplicity.\n\nOBJECTION — \"comparing banks\": Lean on turnaround + existing relationship data reducing friction.\n\nCLOSE: Book the scoping session + list of documents. Log outcome to advance the pipeline stage.",
        complianceNote: "Facility subject to credit approval. RM must not indicate approval likelihood on the call.",
      },
    },
    lastInteraction: "MAP 2.0 trade-financing webform",
  },
  {
    id: "L-5104",
    name: "Kavitha Ramasamy",
    ref: "CIF ••• 5104",
    segment: "Retail",
    tenureYears: 3,
    channel: "WhatsApp",
    score: 74,
    temperature: "Warm",
    buyingSignal: "Asked about Takaful coverage via WhatsApp banking bot",
    snapshot: "Retail · young professional · salary crediting · protection gap",
    balanceTrend: "Growing",
    churnRisk: "Low",
    factors: [
      { label: "Inbound Takaful query via WhatsApp bot", weight: "strong" },
      { label: "Salary credited monthly (stable income)", weight: "moderate" },
      { label: "No protection product held", weight: "moderate" },
      { label: "Life-stage: early-career, insurable", weight: "supporting" },
    ],
    nbas: [
      {
        id: "nba-5104-1",
        kind: "cross-sell",
        headline: "Position Family Takaful",
        detail: "Direct protection query + no existing cover. Warm, low-friction cross-sell with strong social good framing.",
        propensity: 71,
        product: "Family Takaful-i · regular contribution",
        estValue: 6_400,
      },
    ],
    drafts: {
      WhatsApp: {
        channel: "WhatsApp",
        body: "Hi Kavitha! Thanks for asking about Takaful earlier 😊 — it's a great thing to sort out early. Based on your profile, a regular-contribution Family Takaful-i plan could give you solid protection from as little as a coffee-a-day. Would you like me to send a simple one-page summary, or prefer a quick call? Totally your call, no rush.",
        complianceNote: "Inbound query — consent implicit. Emoji permitted on retail WhatsApp per brand tone. Takaful = protection, not investment — language checked.",
      },
      Email: {
        channel: "Email",
        subject: "The Takaful summary you asked about",
        body: "Hi Kavitha,\n\nThanks for your interest in Takaful protection.\n\nSince you're early in your career with a steady income, now is genuinely the best time to lock in affordable cover — contributions are lower and you're protected sooner.\n\nI've kept things simple: a regular-contribution Family Takaful-i plan designed to be light on the wallet while covering what matters. If you'd like, I can prepare a personalised one-pager or hop on a 10-minute call.\n\nWhichever is easier for you.\n\nWarm regards,\nAisyah · Retail Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Takaful positioned as protection. No guaranteed-return language. Cooling-off rights to be disclosed at point of sale.",
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Warm, casual — she reached out, keep it light.\n\nHOOK: \"You asked about Takaful — smart move to think about it early. Wanted to make it easy for you.\"\n\nDISCOVER: Any dependants? Existing cover elsewhere? What prompted the question?\n\nVALUE: Affordable regular contribution, protection framing, peace of mind. Avoid jargon.\n\nOBJECTION — \"can't afford it\": Reframe around the low daily equivalent + flexibility to start small.\n\nCLOSE: Offer the one-pager or a follow-up. Respect a soft no — nurture, don't push. Log outcome.",
        complianceNote: "Disclose it is a protection product; state cooling-off period; no pressure tactics per fair-dealing.",
      },
    },
    lastInteraction: "WhatsApp banking bot — Takaful FAQ",
  },
  {
    id: "L-2267",
    name: "Dato' Faizal Abdullah",
    ref: "CIF ••• 2267",
    segment: "Priority",
    tenureYears: 11,
    channel: "Branch",
    score: 69,
    temperature: "Warm",
    buyingSignal: "Declining CASA balance · reduced card spend · relationship cooling",
    snapshot: "Priority · long tenure · balance declining · engagement dropping",
    balanceTrend: "Declining",
    churnRisk: "High",
    factors: [
      { label: "CASA balance −18% over 2 quarters", weight: "strong" },
      { label: "Card spend down 40%", weight: "strong" },
      { label: "No RM contact in 4 months", weight: "moderate" },
      { label: "11-yr relationship — high LTV at risk", weight: "moderate" },
    ],
    nbas: [
      {
        id: "nba-2267-1",
        kind: "retention",
        headline: "Proactive relationship save",
        detail: "High-value, high-churn. Declining balances + silence = attrition pattern. Re-engage personally, understand the drift.",
        propensity: 63,
        product: "Priority retention review",
        estValue: 900_000,
      },
      {
        id: "nba-2267-2",
        kind: "service",
        headline: "Service-recovery check-in",
        detail: "Cooling engagement often follows an unresolved service friction. Diagnose before pitching anything.",
        propensity: 55,
        product: "Relationship health review",
        estValue: 0,
      },
    ],
    drafts: {
      WhatsApp: {
        channel: "WhatsApp",
        body: "Assalamualaikum Dato' Faizal. It's been a while, and I wanted to reach out personally — you've banked with us for over a decade and that matters to us. No agenda on my side, I simply want to make sure everything's been to your satisfaction and see whether there's anything we can do better for you. Would you be open to a short call at your convenience?",
        complianceNote: "Relationship-save template — NO product pitch. Genuine service check first. Do not lead with an offer.",
      },
      Email: {
        channel: "Email",
        subject: "A personal note, Dato' Faizal",
        body: "Assalamualaikum Dato' Faizal,\n\nAfter more than eleven years, you're not a customer to us — you're part of the Bank Muamalat family, and I realised it's been too long since we properly spoke.\n\nI'm writing simply to check in. If anything about your experience with us has fallen short, I'd genuinely like to know and put it right. And if there's a way we can serve you better as your needs evolve, I'm here for that too.\n\nMight I call you at a time that suits? No agenda — just a conversation.\n\nWith respect and appreciation,\nRosli · Senior Priority Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Retention / service-recovery tone. Product discussion only if the customer opens the door. Escalation-ready.",
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Sincere, unhurried. Acknowledge the silence. \"It's been too long, and that's on us.\"\n\nHOOK: Lead with the relationship, not a product. \"Eleven years — I wanted to make sure we're still getting it right for you.\"\n\nDISCOVER: Listen. Has something changed — a service issue, a competitor, a life event, funds moved elsewhere and why?\n\nVALUE: Whatever emerges — fix the friction first. Retention offer ONLY if appropriate and after listening.\n\nOBJECTION / disclosure of a competitor move: Don't argue. Understand, then make the case to consolidate back.\n\nCLOSE: Secure a next step — a review meeting, a fix, a callback. Log the real reason for the drift — the engine learns from it.",
        complianceNote: "Service-first. Any retention incentive must fall within approved priority-tier discretion. Log churn-reason code.",
      },
    },
    lastInteraction: "Branch visit — general enquiry, 4 months ago",
  },
  {
    id: "L-9043",
    name: "Muhammad Hafiz bin Zainal",
    ref: "CIF ••• 9043",
    segment: "Retail",
    tenureYears: 1,
    channel: "Atlas",
    score: 58,
    temperature: "Cold",
    buyingSignal: "Newly onboarded via Atlas · single product · low activation",
    snapshot: "Retail · new customer · single account · onboarding incomplete",
    balanceTrend: "Stable",
    churnRisk: "Medium",
    factors: [
      { label: "Onboarded < 12 months ago", weight: "moderate" },
      { label: "Single product held (activation gap)", weight: "moderate" },
      { label: "Low digital engagement post-signup", weight: "supporting" },
      { label: "No salary crediting yet", weight: "supporting" },
    ],
    nbas: [
      {
        id: "nba-9043-1",
        kind: "onboarding",
        headline: "Drive activation & salary crediting",
        detail: "New, single-product, low-engagement. Nudge to make BMMB the primary account — the highest-leverage early move.",
        propensity: 52,
        product: "Salary crediting + debit card activation",
        estValue: 3_200,
      },
    ],
    drafts: {
      WhatsApp: {
        channel: "WhatsApp",
        body: "Hi Hafiz, welcome to Bank Muamalat! 👋 I'm Danish, here to help you get the most out of your account. A quick tip: crediting your salary here unlocks fee waivers and easier access to future financing. Want me to send the 2-step guide, or set it up together over a short call? Here to help whenever you're ready.",
        complianceNote: "Onboarding nurture — soft activation nudge. Cold lead; goal is engagement, not sale. Value-first tone.",
      },
      Email: {
        channel: "Email",
        subject: "Getting started with Bank Muamalat — a quick head-start",
        body: "Hi Hafiz,\n\nWelcome aboard — we're glad you chose Bank Muamalat.\n\nTo help you get real value from day one, here's the single most useful step: setting up salary crediting to your account. It unlocks fee benefits, builds your track record for future financing, and makes everyday banking simpler.\n\nIt takes about two minutes. I've attached a short guide — or if you'd prefer, I'm happy to set it up with you over a quick call.\n\nNo rush at all. Whenever you're ready, I'm here.\n\nWarm regards,\nDanish · Retail Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Onboarding template. No product hard-sell. Educational framing appropriate for a cold, new customer.",
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Welcoming, low-pressure. \"Just checking you're settling in fine.\"\n\nHOOK: \"One quick thing that makes a real difference early on — want me to walk you through it?\"\n\nDISCOVER: Is BMMB their main bank or a secondary account? What made them join? Any friction so far?\n\nVALUE: Salary crediting → fee benefits + financing track record. Frame as helping THEM, not us.\n\nOBJECTION — \"already have a main bank\": Understand why; position specific BMMB advantages without knocking the competitor.\n\nCLOSE: Offer to set up salary crediting or send the guide. The aim is one activation step. Log engagement.",
        complianceNote: "Nurture call. No cross-sell before activation. Keep it genuinely helpful — cold leads punish pushiness.",
      },
    },
    lastInteraction: "Atlas onboarding — account opened",
  },
];

/* ────────────────────────────────────────────────────────────────────────
   AUTONOMOUS OPERATIONS — the event stream the "Automation Loop" produces.
   Replayed on a timer in the workspace to feel live.
   ──────────────────────────────────────────────────────────────────────── */

export type AutoEventType = "routing" | "sla" | "hygiene" | "enrichment" | "ingestion";

export interface AutoEvent {
  id: number;
  type: AutoEventType;
  /** What the agent did, past tense — reads like a log line. */
  message: string;
  /** Related lead ref, if any. */
  leadRef?: string;
  /** System touched, for the source tag. */
  source: "CRM Core" | "MAP 2.0" | "CMS" | "i-Muamalat" | "Atlas" | "Dedup Agent" | "SLA Agent";
}

export const AUTO_EVENTS: AutoEvent[] = [
  {
    id: 1,
    type: "ingestion",
    message: "Captured web interest from Home Financing-i page — created Lead L-4821 (no manual extraction).",
    leadRef: "CIF ••• 4821",
    source: "CRM Core",
  },
  {
    id: 2,
    type: "routing",
    message: "Routed L-4821 to Priority RM (Nabilah) — matched on segment, product type & real-time capacity.",
    leadRef: "CIF ••• 4821",
    source: "CRM Core",
  },
  {
    id: 3,
    type: "enrichment",
    message: "Enriched L-3390 profile — appended maturity date, rollover status & 6-year tenure from core.",
    leadRef: "CIF ••• 3390",
    source: "i-Muamalat",
  },
  {
    id: 4,
    type: "sla",
    message: "SLA alert — L-3390 term deposit matures in 9 days, no rollover instruction. Escalated to RM.",
    leadRef: "CIF ••• 3390",
    source: "SLA Agent",
  },
  {
    id: 5,
    type: "hygiene",
    message: "Duplicate prevented — MAP webform match to existing CIF ••• 7712. Merged, no new record.",
    leadRef: "CIF ••• 7712",
    source: "Dedup Agent",
  },
  {
    id: 6,
    type: "ingestion",
    message: "Ingested MAP 2.0 trade-financing enquiry — pre-filled context onto Lead L-7712.",
    leadRef: "CIF ••• 7712",
    source: "MAP 2.0",
  },
  {
    id: 7,
    type: "routing",
    message: "Routed L-5104 Takaful query to Retail RM — WhatsApp channel continuity preserved.",
    leadRef: "CIF ••• 5104",
    source: "CRM Core",
  },
  {
    id: 8,
    type: "sla",
    message: "Follow-up reminder fired — L-2267 no RM contact in 4 months, churn-risk HIGH.",
    leadRef: "CIF ••• 2267",
    source: "SLA Agent",
  },
  {
    id: 9,
    type: "hygiene",
    message: "Enforced opportunity rule — one active Home Financing case per customer. No duplicate opened.",
    source: "CRM Core",
  },
  {
    id: 10,
    type: "enrichment",
    message: "Filled incomplete data field — appended employment segment to L-9043 from Atlas onboarding.",
    leadRef: "CIF ••• 9043",
    source: "Atlas",
  },
  {
    id: 11,
    type: "ingestion",
    message: "Captured card-management signal from CMS — logged reduced spend on L-2267 as churn factor.",
    leadRef: "CIF ••• 2267",
    source: "CMS",
  },
  {
    id: 12,
    type: "routing",
    message: "Load-balanced overnight queue — 47 new leads distributed across 9 RMs by capacity.",
    source: "CRM Core",
  },
];

/* ────────────────────────────────────────────────────────────────────────
   Aggregate metrics for the workspace header strip. Illustrative.
   ──────────────────────────────────────────────────────────────────────── */

export const WORKSPACE_METRICS = {
  leadsScoredToday: 47,
  hotLeads: LEADS.filter((l) => l.temperature === "Hot").length,
  pipelineValue: LEADS.reduce(
    (sum, l) => sum + (l.nbas[0]?.estValue ?? 0),
    0
  ),
  slaAlerts: AUTO_EVENTS.filter((e) => e.type === "sla").length,
  autonomousActions: AUTO_EVENTS.length,
  historyYears: 8,
};

export const TEMPERATURE_STYLE: Record<
  Temperature,
  { label: string; dot: string; text: string; ring: string }
> = {
  Hot: { label: "Hot", dot: "#721011", text: "#721011", ring: "rgba(114,16,17,0.28)" },
  Warm: { label: "Warm", dot: "#b5731f", text: "#8a5716", ring: "rgba(181,115,31,0.28)" },
  Cold: { label: "Cold", dot: "#6b7a7f", text: "#556065", ring: "rgba(107,122,127,0.28)" },
};

export const NBA_KIND_LABEL: Record<NbaKind, string> = {
  "cross-sell": "Cross-sell",
  retention: "Retention",
  wealth: "Wealth",
  service: "Service",
  onboarding: "Onboarding",
};

export const AUTO_TYPE_LABEL: Record<AutoEventType, string> = {
  routing: "Routing",
  sla: "SLA",
  hygiene: "Hygiene",
  enrichment: "Enrichment",
  ingestion: "Ingestion",
};
