"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ──────────────────────────────────────────────
   V21 — ATELIER+
   Standard homepage architecture. Magazine-grade boutique consultancy.
   Editorial photography, asymmetric type, hand-set craft — but every
   element a buyer expects is exactly where they expect it.
   For: family office / UHNW founder buyers, legacy enterprises in APAC.
   ────────────────────────────────────────────── */

const CREAM = "#f5efe6";
const INK = "#1a1a1a";
const CLAY = "#a8401a";
const SAND = "#ede4d3";

export default function AtelierPlusPage() {
  return (
    <div style={{ background: CREAM, color: INK, fontFamily: "Georgia, 'Cormorant Garamond', serif" }}>
      <Nav />
      <Hero />
      <Trust />
      <Capabilities />
      <CaseStudy />
      <Numbers />
      <Pricing />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur" style={{ background: `${CREAM}d9`, borderBottom: `1px solid ${INK}1a` }}>
      <div className="mx-auto max-w-[1500px] px-8 h-16 flex items-center justify-between">
        <Link href="/versions/21" className="flex items-center gap-2.5">
          <span className="h-7 w-7 rounded-full" style={{ background: CLAY }} />
          <span className="font-semibold tracking-tight">Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: `${INK}b3` }}>
          <Link href="#" className="hover:text-[#1a1a1a]">Platform</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">Customers</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">Pricing</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">About</Link>
          <Link href="#" className="hover:text-[#1a1a1a]">Journal</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline text-sm" style={{ color: `${INK}b3` }}>Sign in</Link>
          <Link href="#" className="text-sm px-5 py-2 rounded-full font-medium" style={{ background: INK, color: CREAM }}>
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-8 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10" style={{ background: CLAY }} />
              <span className="text-[11px] uppercase font-semibold" style={{ letterSpacing: "0.32em", color: CLAY, fontFamily: "Inter, sans-serif" }}>
                Customer Architecture · Since 2008
              </span>
            </div>
            <h1 className="font-light leading-[0.94] tracking-[-0.025em] text-[10vw] md:text-[7vw]">
              The CRM
              <br />
              for institutions
              <br />
              <em className="italic" style={{ color: CLAY }}>built to last</em>
              <br />
              decades.
            </h1>
            <p className="mt-8 text-lg leading-[1.65] max-w-xl" style={{ color: `${INK}b3`, fontFamily: "Inter, sans-serif" }}>
              Claritas is the unified customer platform used by 247 enterprises across Asia-Pacific. Marketing, sales, and service — on one source of truth, engineered around the relationship.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5" style={{ fontFamily: "Inter, sans-serif" }}>
              <Link href="#" className="px-7 py-3.5 rounded-full text-sm font-medium" style={{ background: INK, color: CREAM }}>
                Request a private demo →
              </Link>
              <Link href="#" className="text-sm font-medium border-b pb-1" style={{ borderColor: INK }}>
                See customer stories
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4 }}
          className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/v9/hero-executive.jpg" alt="Executive leadership" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(26,26,26,0.3) 100%)" }} />
          </div>
          <div className="absolute -bottom-6 -left-4 lg:-left-8 max-w-xs p-6 shadow-[0_30px_60px_-25px_rgba(26,26,26,0.3)]" style={{ background: CREAM, border: `1px solid ${INK}1a` }}>
            <div className="text-[10px] uppercase font-semibold mb-3" style={{ letterSpacing: "0.28em", color: CLAY, fontFamily: "Inter, sans-serif" }}>From the journal</div>
            <p className="italic text-base leading-snug">
              &ldquo;An instrument designed for those who view customer relationships as a multi-generational asset.&rdquo;
            </p>
            <div className="mt-3 text-[10px] uppercase font-semibold" style={{ letterSpacing: "0.22em", color: `${INK}99`, fontFamily: "Inter, sans-serif" }}>
              — The Claritas Charter
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Trust() {
  const logos = ["FGV HOLDINGS", "SINGTEL", "NANDO'S", "ESTATE 123", "INTEL", "PFIZER", "ASTRO"];
  return (
    <section className="px-8 py-14 border-y" style={{ borderColor: `${INK}14`, background: SAND }}>
      <div className="mx-auto max-w-[1500px] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-14" style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="text-[10px] uppercase font-semibold shrink-0" style={{ letterSpacing: "0.32em", color: CLAY }}>Entrusted by</div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {logos.map((l) => (
            <span key={l} className="text-sm tracking-[0.18em]" style={{ color: `${INK}66` }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { e: "I.", t: "Marketing", c: "Audiences drawn by hand from a unified record. Every send measured against the customer's full journey, not the campaign's window.", img: "/v9/product-marketing.jpg" },
    { e: "II.", t: "Sales", c: "Forecasts you can defend in any board meeting. Pipeline as discipline. AI-assisted, never AI-replaced.", img: "/v9/product-sales.jpg" },
    { e: "III.", t: "Service", c: "Resolution as the only metric. Every ticket, customer, and history in one elegant timeline. Outcomes over throughput.", img: "/v9/product-support.jpg" },
  ];
  return (
    <section className="px-8 py-28 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase font-semibold mb-4" style={{ letterSpacing: "0.32em", color: CLAY, fontFamily: "Inter, sans-serif" }}>The platform</div>
            <h2 className="font-light text-5xl md:text-7xl leading-[1.05] tracking-tight">
              One <em className="italic" style={{ color: CLAY }}>house.</em>
              <br />Three <em className="italic">offices.</em>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg leading-relaxed" style={{ color: `${INK}99`, fontFamily: "Inter, sans-serif" }}>
            Claritas unifies marketing, sales, and service on a single source of truth. The same record, accessible from every department, in real time. Engineered around the customer relationship — not the funnel diagram.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white border" style={{ borderColor: `${INK}14` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={it.img} alt={it.t} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8">
                <div className="text-3xl italic font-light mb-4" style={{ color: CLAY }}>{it.e}</div>
                <h3 className="font-light text-3xl tracking-tight">{it.t}</h3>
                <p className="mt-4 text-base leading-relaxed" style={{ color: `${INK}99`, fontFamily: "Inter, sans-serif" }}>
                  {it.c}
                </p>
                <Link href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium border-b pb-0.5" style={{ borderColor: INK, fontFamily: "Inter, sans-serif" }}>
                  Read the brief <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="px-8 py-28" style={{ background: INK, color: CREAM }}>
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative aspect-square overflow-hidden">
          <Image src="/v9/cta-backdrop.jpg" alt="Customer" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className="lg:col-span-7">
          <div className="text-[11px] uppercase font-semibold mb-5" style={{ letterSpacing: "0.32em", color: "#d4a574", fontFamily: "Inter, sans-serif" }}>
            Customer story · FGV Holdings
          </div>
          <blockquote className="font-light text-3xl md:text-4xl leading-[1.3] tracking-tight">
            &ldquo;We replaced four legacy systems with one Claritas instance. Renewals haven&apos;t been this easy in twenty years — and our forecast accuracy is the best it has ever been.&rdquo;
          </blockquote>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl pt-8 border-t" style={{ borderColor: `${CREAM}26` }}>
            {[["4 → 1", "systems consolidated"], ["94%", "renewal rate"], ["18mo", "to full payback"]].map(([v, l]) => (
              <div key={l}>
                <div className="font-light text-3xl" style={{ color: "#d4a574" }}>{v}</div>
                <div className="text-xs mt-1" style={{ color: `${CREAM}99`, fontFamily: "Inter, sans-serif" }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="h-10 w-10 rounded-full grid place-items-center text-xs font-bold" style={{ background: "#d4a574", color: INK }}>SW</div>
            <div className="text-sm">
              <div className="font-medium">Datin Sara Wahid</div>
              <div className="text-xs" style={{ color: `${CREAM}99` }}>Group COO · FGV Holdings</div>
            </div>
            <Link href="#" className="ml-auto text-xs uppercase tracking-wider border-b pb-0.5" style={{ borderColor: CREAM }}>
              Read the full case →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { v: "247", l: "Enterprise customers" },
    { v: "98.4%", l: "Annual renewal" },
    { v: "18", l: "Years in production" },
    { v: "47ms", l: "p99 query latency" },
  ];
  return (
    <section className="px-8 py-24" style={{ background: SAND }}>
      <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-light text-6xl md:text-7xl" style={{ color: CLAY }}>{s.v}</div>
            <div className="mt-3 text-xs uppercase font-semibold" style={{ letterSpacing: "0.28em", color: `${INK}99`, fontFamily: "Inter, sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { n: "Growth", p: "From RM 49", per: "per seat / month", desc: "Revenue teams getting serious about CRM as architecture.", cta: "Start free trial" },
    { n: "Scale", p: "From RM 99", per: "per seat / month", desc: "Ops-led teams scaling across markets, channels, and product lines.", cta: "Start free trial", featured: true },
    { n: "Enterprise", p: "Bespoke", per: "annual contract", desc: "Institutions with serious requirements: residency, SSO, custom legal.", cta: "Talk to sales" },
  ];
  return (
    <section className="px-8 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-[11px] uppercase font-semibold mb-4" style={{ letterSpacing: "0.32em", color: CLAY, fontFamily: "Inter, sans-serif" }}>Pricing</div>
          <h2 className="font-light text-5xl md:text-6xl leading-tight tracking-tight">
            Three tiers. <em className="italic" style={{ color: CLAY }}>One contract.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.n} className={`relative p-10 bg-white ${t.featured ? "border-2" : "border"}`} style={{ borderColor: t.featured ? CLAY : `${INK}14` }}>
              {t.featured && <div className="absolute -top-3 left-8 text-[10px] uppercase font-bold tracking-[0.22em] px-3 py-1 text-white" style={{ background: CLAY, fontFamily: "Inter, sans-serif" }}>Most chosen</div>}
              <div className="text-[11px] uppercase font-semibold mb-3" style={{ letterSpacing: "0.32em", color: t.featured ? CLAY : `${INK}99`, fontFamily: "Inter, sans-serif" }}>{t.n}</div>
              <div className="font-light text-4xl tracking-tight">{t.p}</div>
              <div className="text-xs mt-1" style={{ color: `${INK}66`, fontFamily: "Inter, sans-serif" }}>{t.per}</div>
              <p className="mt-6 text-sm leading-relaxed" style={{ color: `${INK}99`, fontFamily: "Inter, sans-serif" }}>{t.desc}</p>
              <Link href="#" className={`mt-8 block text-center py-3 rounded-full text-sm font-medium ${t.featured ? "text-white" : "border"}`}
                style={t.featured ? { background: INK } : { borderColor: INK, fontFamily: "Inter, sans-serif" }}>
                {t.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-8 py-32 text-center" style={{ background: CLAY, color: CREAM }}>
      <h2 className="font-light text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Begin a <em className="italic">private</em> conversation.
      </h2>
      <p className="mt-8 text-lg max-w-xl mx-auto opacity-85" style={{ fontFamily: "Inter, sans-serif" }}>
        We accept a small number of new engagements each year. The first conversation is private and without obligation.
      </p>
      <Link href="#" className="mt-10 inline-block px-10 py-4 rounded-full font-medium text-sm" style={{ background: CREAM, color: CLAY, fontFamily: "Inter, sans-serif" }}>
        Write to the partners →
      </Link>
    </section>
  );
}

function Foot() {
  return (
    <footer style={{ background: CREAM, color: INK, borderTop: `1px solid ${INK}14`, fontFamily: "Inter, sans-serif" }}>
      <div className="mx-auto max-w-[1500px] px-8 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-semibold">
            <span className="h-7 w-7 rounded-full" style={{ background: CLAY }} />
            Claritas
          </div>
          <p className="mt-4 max-w-xs" style={{ color: `${INK}99` }}>The unified customer platform for Asia-Pacific&apos;s most considered institutions.</p>
        </div>
        {[
          { h: "Platform", l: ["Marketing", "Sales", "Service", "AI Agent", "Pricing"] },
          { h: "Customers", l: ["Case studies", "Industries", "Migration"] },
          { h: "Company", l: ["About", "Press", "Careers", "Contact"] },
          { h: "Resources", l: ["Documentation", "Status", "Changelog"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-medium">{c.h}</div>
            <ul className="mt-3 space-y-2" style={{ color: `${INK}99` }}>{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-[#1a1a1a]">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t" style={{ borderColor: `${INK}14` }}>
        <div className="mx-auto max-w-[1500px] px-8 py-5 flex justify-between text-xs" style={{ color: `${INK}66` }}>
          <span>© Claritas Inc. 2026 · Engineered in Kuala Lumpur.</span>
          <span>V21 · Atelier+</span>
        </div>
      </div>
    </footer>
  );
}
