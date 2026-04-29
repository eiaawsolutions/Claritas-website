"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Zap, Shield, Users, BarChart3 } from "lucide-react";

/* ──────────────────────────────────────────────
   V3 — QUARTZ
   Glassmorphism SaaS · pastel auroras + frosted cards
   Inter Display · soft shadows · Stripe / Linear polish
   Tone: confident-modern, optimistic, product-led
   ────────────────────────────────────────────── */

export default function QuartzPage() {
  return (
    <div className="bg-[#fafbff] text-slate-900 font-sans antialiased relative overflow-x-hidden">
      <Aurora />
      <Nav />
      <Hero />
      <Logos />
      <FeatureGrid />
      <Workflow />
      <Stats />
      <CTA />
      <Foot />
    </div>
  );
}

function Aurora() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, #c4b5fd 0%, transparent 70%)" }} />
      <div className="absolute top-[20%] -right-40 h-[700px] w-[700px] rounded-full blur-[140px] opacity-35"
        style={{ background: "radial-gradient(circle, #a5f3fc 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-[30%] h-[500px] w-[500px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, #fbcfe8 0%, transparent 70%)" }} />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-50 px-4 pt-4">
      <div className="mx-auto max-w-[1400px] backdrop-blur-xl bg-white/60 border border-white/80 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <div className="px-6 h-16 flex items-center justify-between">
          <Link href="/versions/3" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 grid place-items-center text-white text-sm font-bold">C</span>
            <span className="font-semibold tracking-tight">Claritas</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <Link href="#" className="hover:text-slate-900">Product</Link>
            <Link href="#" className="hover:text-slate-900">Solutions</Link>
            <Link href="#" className="hover:text-slate-900">Customers</Link>
            <Link href="#" className="hover:text-slate-900">Pricing</Link>
            <Link href="#" className="hover:text-slate-900">Docs</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#" className="hidden md:inline text-sm text-slate-600 hover:text-slate-900">Sign in</Link>
            <Link href="#" className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 inline-flex items-center gap-1.5">
              Start free <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-20 pb-24">
      <div className="mx-auto max-w-[1200px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 backdrop-blur px-4 py-1.5 text-xs text-slate-700 mb-8">
          <Sparkles className="h-3.5 w-3.5 text-violet-500" />
          New — Claritas AI Agent for revenue ops
          <ArrowRight className="h-3 w-3 opacity-50" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95]">
          The CRM your team
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            actually opens.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Claritas unifies marketing, sales, and service into one fast, beautifully simple platform — built for teams who would rather close than configure.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="#" className="bg-slate-900 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-slate-800 transition inline-flex items-center gap-2">
            Start free for 30 days <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="bg-white/80 backdrop-blur border border-white px-7 py-3.5 rounded-xl font-medium hover:bg-white transition">
            Watch the 2-min demo
          </Link>
        </motion.div>

        {/* Floating product mock */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-20 relative">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_30px_80px_-20px_rgba(99,102,241,0.3)] p-2">
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white aspect-[16/9] grid grid-cols-12 grid-rows-6 gap-3 p-6 text-left">
              {/* Sidebar */}
              <div className="col-span-3 row-span-6 bg-white/80 rounded-xl p-4 space-y-3 border border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Workspace</div>
                {["Pipeline", "Inbox", "Campaigns", "Reports", "Settings"].map((x, i) => (
                  <div key={x} className={`text-sm px-3 py-2 rounded-lg ${i === 0 ? "bg-violet-100 text-violet-700 font-medium" : "text-slate-600"}`}>{x}</div>
                ))}
              </div>
              {/* Main panel */}
              <div className="col-span-9 row-span-2 bg-white/80 rounded-xl p-4 border border-slate-100">
                <div className="text-xs text-slate-400 uppercase tracking-wider">This Quarter</div>
                <div className="mt-2 flex items-end gap-6">
                  <div><div className="text-3xl font-semibold">RM 4.2M</div><div className="text-xs text-emerald-600 mt-1">↑ 18.4%</div></div>
                  <div><div className="text-3xl font-semibold">142</div><div className="text-xs text-slate-500 mt-1">deals closed</div></div>
                  <div className="ml-auto h-12 flex-1 max-w-xs flex items-end gap-1">
                    {[40, 60, 35, 80, 55, 90, 70, 100, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-violet-300 to-cyan-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-6 row-span-4 bg-white/80 rounded-xl p-4 border border-slate-100">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Active deals</div>
                {["FGV Holdings · RM 480k", "Singtel · RM 220k", "Nando's · RM 95k", "Estate 123 · RM 310k"].map((d, i) => (
                  <div key={d} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <span className="text-sm">{d}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${i % 2 ? "bg-cyan-100 text-cyan-700" : "bg-violet-100 text-violet-700"}`}>{i % 2 ? "Negotiation" : "Proposal"}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-3 row-span-4 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl p-4 text-white flex flex-col">
                <Sparkles className="h-5 w-5 opacity-80 mb-3" />
                <div className="text-xs uppercase tracking-wider opacity-80">AI Agent</div>
                <div className="mt-2 text-sm leading-relaxed">3 deals at risk this week. Want me to draft outreach?</div>
                <div className="mt-auto bg-white/20 rounded-lg px-3 py-1.5 text-xs">Yes, draft now →</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-8">
          Trusted by 500+ teams across Asia-Pacific
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate-400">
          {["FGV", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Vistage"].map((n) => (
            <span key={n} className="text-lg font-semibold tracking-tight hover:text-slate-700 transition">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    { icon: Users, title: "Unified contact graph", desc: "One profile per customer, automatically merged from every channel.", c: "from-violet-500 to-purple-500" },
    { icon: BarChart3, title: "Forecasts that hold", desc: "ML-assisted pipeline scoring with explainable confidence bands.", c: "from-cyan-500 to-blue-500" },
    { icon: Zap, title: "Workflows in seconds", desc: "Build automations with natural language. No flowchart required.", c: "from-fuchsia-500 to-pink-500" },
    { icon: Layers, title: "Native integrations", desc: "150+ pre-built connectors. Stripe, Slack, Xero, WhatsApp, more.", c: "from-emerald-500 to-teal-500" },
    { icon: Shield, title: "Enterprise security", desc: "SOC 2 Type II, ISO 27001, PDPA. Single tenancy on request.", c: "from-amber-500 to-orange-500" },
    { icon: Sparkles, title: "AI co-pilot built in", desc: "Drafts outreach, summarises calls, scores leads — natively, not bolted on.", c: "from-rose-500 to-red-500" },
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.24em] text-violet-600 mb-4">The platform</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">Everything your revenue org needs.<br />Nothing it doesn&apos;t.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group rounded-2xl bg-white/70 backdrop-blur-xl border border-white p-7 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)] transition">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${f.c} grid place-items-center text-white mb-5`}>
                <f.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-semibold tracking-tight">{f.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1300px] rounded-3xl bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 p-10 md:p-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        </div>
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300 mb-4">Workflow Studio</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
              Describe the workflow.<br />Claritas builds it.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Type what you want to happen. Our AI assembles the trigger, conditions, and actions — then asks you to approve before it goes live.
            </p>
            <Link href="#" className="mt-8 inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium">
              Try Workflow Studio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-cyan-300 mb-2">// You said:</div>
            <div className="text-white">When a deal moves to Won, send a thank-you email, create a Stripe customer, and notify the AE in Slack.</div>
            <div className="mt-6 text-cyan-300 mb-2">// Claritas built:</div>
            <div className="space-y-2">
              {[
                ["Trigger", "Deal stage → Won", "violet"],
                ["Action 1", "Send email · template/thanks", "cyan"],
                ["Action 2", "Stripe · createCustomer", "fuchsia"],
                ["Action 3", "Slack · DM @owner", "emerald"],
              ].map(([k, v, c]) => (
                <div key={k} className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-md bg-${c}-500/20 text-${c}-300`}>{k}</span>
                  <span className="text-white/80">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "4.2×", l: "Faster pipeline velocity" },
    { v: "62%", l: "Less time on admin" },
    { v: "98.4%", l: "Customer renewal rate" },
    { v: "11min", l: "Median time-to-value" },
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1200px] grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white p-8 text-center">
            <div className="text-5xl font-semibold tracking-[-0.03em] bg-gradient-to-br from-violet-600 to-cyan-500 bg-clip-text text-transparent">{s.v}</div>
            <div className="mt-3 text-sm text-slate-600">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1100px] rounded-3xl bg-white/80 backdrop-blur-xl border border-white p-12 md:p-20 text-center shadow-[0_30px_80px_-30px_rgba(99,102,241,0.3)]">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight">
          Start free.<br />Scale when you&apos;re ready.
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto">
          30 days, all features, every integration. No credit card. White-glove onboarding included from your first call.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:bg-slate-800">
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="border border-slate-300 text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-slate-50">
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="font-semibold">Claritas</span>
          </div>
          <p className="mt-4 text-slate-500 max-w-xs">The CRM your team actually opens.</p>
        </div>
        {[
          { h: "Product", l: ["Pipeline", "Inbox", "Campaigns", "AI Agent", "Pricing"] },
          { h: "Solutions", l: ["Sales", "Marketing", "Service", "Enterprise"] },
          { h: "Company", l: ["About", "Customers", "Press", "Careers"] },
          { h: "Resources", l: ["Docs", "Changelog", "Status", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-semibold text-slate-900">{c.h}</div>
            <ul className="mt-3 space-y-2 text-slate-500">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-slate-900">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-[1400px] px-6 py-6 flex justify-between text-xs text-slate-500">
          <span>© Claritas Inc. 2026</span>
          <span>V3 · Quartz</span>
        </div>
      </div>
    </footer>
  );
}
