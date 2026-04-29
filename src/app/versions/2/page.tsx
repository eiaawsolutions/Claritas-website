"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   V2 — ATELIER
   Boutique consultancy · warm cream + ink + clay
   Asymmetric bento · serif display · hand-set craft feel
   Tone: confiding, refined, advisory
   ────────────────────────────────────────────── */

const cream = "#f5efe6";
const ink = "#1a1a1a";
const clay = "#a8401a";
const sand = "#ede4d3";

export default function AtelierPage() {
  return (
    <div style={{ background: cream, color: ink, fontFamily: "Georgia, 'Cormorant Garamond', serif" }}>
      <Nav />
      <Hero />
      <Letter />
      <Bento />
      <Engagements />
      <Voice />
      <Closing />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b" style={{ borderColor: "rgba(26,26,26,0.12)" }}>
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 h-24 flex items-center justify-between">
        <Link href="/versions/2" className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full" style={{ background: clay }} />
          <span className="text-2xl tracking-wide" style={{ fontVariant: "small-caps" }}>Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm" style={{ fontVariant: "small-caps", letterSpacing: "0.08em" }}>
          <Link href="#" className="hover:text-[#a8401a]">Practice</Link>
          <Link href="#" className="hover:text-[#a8401a]">Engagements</Link>
          <Link href="#" className="hover:text-[#a8401a]">Atelier</Link>
          <Link href="#" className="hover:text-[#a8401a]">Journal</Link>
          <Link href="#" className="px-5 py-2.5 rounded-full text-sm" style={{ background: ink, color: cream }}>
            Begin a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 pt-20 pb-32 md:pt-32 md:pb-44 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7 lg:col-span-8">
          <div className="text-xs uppercase tracking-[0.32em] mb-8" style={{ color: clay }}>
            ◇ Atelier · Established 2008
          </div>
          <h1 className="text-[12vw] md:text-[8.5vw] leading-[0.92] tracking-[-0.025em] font-light">
            A practice
            <br />
            <em className="font-normal" style={{ color: clay }}>devoted</em> to the
            <br />
            <span style={{ fontVariant: "small-caps" }}>customer</span> as
            <br />
            <em className="font-normal">institution.</em>
          </h1>
        </div>
        <div className="md:col-span-5 lg:col-span-4 space-y-8">
          <p className="text-xl leading-[1.55] max-w-md" style={{ color: "rgba(26,26,26,0.72)" }}>
            We build relationship architecture for the few houses that intend to outlast their founders. A long view, set down in software.
          </p>
          <div className="space-y-3">
            <Link href="#" className="block w-fit px-7 py-4 text-sm" style={{ background: ink, color: cream, fontVariant: "small-caps", letterSpacing: "0.1em" }}>
              Request a private session →
            </Link>
            <Link href="#" className="block w-fit text-sm border-b pb-1" style={{ borderColor: ink, fontVariant: "small-caps", letterSpacing: "0.1em" }}>
              Read our quarterly journal
            </Link>
          </div>
        </div>
      </div>

      {/* Watermark monogram */}
      <div className="absolute -bottom-20 right-0 text-[26vw] opacity-[0.04] font-serif select-none pointer-events-none leading-none" style={{ color: ink }}>
        C
      </div>
    </section>
  );
}

function Letter() {
  return (
    <section style={{ background: sand }}>
      <div className="mx-auto max-w-[1100px] px-8 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.3em]" style={{ color: clay }}>From the Atelier</div>
          <div className="mt-3 text-2xl italic" style={{ fontVariant: "small-caps" }}>A letter</div>
        </div>
        <div className="md:col-span-9 text-2xl md:text-3xl leading-[1.5] font-light">
          <p>
            We are not a software company in the usual sense. We are a small practice — designers, engineers, operators — that has spent eighteen years studying the same question:
          </p>
          <p className="mt-6" style={{ color: clay }}>
            <em>What do customers actually want from the institutions that serve them?</em>
          </p>
          <p className="mt-6">
            The answer, as we have come to find, is something so quiet it cannot be sold by demonstration. It must be lived inside the work.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full" style={{ background: clay }} />
            <div>
              <div className="text-base" style={{ fontVariant: "small-caps", letterSpacing: "0.06em" }}>The Founding Partners</div>
              <div className="text-sm italic mt-1" style={{ color: "rgba(26,26,26,0.6)" }}>Kuala Lumpur · April</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-8 md:px-12">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: clay }}>The Practice</div>
          <h2 className="text-5xl md:text-6xl font-light leading-[1.05] tracking-tight">
            Three rooms, <em style={{ color: clay }}>one house.</em>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Marketing — large left */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-12 md:col-span-7 row-span-2 p-10 md:p-14 min-h-[420px] flex flex-col justify-between"
            style={{ background: ink, color: cream }}>
            <div className="text-xs uppercase tracking-[0.3em] opacity-60">Room I</div>
            <div>
              <div className="text-5xl md:text-7xl font-light leading-tight">Marketing</div>
              <p className="mt-6 text-xl font-light max-w-md" style={{ color: "rgba(245,239,230,0.75)" }}>
                A study of intent. Every conversation archived, every signal weighed, every audience drawn by hand.
              </p>
              <Link href="#" className="mt-10 inline-block text-sm border-b pb-1" style={{ borderColor: cream, fontVariant: "small-caps", letterSpacing: "0.1em" }}>
                Enter the room →
              </Link>
            </div>
          </motion.div>

          {/* Sales — top right */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-5 p-8 md:p-10 min-h-[200px] flex flex-col justify-between" style={{ background: cream, border: `1px solid ${ink}20` }}>
            <div className="text-xs uppercase tracking-[0.3em]" style={{ color: clay }}>Room II</div>
            <div>
              <div className="text-3xl md:text-4xl font-light">Sales</div>
              <p className="mt-3 text-base font-light" style={{ color: "rgba(26,26,26,0.65)" }}>
                Forecast as discipline. Pipeline as record.
              </p>
            </div>
          </motion.div>

          {/* Service — bottom right */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-5 p-8 md:p-10 min-h-[200px] flex flex-col justify-between" style={{ background: clay, color: cream }}>
            <div className="text-xs uppercase tracking-[0.3em] opacity-70">Room III</div>
            <div>
              <div className="text-3xl md:text-4xl font-light">Service</div>
              <p className="mt-3 text-base font-light" style={{ color: "rgba(245,239,230,0.85)" }}>
                Resolution as the only metric that holds.
              </p>
            </div>
          </motion.div>

          {/* Wide swatch row */}
          <div className="col-span-12 grid grid-cols-3 md:grid-cols-6 gap-5 mt-2">
            {["Banking", "Telco", "Hospitality", "Estate", "Plantation", "Retail"].map((s) => (
              <div key={s} className="aspect-[4/3] flex items-end p-5 text-xs uppercase tracking-[0.22em]" style={{ background: sand }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Engagements() {
  const items = [
    { y: "2008", t: "First commission", c: "A Malaysian plantation group, 12 estates, one ledger." },
    { y: "2014", t: "Cross-border architecture", c: "Asia-Pacific telco, 15 markets unified under a single customer record." },
    { y: "2019", t: "The framework", c: "Codified into a 47-page operating manual, distributed only to clients." },
    { y: "2024", t: "Sixty-fourth engagement", c: "An institutional bank in the Philippines, three years end-to-end." },
  ];
  return (
    <section style={{ background: ink, color: cream }}>
      <div className="mx-auto max-w-[1300px] px-8 md:px-12 py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#d4a574" }}>Selected Engagements</div>
        <h2 className="text-5xl md:text-6xl font-light leading-tight max-w-2xl mb-16">
          A short ledger of <em style={{ color: "#d4a574" }}>long</em> work.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {items.map((it) => (
            <div key={it.y} className="border-t pt-6" style={{ borderColor: "rgba(245,239,230,0.2)" }}>
              <div className="text-sm" style={{ color: "#d4a574", fontVariant: "small-caps", letterSpacing: "0.1em" }}>{it.y}</div>
              <div className="mt-2 text-2xl font-light">{it.t}</div>
              <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(245,239,230,0.7)" }}>{it.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voice() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-8 md:px-12">
        <div className="text-7xl font-light leading-none" style={{ color: clay }}>&ldquo;</div>
        <p className="mt-4 text-3xl md:text-5xl font-light leading-[1.25] tracking-tight">
          We did not need another platform. We needed a <em style={{ color: clay }}>house</em> that understood our customers were not events to be tracked, but relationships to be tended.
        </p>
        <div className="mt-12 flex items-center gap-5">
          <div className="h-14 w-14 rounded-full" style={{ background: sand, border: `1px solid ${ink}30` }} />
          <div>
            <div className="text-base" style={{ fontVariant: "small-caps", letterSpacing: "0.08em" }}>Datin Sara Wahid</div>
            <div className="text-sm italic" style={{ color: "rgba(26,26,26,0.6)" }}>Group COO · A confidential client</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section style={{ background: clay, color: cream }}>
      <div className="mx-auto max-w-[1300px] px-8 md:px-12 py-24 md:py-32 text-center">
        <div className="text-xs uppercase tracking-[0.32em] mb-6 opacity-80">By appointment only</div>
        <h2 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight">
          Begin a <em>conversation.</em>
        </h2>
        <p className="mt-8 text-xl max-w-xl mx-auto opacity-85">
          We accept a small number of new engagements each year. The first conversation is private and without obligation.
        </p>
        <Link href="#" className="mt-12 inline-block px-10 py-5 rounded-full text-sm" style={{ background: cream, color: ink, fontVariant: "small-caps", letterSpacing: "0.12em" }}>
          Write to the partners →
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer style={{ background: cream, color: ink }} className="border-t" >
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 py-16 grid md:grid-cols-12 gap-8" style={{ borderColor: "rgba(26,26,26,0.12)" }}>
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full" style={{ background: clay }} />
            <span className="text-2xl" style={{ fontVariant: "small-caps" }}>Claritas</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(26,26,26,0.6)" }}>
            A practice in customer architecture. Three offices. Sixty-four engagements. Eighteen years.
          </p>
        </div>
        {[
          { h: "Practice", l: ["Marketing", "Sales", "Service", "Framework"] },
          { h: "Atelier", l: ["The Letter", "Journal", "Engagements", "Press"] },
          { h: "Address", l: ["Kuala Lumpur", "Singapore", "Manila", "By appointment"] },
        ].map((c) => (
          <div key={c.h} className="md:col-span-2 lg:col-span-2 text-sm">
            <div className="text-xs uppercase tracking-[0.28em]" style={{ color: clay }}>{c.h}</div>
            <ul className="mt-4 space-y-2">{c.l.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
        <div className="md:col-span-2 text-sm">
          <div className="text-xs uppercase tracking-[0.28em]" style={{ color: clay }}>Subscribe</div>
          <p className="mt-4 text-sm" style={{ color: "rgba(26,26,26,0.6)" }}>The quarterly journal, by post.</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 py-6 flex justify-between text-xs italic" style={{ color: "rgba(26,26,26,0.5)" }}>
        <span>© Claritas Atelier, since 2008.</span>
        <span>V2 · Atelier</span>
      </div>
    </footer>
  );
}
