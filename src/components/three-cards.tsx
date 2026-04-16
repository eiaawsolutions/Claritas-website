"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Target, Heart, HeadphonesIcon, BoxSelect } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const cards = [
  {
    icon: TrendingUp,
    title: "Increase Sales Success",
    subtitle: "Sell Smarter, Sell Faster",
    href: "/products/sales",
  },
  {
    icon: Target,
    title: "Effective Marketing Campaign",
    subtitle: "Target The Right Customer",
    href: "/products/marketing",
  },
  {
    icon: Heart,
    title: "Enhance Customer Experience",
    subtitle: "Care for Your Customer",
    href: "/products/support",
  },
];

export function ThreeCards() {
  const { version } = useDesignVersion();

  // ── V8: Atelier — Luxury editorial ──
  if (version === "v8") {
    const v8Items = [
      { num: "01", title: "Capital Architecture", category: "Sales", desc: "Structuring complex pipeline instruments with surgical precision. Transform raw data into predictive revenue models.", href: cards[0].href },
      { num: "02", title: "Market Intelligence", category: "Marketing", desc: "Uncovering hidden patterns in customer behaviour through proprietary analytics and real-time attribution.", href: cards[1].href },
      { num: "03", title: "Legacy Strategy", category: "Support", desc: "Crafting multi-generational customer roadmaps. Proactive retention engines that ensure no relationship fades.", href: cards[2].href },
    ];

    return (
      <section className="py-32 px-8 md:px-16 bg-luxury-ink text-luxury-cream">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-5xl md:text-7xl mb-12 text-luxury-cream"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                The Art of <br />
                <span className="italic">Decision.</span>
              </h2>
              <p className="text-xl text-luxury-cream/60 leading-relaxed max-w-lg mb-12">
                In a world of excessive noise, we find the essential. Our philosophy is rooted in the belief that true clarity comes from the intersection of rigorous analysis and intuitive design.
              </p>
              <div className="grid grid-cols-3 gap-12">
                {v8Items.map((item) => (
                  <div key={item.num}>
                    <div className="text-4xl mb-2 text-luxury-cream/80">{item.num}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-luxury-gold">{item.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <Image
                src="/hero-crm.png"
                alt="CRM Dashboard"
                width={800}
                height={1000}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ── V7: Enterprise ──
  if (version === "v7") {
    const v7Features = [
      {
        icon: TrendingUp,
        title: "Predictive Analytics",
        description: "AI-driven pipeline analytics with real-time forecasting models that predict outcomes with 84% accuracy.",
        cta: "Learn More",
        href: "/products/sales",
      },
      {
        icon: Target,
        title: "Omni-channel Campaigns",
        description: "Deploy sophisticated cross-platform campaigns across email, social, and paid from a single orchestration control center.",
        cta: "Learn More",
        href: "/products/marketing",
      },
    ];

    return (
      <section className="py-20 sm:py-28 bg-[#0f1729]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-blue-400/80 uppercase">
              Core Engine
            </span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-white tracking-tight">
              Precision Tools for Growth.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {v7Features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-5">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-opacity hover:opacity-80"
                >
                  {feature.cta}
                  <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V6: Precision ──
  if (version === "v6") {
    const modules = [
      {
        id: "sales",
        icon: TrendingUp,
        title: "Sales Pipeline",
        description: "Track deals from lead to close with visual kanban boards and forecasting.",
      },
      {
        id: "marketing",
        icon: Target,
        title: "Marketing Hub",
        description: "Orchestrate campaigns, segment audiences, and measure ROI in real time.",
      },
      {
        id: "support",
        icon: HeadphonesIcon,
        title: "Service Desk",
        description: "Resolve tickets faster with smart routing, SLA tracking, and knowledge bases.",
      },
    ];

    const [activeModule, setActiveModule] = useState("sales");

    return (
      <section className="py-32 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
              Complete Suite
            </span>
            <h3 className="mt-4 text-3xl lg:text-5xl font-bold text-zinc-950 tracking-tight">
              Modular Platform Overview
            </h3>
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
              Three integrated modules that work independently or together to power your entire customer lifecycle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left: Module switcher buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {modules.map((mod) => {
                const isActive = activeModule === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModule(mod.id)}
                    className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                      isActive
                        ? "bg-white border-blue-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-blue-500/10"
                        : "bg-transparent border-transparent hover:bg-zinc-100"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-zinc-200 text-zinc-600"
                      }`}
                    >
                      <mod.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-zinc-950">
                        {mod.title}
                      </span>
                      <span className="mt-1 block text-sm text-zinc-500">
                        {mod.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Display area */}
            <div className="lg:col-span-8">
              <div className="bg-zinc-200/50 rounded-3xl border border-zinc-200 p-2 h-[450px]">
                <div className="bg-white rounded-2xl h-full flex flex-col overflow-hidden">
                  {/* Browser-like header */}
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-100">
                    <BoxSelect className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-600 capitalize">
                      {activeModule} Workspace
                    </span>
                  </div>

                  {/* Body with module mockups */}
                  <div className="relative flex-1">
                    {/* Sales: Kanban */}
                    <div
                      className={`absolute inset-0 p-5 transition-opacity duration-500 ${
                        activeModule === "sales"
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="grid grid-cols-3 gap-4 h-full">
                        {["Qualified", "Proposal", "Negotiation"].map((col) => (
                          <div key={col} className="flex flex-col gap-3">
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                              {col}
                            </span>
                            <div className="flex-1 space-y-3">
                              <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3">
                                <div className="h-2 w-3/4 rounded bg-zinc-200" />
                                <div className="mt-2 h-2 w-1/2 rounded bg-zinc-100" />
                              </div>
                              <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3">
                                <div className="h-2 w-2/3 rounded bg-zinc-200" />
                                <div className="mt-2 h-2 w-1/3 rounded bg-zinc-100" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Marketing: Metrics + Chart */}
                    <div
                      className={`absolute inset-0 p-5 transition-opacity duration-500 ${
                        activeModule === "marketing"
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                          { label: "Impressions", value: "24.5K" },
                          { label: "Click Rate", value: "3.2%" },
                          { label: "Conversions", value: "842" },
                        ].map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl bg-zinc-50 border border-zinc-200 p-4"
                          >
                            <span className="text-xs text-zinc-500">
                              {metric.label}
                            </span>
                            <p className="mt-1 text-xl font-bold text-zinc-950">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 flex-1">
                        <span className="text-xs text-zinc-500 mb-3 block">
                          Campaign Performance
                        </span>
                        <div className="flex items-end gap-2 h-32">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map(
                            (h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t bg-blue-600/20"
                                style={{ height: `${h}%` }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Support: Inbox + Chat */}
                    <div
                      className={`absolute inset-0 p-5 transition-opacity duration-500 ${
                        activeModule === "support"
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="grid grid-cols-5 gap-4 h-full">
                        {/* Inbox list */}
                        <div className="col-span-2 space-y-2 overflow-hidden">
                          {[
                            { name: "Sarah K.", preview: "Login issue with...", urgent: true },
                            { name: "James T.", preview: "Billing question about...", urgent: false },
                            { name: "Amy L.", preview: "Feature request for...", urgent: false },
                            { name: "Marcus R.", preview: "Cannot export data...", urgent: true },
                          ].map((ticket) => (
                            <div
                              key={ticket.name}
                              className="rounded-xl bg-zinc-50 border border-zinc-200 p-3"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-zinc-800">
                                  {ticket.name}
                                </span>
                                {ticket.urgent && (
                                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                )}
                              </div>
                              <p className="mt-1 text-xs text-zinc-400 truncate">
                                {ticket.preview}
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Chat thread */}
                        <div className="col-span-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4 flex flex-col">
                          <span className="text-xs font-semibold text-zinc-800 mb-3">
                            Sarah K. — Login Issue
                          </span>
                          <div className="flex-1 space-y-3">
                            <div className="rounded-lg bg-zinc-200/70 p-2.5 max-w-[80%]">
                              <p className="text-xs text-zinc-700">
                                I can&apos;t log in since the update...
                              </p>
                            </div>
                            <div className="rounded-lg bg-blue-600 p-2.5 max-w-[80%] ml-auto">
                              <p className="text-xs text-white">
                                Let me check your account status.
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 rounded-lg border border-zinc-200 bg-white p-2">
                            <div className="h-2 w-1/3 rounded bg-zinc-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V5: Prestige ──
  if (version === "v5") {
    const v5Cards = [
      { num: "01", title: "Revenue Intelligence", subtitle: "Transform raw pipeline data into predictive revenue models. Our AI-driven analytics pinpoint where deals stall and prescribe corrective action before quota is at risk.", cta: "Deep Dive", href: cards[0].href },
      { num: "02", title: "Precision Marketing", subtitle: "Architect campaigns that resonate with surgical precision. Leverage behavioural segmentation and real-time attribution to maximise every dollar of marketing spend.", cta: "Deep Dive", href: cards[1].href },
      { num: "03", title: "Client Retention Engine", subtitle: "Move from reactive support to proactive relationship management. Predictive churn scoring and automated escalation ensure no client falls through the cracks.", cta: "Deep Dive", href: cards[2].href },
    ];

    return (
      <section className="py-32 sm:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
          >
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Our Areas of Influence
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-light text-[#050b1a] leading-tight tracking-tighter">
                Where strategy meets<br />measurable impact.
              </h2>
            </div>
            <p className="max-w-md text-slate-500 font-light text-lg leading-relaxed lg:text-right">
              Three disciplines. One integrated platform. Every engagement calibrated to move the metrics that matter most to your board.
            </p>
          </motion.div>

          <div className="grid gap-16 sm:grid-cols-3">
            {v5Cards.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-blue-600 font-bold text-sm">{card.num}</span>
                  <div className="flex-1 h-px bg-blue-100" />
                </div>
                <h3 className="text-2xl font-bold text-[#050b1a] uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-4 text-slate-500 leading-relaxed text-base font-light">
                  {card.subtitle}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-[#050b1a] hover:text-blue-600 transition-colors"
                >
                  {card.cta} &gt;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V4: Aurora ──
  if (version === "v4") {
    return (
      <section className="bg-[#0a0118] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <span className="text-violet-400/80 text-xs font-medium tracking-[0.15em] uppercase">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Everything you need to grow
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {card.subtitle}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent transition-opacity hover:opacity-80"
                >
                  Learn more
                  <span className="text-violet-400 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V2: Slate ──
  if (version === "v2") {
    return (
      <section className="relative bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#0d7377] uppercase">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e293b] sm:text-4xl">
              Everything you need to grow
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-slate-200 bg-[#f7f8fa] p-8 text-center transition-all hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] hover:border-[#0d7377]/20"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#0d7377]/10 text-[#0d7377]">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1e293b]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {card.subtitle}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-block rounded-lg bg-[#0d7377] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0a5f62]"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V3: Executive ──
  if (version === "v3") {
    return (
      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#1a2b4a]/40 uppercase">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1a2b4a] sm:text-4xl">
              Three pillars of growth
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-[#1a2b4a]/[0.06] bg-[#faf9f7] p-8 text-center transition-all hover:shadow-[0_20px_60px_-15px_rgba(26,43,74,0.08)] hover:border-[#1a2b4a]/[0.1]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a2b4a]/[0.05] text-[#1a2b4a]/70">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1a2b4a]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#1a2b4a]/50 leading-relaxed">
                  {card.subtitle}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-block rounded-lg bg-[#1a2b4a] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#243756]"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V1: Coral Warmth ──
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-coral-50 text-coral-500 transition-transform group-hover:scale-110">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-dark-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{card.subtitle}</p>
              <Link href={card.href} className="mt-6 inline-block rounded-full bg-coral-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
                GET STARTED
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
