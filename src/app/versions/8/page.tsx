"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Lock, Workflow, Brain, Database, Sparkles } from "lucide-react";

/* ──────────────────────────────────────────────
   V8 — AURORA
   Modern enterprise · vibrant gradient hero · glassy cards
   Bold sans display · Vercel / Framer scale energy
   Tone: ambitious, confident, "the new standard for enterprise CRM"
   ────────────────────────────────────────────── */

export default function AuroraPage() {
  return (
    <div className="bg-[#0b0d1a] text-white antialiased relative overflow-x-hidden" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Bg />
      <Nav />
      <Hero />
      <Trusted />
      <Capabilities />
      <Showcase />
      <Pricing />
      <CTA />
      <Foot />
    </div>
  );
}

function Bg() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d1a] via-[#0d1024] to-[#0b0d1a]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] rounded-full opacity-50 blur-[140px]"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.5) 0%, rgba(6,182,212,0.3) 50%, transparent 70%)" }} />
      <div className="absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-[120px] bg-fuchsia-600/40" />
      <div className="absolute top-[60%] -right-40 h-[500px] w-[500px] rounded-full opacity-40 blur-[120px] bg-cyan-500/40" />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-12 z-40 px-4 pt-3">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5">
        <Link href="/versions/8" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400" />
            <div className="absolute inset-[2px] rounded-md bg-[#0b0d1a] grid place-items-center text-sm font-bold">C</div>
          </div>
          <span className="font-semibold tracking-tight">Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          <Link href="#" className="hover:text-white">Platform</Link>
          <Link href="#" className="hover:text-white">Solutions</Link>
          <Link href="#" className="hover:text-white">Customers</Link>
          <Link href="#" className="hover:text-white">Pricing</Link>
          <Link href="#" className="hover:text-white">Resources</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="#" className="hidden md:inline text-sm text-white/70 hover:text-white">Sign in</Link>
          <Link href="#" className="text-sm bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 inline-flex items-center gap-1.5">
            Start free <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-20 pb-32 text-center">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-4 py-1.5 text-xs text-white/80 mb-10">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Series B · 247 enterprise customers · 99.997% uptime
          <ArrowRight className="h-3 w-3 opacity-50" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.05em] leading-[0.92]">
          <span className="block">The new standard</span>
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">for enterprise CRM.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-10 text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
          Built for revenue orgs that have outgrown the legacy CRM and won&apos;t settle for the next legacy CRM.
          Claritas is fast, AI-native, and integrated by design.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="#" className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="bg-white/[0.06] backdrop-blur border border-white/15 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition">
            Book enterprise demo
          </Link>
        </motion.div>

        {/* Hero product mock */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 mx-auto max-w-5xl">
          <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_50px_120px_-30px_rgba(168,85,247,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            <div className="grid grid-cols-12 grid-rows-5 gap-2 p-3 aspect-[16/10]">
              <div className="col-span-3 row-span-5 rounded-2xl bg-white/[0.04] border border-white/5 p-4 space-y-2">
                <div className="text-[10px] uppercase text-white/40 tracking-wider mb-2">Workspace</div>
                {["Dashboard", "Pipeline", "Inbox", "Campaigns", "Reports", "AI Agents", "Settings"].map((x, i) => (
                  <div key={x} className={`text-xs px-3 py-2 rounded-lg ${i === 0 ? "bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-white" : "text-white/60"}`}>{x}</div>
                ))}
              </div>
              <div className="col-span-9 row-span-2 rounded-2xl bg-white/[0.04] border border-white/5 p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-[10px] uppercase text-white/40 tracking-wider">Pipeline this quarter</div>
                    <div className="mt-1 text-3xl font-bold">RM 4.28M <span className="text-emerald-400 text-sm font-normal">↑ 18.4%</span></div>
                  </div>
                  <div className="text-xs text-white/50">142 deals · 84 owners</div>
                </div>
                <div className="h-12 flex items-end gap-1">
                  {[40, 60, 35, 80, 55, 90, 70, 100, 85, 65, 88, 72].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-purple-500/40 to-cyan-400/80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl bg-white/[0.04] border border-white/5 p-4">
                <div className="text-[10px] uppercase text-white/40 tracking-wider mb-3">Active deals · Stage</div>
                {["FGV Holdings · Negotiation", "Singtel · Proposal", "Nando's · Discovery", "Estate 123 · Closed Won"].map((d) => (
                  <div key={d} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-xs">{d}</span>
                    <span className="text-[10px] text-white/40">RM 480k</span>
                  </div>
                ))}
              </div>
              <div className="col-span-4 row-span-3 rounded-2xl bg-gradient-to-br from-purple-600/30 to-fuchsia-500/30 border border-white/10 p-4 backdrop-blur">
                <Brain className="h-4 w-4 text-cyan-300 mb-2" />
                <div className="text-[10px] uppercase text-white/60 tracking-wider">AI agent · Outreach</div>
                <div className="mt-2 text-sm">Drafted 3 follow-ups for stalled deals. Awaiting your review.</div>
                <div className="mt-3 bg-white/15 rounded-lg px-3 py-1.5 text-xs inline-block">Review →</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <div className="text-xs uppercase tracking-[0.32em] text-white/40 mb-8">
          Trusted by revenue orgs at scale
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {["FGV Holdings", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Vistage", "Astro"].map((n) => (
            <span key={n} className="text-xl font-semibold tracking-tight text-white/40 hover:text-white/80 transition">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { i: Brain, t: "AI Agents, native", c: "Drafts emails, scores leads, summarises calls. Built into the core, not bolted onto the side.", g: "from-purple-500 to-fuchsia-500" },
    { i: Workflow, t: "No-code workflows", c: "Describe what you want in English. Claritas wires the trigger, conditions, and actions.", g: "from-cyan-500 to-blue-500" },
    { i: Database, t: "Unified customer graph", c: "Every interaction, every channel, one record per customer. Auto-merged. Always current.", g: "from-emerald-500 to-teal-500" },
    { i: Globe, t: "150+ integrations", c: "Stripe · Slack · Xero · WhatsApp · HubSpot · Salesforce · Zendesk · Notion · and more.", g: "from-amber-500 to-orange-500" },
    { i: Lock, t: "Enterprise security", c: "SOC 2 · ISO 27001 · PDPA · GDPR. Private tenancy. Data residency on request.", g: "from-rose-500 to-pink-500" },
    { i: Sparkles, t: "Built for scale", c: "Powering teams from 5 to 5,000 seats. p99 query latency under 50ms. Always.", g: "from-violet-500 to-indigo-500" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300 mb-4">Capabilities</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-tight">
            One platform.<br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">Every revenue motion.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-7 hover:bg-white/[0.06] hover:border-white/20 transition overflow-hidden">
              <div className={`absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${it.g} opacity-20 blur-3xl group-hover:opacity-40 transition`} />
              <div className={`relative h-11 w-11 rounded-xl bg-gradient-to-br ${it.g} grid place-items-center mb-5`}>
                <it.i className="h-5 w-5 text-white" />
              </div>
              <div className="relative text-xl font-semibold tracking-tight">{it.t}</div>
              <p className="relative mt-2 text-sm text-white/60 leading-relaxed">{it.c}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const cases = [
    { co: "FGV Holdings", q: "Claritas replaced four legacy systems and gave us forecast accuracy we could finally show the board.", role: "Group Head of Revenue" },
    { co: "Singtel Enterprise", q: "We onboarded 1,400 reps across 6 markets in 11 weeks. The previous CRM took 11 months.", role: "VP Sales Ops, APAC" },
    { co: "Estate 123", q: "We did not need another database. We needed a system that could keep up with the way we actually sell.", role: "Founder & CEO" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-cyan-300 mb-4">Customer outcomes</div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-[-0.04em]">
              The teams that <span className="bg-gradient-to-r from-fuchsia-400 to-purple-300 bg-clip-text text-transparent">picked Claritas</span>.
            </h2>
          </div>
          <p className="text-lg text-white/60 leading-relaxed max-w-md md:justify-self-end">
            We onboard fewer than 100 enterprise customers each year. Each comes from a careful mutual selection.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div key={c.co} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-7 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-white/40">{c.co}</div>
              <p className="mt-5 text-lg leading-relaxed font-medium">&ldquo;{c.q}&rdquo;</p>
              <div className="mt-auto pt-6 text-xs text-white/50">{c.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { n: "Growth", p: "RM 49", per: "/seat/month", desc: "For revenue teams getting serious.", feats: ["Unlimited contacts", "Pipeline + Inbox", "20+ integrations", "AI agent · 1,000 actions/mo", "Email support"], cta: "Start free", highlight: false },
    { n: "Scale", p: "RM 99", per: "/seat/month", desc: "For ops-led teams scaling across markets.", feats: ["Everything in Growth", "150+ integrations", "AI agent · unlimited", "Workflow studio", "Priority support · SLA"], cta: "Start free", highlight: true },
    { n: "Enterprise", p: "Custom", per: "annual contract", desc: "For institutions with serious requirements.", feats: ["Everything in Scale", "Single tenancy + data residency", "SAML SSO + SCIM", "Dedicated CSM", "Custom legal + procurement"], cta: "Talk to us", highlight: false },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.32em] text-cyan-300 mb-4">Pricing</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.04em]">Simple, scales with you.</h2>
          <p className="mt-5 text-white/60">All plans include unlimited workspaces, audit logs, and the AI agent.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.n} className={`relative rounded-2xl p-8 ${t.highlight ? "bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-cyan-500/15 border-2 border-purple-400/40" : "bg-white/[0.03] border border-white/10"} backdrop-blur-xl`}>
              {t.highlight && <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-wider bg-gradient-to-r from-purple-500 to-cyan-400 px-3 py-1 rounded-full font-bold">Most popular</div>}
              <div className="text-xl font-semibold">{t.n}</div>
              <div className="mt-1 text-sm text-white/50">{t.desc}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{t.p}</span>
                <span className="text-sm text-white/50">{t.per}</span>
              </div>
              <ul className="mt-7 space-y-3">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="#" className={`mt-8 block text-center rounded-full py-3 text-sm font-medium ${t.highlight ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white" : "bg-white/10 hover:bg-white/15"}`}>
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
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1100px] rounded-3xl border border-white/10 p-12 md:p-20 text-center bg-gradient-to-br from-purple-600/15 via-fuchsia-500/10 to-cyan-500/15 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95]">
            The new standard,<br />
            <span className="bg-gradient-to-r from-purple-300 to-cyan-200 bg-clip-text text-transparent">in 30 days.</span>
          </h2>
          <p className="mt-8 text-lg text-white/65 max-w-xl mx-auto">
            Free trial. White-glove onboarding. Migration from your current CRM included for enterprise.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#" className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2">
              Start free trial <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#" className="bg-white/[0.06] border border-white/15 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10">
              Book enterprise demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold">Claritas</span>
          </div>
          <p className="mt-4 text-white/50 max-w-xs">The new standard for enterprise CRM.</p>
          <div className="mt-6 flex gap-2 text-[10px] uppercase tracking-wider text-white/40">
            <span className="px-2 py-1 border border-white/15 rounded-full">SOC 2</span>
            <span className="px-2 py-1 border border-white/15 rounded-full">ISO 27001</span>
            <span className="px-2 py-1 border border-white/15 rounded-full">PDPA</span>
          </div>
        </div>
        {[
          { h: "Platform", l: ["Pipeline", "Inbox", "AI Agents", "Workflows", "Integrations"] },
          { h: "Solutions", l: ["Sales", "Marketing", "Service", "Enterprise"] },
          { h: "Company", l: ["About", "Customers", "Press", "Careers"] },
          { h: "Resources", l: ["Docs", "Status", "Changelog", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-semibold text-white">{c.h}</div>
            <ul className="mt-3 space-y-2 text-white/50">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-white">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-6 flex justify-between text-xs text-white/40">
          <span>© Claritas Inc. 2026 · Built for the next decade of revenue ops.</span>
          <span>V8 · Aurora</span>
        </div>
      </div>
    </footer>
  );
}
