"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, GitBranch, Boxes, Sparkles, ChevronRight } from "lucide-react";

/* ──────────────────────────────────────────────
   V13 — PRISM
   Linear / Vercel light · engineering-clean modernism
   White + ink · single subtle violet→cyan gradient (text accent only)
   Inter-style sans · razor-precise grid · subtle hairlines
   Tone: builders' product, sharp, confident, no sales fluff
   ────────────────────────────────────────────── */

const INK = "#0f0f0f";
const SUBTLE = "#666";
const HAIR = "rgba(15,15,15,0.08)";

export default function PrismPage() {
  return (
    <div className="bg-white text-[#0f0f0f]" style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif", fontFeatureSettings: '"cv11", "ss01"' }}>
      <Nav />
      <Hero />
      <Logos />
      <FeatureGrid />
      <Code />
      <Compare />
      <Stats />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur bg-white/80 border-b" style={{ borderColor: HAIR }}>
      <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
        <Link href="/versions/13" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="h-5 w-5 rounded-md" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }} />
          Claritas
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium" style={{ color: SUBTLE }}>
          {["Platform", "Method", "Customers", "Pricing", "Changelog", "Docs"].map((x) => (
            <Link key={x} href="#" className="hover:text-[#0f0f0f] transition-colors">{x}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-[13px]">
          <Link href="#" className="hidden md:inline hover:text-[#0f0f0f]" style={{ color: SUBTLE }}>Sign in</Link>
          <Link href="#" className="bg-[#0f0f0f] text-white px-3.5 py-1.5 rounded-md font-medium hover:bg-black/80 inline-flex items-center gap-1">
            Get started <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #7c3aed 0%, #06b6d4 100%)" }}>
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-24 pb-20 text-center">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[12px] border rounded-full px-3 py-1 mb-8" style={{ borderColor: HAIR, color: SUBTLE }}
        >
          <Sparkles className="h-3 w-3 text-[#7c3aed]" />
          New — Claritas 4.0 with native AI agents
          <ChevronRight className="h-3 w-3 opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-semibold tracking-[-0.045em] leading-[0.96] text-6xl md:text-7xl lg:text-[6.5rem]"
        >
          The CRM <GradientText>built for the way</GradientText> revenue teams actually work.
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-7 text-xl md:text-2xl max-w-2xl mx-auto leading-snug" style={{ color: SUBTLE }}>
          Fast, opinionated, and shaped by eighteen years of running revenue ops at scale. No bloat, no vendor lock-in, no excuses.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#" className="bg-[#0f0f0f] text-white px-6 py-3 rounded-md font-medium hover:bg-black/85 inline-flex items-center justify-center gap-1.5">
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="border px-6 py-3 rounded-md font-medium hover:bg-black/[0.03]" style={{ borderColor: HAIR }}>
            View documentation
          </Link>
        </motion.div>

        {/* Hero product mock — clean, restrained */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-20 mx-auto max-w-5xl">
          <div className="rounded-xl border shadow-[0_24px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden bg-white" style={{ borderColor: HAIR }}>
            <div className="border-b flex items-center gap-2 px-3 h-9" style={{ borderColor: HAIR }}>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
              </div>
              <div className="ml-3 px-2.5 py-1 rounded-md text-[11px] flex items-center gap-1.5" style={{ background: "rgba(0,0,0,0.04)", color: SUBTLE }}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                workspace.claritas.app/fgv
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 p-3 aspect-[16/9.5] text-left">
              <div className="col-span-2 space-y-1 p-2">
                <div className="text-[9px] uppercase mb-2" style={{ color: SUBTLE }}>Workspace</div>
                {["Dashboard", "Pipeline", "Inbox", "Agents", "Reports"].map((x, i) => (
                  <div key={x} className={`text-xs px-2 py-1.5 rounded-md ${i === 1 ? "bg-black/[0.05] font-medium" : ""}`} style={i !== 1 ? { color: SUBTLE } : {}}>{x}</div>
                ))}
              </div>
              <div className="col-span-7 border-l border-r p-3" style={{ borderColor: HAIR }}>
                <div className="flex items-center justify-between text-[11px] mb-3" style={{ color: SUBTLE }}>
                  <span>Pipeline · Q2 2026</span>
                  <span>142 deals · RM 4.28M</span>
                </div>
                <div className="grid grid-cols-4 gap-2 h-full">
                  {["Discovery · 32", "Proposal · 41", "Negotiation · 28", "Closed Won · 41"].map((stage, j) => (
                    <div key={stage} className="border rounded-md p-2 text-[10px] space-y-1.5" style={{ borderColor: HAIR }}>
                      <div className="font-medium pb-1 border-b" style={{ borderColor: HAIR }}>{stage}</div>
                      {[1, 2, 3].map((d) => (
                        <div key={d} className="bg-black/[0.03] rounded px-1.5 py-1 truncate">FGV · RM {(80 + d * 23 + j * 11)}k</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-3 p-3 space-y-3">
                <div className="border rounded-md p-3" style={{ borderColor: HAIR, background: "linear-gradient(135deg, rgba(124,58,237,0.04), rgba(6,182,212,0.04))" }}>
                  <div className="flex items-center gap-1.5 text-[10px] font-medium mb-1.5">
                    <Sparkles className="h-3 w-3 text-[#7c3aed]" />
                    AI Agent
                  </div>
                  <div className="text-xs leading-snug">3 deals stalled. Drafted recovery outreach — review?</div>
                  <button className="mt-2 text-[10px] bg-[#0f0f0f] text-white rounded px-2 py-1">Review →</button>
                </div>
                <div className="text-[10px] grid gap-1.5" style={{ color: SUBTLE }}>
                  <div className="flex justify-between"><span>Forecast (90% conf.)</span><span className="text-[#0f0f0f] font-medium">RM 3.9M</span></div>
                  <div className="flex justify-between"><span>Velocity (deals/wk)</span><span className="text-[#0f0f0f] font-medium">14.2</span></div>
                  <div className="flex justify-between"><span>Win rate, last 30d</span><span className="text-[#0f0f0f] font-medium">38%</span></div>
                </div>
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
    <section className="px-6 py-10 border-y" style={{ borderColor: HAIR }}>
      <div className="mx-auto max-w-[1100px]">
        <div className="text-[11px] uppercase tracking-[0.24em] text-center mb-6" style={{ color: SUBTLE }}>
          Trusted by teams building the next generation of customer-led businesses
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {["FGV Holdings", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Vistage", "Astro"].map((n) => (
            <span key={n} className="text-base font-semibold tracking-tight" style={{ color: SUBTLE }}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const items = [
    { i: Zap, t: "Sub-50ms responses", c: "Every interaction. No exceptions. We benchmark p99 publicly." },
    { i: Boxes, t: "Built on events", c: "Append-only log under the hood. Time-travel any record. Replay any state." },
    { i: GitBranch, t: "Open API, fully", c: "REST, GraphQL, gRPC, webhooks. Bring your tools. We meet you where you work." },
    { i: Sparkles, t: "AI agents native", c: "Drafts emails, scores leads, summarises calls. Built into the runtime, not bolted on." },
    { i: Shield, t: "SOC 2 + ISO 27001", c: "Plus PDPA, GDPR. Single tenancy and data residency on enterprise plans." },
    { i: ArrowRight, t: "Migrate in days", c: "Salesforce, HubSpot, Zoho, custom — our team owns the migration end to end." },
  ];
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.24em] mb-3" style={{ color: SUBTLE }}>Capabilities</div>
            <h2 className="text-5xl md:text-6xl font-semibold leading-[0.98] tracking-[-0.035em]">
              Everything you need.<br />
              <GradientText>Nothing you don&apos;t.</GradientText>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-base leading-relaxed" style={{ color: SUBTLE }}>
            We built Claritas because we were tired of CRMs that punished good operators with bad software. Every feature here was demanded by an actual customer in production.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: HAIR }}>
          {items.map((it) => (
            <div key={it.t} className="bg-white p-7 group">
              <it.i className="h-5 w-5 mb-5 transition-colors group-hover:text-[#7c3aed]" style={{ color: SUBTLE }} />
              <div className="font-semibold tracking-tight">{it.t}</div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: SUBTLE }}>{it.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Code() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] mb-3" style={{ color: SUBTLE }}>Workflow Studio</div>
          <h2 className="text-5xl md:text-6xl font-semibold leading-[0.98] tracking-[-0.035em]">
            Describe the workflow.<br /><GradientText>We build it.</GradientText>
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-md" style={{ color: SUBTLE }}>
            Type in plain English. Claritas generates the trigger, conditions, and actions. You review the spec, ship to production with one click. No flowchart required, no developer required.
          </p>
          <Link href="#" className="mt-7 inline-flex items-center gap-1.5 bg-[#0f0f0f] text-white px-5 py-2.5 rounded-md font-medium text-sm">
            Try Workflow Studio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-xl border overflow-hidden text-[13px]" style={{ borderColor: HAIR, fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace" }}>
          <div className="px-4 py-2 border-b text-[11px] flex items-center justify-between" style={{ borderColor: HAIR, color: SUBTLE }}>
            <span>workflow.ts · auto-generated</span>
            <span>● synced</span>
          </div>
          <div className="p-5 leading-relaxed">
            <span style={{ color: SUBTLE }}>{`// "When a deal moves to Won, send a thank-you,`}</span><br />
            <span style={{ color: SUBTLE }}>{`//  create a Stripe customer, notify AE in Slack."`}</span>
            <br /><br />
            <span style={{ color: "#7c3aed" }}>export const</span> <span className="font-medium">onDealWon</span> <span style={{ color: SUBTLE }}>=</span>{" "}
            <span style={{ color: "#7c3aed" }}>workflow</span>(&#123;<br />
            &nbsp;&nbsp;<span style={{ color: "#06b6d4" }}>trigger</span>: <span className="font-medium">deal.stage</span>(<span style={{ color: "#16a34a" }}>&apos;Won&apos;</span>),<br />
            &nbsp;&nbsp;<span style={{ color: "#06b6d4" }}>actions</span>: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7c3aed" }}>email</span>(<span style={{ color: "#16a34a" }}>&apos;templates/thanks&apos;</span>),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7c3aed" }}>stripe</span>.createCustomer(),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#7c3aed" }}>slack</span>.dm(<span className="font-medium">deal.owner</span>),<br />
            &nbsp;&nbsp;],<br />
            &#125;);
          </div>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ["Median page load", "340ms", "47ms", "7.2× faster"],
    ["Time to first deal logged", "84 days", "11 seconds", "660,000× faster"],
    ["AI agent included", "Add-on, $40/seat", "Native, free", "—"],
    ["5-year renewal rate", "22%", "94%", "+327%"],
    ["Open API", "Partial", "REST + GraphQL + gRPC", "—"],
    ["Self-host option", "No", "Yes, enterprise", "—"],
  ];
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.24em] mb-3" style={{ color: SUBTLE }}>Side by side</div>
          <h2 className="text-5xl md:text-6xl font-semibold leading-[0.98] tracking-[-0.035em]">
            Faster than the<br />
            <GradientText>CRM you&apos;re replacing.</GradientText>
          </h2>
        </div>
        <div className="border rounded-xl overflow-hidden" style={{ borderColor: HAIR }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-[11px] uppercase tracking-wider" style={{ borderColor: HAIR, color: SUBTLE }}>
                <th className="text-left p-4 font-semibold" style={{ width: "32%" }}>Metric</th>
                <th className="text-right p-4 font-semibold">Industry median</th>
                <th className="text-right p-4 font-semibold text-[#0f0f0f]">Claritas</th>
                <th className="text-right p-4 font-semibold">Δ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0" style={{ borderColor: HAIR }}>
                  <td className="p-4 font-medium">{r[0]}</td>
                  <td className="p-4 text-right" style={{ color: SUBTLE, fontFamily: "ui-monospace, monospace" }}>{r[1]}</td>
                  <td className="p-4 text-right font-semibold" style={{ fontFamily: "ui-monospace, monospace" }}>{r[2]}</td>
                  <td className="p-4 text-right" style={{ color: "#7c3aed", fontFamily: "ui-monospace, monospace" }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-6 py-20 border-y" style={{ borderColor: HAIR }}>
      <div className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { v: "247", l: "Enterprise teams" },
          { v: "98.4%", l: "Annual renewal" },
          { v: "47ms", l: "p99 query latency" },
          { v: "99.997%", l: "Uptime, 90 days" },
        ].map((s) => (
          <div key={s.l}>
            <div className="font-semibold text-5xl md:text-6xl tracking-[-0.035em]"><GradientText>{s.v}</GradientText></div>
            <div className="mt-2 text-sm" style={{ color: SUBTLE }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-28 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-6xl md:text-7xl font-semibold leading-[0.95] tracking-[-0.04em]">
          Build with <GradientText>Claritas.</GradientText>
        </h2>
        <p className="mt-7 text-xl max-w-xl mx-auto leading-snug" style={{ color: SUBTLE }}>
          Start free in 30 seconds. No credit card. No commitment. Just the CRM you wish your team had built itself.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#" className="bg-[#0f0f0f] text-white px-7 py-3 rounded-md font-medium inline-flex items-center justify-center gap-1.5">
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#" className="border px-7 py-3 rounded-md font-medium hover:bg-black/[0.03]" style={{ borderColor: HAIR }}>
            Talk to engineering
          </Link>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t" style={{ borderColor: HAIR }}>
      <div className="mx-auto max-w-[1400px] px-6 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-semibold">
            <span className="h-5 w-5 rounded-md" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)" }} />
            Claritas
          </div>
          <p className="mt-4 max-w-xs" style={{ color: SUBTLE }}>The CRM built for the way revenue teams actually work.</p>
        </div>
        {[
          { h: "Platform", l: ["Pipeline", "Inbox", "AI Agents", "Workflows", "API"] },
          { h: "Solutions", l: ["Sales", "Marketing", "Service", "Enterprise"] },
          { h: "Resources", l: ["Docs", "Changelog", "Status", "Method"] },
          { h: "Company", l: ["About", "Customers", "Press", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-semibold">{c.h}</div>
            <ul className="mt-3 space-y-2" style={{ color: SUBTLE }}>{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-[#0f0f0f]">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t" style={{ borderColor: HAIR }}>
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex justify-between text-xs" style={{ color: SUBTLE }}>
          <span>© Claritas Inc. 2026</span>
          <span>V13 · Prism</span>
        </div>
      </div>
    </footer>
  );
}
