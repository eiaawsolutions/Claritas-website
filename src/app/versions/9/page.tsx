"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   V9 — LINEN
   Pure white canvas · Hermès / Aesop ultra-airy editorial
   Wide-set serif · single sage thread · enormous breathing room
   Tone: confident through restraint, almost wordless
   ────────────────────────────────────────────── */

const SAGE = "#7a8866";
const INK = "#1a1a1a";
const HUSH = "#9a9a9a";

export default function LinenPage() {
  return (
    <div className="bg-white text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <Nav />
      <Hero />
      <SilentBreak />
      <Three />
      <Numerals />
      <Letter />
      <Closing />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header>
      <div className="mx-auto max-w-[1500px] px-10 md:px-16 h-32 flex items-center justify-between">
        <Link href="/versions/9" className="text-2xl tracking-[0.18em]" style={{ fontVariant: "small-caps" }}>
          Claritas
        </Link>
        <nav className="hidden md:flex items-center gap-12 text-[11px] uppercase" style={{ letterSpacing: "0.32em", color: HUSH }}>
          <Link href="#" className="hover:text-[#1a1a1a]">House</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">Practice</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">Almanac</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">Visit</Link>
        </nav>
        <Link href="#" className="text-[11px] uppercase" style={{ letterSpacing: "0.32em" }}>
          Enquire
        </Link>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(26,26,26,0.08)" }} />
    </header>
  );
}

function Hero() {
  return (
    <section className="px-10 md:px-16 py-32 md:py-44">
      <div className="mx-auto max-w-[1500px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
          <div className="text-[10px] uppercase mb-20" style={{ letterSpacing: "0.4em", color: SAGE }}>
            ⸻  Established 2008  ⸻
          </div>
          <h1 className="font-light leading-[0.92] tracking-[-0.025em] text-[10vw] md:text-[7.5vw]">
            <span className="block">A quiet</span>
            <span className="block italic" style={{ color: SAGE }}>instrument</span>
            <span className="block">for</span>
            <span className="block italic">long relationships.</span>
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-24 grid md:grid-cols-12 gap-12 items-end">
          <p className="md:col-span-5 md:col-start-7 text-xl leading-[1.7] font-light" style={{ color: "rgba(26,26,26,0.7)" }}>
            We make Claritas — a customer-relationship instrument used by sixty-four institutions across Asia-Pacific to remember what matters about every customer, for as long as the relationship lives.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center gap-12">
          <Link href="#" className="text-[11px] uppercase border-b pb-1" style={{ letterSpacing: "0.32em", borderColor: INK }}>
            Request a private session
          </Link>
          <Link href="#" className="text-[11px] uppercase pb-1" style={{ letterSpacing: "0.32em", color: HUSH }}>
            Read the almanac
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SilentBreak() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[900px] px-10 md:px-16 text-center">
        <p className="font-light text-3xl md:text-5xl leading-[1.45] italic" style={{ color: INK }}>
          &ldquo;The relationships we tended in 2008<br />are still in bloom. That is the only<br />metric that has ever mattered.&rdquo;
        </p>
        <div className="mt-12 text-[10px] uppercase" style={{ letterSpacing: "0.4em", color: SAGE }}>
          ⸻  From the Charter  ⸻
        </div>
      </div>
    </section>
  );
}

function Three() {
  const items = [
    { num: "I.", t: "Marketing", c: "We do not chase. We attend. Every signal weighed, every audience drawn by hand." },
    { num: "II.", t: "Sales", c: "Pipeline as discipline. Forecast as a thing one can stand behind, in any board meeting." },
    { num: "III.", t: "Service", c: "Resolution as the only metric that holds. Tickets are accounting. Outcomes are the work." },
  ];
  return (
    <section className="px-10 md:px-16 py-32 md:py-44">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-3 text-[10px] uppercase" style={{ letterSpacing: "0.4em", color: SAGE }}>
            ⸻  The practice  ⸻
          </div>
          <h2 className="md:col-span-9 font-light text-5xl md:text-7xl leading-[1.05] tracking-[-0.02em]">
            Three offices, <em>one house.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-16 gap-y-20">
          {items.map((it, i) => (
            <motion.article
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
            >
              <div className="text-[10px] uppercase mb-8" style={{ letterSpacing: "0.4em", color: SAGE }}>{it.num}</div>
              <h3 className="font-light text-4xl mb-6">{it.t}</h3>
              <p className="text-lg leading-[1.65]" style={{ color: "rgba(26,26,26,0.65)" }}>{it.c}</p>
              <Link href="#" className="mt-10 inline-block text-[11px] uppercase border-b pb-1" style={{ letterSpacing: "0.32em", borderColor: INK }}>
                Walk the room
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Numerals() {
  const data = [
    { v: "MMVIII", l: "Year of first commission" },
    { v: "LXIV", l: "Engagements completed" },
    { v: "XII", l: "Industries observed" },
    { v: "XCVIII", l: "Per cent renewing" },
  ];
  return (
    <section className="px-10 md:px-16 py-32">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-4 gap-16 md:gap-8 items-end">
        {data.map((d) => (
          <div key={d.l}>
            <div className="font-light leading-none text-7xl md:text-8xl" style={{ color: INK }}>{d.v}</div>
            <div className="mt-6 pt-4 border-t text-[10px] uppercase" style={{ letterSpacing: "0.32em", borderColor: "rgba(26,26,26,0.15)", color: HUSH }}>{d.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Letter() {
  return (
    <section className="py-32 md:py-44 px-10 md:px-16">
      <div className="mx-auto max-w-[900px]">
        <div className="text-[10px] uppercase mb-12 text-center" style={{ letterSpacing: "0.4em", color: SAGE }}>
          ⸻  A letter from the partners  ⸻
        </div>
        <div className="space-y-7 text-[19px] leading-[1.85] font-light" style={{ color: "rgba(26,26,26,0.78)" }}>
          <p>
            We began in 2008 with one client and one question — could software remember not the customer, but the relationship?
          </p>
          <p>
            Eighteen years and sixty-four engagements later, we still measure ourselves against that question. Claritas remembers the conversation that happened seven years ago, the preference that was mentioned in passing, the relationship that was built before the software existed.
          </p>
          <p style={{ color: SAGE }}>
            <em>We are still a small house. We intend to remain one.</em>
          </p>
        </div>
        <div className="mt-14 pt-8 border-t text-[11px] uppercase" style={{ letterSpacing: "0.32em", borderColor: "rgba(26,26,26,0.15)", color: HUSH }}>
          The Founding Partners ·  Kuala Lumpur
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="py-32 md:py-44 px-10 md:px-16 border-t" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="font-light text-6xl md:text-8xl leading-[0.95] tracking-[-0.025em]">
          By <em style={{ color: SAGE }}>appointment</em>
          <br />only.
        </h2>
        <p className="mt-12 text-xl font-light max-w-lg mx-auto leading-[1.6]" style={{ color: "rgba(26,26,26,0.6)" }}>
          We accept a small number of new engagements each year. The first conversation is private and without obligation.
        </p>
        <Link href="#" className="mt-16 inline-block text-[11px] uppercase border-b pb-1" style={{ letterSpacing: "0.4em", borderColor: INK }}>
          Write to the partners
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
      <div className="mx-auto max-w-[1500px] px-10 md:px-16 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="text-2xl tracking-[0.18em]" style={{ fontVariant: "small-caps" }}>Claritas</div>
          <p className="mt-6 text-sm font-light leading-relaxed max-w-xs italic" style={{ color: "rgba(26,26,26,0.55)" }}>
            A small house, in long practice, since 2008. Three offices. Sixty-four engagements. One question, kept.
          </p>
        </div>
        {[
          { h: "Practice", l: ["Marketing", "Sales", "Service"] },
          { h: "House", l: ["Charter", "Almanac", "Letter from the Partners"] },
          { h: "Visit", l: ["Kuala Lumpur", "Singapore", "By appointment"] },
        ].map((c) => (
          <div key={c.h} className="md:col-span-2 text-sm">
            <div className="text-[10px] uppercase mb-5" style={{ letterSpacing: "0.32em", color: SAGE }}>{c.h}</div>
            <ul className="space-y-3 font-light">{c.l.map((x) => <li key={x} style={{ color: "rgba(26,26,26,0.7)" }}>{x}</li>)}</ul>
          </div>
        ))}
        <div className="md:col-span-2 text-sm">
          <div className="text-[10px] uppercase mb-5" style={{ letterSpacing: "0.32em", color: SAGE }}>Almanac</div>
          <p className="font-light italic" style={{ color: "rgba(26,26,26,0.55)" }}>Sent quarterly, by post.</p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "rgba(26,26,26,0.08)" }}>
        <div className="mx-auto max-w-[1500px] px-10 md:px-16 py-6 flex justify-between text-[10px] uppercase italic font-light" style={{ letterSpacing: "0.28em", color: HUSH }}>
          <span>© Claritas, since 2008.</span>
          <span>V9 · Linen</span>
        </div>
      </div>
    </footer>
  );
}
