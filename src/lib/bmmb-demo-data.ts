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

/** Languages the composer can render a draft in. */
export type DraftLanguage = "EN" | "BM";

/** The language-dependent copy of a single draft. */
export interface DraftContent {
  /** For email only. */
  subject?: string;
  /** The generated body. Rendered with a typing animation. */
  body: string;
  /** Compliance note the RM sees before sending. */
  complianceNote: string;
}

export interface OutreachDraft extends DraftContent {
  channel: DraftChannel;
  /**
   * Bahasa Malaysia rendering of the same draft. The top-level fields hold
   * the English (EN) copy; `bm` holds the Bahasa Malaysia (BM) copy so the
   * RM can toggle the generated outreach between languages before sending.
   */
  bm: DraftContent;
}

/**
 * Resolve a draft's copy for the chosen language. Falls back to English if a
 * Bahasa Malaysia variant is ever missing, so the composer never renders blank.
 */
export function draftContent(draft: OutreachDraft, lang: DraftLanguage): DraftContent {
  if (lang === "BM" && draft.bm) return draft.bm;
  return { subject: draft.subject, body: draft.body, complianceNote: draft.complianceNote };
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
        bm: {
          body: "Assalamualaikum En. Ahmad, saya Nabilah dari Bank Muamalat Priority. Saya perasan En. Ahmad ada meneliti pilihan Pembiayaan Perumahan-i kami — tahniah sekiranya sebuah rumah baharu dalam perancangan. Berdasarkan hubungan 8 tahun bersama kami, En. Ahmad berkemungkinan layak untuk pakej kadar keuntungan kami tanpa yuran pemprosesan bagi suku tahun ini. Bolehkah kita berbual sebentar minggu ini untuk saya jelaskan butirannya? Tiada sebarang ikatan.",
          complianceNote: "Mengandungi harga indikatif — templat diluluskan Syariah & pemasaran v3. Kadar keuntungan tidak dinyatakan secara berangka. Keizinan hubungan ada dalam rekod.",
        },
      },
      Email: {
        channel: "Email",
        subject: "A Home Financing-i package prepared for you, En. Ahmad",
        body: "Assalamualaikum En. Ahmad,\n\nThank you for your continued trust in Bank Muamalat over the past eight years.\n\nWe noticed your recent interest in home financing. As a valued Priority customer with an excellent standing, we have prepared an indicative Home Financing-i proposal — structured on a Tawarruq basis, fully Shariah-compliant, with a preferential arrangement reserved for long-standing customers this quarter.\n\nMay I arrange a brief, no-obligation session to take you through it? I'm happy to work around your schedule.\n\nWarm regards,\nNabilah · Priority Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Long-form template — reviewed for Shariah language & BNM fair-dealing. Unsubscribe footer auto-appended.",
        bm: {
          subject: "Pakej Pembiayaan Perumahan-i disediakan khas untuk En. Ahmad",
          body: "Assalamualaikum En. Ahmad,\n\nTerima kasih atas kepercayaan berterusan En. Ahmad kepada Bank Muamalat sepanjang lapan tahun ini.\n\nKami perasan minat En. Ahmad terhadap pembiayaan perumahan baru-baru ini. Sebagai pelanggan Priority yang dihargai dengan rekod yang cemerlang, kami telah menyediakan cadangan indikatif Pembiayaan Perumahan-i — berstruktur secara Tawarruq, patuh Syariah sepenuhnya, dengan penawaran keistimewaan yang dikhaskan untuk pelanggan setia bagi suku tahun ini.\n\nBolehkah saya aturkan satu sesi ringkas tanpa ikatan untuk menjelaskannya kepada En. Ahmad? Saya sedia menyesuaikan dengan masa yang selesa untuk En. Ahmad.\n\nSalam hormat,\nNabilah · Pengurus Perhubungan Priority\nBank Muamalat Malaysia Berhad",
          complianceNote: "Templat panjang — disemak untuk bahasa Syariah & urus niaga saksama BNM. Nota berhenti langgan dilampirkan secara automatik.",
        },
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Warm greeting, confirm you're speaking to En. Ahmad. Reference the 8-year relationship — this earns the right to the call.\n\nHOOK: \"I'm reaching out because a few things in your profile lined up — you've been looking at home financing, and your standing with us is excellent.\"\n\nDISCOVER: Is a property purchase actually in motion, or exploratory? Timeline? Any existing financing elsewhere?\n\nVALUE: Preferential quarter package, zero processing fee, Tawarruq structure. Emphasise speed of approval for existing customers.\n\nOBJECTION — \"still comparing\": Acknowledge, offer to run an indicative side-by-side so the comparison is on his terms.\n\nCLOSE: Secure a follow-up slot + consent to send the indicative letter. Log outcome — the engine updates the score.",
        complianceNote: "Advisory script — RM must not state a firm profit rate verbally. Direct rate questions → route to formal indicative letter.",
        bm: {
          body: "MULA: Beri salam mesra, sahkan anda bercakap dengan En. Ahmad. Sebut hubungan 8 tahun — ini memberi anda hak untuk panggilan ini.\n\nUMPAN: \"Saya menghubungi kerana beberapa perkara dalam profil En. Ahmad sejajar — En. Ahmad ada meneliti pembiayaan perumahan, dan kedudukan En. Ahmad bersama kami amat baik.\"\n\nGALI: Adakah pembelian hartanah benar-benar dalam proses, atau masih meninjau? Jangka masa? Ada pembiayaan sedia ada di tempat lain?\n\nNILAI: Pakej keistimewaan suku tahun, tanpa yuran pemprosesan, struktur Tawarruq. Tekankan kepantasan kelulusan untuk pelanggan sedia ada.\n\nBANTAHAN — \"masih membanding\": Akui, tawarkan perbandingan indikatif sebelah-menyebelah supaya perbandingan itu atas terma En. Ahmad.\n\nTUTUP: Dapatkan slot susulan + keizinan menghantar surat indikatif. Rekodkan hasil — enjin akan mengemas kini skor.",
          complianceNote: "Skrip nasihat — RM tidak boleh menyatakan kadar keuntungan yang muktamad secara lisan. Soalan kadar secara terus → salurkan kepada surat indikatif rasmi.",
        },
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
        bm: {
          body: "Salam sejahtera Pn. Tan, saya Farah dari Bank Muamalat Wealth. Sekadar peringatan mesra — Deposit Bertempoh-i puan akan matang minggu depan. Sebelum ia diperbaharui secara automatik, saya ingin tunjukkan tingkatan keistimewaan yang kami khaskan untuk pelanggan dihargai, serta beberapa pilihan patuh Syariah yang mungkin lebih menguntungkan untuk puan. Bolehkah saya tempahkan 15 minit untuk puan minggu ini?",
          complianceNote: "Templat pengekalan — sensitif masa. Tiada kadar khusus dinyatakan. Ditanda keutamaan TINGGI oleh pemantau SLA.",
        },
      },
      Email: {
        channel: "Email",
        subject: "Before your deposit matures — a note from your RM",
        body: "Dear Ms. Tan,\n\nI'm writing ahead of your Term Deposit-i maturity next week.\n\nRather than let it roll over on standard terms, I'd like to share two things: a preferential retention tier reserved for our valued customers, and — should it suit your goals — a diversified Shariah-compliant allocation that balances stability with growth.\n\nThere's no pressure to change anything. But maturity is the ideal moment to make sure your funds are positioned the way you want them.\n\nMight I call you this week?\n\nKind regards,\nFarah · Wealth Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Wealth suitability language checked. Any product recommendation requires a documented suitability assessment before execution.",
        bm: {
          subject: "Sebelum deposit puan matang — satu nota daripada RM puan",
          body: "Pn. Tan yang dihormati,\n\nSaya menulis lebih awal sebelum Deposit Bertempoh-i puan matang minggu depan.\n\nDaripada membiarkannya diperbaharui atas terma biasa, saya ingin kongsikan dua perkara: tingkatan pengekalan keistimewaan yang dikhaskan untuk pelanggan kami yang dihargai, dan — sekiranya bersesuaian dengan matlamat puan — peruntukan patuh Syariah yang pelbagai bagi mengimbangi kestabilan dengan pertumbuhan.\n\nTiada sebarang paksaan untuk membuat perubahan. Namun, ketika matang adalah saat terbaik untuk memastikan dana puan diletakkan seperti yang puan kehendaki.\n\nBolehkah saya menghubungi puan minggu ini?\n\nSalam hormat,\nFarah · Pengurus Perhubungan Wealth\nBank Muamalat Malaysia Berhad",
          complianceNote: "Bahasa kesesuaian Wealth telah disemak. Sebarang cadangan produk memerlukan penilaian kesesuaian yang didokumenkan sebelum pelaksanaan.",
        },
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Greet Ms. Tan. State the reason plainly — maturity next week, wanted to reach her before it auto-rolls.\n\nHOOK: \"I didn't want your funds to default to standard terms without you seeing the alternatives.\"\n\nDISCOVER: What was the original goal for these funds — capital preservation, income, or growth? Has that changed?\n\nVALUE: Preferential retention tier for loyalty; optionally a suitability-assessed wealth mix. Frame as choice, not a switch.\n\nOBJECTION — \"just roll it over\": Fine — confirm the preferential tier applies, secure the instruction, note the wealth conversation for later.\n\nCLOSE: Lock the instruction OR a follow-up. Either way the maturity risk is neutralised. Log outcome.",
        complianceNote: "No wealth product to be positioned as advice without suitability assessment on record.",
        bm: {
          body: "MULA: Beri salam kepada Pn. Tan. Nyatakan sebab dengan jelas — matang minggu depan, ingin menghubunginya sebelum ia diperbaharui secara automatik.\n\nUMPAN: \"Saya tidak mahu dana puan kembali kepada terma biasa tanpa puan melihat pilihan lain terlebih dahulu.\"\n\nGALI: Apakah matlamat asal dana ini — pemeliharaan modal, pendapatan, atau pertumbuhan? Adakah ia telah berubah?\n\nNILAI: Tingkatan pengekalan keistimewaan sebagai penghargaan; secara pilihan, gabungan Wealth yang dinilai kesesuaiannya. Bingkaikan sebagai pilihan, bukan pertukaran.\n\nBANTAHAN — \"perbaharui sahaja\": Baik — sahkan tingkatan keistimewaan terpakai, dapatkan arahan, catat perbualan Wealth untuk kemudian.\n\nTUTUP: Kunci arahan ATAU susulan. Kedua-duanya meneutralkan risiko kematangan. Rekodkan hasil.",
          complianceNote: "Tiada produk Wealth boleh dikemukakan sebagai nasihat tanpa penilaian kesesuaian dalam rekod.",
        },
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
        bm: {
          body: "Salam sejahtera & selamat sejahtera! Saya Iqbal dari Bank Muamalat SME Banking. Terima kasih atas pertanyaan pembiayaan perdagangan melalui portal kami — kami telah pun menarik profil perniagaan tuan/puan, jadi tiada apa yang perlu diulang. Saya boleh sediakan struktur modal kerja indikatif dengan pantas. Bila masa sesuai untuk panggilan 20 minit bagi merangkanya?",
          complianceNote: "Templat keizinan masuk — pelanggan memulakan melalui borang MAP 2.0, keizinan hubungan tersirat. Nada perbankan perniagaan.",
        },
      },
      Email: {
        channel: "Email",
        subject: "Re: Your trade financing enquiry — next steps",
        body: "Dear Sharifah Nadia Group team,\n\nThank you for reaching out through our business portal regarding trade financing.\n\nWe've reviewed your existing relationship with us — your payroll and merchant activity give us a strong head-start, which means a faster, better-informed structure for you.\n\nI'd like to propose a short scoping call to understand your working-capital cycle and turnaround needs, after which we can prepare an indicative Trade Financing-i structure. If it's helpful, we can also look at bundling your merchant and payroll services for operational simplicity.\n\nDo let me know a convenient slot.\n\nBest regards,\nIqbal · SME Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Business-banking template. Trade facility subject to standard credit assessment — no approval implied.",
        bm: {
          subject: "Re: Pertanyaan pembiayaan perdagangan tuan/puan — langkah seterusnya",
          body: "Pasukan Sharifah Nadia Group yang dihormati,\n\nTerima kasih kerana menghubungi kami melalui portal perniagaan berkenaan pembiayaan perdagangan.\n\nKami telah menyemak hubungan sedia ada tuan/puan bersama kami — aktiviti gaji dan pedagang memberikan kami permulaan yang kukuh, yang bermakna struktur yang lebih pantas dan lebih tepat untuk tuan/puan.\n\nSaya ingin mencadangkan panggilan ringkas bagi memahami kitaran modal kerja dan keperluan pusing ganti tuan/puan, seterusnya kami boleh menyediakan struktur indikatif Pembiayaan Perdagangan-i. Jika membantu, kami juga boleh meneliti gabungan perkhidmatan pedagang dan gaji untuk kemudahan operasi.\n\nSila maklumkan slot yang sesuai.\n\nSalam hormat,\nIqbal · Pengurus Perhubungan SME\nBank Muamalat Malaysia Berhad",
          complianceNote: "Templat perbankan perniagaan. Kemudahan perdagangan tertakluk kepada penilaian kredit biasa — tiada kelulusan tersirat.",
        },
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Reference their inbound enquiry — they came to us, so lead with responsiveness.\n\nHOOK: \"We've already pulled your profile — payroll, merchant activity — so this call is about your needs, not paperwork.\"\n\nDISCOVER: Working-capital cycle length? Seasonality? Current financing arrangements? Growth plans that drove the enquiry?\n\nVALUE: Speed for an existing customer; optional merchant+payroll bundle for simplicity.\n\nOBJECTION — \"comparing banks\": Lean on turnaround + existing relationship data reducing friction.\n\nCLOSE: Book the scoping session + list of documents. Log outcome to advance the pipeline stage.",
        complianceNote: "Facility subject to credit approval. RM must not indicate approval likelihood on the call.",
        bm: {
          body: "MULA: Rujuk pertanyaan masuk mereka — mereka yang datang kepada kami, jadi mulakan dengan tindak balas pantas.\n\nUMPAN: \"Kami telah pun menarik profil tuan/puan — gaji, aktiviti pedagang — jadi panggilan ini tentang keperluan tuan/puan, bukan kerja kertas.\"\n\nGALI: Berapa panjang kitaran modal kerja? Bermusim? Susunan pembiayaan semasa? Rancangan pertumbuhan yang mencetuskan pertanyaan?\n\nNILAI: Kepantasan untuk pelanggan sedia ada; gabungan pedagang+gaji secara pilihan untuk kemudahan.\n\nBANTAHAN — \"membanding bank\": Bersandar pada pusing ganti + data hubungan sedia ada yang mengurangkan halangan.\n\nTUTUP: Tempah sesi merangka + senarai dokumen. Rekodkan hasil untuk memajukan peringkat saluran.",
          complianceNote: "Kemudahan tertakluk kepada kelulusan kredit. RM tidak boleh menyatakan kebarangkalian kelulusan dalam panggilan.",
        },
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
        bm: {
          body: "Hai Kavitha! Terima kasih kerana bertanya tentang Takaful tadi 😊 — ia perkara baik untuk diuruskan lebih awal. Berdasarkan profil awak, pelan Takaful Keluarga-i sumbangan berkala boleh memberikan perlindungan yang kukuh serendah harga secawan kopi sehari. Awak nak saya hantar ringkasan satu muka surat, atau lebih selesa berbual sebentar? Terpulang pada awak, tak perlu tergesa-gesa.",
          complianceNote: "Pertanyaan masuk — keizinan tersirat. Emoji dibenarkan pada WhatsApp runcit mengikut nada jenama. Takaful = perlindungan, bukan pelaburan — bahasa telah disemak.",
        },
      },
      Email: {
        channel: "Email",
        subject: "The Takaful summary you asked about",
        body: "Hi Kavitha,\n\nThanks for your interest in Takaful protection.\n\nSince you're early in your career with a steady income, now is genuinely the best time to lock in affordable cover — contributions are lower and you're protected sooner.\n\nI've kept things simple: a regular-contribution Family Takaful-i plan designed to be light on the wallet while covering what matters. If you'd like, I can prepare a personalised one-pager or hop on a 10-minute call.\n\nWhichever is easier for you.\n\nWarm regards,\nAisyah · Retail Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Takaful positioned as protection. No guaranteed-return language. Cooling-off rights to be disclosed at point of sale.",
        bm: {
          subject: "Ringkasan Takaful yang awak minta",
          body: "Hai Kavitha,\n\nTerima kasih atas minat awak terhadap perlindungan Takaful.\n\nMemandangkan awak masih di awal kerjaya dengan pendapatan yang stabil, sekaranglah masa terbaik untuk mendapatkan perlindungan yang mampu milik — sumbangan lebih rendah dan awak terlindung lebih awal.\n\nSaya buatkan mudah sahaja: pelan Takaful Keluarga-i sumbangan berkala yang direka ringan pada poket sambil melindungi perkara yang penting. Jika awak mahu, saya boleh sediakan ringkasan peribadi satu muka surat atau berbual selama 10 minit.\n\nMana-mana yang lebih mudah untuk awak.\n\nSalam mesra,\nAisyah · Pengurus Perhubungan Runcit\nBank Muamalat Malaysia Berhad",
          complianceNote: "Takaful dikemukakan sebagai perlindungan. Tiada bahasa pulangan terjamin. Hak tempoh bertenang perlu didedahkan pada masa jualan.",
        },
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Warm, casual — she reached out, keep it light.\n\nHOOK: \"You asked about Takaful — smart move to think about it early. Wanted to make it easy for you.\"\n\nDISCOVER: Any dependants? Existing cover elsewhere? What prompted the question?\n\nVALUE: Affordable regular contribution, protection framing, peace of mind. Avoid jargon.\n\nOBJECTION — \"can't afford it\": Reframe around the low daily equivalent + flexibility to start small.\n\nCLOSE: Offer the one-pager or a follow-up. Respect a soft no — nurture, don't push. Log outcome.",
        complianceNote: "Disclose it is a protection product; state cooling-off period; no pressure tactics per fair-dealing.",
        bm: {
          body: "MULA: Mesra, santai — dia yang menghubungi, jadi biarkan ringan.\n\nUMPAN: \"Awak bertanya tentang Takaful — langkah bijak untuk memikirkannya awal. Saya nak permudahkan untuk awak.\"\n\nGALI: Ada tanggungan? Perlindungan sedia ada di tempat lain? Apa yang mencetuskan soalan itu?\n\nNILAI: Sumbangan berkala mampu milik, bingkai perlindungan, ketenangan fikiran. Elakkan istilah teknikal.\n\nBANTAHAN — \"tak mampu\": Bingkaikan semula pada nilai harian yang rendah + fleksibiliti untuk mula secara kecil.\n\nTUTUP: Tawarkan ringkasan satu muka surat atau susulan. Hormati penolakan lembut — bimbing, jangan paksa. Rekodkan hasil.",
          complianceNote: "Dedahkan ia produk perlindungan; nyatakan tempoh bertenang; tiada taktik tekanan mengikut urus niaga saksama.",
        },
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
        bm: {
          body: "Assalamualaikum Dato' Faizal. Sudah agak lama, dan saya ingin menghubungi Dato' secara peribadi — Dato' telah berurusan dengan kami lebih sedekad dan itu amat bermakna bagi kami. Tiada agenda di pihak saya, saya cuma ingin memastikan segalanya memuaskan hati Dato' dan melihat sekiranya ada perkara yang boleh kami perbaiki untuk Dato'. Sudikah Dato' untuk berbual sebentar pada masa yang selesa?",
          complianceNote: "Templat penyelamat hubungan — TIADA tawaran produk. Semakan perkhidmatan tulen dahulu. Jangan mulakan dengan tawaran.",
        },
      },
      Email: {
        channel: "Email",
        subject: "A personal note, Dato' Faizal",
        body: "Assalamualaikum Dato' Faizal,\n\nAfter more than eleven years, you're not a customer to us — you're part of the Bank Muamalat family, and I realised it's been too long since we properly spoke.\n\nI'm writing simply to check in. If anything about your experience with us has fallen short, I'd genuinely like to know and put it right. And if there's a way we can serve you better as your needs evolve, I'm here for that too.\n\nMight I call you at a time that suits? No agenda — just a conversation.\n\nWith respect and appreciation,\nRosli · Senior Priority Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Retention / service-recovery tone. Product discussion only if the customer opens the door. Escalation-ready.",
        bm: {
          subject: "Satu nota peribadi, Dato' Faizal",
          body: "Assalamualaikum Dato' Faizal,\n\nSelepas lebih sebelas tahun, Dato' bukan sekadar pelanggan kepada kami — Dato' adalah sebahagian daripada keluarga Bank Muamalat, dan saya sedar sudah terlalu lama sejak kita berbual dengan sewajarnya.\n\nSaya menulis sekadar untuk bertanya khabar. Sekiranya ada apa-apa tentang pengalaman Dato' bersama kami yang kurang memuaskan, saya sungguh-sungguh ingin mengetahuinya dan memperbetulkannya. Dan sekiranya ada cara kami boleh berkhidmat dengan lebih baik apabila keperluan Dato' berkembang, saya juga sedia membantu.\n\nBolehkah saya menghubungi Dato' pada waktu yang sesuai? Tiada agenda — hanya sekadar perbualan.\n\nDengan penuh hormat dan penghargaan,\nRosli · Pengurus Perhubungan Priority Kanan\nBank Muamalat Malaysia Berhad",
          complianceNote: "Nada pengekalan / pemulihan perkhidmatan. Perbincangan produk hanya jika pelanggan membuka ruang. Bersedia untuk peningkatan.",
        },
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Sincere, unhurried. Acknowledge the silence. \"It's been too long, and that's on us.\"\n\nHOOK: Lead with the relationship, not a product. \"Eleven years — I wanted to make sure we're still getting it right for you.\"\n\nDISCOVER: Listen. Has something changed — a service issue, a competitor, a life event, funds moved elsewhere and why?\n\nVALUE: Whatever emerges — fix the friction first. Retention offer ONLY if appropriate and after listening.\n\nOBJECTION / disclosure of a competitor move: Don't argue. Understand, then make the case to consolidate back.\n\nCLOSE: Secure a next step — a review meeting, a fix, a callback. Log the real reason for the drift — the engine learns from it.",
        complianceNote: "Service-first. Any retention incentive must fall within approved priority-tier discretion. Log churn-reason code.",
        bm: {
          body: "MULA: Ikhlas, tidak tergesa-gesa. Akui kesenyapan. \"Sudah terlalu lama, dan itu kesilapan kami.\"\n\nUMPAN: Mulakan dengan hubungan, bukan produk. \"Sebelas tahun — saya ingin pastikan kami masih memberikan yang terbaik untuk Dato'.\"\n\nGALI: Dengar. Adakah sesuatu berubah — isu perkhidmatan, pesaing, peristiwa hidup, dana dipindahkan ke tempat lain dan mengapa?\n\nNILAI: Apa sahaja yang timbul — betulkan halangan dahulu. Tawaran pengekalan HANYA jika bersesuaian dan selepas mendengar.\n\nBANTAHAN / pendedahan perpindahan kepada pesaing: Jangan berbalah. Fahami, kemudian kemukakan hujah untuk menyatukan semula.\n\nTUTUP: Dapatkan langkah seterusnya — mesyuarat semakan, pembetulan, panggilan semula. Rekodkan sebab sebenar penjarakan — enjin belajar daripadanya.",
          complianceNote: "Perkhidmatan dahulu. Sebarang insentif pengekalan mesti dalam had budi bicara tingkatan priority yang diluluskan. Rekodkan kod sebab churn.",
        },
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
        bm: {
          body: "Hai Hafiz, selamat datang ke Bank Muamalat! 👋 Saya Danish, sedia membantu awak memanfaatkan sepenuhnya akaun awak. Satu petua ringkas: mengkreditkan gaji di sini membuka pengecualian yuran dan memudahkan akses kepada pembiayaan pada masa hadapan. Nak saya hantar panduan 2 langkah, atau kita tetapkan bersama melalui panggilan ringkas? Saya sedia membantu bila-bila awak bersedia.",
          complianceNote: "Bimbingan pemulaan — dorongan pengaktifan lembut. Petunjuk sejuk; matlamat ialah penglibatan, bukan jualan. Nada mengutamakan nilai.",
        },
      },
      Email: {
        channel: "Email",
        subject: "Getting started with Bank Muamalat — a quick head-start",
        body: "Hi Hafiz,\n\nWelcome aboard — we're glad you chose Bank Muamalat.\n\nTo help you get real value from day one, here's the single most useful step: setting up salary crediting to your account. It unlocks fee benefits, builds your track record for future financing, and makes everyday banking simpler.\n\nIt takes about two minutes. I've attached a short guide — or if you'd prefer, I'm happy to set it up with you over a quick call.\n\nNo rush at all. Whenever you're ready, I'm here.\n\nWarm regards,\nDanish · Retail Relationship Manager\nBank Muamalat Malaysia Berhad",
        complianceNote: "Onboarding template. No product hard-sell. Educational framing appropriate for a cold, new customer.",
        bm: {
          subject: "Bermula dengan Bank Muamalat — permulaan yang pantas",
          body: "Hai Hafiz,\n\nSelamat datang — kami gembira awak memilih Bank Muamalat.\n\nUntuk membantu awak memperoleh nilai sebenar dari hari pertama, inilah langkah paling berguna: menetapkan pengkreditan gaji ke akaun awak. Ia membuka manfaat yuran, membina rekod awak untuk pembiayaan masa hadapan, dan memudahkan urusan perbankan harian.\n\nIa mengambil masa kira-kira dua minit. Saya lampirkan panduan ringkas — atau jika awak lebih suka, saya sedia menetapkannya bersama awak melalui panggilan ringkas.\n\nTiada sebarang paksaan. Bila-bila awak bersedia, saya ada di sini.\n\nSalam mesra,\nDanish · Pengurus Perhubungan Runcit\nBank Muamalat Malaysia Berhad",
          complianceNote: "Templat pemulaan. Tiada jualan produk secara memaksa. Bingkai pendidikan yang bersesuaian untuk pelanggan baharu yang sejuk.",
        },
      },
      "Call Script": {
        channel: "Call Script",
        body: "OPEN: Welcoming, low-pressure. \"Just checking you're settling in fine.\"\n\nHOOK: \"One quick thing that makes a real difference early on — want me to walk you through it?\"\n\nDISCOVER: Is BMMB their main bank or a secondary account? What made them join? Any friction so far?\n\nVALUE: Salary crediting → fee benefits + financing track record. Frame as helping THEM, not us.\n\nOBJECTION — \"already have a main bank\": Understand why; position specific BMMB advantages without knocking the competitor.\n\nCLOSE: Offer to set up salary crediting or send the guide. The aim is one activation step. Log engagement.",
        complianceNote: "Nurture call. No cross-sell before activation. Keep it genuinely helpful — cold leads punish pushiness.",
        bm: {
          body: "MULA: Mengalu-alukan, tanpa tekanan. \"Sekadar menyemak awak sudah selesa.\"\n\nUMPAN: \"Satu perkara ringkas yang memberi perbezaan besar pada awal ini — nak saya terangkan?\"\n\nGALI: Adakah BMMB bank utama mereka atau akaun sampingan? Apa yang mendorong mereka menyertai? Ada sebarang halangan setakat ini?\n\nNILAI: Pengkreditan gaji → manfaat yuran + rekod pembiayaan. Bingkaikan sebagai membantu MEREKA, bukan kami.\n\nBANTAHAN — \"sudah ada bank utama\": Fahami sebabnya; kemukakan kelebihan khusus BMMB tanpa memburukkan pesaing.\n\nTUTUP: Tawarkan untuk menetapkan pengkreditan gaji atau menghantar panduan. Matlamatnya satu langkah pengaktifan. Rekodkan penglibatan.",
          complianceNote: "Panggilan bimbingan. Tiada jualan silang sebelum pengaktifan. Kekalkan bantuan yang tulus — petunjuk sejuk menghukum sikap mendesak.",
        },
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
