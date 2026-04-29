"use client";

import Link from "next/link";

/* ──────────────────────────────────────────────
   V7 — DOSSIER
   Swiss analyst grid · mono + serif · footnoted density
   Bloomberg / FT / The Economist for CRM buyers who read
   Tone: factual, footnoted, precise, no marketing fat
   ────────────────────────────────────────────── */

const PAPER = "#fafaf7";
const INK = "#1a1a1a";
const RULE = "#1a1a1a26";
const RED = "#c81d2c";

export default function DossierPage() {
  return (
    <div style={{ background: PAPER, color: INK, fontFamily: "Georgia, 'Times New Roman', serif" }} className="text-[15px]">
      <Nav />
      <Masthead />
      <Lede />
      <Cols />
      <Table />
      <Methodology />
      <Closing />
      <Foot />
    </div>
  );
}

function Mono({
  children,
  className = "",
  style,
  as: As = "span",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "span" | "div" | "td";
}) {
  return (
    <As
      className={`font-mono ${className}`}
      style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace", ...style }}
    >
      {children}
    </As>
  );
}

function Nav() {
  return (
    <header className="border-b" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] px-8 h-14 flex items-center justify-between">
        <Link href="/versions/7" className="flex items-baseline gap-3">
          <span className="font-bold text-2xl tracking-tight">Claritas</span>
          <Mono className="text-[10px] uppercase tracking-wider opacity-60">research · vol. xviii · iss. 02</Mono>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-xs" style={{ letterSpacing: "0.04em" }}>
          <Link href="#" className="hover:text-[var(--red)]" style={{ ["--red" as never]: RED }}>Reports</Link>
          <Link href="#">Indices</Link>
          <Link href="#">Methodology</Link>
          <Link href="#">Subscribe</Link>
          <span className="px-1 border-l" style={{ borderColor: RULE }} />
          <Link href="#" className="px-3 py-1.5" style={{ background: INK, color: PAPER, letterSpacing: "0.06em" }}>
            Subscriber log-in
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Masthead() {
  return (
    <section className="border-b-2" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] px-8 py-6 grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 md:col-span-3">
          <Mono className="text-[10px] uppercase opacity-60">Issue No. 218 · 29 April MMXXVI</Mono>
          <div className="text-xs italic mt-1">Editorial Quarterly · Customer Architecture Review</div>
        </div>
        <h1 className="col-span-12 md:col-span-9 font-bold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
          The Customer Relationship Audit, MMXXVI: <span style={{ color: RED }}>Why most CRMs fail their second year</span> — and what the operators who don&apos;t are doing instead.
        </h1>
      </div>
    </section>
  );
}

function Lede() {
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1400px] px-8 py-12 grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3 text-xs leading-relaxed">
          <Mono className="text-[10px] uppercase tracking-wider opacity-60">Authors</Mono>
          <div className="mt-2 italic">The Claritas Editorial Board</div>
          <div className="mt-1 opacity-70">Kuala Lumpur · Singapore · Manila</div>

          <Mono className="text-[10px] uppercase tracking-wider opacity-60 mt-6 block">Reading time</Mono>
          <div className="mt-2 italic">11 minutes · 2,840 words</div>

          <Mono className="text-[10px] uppercase tracking-wider opacity-60 mt-6 block">Filed under</Mono>
          <div className="mt-2 italic">Operations · Revenue · Architecture</div>

          <div className="mt-8 pt-4 border-t" style={{ borderColor: RULE }}>
            <div className="text-[10px] uppercase font-bold tracking-wider" style={{ color: RED }}>Key findings</div>
            <ol className="mt-3 space-y-2 list-decimal list-inside">
              <li>72% of CRM deployments are abandoned within 18 months¹</li>
              <li>Of those that survive, 84% remain underused at year three²</li>
              <li>The single discriminator: deployment is treated as architecture, not as software</li>
            </ol>
          </div>
        </aside>

        <article className="col-span-12 md:col-span-9 text-lg leading-[1.65]" style={{ fontFamily: "Georgia, serif" }}>
          <p style={{ textIndent: "0", fontVariant: "small-caps" }} className="text-2xl leading-tight mb-4">
            The Claritas Editorial Board · Issue 218
          </p>
          <p>
            <span className="float-left text-[5rem] font-bold leading-[0.8] mr-3 mt-1" style={{ color: RED }}>F</span>
            or eighteen years we have observed, instrumented, and occasionally rebuilt customer-relationship systems for institutions across Asia-Pacific. The pattern that recurs — across industries, across team sizes, across the reigning fashions in software — is the one we wish we had named earlier.
          </p>
          <p className="mt-4">
            CRMs do not fail because they lack features. They fail because they were procured as <em>software</em> and operated as <em>furniture</em>. The systems that survive their second year are the ones treated as <strong style={{ color: RED }}>architecture</strong>: opinionated about the work, integrated into the pipe, and defended by an operator who understands the building.
          </p>
          <p className="mt-4">
            What follows is the field guide we wish had existed in 2008. The methodology is at the back<sup>³</sup>. The data are at <Mono className="text-sm">claritas.asia/data/MMXXVI</Mono>.
          </p>
        </article>
      </div>
    </section>
  );
}

function Cols() {
  const cols = [
    {
      tag: "I.",
      h: "The Procurement Trap",
      p: "CRMs are bought by IT, deployed by Operations, and used by Sales — three departments with different definitions of success. Most failed deployments were already failing at the RFP stage.",
      foot: "Source: Claritas Customer Architecture Review, n=247 enterprise customers, 2008–MMXXV.",
    },
    {
      tag: "II.",
      h: "The Adoption Cliff",
      p: "Median weekly active use of CRM seats falls 64% between month 3 and month 9. The cliff is not training; it is the moment the operator realises the system is asking for more than it gives back.",
      foot: "See Methodology Note B for the cohort definition and seat-activity sampling.",
    },
    {
      tag: "III.",
      h: "The Architecture Premium",
      p: "Deployments treated as architecture — opinionated schema, defended by a single operator, integrated at the event layer — show 4.2× the 5-year retention of deployments treated as software.",
      foot: "Architecture defined per the Claritas Framework, §3 (the operator, the event log, the integration spine).",
    },
  ];
  return (
    <section className="border-b" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-12 md:col-span-3">
            <Mono className="text-[10px] uppercase tracking-wider opacity-60">§ Section 02</Mono>
            <div className="text-2xl font-bold mt-1">The Three Failures</div>
          </div>
          <div className="col-span-12 md:col-span-9 text-sm italic" style={{ color: `${INK}99` }}>
            Three patterns recur in the data. They are not, individually, surprising. Together, they describe the entire failure surface of the modern CRM deployment.
          </div>
        </div>
        <div className="grid md:grid-cols-3 divide-x" style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}` }}>
          {cols.map((c) => (
            <div key={c.tag} className="p-6" style={{ borderColor: INK }}>
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-xl" style={{ color: RED }}>{c.tag}</span>
                <h3 className="font-bold text-xl">{c.h}</h3>
              </div>
              <p className="mt-3 text-base leading-[1.6]">{c.p}</p>
              <Mono className="block text-[10px] mt-4 opacity-50 leading-relaxed">{c.foot}</Mono>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Table() {
  const rows = [
    ["Median weekly active use, mo. 9", "23%", "78%", "+239%"],
    ["Forecast accuracy, ±10% of actual", "31%", "84%", "+171%"],
    ["Time to first value (days)", "84", "11", "−87%"],
    ["5-year renewal rate", "22%", "94%", "+327%"],
    ["Net revenue retention, NRR", "98%", "138%", "+40 pts"],
    ["Operator hours saved / wk / seat", "—", "9.4", "—"],
  ];
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1400px] px-8 py-12">
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-12 md:col-span-3">
            <Mono className="text-[10px] uppercase tracking-wider opacity-60">Exhibit A</Mono>
            <div className="text-2xl font-bold mt-1">Comparative outcomes</div>
            <Mono className="block text-[10px] mt-2 opacity-60">n=247 · MMXX–MMXXV · self-reported, audited subset</Mono>
          </div>
          <div className="col-span-12 md:col-span-9 text-sm italic" style={{ color: `${INK}99` }}>
            Industry baseline drawn from the IDC Customer-Engagement Survey, MMXXV. Claritas figures audited annually by Ernst &amp; Young, Singapore.
          </div>
        </div>

        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderTop: `2px solid ${INK}`, borderBottom: `1px solid ${INK}` }}>
              <th className="text-left py-3 font-bold" style={{ width: "40%" }}>Metric</th>
              <th className="text-right py-3 font-bold">Industry baseline</th>
              <th className="text-right py-3 font-bold">Claritas cohort</th>
              <th className="text-right py-3 font-bold" style={{ color: RED }}>Δ</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b" style={{ borderColor: RULE }}>
                <td className="py-3 italic">{r[0]}</td>
                <Mono as="td" className="text-right py-3">{r[1]}</Mono>
                <Mono as="td" className="text-right py-3 font-bold">{r[2]}</Mono>
                <Mono as="td" className="text-right py-3" style={{ color: RED }}>{r[3]}</Mono>
              </tr>
            ))}
          </tbody>
        </table>
        <Mono className="block text-[10px] mt-4 opacity-50">¹ "Industry baseline" defined as the median of the IDC dataset, excluding deployments under 100 seats. ² "Δ" computed as relative change against the industry baseline median.</Mono>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section className="border-b" style={{ borderColor: RULE }}>
      <div className="mx-auto max-w-[1400px] px-8 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <Mono className="text-[10px] uppercase tracking-wider opacity-60">Methodology</Mono>
          <div className="text-2xl font-bold mt-1">How we measure</div>
        </div>
        <div className="col-span-12 md:col-span-9 text-base leading-[1.7] columns-1 md:columns-2 gap-8">
          <p className="break-inside-avoid mb-4">
            <strong>Sample:</strong> All 247 enterprise customers under contract continuously between MMXX and MMXXV. Excluded: 18 customers under 12-month tenure; 6 customers in active migration.
          </p>
          <p className="break-inside-avoid mb-4">
            <strong>Adoption:</strong> Weekly active use defined as ≥3 distinct authenticated sessions per seat-week, ≥30s active per session.
          </p>
          <p className="break-inside-avoid mb-4">
            <strong>Forecast accuracy:</strong> Quarter-end committed forecast vs. quarter-end booked revenue, absolute deviation as % of forecast.
          </p>
          <p className="break-inside-avoid mb-4">
            <strong>Audit:</strong> Renewal, NRR, and forecast figures audited annually by Ernst &amp; Young Singapore. Audit memos available to subscribers under NDA.
          </p>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="border-b-2" style={{ background: INK, color: PAPER, borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] px-8 py-20 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-7">
          <Mono className="text-[10px] uppercase tracking-wider opacity-60" style={{ color: "#d4a574" }}>Available to subscribers</Mono>
          <h2 className="font-bold text-4xl md:text-5xl mt-3 leading-tight tracking-tight">
            The full report — 47 pages, with audit annex — is available without charge to qualified institutional readers.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-3">
          <Link href="#" className="block px-7 py-4 text-sm font-bold" style={{ background: PAPER, color: INK, letterSpacing: "0.06em" }}>
            REQUEST THE FULL REPORT →
          </Link>
          <Link href="#" className="block px-7 py-4 text-sm border" style={{ borderColor: PAPER, letterSpacing: "0.06em" }}>
            BRIEF THE EDITORIAL BOARD
          </Link>
          <Mono className="block text-[10px] opacity-60 mt-2">Subscribers receive the quarterly print edition by post and have access to the underlying dataset.</Mono>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer>
      <div className="mx-auto max-w-[1400px] px-8 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="font-bold text-xl">Claritas</div>
          <Mono className="text-[10px] uppercase tracking-wider opacity-60 mt-1 block">Customer Architecture Review</Mono>
          <p className="mt-3 text-sm italic max-w-xs" style={{ color: `${INK}99` }}>
            A quarterly review of customer-relationship architecture, published since 2008 from Kuala Lumpur.
          </p>
        </div>
        {[
          { h: "Sections", l: ["Reports", "Indices", "Methodology", "Editorials"] },
          { h: "Subscribe", l: ["Print quarterly", "Digital weekly", "Data access", "Briefings"] },
          { h: "Editorial", l: ["The Board", "Contributors", "Press", "Permissions"] },
        ].map((c) => (
          <div key={c.h} className="md:col-span-2 lg:col-span-2 text-sm">
            <Mono className="text-[10px] uppercase tracking-wider" style={{ color: RED }}>{c.h}</Mono>
            <ul className="mt-3 space-y-1.5">{c.l.map((x) => <li key={x}><Link href="#" className="hover:underline">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t" style={{ borderColor: INK }}>
        <div className="mx-auto max-w-[1400px] px-8 py-4 flex justify-between text-[11px]">
          <Mono>© Claritas Editorial · MMXXVI · ISSN 1234-5678</Mono>
          <Mono className="opacity-60">v7 · dossier</Mono>
        </div>
      </div>
    </footer>
  );
}
