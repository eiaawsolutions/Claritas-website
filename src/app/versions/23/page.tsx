"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ──────────────────────────────────────────────
   V23 — NEWSROOM
   Customer-led homepage. Hero IS a giant customer quote at 8vw.
   Below: case study cards with logos, real metrics, and photos.
   The pitch is: "look who chose us — read their story."
   For: enterprise buyers who say "show me, don't tell me."
   ────────────────────────────────────────────── */

const RED = "#dc2626";
const INK = "#0a0a0a";
const HUSH = "#666";

export default function NewsroomPage() {
  return (
    <div className="bg-white text-[#0a0a0a]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <CaseStudies />
      <Numbers />
      <Capabilities />
      <Pricing />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur bg-white/85 border-b border-black/10">
      <div className="mx-auto max-w-[1500px] px-6 h-16 flex items-center justify-between">
        <Link href="/versions/23" className="flex items-center gap-2.5 font-bold tracking-tight">
          <div className="h-7 w-7 rounded-sm grid place-items-center text-white text-sm font-bold" style={{ background: RED }}>C</div>
          Claritas
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/65">
          {["Customers", "Platform", "Pricing", "About", "Newsroom"].map((x) => (
            <Link key={x} href="#" className="hover:text-black transition">{x}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline text-sm text-black/65">Sign in</Link>
          <Link href="#" className="text-sm bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-[#dc2626]">
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-[1500px]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="text-[11px] uppercase tracking-[0.32em] font-bold mb-7 flex items-center gap-3" style={{ color: RED }}>
            <span className="h-px w-10 bg-current" />
            <span>247 enterprises chose Claritas. Here&apos;s why.</span>
          </div>

          <h1 className="font-semibold leading-[0.95] tracking-[-0.04em] text-[8.5vw] md:text-[6.5vw] max-w-6xl">
            <span className="text-black/30">&ldquo;</span>We replaced four legacy systems with one Claritas instance. Renewals haven&apos;t been this easy in <span style={{ color: RED }}>twenty years.</span><span className="text-black/30">&rdquo;</span>
          </h1>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full grid place-items-center text-white font-bold" style={{ background: RED }}>SW</div>
            <div>
              <div className="font-semibold text-lg">Datin Sara Wahid</div>
              <div className="text-sm text-black/55">Group COO · FGV Holdings · 1,240 seats · Customer since 2008</div>
            </div>
            <Link href="#" className="ml-auto hidden md:inline-flex items-center gap-1.5 text-sm font-medium border-b border-black pb-0.5 hover:text-[#dc2626] hover:border-[#dc2626]">
              Read FGV&apos;s full story <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-14 pt-10 border-t border-black/10 flex flex-wrap items-center gap-x-12 gap-y-4">
            <div className="text-[10px] uppercase tracking-[0.32em] text-black/45 font-semibold mr-4">Also chose Claritas</div>
            {["FGV", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Astro", "Maxis"].map((l) => (
              <span key={l} className="text-base font-semibold text-black/40 hover:text-black transition tracking-tight">{l}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      logo: "FGV Holdings",
      industry: "Plantation · Malaysia",
      img: "/v9/pillar-retention.jpg",
      headline: "Four legacy systems consolidated into one platform of record.",
      metrics: [["4 → 1", "systems"], ["94%", "renewal rate"], ["18mo", "to payback"]],
      quote: "Datin Sara Wahid · Group COO",
      tag: "Multi-system migration",
    },
    {
      logo: "Singtel",
      industry: "Telecom · APAC",
      img: "/v9/pillar-reach.jpg",
      headline: "1,400 reps onboarded across 6 markets in 11 weeks.",
      metrics: [["1,400", "seats live"], ["11 wks", "rollout"], ["94%", "adoption wk 6"]],
      quote: "VP Sales Ops, APAC",
      tag: "Cross-border rollout",
    },
    {
      logo: "Estate 123",
      industry: "PropTech · Kuala Lumpur",
      img: "/v9/pillar-revenue.jpg",
      headline: "From signup to first deal logged: eleven seconds.",
      metrics: [["11s", "first deal"], ["1 wkd", "migration"], ["3.2×", "pipeline velocity"]],
      quote: "Founder & CEO",
      tag: "Speed of deployment",
    },
  ];
  return (
    <section className="px-6 py-24 md:py-32 border-t border-black/10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.32em] mb-4 font-bold" style={{ color: RED }}>The case files</div>
            <h2 className="font-semibold text-5xl md:text-6xl leading-[1] tracking-[-0.03em]">
              Three customers. <span className="text-black/40">Three results.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-black/60 leading-relaxed">
            We onboard fewer than 100 enterprise customers each year. Each story below is real, audited, and available in full to qualified buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={c.logo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={c.img} alt={c.logo} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent" />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.28em] font-bold text-white">{c.tag}</div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-bold text-2xl tracking-tight">{c.logo}</div>
                  <div className="text-xs opacity-80 mt-0.5">{c.industry}</div>
                </div>
              </div>

              <div className="border border-t-0 border-black/10 p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold leading-snug tracking-tight">{c.headline}</h3>
                <div className="mt-5 grid grid-cols-3 gap-3 py-4 border-y border-black/10">
                  {c.metrics.map(([v, l]) => (
                    <div key={l}>
                      <div className="text-2xl font-bold tracking-tight" style={{ color: RED }}>{v}</div>
                      <div className="text-[10px] uppercase tracking-wider text-black/55 mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-black/65 italic">— {c.quote}</div>
                <Link href="#" className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:text-[#dc2626]">
                  Read the full case <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-black pb-1 hover:text-[#dc2626] hover:border-[#dc2626]">
            Browse all 247 case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="px-6 py-20 border-t border-black/10 bg-[#fafafa]">
      <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { v: "247", l: "Enterprise customers" },
          { v: "98.4%", l: "Annual renewal" },
          { v: "18", l: "Years in production" },
          { v: "47ms", l: "p99 query latency" },
        ].map((s) => (
          <div key={s.l}>
            <div className="font-bold text-6xl md:text-7xl tracking-[-0.03em]" style={{ color: RED }}>{s.v}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.24em] text-black/55 font-semibold">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { t: "Marketing", c: "Audiences drawn from a unified record. Every send measured against the customer's full journey." },
    { t: "Sales", c: "Pipeline as discipline. Forecasts you can defend in any board meeting. AI-assisted, never AI-replaced." },
    { t: "Service", c: "Resolution as the only metric. Every ticket, customer, and history in one elegant timeline." },
  ];
  return (
    <section className="px-6 py-24 md:py-28 border-t border-black/10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.32em] mb-4 font-bold" style={{ color: RED }}>The platform</div>
            <h2 className="font-semibold text-5xl md:text-6xl leading-[1] tracking-[-0.03em]">
              One platform. <span className="text-black/40">Three offices.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-black/60 leading-relaxed">
            Marketing, sales, and service on a single source of truth. The same record, accessible from every department, in real time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.t} className="border border-black/10 p-8 hover:border-black transition">
              <div className="text-xl font-semibold tracking-tight">{it.t}</div>
              <p className="mt-3 text-base text-black/65 leading-relaxed">{it.c}</p>
              <Link href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold border-b border-black pb-0.5 hover:text-[#dc2626] hover:border-[#dc2626]">
                Read the brief <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="px-6 py-24 border-t border-black/10 bg-[#fafafa]">
      <div className="mx-auto max-w-[1500px] text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] mb-4 font-bold" style={{ color: RED }}>Pricing</div>
        <h2 className="font-semibold text-5xl md:text-6xl leading-[1] tracking-[-0.03em]">
          From RM 49 / seat / month.
        </h2>
        <p className="mt-6 text-lg text-black/60 max-w-xl mx-auto">
          Three tiers — Growth, Scale, Enterprise. 30-day trial. Migration included for enterprise contracts.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-[#dc2626]">
            See full pricing →
          </Link>
          <Link href="#" className="border border-black/20 px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white">
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-32 text-center bg-black text-white border-t border-black">
      <h2 className="font-semibold text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em] max-w-4xl mx-auto">
        Want to be the next case study?
      </h2>
      <p className="mt-6 text-lg text-white/65 max-w-xl mx-auto">
        30 days free. White-glove onboarding. Your first deal logged in 11 seconds.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="#" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#dc2626] hover:text-white">
          Start free trial →
        </Link>
        <Link href="#" className="border border-white/25 px-8 py-4 rounded-full font-medium hover:bg-white/10">
          Request a private briefing
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-bold">
            <div className="h-7 w-7 rounded-sm grid place-items-center text-white font-bold text-sm" style={{ background: RED }}>C</div>
            Claritas
          </div>
          <p className="mt-4 text-white/55 max-w-xs">The unified customer platform trusted by 247 enterprises across Asia-Pacific.</p>
        </div>
        {[
          { h: "Customers", l: ["Case studies", "Industries", "Migration"] },
          { h: "Platform", l: ["Marketing", "Sales", "Service", "AI Agent"] },
          { h: "Company", l: ["About", "Press", "Careers", "Contact"] },
          { h: "Resources", l: ["Documentation", "Status", "Changelog"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-medium">{c.h}</div>
            <ul className="mt-3 space-y-2 text-white/55">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-white">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-5 flex justify-between text-xs text-white/45">
          <span>© Claritas Inc. 2026</span>
          <span>V23 · Newsroom</span>
        </div>
      </div>
    </footer>
  );
}
