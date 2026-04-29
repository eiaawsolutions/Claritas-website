"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ──────────────────────────────────────────────
   V17 — MANIFESTO
   Pinned horizontal scroll. You scroll vertically; the page moves
   sideways through enormous declarative panels. The site is a thesis,
   delivered one statement at a time.
   Thesis: enterprise sales is rhetoric. Deliver yours like one.
   ────────────────────────────────────────────── */

const PANELS = [
  {
    n: "I.",
    headline: "We hold that the customer is not a record.",
    body: "A row in a database is not a person. The systems that treat it as one fail in their second year. The systems that don't, compound for decades. Claritas is built around the second proposition.",
  },
  {
    n: "II.",
    headline: "We hold that retention compounds. Acquisition does not.",
    body: "The cheapest customer is the one you already have. The most expensive number on the income statement is the one you stopped serving in year three because the system forgot what they wanted in year two.",
  },
  {
    n: "III.",
    headline: "We hold that the operator outranks the algorithm.",
    body: "Models propose. Humans dispose. Every AI action in Claritas asks for approval before it ships. We are not building autonomous sales. We are building leverage for the operator who already knows the customer.",
  },
  {
    n: "IV.",
    headline: "We hold that one source of truth is not a feature.",
    body: "It is the floor. It is the precondition for any analytics, any forecast, any AI, any decision worth defending. The four-system enterprise is the four-failure enterprise. Pick one. Make it canonical. Make it Claritas.",
  },
  {
    n: "V.",
    headline: "We hold that software should be defended by the people who use it.",
    body: "If your operators don't open the system on Monday morning by reflex, the system has failed — regardless of what features it shipped. We measure adoption first, last, and always. So should you.",
  },
  {
    n: "VI.",
    headline: "We hold that long relationships are the only kind worth instrumenting.",
    body: "Eighteen years. Sixty-four engagements. 98.4% renewal. The numbers above are not vanity. They are the discipline. Every quarter we don't lose a customer is a quarter the architecture earned its rent.",
  },
  {
    n: "VII.",
    headline: "Bring this thinking inside.",
    body: "If any of the above sounds like the way your team already talks, you should be talking to ours. Thirty-day trial. White-glove migration. The first conversation is private and without obligation.",
    cta: true,
  },
];

export default function ManifestoPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  // Move horizontally: 0 → -((panels-1)/panels * 100%)
  // We want the last panel to fully fill the viewport at progress=1
  const xPct = useTransform(scrollYProgress, [0, 1], ["0%", `-${(PANELS.length - 1) * (100 / PANELS.length)}%`]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-[#fafaf5] text-[#0a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      {/* Header */}
      <header className="fixed top-14 left-0 right-0 z-30 backdrop-blur bg-[#fafaf5]/80 border-b border-black/10">
        <div className="px-6 h-12 flex items-center justify-between">
          <Link href="/versions/17" className="flex items-center gap-3">
            <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>Claritas</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-black/50 font-sans">Seven Holdings · A Manifesto</span>
          </Link>
          <div className="hidden md:flex items-center gap-5 text-[11px] uppercase tracking-[0.22em] font-sans">
            <span className="text-black/50">scroll ↓ to advance →</span>
            <Link href="#" className="bg-black text-white px-4 py-1.5 hover:bg-[#dc2626] font-bold rounded-sm">
              Read in full →
            </Link>
          </div>
        </div>
        <motion.div className="h-0.5 bg-[#dc2626]" style={{ width: progressBar }} />
      </header>

      {/* Pinned section: tall vertical container, pinned canvas with horizontal track */}
      <section ref={ref} style={{ height: `${PANELS.length * 100}vh` }} className="relative">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-hidden">
          <motion.div className="flex h-full" style={{ x: xPct, width: `${PANELS.length * 100}%` }}>
            {PANELS.map((p, i) => (
              <Panel key={p.n} panel={p} index={i} total={PANELS.length} />
            ))}
          </motion.div>

          {/* Counter bottom-right */}
          <div className="absolute bottom-6 right-8 flex items-baseline gap-2 font-sans">
            <span className="text-6xl font-bold tracking-tight tabular-nums" style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}>
              <PanelCounter scrollYProgress={scrollYProgress} total={PANELS.length} />
            </span>
            <span className="text-sm uppercase tracking-[0.22em] text-black/50">/ {String(PANELS.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function PanelCounter({ scrollYProgress, total }: { scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]; total: number }) {
  const idx = useTransform(scrollYProgress, (v) => String(Math.min(total, Math.floor(v * total) + 1)).padStart(2, "0"));
  return <motion.span>{idx}</motion.span>;
}

function Panel({ panel, index, total }: { panel: typeof PANELS[number]; index: number; total: number }) {
  const isCTA = panel.cta;

  return (
    <div className="shrink-0 h-full flex items-center justify-center px-10 md:px-24 relative"
      style={{ width: `${100 / total}%`, background: isCTA ? "#0a0a0a" : index % 2 === 0 ? "#fafaf5" : "#f5f1e8", color: isCTA ? "#fafaf5" : "#0a0a0a" }}>
      {/* Watermark numeral */}
      <div aria-hidden className="absolute -left-8 top-12 select-none pointer-events-none text-[40vh] leading-none font-bold opacity-[0.04]"
        style={{ fontFamily: "'Old Standard TT', Georgia, serif", color: isCTA ? "#fafaf5" : "#0a0a0a" }}>
        {panel.n.replace(".", "")}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-16" style={{ background: isCTA ? "#dc2626" : "#dc2626" }} />
          <span className="text-[11px] uppercase tracking-[0.32em] font-bold font-sans" style={{ color: isCTA ? "#dc2626" : "#dc2626" }}>
            Holding № {panel.n.replace(".", "")}
          </span>
        </div>

        {/* Roman numeral */}
        <div className="text-7xl md:text-8xl font-bold mb-6 leading-none tracking-tight"
          style={{ fontFamily: "'Old Standard TT', Georgia, serif", color: isCTA ? "#dc2626" : "#dc2626" }}>
          {panel.n}
        </div>

        {/* Headline */}
        <h2 className="font-light text-5xl md:text-7xl leading-[1.04] tracking-[-0.025em] mb-10"
          style={{ fontFamily: "'Old Standard TT', 'Cormorant Garamond', Georgia, serif" }}>
          {panel.headline}
        </h2>

        {/* Body */}
        <p className="text-xl md:text-2xl leading-[1.55] font-light max-w-2xl"
          style={{ color: isCTA ? "rgba(250,250,245,0.78)" : "rgba(10,10,10,0.72)" }}>
          {panel.body}
        </p>

        {isCTA && (
          <div className="mt-12 flex flex-wrap gap-4 font-sans">
            <Link href="#" className="bg-[#dc2626] text-white px-7 py-4 rounded-sm text-[12px] uppercase tracking-[0.22em] font-bold hover:bg-white hover:text-[#dc2626]">
              Begin a private conversation →
            </Link>
            <Link href="#" className="border border-white/30 px-7 py-4 rounded-sm text-[12px] uppercase tracking-[0.22em] font-bold hover:bg-white/10">
              Read all seven, in print
            </Link>
          </div>
        )}

        {/* Pagination dots */}
        <div className="absolute -bottom-24 left-0 flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, j) => (
            <div key={j} className="h-1 rounded-full transition-all"
              style={{
                width: j === index ? 32 : 8,
                background: j === index ? (isCTA ? "#dc2626" : "#0a0a0a") : (isCTA ? "rgba(250,250,245,0.2)" : "rgba(10,10,10,0.18)"),
              }} />
          ))}
        </div>
      </motion.div>

      {/* Right edge — signature/byline */}
      <div className="absolute bottom-12 right-12 text-right text-[10px] uppercase tracking-[0.32em] font-sans"
        style={{ color: isCTA ? "rgba(250,250,245,0.5)" : "rgba(10,10,10,0.4)" }}>
        The Founding Partners<br />
        <span style={{ color: isCTA ? "rgba(250,250,245,0.35)" : "rgba(10,10,10,0.3)" }}>Kuala Lumpur · MMVIII</span>
      </div>
    </div>
  );
}
