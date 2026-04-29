"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Heart, MessageCircle, Share2, ChevronUp, ChevronDown } from "lucide-react";

/* ──────────────────────────────────────────────
   V16 — REEL
   Full-screen scroll-snapped vertical slides. TikTok grammar
   applied to enterprise CRM. Each slide is one customer story or
   one feature, with a fixed engagement rail on the right.
   Thesis: attention is short. Make every screen earn its scroll.
   ────────────────────────────────────────────── */

type Slide = {
  id: string;
  bg: string;
  fg: string;
  accent: string;
  eyebrow: string;
  headline: string;
  byline?: string;
  body?: string;
  metric?: { v: string; l: string };
  cta?: string;
};

const SLIDES: Slide[] = [
  {
    id: "intro",
    bg: "#000000",
    fg: "#ffffff",
    accent: "#f43f5e",
    eyebrow: "CLARITAS · 18 stories · scroll ↓",
    headline: "The CRM you've been waiting for, told the way you actually consume things now.",
    body: "One screen at a time. Eighteen seconds each. Scroll when you're ready.",
    cta: "Start the reel ↓",
  },
  {
    id: "fgv",
    bg: "#0a1628",
    fg: "#ffffff",
    accent: "#fbbf24",
    eyebrow: "STORY 01 · FGV HOLDINGS",
    headline: "We replaced four legacy systems with one Claritas instance.",
    byline: "Datin Sara Wahid · Group COO",
    metric: { v: "4 → 1", l: "systems consolidated" },
    body: "Eighteen months ago we ran on Salesforce, HubSpot, two homegrown tools, and Excel. Now we run on Claritas. Renewals haven't been this easy in twenty years.",
  },
  {
    id: "speed",
    bg: "#fafafa",
    fg: "#0a0a0a",
    accent: "#dc2626",
    eyebrow: "FEATURE 01 · SPEED",
    headline: "47 milliseconds.",
    metric: { v: "47ms", l: "median p99 latency" },
    body: "The average CRM responds in 340ms. Claritas responds in 47. You feel it on every click. Your team feels it for eight hours a day.",
  },
  {
    id: "singtel",
    bg: "#1e1b4b",
    fg: "#ffffff",
    accent: "#a78bfa",
    eyebrow: "STORY 02 · SINGTEL",
    headline: "1,400 reps. 6 markets. Onboarded in 11 weeks.",
    byline: "VP Sales Ops · APAC",
    metric: { v: "11 wks", l: "vs 11 months prior" },
    body: "The previous CRM took eleven months to roll out, market by market. Claritas was live in eleven weeks. Our adoption rate hit 94% by week six.",
  },
  {
    id: "ai",
    bg: "#0f172a",
    fg: "#ffffff",
    accent: "#22d3ee",
    eyebrow: "FEATURE 02 · AI AGENT",
    headline: "Drafts the email. Books the call. Asks before it ships.",
    metric: { v: "0", l: "actions without your approval" },
    body: "The Claritas AI agent doesn't act on its own. It proposes. You approve. It executes. Native to the runtime, sub-100ms, audited end-to-end.",
  },
  {
    id: "estate",
    bg: "#fff7ed",
    fg: "#0a0a0a",
    accent: "#ea580c",
    eyebrow: "STORY 03 · ESTATE 123",
    headline: "We didn't need another database. We needed a system that kept up.",
    byline: "Founder & CEO",
    metric: { v: "11s", l: "first deal logged" },
    body: "From signup to our first opportunity in pipeline: eleven seconds. The previous tool took 84 days to migrate before we could log a single deal.",
  },
  {
    id: "renewal",
    bg: "#064e3b",
    fg: "#ffffff",
    accent: "#34d399",
    eyebrow: "PROOF 01 · RENEWAL",
    headline: "98.4% of customers renew. Five years running.",
    metric: { v: "98.4%", l: "audited annually by EY" },
    body: "Industry median: 22%. Our cohort, audited yearly by Ernst & Young Singapore. The number that has not moved in five years is the only number we care about.",
  },
  {
    id: "cta",
    bg: "#000000",
    fg: "#ffffff",
    accent: "#f43f5e",
    eyebrow: "READY?",
    headline: "Try it for 30 days. Bring your data. Keep what you build.",
    body: "No credit card. White-glove migration. Live in 11 seconds. The numbers above are real, audited, and yours to verify.",
    cta: "Start free trial →",
  },
];

export default function ReelPage() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sync active index with scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: [0.6], root: containerRef.current }
    );
    slideRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const goTo = (idx: number) => {
    slideRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white h-[calc(100vh-3.5rem)] overflow-hidden flex flex-col" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Slim top branding */}
      <header className="absolute top-14 left-0 right-0 z-30 px-6 h-12 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <Link href="/versions/16" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-white grid place-items-center text-black text-xs font-bold">C</div>
          <span className="text-sm font-semibold">claritas</span>
          <span className="text-[10px] text-white/50">· stories</span>
        </Link>
        <button onClick={() => setMuted(!muted)} className="h-8 w-8 grid place-items-center rounded-full bg-black/40 backdrop-blur border border-white/10">
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </header>

      {/* Slide column */}
      <div ref={containerRef} className="flex-1 overflow-y-scroll snap-y snap-mandatory scrollbar-none">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => { slideRefs.current[i] = el; }}
            data-idx={i}
            className="h-full w-full snap-start snap-always relative flex items-center justify-center"
            style={{ background: s.bg, color: s.fg, minHeight: "calc(100vh - 3.5rem)" }}
          >
            {/* Decorative corner accent */}
            <div aria-hidden className="absolute top-0 left-0 right-0 h-1" style={{ background: s.accent }} />
            <div aria-hidden className="absolute bottom-0 left-0 w-1 h-32" style={{ background: s.accent }} />

            <SlideBody slide={s} active={active === i} />

            {/* Right engagement rail */}
            <div className="absolute right-4 md:right-8 bottom-1/4 flex flex-col items-center gap-5 text-xs">
              {[Heart, MessageCircle, Share2].map((Icon, j) => (
                <button key={j} className="flex flex-col items-center gap-1 group">
                  <div className="h-11 w-11 grid place-items-center rounded-full bg-white/10 backdrop-blur border border-white/15 group-hover:bg-white/20 transition">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] opacity-70">{[2400, 142, 888][j]}</span>
                </button>
              ))}
            </div>

            {/* Bottom progress + counter */}
            <div className="absolute bottom-6 left-6 right-20 md:right-28">
              <div className="text-[10px] uppercase tracking-[0.22em] mb-2 opacity-70">
                {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>
              <div className="flex gap-1">
                {SLIDES.map((_, j) => (
                  <div key={j} className="flex-1 h-0.5 bg-white/15 rounded-full overflow-hidden">
                    <motion.div className="h-full"
                      style={{ background: s.accent }}
                      animate={{ width: j < i ? "100%" : j === i ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Side controls */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        <button onClick={() => goTo(Math.max(0, active - 1))}
          className="h-10 w-10 grid place-items-center rounded-full bg-white/10 backdrop-blur border border-white/15 hover:bg-white/20" disabled={active === 0}>
          <ChevronUp className="h-4 w-4" />
        </button>
        <button onClick={() => goTo(Math.min(SLIDES.length - 1, active + 1))}
          className="h-10 w-10 grid place-items-center rounded-full bg-white/10 backdrop-blur border border-white/15 hover:bg-white/20" disabled={active === SLIDES.length - 1}>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Left index */}
      <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1.5">
        {SLIDES.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)}
            className="h-1.5 w-1.5 rounded-full transition-all"
            style={{
              background: active === i ? s.accent : "rgba(255,255,255,0.3)",
              transform: active === i ? "scale(2)" : "scale(1)",
            }} />
        ))}
      </div>
    </div>
  );
}

function SlideBody({ slide, active }: { slide: Slide; active: boolean }) {
  return (
    <div className="px-6 md:px-16 max-w-3xl text-center">
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] uppercase tracking-[0.32em] font-mono mb-6" style={{ color: slide.accent }}>
              {slide.eyebrow}
            </div>

            {slide.metric && (
              <div className="mb-8">
                <div className="font-bold leading-none tracking-[-0.05em] text-[18vw] md:text-[10vw]" style={{ color: slide.accent }}>
                  {slide.metric.v}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] opacity-65">{slide.metric.l}</div>
              </div>
            )}

            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.025em]">
              {slide.headline}
            </h2>

            {slide.body && (
              <p className="mt-6 text-lg md:text-xl opacity-75 max-w-xl mx-auto leading-snug">
                {slide.body}
              </p>
            )}

            {slide.byline && (
              <div className="mt-8 inline-flex items-center gap-3 text-sm opacity-70">
                <span className="h-9 w-9 rounded-full grid place-items-center text-xs font-bold" style={{ background: slide.accent, color: slide.bg }}>
                  {slide.byline.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <span>{slide.byline}</span>
              </div>
            )}

            {slide.cta && (
              <Link href="#" className="mt-10 inline-block px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition"
                style={{ background: slide.accent, color: slide.bg }}>
                {slide.cta}
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
