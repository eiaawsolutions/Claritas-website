"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

/* ──────────────────────────────────────────────
   V20 — CINEMA
   Standard homepage architecture executed at film-grade quality.
   Dark editorial. Cinematic hero photo. Oversized serif. Gold accent.
   For: enterprise C-suite buyer who wants gravitas + clarity in 5 sec.
   ────────────────────────────────────────────── */

const GOLD = "#d4af37";

export default function CinemaPage() {
  return (
    <div className="bg-[#0a0a0a] text-white antialiased" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
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

function Nav() {
  return (
    <header className="fixed top-14 left-0 right-0 z-30 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-[1500px] px-6 h-16 flex items-center justify-between">
        <Link href="/versions/20" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <div className="h-7 w-7 rounded-sm grid place-items-center text-black font-bold text-sm" style={{ background: GOLD }}>C</div>
          <span>Claritas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="#" className="hover:text-white transition">Platform</Link>
          <Link href="#" className="hover:text-white transition">Customers</Link>
          <Link href="#" className="hover:text-white transition">Pricing</Link>
          <Link href="#" className="hover:text-white transition">Resources</Link>
          <Link href="#" className="hover:text-white transition">Company</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline text-sm text-white/70 hover:text-white">Sign in</Link>
          <Link href="#" className="text-sm bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-[#d4af37]">
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[760px] pt-16 overflow-hidden">
      {/* Cinematic photo */}
      <div className="absolute inset-0">
        <Image
          src="/v9/hero-executive.jpg"
          alt="Executive leadership"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 30%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.95) 100%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(10,10,10,0.4) 80%)",
        }} />
      </div>

      <div className="relative h-full mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col justify-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[11px] uppercase tracking-[0.32em] mb-7" style={{ color: GOLD }}>
            ◆ The CRM for the next decade of revenue ops
          </div>
          <h1 className="font-light leading-[0.95] tracking-[-0.025em] text-[10vw] md:text-[7.5vw] max-w-5xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Run revenue
            <br />
            like the institution
            <br />
            <em className="italic" style={{ color: GOLD }}>you intend to be.</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
            Claritas is the unified customer platform trusted by 247 enterprises across Asia-Pacific. Marketing, sales, and service — on one record, with one truth.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="#" className="bg-white text-black px-7 py-3.5 rounded-full font-medium hover:bg-[#d4af37] inline-flex items-center gap-2">
              Request a private demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#" className="inline-flex items-center gap-2.5 text-white hover:text-[#d4af37]">
              <span className="h-10 w-10 rounded-full border border-white/30 grid place-items-center group-hover:border-[#d4af37]">
                <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
              </span>
              Watch the 90-second film
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const logos = ["FGV HOLDINGS", "SINGTEL", "NANDO'S", "ESTATE 123", "INTEL", "PFIZER", "ASTRO"];
  return (
    <section className="border-y border-white/10 py-8 px-6">
      <div className="mx-auto max-w-[1500px] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-14">
        <div className="text-[10px] uppercase tracking-[0.32em] text-white/40 shrink-0">Entrusted by</div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {logos.map((l) => (
            <span key={l} className="text-sm tracking-[0.2em] text-white/45 hover:text-white transition">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      tag: "Marketing",
      t: "Campaigns built on knowledge",
      c: "Every audience drawn from your unified customer record. Every send measured against the customer's full journey, not the campaign's narrow window.",
      img: "/v9/product-marketing.jpg",
    },
    {
      tag: "Sales",
      t: "Pipeline as a discipline",
      c: "Forecasts you can defend in any board meeting. Confidence bands that trace back to a specific deal, contact, and last interaction. AI-assisted, never AI-replaced.",
      img: "/v9/product-sales.jpg",
    },
    {
      tag: "Service",
      t: "Resolution as the only metric",
      c: "Every ticket, every customer, every history — in one elegant timeline. We measure outcomes, not tickets closed. Your customers feel the difference.",
      img: "/v9/product-support.jpg",
    },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.32em] mb-5" style={{ color: GOLD }}>The platform</div>
            <h2 className="font-light text-5xl md:text-7xl leading-[1] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              One instrument.<br /><em className="italic" style={{ color: GOLD }}>Three offices.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-lg text-white/65 leading-relaxed">
            Claritas unifies marketing, sales, and service on a single source of truth — engineered around the customer relationship, not the funnel diagram.
          </p>
        </div>

        <div className="space-y-32">
          {items.map((it, i) => (
            <motion.div
              key={it.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                <Image src={it.img} alt={it.t} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.32em] font-bold" style={{ color: GOLD }}>
                  Plate № {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <div className="text-[11px] uppercase tracking-[0.32em] mb-4" style={{ color: GOLD }}>{it.tag}</div>
                <h3 className="font-light text-4xl md:text-5xl leading-[1.05] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {it.t}
                </h3>
                <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-md">{it.c}</p>
                <Link href="#" className="mt-8 inline-flex items-center gap-2 text-sm border-b border-white/40 pb-1 hover:text-[#d4af37] hover:border-[#d4af37]">
                  Read the case studies <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Customer() {
  return (
    <section className="py-32 px-6 border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-[1300px] text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] mb-8" style={{ color: GOLD }}>From the operators</div>
        <blockquote className="font-light text-3xl md:text-5xl leading-[1.25] tracking-tight max-w-4xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          &ldquo;We replaced four legacy systems with one Claritas instance. Renewals haven&apos;t been this easy in twenty years — and our forecast accuracy is the best it has ever been.&rdquo;
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-12 w-12 rounded-full grid place-items-center text-sm font-bold text-black" style={{ background: GOLD }}>SW</div>
          <div className="text-left">
            <div className="font-medium">Datin Sara Wahid</div>
            <div className="text-sm text-white/55">Group COO · FGV Holdings</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { v: "247", l: "Enterprise customers" },
    { v: "98.4%", l: "Annual renewal" },
    { v: "18", l: "Years in production" },
    { v: "47ms", l: "p99 query latency" },
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-light text-6xl md:text-7xl tracking-tight" style={{ color: GOLD, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {s.v}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.28em] text-white/55">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { n: "Growth", p: "From RM 49", per: "per seat / month", desc: "Revenue teams getting serious about CRM as architecture.", cta: "Start free trial" },
    { n: "Scale", p: "From RM 99", per: "per seat / month", desc: "Ops-led teams scaling across markets, channels, and product lines.", cta: "Start free trial", featured: true },
    { n: "Enterprise", p: "Bespoke", per: "annual contract", desc: "Institutions with serious requirements: residency, SSO, custom legal.", cta: "Talk to sales" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.32em] mb-5" style={{ color: GOLD }}>Pricing</div>
          <h2 className="font-light text-5xl md:text-6xl leading-tight tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Three tiers. <em className="italic" style={{ color: GOLD }}>One contract.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.n} className={`relative p-10 ${t.featured ? "border-2 border-[#d4af37]" : "border border-white/15"} bg-white/[0.02]`}>
              {t.featured && <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.22em] px-3 py-1 font-bold text-black" style={{ background: GOLD }}>Most chosen</div>}
              <div className="text-[11px] uppercase tracking-[0.32em] mb-3" style={{ color: t.featured ? GOLD : "#fff8" }}>{t.n}</div>
              <div className="font-light text-3xl tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{t.p}</div>
              <div className="text-xs text-white/50 mt-1">{t.per}</div>
              <p className="mt-6 text-sm text-white/65 leading-relaxed">{t.desc}</p>
              <Link href="#" className={`mt-8 block text-center py-3 rounded-full text-sm font-medium ${t.featured ? "bg-white text-black hover:bg-[#d4af37]" : "border border-white/25 hover:bg-white/5"}`}>
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
    <section className="py-32 px-6 text-center border-t border-white/10">
      <h2 className="font-light text-6xl md:text-8xl leading-[0.95] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        Begin a <em className="italic" style={{ color: GOLD }}>private</em> conversation.
      </h2>
      <p className="mt-8 text-lg text-white/65 max-w-xl mx-auto">
        We accept a small number of new engagements each year. The first conversation is private and without obligation.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="#" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#d4af37]">
          Request a private demo →
        </Link>
        <Link href="#" className="border border-white/25 px-8 py-4 rounded-full font-medium hover:bg-white/5">
          Talk to enterprise
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-6 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-semibold">
            <div className="h-7 w-7 rounded-sm grid place-items-center text-black font-bold text-sm" style={{ background: GOLD }}>C</div>
            Claritas
          </div>
          <p className="mt-4 text-white/55 max-w-xs">The unified customer platform for Asia-Pacific&apos;s most considered institutions.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-white/40">
            <span className="px-2 py-1 border border-white/15">SOC 2 Type II</span>
            <span className="px-2 py-1 border border-white/15">ISO 27001</span>
            <span className="px-2 py-1 border border-white/15">PDPA</span>
          </div>
        </div>
        {[
          { h: "Platform", l: ["Marketing", "Sales", "Service", "AI Agent", "Pricing"] },
          { h: "Customers", l: ["Case studies", "Industries", "Migration"] },
          { h: "Company", l: ["About", "Press", "Careers", "Contact"] },
          { h: "Resources", l: ["Documentation", "Status", "Changelog", "Security"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-medium">{c.h}</div>
            <ul className="mt-3 space-y-2 text-white/55">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-white">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-5 flex justify-between text-xs text-white/45">
          <span>© Claritas Inc. 2026 · Engineered in Kuala Lumpur.</span>
          <span>V20 · Cinema</span>
        </div>
      </div>
    </footer>
  );
}
