"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const products = [
  {
    title: "Marketing",
    v1Title: "MARKETING",
    subtitle: "Deliver impactful marketing campaign and uncover hidden opportunities!",
    bullets: [
      "Integrated Mass Marketing Tool",
      "Manage Campaign Life Cycle",
      "Track Response and Monitor Results",
    ],
    href: "/products/marketing",
    imagePosition: "left" as const,
    image: "/marketing.png",
  },
  {
    title: "Sales",
    v1Title: "SALES",
    subtitle: "Empowering You To Sell Smarter And Sell Faster!",
    bullets: [
      "Turn leads into opportunity",
      "Integrated Quotation Module",
      "Benchmark Sales against Forecast",
    ],
    href: "/products/sales",
    imagePosition: "right" as const,
    image: "/sales.png",
  },
  {
    title: "Support",
    v1Title: "SUPPORT",
    subtitle: "Boost Service Effectiveness and Increase Customer Satisfaction!",
    bullets: [
      "Automate your support processes",
      "Track Service Level Systematically",
      "Service and Contract Management",
    ],
    href: "/products/support",
    imagePosition: "left" as const,
    image: "/support.png",
  },
];

export function ProductsSection() {
  const { version } = useDesignVersion();

  // ── V9: Obsidian — Technical field manual ──
  if (version === "v9") {
    return (
      <section id="products" className="bg-[#0A0A0A] text-[#F4F2EC] py-24 border-y border-[#F4F2EC]/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 mb-16 items-end border-b border-[#F4F2EC]/15 pb-8">
            <div className="col-span-12 md:col-span-6">
              <div className="v9-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4D1F] mb-4">
                SECTION C · PRODUCT MANIFEST
              </div>
              <h2 className="v9-display text-5xl md:text-7xl text-[#F4F2EC]">
                THE<br />MANIFEST<sup className="v9-mono text-[#FF4D1F] text-[20%] align-top ml-2">III</sup>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 v9-mono text-[10px] uppercase tracking-[0.3em] text-[#F4F2EC]/60 space-y-2">
              <div className="flex justify-between border-b border-dashed border-[#F4F2EC]/20 pb-1"><span>Units</span><span className="text-[#F4F2EC]">03 modules</span></div>
              <div className="flex justify-between border-b border-dashed border-[#F4F2EC]/20 pb-1"><span>Stack</span><span className="text-[#F4F2EC]">Warehouse-native</span></div>
              <div className="flex justify-between border-b border-dashed border-[#F4F2EC]/20 pb-1"><span>Latency</span><span className="text-[#F4F2EC]">&lt; 50ms P95</span></div>
              <div className="flex justify-between"><span>SLA</span><span className="text-[#F4F2EC]">99.99% uptime</span></div>
            </div>
          </div>

          <div className="space-y-0">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="group grid grid-cols-12 gap-6 items-center border-b border-[#F4F2EC]/15 py-12 lg:py-16 hover:bg-[#F4F2EC]/[0.02] transition-colors"
              >
                {/* Row number */}
                <div className="col-span-1 hidden md:block v9-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4D1F] self-start pt-2">
                  0{i + 1}
                </div>

                {/* Image */}
                <div className={`col-span-12 md:col-span-5 ${product.imagePosition === "right" ? "md:order-3" : "md:order-2"}`}>
                  <div className="relative border border-[#F4F2EC]/15 p-3">
                    <div className="absolute -top-2 left-3 bg-[#0A0A0A] px-2 v9-mono text-[9px] uppercase tracking-[0.3em] text-[#FF4D1F]">
                      PLATE {String(i + 1).padStart(2, "0")}.{product.title.slice(0, 3).toUpperCase()}
                    </div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={620}
                      className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Copy */}
                <div className={`col-span-12 md:col-span-6 ${product.imagePosition === "right" ? "md:order-2" : "md:order-3"}`}>
                  <div className="v9-mono text-[10px] uppercase tracking-[0.3em] text-[#F4F2EC]/50 mb-3">
                    Module / {product.title.toUpperCase()}
                  </div>
                  <h3 className="v9-display text-5xl md:text-6xl text-[#F4F2EC] mb-6">
                    {product.v1Title}
                  </h3>
                  <p className="text-base text-[#F4F2EC]/70 leading-relaxed max-w-xl mb-8">
                    {product.subtitle}
                  </p>
                  <ul className="space-y-2 mb-10">
                    {product.bullets.map((b, bi) => (
                      <li key={b} className="flex items-start gap-3 v9-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F2EC]/80">
                        <span className="text-[#FF4D1F] shrink-0">[{String(bi + 1).padStart(2, "0")}]</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 border border-[#F4F2EC]/30 px-5 py-3 v9-mono text-[11px] uppercase tracking-[0.22em] font-semibold text-[#F4F2EC] hover:bg-[#FF4D1F] hover:border-[#FF4D1F] transition-colors"
                  >
                    Read Specification
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between v9-mono text-[10px] uppercase tracking-[0.3em] text-[#F4F2EC]/50">
            <span>END OF MANIFEST</span>
            <span>↳ PAGE C / C</span>
          </div>
        </div>
      </section>
    );
  }

  // ── V8: Atelier — Luxury editorial ──
  if (version === "v8") {
    return (
      <section className="py-32 px-8 md:px-16 bg-luxury-cream" id="products">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-6 block">
              Product Suite
            </span>
            <h2
              className="text-5xl md:text-6xl text-luxury-ink"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Instruments of <span className="italic">precision.</span>
            </h2>
          </motion.div>

          <div className="space-y-28 sm:space-y-36">
            {products.map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div className={`flex justify-center ${product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="border border-luxury-ink/[0.06] p-2 rounded-2xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={420}
                      height={438}
                      className="w-full max-w-sm h-auto object-contain rounded-xl grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>

                <div className={product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}>
                  <h3
                    className="text-3xl md:text-4xl text-luxury-ink"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {product.title}
                  </h3>
                  <p className="mt-3 text-lg text-luxury-ink/60 italic" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
                    {product.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-luxury-ink/60">
                        <span className="mt-2 h-[1px] w-4 shrink-0 bg-luxury-gold" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-luxury-ink hover:text-luxury-gold transition-colors"
                  >
                    Learn More <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V7: Enterprise ─���
  if (version === "v7") {
    return (
      <section className="bg-[#0b1121] py-20 sm:py-28" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sales Enablement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 mb-28"
          >
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] text-blue-400/80 uppercase">
                Execution
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Sales Enablement
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Empower your sales team with real-time intelligence. From automated lead scoring to dynamic content generation, we remove the friction from the closing process.
              </p>
              <ul className="mt-6 space-y-3">
                {["Automated Lead Scoring", "Real-time Revenue Tracking", "CRM Data Synchronization"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="h-4 w-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2">
                <Image
                  src="/sales.png"
                  alt="Sales Enablement"
                  width={420}
                  height={438}
                  className="w-full max-w-sm h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Marketing Hub */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <div className="flex justify-center lg:order-2">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2">
                <Image
                  src="/marketing.png"
                  alt="Marketing Hub"
                  width={420}
                  height={438}
                  className="w-full max-w-sm h-auto object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <span className="text-xs font-semibold tracking-[0.15em] text-blue-400/80 uppercase">
                Unified Hub
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Marketing Hub
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Centralize your marketing operations. Build, launch, and measure multi-stage campaigns with precise, attribution marketing that proves ROI at every touchpoint.
              </p>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-400">85%</div>
                  <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Pipeline Efficiency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">12.4x</div>
                  <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Average ROI</div>
                </div>
              </div>
              <Link
                href="/products/marketing"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-opacity hover:opacity-80"
              >
                Explore Marketing Hub <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V6: Precision ──
  if (version === "v6") return null;

  // ── V5: Prestige ──
  if (version === "v5") {
    return (
      <section className="py-32 sm:py-40 bg-white" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Product Suite
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-light text-[#050b1a] tracking-tighter">
              Instruments of precision.
            </h2>
          </motion.div>

          <div className="space-y-28 sm:space-y-36">
            {products.map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div className={`flex justify-center ${product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="border border-[#050b1a]/10 p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={420}
                      height={438}
                      className="w-full max-w-sm h-auto object-contain"
                    />
                  </div>
                </div>

                <div className={product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}>
                  <h3 className="text-3xl font-bold text-[#050b1a] uppercase tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {product.title}
                  </h3>
                  <p className="mt-3 text-lg text-slate-500 font-light">
                    {product.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-slate-500 font-light">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-blue-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="mt-8 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#050b1a] hover:text-blue-600 transition-colors"
                  >
                    Learn More <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
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
      <section className="bg-[#0a0118] py-20 sm:py-28" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <span className="text-violet-400/80 text-xs font-medium tracking-[0.15em] uppercase">Product Suite</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Master your market reach.
            </h2>
          </motion.div>

          <div className="space-y-24 sm:space-y-32">
            {products.map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20"
              >
                <div className={`flex justify-center ${product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={420}
                      height={438}
                      className="w-full max-w-sm h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>

                <div className={product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}>
                  <h3 className="text-3xl font-bold text-white">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-400">
                    {product.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-violet-400 rounded-full" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent transition-opacity hover:opacity-80"
                  >
                    Learn more <ArrowRight className="h-4 w-4 text-violet-400" />
                  </Link>
                </div>
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
      <section className="bg-white py-16 sm:py-20" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#0d7377] uppercase">Product Suite</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e293b] sm:text-4xl">
              Built for every team
            </h2>
          </motion.div>

          <div className="space-y-20 sm:space-y-28">
            {products.map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={`flex justify-center ${product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-3 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.06)]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={420}
                      height={438}
                      className="w-full max-w-sm h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>

                <div className={product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}>
                  <h3 className="text-3xl font-bold text-[#1e293b] sm:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-500">
                    {product.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d7377]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="mt-8 inline-block rounded-lg bg-[#0d7377] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0a5f62]"
                  >
                    Learn More
                  </Link>
                </div>
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
      <section className="bg-white py-20 sm:py-28" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#1a2b4a]/40 uppercase">Product Suite</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1a2b4a] sm:text-4xl">
              Built for every team
            </h2>
          </motion.div>

          <div className="space-y-24 sm:space-y-32">
            {products.map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div className={`flex justify-center ${product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="rounded-2xl border border-[#1a2b4a]/[0.06] bg-[#faf9f7] p-3 shadow-[0_20px_60px_-15px_rgba(26,43,74,0.08)]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={420}
                      height={438}
                      className="w-full max-w-sm h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>

                <div className={product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}>
                  <h3 className="text-3xl font-bold text-[#1a2b4a] sm:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-base text-[#1a2b4a]/50">
                    {product.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-[#1a2b4a]/60">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="mt-8 inline-block rounded-lg bg-[#1a2b4a] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#243756]"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V1: Coral Warmth ──
  return (
    <section className="bg-gray-50 py-16 sm:py-20" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-900 sm:text-4xl">OUR <span className="text-coral-500">PRODUCTS</span></h2>
        </motion.div>
        <div className="space-y-20 sm:space-y-28">
          {products.map((product) => (
            <motion.div key={product.v1Title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`flex justify-center ${product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100">
                    <Image src={product.image} alt={product.v1Title} width={420} height={438} className="w-full max-w-xs h-auto object-contain rounded-xl" />
                  </div>
                </motion.div>
              </div>
              <div className={product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}>
                <h3 className="text-3xl font-extrabold text-dark-900 sm:text-4xl lg:text-5xl">{product.v1Title}</h3>
                <p className="mt-3 text-base text-gray-400 italic">{product.subtitle}</p>
                <ul className="mt-6 space-y-3">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-900" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href={product.href} className="mt-8 inline-block rounded-full bg-coral-500 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
                  LEARN MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
