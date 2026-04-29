"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────
   V18 — DIFF
   Dual-pane synchronized scroll. Left half: "Your CRM today."
   Right half: "Your CRM with Claritas." Compare screen-by-screen.
   The sales motion of an enterprise account team, shipped as a homepage.
   Thesis: the strongest argument is shown, not told.
   ────────────────────────────────────────────── */

type Scene = {
  id: string;
  title: string;
  before: { headline: string; bullets: string[]; mock: React.ReactNode };
  after: { headline: string; bullets: string[]; mock: React.ReactNode };
};

const SCENES: Scene[] = [
  {
    id: "monday",
    title: "Monday morning, 09:14",
    before: {
      headline: "Where do I even start?",
      bullets: [
        "Four tabs open: CRM, email, calendar, spreadsheet",
        "Yesterday's notes still on a sticky note on your monitor",
        "No idea which deals moved over the weekend",
        "Forecast hasn't refreshed since Friday afternoon",
      ],
      mock: <BeforeMonday />,
    },
    after: {
      headline: "One screen. Three deals to call. Pipeline up 18%.",
      bullets: [
        "AI agent already drafted three outreach emails — awaiting review",
        "Yesterday's notes auto-attached to the right deals",
        "Weekend movements summarised in two sentences",
        "Forecast refreshed continuously, with confidence bands",
      ],
      mock: <AfterMonday />,
    },
  },
  {
    id: "forecast",
    title: "Wednesday, board prep",
    before: {
      headline: "Three days of spreadsheet wrangling.",
      bullets: [
        "Pull pipeline → export CSV → manual cleanup",
        "Stitch in renewals from a separate system",
        "Email VPs to chase missing notes on big deals",
        "Hand-build the slides. Pray nothing changed by Thursday.",
      ],
      mock: <BeforeForecast />,
    },
    after: {
      headline: "One click. Auditable. Defensible.",
      bullets: [
        "Forecast view, filtered to your team, in one click",
        "Renewals, expansions, and at-risk in one panel",
        "Every number traces back to a contact, a deal, a date",
        "Exports to your board template, branded, in 8 seconds",
      ],
      mock: <AfterForecast />,
    },
  },
  {
    id: "renewal",
    title: "Friday, the renewal call",
    before: {
      headline: "Cold open. Awkward silence.",
      bullets: [
        "Last meeting notes? Lost in someone's outbox",
        "Customer's product usage? Different system, can't access",
        "What did they ask for last quarter? Nobody remembers",
        "Probability of close? Whatever your gut says",
      ],
      mock: <BeforeRenewal />,
    },
    after: {
      headline: "Walk in knowing them better than they remember themselves.",
      bullets: [
        "Last 12 months of every interaction, summarised on screen",
        "Product usage, sentiment, and unresolved asks — one panel",
        "AI brief generated 9 minutes before the call started",
        "Probability score with the three drivers, fully explainable",
      ],
      mock: <AfterRenewal />,
    },
  },
];

export default function DiffPage() {
  return (
    <div className="bg-white text-[#1f2937]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Nav />
      <Intro />
      {SCENES.map((s, i) => (
        <SceneBlock key={s.id} scene={s} index={i} />
      ))}
      <Closing />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-40 backdrop-blur bg-white/85 border-b border-black/10">
      <div className="px-6 h-14 flex items-center justify-between">
        <Link href="/versions/18" className="flex items-center gap-2.5 font-bold tracking-tight">
          <div className="h-7 w-7 rounded-md grid place-items-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #ef4444 0%, #10b981 100%)" }}>C</div>
          <span>Claritas</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-black/50 font-normal ml-1">Side-by-side comparison</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-black/60">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500" /> Before</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> After</span>
        </div>
        <Link href="#" className="text-sm bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-emerald-600">
          See it on your data →
        </Link>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] text-black/50 mb-6">A side-by-side comparison · 3 scenes</div>
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-[-0.04em]">
          <span className="text-red-500">The CRM you have.</span>
          <br />
          <span className="text-emerald-600">The CRM you want.</span>
        </h1>
        <p className="mt-8 text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
          Three scenes from the working week of an enterprise revenue operator. On the left: the system most teams run on. On the right: the same operator, on Claritas. Same data. Same week. Different decade.
        </p>
        <div className="mt-10 inline-flex items-center gap-2 text-sm text-black/50">
          <span>Scroll ↓ to compare</span>
        </div>
      </div>
    </section>
  );
}

function SceneBlock({ scene, index }: { scene: Scene; index: number }) {
  const [hover, setHover] = useState<"before" | "after" | null>(null);
  return (
    <section className="border-t border-black/10">
      {/* Scene title */}
      <div className="px-6 py-12 text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] text-black/40 mb-3 font-mono">Scene {String(index + 1).padStart(2, "0")} of {String(SCENES.length).padStart(2, "0")}</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{scene.title}</h2>
      </div>

      {/* Diff pane */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setHover("before")}
          onMouseLeave={() => setHover(null)}
          className="bg-red-50/50 border-b md:border-b-0 md:border-r border-red-200 p-8 md:p-12 transition-all"
          style={{ filter: hover === "after" ? "saturate(0.5) opacity(0.6)" : "none" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] uppercase tracking-[0.32em] font-mono text-red-700 bg-red-100 px-2 py-1 rounded">− Before</span>
            <span className="text-xs text-red-700/70">Your current CRM</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-red-950">
            {scene.before.headline}
          </h3>
          <ul className="mt-8 space-y-3">
            {scene.before.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base">
                <X className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                <span className="text-red-950/80">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">{scene.before.mock}</div>
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onMouseEnter={() => setHover("after")}
          onMouseLeave={() => setHover(null)}
          className="bg-emerald-50/50 p-8 md:p-12 transition-all"
          style={{ filter: hover === "before" ? "saturate(0.5) opacity(0.6)" : "none" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] uppercase tracking-[0.32em] font-mono text-emerald-700 bg-emerald-100 px-2 py-1 rounded">+ After</span>
            <span className="text-xs text-emerald-700/70">With Claritas</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-emerald-950">
            {scene.after.headline}
          </h3>
          <ul className="mt-8 space-y-3">
            {scene.after.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                <span className="text-emerald-950/80">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">{scene.after.mock}</div>
        </motion.div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="border-t border-black/10 px-6 py-24 md:py-32 text-center bg-[#0f172a] text-white">
      <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
        Run this comparison on <span className="text-emerald-400">your own data.</span>
      </h2>
      <p className="mt-8 text-xl max-w-2xl mx-auto text-white/65 leading-relaxed">
        We&apos;ll spin up a sandbox with your last 90 days of CRM exports, side-by-side with Claritas. Decide for yourself, on your numbers, in 30 days. Free.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="#" className="bg-emerald-500 text-black px-8 py-4 rounded-md font-bold inline-flex items-center justify-center gap-2 hover:bg-white">
          Start the comparison <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="#" className="border border-white/20 px-8 py-4 rounded-md font-medium hover:bg-white/10">
          Talk to a migration engineer
        </Link>
      </div>
      <div className="mt-12 text-xs uppercase tracking-[0.28em] text-white/40">V18 · Diff</div>
    </section>
  );
}

/* ────── Mock visuals ────── */

function BeforeMonday() {
  return (
    <div className="border border-red-300 bg-white rounded-md p-3 shadow-sm">
      <div className="flex gap-1 mb-3">
        {["CRM", "Inbox", "Calendar", "Sheet 4"].map((t, i) => (
          <div key={t} className={`text-[10px] px-2 py-0.5 rounded-t ${i === 0 ? "bg-white border border-b-0 border-red-300" : "bg-red-100 text-red-700"}`}>{t}</div>
        ))}
      </div>
      <div className="space-y-1.5">
        <div className="h-3 bg-red-100 rounded w-3/4" />
        <div className="h-3 bg-red-100 rounded w-1/2" />
        <div className="h-3 bg-red-100 rounded w-2/3" />
        <div className="h-3 bg-red-100 rounded w-5/6" />
        <div className="h-3 bg-red-100 rounded w-1/3" />
      </div>
      <div className="mt-3 text-[10px] text-red-700/70 italic font-mono">Last refresh: Friday 17:42</div>
    </div>
  );
}

function AfterMonday() {
  return (
    <div className="border border-emerald-300 bg-white rounded-md p-4 shadow-sm">
      <div className="text-[10px] uppercase tracking-wider text-emerald-700 font-mono mb-2 flex items-center justify-between">
        <span>Today · 3 deals need you</span>
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> live</span>
      </div>
      {[
        ["FGV Holdings · Q2 Renewal", "RM 480k", "AI drafted reply"],
        ["Singtel · ASEAN", "RM 2.1M", "Send by 11:00"],
        ["Estate · Onboarding", "RM 95k", "Confirm Thursday"],
      ].map(([co, val, action]) => (
        <div key={co} className="flex items-center justify-between py-2 border-b border-emerald-100 last:border-0 text-xs">
          <span className="font-medium">{co}</span>
          <span className="font-mono text-emerald-700">{val}</span>
          <span className="text-[10px] text-emerald-600">{action} →</span>
        </div>
      ))}
    </div>
  );
}

function BeforeForecast() {
  return (
    <div className="border border-red-300 bg-white rounded-md p-3">
      <div className="text-[10px] font-mono text-red-700 mb-2">forecast_v47_FINAL_v2_revised(Sara).xlsx</div>
      <div className="grid grid-cols-5 gap-px bg-red-200">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="bg-white h-5 text-[8px] flex items-center px-1 text-red-700/40 font-mono">
            {i % 7 === 3 ? "#REF!" : i % 11 === 5 ? "##" : ""}
          </div>
        ))}
      </div>
      <div className="mt-2 text-[10px] text-red-600 italic">3 broken formulas · last edited by 4 people</div>
    </div>
  );
}

function AfterForecast() {
  return (
    <div className="border border-emerald-300 bg-white rounded-md p-4">
      <div className="text-[10px] uppercase font-mono text-emerald-700 mb-3">Forecast · Q2 · 90% confidence</div>
      <div className="text-3xl font-bold tracking-tight">RM 3.92M</div>
      <div className="text-xs text-emerald-700 mb-3">Within ±RM 180k · auto-refreshed 2 min ago</div>
      <div className="h-12 flex items-end gap-1">
        {[40, 60, 50, 80, 70, 90, 100, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-emerald-500" style={{ height: `${h}%`, opacity: 0.4 + i * 0.08 }} />
        ))}
      </div>
      <div className="mt-3 text-[10px] text-emerald-700/70 font-mono">Drill into any cell → see the deals that drive it</div>
    </div>
  );
}

function BeforeRenewal() {
  return (
    <div className="border border-red-300 bg-white rounded-md p-4">
      <div className="text-[10px] uppercase font-mono text-red-700 mb-3">Customer profile · FGV Holdings</div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between"><span className="text-black/50">Last contact</span><span className="text-red-600 italic">unknown</span></div>
        <div className="flex justify-between"><span className="text-black/50">Open asks</span><span className="text-red-600 italic">??</span></div>
        <div className="flex justify-between"><span className="text-black/50">Sentiment</span><span className="text-red-600 italic">no data</span></div>
        <div className="flex justify-between"><span className="text-black/50">Win prob.</span><span className="text-red-600 italic">gut: 60%?</span></div>
      </div>
      <div className="mt-4 text-[10px] text-red-600 italic">"I'll wing it"</div>
    </div>
  );
}

function AfterRenewal() {
  return (
    <div className="border border-emerald-300 bg-white rounded-md p-4">
      <div className="text-[10px] uppercase font-mono text-emerald-700 mb-3 flex items-center gap-2">
        <span>Pre-call brief · auto-generated 9 min ago</span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between"><span className="text-black/50">Last contact</span><span className="font-medium">12 Apr · Board call (47 min)</span></div>
        <div className="flex justify-between"><span className="text-black/50">Open asks</span><span className="font-medium text-emerald-700">3 unresolved</span></div>
        <div className="flex justify-between"><span className="text-black/50">Sentiment trend</span><span className="font-medium text-emerald-700">↑ improving (28%)</span></div>
        <div className="flex justify-between"><span className="text-black/50">Win prob.</span><span className="font-medium text-emerald-700">82% · explainable</span></div>
      </div>
      <div className="mt-4 text-[10px] text-emerald-700 font-mono">"Lead with the loyalty pilot. They asked twice."</div>
    </div>
  );
}
