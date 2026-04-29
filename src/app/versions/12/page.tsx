"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

/* ──────────────────────────────────────────────
   V12 — ORIGAMI
   Paper-craft · soft drop-shadows · tilted asymmetric cards
   White stock + ink + single amber thread + quiet sage thread
   Tone: premium playful, "we take craft seriously, not ourselves"
   ────────────────────────────────────────────── */

const INK = "#0f172a";
const AMBER = "#f59e0b";
const SAGE = "#8a9a7a";
const SOFT = "#fbfbf6";

export default function OrigamiPage() {
  return (
    <div className="bg-white text-[#0f172a]" style={{ fontFamily: "Inter, 'Söhne', system-ui, sans-serif" }}>
      <PaperGrain />
      <Nav />
      <Hero />
      <Cards />
      <Workflow />
      <Voices />
      <Stats />
      <CTA />
      <Foot />
    </div>
  );
}

function PaperGrain() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none opacity-[0.45]"
      style={{
        backgroundImage: "radial-gradient(rgba(15,23,42,0.025) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }} />
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-[1400px] h-16 px-6 flex items-center justify-between">
        <Link href="/versions/12" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rotate-12 rounded-md bg-[#f59e0b]/30" />
            <div className="absolute inset-0 -rotate-3 rounded-md bg-white border border-black/10 grid place-items-center text-sm font-bold">C</div>
          </div>
          <span className="font-semibold tracking-tight text-lg">Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="#" className="hover:text-[#0f172a]">Platform</Link>
          <Link href="#" className="hover:text-[#0f172a]">Solutions</Link>
          <Link href="#" className="hover:text-[#0f172a]">Customers</Link>
          <Link href="#" className="hover:text-[#0f172a]">Studio</Link>
          <Link href="#" className="hover:text-[#0f172a]">Pricing</Link>
        </nav>
        <Link href="#" className="text-sm bg-[#0f172a] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#f59e0b] hover:text-[#0f172a] transition">
          Try Claritas →
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1300px] grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b]/15 text-[#92400e] px-4 py-1.5 text-xs font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Designed in Kuala Lumpur · Loved across Asia-Pacific
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            CRM, but <span className="relative inline-block">
              <span className="relative z-10">folded</span>
              <span aria-hidden className="absolute -bottom-1 left-0 right-0 h-3 bg-[#f59e0b]/40 -z-0" />
            </span>{" "}
            into something <em className="italic font-light" style={{ color: SAGE }}>actually beautiful.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-8 text-lg text-slate-600 max-w-xl leading-relaxed">
            Claritas takes the most thankless software your team uses every day and gives it the craft it deserves. No more flat dashboards. No more dead grids. Just the work, well-shaped.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-10 flex gap-3">
            <Link href="#" className="bg-[#0f172a] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#f59e0b] hover:text-[#0f172a] transition inline-flex items-center gap-2">
              Try free for 30 days <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="#" className="border border-black/15 px-7 py-3.5 rounded-full font-medium hover:bg-[#0f172a] hover:text-white transition">
              Watch the 90-second tour
            </Link>
          </motion.div>
        </div>

        {/* Tilted card stack */}
        <div className="lg:col-span-5 relative h-[480px]">
          <motion.div initial={{ opacity: 0, y: 30, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: -8 }} transition={{ duration: 0.8 }}
            className="absolute top-4 left-2 w-72 h-44 rounded-3xl bg-[#0f172a] text-white p-6 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.4)]">
            <div className="text-[10px] uppercase tracking-wider text-white/50 mb-3">Pipeline · Q2</div>
            <div className="text-3xl font-bold">RM 4.28M</div>
            <div className="text-xs mt-1 text-emerald-300">↑ 18.4% vs Q1</div>
            <div className="mt-4 h-8 flex items-end gap-1">
              {[40, 60, 35, 80, 55, 90, 70, 100, 85].map((h, i) => (
                <div key={i} className="w-1.5 rounded-full bg-[#f59e0b]" style={{ height: `${h}%`, opacity: 0.5 + i * 0.05 }} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, rotate: 6 }} animate={{ opacity: 1, y: 0, rotate: 6 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute top-32 right-4 w-72 h-48 rounded-3xl bg-white border border-black/5 p-6 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.2)]">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-full bg-[#f59e0b]/30 grid place-items-center text-xs font-bold">SW</div>
              <div className="text-xs"><div className="font-semibold">Sara W. → FGV</div><div className="text-slate-500">Replied · 2 min ago</div></div>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">&ldquo;Looks great — let&apos;s do the demo Thursday at 10. Will the dashboard show our 12 estates separately?&rdquo;</p>
            <div className="mt-3 inline-block bg-[#0f172a] text-white text-xs px-3 py-1.5 rounded-full">Reply →</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: -4 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-4 left-12 w-80 h-36 rounded-3xl text-[#0f172a] p-6 shadow-[0_30px_60px_-20px_rgba(245,158,11,0.4)]" style={{ background: AMBER }}>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <div className="text-[10px] uppercase tracking-wider font-semibold">AI Agent</div>
            </div>
            <p className="mt-3 text-sm font-medium leading-snug">3 deals stalled this week. I drafted recovery outreach — want to review before send?</p>
            <div className="mt-3 inline-block bg-[#0f172a] text-white text-xs px-3 py-1.5 rounded-full">Yes, review →</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Cards() {
  const items = [
    { e: "Marketing", t: "Campaigns that don't feel like spreadsheets.", c: "Build, send, measure — every audience drawn by hand, every send beautifully composed.", color: AMBER, rotate: "-rotate-1" },
    { e: "Sales", t: "Pipeline that finally moves at your speed.", c: "Drag, drop, close. Forecasts that hold up in any board meeting. AI-assisted, never AI-replaced.", color: INK, rotate: "rotate-1" },
    { e: "Service", t: "Resolution as the only metric that holds.", c: "Every ticket, every customer, every history — in one elegant timeline. Resolve faster, remember longer.", color: SAGE, rotate: "-rotate-1" },
  ];
  return (
    <section className="px-6 py-32" style={{ background: SOFT }}>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: AMBER }}>The Practice</div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-[-0.03em]">
            Three rooms.<br /><em className="italic font-light" style={{ color: SAGE }}>One craft.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 perspective-1000">
          {items.map((it, i) => (
            <motion.article
              key={it.e}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-10 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.25)] hover:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-2 ${i % 2 === 0 ? "md:rotate-[-1.5deg]" : "md:rotate-[1.5deg] md:translate-y-6"}`}
            >
              <div className="absolute -top-3 left-10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold text-white" style={{ background: it.color }}>
                {it.e}
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight leading-tight">{it.t}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{it.c}</p>
              <Link href="#" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold border-b border-black pb-0.5 hover:text-[#f59e0b] hover:border-[#f59e0b]">
                See how it works <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-[#f59e0b]/30 -rotate-6" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-[#8a9a7a]/30 rotate-6" />
          <div className="relative bg-white rounded-3xl shadow-[0_30px_70px_-25px_rgba(15,23,42,0.25)] p-8">
            <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-3">You said</div>
            <p className="text-base leading-relaxed">When a deal moves to Won, send a thank-you email, create a Stripe customer, and notify the AE in Slack.</p>

            <div className="my-6 h-px bg-black/10" />

            <div className="text-[10px] uppercase tracking-wider font-bold mb-3" style={{ color: AMBER }}>Claritas built</div>
            <div className="space-y-2 text-sm">
              {[
                ["Trigger", "Deal stage → Won"],
                ["Action 1", "Email · template/thanks"],
                ["Action 2", "Stripe · createCustomer"],
                ["Action 3", "Slack · DM @owner"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#0f172a] text-white">{k}</span>
                  <span className="text-slate-700">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Ready to ship — review and approve
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: AMBER }}>Workflow Studio</div>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-[-0.03em]">
            Tell it what you want. <em className="italic font-light" style={{ color: SAGE }}>It folds the rest.</em>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-slate-600 max-w-md">
            Describe the workflow in plain English. Claritas wires the trigger, conditions, and actions — then asks you to approve before it goes live.
          </p>
          <Link href="#" className="mt-8 inline-flex items-center gap-2 bg-[#0f172a] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#f59e0b] hover:text-[#0f172a] transition">
            Try Workflow Studio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Voices() {
  const quotes = [
    { q: "We replaced four legacy systems with Claritas. Renewals haven't been this easy in twenty years.", a: "Datin Sara W., Group COO · F&B holding", rotate: "-rotate-2" },
    { q: "It's the first CRM that didn't feel like it was selling us back our own data.", a: "Tan Sri A.W., Chairman · Family office", rotate: "rotate-2" },
  ];
  return (
    <section className="px-6 py-32" style={{ background: SOFT }}>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: AMBER }}>Voices</div>
          <h2 className="text-5xl font-bold tracking-tight">From operators who know.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((qu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-3xl p-10 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.2)] ${qu.rotate}`}>
              <div className="text-5xl font-bold leading-none" style={{ color: AMBER }}>&ldquo;</div>
              <p className="mt-2 text-2xl leading-snug font-medium">{qu.q}</p>
              <div className="mt-6 text-sm text-slate-500">{qu.a}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "247", l: "Enterprise teams", c: AMBER },
    { v: "98.4%", l: "Annual renewal", c: INK },
    { v: "47ms", l: "Median latency", c: SAGE },
    { v: "11s", l: "First deal logged", c: AMBER },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1300px] grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={s.l} className={`bg-white rounded-3xl p-8 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.2)] ${i % 2 ? "md:rotate-1" : "md:-rotate-1"}`}>
            <div className="text-5xl md:text-6xl font-bold tracking-tight" style={{ color: s.c }}>{s.v}</div>
            <div className="mt-3 text-sm text-slate-600">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1100px] relative">
        <div className="absolute -top-6 left-12 w-24 h-24 rounded-3xl bg-[#f59e0b]/40 -rotate-12" />
        <div className="absolute -bottom-6 right-12 w-24 h-24 rounded-3xl bg-[#8a9a7a]/40 rotate-12" />
        <div className="relative rounded-3xl bg-[#0f172a] text-white p-14 md:p-20 text-center shadow-[0_40px_100px_-30px_rgba(15,23,42,0.5)]">
          <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
            Try it. <em className="italic font-light" style={{ color: AMBER }}>Fold it.</em><br />Make it yours.
          </h2>
          <p className="mt-7 text-lg text-white/65 max-w-xl mx-auto">
            30 days free. White-glove onboarding. Migration from your current CRM included for enterprise plans.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#" className="bg-[#f59e0b] text-[#0f172a] px-8 py-4 rounded-full font-bold hover:bg-white">
              Start free trial →
            </Link>
            <Link href="#" className="border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10">
              Talk to a human
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-[1400px] px-6 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rotate-12 rounded-md bg-[#f59e0b]/30" />
              <div className="absolute inset-0 -rotate-3 rounded-md bg-white border border-black/10 grid place-items-center text-sm font-bold">C</div>
            </div>
            <span className="font-semibold">Claritas</span>
          </div>
          <p className="mt-4 text-slate-600 max-w-xs">CRM, folded into something actually beautiful. Designed in Kuala Lumpur.</p>
        </div>
        {[
          { h: "Platform", l: ["Pipeline", "Inbox", "AI Agent", "Workflow Studio"] },
          { h: "Solutions", l: ["Sales", "Marketing", "Service", "Enterprise"] },
          { h: "Company", l: ["Manifesto", "Customers", "Press", "Careers"] },
          { h: "Resources", l: ["Docs", "Status", "Changelog", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-semibold">{c.h}</div>
            <ul className="mt-3 space-y-2 text-slate-600">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-[#f59e0b]">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex justify-between text-xs text-slate-500">
          <span>© Claritas 2026 · Folded with care.</span>
          <span>V12 · Origami</span>
        </div>
      </div>
    </footer>
  );
}
