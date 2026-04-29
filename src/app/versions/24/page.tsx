"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, Zap, Shield, Workflow } from "lucide-react";

/* ──────────────────────────────────────────────
   V24 — ATRIUM DARK
   Standard homepage architecture executed at Linear/Framer agency tier.
   Dark canvas, tasteful motion (parallax + scroll-driven, no gimmicks),
   premium polish. Every section serves the buyer's standard journey.
   For: technical buyers + design-conscious enterprise CMOs.
   ────────────────────────────────────────────── */

const VIOLET = "#a78bfa";
const CYAN = "#22d3ee";

export default function AtriumDarkPage() {
  return (
    <div className="bg-[#08080c] text-white relative overflow-x-hidden" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Aurora />
      <Nav />
      <Hero />
      <TrustBar />
      <Capabilities />
      <Customer />
      <Numbers />
      <Pricing />
      <CTA />
      <Foot />
    </div>
  );
}

function Aurora() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-[#08080c]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1400px] rounded-full opacity-30 blur-[160px]"
        style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.7) 0%, rgba(34,211,238,0.4) 50%, transparent 70%)" }} />
      <div className="absolute top-[60%] -left-40 h-[500px] w-[500px] rounded-full opacity-25 blur-[140px] bg-fuchsia-600/40" />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 px-4 pt-3">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5">
        <Link href="/versions/24" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <div className="h-7 w-7 rounded-md grid place-items-center"
            style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}>
            <span className="text-[#08080c] text-sm font-bold">C</span>
          </div>
          Claritas
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {["Platform", "Customers", "Pricing", "Resources", "Company"].map((x) => (
            <Link key={x} href="#" className="hover:text-white transition">{x}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="#" className="hidden md:inline text-sm text-white/70 hover:text-white">Sign in</Link>
          <Link href="#" className="text-sm text-[#08080c] px-4 py-2 rounded-full font-medium hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}>
            Get started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="px-6 pt-20 pb-32 text-center">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-[1300px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-4 py-1.5 text-xs text-white/80 mb-10">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          New — Claritas 4.2 with native AI agents
          <ArrowUpRight className="h-3 w-3 opacity-50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-semibold leading-[0.92] tracking-[-0.045em] text-6xl md:text-7xl lg:text-[8.5rem]"
        >
          The unified <br />customer platform <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            built for the way
          </span>
          <br />you actually sell.
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-10 text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
          Marketing, sales, and service on a single source of truth. Trusted by 247 enterprises across Asia-Pacific. AI-native, sub-50ms, integrated by design.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="#" className="text-[#08080c] px-8 py-4 rounded-full font-medium hover:opacity-90 inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}>
            Start free trial <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="bg-white/[0.06] backdrop-blur border border-white/15 px-8 py-4 rounded-full font-medium hover:bg-white/10">
            Book enterprise demo
          </Link>
        </motion.div>

        {/* Hero product surface */}
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 mx-auto max-w-5xl">
          <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_50px_120px_-30px_rgba(167,139,250,0.4)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            <div className="grid grid-cols-12 grid-rows-5 gap-2 p-3 aspect-[16/10]">
              <div className="col-span-3 row-span-5 rounded-2xl bg-white/[0.04] border border-white/5 p-4 space-y-2">
                <div className="text-[10px] uppercase text-white/40 tracking-wider mb-2">Workspace</div>
                {["Dashboard", "Pipeline", "Inbox", "Campaigns", "Reports", "AI Agents", "Settings"].map((x, i) => (
                  <div key={x} className={`text-xs px-3 py-2 rounded-lg ${i === 0 ? "bg-gradient-to-r from-violet-500/30 to-cyan-500/30 text-white" : "text-white/60"}`}>{x}</div>
                ))}
              </div>
              <div className="col-span-9 row-span-2 rounded-2xl bg-white/[0.04] border border-white/5 p-5">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] uppercase text-white/40 tracking-wider">Pipeline · Q2</div>
                    <div className="mt-1 text-3xl font-bold">RM 4.28M <span className="text-emerald-400 text-sm font-normal">↑ 18.4%</span></div>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[40, 60, 35, 80, 55, 90, 70, 100, 85, 65, 88, 72].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-violet-500/40 to-cyan-400/80 w-1.5" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl bg-white/[0.04] border border-white/5 p-4">
                <div className="text-[10px] uppercase text-white/40 tracking-wider mb-3">Active deals</div>
                {[["FGV Holdings", "RM 480k"], ["Singtel", "RM 2.1M"], ["Nando's", "RM 95k"], ["Estate 123", "RM 310k"]].map((d) => (
                  <div key={d[0]} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-xs">{d[0]}</span>
                    <span className="text-[10px] text-white/40">{d[1]}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-4 row-span-3 rounded-2xl bg-gradient-to-br from-purple-600/30 to-fuchsia-500/30 border border-white/10 p-4 backdrop-blur">
                <Sparkles className="h-4 w-4 text-cyan-300 mb-2" />
                <div className="text-[10px] uppercase text-white/60 tracking-wider">AI agent</div>
                <div className="mt-2 text-sm">Drafted 3 follow-ups for stalled deals. Awaiting your review.</div>
                <div className="mt-3 bg-white/15 rounded-lg px-3 py-1.5 text-xs inline-block">Review →</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="px-6 py-12 border-y border-white/10">
      <div className="mx-auto max-w-[1300px] text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] text-white/40 mb-7">Trusted by 247 enterprises across Asia-Pacific</div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {["FGV Holdings", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Astro", "Maxis"].map((n) => (
            <span key={n} className="text-base font-medium text-white/45 hover:text-white transition tracking-tight">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { i: Sparkles, t: "AI Agent, native", c: "Drafts emails, scores leads, summarises calls. Built into the runtime, not bolted on. Sub-100ms. Always asks before it acts.", g: "from-violet-500 to-fuchsia-500" },
    { i: Workflow, t: "Workflow Studio", c: "Describe what you want in plain English. Claritas wires the trigger, conditions, and actions — then asks you to approve before it ships.", g: "from-cyan-500 to-blue-500" },
    { i: Zap, t: "Sub-50ms responses", c: "Every interaction. p99 publicly benchmarked. Industry median: 340ms. Your team feels the difference on every click, all day.", g: "from-emerald-500 to-teal-500" },
    { i: Shield, t: "Enterprise security", c: "SOC 2 · ISO 27001 · PDPA · GDPR. Single tenancy and data residency on enterprise plans. Audited annually by EY Singapore.", g: "from-amber-500 to-orange-500" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300 mb-5">Capabilities</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
            Everything your revenue org needs.<br />
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">Nothing it doesn&apos;t.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 hover:bg-white/[0.06] hover:border-white/20 transition overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-br ${it.g} opacity-15 blur-3xl group-hover:opacity-30 transition`} />
              <div className={`relative h-12 w-12 rounded-2xl bg-gradient-to-br ${it.g} grid place-items-center mb-6`}>
                <it.i className="h-5 w-5 text-white" />
              </div>
              <h3 className="relative text-2xl font-semibold tracking-tight">{it.t}</h3>
              <p className="relative mt-3 text-base text-white/60 leading-relaxed">{it.c}</p>
              <Link href="#" className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Customer() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1300px]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10 p-12 md:p-20 text-center backdrop-blur">
          <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300 mb-8">Customer story · FGV Holdings</div>
          <blockquote className="text-3xl md:text-5xl font-semibold leading-[1.2] tracking-[-0.02em] max-w-4xl mx-auto">
            &ldquo;We replaced four legacy systems with one Claritas instance. Renewals haven&apos;t been this easy in twenty years.&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-12 w-12 rounded-full grid place-items-center text-sm font-bold text-[#08080c]" style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}>SW</div>
            <div className="text-left">
              <div className="font-medium">Datin Sara Wahid</div>
              <div className="text-sm text-white/55">Group COO · FGV Holdings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1300px] grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { v: "247", l: "Enterprise customers" },
          { v: "98.4%", l: "Annual renewal" },
          { v: "47ms", l: "p99 latency" },
          { v: "99.997%", l: "Uptime, 90d" },
        ].map((s) => (
          <div key={s.l}>
            <div className="font-semibold text-6xl md:text-7xl tracking-[-0.04em] bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">{s.v}</div>
            <div className="mt-2 text-sm text-white/60">{s.l}</div>
          </div>
        ))}
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
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300 mb-5">Pricing</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em]">Simple. Scales with you.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.n} className={`relative rounded-3xl p-8 backdrop-blur-xl ${t.featured ? "bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-cyan-500/15 border-2 border-violet-400/40" : "bg-white/[0.03] border border-white/10"}`}>
              {t.featured && <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-wider text-[#08080c] px-3 py-1 rounded-full font-bold" style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}>Most chosen</div>}
              <div className="text-xl font-semibold">{t.n}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">{t.p}</span>
                <span className="text-sm text-white/50">{t.per}</span>
              </div>
              <Link href="#" className={`mt-8 block text-center rounded-full py-3 text-sm font-medium ${t.featured ? "text-[#08080c]" : "bg-white/10 hover:bg-white/15"}`}
                style={t.featured ? { background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" } : {}}>
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
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1100px] rounded-3xl border border-white/10 p-12 md:p-20 text-center bg-gradient-to-br from-violet-600/15 via-fuchsia-500/10 to-cyan-500/15 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
            The new standard,<br />
            <span className="bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">in 30 days.</span>
          </h2>
          <p className="mt-8 text-lg text-white/65 max-w-xl mx-auto">
            Free trial. White-glove onboarding. Migration from your current CRM included for enterprise.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#" className="text-[#08080c] px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}>
              Start free trial <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="#" className="bg-white/[0.06] border border-white/15 px-8 py-4 rounded-full font-medium hover:bg-white/10">
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
      <div className="mx-auto max-w-[1400px] px-6 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-semibold">
            <div className="h-7 w-7 rounded-md" style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }} />
            Claritas
          </div>
          <p className="mt-4 text-white/55 max-w-xs">The new standard for unified customer platforms.</p>
        </div>
        {[
          { h: "Platform", l: ["Marketing", "Sales", "Service", "AI Agent", "Pricing"] },
          { h: "Customers", l: ["Case studies", "Industries", "Migration"] },
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
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex justify-between text-xs text-white/45">
          <span>© Claritas Inc. 2026</span>
          <span>V24 · Atrium Dark</span>
        </div>
      </div>
    </footer>
  );
}
