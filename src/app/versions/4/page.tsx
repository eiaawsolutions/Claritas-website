"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Cpu, Activity, Zap, ChevronRight } from "lucide-react";

/* ──────────────────────────────────────────────
   V4 — OBSIDIAN
   Dark canvas · neon crimson · terminal motifs
   Mono + bold sans · scanline texture · platform feel
   Tone: technical, sharp, "we built this for builders"
   ────────────────────────────────────────────── */

export default function ObsidianPage() {
  return (
    <div className="bg-[#070708] text-white relative overflow-x-hidden" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Grid />
      <Nav />
      <Hero />
      <Marquee />
      <Architecture />
      <Logs />
      <Performance />
      <CTA />
      <Foot />
    </div>
  );
}

function Grid() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none opacity-[0.07]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
  );
}

function Nav() {
  return (
    <header className="border-b border-white/10 backdrop-blur bg-black/40 sticky top-12 z-40">
      <div className="mx-auto max-w-[1500px] px-6 h-16 flex items-center justify-between">
        <Link href="/versions/4" className="flex items-center gap-3">
          <div className="h-7 w-7 grid place-items-center bg-[#ff1f3d] text-black font-mono font-bold text-sm">C</div>
          <span className="font-mono text-sm tracking-wider">CLARITAS<span className="text-[#ff1f3d]">.</span>SYS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-white/60">
          <Link href="#" className="hover:text-white">/runtime</Link>
          <Link href="#" className="hover:text-white">/api</Link>
          <Link href="#" className="hover:text-white">/agents</Link>
          <Link href="#" className="hover:text-white">/docs</Link>
          <Link href="#" className="hover:text-white">/changelog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-emerald-400 px-2 py-1 border border-emerald-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            sys.online
          </span>
          <Link href="#" className="text-xs font-mono uppercase tracking-wider px-4 py-2 bg-[#ff1f3d] text-black hover:bg-[#ff4759]">
            $ deploy →
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 mb-8">
              <Terminal className="h-3 w-3 text-[#ff1f3d]" />
              v4.2.1 — production stable · 99.997% uptime
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[0.92] tracking-[-0.04em]">
              The CRM<br />
              built like<br />
              <span className="text-[#ff1f3d] relative inline-block">
                infrastructure
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff1f3d] to-transparent" />
              </span>
              .
            </h1>
            <p className="mt-8 text-xl text-white/60 max-w-xl leading-relaxed">
              Event-driven core. Sub-100ms p99 latency. Open API. Self-hostable. Claritas is the platform your engineers will actually defend.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#" className="bg-[#ff1f3d] text-black px-7 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-[#ff4759] inline-flex items-center gap-2">
                $ start trial <ChevronRight className="h-4 w-4" />
              </Link>
              <Link href="#" className="border border-white/30 text-white px-7 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-white/5 inline-flex items-center gap-2">
                $ read docs
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-white/40">
              <span><span className="text-emerald-400">●</span> SOC 2 Type II</span>
              <span><span className="text-emerald-400">●</span> ISO 27001</span>
              <span><span className="text-emerald-400">●</span> GDPR · PDPA</span>
              <span><span className="text-emerald-400">●</span> Self-host ready</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="lg:col-span-5">
            <div className="border border-white/15 bg-black/60 backdrop-blur rounded-sm overflow-hidden shadow-[0_30px_80px_-20px_rgba(255,31,61,0.4)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-white/[0.03]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-[10px] text-white/40">claritas-cli — bash</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <div className="text-white/40">$ claritas deploy --env=prod</div>
                <div className="text-emerald-400 mt-1">→ resolving manifest…           ✓</div>
                <div className="text-emerald-400">→ provisioning workspace…        ✓</div>
                <div className="text-emerald-400">→ syncing 142,830 contacts…      ✓</div>
                <div className="text-emerald-400">→ installing AI agents (4)…      ✓</div>
                <div className="text-emerald-400">→ wiring webhooks (38)…          ✓</div>
                <div className="text-[#ff1f3d] mt-3">⚡ deployed in 11.4s</div>
                <div className="text-white/60 mt-2">  workspace: claritas.app/fgv-holdings</div>
                <div className="text-white/60">  region: ap-southeast-1</div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-white/40">$</span>
                  <span className="h-4 w-2 bg-[#ff1f3d] animate-pulse" />
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { l: "p99 latency", v: "47ms", c: "emerald" },
                { l: "throughput", v: "82k/s", c: "cyan" },
                { l: "uptime 90d", v: "99.997%", c: "violet" },
              ].map((x) => (
                <div key={x.l} className="border border-white/10 p-3 bg-white/[0.02]">
                  <div className={`text-${x.c}-400 font-mono text-lg font-bold`}>{x.v}</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/40 font-mono mt-1">{x.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="border-y border-white/10 py-6 overflow-hidden bg-black/40">
      <div className="flex gap-12 animate-pulse">
        {["DEPLOYED · 247 ENTERPRISES", "PROCESSED · 4.8B EVENTS", "POWERING · 12 INDUSTRIES", "UPTIME · 99.997%", "API CALLS · 18M/HR", "ENGINEERED · KUALA LUMPUR"].map((x) => (
          <div key={x} className="flex items-center gap-12 font-mono text-sm uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">
            <span className="h-1 w-1 rounded-full bg-[#ff1f3d]" />
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    { i: Cpu, t: "Event Core", c: "Append-only log. Time-travel debugging. Every state change is a row." },
    { i: Activity, t: "Stream Processors", c: "WASM-isolated. Bring your own JS / Python / Go. Hot-deploy without downtime." },
    { i: Zap, t: "Agent Runtime", c: "First-class LLM agents. Tool use, MCP, memory, sandboxed execution." },
    { i: Terminal, t: "Open API", c: "REST + GraphQL + gRPC. SDKs for 11 languages. Webhooks on everything." },
  ];
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#ff1f3d] mb-4">/architecture</div>
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
              A platform.<br />Not a SaaS.
            </h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 text-lg text-white/60 leading-relaxed">
            Most CRMs are a UI on top of a database. Claritas is an event-driven runtime — every contact, every interaction, every change is a typed event you can query, replay, and react to. We expose the layer your engineers wanted from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {layers.map((l, i) => (
            <motion.div key={l.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-[#070708] p-8 hover:bg-white/[0.03] transition group">
              <div className="flex items-start justify-between mb-8">
                <l.i className="h-6 w-6 text-[#ff1f3d]" />
                <span className="font-mono text-[10px] text-white/30">L{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="text-2xl font-bold tracking-tight">{l.t}</div>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{l.c}</p>
              <Link href="#" className="mt-6 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-white/50 group-hover:text-[#ff1f3d]">
                read spec <ChevronRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Logs() {
  const events = [
    { t: "00:00:01.241", lvl: "INFO", msg: "agent.outreach.draft → completed for deal_881" },
    { t: "00:00:01.387", lvl: "WARN", msg: "deal_443 stage stalled 14d → triggering recovery flow" },
    { t: "00:00:01.512", lvl: "INFO", msg: "stripe.webhook → invoice.paid · RM 48,200" },
    { t: "00:00:01.601", lvl: "INFO", msg: "contact.merge → 4 records → contact_991823" },
    { t: "00:00:01.744", lvl: "ERROR", msg: "integration.xero.sync → retrying (1/3)" },
    { t: "00:00:01.892", lvl: "INFO", msg: "agent.scoring → updated 218 leads" },
  ];
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#ff1f3d] mb-4">/observability</div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            See <em className="text-[#ff1f3d] not-italic">everything</em>.<br />Replay <em className="text-[#ff1f3d] not-italic">anything</em>.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-md">
            Native event sourcing means your CRM has a black box recorder. Audit any state. Time-travel any record. Reproduce any bug.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[["Events/sec", "82,140"], ["Agents", "1,427"], ["Lookback", "∞"]].map(([k, v]) => (
              <div key={k} className="bg-[#070708] p-4">
                <div className="font-mono text-2xl font-bold text-[#ff1f3d]">{v}</div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 font-mono mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/15 bg-black/60 font-mono text-xs">
          <div className="border-b border-white/10 px-4 py-2 flex items-center justify-between">
            <span className="text-white/60">live event stream</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              streaming
            </span>
          </div>
          {events.map((e) => (
            <div key={e.t} className="px-4 py-2 border-b border-white/5 last:border-0 flex gap-3 hover:bg-white/[0.03]">
              <span className="text-white/30 shrink-0">{e.t}</span>
              <span className={`shrink-0 ${e.lvl === "ERROR" ? "text-red-400" : e.lvl === "WARN" ? "text-amber-400" : "text-cyan-400"}`}>{e.lvl}</span>
              <span className="text-white/70 truncate">{e.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section className="py-28 px-6 border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-[1400px] text-center">
        <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#ff1f3d] mb-6">/benchmarks</div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Faster than the<br />system you&apos;re replacing.
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-5xl mx-auto">
          {[
            { v: "47ms", l: "p99 query latency", note: "vs ~340ms industry median" },
            { v: "11s", l: "median deploy", note: "manifest → live" },
            { v: "82k/s", l: "events processed", note: "per workspace" },
            { v: "99.997%", l: "uptime, 90d", note: "publicly verifiable" },
          ].map((s) => (
            <div key={s.l} className="bg-[#070708] p-8 text-left">
              <div className="font-mono text-5xl font-bold text-[#ff1f3d] tracking-tight">{s.v}</div>
              <div className="mt-3 text-sm text-white">{s.l}</div>
              <div className="mt-1 text-xs text-white/40 font-mono">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff1f3d] mb-6">$ ready to deploy?</div>
        <h2 className="text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight">
          Ship in <span className="text-[#ff1f3d]">11 seconds</span>.<br />
          Scale to <span className="text-[#ff1f3d]">∞</span>.
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="#" className="bg-[#ff1f3d] text-black px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-[#ff4759]">
            $ start free trial
          </Link>
          <Link href="#" className="border border-white/30 px-10 py-4 font-mono text-sm uppercase tracking-widest hover:bg-white/5">
            $ talk to engineering
          </Link>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-6 py-14 grid md:grid-cols-5 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 grid place-items-center bg-[#ff1f3d] text-black font-mono font-bold text-sm">C</div>
            <span className="font-mono tracking-wider">CLARITAS<span className="text-[#ff1f3d]">.</span>SYS</span>
          </div>
          <p className="mt-4 text-white/50 font-mono text-xs leading-relaxed max-w-xs">
            Event-driven CRM platform. Open API. Self-host ready. Built in Kuala Lumpur, deployed worldwide.
          </p>
        </div>
        {[
          { h: "/runtime", l: ["Event Core", "Stream Processors", "Agent Runtime", "Open API"] },
          { h: "/docs", l: ["Quickstart", "API Reference", "SDK Guides", "Self-host"] },
          { h: "/company", l: ["About", "Status", "Changelog", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-mono text-xs uppercase tracking-wider text-[#ff1f3d]">{c.h}</div>
            <ul className="mt-3 space-y-2 text-white/60 font-mono text-xs">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-white">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-5 flex justify-between text-[10px] font-mono uppercase tracking-wider text-white/40">
          <span>© claritas.sys 2026 · MIT-licensed cli</span>
          <span>v4 · obsidian build</span>
        </div>
      </div>
    </footer>
  );
}
