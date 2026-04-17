"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, BarChart3, Users, Play, ArrowUpRight, Activity } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "12", label: "Industries Served" },
  { value: "15", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export function Hero() {
  const { version } = useDesignVersion();

  // ── V9: Atrium — Executive editorial, warm parchment + aged brass ──
  if (version === "v9") {
    // Real photography from Unsplash — executive boardroom with soft warm light
    const heroPhoto = "/v9/hero-executive.jpg";

    return (
      <section className="relative pt-28 bg-[#F7F1E8] text-[#1C1A17] overflow-hidden">
        {/* Main editorial hero */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10 pb-16 lg:pb-20"
          >
            {/* LEFT — Copy column */}
            <div className="lg:col-span-6 lg:pr-4">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Enterprise CRM · Est. 2008</span>
              </div>

              <h1 className="v9-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.02em] text-[#1C1A17]">
                Built for leaders
                <br />
                <span className="italic font-light text-[#8B6F3E]">
                  who measure
                </span>
                <br />
                in decades.
              </h1>

              <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-[#1C1A17]/70">
                Claritas unifies marketing, sales, and service operations into a single instrument of record — trusted across Asia-Pacific by the organisations that set their industry&apos;s standard.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact?demo=true"
                  className="group inline-flex items-center gap-3 bg-[#1C1A17] text-[#F7F1E8] px-8 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#8B6F3E] transition-colors duration-500"
                >
                  Request Private Briefing
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/claritas/framework"
                  className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] font-semibold text-[#1C1A17] border-b border-[#1C1A17] pb-0.5 hover:text-[#8B6F3E] hover:border-[#8B6F3E] transition-colors"
                >
                  Our Framework
                </Link>
              </div>

              {/* Credential bar */}
              <div className="mt-14 pt-8 border-t border-[#1C1A17]/10 grid grid-cols-3 gap-6 max-w-lg">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <div className="v9-serif text-[32px] font-semibold text-[#1C1A17] leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#1C1A17]/55">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Editorial photo */}
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/5] lg:aspect-[5/6] v9-paper-edge overflow-hidden">
                <Image
                  src={heroPhoto}
                  alt="Executive leadership meeting"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                {/* Warm atmospheric overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1C1A17]/25 pointer-events-none" />
                <div className="absolute inset-0 bg-[#8B6F3E]/[0.04] mix-blend-multiply pointer-events-none" />
              </div>

              {/* Floating caption card — editorial magazine plate */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -bottom-8 -left-4 lg:-left-12 bg-[#F7F1E8] border border-[#1C1A17]/10 p-6 pr-10 max-w-[280px] v9-paper-edge"
              >
                <div className="v9-eyebrow mb-3">Plate N° I</div>
                <p className="v9-serif italic text-[15px] leading-snug text-[#1C1A17]/85">
                  &ldquo;An instrument designed for those who view customer relationships as a multi-generational asset.&rdquo;
                </p>
                <div className="mt-4 h-px v9-rule-brass opacity-40" />
                <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[#8B6F3E] font-semibold">
                  — From the Claritas Charter
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Brass rule divider */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="h-px v9-rule-brass opacity-50" />
        </div>

        {/* Trusted-by strip — editorial footer to hero */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-14">
            <div className="v9-eyebrow shrink-0">Entrusted By</div>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              {["FGV HOLDINGS", "SINGTEL", "NANDO'S", "ESTATE 123", "INTEL", "PFIZER", "VISTAGE"].map((name) => (
                <span
                  key={name}
                  className="v9-serif text-[13px] tracking-[0.22em] text-[#1C1A17]/45 hover:text-[#8B6F3E] transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V8: Atelier — Luxury editorial aesthetic ──
  if (version === "v8") {
    return (
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 bg-luxury-cream">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-8 block">
                  Enterprise CRM Platform
                </span>
                <h1
                  className="text-[12vw] lg:text-[8.5vw] leading-[0.9] text-luxury-ink mb-12"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  Strategic <br />
                  <span className="italic font-light pl-[10%]">Elegance.</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-5 pb-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-md"
              >
                <p
                  className="text-xl text-luxury-ink/70 leading-relaxed mb-10 italic"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  We partner with visionary leaders to craft enduring customer relationships through data-driven precision and architectural strategy.
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-[1px] w-12 bg-luxury-ink" />
                  <Link
                    href="/products/marketing"
                    className="text-[11px] uppercase tracking-[0.3em] font-bold hover:text-luxury-gold transition-colors"
                  >
                    Explore our work
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Image — Full Bleed */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 h-[50vh] lg:h-[60vh] w-full rounded-2xl overflow-hidden relative"
        >
          <Image
            src="/hero-crm.png"
            alt="Claritas CRM Dashboard"
            width={2000}
            height={1000}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-luxury-ink/10" />
        </motion.div>
      </section>
    );
  }

  // ── V7: Enterprise — Dark navy SaaS ──
  if (version === "v7") {
    return (
      <section className="relative bg-[#0b1121] pt-16 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/[0.06] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 sm:py-24 lg:py-32">
            {/* LEFT column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 mb-8">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400">
                  Enterprise CRM Excellence
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Better Sales with{" "}
                <span className="text-blue-400">
                  Effective
                </span>
                <br />
                <span className="text-blue-400">Marketing.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
                The all-in-one CRM platform for modern enterprise teams. Orchestrate your entire revenue cycle in a single, high-fidelity environment.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?demo=true"
                  className="group flex items-center gap-2 bg-blue-500 text-white rounded-lg px-7 py-3 text-sm font-semibold hover:bg-blue-400 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/[0.12] text-white rounded-lg px-7 py-3 text-sm font-medium hover:border-white/30 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>

            {/* RIGHT column — Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block relative"
            >
              {/* Main dashboard card */}
              <div className="bg-[#111827] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="text-slate-300">Dashboard</span>
                    <span>Analytics</span>
                    <span>Reports</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Total Revenue", value: "$2.4M", change: "+12.5%" },
                      { label: "Active Deals", value: "143", change: "+8.3%" },
                      { label: "Win Rate", value: "68%", change: "+4.1%" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                        <div className="text-[10px] text-slate-500 mb-1">{m.label}</div>
                        <div className="text-lg font-bold text-white">{m.value}</div>
                        <div className="flex items-center gap-1 mt-0.5 text-[10px] text-emerald-400">
                          <ArrowUpRight className="h-2.5 w-2.5" />
                          {m.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <div className="text-xs text-slate-500 mb-3">Revenue Trend</div>
                    <div className="flex items-end gap-1.5 h-28">
                      {[35, 50, 40, 65, 55, 80, 70, 90, 75, 85, 95, 88].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-blue-500/30" style={{ height: `${h}%` }}>
                          <div className="w-full rounded-sm bg-blue-500/70" style={{ height: `${Math.min(h + 15, 100) * 0.5}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Line items */}
                  <div className="space-y-2">
                    {[
                      { name: "Enterprise Plan — Acme Corp", value: "$48,000" },
                      { name: "Growth Plan — TechStart", value: "$24,500" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <Activity className="h-3.5 w-3.5 text-slate-500" />
                          <span className="text-sm text-slate-300">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-[#111827]/90 backdrop-blur-xl border border-white/[0.1] rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                    <Zap className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">New Lead Captured</div>
                    <div className="text-[10px] text-slate-400">Acme Corp — just now</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trusted by strip */}
        <div className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-6">
              <span className="text-xs text-slate-500 tracking-widest uppercase">Trusted by industry leaders</span>
              <div className="flex items-center gap-8 sm:gap-12 text-slate-500">
                {["LUMINA", "AETHER", "SOUS", "VERTEX", "ORBIT"].map((name) => (
                  <span key={name} className="text-sm font-semibold tracking-wider opacity-40">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V6: Precision — Light-mode technical/engineering aesthetic, dark hero ──
  if (version === "v6") {
    return (
      <section className="relative bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Technical grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        {/* Blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs text-zinc-300">Claritas CRM 2.0 is live</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                The intelligence{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  engine for growth.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
                Unify marketing, sales, and support in one intelligent platform.
                Built for teams that demand precision and results.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?demo=true"
                  className="bg-white text-zinc-950 rounded-full px-8 py-3.5 text-sm font-medium hover:bg-zinc-100 transition-colors"
                >
                  Start free trial
                </Link>
                <Link
                  href="/claritas/framework"
                  className="border border-zinc-700 text-white rounded-full px-8 py-3.5 text-sm font-medium hover:border-zinc-500 transition-colors"
                >
                  View documentation
                </Link>
              </div>
            </motion.div>

            {/* RIGHT column — Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block relative"
            >
              {/* Main dashboard card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="text-zinc-300">Overview</span>
                    <span>Analytics</span>
                    <span>Reports</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  {/* Metric cards row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4">
                      <div className="text-xs text-zinc-500 mb-1">Total Revenue</div>
                      <div className="text-xl font-bold text-white">$124,500</div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-emerald-400">
                        <ArrowUpRight className="h-3 w-3" />
                        +12.5%
                      </div>
                    </div>
                    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4">
                      <div className="text-xs text-zinc-500 mb-1">Active Deals</div>
                      <div className="text-xl font-bold text-white">43</div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-emerald-400">
                        <ArrowUpRight className="h-3 w-3" />
                        +8.3%
                      </div>
                    </div>
                  </div>

                  {/* Bar chart mockup */}
                  <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-xl p-4">
                    <div className="text-xs text-zinc-500 mb-3">Weekly Performance</div>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-blue-500/20" style={{ height: `${h}%` }}>
                          <div className="w-full rounded-sm bg-blue-500/60" style={{ height: `${Math.min(h + 10, 100) * 0.6}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* List items */}
                  <div className="space-y-2">
                    {[
                      { name: "Enterprise Plan Upgrade", value: "$24,000" },
                      { name: "New Integration Deal", value: "$18,500" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between bg-zinc-800/30 border border-zinc-700/30 rounded-lg px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <Activity className="h-3.5 w-3.5 text-zinc-500" />
                          <span className="text-sm text-zinc-300">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-zinc-800/80 backdrop-blur-xl border border-zinc-700 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                    <Zap className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">New Lead</div>
                    <div className="text-[10px] text-zinc-400">Acme Corp — just now</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ── V5: Prestige — McKinsey/Bain luxury consulting aesthetic ──
  if (version === "v5") {
    return (
      <section className="relative min-h-screen flex items-center bg-[#050b1a] pt-20 overflow-hidden">
        {/* Subtle dark overlay gradient — no orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0a1428] to-[#050b1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left — lg:col-span-8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              {/* Animated blue line + label */}
              <div className="flex items-center gap-4 mb-32">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  Enterprise CRM Platform
                </span>
              </div>

              {/* Massive headline — Playfair Display serif */}
              <h1
                className="text-6xl md:text-[100px] font-light text-white leading-[0.9] tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}
              >
                Better Sales with
                <br />
                <span className="font-normal italic">Effective</span> Marketing.
              </h1>

              {/* Subtitle */}
              <p className="mt-10 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                Manage your relationship with customers from all aspects.
                The enterprise-grade CRM trusted by leading organizations across Asia Pacific.
              </p>

              {/* Two buttons */}
              <div className="mt-12 flex flex-wrap items-center gap-8">
                {/* Primary — rectangular, no rounded corners */}
                <Link
                  href="/contact?demo=true"
                  className="group relative px-12 py-5 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-3"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Secondary — circular play button + text */}
                <Link
                  href="/contact"
                  className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white/50 hover:bg-white/5">
                    <Play className="h-4 w-4 fill-white" />
                  </div>
                  View Demo
                </Link>
              </div>
            </motion.div>

            {/* Right — lg:col-span-4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 hidden lg:block"
            >
              {/* Product image in portrait container */}
              <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
                <Image
                  src="/hero-crm.png"
                  alt="Claritas CRM Dashboard"
                  width={500}
                  height={667}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  priority
                />
                {/* Overlay gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-[#050b1a]/30 to-transparent" />

                {/* Small caption at bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-black uppercase tracking-[0.3em] text-[10px] text-blue-500">
                    Enterprise Excellence
                  </span>
                  <p className="mt-2 text-sm text-slate-400 font-light">
                    Precision-built for industry leaders
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ── V4: Aurora — Vivid gradient mesh + glassmorphism ──
  if (version === "v4") {
    return (
      <section className="relative min-h-screen bg-[#0a0118] pt-16 overflow-hidden">
        {/* Aurora gradient blobs */}
        <div className="absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/[0.15] blur-[150px]" />
        <div className="absolute top-60 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.12] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[500px] rounded-full bg-emerald-500/[0.08] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 lg:pt-36">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] backdrop-blur border border-white/[0.1] px-4 py-1.5 text-xs font-medium text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                Trusted by 50+ enterprises across APAC
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The CRM that
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                grows revenue
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-slate-400 leading-relaxed"
            >
              Unify marketing, sales, and support in one intelligent platform.
              No complexity. No credit card required.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact?demo=true"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-white/[0.05] backdrop-blur border border-white/[0.1] px-8 py-3.5 text-sm font-medium text-slate-300 transition-all hover:bg-white/[0.08]"
              >
                Book a Demo
              </Link>
            </motion.div>

            {/* Product preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-16 w-full max-w-4xl"
            >
              <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-2 shadow-[0_0_80px_-20px_rgba(139,92,246,0.2)]">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/hero-crm.png"
                    alt="Claritas CRM Dashboard"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                {/* Glare effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-8 border-t border-white/[0.06] pt-12 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ── V2: Slate — Clean professional business ──
  if (version === "v2") {
    return (
      <section className="relative overflow-hidden bg-[#f7f8fa] pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0d7377]" />
                <span className="text-xs font-semibold tracking-[0.15em] text-[#0d7377] uppercase">
                  Enterprise CRM Platform
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#1e293b] sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12] tracking-tight">
                Smarter CRM
                <br />
                for Modern
                <br />
                <span className="text-[#0d7377]">Businesses</span>
              </h1>

              <p className="mt-5 max-w-md text-base text-slate-500 leading-relaxed">
                Unify marketing, sales, and support in one intelligent platform.
                Built for teams that move fast and think ahead.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?demo=true"
                  className="group flex items-center gap-2 rounded-lg bg-[#0d7377] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0a5f62] hover:shadow-lg hover:shadow-[#0d7377]/20"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg border border-[#1e293b]/20 px-8 py-3 text-sm font-medium text-[#1e293b] transition-all hover:border-[#0d7377] hover:text-[#0d7377]"
                >
                  Book a Demo
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {[
                  { icon: Shield, label: "Enterprise Security" },
                  { icon: Zap, label: "99.9% Uptime" },
                  { icon: BarChart3, label: "Real-time Analytics" },
                  { icon: Users, label: "50+ Enterprises" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-xs text-slate-400">
                    <badge.icon className="h-3.5 w-3.5" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                <Image
                  src="/hero-crm.png"
                  alt="Claritas CRM Dashboard"
                  width={560}
                  height={340}
                  className="w-full max-w-lg h-auto object-contain rounded-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-[#1e293b] sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V3: Executive — Clean corporate authority ──
  if (version === "v3") {
    return (
      <section className="relative overflow-hidden bg-[#faf9f7] pt-[72px]">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d1ccc4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[40px] bg-[#1a2b4a]/30" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#1a2b4a]/60 uppercase">
                  Enterprise CRM
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-[#1a2b4a] sm:text-4xl md:text-5xl lg:text-[56px]">
                Build lasting
                <br />
                customer
                <br />
                <span className="text-amber-600">relationships</span>
              </h1>

              <p className="mt-6 max-w-md text-base text-[#1a2b4a]/60 leading-relaxed">
                The enterprise-grade CRM trusted by leading organizations
                across Asia Pacific. Unify your marketing, sales, and support
                operations in one platform.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?demo=true"
                  className="rounded-lg bg-[#1a2b4a] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#243756] hover:shadow-lg hover:shadow-[#1a2b4a]/20"
                >
                  Request Demo
                </Link>
                <Link
                  href="/pricing"
                  className="group flex items-center gap-2 text-sm font-medium text-[#1a2b4a]/70 transition-colors hover:text-[#1a2b4a]"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                {[
                  { icon: Shield, label: "Enterprise Security" },
                  { icon: Zap, label: "99.9% Uptime" },
                  { icon: BarChart3, label: "Real-time Analytics" },
                  { icon: Users, label: "50+ Enterprises" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-xs text-[#1a2b4a]/50"
                  >
                    <badge.icon className="h-3.5 w-3.5" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Product image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative rounded-2xl border border-[#1a2b4a]/[0.08] bg-white p-3 shadow-[0_30px_80px_-20px_rgba(26,43,74,0.12)]">
                <Image
                  src="/hero-crm.png"
                  alt="Claritas CRM Dashboard"
                  width={600}
                  height={380}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 rounded-xl border border-[#1a2b4a]/[0.06] bg-white px-5 py-3.5 shadow-[0_12px_40px_-10px_rgba(26,43,74,0.1)]"
              >
                <div className="text-xs text-[#1a2b4a]/50">Monthly Revenue</div>
                <div className="mt-0.5 text-lg font-bold text-[#1a2b4a]">+27%</div>
              </motion.div>

              {/* Floating metric */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 -right-2 rounded-xl border border-[#1a2b4a]/[0.06] bg-white px-5 py-3.5 shadow-[0_12px_40px_-10px_rgba(26,43,74,0.1)]"
              >
                <div className="text-xs text-[#1a2b4a]/50">Customer Retention</div>
                <div className="mt-0.5 text-lg font-bold text-amber-600">94%</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="relative border-t border-[#1a2b4a]/[0.06] bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-[#1a2b4a] sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[#1a2b4a]/40 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V1: Coral Warmth (Original) ──
  return (
    <section className="relative overflow-hidden pt-16" style={{ background: "#f5f3ee" }}>
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full opacity-30" style={{ background: "#e8dcc8" }} />
      <div className="absolute -right-8 bottom-0 hidden lg:block">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" className="opacity-20">
          <path d="M30 0 L30 40 M20 30 L30 40 L40 30" stroke="#9ca3af" strokeWidth="2" />
          <path d="M30 50 L30 90 M20 80 L30 90 L40 80" stroke="#9ca3af" strokeWidth="2" />
          <path d="M30 100 L30 120" stroke="#9ca3af" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block rounded-full px-5 py-2 text-sm font-semibold text-dark-900 tracking-wide" style={{ background: "#e8c84b" }}>
              Pioneering CRM innovation
            </span>
            <h1 className="mt-6 text-2xl font-extrabold leading-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.15] uppercase tracking-tight">
              Better Sales<br />With Effective Marketing,<br />Start With ClaritasCRM
            </h1>
            <p className="mt-5 max-w-md text-base text-gray-500 leading-relaxed italic">
              Manage your relationship with customer from all aspects
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-lg bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
                REACH US
              </Link>
              <Link href="/contact?demo=true" className="rounded-lg border border-coral-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-coral-400 transition-all hover:bg-coral-50">
                VIEW DEMO
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 0 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              x: { duration: 0.5, delay: 0.2 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative flex items-center justify-center"
          >
            <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100">
              <Image src="/hero-crm.png" alt="CRM Analytics Dashboard" width={560} height={340} className="w-full max-w-lg h-auto object-contain rounded-xl" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
