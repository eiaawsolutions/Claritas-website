"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Users, BarChart3, Workflow, Database } from "lucide-react";

/* ──────────────────────────────────────────────
   V22 — BENTO
   Apple iPad / Linear product page format. Standard architecture
   executed at agency-tier quality. Big hero, then a precise bento
   grid showcasing each capability with real product surfaces.
   For: enterprise procurement teams that read product pages closely.
   ────────────────────────────────────────────── */

const APPLE_GRAY = "#86868b";
const APPLE_BLUE = "#0066cc";
const SOFT = "#fbfbfd";
const INK = "#1d1d1f";

export default function BentoPage() {
  return (
    <div className="bg-white text-[#1d1d1f]" style={{ fontFamily: "-apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <TrustBar />
      <BentoGrid />
      <DeepCustomer />
      <Pricing />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur-2xl bg-white/85 border-b border-black/5">
      <div className="mx-auto max-w-[1100px] h-12 px-6 flex items-center justify-between text-[12px]">
        <Link href="/versions/22" className="font-semibold tracking-tight">Claritas</Link>
        <nav className="hidden md:flex items-center gap-7" style={{ color: APPLE_GRAY }}>
          {["Platform", "Solutions", "Customers", "Pricing", "Support"].map((x) => (
            <Link key={x} href="#" className="hover:text-[#1d1d1f] transition">{x}</Link>
          ))}
        </nav>
        <Link href="#" className="text-[#0066cc] font-medium hover:underline">Buy →</Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="text-[13px] font-semibold tracking-tight mb-3" style={{ color: APPLE_BLUE }}>Claritas</div>
        <h1 className="font-semibold leading-[0.95] tracking-[-0.045em] text-[12vw] md:text-[7.5vw] mx-auto max-w-[1100px]">
          The CRM, perfected. <br className="hidden md:inline" />
          <span style={{ color: APPLE_GRAY }}>For the way revenue actually works.</span>
        </h1>
        <p className="mt-7 text-2xl md:text-3xl font-medium tracking-tight max-w-2xl mx-auto">
          Faster. Simpler. The unified customer platform trusted by 247 enterprises across Asia-Pacific.
        </p>
        <div className="mt-9 flex items-center justify-center gap-6 text-[15px] font-medium">
          <Link href="#" className="bg-[#0066cc] text-white px-6 py-3 rounded-full hover:bg-[#0055b3] inline-flex items-center gap-1.5">
            Buy Claritas <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-[#0066cc] hover:underline inline-flex items-center gap-1">
            Watch the film <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>

      {/* Hero product shot */}
      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 mx-auto max-w-[1200px]">
        <div className="rounded-[40px] p-2 shadow-[0_60px_140px_-30px_rgba(0,0,0,0.25)]" style={{ background: SOFT }}>
          <div className="rounded-[32px] overflow-hidden bg-white aspect-[16/10] grid grid-cols-12 grid-rows-6 gap-3 p-6">
            <div className="col-span-3 row-span-6 rounded-2xl space-y-1.5 p-3" style={{ background: SOFT }}>
              <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: APPLE_GRAY }}>Workspace</div>
              {["Dashboard", "Pipeline", "Inbox", "Campaigns", "Reports", "Settings"].map((x, i) => (
                <div key={x} className={`text-sm px-3 py-2 rounded-xl ${i === 0 ? "bg-[#0066cc] text-white font-medium" : ""}`}>{x}</div>
              ))}
            </div>
            <div className="col-span-9 row-span-2 rounded-2xl p-5" style={{ background: SOFT }}>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: APPLE_GRAY }}>This Quarter</div>
                  <div className="mt-1 text-4xl font-semibold tracking-tight">RM 4.28M</div>
                  <div className="text-xs mt-1" style={{ color: APPLE_GRAY }}>↑ 18.4% vs Q1</div>
                </div>
                <div className="h-12 flex items-end gap-1.5">
                  {[40, 60, 35, 80, 55, 90, 70, 100, 85].map((h, i) => (
                    <div key={i} className="w-2 rounded-t" style={{ background: APPLE_BLUE, height: `${h}%`, opacity: 0.4 + i * 0.07 }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-9 row-span-4 rounded-2xl p-5" style={{ background: SOFT }}>
              <div className="text-[10px] uppercase tracking-wider mb-3" style={{ color: APPLE_GRAY }}>Active deals</div>
              {[["FGV Holdings", "Negotiation", "RM 480k"], ["Singtel", "Proposal", "RM 220k"], ["Nando's Asia", "Discovery", "RM 95k"], ["Estate 123", "Closed Won", "RM 310k"]].map((d, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0">
                  <span className="text-sm font-medium">{d[0]}</span>
                  <span className="text-xs" style={{ color: APPLE_GRAY }}>{d[1]}</span>
                  <span className="text-sm font-semibold">{d[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  const logos = ["FGV Holdings", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Astro"];
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="text-[12px] tracking-wide mb-6" style={{ color: APPLE_GRAY }}>
          Trusted by 247 enterprises across Asia-Pacific
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-base font-medium" style={{ color: APPLE_GRAY }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-5xl md:text-7xl leading-[0.95] tracking-[-0.045em]">
            Get to know Claritas.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-3">
          {/* Big AI tile */}
          <div className="col-span-12 md:col-span-7 row-span-2 rounded-3xl p-10 relative overflow-hidden min-h-[480px] flex flex-col justify-end" style={{ background: SOFT }}>
            <div className="absolute top-10 right-10 h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="relative">
              <div className="text-[13px] font-semibold mb-2" style={{ color: APPLE_BLUE }}>AI Agent</div>
              <h3 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                Drafts the email.<br />
                <span style={{ color: APPLE_GRAY }}>Books the call.<br />Asks first.</span>
              </h3>
              <p className="mt-5 text-lg max-w-md" style={{ color: APPLE_GRAY }}>
                Claritas AI runs in the same runtime as your data. Sub-100ms. Always proposes before it acts. You stay in control.
              </p>
              <Link href="#" className="mt-6 inline-flex items-center gap-1.5 text-[#0066cc] font-medium">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Speed */}
          <div className="col-span-12 md:col-span-5 rounded-3xl p-10 relative overflow-hidden min-h-[230px] flex flex-col justify-between" style={{ background: "#0a0a0a", color: "white" }}>
            <Zap className="h-7 w-7 text-emerald-400" />
            <div>
              <div className="text-7xl font-semibold tracking-[-0.04em] text-emerald-400">47ms</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">p99 query latency</h3>
              <p className="mt-2 text-sm text-white/60 max-w-xs">Industry median: 340ms. Your team feels the difference on every click.</p>
            </div>
          </div>

          {/* Renewal */}
          <div className="col-span-12 md:col-span-5 rounded-3xl p-10 relative overflow-hidden min-h-[230px] flex flex-col justify-between" style={{ background: SOFT }}>
            <BarChart3 className="h-7 w-7 text-[#0066cc]" />
            <div>
              <div className="text-7xl font-semibold tracking-[-0.04em]" style={{ color: INK }}>98.4%</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Annual renewal rate</h3>
              <p className="mt-2 text-sm" style={{ color: APPLE_GRAY }}>Audited by Ernst &amp; Young. Five years running.</p>
            </div>
          </div>

          {/* Marketing */}
          <div className="col-span-12 md:col-span-4 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)" }}>
            <Users className="h-7 w-7" style={{ color: INK }} />
            <div>
              <div className="text-[12px] font-semibold mb-1" style={{ color: INK }}>Marketing</div>
              <h3 className="text-2xl font-semibold tracking-tight">Audiences drawn from one record.</h3>
              <p className="mt-2 text-sm" style={{ color: "#42361b" }}>Every conversation, every channel, one customer.</p>
            </div>
          </div>

          {/* Sales */}
          <div className="col-span-12 md:col-span-4 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)" }}>
            <Workflow className="h-7 w-7" style={{ color: INK }} />
            <div>
              <div className="text-[12px] font-semibold mb-1" style={{ color: INK }}>Sales</div>
              <h3 className="text-2xl font-semibold tracking-tight">Pipeline as a discipline, not a guess.</h3>
              <p className="mt-2 text-sm" style={{ color: "#1e3a5f" }}>Forecasts that hold up in any board meeting.</p>
            </div>
          </div>

          {/* Service */}
          <div className="col-span-12 md:col-span-4 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #d1fae5 0%, #6ee7b7 100%)" }}>
            <Database className="h-7 w-7" style={{ color: INK }} />
            <div>
              <div className="text-[12px] font-semibold mb-1" style={{ color: INK }}>Service</div>
              <h3 className="text-2xl font-semibold tracking-tight">Resolution as the only metric that holds.</h3>
              <p className="mt-2 text-sm" style={{ color: "#064e3b" }}>Every ticket, customer, history — one timeline.</p>
            </div>
          </div>

          {/* Trust + integrations row */}
          <div className="col-span-12 md:col-span-7 rounded-3xl p-10 min-h-[200px] flex items-center justify-between gap-8" style={{ background: SOFT }}>
            <div>
              <Shield className="h-7 w-7 mb-3" style={{ color: APPLE_BLUE }} />
              <h3 className="text-2xl font-semibold tracking-tight">SOC 2 · ISO 27001 · PDPA · GDPR</h3>
              <p className="mt-2 text-sm max-w-md" style={{ color: APPLE_GRAY }}>Single tenancy and data residency on enterprise plans. Audited annually. Public reports on request.</p>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider font-bold" style={{ color: APPLE_GRAY }}>
              {["SOC 2", "ISO 27001", "PDPA", "GDPR"].map((b) => (
                <span key={b} className="border border-black/15 px-3 py-2 rounded-lg">{b}</span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 rounded-3xl p-10 min-h-[200px]" style={{ background: SOFT }}>
            <div className="text-[12px] font-semibold mb-2" style={{ color: APPLE_BLUE }}>Integrations</div>
            <h3 className="text-2xl font-semibold tracking-tight">150+ native connectors.</h3>
            <p className="mt-2 text-sm" style={{ color: APPLE_GRAY }}>Stripe · Slack · Xero · WhatsApp · HubSpot · Salesforce · Zendesk · Notion — and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeepCustomer() {
  return (
    <section className="px-6 py-32" style={{ background: SOFT }}>
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="text-[13px] font-semibold mb-3" style={{ color: APPLE_BLUE }}>Customer story</div>
        <h2 className="font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.04em] max-w-3xl mx-auto">
          &ldquo;We replaced four legacy systems with one Claritas instance.&rdquo;
        </h2>
        <p className="mt-7 text-xl font-medium max-w-xl mx-auto" style={{ color: APPLE_GRAY }}>
          Renewals haven&apos;t been this easy in twenty years — and our forecast accuracy is the best it has ever been.
        </p>
        <div className="mt-10 inline-flex items-center gap-3">
          <div className="h-12 w-12 rounded-full grid place-items-center text-sm font-bold text-white" style={{ background: APPLE_BLUE }}>SW</div>
          <div className="text-left">
            <div className="font-semibold">Datin Sara Wahid</div>
            <div className="text-sm" style={{ color: APPLE_GRAY }}>Group COO · FGV Holdings</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { n: "Growth", p: "RM 49", per: "/seat/month", cta: "Start free" },
    { n: "Scale", p: "RM 99", per: "/seat/month", cta: "Start free", featured: true },
    { n: "Enterprise", p: "Custom", per: "annual contract", cta: "Talk to us" },
  ];
  return (
    <section className="px-6 py-32 text-center">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.04em]">
          Pick a plan. <span style={{ color: APPLE_GRAY }}>Start free.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-3">
          {tiers.map((t) => (
            <div key={t.n} className={`rounded-3xl p-10 text-left ${t.featured ? "border-2 border-[#0066cc]" : ""}`} style={{ background: SOFT }}>
              <div className="font-semibold text-xl">{t.n}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">{t.p}</span>
                <span className="text-sm" style={{ color: APPLE_GRAY }}>{t.per}</span>
              </div>
              <Link href="#" className={`mt-8 block text-center rounded-full py-3 text-sm font-medium ${t.featured ? "bg-[#0066cc] text-white" : "bg-white border border-black/10"}`}>
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
    <section className="px-6 py-32 text-center" style={{ background: SOFT }}>
      <h2 className="font-semibold text-6xl md:text-8xl leading-[0.95] tracking-[-0.045em] mx-auto max-w-4xl">
        Get Claritas. <span style={{ color: APPLE_GRAY }}>Today.</span>
      </h2>
      <p className="mt-7 text-2xl font-medium max-w-xl mx-auto" style={{ color: INK }}>
        Free for thirty days. Migration included for enterprise.
      </p>
      <div className="mt-9 flex items-center justify-center gap-3">
        <Link href="#" className="bg-[#0066cc] text-white px-7 py-3 rounded-full text-[15px] font-medium">Buy Claritas →</Link>
        <Link href="#" className="border border-black/15 px-7 py-3 rounded-full text-[15px] font-medium">Talk to sales</Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-black/5 text-xs" style={{ color: APPLE_GRAY }}>
      <div className="mx-auto max-w-[1100px] px-6 py-12">
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
          <span>V22 · Bento</span>
        </div>
      </div>
    </footer>
  );
}
