"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

export function CtaBanner() {
  const { version } = useDesignVersion();

  // Only render for V4, V5, V6, V7, and V8
  if (version !== "v4" && version !== "v5" && version !== "v6" && version !== "v7" && version !== "v8") return null;

  // ── V8: Atelier — Luxury editorial ──
  if (version === "v8") {
    return (
      <section className="py-48 px-8 md:px-16 text-center bg-luxury-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-6xl md:text-8xl mb-12 text-luxury-ink"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Let&apos;s begin the <br /><span className="italic">conversation.</span>
            </h2>
            <p className="text-xl text-luxury-ink/60 mb-16 max-w-xl mx-auto">
              We are selective in our partnerships, ensuring each engagement receives our absolute focus and expertise.
            </p>
            <Link
              href="/contact?demo=true"
              className="inline-block bg-luxury-ink text-luxury-cream px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-luxury-gold transition-colors duration-500"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V7: Enterprise ──
  if (version === "v7") {
    return (
      <section className="py-20 sm:py-28 bg-[#0b1121]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-8 py-16 text-center sm:px-16 sm:py-20"
          >
            <div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
                Ready to transform your business
                <br />
                relationships?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
                Join 500+ teams scaling smarter with Claritas. Start your journey toward enterprise CRM excellence today.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact?demo=true"
                  className="group flex items-center gap-2 bg-white rounded-lg px-8 py-3.5 text-sm font-semibold text-blue-700 transition-all hover:bg-white/90"
                >
                  Get Started Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/30 rounded-lg px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V6: Precision ──
  if (version === "v6") {
    return (
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Technical grid pattern */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Deploy your new CRM today.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-zinc-400">
                Join 50+ leading enterprises who sell smarter with Claritas CRM
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact?demo=true"
                  className="bg-white text-zinc-950 rounded-full px-8 py-4 text-base font-bold transition-all hover:bg-zinc-100"
                >
                  Start 14-day free trial
                </Link>
                <Link
                  href="/contact"
                  className="bg-zinc-800 text-white border border-zinc-700 rounded-full px-8 py-4 text-base font-medium transition-all hover:bg-zinc-700"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V5: Prestige ──
  if (version === "v5") {
    return (
      <section className="bg-[#050b1a] py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2
              className="text-5xl md:text-7xl font-light text-white tracking-tighter"
              style={{ fontFamily: 'var(--font-playfair, "Playfair Display", serif)' }}
            >
              Ready to
              <br />
              <span className="italic text-blue-500">Transform</span> Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-slate-400 font-light">
              Join 50+ leading enterprises who sell smarter with Claritas CRM
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?demo=true"
                className="group flex items-center gap-2 bg-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#050b1a] transition-all hover:bg-blue-500 hover:text-white"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Talk to Sales
              </Link>
            </div>
            <div className="mt-16 border-t border-white/[0.06] pt-6">
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">
                Global offices in 15 countries
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V4: Aurora ──
  return (
    <section className="bg-[#0a0118] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600/80 via-blue-600/70 to-emerald-500/60 px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
              Ready to transform your
              <br />
              business relationships?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
              Join 50+ leading enterprises who sell smarter with Claritas CRM
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?demo=true"
                className="group flex items-center gap-2 bg-white rounded-xl px-8 py-3.5 text-sm font-semibold text-violet-700 transition-all hover:bg-white/90"
              >
                Get Started for Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 rounded-xl px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
