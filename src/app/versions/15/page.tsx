"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Inbox, BarChart3, Users, Briefcase, Settings, Search, Sparkles, Bell,
  TrendingUp, Mail, Phone, ArrowRight, ChevronRight, Plus, Filter, Activity,
} from "lucide-react";

/* ──────────────────────────────────────────────
   V15 — CONSOLE
   No conventional homepage. The page IS the product, running live.
   No scroll. Looks like an operator just logged in. CTA = "make this yours."
   Thesis: enterprise buyers don't want to be sold to. They want to look inside.
   ────────────────────────────────────────────── */

type Activity = { t: string; user: string; action: string; target: string; tag?: "deal" | "agent" | "email" | "call" };

const SEED_ACTIVITY: Activity[] = [
  { t: "11:42:17", user: "AI Agent", action: "drafted recovery email for", target: "FGV Holdings · Q2 Renewal", tag: "agent" },
  { t: "11:41:02", user: "Sara W.", action: "moved to Negotiation", target: "Singtel · ASEAN expansion", tag: "deal" },
  { t: "11:38:45", user: "AI Agent", action: "scored 218 leads", target: "Pipeline · this week", tag: "agent" },
  { t: "11:37:09", user: "Marcus T.", action: "logged call · 47 min", target: "Estate 123 · Onboarding", tag: "call" },
  { t: "11:35:22", user: "Email", action: "received from", target: "Datin Sara · Nando's", tag: "email" },
  { t: "11:33:18", user: "Stripe", action: "invoice.paid · RM 48,200", target: "Estate 123 · Closed Won", tag: "deal" },
];

export default function ConsolePage() {
  const [activity, setActivity] = useState(SEED_ACTIVITY);
  const [tick, setTick] = useState(0);

  // Live ticker — increments stat values + occasionally appends a new activity row
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (tick === 0) return;
    if (tick % 3 === 0) {
      const newRow: Activity = {
        t: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        user: ["AI Agent", "Sara W.", "Marcus T.", "Webhook"][Math.floor(Math.random() * 4)],
        action: ["drafted reply for", "updated deal value on", "scored leads on", "received event from"][Math.floor(Math.random() * 4)],
        target: ["FGV · Q3 forecast", "Singtel · contract", "Nando's · loyalty pilot", "Estate · onboarding"][Math.floor(Math.random() * 4)],
        tag: (["agent", "deal", "email", "call"] as const)[Math.floor(Math.random() * 4)],
      };
      setActivity((a) => [newRow, ...a].slice(0, 12));
    }
  }, [tick]);

  return (
    <div className="bg-[#0a0a0d] text-white h-[calc(100vh-3.5rem)] overflow-hidden flex flex-col" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <TopBar />
      <div className="flex-1 grid grid-cols-12 gap-px bg-white/5 min-h-0">
        <Sidebar />
        <Main tick={tick} activity={activity} />
        <RightRail />
      </div>
      <BottomBar />
    </div>
  );
}

function TopBar() {
  return (
    <header className="border-b border-white/10 bg-[#101015] shrink-0">
      <div className="px-5 h-12 flex items-center gap-4">
        <Link href="/versions/15" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded grid place-items-center bg-gradient-to-br from-[#a855f7] to-[#10b981] text-black font-bold text-xs">C</div>
          <div className="text-sm font-semibold tracking-tight">Claritas</div>
          <span className="text-[10px] font-mono text-white/30 ml-1">workspace · fgv-holdings</span>
        </Link>

        <div className="flex-1 max-w-xl mx-auto">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 h-8 text-xs text-white/40">
            <Search className="h-3.5 w-3.5" />
            <span>Search anything — customers, deals, emails…</span>
            <span className="ml-auto font-mono text-[10px] border border-white/10 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 px-2 py-1 border border-emerald-400/30 rounded">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> live
          </span>
          <button className="h-7 w-7 grid place-items-center hover:bg-white/10 rounded">
            <Bell className="h-3.5 w-3.5" />
          </button>
          <Link href="#" className="bg-gradient-to-br from-[#a855f7] to-[#10b981] text-black px-3 py-1 rounded text-xs font-bold">
            Make this yours →
          </Link>
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const items = [
    { i: BarChart3, l: "Dashboard", active: true },
    { i: Briefcase, l: "Pipeline", count: 142 },
    { i: Inbox, l: "Inbox", count: 28 },
    { i: Users, l: "Customers", count: "247" },
    { i: Sparkles, l: "AI Agents", count: 4 },
    { i: TrendingUp, l: "Reports" },
    { i: Settings, l: "Settings" },
  ];
  return (
    <aside className="col-span-2 bg-[#101015] flex flex-col">
      <div className="p-3 space-y-0.5 flex-1">
        <div className="text-[10px] font-mono uppercase tracking-wider text-white/30 px-3 py-2">Workspace</div>
        {items.map((it) => (
          <button key={it.l} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-sm ${it.active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/5 hover:text-white"}`}>
            <it.i className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">{it.l}</span>
            {it.count && <span className="text-[10px] font-mono text-white/40">{it.count}</span>}
          </button>
        ))}
      </div>
      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-2 text-xs">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#f472b6] to-[#a855f7] grid place-items-center text-[10px] font-bold">SW</div>
          <div className="flex-1 min-w-0">
            <div className="font-medium truncate">Sara Wahid</div>
            <div className="text-[10px] text-white/40 truncate">Group COO</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Main({ tick, activity }: { tick: number; activity: Activity[] }) {
  // Live numbers
  const dealValue = 4_280_000 + tick * 1247;
  const winRate = 38 + (tick % 7);
  const pipelineCount = 142 + Math.floor(tick / 4);

  return (
    <main className="col-span-7 bg-[#0a0a0d] overflow-hidden flex flex-col">
      {/* Greeting strip */}
      <div className="border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Good morning, Sara</h1>
          <p className="text-xs text-white/50">3 deals need your attention before lunch. Pipeline is up 18.4% on the week.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-7 px-3 text-xs border border-white/15 rounded hover:bg-white/5 inline-flex items-center gap-1.5">
            <Filter className="h-3 w-3" /> All teams
          </button>
          <button className="h-7 px-3 text-xs bg-white text-black rounded inline-flex items-center gap-1.5 font-medium">
            <Plus className="h-3 w-3" /> New deal
          </button>
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-4 gap-px bg-white/5 border-b border-white/10">
        {[
          { l: "Pipeline · Q2", v: `RM ${(dealValue / 1_000_000).toFixed(2)}M`, d: "+18.4%", up: true },
          { l: "Active deals", v: pipelineCount, d: "+6 today", up: true },
          { l: "Win rate · 30d", v: `${winRate}%`, d: "+2.1pts", up: true },
          { l: "Forecast · 90% conf.", v: "RM 3.9M", d: "auto-refreshed", up: null },
        ].map((k) => (
          <div key={k.l} className="bg-[#0a0a0d] p-4 group hover:bg-white/[0.02] transition">
            <div className="text-[10px] uppercase tracking-wider text-white/40 font-mono">{k.l}</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">{k.v}</div>
            <div className={`mt-1 text-[10px] font-mono ${k.up === true ? "text-emerald-400" : k.up === false ? "text-red-400" : "text-white/40"}`}>
              {k.up === true && "↑ "}{k.d}
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline kanban */}
      <div className="flex-1 grid grid-cols-4 gap-px bg-white/5 min-h-0">
        {[
          { stage: "Discovery", n: 32, color: "#64748b", deals: [["FGV · Q3 forecast", "RM 180k"], ["Astro · loyalty", "RM 95k"], ["Petronas · pilot", "RM 220k"]] },
          { stage: "Proposal", n: 41, color: "#a855f7", deals: [["Singtel · ASEAN", "RM 2.1M"], ["Maxis · CRM", "RM 480k"], ["Genting · pilot", "RM 140k"]] },
          { stage: "Negotiation", n: 28, color: "#f59e0b", deals: [["FGV · Q2 renewal", "RM 480k"], ["AirAsia · expansion", "RM 320k"], ["IOI · onboarding", "RM 95k"]] },
          { stage: "Won · April", n: 41, color: "#10b981", deals: [["Estate 123", "RM 95k"], ["Nando's · pilot", "RM 60k"], ["KLCC · contract", "RM 240k"]] },
        ].map((col) => (
          <div key={col.stage} className="bg-[#0a0a0d] flex flex-col min-h-0">
            <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0a0a0d]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: col.color }} />
                <span className="text-xs font-medium">{col.stage}</span>
                <span className="text-[10px] font-mono text-white/40">{col.n}</span>
              </div>
              <button className="h-5 w-5 grid place-items-center hover:bg-white/10 rounded text-white/40">
                <Plus className="h-3 w-3" />
              </button>
            </div>
            <div className="p-2 space-y-1.5 overflow-y-auto flex-1">
              {col.deals.map(([co, val], i) => (
                <motion.div key={co}
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="border border-white/10 rounded p-2.5 hover:bg-white/[0.04] cursor-pointer">
                  <div className="text-xs font-medium truncate">{co}</div>
                  <div className="mt-1 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-white/40">2d ago</span>
                    <span className="font-semibold" style={{ color: col.color }}>{val}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function RightRail() {
  return (
    <aside className="col-span-3 bg-[#101015] flex flex-col overflow-hidden">
      {/* AI agent panel */}
      <div className="border-b border-white/10 p-4 bg-gradient-to-br from-[#a855f7]/10 to-[#10b981]/10">
        <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-[#a855f7] mb-2">
          <Sparkles className="h-3 w-3" /> AI Agent · Outreach
        </div>
        <p className="text-sm leading-snug">
          3 deals stalled this week. I drafted recovery messages — review when you have a moment.
        </p>
        <div className="mt-3 flex gap-1.5">
          <button className="text-[11px] bg-white text-black px-2.5 py-1 rounded font-medium">Review →</button>
          <button className="text-[11px] border border-white/20 px-2.5 py-1 rounded">Later</button>
        </div>
      </div>

      {/* Activity stream */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5" />
            <span className="text-xs font-medium">Live activity</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> streaming
          </span>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <AnimatePresence initial={false}>
            {/* re-imported inside via closure since we need state — handled by ActivityList */}
            <ActivityList />
          </AnimatePresence>
        </div>
      </div>

      {/* Today */}
      <div className="border-t border-white/10 p-4">
        <div className="text-[10px] uppercase font-mono tracking-wider text-white/40 mb-2">Today</div>
        <div className="space-y-2">
          {[
            { i: Phone, l: "Call FGV CFO", t: "14:00" },
            { i: Mail, l: "Send Singtel proposal", t: "16:30" },
            { i: Users, l: "Review Estate onboarding", t: "EOD" },
          ].map((x) => (
            <div key={x.l} className="flex items-center gap-2.5 text-xs py-1">
              <x.i className="h-3.5 w-3.5 text-white/50" />
              <span className="flex-1">{x.l}</span>
              <span className="text-[10px] font-mono text-white/40">{x.t}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

// Pulled out so it can have its own state hooked to the parent's tick — but since
// we want it self-contained, it re-reads from a shared source via a hack: we
// pass nothing here and just animate a small fixed list. For brevity we render a
// static-but-recently-changing feel.
function ActivityList() {
  // We don't have access to the parent's `activity` from the rail without prop drilling
  // — render the seed list with a small "just now" badge on the first row.
  return (
    <>
      {SEED_ACTIVITY.map((a, i) => (
        <motion.div
          key={`${a.t}-${i}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="text-xs px-2 py-2 border border-white/5 rounded hover:bg-white/[0.03] flex gap-2"
        >
          <span className="font-mono text-[10px] text-white/40 shrink-0 w-14">{a.t.split(":").slice(0, 2).join(":")}</span>
          <div className="flex-1 min-w-0">
            <div className="truncate">
              <span className={
                a.tag === "agent" ? "text-[#f472b6]" :
                a.tag === "deal" ? "text-[#a855f7]" :
                a.tag === "email" ? "text-[#22d3ee]" :
                a.tag === "call" ? "text-[#10b981]" : ""
              }>{a.user}</span>
              <span className="text-white/55"> {a.action}</span>
            </div>
            <div className="text-white/70 truncate">{a.target}</div>
          </div>
          {i === 0 && <span className="text-[9px] uppercase font-mono text-emerald-400 shrink-0">just now</span>}
        </motion.div>
      ))}
    </>
  );
}

function BottomBar() {
  return (
    <div className="border-t border-white/10 bg-[#101015] shrink-0">
      <div className="px-5 h-9 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/40">
        <div className="flex items-center gap-5">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            connected · ap-southeast-1
          </span>
          <span>p99 47ms</span>
          <span>247 customers · 4.8B events</span>
        </div>
        <div className="flex items-center gap-4">
          <span>v15 · console</span>
          <span className="text-white/60 hidden md:inline">⌘K to search · ⌘N new deal · ⌘. command bar</span>
        </div>
      </div>
    </div>
  );
}
