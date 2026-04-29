"use client";

import Link from "next/link";

/* ──────────────────────────────────────────────
   V11 — LEDGER
   Newspaper editorial · multi-column · drop caps · footnotes
   White stock · ink black · single masthead red
   Tone: journalistic, authoritative, "the paper of record"
   ────────────────────────────────────────────── */

const INK = "#1a1a1a";
const RED = "#a02828";
const HUSH = "#6e6e6e";
const RULE = "rgba(26,26,26,0.18)";

export default function LedgerPage() {
  return (
    <div className="bg-white text-[#1a1a1a]" style={{ fontFamily: "Georgia, 'Times New Roman', 'Source Serif', serif" }}>
      <Masthead />
      <FoldOne />
      <FoldTwo />
      <Sidebar />
      <Engagements />
      <Closing />
      <Foot />
    </div>
  );
}

function Masthead() {
  return (
    <>
      <div className="border-b" style={{ borderColor: INK }}>
        <div className="mx-auto max-w-[1400px] px-6 h-9 flex items-center justify-between text-[10px] uppercase tracking-[0.2em]" style={{ color: HUSH }}>
          <div>Vol. XVIII · Iss. 02 · Wednesday, 29 April MMXXVI · KL Edition</div>
          <div className="flex items-center gap-5">
            <span>Subscribe — RM 12 / month</span>
            <Link href="#" className="font-semibold" style={{ color: INK }}>Sign in</Link>
          </div>
        </div>
      </div>

      <header className="border-b-2" style={{ borderColor: INK }}>
        <div className="mx-auto max-w-[1400px] px-6 py-7 text-center">
          <div className="text-[11px] uppercase mb-2" style={{ letterSpacing: "0.42em", color: RED }}>
            ◆ The Customer Architecture Review ◆
          </div>
          <Link href="/versions/11" className="block">
            <h1 className="font-bold text-7xl md:text-[7.5rem] leading-none tracking-[-0.04em]" style={{ fontFamily: "'Old Standard TT', 'Bodoni MT', Georgia, serif" }}>
              The Claritas
            </h1>
          </Link>
          <div className="mt-3 text-xs italic" style={{ color: HUSH }}>
            &ldquo;The paper of record for the customer relationship.&rdquo; — Established at Kuala Lumpur, 2008
          </div>
        </div>
      </header>

      <nav className="border-b" style={{ borderColor: INK }}>
        <div className="mx-auto max-w-[1400px] px-6 h-12 flex items-center justify-center gap-9 text-[12px] uppercase tracking-[0.18em] font-semibold">
          {["The Front Page", "Editorial", "The Practice", "Engagements", "The Almanac", "Subscribe"].map((x) => (
            <Link key={x} href="#" className="hover:text-[#a02828]">{x}</Link>
          ))}
        </div>
      </nav>
    </>
  );
}

function FoldOne() {
  return (
    <section className="border-b-2 py-10 px-6" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8">
        {/* Left rail */}
        <aside className="col-span-12 md:col-span-2 text-[11px] leading-relaxed" style={{ color: HUSH }}>
          <div className="font-bold uppercase tracking-wider mb-2" style={{ color: RED }}>What's inside</div>
          <ul className="space-y-2 italic border-t pt-3" style={{ borderColor: RULE }}>
            <li>Editorial — A1</li>
            <li>The Practice — A4</li>
            <li>Engagements — A7</li>
            <li>The Methodology — A11</li>
            <li>Letters — B1</li>
            <li>The Almanac — B4</li>
          </ul>

          <div className="font-bold uppercase tracking-wider mt-6 mb-2" style={{ color: RED }}>Quote of the Day</div>
          <p className="italic border-t pt-3" style={{ borderColor: RULE }}>
            &ldquo;The relationships we tended in 2008 are still in bloom.&rdquo;
            <br /><br />
            <span style={{ color: HUSH }}>— from the Founding Charter</span>
          </p>
        </aside>

        {/* Hero column */}
        <article className="col-span-12 md:col-span-7">
          <div className="text-[11px] uppercase font-bold tracking-[0.2em]" style={{ color: RED }}>The Front Page · Lead Story</div>
          <h2 className="mt-3 font-bold text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
            Why most CRMs fail their second year — and what the operators who don&apos;t are doing instead.
          </h2>
          <p className="mt-3 text-base italic" style={{ color: HUSH }}>
            A field guide eighteen years in the making, from the editorial board of Claritas. Audited findings inside.
          </p>

          <div className="mt-8 columns-1 md:columns-2 gap-8 text-[16px] leading-[1.65]" style={{ fontFamily: "Georgia, serif" }}>
            <p style={{ textIndent: "0" }}>
              <span className="float-left text-[5.5rem] font-bold leading-[0.78] mr-3 mt-1.5" style={{ color: RED, fontFamily: "'Old Standard TT', Georgia, serif" }}>F</span>
              or eighteen years we have observed, instrumented, and on more than one occasion rebuilt the customer-relationship systems of institutions across Asia-Pacific. The pattern that recurs — across industries, across team sizes, across the reigning fashions in software — is the one we wish we had named earlier.
            </p>
            <p className="mt-4">
              CRMs do not fail because they lack features. They fail because they were procured as <em>software</em> and operated as <em>furniture</em>. The systems that survive their second year are the ones treated as <strong>architecture</strong>: opinionated about the work, integrated into the pipe, defended by an operator who understands the building.
            </p>
            <p className="mt-4">
              In this edition we publish the Customer Architecture Review for MMXXVI: 247 enterprise deployments, audited annually for five years, organised against the question every operator already knows the answer to — <em>does the system give back more than it asks for?</em>
            </p>
            <p className="mt-4">
              The methodology is at the back. The data are at <span className="underline">claritas.asia/data/MMXXVI</span>. What follows is the editorial.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] uppercase tracking-wider" style={{ borderColor: RULE, color: HUSH }}>
            <span>By the Editorial Board · Continued on A4</span>
            <span style={{ color: RED }}>♦ ♦ ♦</span>
          </div>
        </article>

        {/* Right rail — pull quotes + advert */}
        <aside className="col-span-12 md:col-span-3 space-y-6">
          <div className="border-y-2 py-5" style={{ borderColor: INK }}>
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] mb-3" style={{ color: RED }}>The Numbers</div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>Enterprise deployments studied</span><strong>247</strong></li>
              <li className="flex justify-between"><span>Median renewal, study cohort</span><strong>22%</strong></li>
              <li className="flex justify-between"><span>Median renewal, Claritas cohort</span><strong style={{ color: RED }}>94%</strong></li>
              <li className="flex justify-between"><span>Years observed</span><strong>5</strong></li>
            </ul>
            <div className="text-[10px] italic mt-3" style={{ color: HUSH }}>Source: The Editorial Board, MMXXVI</div>
          </div>

          <div className="border p-5" style={{ borderColor: RULE }}>
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] mb-2" style={{ color: HUSH }}>Advertisement</div>
            <p className="text-base font-semibold leading-snug" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
              Claritas — the customer relationship instrument used by sixty-four institutions across Asia-Pacific.
            </p>
            <p className="mt-2 text-sm italic" style={{ color: HUSH }}>By appointment only.</p>
            <Link href="#" className="mt-4 inline-block text-[11px] uppercase font-bold tracking-[0.2em] border-b pb-0.5" style={{ borderColor: INK }}>
              Request a session →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FoldTwo() {
  return (
    <section className="border-b py-10 px-6" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div className="text-[11px] uppercase font-bold tracking-[0.22em]" style={{ color: RED }}>Section A · The Practice</div>
          <h2 className="mt-3 font-bold text-3xl leading-tight" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
            Three offices, one house.
          </h2>
          <p className="mt-3 text-sm italic" style={{ color: HUSH }}>
            The Claritas instrument across marketing, sales, and service.
          </p>
        </div>
        {[
          { tag: "I.", t: "Marketing", c: "We do not chase. We attend. Every signal weighed, every audience drawn by hand.¹" },
          { tag: "II.", t: "Sales", c: "Pipeline as discipline. Forecast as a thing one can stand behind, in any board meeting.²" },
          { tag: "III.", t: "Service", c: "Resolution as the only metric that holds. Tickets are accounting. Outcomes are the work.³" },
        ].map((it) => (
          <article key={it.t} className="col-span-12 md:col-span-3 border-l pl-5" style={{ borderColor: INK }}>
            <div className="text-3xl font-bold" style={{ color: RED, fontFamily: "'Old Standard TT', Georgia, serif" }}>{it.tag}</div>
            <h3 className="mt-1 font-bold text-2xl" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>{it.t}</h3>
            <p className="mt-3 text-base leading-[1.65]">{it.c}</p>
            <Link href="#" className="mt-4 inline-block text-[11px] uppercase font-bold tracking-[0.18em] border-b pb-0.5" style={{ borderColor: INK }}>
              Read the brief →
            </Link>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] mt-8 pt-6 border-t text-[11px] italic columns-1 md:columns-3 gap-8" style={{ borderColor: RULE, color: HUSH }}>
        <p>¹ See "On the Practice of Marketing", The Almanac, Vol. XII.</p>
        <p>² See "Forecasting as a Discipline", Sec. B, Iss. 4 of MMXXIV.</p>
        <p>³ See "What Service Owes the Customer", Editorial, Iss. 218.</p>
      </div>
    </section>
  );
}

function Sidebar() {
  return (
    <section className="border-b py-12 px-6" style={{ background: "#f8f6f0", borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="text-[11px] uppercase font-bold tracking-[0.22em]" style={{ color: RED }}>Section A · Editorial</div>
          <h2 className="mt-3 font-bold text-3xl md:text-4xl leading-tight" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
            From the Editor&apos;s desk
          </h2>
          <div className="mt-3 text-[11px] uppercase tracking-wider" style={{ color: HUSH }}>By the Founding Partners · KL</div>
        </div>
        <div className="col-span-12 md:col-span-8 columns-1 md:columns-2 gap-8 text-base leading-[1.7]" style={{ fontFamily: "Georgia, serif" }}>
          <p>
            We began in 2008 with one client and one question — could software remember not the customer, but the relationship? Eighteen years and sixty-four engagements later, we still measure ourselves against that question.
          </p>
          <p className="mt-3">
            Claritas remembers the conversation that happened seven years ago, the preference that was mentioned in passing, the relationship that was built before the software existed. We are still a small house. We intend to remain one.
          </p>
        </div>
      </div>
    </section>
  );
}

function Engagements() {
  const rows = [
    ["MMVIII", "First commission", "A Pahang plantation group, 12 estates, one ledger.", "94%"],
    ["MMXIV", "Cross-border architecture", "Asia-Pacific telco, 15 markets, one customer record.", "100%"],
    ["MMXIX", "The framework", "Codified into a 47-page manual. Distributed to clients.", "—"],
    ["MMXXIV", "Sixty-fourth engagement", "An institutional bank, three years, end to end.", "98%"],
  ];
  return (
    <section className="border-b py-10 px-6" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 mb-6">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[11px] uppercase font-bold tracking-[0.22em]" style={{ color: RED }}>Section A · Engagements</div>
            <h2 className="mt-3 font-bold text-3xl leading-tight" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
              A short ledger of long work.
            </h2>
            <p className="mt-3 text-sm italic" style={{ color: HUSH }}>Selected commissions, MMVIII–MMXXIV.</p>
          </div>
          <p className="col-span-12 md:col-span-9 text-base leading-relaxed">
            Of our sixty-four engagements, the four below are the ones the editorial board most often returns to in print. Renewal figures, where applicable, audited by Ernst &amp; Young Singapore.
          </p>
        </div>

        <table className="w-full text-base" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderTop: `2px solid ${INK}`, borderBottom: `1px solid ${INK}` }}>
              <th className="text-left py-3 font-bold" style={{ width: "12%" }}>Year</th>
              <th className="text-left py-3 font-bold" style={{ width: "26%" }}>Commission</th>
              <th className="text-left py-3 font-bold">Description</th>
              <th className="text-right py-3 font-bold" style={{ width: "12%" }}>Renewed</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b" style={{ borderColor: RULE }}>
                <td className="py-3 italic" style={{ color: RED }}>{r[0]}</td>
                <td className="py-3 font-bold">{r[1]}</td>
                <td className="py-3" style={{ color: HUSH }}>{r[2]}</td>
                <td className="py-3 text-right font-bold">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="py-16 px-6 text-center">
      <div className="mx-auto max-w-[900px]">
        <div className="text-[11px] uppercase font-bold tracking-[0.32em] mb-4" style={{ color: RED }}>♦ For Subscribers Only ♦</div>
        <h2 className="font-bold text-5xl md:text-6xl leading-[1.05] tracking-tight" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
          The full Customer Architecture Review,<br />by post — and by appointment.
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto leading-[1.6]" style={{ color: HUSH }}>
          Subscribers receive the quarterly print edition by post, full access to the underlying dataset, and may request an editorial board briefing.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#" className="bg-[#1a1a1a] text-white px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#a02828]">
            Subscribe — RM 12 / mo →
          </Link>
          <Link href="#" className="border-2 px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white" style={{ borderColor: INK }}>
            Request a board briefing
          </Link>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t-2" style={{ borderColor: INK }}>
      <div className="mx-auto max-w-[1400px] px-6 py-10 grid grid-cols-12 gap-8 text-sm">
        <div className="col-span-12 md:col-span-4">
          <div className="font-bold text-3xl" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>The Claritas</div>
          <div className="text-[10px] uppercase tracking-[0.28em] mt-1" style={{ color: RED }}>Customer Architecture Review</div>
          <p className="mt-4 italic" style={{ color: HUSH }}>
            Published quarterly from Kuala Lumpur since 2008. ISSN 1234-5678.
          </p>
        </div>
        {[
          { h: "Sections", l: ["Front Page", "Editorial", "Practice", "Engagements"] },
          { h: "Subscribe", l: ["Print quarterly", "Digital weekly", "Data access"] },
          { h: "Editorial", l: ["The Board", "Contributors", "Permissions", "Press"] },
          { h: "House", l: ["Address", "Visit", "Telephone", "Fax"] },
        ].map((c) => (
          <div key={c.h} className="col-span-6 md:col-span-2">
            <div className="text-[10px] uppercase font-bold tracking-[0.22em] mb-3" style={{ color: RED }}>{c.h}</div>
            <ul className="space-y-1.5">{c.l.map((x) => <li key={x}><Link href="#" className="hover:underline">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t" style={{ borderColor: INK }}>
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex justify-between text-[10px] uppercase tracking-[0.2em]" style={{ color: HUSH }}>
          <span>© The Claritas Editorial · MMXXVI · ISSN 1234-5678</span>
          <span>V11 · Ledger</span>
        </div>
      </div>
    </footer>
  );
}
