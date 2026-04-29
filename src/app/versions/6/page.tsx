"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

/* ──────────────────────────────────────────────
   V6 — KINETIC
   Motion showcase · pinned/stacking sections · oversized numerics
   Big sans display · scroll-driven choreography · awwwards bait
   Tone: bold, declarative, performative
   ────────────────────────────────────────────── */

const FLAME = "#ff5722";
const INK = "#0a0a0a";

export default function KineticPage() {
  return (
    <div className="bg-white text-black overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav />
      <Hero />
      <Marquee />
      <PinnedNumbers />
      <Stack />
      <BigQuote />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-12 z-40 px-4 pt-3">
      <div className="mx-auto max-w-[1500px] flex items-center justify-between bg-white/90 backdrop-blur border border-black/10 rounded-full px-6 py-2.5">
        <Link href="/versions/6" className="flex items-center gap-2">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="h-7 w-7 rounded-full grid place-items-center text-white font-bold"
            style={{ background: FLAME }}>C</motion.div>
          <span className="font-bold tracking-tight text-lg">Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#" className="hover:text-[#ff5722]">Platform</Link>
          <Link href="#" className="hover:text-[#ff5722]">Customers</Link>
          <Link href="#" className="hover:text-[#ff5722]">Manifesto</Link>
          <Link href="#" className="hover:text-[#ff5722]">Pricing</Link>
        </nav>
        <Link href="#" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#ff5722] transition">
          Get started →
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[140vh]">
      <motion.div style={{ y, scale, opacity }} className="sticky top-12 h-[88vh] flex flex-col items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: FLAME }}>
          ⌘ The CRM, Redrawn
        </motion.div>
        <motion.h1 className="font-bold text-center leading-[0.85] tracking-[-0.045em] text-[14vw] md:text-[11vw]"
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="block">Move</span>
          <span className="block italic font-light" style={{ color: FLAME }}>at the</span>
          <span className="block">speed of</span>
          <span className="block italic font-light">the deal.</span>
        </motion.h1>
        <motion.p className="mt-10 text-xl text-black/60 max-w-xl text-center leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Claritas is the CRM that doesn&apos;t make you wait — for pages, for forecasts, for the answers your buyer needs right now.
        </motion.p>
        <motion.div className="mt-10 flex gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <Link href="#" className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#ff5722] transition">
            Start free →
          </Link>
          <Link href="#" className="border border-black/20 text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            Watch reel
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const words = ["MOVE FASTER", "CLOSE SMARTER", "RETAIN LONGER", "FORECAST TRUER", "WORK SIMPLER", "MOVE FASTER", "CLOSE SMARTER", "RETAIN LONGER"];
  return (
    <section className="border-y border-black overflow-hidden py-8" style={{ background: FLAME, color: "white" }}>
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="text-7xl md:text-9xl font-black tracking-[-0.04em] flex items-center gap-12">
            {w} <span className="text-3xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function PinnedNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // 4 numerics with sequential reveals
  const stages = [
    { v: "47ms", l: "Median page load", desc: "From click to fully interactive. We benchmark every release." },
    { v: "11s", l: "Time to first deal", desc: "From signup to your first opportunity in pipeline. Median." },
    { v: "98.4%", l: "Renewal rate", desc: "Across 247 enterprise customers. Audited yearly. Public." },
    { v: "4.2×", l: "Pipeline velocity", desc: "What our customers report after 90 days. Conservative measure." },
  ];

  return (
    <section ref={ref} className="relative" style={{ height: `${stages.length * 100}vh` }}>
      <div className="sticky top-12 h-[88vh] grid place-items-center px-6">
        {stages.map((s, i) => (
          <PinnedStat
            key={s.v}
            stage={s}
            index={i}
            total={stages.length}
            progress={smooth}
          />
        ))}
      </div>
    </section>
  );
}

function PinnedStat({
  stage,
  index,
  total,
  progress,
}: {
  stage: { v: string; l: string; desc: string };
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [0, -50]);
  return (
    <motion.div style={{ opacity, y }} className="absolute text-center max-w-4xl">
      <div className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: FLAME }}>
        ⌘ Stat {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <div className="font-bold leading-none tracking-[-0.06em] text-[20vw] md:text-[15vw]" style={{ color: INK }}>{stage.v}</div>
      <div className="mt-6 text-3xl md:text-4xl font-medium tracking-tight">{stage.l}</div>
      <p className="mt-4 text-lg text-black/55 max-w-xl mx-auto">{stage.desc}</p>
    </motion.div>
  );
}

function Stack() {
  const cards = [
    { tag: "01 / Pipeline", t: "See every deal. Move every deal.", c: "Drag-and-drop pipeline. Bulk actions. Inline edits. Built like a spreadsheet that thinks.", bg: "#0a0a0a", text: "white" },
    { tag: "02 / AI Agent", t: "Drafts the email. Books the call.", c: "Native LLM agents that don't bolt on — they're how Claritas works. Approve before send.", bg: FLAME, text: "white" },
    { tag: "03 / Forecasts", t: "Predictions you can defend.", c: "Confidence bands you can show your CFO. Every number traces back to a contact, a deal, a date.", bg: "#fef3c7", text: INK },
    { tag: "04 / Inbox", t: "Email, calls, chat. One thread.", c: "Every interaction with every customer in one searchable timeline. Forever.", bg: "white", text: INK },
  ];
  return (
    <section className="relative" style={{ height: `${cards.length * 90}vh` }}>
      {cards.map((c, i) => (
        <div key={i} className="sticky top-12 h-[88vh] flex items-center justify-center px-6"
          style={{ zIndex: i + 1 }}>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-200px" }}
            className="rounded-3xl w-full max-w-5xl aspect-[16/10] grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)]"
            style={{ background: c.bg, color: c.text }}>
            <div className="p-10 md:p-14 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-[0.32em] opacity-70">{c.tag}</div>
              <div>
                <h3 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">{c.t}</h3>
                <p className="mt-6 text-lg opacity-75 max-w-md leading-relaxed">{c.c}</p>
                <Link href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b pb-1" style={{ borderColor: c.text }}>
                  Tour the feature →
                </Link>
              </div>
            </div>
            <div className="p-6 md:p-10 grid place-items-center" style={{ background: c.text === "white" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)" }}>
              <div className="text-[18vw] md:text-[14vw] font-bold leading-none opacity-30 tracking-tighter">
                0{i + 1}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

function BigQuote() {
  return (
    <section className="py-32 px-6" style={{ background: INK, color: "white" }}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="text-xs uppercase tracking-[0.4em] mb-12" style={{ color: FLAME }}>⌘ What operators say</div>
          <p className="font-bold text-5xl md:text-8xl leading-[0.95] tracking-[-0.03em]">
            We didn&apos;t buy a CRM.<br />
            <span style={{ color: FLAME }}>We bought speed.</span>
          </p>
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <p className="text-xl text-white/65 leading-relaxed">
              &ldquo;Our reps were spending 40% of their day on admin. After Claritas, that&apos;s under 8%. The deals they used to lose to slow follow-up — they&apos;re closing them now.&rdquo;
            </p>
            <div className="md:text-right">
              <div className="text-xs uppercase tracking-[0.28em] text-white/50">Head of Revenue</div>
              <div className="mt-1 text-2xl font-medium">FGV Holdings · Plantation Group</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="font-bold text-7xl md:text-[10rem] leading-[0.85] tracking-[-0.05em]">
        Move at <em className="italic font-light" style={{ color: FLAME }}>your</em><br />speed.
      </motion.h2>
      <p className="mt-10 text-xl text-black/60 max-w-xl mx-auto">
        30-day trial. No credit card. White-glove onboarding from minute one.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="#" className="bg-black text-white px-10 py-5 rounded-full font-medium hover:bg-[#ff5722] transition">
          Start free trial →
        </Link>
        <Link href="#" className="border border-black/20 px-10 py-5 rounded-full font-medium hover:bg-black hover:text-white transition">
          Book a 20-min demo
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-[1500px] px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 text-sm pb-10 border-b border-black/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full" style={{ background: FLAME }} />
              <span className="font-bold text-lg">Claritas</span>
            </div>
            <p className="mt-3 text-black/55 max-w-xs">Move at the speed of the deal.</p>
          </div>
          {[
            { h: "Platform", l: ["Pipeline", "AI Agent", "Forecasts", "Inbox", "Pricing"] },
            { h: "Company", l: ["Manifesto", "Customers", "Press", "Careers"] },
            { h: "Resources", l: ["Docs", "Status", "Changelog", "Contact"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="font-semibold">{c.h}</div>
              <ul className="mt-3 space-y-2 text-black/55">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-[#ff5722]">{x}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex justify-between text-xs text-black/50">
          <span>© Claritas, 2026 · Built for builders.</span>
          <span>V6 · Kinetic</span>
        </div>
      </div>
    </footer>
  );
}
