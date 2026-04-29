"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";

/* ──────────────────────────────────────────────
   V10 — HELIX
   Apple-tier minimalism · massive type · perfect grid
   Spatial depth from shadow only · single product hero
   Tone: confident through restraint, declarative product copy
   ────────────────────────────────────────────── */

const APPLE_INK = "#1d1d1f";
const APPLE_BLUE = "#0066cc";
const APPLE_GRAY = "#86868b";
const APPLE_BG_SOFT = "#fbfbfd";

export default function HelixPage() {
  return (
    <div className="bg-white text-[#1d1d1f]" style={{ fontFamily: "-apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <ProductHero />
      <Pillars />
      <DeepDive />
      <Stats />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur-2xl bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-[1024px] h-12 flex items-center justify-between text-[12px] px-6">
        <Link href="/versions/10" className="font-semibold tracking-tight">Claritas</Link>
        <nav className="hidden md:flex items-center gap-7" style={{ color: APPLE_GRAY }}>
          {["Overview", "Platform", "Customers", "Pricing", "Support"].map((x) => (
            <Link key={x} href="#" className="hover:text-[#1d1d1f] transition-colors">{x}</Link>
          ))}
        </nav>
        <Link href="#" className="text-[#0066cc] hover:underline">Buy →</Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-24 pb-16 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-semibold leading-[0.95] tracking-[-0.04em] text-[12vw] md:text-[8.5vw] mx-auto max-w-[1100px]">
          Claritas. <span className="block md:inline" style={{ color: APPLE_GRAY }}>The CRM, perfected.</span>
        </h1>
        <p className="mt-7 text-2xl md:text-3xl font-medium tracking-tight max-w-2xl mx-auto" style={{ color: APPLE_INK }}>
          Faster. Simpler. The most powerful customer platform we have ever built.
        </p>
        <div className="mt-9 flex items-center justify-center gap-6 text-[15px] font-medium">
          <Link href="#" className="text-[#0066cc] hover:underline inline-flex items-center gap-1">
            Watch the film <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link href="#" className="text-[#0066cc] hover:underline inline-flex items-center gap-1">
            Available now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function ProductHero() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[36px] p-2 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.25)]"
          style={{ background: APPLE_BG_SOFT }}
        >
          <div className="rounded-[28px] aspect-[16/10] grid grid-cols-12 grid-rows-6 gap-3 p-6 bg-white">
            <div className="col-span-3 row-span-6 rounded-2xl space-y-1.5 p-3" style={{ background: APPLE_BG_SOFT }}>
              <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: APPLE_GRAY }}>Workspace</div>
              {["Dashboard", "Pipeline", "Inbox", "Campaigns", "Reports", "Settings"].map((x, i) => (
                <div key={x} className={`text-sm px-3 py-2 rounded-xl ${i === 0 ? "bg-[#0066cc] text-white font-medium" : "text-[#1d1d1f]"}`}>{x}</div>
              ))}
            </div>
            <div className="col-span-9 row-span-2 rounded-2xl p-5" style={{ background: APPLE_BG_SOFT }}>
              <div className="text-[10px] uppercase tracking-wider" style={{ color: APPLE_GRAY }}>This Quarter</div>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-semibold tracking-tight">RM 4.28M</div>
                  <div className="text-xs mt-1" style={{ color: APPLE_GRAY }}>↑ 18.4% vs Q1</div>
                </div>
                <div className="h-12 flex items-end gap-1.5">
                  {[40, 60, 35, 80, 55, 90, 70, 100, 85].map((h, i) => (
                    <div key={i} className="w-2 rounded-t bg-[#0066cc]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-9 row-span-4 rounded-2xl p-5" style={{ background: APPLE_BG_SOFT }}>
              <div className="text-[10px] uppercase tracking-wider mb-3" style={{ color: APPLE_GRAY }}>Active deals</div>
              {[
                ["FGV Holdings", "Negotiation", "RM 480k"],
                ["Singtel Enterprise", "Proposal", "RM 220k"],
                ["Nando's Asia", "Discovery", "RM 95k"],
                ["Estate 123 Group", "Closed Won", "RM 310k"],
              ].map(([co, st, val], i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0">
                  <span className="text-sm font-medium">{co}</span>
                  <span className="text-xs" style={{ color: APPLE_GRAY }}>{st}</span>
                  <span className="text-sm font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { e: "Marketing", t: "Campaigns. Reimagined.", c: "Build, send, measure. Every conversation in every channel — finally on one canvas." },
    { e: "Sales", t: "Pipeline. Reframed.", c: "Drag, drop, close. The fastest pipeline you have ever managed. Forecasts you can defend." },
    { e: "Service", t: "Resolution. Refined.", c: "Every ticket, every customer, every history — in one elegant timeline. Resolve faster." },
  ];
  return (
    <section className="px-6 py-32 space-y-32">
      {items.map((it, i) => (
        <motion.div
          key={it.e}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <div className="text-[13px] font-semibold tracking-wider uppercase mb-5" style={{ color: APPLE_BLUE }}>
            {it.e}
          </div>
          <h2 className="font-semibold text-6xl md:text-8xl leading-[0.95] tracking-[-0.04em]">
            {it.t}
          </h2>
          <p className="mt-8 text-2xl font-medium max-w-2xl mx-auto leading-snug tracking-tight" style={{ color: APPLE_GRAY }}>
            {it.c}
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 text-[15px] font-medium">
            <Link href="#" className="text-[#0066cc] hover:underline inline-flex items-center gap-1">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="text-[#0066cc] hover:underline inline-flex items-center gap-1">
              See it work <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Visual chip */}
          <div className="mt-16 mx-auto max-w-[900px]">
            <div className="rounded-[28px] aspect-[16/9] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.2)]"
              style={{ background: i === 0 ? "linear-gradient(135deg, #f0f7ff 0%, #e6efff 100%)" : i === 1 ? "linear-gradient(135deg, #fbfbfd 0%, #f5f5f7 100%)" : "linear-gradient(135deg, #f9fbf7 0%, #eef4e8 100%)" }} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function DeepDive() {
  return (
    <section className="px-6 py-32" style={{ background: APPLE_BG_SOFT }}>
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <Sparkles className="h-7 w-7 mx-auto mb-5" style={{ color: APPLE_BLUE }} />
          <h2 className="font-semibold text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em]">
            Built on intelligence.<br />
            <span style={{ color: APPLE_GRAY }}>Designed for trust.</span>
          </h2>
          <p className="mt-7 text-xl max-w-2xl mx-auto font-medium" style={{ color: APPLE_GRAY }}>
            The Claritas AI agent works inside your team — drafting outreach, scoring leads, summarising calls. Always on. Always under your review.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            { t: "Native, not bolted on", c: "AI runs in the same runtime as your data. Sub-100ms latency. Zero data leaves your tenant." },
            { t: "Always under review", c: "Every AI action proposes before it acts. You see the draft. You approve. Then it ships." },
            { t: "Built on Claude 4", c: "Powered by the most capable model available. Updated automatically. No prompt engineering required." },
          ].map((it) => (
            <div key={it.t} className="rounded-3xl p-8 bg-white">
              <Check className="h-5 w-5 mb-4" style={{ color: APPLE_BLUE }} />
              <div className="font-semibold text-xl tracking-tight">{it.t}</div>
              <p className="mt-2 text-base" style={{ color: APPLE_GRAY }}>{it.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "247", l: "Enterprise teams" },
    { v: "98.4%", l: "Annual renewal" },
    { v: "47ms", l: "Average response" },
    { v: "11s", l: "Setup to first deal" },
  ];
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1100px] grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-semibold text-5xl md:text-6xl tracking-[-0.03em]">{s.v}</div>
            <div className="mt-3 text-sm" style={{ color: APPLE_GRAY }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-32 text-center" style={{ background: APPLE_BG_SOFT }}>
      <h2 className="font-semibold text-6xl md:text-8xl leading-[0.95] tracking-[-0.04em] mx-auto max-w-4xl">
        Get Claritas. <span style={{ color: APPLE_GRAY }}>Today.</span>
      </h2>
      <p className="mt-8 text-2xl font-medium max-w-xl mx-auto tracking-tight" style={{ color: APPLE_INK }}>
        From RM 49 / seat / month.<br />
        Free for thirty days. Migration included.
      </p>
      <div className="mt-10 flex items-center justify-center gap-3">
        <Link href="#" className="bg-[#0066cc] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-[#0055b3]">
          Buy Claritas →
        </Link>
        <Link href="#" className="border border-black/15 px-7 py-3 rounded-full text-[15px] font-medium hover:border-black/30">
          Talk to sales
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-black/5 text-xs" style={{ color: APPLE_GRAY }}>
      <div className="mx-auto max-w-[1024px] px-6 py-12">
        <p className="mb-6">
          Claritas pricing is per active seat. The free trial does not require payment information.
        </p>
        <div className="grid md:grid-cols-5 gap-8 pb-8 border-b border-black/5">
          {[
            { h: "Shop and Learn", l: ["Overview", "Platform", "AI Agent", "Pricing"] },
            { h: "Solutions", l: ["For Sales", "For Marketing", "For Service", "Enterprise"] },
            { h: "About", l: ["Manifesto", "Customers", "Press", "Careers"] },
            { h: "Support", l: ["Documentation", "Status", "Changelog", "Contact"] },
            { h: "Account", l: ["Sign in", "Workspace", "Settings", "Privacy"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="font-semibold text-[#1d1d1f] mb-3">{c.h}</div>
              <ul className="space-y-2">{c.l.map((x) => <li key={x}><Link href="#" className="hover:underline">{x}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex justify-between">
          <span>© 2026 Claritas Inc. All rights reserved.</span>
          <span>V10 · Helix</span>
        </div>
      </div>
    </footer>
  );
}
