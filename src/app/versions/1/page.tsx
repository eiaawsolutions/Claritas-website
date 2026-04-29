"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   V1 — MONOLITH
   Brutalist editorial · pure B&W with single red accent
   Display serif at extreme scale · hairline rules · zero gradient
   Tone: declarative, oracular, unhedged
   ────────────────────────────────────────────── */

export default function MonolithPage() {
  return (
    <div className="bg-white text-black font-serif" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
      <Nav />
      <Hero />
      <Manifesto />
      <Numbers />
      <Pillars />
      <Voices />
      <Closing />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b-2 border-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/versions/1" className="flex items-baseline gap-3">
          <span className="text-3xl font-bold tracking-tight">CLARITAS</span>
          <span className="text-[10px] uppercase tracking-[0.32em] border border-black px-2 py-0.5">EST. MMVIII</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.28em] font-bold">
          <Link href="#" className="hover:text-red-700">Index</Link>
          <Link href="#" className="hover:text-red-700">Doctrine</Link>
          <Link href="#" className="hover:text-red-700">Subjects</Link>
          <Link href="#" className="hover:text-red-700">Press</Link>
          <Link href="#" className="bg-black text-white px-4 py-2 hover:bg-red-700">Enquire →</Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.3em] font-bold border-t-2 border-black pt-3">
            Issue 01<br />
            April MMXXVI<br />
            <span className="text-red-700">Single Edition</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="font-bold leading-[0.86] tracking-[-0.04em] text-[14vw] md:text-[10vw]">
              The
              <br />
              instrument
              <br />
              of <span className="italic font-normal">record.</span>
            </h1>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 border-t-2 border-black pt-8">
          <div className="col-span-12 md:col-span-4 text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="text-red-700">A Notice</span> from the Editors
          </div>
          <div className="col-span-12 md:col-span-5 text-xl leading-[1.4]">
            Claritas is not software. It is a position taken — that the customer relationship is the most consequential asset on the balance sheet, and deserves the same rigour applied to capital.
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col items-start gap-3">
            <Link href="#" className="bg-black text-white px-6 py-3 text-[11px] uppercase tracking-[0.28em] font-bold hover:bg-red-700">
              Request the Doctrine →
            </Link>
            <Link href="#" className="border-b-2 border-black text-[11px] uppercase tracking-[0.28em] font-bold pb-0.5 hover:text-red-700 hover:border-red-700">
              Read the Manifesto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const lines = [
    ["I.", "We hold that the customer is not a record."],
    ["II.", "We hold that the dashboard is not the work."],
    ["III.", "We hold that retention compounds. Acquisition does not."],
    ["IV.", "We hold that the operator outranks the algorithm."],
    ["V.", "We hold that one source of truth is not a feature. It is the floor."],
  ];
  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="text-red-700">§ 01</span> — The Five Holdings
          </div>
          <h2 className="col-span-12 md:col-span-9 font-bold text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            What we believe, <span className="italic font-normal">flatly stated.</span>
          </h2>
        </div>

        <div className="border-t-2 border-black">
          {lines.map(([num, text], i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid grid-cols-12 gap-6 border-b-2 border-black py-8 group hover:bg-black hover:text-white transition-colors"
            >
              <div className="col-span-2 md:col-span-1 text-2xl font-bold text-red-700 group-hover:text-red-400">{num}</div>
              <div className="col-span-10 md:col-span-11 text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">{text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const data = [
    { v: "0,341", l: "Operators on the system at this hour" },
    { v: "MMVIII", l: "Year of first deployment" },
    { v: "98.4%", l: "Renewal rate, last fiscal" },
    { v: "12", l: "Industries observed in production" },
  ];
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
          <span className="text-red-500">§ 02</span> — Of the Record
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
          {data.map((d) => (
            <div key={d.l} className="px-6 first:pl-0">
              <div className="font-bold text-6xl md:text-8xl tracking-[-0.04em] leading-none">{d.v}</div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/60 leading-tight">{d.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { t: "Marketing", c: "An archive of every conversation. Segmented not by funnel stage but by intent." },
    { t: "Sales", c: "A pipeline that is not a guess. Forecast accuracy as a discipline, not a hope." },
    { t: "Service", c: "Resolution as the metric. Tickets are accounting; outcomes are the business." },
  ];
  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="text-red-700">§ 03</span> — The Three Departments
          </div>
          <h2 className="col-span-12 md:col-span-9 font-bold text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            One <span className="italic font-normal">instrument.</span> Three <span className="italic font-normal">offices.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 border-t-2 border-l-2 border-black">
          {items.map((it, i) => (
            <div key={it.t} className="border-r-2 border-b-2 border-black p-8 md:p-10 min-h-[320px] flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-700">No. {String(i + 1).padStart(2, "0")}</div>
              <div className="font-bold text-4xl mt-4">{it.t}</div>
              <p className="mt-6 text-lg leading-[1.5]">{it.c}</p>
              <Link href="#" className="mt-auto text-[11px] uppercase tracking-[0.28em] font-bold border-b-2 border-black pb-0.5 self-start hover:text-red-700 hover:border-red-700">
                Read the brief →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-12">
          <span className="text-red-700">§ 04</span> — Of the Operators
        </div>
        <blockquote className="font-bold text-4xl md:text-7xl leading-[1.05] tracking-[-0.02em]">
          &ldquo;We replaced four systems with <span className="italic font-normal text-red-700">one</span>.
          The first quarter we kept the savings. <br />The next quarter we used them to grow.&rdquo;
        </blockquote>
        <div className="mt-12 grid grid-cols-12 gap-6 border-t-2 border-black pt-6">
          <div className="col-span-12 md:col-span-6 text-[11px] uppercase tracking-[0.28em] font-bold">
            Director of Revenue Operations
            <br />
            <span className="text-red-700">— A FGV Holdings subsidiary, KL</span>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right text-[11px] uppercase tracking-[0.28em] font-bold">
            Plate 04 / Edition I
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="bg-red-700 text-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-32">
        <h2 className="font-bold text-6xl md:text-9xl leading-[0.85] tracking-[-0.04em]">
          The next <br />
          edition <br />
          <span className="italic font-normal">begins with you.</span>
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="#" className="bg-white text-black px-8 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white">
            Request a Private Briefing →
          </Link>
          <Link href="#" className="border-2 border-white px-8 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-red-700">
            Subscribe to the Doctrine
          </Link>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-12 grid md:grid-cols-4 gap-8 border-b border-white/20">
        <div>
          <div className="text-2xl font-bold tracking-tight">CLARITAS</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/50">Single Source · Single Truth</div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-white/70 leading-loose">
          <div className="text-white/40 mb-2">Editorial</div>
          Doctrine<br />Manifesto<br />Press
        </div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-white/70 leading-loose">
          <div className="text-white/40 mb-2">Subjects</div>
          Marketing<br />Sales<br />Service
        </div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-white/70 leading-loose">
          <div className="text-white/40 mb-2">Address</div>
          Kuala Lumpur<br />Singapore<br />Manila
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex justify-between text-[10px] uppercase tracking-[0.28em] text-white/50">
        <span>© MMXXVI Claritas. Set in Times New Roman.</span>
        <span>V1 / Monolith</span>
      </div>
    </footer>
  );
}
