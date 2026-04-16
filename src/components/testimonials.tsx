"use client";

import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const testimonials = [
  {
    name: "Ahmad Rahman",
    company: "FGV Holdings",
    rating: 4,
    text: "Claritas CRM transformed how we manage our customer relationships. The integrated marketing and sales pipeline gave us complete visibility across all touchpoints.",
  },
  {
    name: "Sarah Chen",
    company: "SingTel Malaysia",
    rating: 5,
    text: "The support module has significantly improved our customer satisfaction scores. Automated ticket routing and SLA tracking saved our team countless hours.",
  },
  {
    name: "David Tan",
    company: "Nando's Malaysia",
    rating: 4,
    text: "We chose Claritas for its loyalty program integration. Being able to connect our CRM data with customer rewards has driven measurable repeat business growth.",
  },
];

export function Testimonials() {
  const { version } = useDesignVersion();

  // ── V8: Atelier — Luxury editorial ��─
  if (version === "v8") {
    return (
      <section className="py-32 px-8 md:px-16 bg-luxury-warm">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl mb-6 text-luxury-ink"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              The Journal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-luxury-ink/50 uppercase tracking-[0.3em] text-[11px]"
            >
              Insights from Our Clients
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group"
              >
                <div className="mb-8">
                  <span className="text-4xl leading-none text-luxury-gold/40" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>&ldquo;</span>
                </div>
                <p className="text-lg text-luxury-ink/70 leading-relaxed italic mb-8" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
                  {t.text}
                </p>
                <div className="border-t border-luxury-ink/10 pt-6">
                  <div className="text-sm font-semibold text-luxury-ink">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold mt-1">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V7: Enterprise ──
  if (version === "v7") {
    return (
      <section className="py-20 sm:py-28 bg-[#0f1729]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-blue-400/80 uppercase">
              Proof of Impact
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Success Stories.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 ${
                        si < t.rating
                          ? "fill-blue-400 text-blue-400"
                          : "fill-white/[0.06] text-white/[0.06]"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── V6: Precision ──
  if (version === "v6") {
    return (
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight">
                Built for scale.
              </h2>
              <p className="mt-2 text-zinc-600 text-base">
                Trusted by leading enterprises across Southeast Asia.
              </p>
            </div>
            <a href="/case-studies" className="mt-4 sm:mt-0 text-blue-600 text-sm font-semibold hover:underline">
              Read case studies &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-2 bg-zinc-950 rounded-3xl p-10 text-white flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-medium leading-snug">
                  &ldquo;{testimonials[1].text}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-white">
                  SC
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Sarah Chen</div>
                  <div className="text-xs text-zinc-400">SingTel Malaysia</div>
                </div>
              </div>
            </motion.div>

            {/* Small card column */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 flex-1"
              >
                <ShieldCheck className="h-6 w-6 text-zinc-400 mb-4" />
                <p className="text-zinc-700 text-sm leading-relaxed">
                  &ldquo;{testimonials[0].text}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold text-zinc-950">Ahmad Rahman</div>
                  <div className="text-xs text-zinc-400">FGV Holdings</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-blue-600 rounded-3xl p-8 text-white flex-1 flex flex-col justify-center"
              >
                <div className="text-5xl font-bold tracking-tighter">99.9%</div>
                <div className="mt-2 text-blue-200 text-sm font-medium">Uptime SLA Guaranteed</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V5: Prestige ──
  if (version === "v5") {
    return (
      <section className="py-32 sm:py-40 bg-[#050b1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Testimonials</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", serif)' }}>
              What our clients say
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-white/[0.06] bg-transparent p-8"
              >
                <span className="text-4xl leading-none text-blue-500/40">&ldquo;</span>
                <p className="mt-2 text-lg font-light italic leading-relaxed text-slate-400">
                  {t.text}
                </p>
                <div className="mt-6 border-t border-white/[0.06] pt-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-white">{t.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-blue-500">{t.company}</div>
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
      <section className="bg-[#f7f8fa] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#0d7377] uppercase">Testimonials</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e293b] sm:text-4xl">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)]"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 ${
                        si < t.rating
                          ? "fill-[#0d7377] text-[#0d7377]"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7377]/10 text-xs font-bold text-[#0d7377]">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1e293b]">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.company}</div>
                  </div>
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
      <section className="bg-[#faf9f7] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#1a2b4a]/40 uppercase">Testimonials</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1a2b4a] sm:text-4xl">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-[#1a2b4a]/[0.06] bg-white p-6 sm:p-8"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 ${
                        si < t.rating
                          ? "fill-amber-500 text-amber-500"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#1a2b4a]/60">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#1a2b4a]/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2b4a]/[0.05] text-xs font-bold text-[#1a2b4a]/60">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a2b4a]">{t.name}</div>
                    <div className="text-xs text-[#1a2b4a]/40">{t.company}</div>
                  </div>
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
      <section className="bg-[#0f0420] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-14"
          >
            <span className="text-violet-400/60 tracking-[0.2em] uppercase text-xs font-semibold">Testimonials</span>
            <h2 className="mt-3 text-white text-3xl font-bold sm:text-4xl">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-8"
              >
                <Quote className="h-5 w-5 text-violet-400/30" />
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  {t.text}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-xs font-bold text-violet-300">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.company}</div>
                  </div>
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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-900 sm:text-4xl">OUR <span className="text-coral-500">CLIENTS</span></h2>
        </motion.div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -6 }} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.company}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className={`h-4 w-4 ${si < t.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
