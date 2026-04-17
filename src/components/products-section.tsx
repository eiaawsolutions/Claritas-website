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

  // ── V9: Atrium — Editorial product features with photography ──
  if (version === "v9") {
    const v9ProductPhotos: Record<string, { src: string; alt: string; caption: string }> = {
      Marketing: {
        src: "https://images.unsplash.com/photo-1460794035143-7b3d287b415f?auto=format&fit=crop&w=1400&q=80",
        alt: "Marketing strategy session",
        caption: "A campaign calibrated to convert, not merely to be seen.",
      },
      Sales: {
        src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1400&q=80",
        alt: "Executive signing a contract",
        caption: "The pipeline as a fiduciary instrument — each stage a commitment.",
      },
      Support: {
        src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=80",
        alt: "Professional customer service conversation",
        caption: "Retention is the discipline of never making a client ask twice.",
      },
    };

    return (
      <section id="products" className="bg-[#EDE4D3] py-24 lg:py-32 border-t border-[#1C1A17]/[0.08]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">The Product Portfolio</span>
            </div>
            <h2 className="v9-serif text-[40px] md:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
              Three modules.
              <br />
              <span className="italic font-light text-[#8B6F3E]">Engineered without compromise.</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70 max-w-xl">
              Deployed standalone or as a unified platform of record. Each module is held to the same standard: boardroom-ready outputs, zero data friction, and the assumption that our clients&apos; time is the most valuable instrument in the room.
            </p>
          </motion.div>

          <div className="space-y-28 lg:space-y-40">
            {products.map((product, i) => {
              const photo = v9ProductPhotos[product.title];
              const imageRight = product.imagePosition === "right";

              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Photo */}
                  <div className={`lg:col-span-7 ${imageRight ? "lg:order-2" : "lg:order-1"} relative`}>
                    <div className="relative aspect-[5/6] v9-paper-edge overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/30 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-[#8B6F3E]/[0.05] mix-blend-multiply" />

                      {/* Photo caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-[#F7F1E8]">
                        <div className="v9-eyebrow text-[#B89968] mb-2">
                          Plate N° {i + 1}
                        </div>
                        <p className="v9-serif italic text-[15px] lg:text-[17px] leading-snug max-w-sm">
                          {photo.caption}
                        </p>
                      </div>
                    </div>

                    {/* Product mockup — small inset */}
                    <div className="absolute -bottom-6 -right-6 hidden lg:block w-48 bg-[#F7F1E8] p-2 v9-paper-edge">
                      <Image
                        src={product.image}
                        alt={`${product.title} module screen`}
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={`lg:col-span-5 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="v9-eyebrow mb-4">
                      Module · {String(i + 1).padStart(2, "0")} / 03
                    </div>
                    <h3 className="v9-serif text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-[#1C1A17]">
                      {product.title}
                    </h3>
                    <div className="mt-6 h-px w-14 v9-rule-brass opacity-60" />
                    <p className="mt-6 text-[18px] leading-[1.65] italic text-[#1C1A17]/75 v9-serif">
                      {product.subtitle}
                    </p>
                    <ul className="mt-8 space-y-4">
                      {product.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-4 text-[15px] leading-[1.6] text-[#1C1A17]/75">
                          <span className="text-[#8B6F3E] font-serif text-lg leading-none mt-1 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.href}
                      className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold text-[#1C1A17] border-b border-[#1C1A17] pb-1 hover:text-[#8B6F3E] hover:border-[#8B6F3E] transition-colors"
                    >
                      Read the Specification
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
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
