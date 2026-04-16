"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

interface ContentSection {
  title: string;
  body: string;
}

interface ProductPageProps {
  icon: LucideIcon;
  category: string;
  title: string;
  tagline: string;
  description: string;
  sections: ContentSection[];
  color: string;
  bgLight: string;
  textColor: string;
}

export function ProductPage({
  icon: Icon,
  category,
  title,
  tagline,
  description,
  sections,
  bgLight,
  textColor,
}: ProductPageProps) {
  const { version } = useDesignVersion();

  // ── V8: Atelier — Luxury editorial ──
  if (version === "v8") {
    return (
      <>
        <section className="relative bg-luxury-cream pt-20 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-20 sm:py-28 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-11 w-11 items-center justify-center bg-luxury-gold/10 text-luxury-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold">{category}</span>
              </div>
              <h1
                className="text-4xl md:text-6xl text-luxury-ink leading-[0.95] tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {title}
              </h1>
              <p className="mt-4 text-xl text-luxury-ink/60 italic" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
                {tagline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-luxury-ink/50 max-w-2xl">{description}</p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link href="/contact?demo=true" className="group flex items-center gap-2 bg-luxury-ink text-luxury-cream px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-luxury-gold transition-colors duration-500">
                  Request a Demo <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/pricing" className="border border-luxury-ink/20 text-luxury-ink px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-500">
                  See Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-luxury-cream">
          <div className="max-w-[1800px] mx-auto px-8 md:px-16">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border border-luxury-ink/[0.06] bg-luxury-warm p-6 sm:p-10 transition-all hover:border-luxury-gold/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-luxury-gold font-bold text-sm" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1 h-px bg-luxury-ink/[0.06]" />
                  </div>
                  <h3 className="text-xl text-luxury-ink" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>{section.title}</h3>
                  <div className="mt-4 text-base leading-relaxed text-luxury-ink/60">
                    {section.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── V7: Enterprise ──
  if (version === "v7") {
    return (
      <>
        <section className="relative bg-[#0b1121] pt-16 overflow-hidden">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/80">{category}</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h1>
              <p className="mt-3 text-lg text-slate-400">{tagline}</p>
              <p className="mt-6 text-base leading-relaxed text-slate-500 max-w-2xl">{description}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact?demo=true" className="group flex items-center gap-2 bg-blue-500 rounded-lg px-8 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-colors">
                  Request a Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/pricing" className="border border-white/[0.12] rounded-lg px-8 py-3 text-sm font-medium text-white hover:border-white/30 transition-colors">
                  See Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#0b1121]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 transition-all hover:bg-white/[0.05] hover:border-white/[0.12]"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-blue-400 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{section.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f1729] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to transform your <span className="text-blue-400">{category.toLowerCase()}</span>?
            </h2>
            <p className="mt-4 text-base text-slate-400">Get started with a free 14-day trial. No credit card required.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?demo=true" className="group flex items-center gap-2 bg-blue-500 rounded-lg px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors">
                Start Free Trial <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className="border border-white/[0.12] rounded-lg px-8 py-3.5 text-sm font-medium text-white hover:border-white/30 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── V6: Precision — Light engineering with dark hero ──
  if (version === "v6") {
    return (
      <>
        <section className="relative bg-zinc-950 pt-24 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-blue-600 opacity-10 blur-[100px]" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">{category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
              <p className="mt-3 text-lg text-zinc-400 font-light italic">{tagline}</p>
              <p className="mt-6 text-base leading-relaxed text-zinc-400 font-light max-w-2xl">{description}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact?demo=true" className="group inline-flex items-center gap-2 bg-white text-zinc-950 rounded-full px-8 py-3.5 text-sm font-bold hover:bg-zinc-100 transition-colors">
                  Request a Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center gap-2 border border-zinc-700 text-white rounded-full px-8 py-3.5 text-sm font-semibold hover:border-zinc-500 transition-colors">
                  See Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-zinc-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((section, i) => (
                <motion.div key={section.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-blue-600 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1 h-px bg-zinc-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950">{section.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{section.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 border-t border-zinc-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-zinc-950 rounded-[2rem] p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white tracking-tight">Ready to supercharge your <span className="text-blue-400">{category.toLowerCase()}</span>?</h2>
                <p className="mt-4 text-zinc-400">Get started with a free 14-day trial. No credit card required.</p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/contact?demo=true" className="group inline-flex items-center gap-2 bg-white text-zinc-950 rounded-full px-8 py-3.5 text-sm font-bold hover:bg-zinc-100 transition-colors">
                    Start Free Trial <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/contact" className="bg-zinc-800 text-white border border-zinc-700 rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-zinc-700 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── V5: Prestige ──
  if (version === "v5") {
    return (
      <>
        <section className="relative bg-[#050b1a] pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0a1428] to-[#050b1a]" />
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  {category}
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[0.95] tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {title}
              </h1>
              <p className="mt-6 text-xl text-slate-400 font-light italic">
                {tagline}
              </p>
              <p className="mt-8 text-base leading-relaxed text-slate-500 max-w-2xl font-light">
                {description}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-6">
                <Link
                  href="/contact?demo=true"
                  className="group relative px-10 py-4 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-3"
                >
                  Request a Demo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  See Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-[#050b1a]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border border-white/[0.06] bg-transparent p-8 sm:p-10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-blue-500 font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-400 font-light">
                    {section.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-5xl font-light text-[#050b1a] tracking-tighter"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Ready to transform your{" "}
              <span className="italic">{category.toLowerCase()}</span>?
            </h2>
            <p className="mt-6 text-lg text-slate-500 font-light">
              Get started with a free 14-day trial. No credit card required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/contact?demo=true"
                className="group px-12 py-5 bg-[#050b1a] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 transition-all duration-500 flex items-center gap-3"
              >
                Start Free Trial
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 border border-[#050b1a]/20 text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#050b1a] hover:text-white transition-all duration-500"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── Default (v1/v2/v3/v4) ──
  return (
    <>
      <section className="relative overflow-hidden bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgLight} ${textColor}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                {category}
              </span>
            </div>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-lg font-medium italic text-gray-400">
              {tagline}
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href="/contact?demo=true"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              >
                REQUEST A DEMO
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-dark-900 px-7 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
              >
                SEE PRICING
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <h3 className="flex items-start gap-2 text-lg font-bold text-dark-900">
                  <span className="mt-0.5 text-coral-500">&#9658;</span>
                  {section.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark-900">
            Ready to supercharge your{" "}
            <span className="text-coral-500">{category.toLowerCase()}</span>?
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Get started with a free 14-day trial. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?demo=true"
              className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            >
              START FREE TRIAL
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
            >
              CONTACT SALES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
