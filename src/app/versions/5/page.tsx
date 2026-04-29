"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   V5 — BOTANICAL
   Heritage organic · sage + clay + bone
   Soft serif + organic SVG · Hermès energy applied to CRM
   Tone: warm, considered, generational
   ────────────────────────────────────────────── */

const bone = "#f0ebe0";
const sage = "#5a6b4a";
const clay = "#b8855a";
const ink = "#2b2e26";
const blush = "#e8d5c4";

export default function BotanicalPage() {
  return (
    <div style={{ background: bone, color: ink, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <Nav />
      <Hero />
      <Story />
      <Tending />
      <Garden />
      <Voices />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b" style={{ borderColor: `${ink}1a` }}>
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 h-24 flex items-center justify-between">
        <Link href="/versions/5" className="flex items-center gap-3">
          <Leaf />
          <span className="text-2xl tracking-wide">Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm" style={{ letterSpacing: "0.04em" }}>
          <Link href="#" className="hover:text-[var(--sage)]" style={{ ["--sage" as never]: sage }}>The Garden</Link>
          <Link href="#">Practice</Link>
          <Link href="#">Almanac</Link>
          <Link href="#">Conservatory</Link>
          <Link href="#" className="px-5 py-2.5 rounded-full text-sm" style={{ background: sage, color: bone }}>
            Visit us
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Leaf() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2 C 22 8, 26 14, 22 24 C 18 30, 12 28, 8 24 C 4 18, 8 8, 16 2 Z"
        fill={sage} opacity="0.85" />
      <path d="M16 4 L 16 26" stroke={bone} strokeWidth="0.8" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 pt-20 pb-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.32em] mb-8" style={{ color: sage }}>
            ✻ A practice in customer architecture · since MMVIII
          </div>
          <h1 className="text-[10vw] md:text-[7.5vw] leading-[0.94] tracking-[-0.02em] font-light">
            Customers
            <br />
            <em className="italic" style={{ color: clay }}>are not</em> a
            <br />
            funnel. They are
            <br />
            a <em className="italic" style={{ color: sage }}>garden.</em>
          </h1>
          <p className="mt-10 text-xl leading-[1.6] max-w-md" style={{ color: `${ink}b3` }}>
            Claritas is the quiet instrument the most patient operators in Asia use to tend their customer relationships across decades — not quarters.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="#" className="px-7 py-4 rounded-full text-sm" style={{ background: ink, color: bone, letterSpacing: "0.06em" }}>
              Visit the conservatory →
            </Link>
            <Link href="#" className="text-sm border-b pb-1" style={{ borderColor: ink, letterSpacing: "0.06em" }}>
              Read this season&apos;s almanac
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-[180px] overflow-hidden" style={{ background: blush }}>
            <div className="absolute inset-0 grid place-items-center">
              <BigLeaf />
            </div>
            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-sm bg-white/40 rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.28em]" style={{ color: sage }}>Field note · vol. xviii</div>
              <p className="mt-3 italic text-lg leading-snug" style={{ color: ink }}>
                &ldquo;The relationships we tended in 2008 are still in bloom. That is the only metric that has ever mattered.&rdquo;
              </p>
              <div className="mt-3 text-xs" style={{ color: clay }}>— from the Atelier journal</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BigLeaf() {
  return (
    <motion.svg width="80%" viewBox="0 0 200 200" fill="none"
      animate={{ rotate: [0, 2, -1, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M100 10 C 150 50, 180 100, 150 170 C 120 200, 80 190, 50 160 C 20 110, 50 40, 100 10 Z"
        fill={sage} opacity="0.85" />
      <path d="M100 20 L 100 180" stroke={bone} strokeWidth="1.5" />
      <g stroke={bone} strokeWidth="0.8" opacity="0.6">
        <path d="M100 50 Q 80 70, 60 90" />
        <path d="M100 80 Q 80 95, 65 115" />
        <path d="M100 110 Q 80 125, 70 140" />
        <path d="M100 50 Q 120 70, 140 90" />
        <path d="M100 80 Q 120 95, 135 115" />
        <path d="M100 110 Q 120 125, 130 140" />
      </g>
    </motion.svg>
  );
}

function Story() {
  return (
    <section style={{ background: ink, color: bone }}>
      <div className="mx-auto max-w-[1300px] px-8 md:px-12 py-28 md:py-36 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.32em] mb-4" style={{ color: clay }}>
            ✻ The story
          </div>
          <h2 className="text-5xl md:text-6xl font-light leading-[1.05] tracking-tight">
            Eighteen <em className="italic" style={{ color: clay }}>seasons</em> of quiet work.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 text-xl leading-[1.65] font-light space-y-6" style={{ color: `${bone}cc` }}>
          <p>
            We began in 2008 with a single plantation client in Pahang who asked a question we had not heard before: <em style={{ color: clay }}>Could the software remember not just the customer, but the relationship?</em>
          </p>
          <p>
            Eighteen years and sixty-four engagements later, we still measure ourselves against that question. Claritas remembers the conversation that happened seven years ago, the preference that was mentioned in passing, the relationship that was built before the software existed.
          </p>
          <p style={{ color: clay }}>
            We are still a small house. We intend to remain one.
          </p>
        </div>
      </div>
    </section>
  );
}

function Tending() {
  const items = [
    { num: "I", t: "Marketing", s: "Sowing", c: "We do not chase. We attend. Every signal is a seed; every audience, a planting." },
    { num: "II", t: "Sales", s: "Tending", c: "Pipelines are perennials. Cared for season after season, they reward the patient." },
    { num: "III", t: "Service", s: "Harvesting", c: "The fruit of long relationships is not satisfaction. It is loyalty that compounds." },
  ];
  return (
    <section className="py-28 md:py-36 px-8 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.32em] mb-4" style={{ color: sage }}>✻ The three practices</div>
          <h2 className="text-5xl md:text-6xl font-light leading-[1.05] tracking-tight">
            One <em style={{ color: clay }}>garden.</em><br />Three <em style={{ color: sage }}>seasons.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}
              className="rounded-[40px] p-10 flex flex-col" style={{ background: i === 1 ? sage : i === 2 ? clay : blush, color: i === 0 ? ink : bone }}>
              <div className="text-7xl italic font-light mb-8" style={{ opacity: 0.4 }}>{it.num}</div>
              <div className="text-xs uppercase tracking-[0.28em] opacity-70">{it.s}</div>
              <div className="text-4xl mt-2 font-light">{it.t}</div>
              <p className="mt-5 text-base leading-[1.6] opacity-90">{it.c}</p>
              <Link href="#" className="mt-auto pt-8 text-sm border-b pb-1 self-start" style={{ borderColor: i === 0 ? ink : bone, letterSpacing: "0.06em" }}>
                Walk the path →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Garden() {
  const stats = [
    { v: "18", l: "Years tending" },
    { v: "64", l: "Engagements" },
    { v: "98.4%", l: "Renewal in bloom" },
    { v: "12", l: "Industries observed" },
  ];
  return (
    <section style={{ background: blush }}>
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] mb-4" style={{ color: clay }}>✻ The conservatory</div>
            <h2 className="text-5xl md:text-6xl font-light leading-[1.05] tracking-tight">
              A small <em style={{ color: sage }}>house.</em><br />A long <em style={{ color: clay }}>view.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-md" style={{ color: `${ink}cc` }}>
              We accept a small number of new engagements each year. Each begins with a conversation in the conservatory — a private session at our offices in Kuala Lumpur or by appointment in Singapore.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px" style={{ background: `${ink}1a` }}>
            {stats.map((s) => (
              <div key={s.l} className="bg-[#e8d5c4] p-8 text-center" style={{ background: blush }}>
                <div className="text-6xl font-light" style={{ color: sage }}>{s.v}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.24em]" style={{ color: `${ink}99` }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Voices() {
  const quotes = [
    { q: "Claritas remembers things about our customers that I had forgotten. Not in a way that feels intrusive — in a way that feels like having a very attentive butler.", a: "— Tan Sri A.W., Chairman, family office" },
    { q: "We have used four CRMs in twenty years. This is the first one that did not feel like it was selling us back our own data.", a: "— Datin S.W., Group COO, F&B holding" },
  ];
  return (
    <section className="py-28 px-8 md:px-12">
      <div className="mx-auto max-w-[1300px] grid md:grid-cols-2 gap-12">
        {quotes.map((qu, i) => (
          <div key={i} className="border-l-2 pl-8 py-4" style={{ borderColor: i === 0 ? sage : clay }}>
            <p className="text-2xl md:text-3xl font-light leading-[1.4] italic">{qu.q}</p>
            <div className="mt-6 text-sm uppercase tracking-[0.18em]" style={{ color: i === 0 ? sage : clay }}>{qu.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ background: sage, color: bone }}>
      <div className="mx-auto max-w-[1300px] px-8 md:px-12 py-28 md:py-36 text-center">
        <div className="text-xs uppercase tracking-[0.32em] opacity-80 mb-6">✻ By appointment</div>
        <h2 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight">
          Visit the
          <br />
          <em className="italic">conservatory.</em>
        </h2>
        <p className="mt-8 text-xl max-w-xl mx-auto opacity-85 leading-relaxed">
          The first conversation is private, and without obligation. We pour the tea ourselves.
        </p>
        <Link href="#" className="mt-12 inline-block px-10 py-5 rounded-full text-sm" style={{ background: bone, color: sage, letterSpacing: "0.1em" }}>
          Request an appointment →
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer style={{ background: bone, color: ink }} className="border-t" >
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 py-16 grid md:grid-cols-12 gap-8" style={{ borderColor: `${ink}1a` }}>
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Leaf />
            <span className="text-2xl">Claritas</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs italic" style={{ color: `${ink}99` }}>
            A small house. A long view. Three practices. One garden, tended carefully since 2008.
          </p>
        </div>
        {[
          { h: "The Garden", l: ["Marketing · Sowing", "Sales · Tending", "Service · Harvesting"] },
          { h: "The Practice", l: ["Almanac", "Field Notes", "Conservatory"] },
          { h: "Visit", l: ["Kuala Lumpur", "Singapore", "By appointment"] },
        ].map((c) => (
          <div key={c.h} className="md:col-span-2 lg:col-span-2 text-sm">
            <div className="text-xs uppercase tracking-[0.28em]" style={{ color: sage }}>{c.h}</div>
            <ul className="mt-4 space-y-2">{c.l.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
        <div className="md:col-span-2 text-sm">
          <div className="text-xs uppercase tracking-[0.28em]" style={{ color: sage }}>The Almanac</div>
          <p className="mt-4 italic" style={{ color: `${ink}99` }}>Sent quarterly, by post.</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 py-6 flex justify-between text-xs italic" style={{ color: `${ink}66` }}>
        <span>© Claritas, in bloom since 2008.</span>
        <span>V5 · Botanical</span>
      </div>
    </footer>
  );
}
