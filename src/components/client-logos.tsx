"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Globe, ArrowRight } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

interface Client {
  name: string;
  src?: string;
}

const row1: Client[] = [
  { name: "FGV", src: "/clients/fgv.png" },
  { name: "Nando's", src: "/clients/nandos.png" },
  { name: "Pfizer", src: "/clients/pfizer.png" },
  { name: "SingTel", src: "/clients/singtel.png" },
  { name: "Flashtech" },
  { name: "Singapore Press Holdings" },
];

const row2: Client[] = [
  { name: "Joey Yap" },
  { name: "Astro" },
  { name: "RoomServ" },
  { name: "Estate123", src: "/clients/estate123.png" },
  { name: "Bloom House" },
];

const row3: Client[] = [
  { name: "AFOS" },
  { name: "Carlsberg" },
  { name: "Intel", src: "/clients/intel.png" },
  { name: "Mestari", src: "/clients/mestari.png" },
  { name: "Vistage", src: "/clients/vistage.png" },
  { name: "Proton" },
  { name: "CIMB Aviva" },
];

const allClients = [...row1, ...row2, ...row3];

function LogoItem({ client, variant }: { client: Client; variant: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8" | "v9" }) {
  const styles = {
    v1: { img: "opacity-20", text: "text-dark-900/[0.08]" },
    v2: { img: "opacity-20", text: "text-[#1e293b]/[0.08]" },
    v3: { img: "opacity-25", text: "text-[#1a2b4a]/[0.1]" },
    v4: { img: "opacity-15 brightness-0 invert", text: "text-white/[0.06]" },
    v5: { img: "opacity-[0.03] brightness-0 invert", text: "text-white/[0.03]" },
    v6: { img: "opacity-20", text: "text-zinc-800/[0.08]" },
    v7: { img: "opacity-15 brightness-0 invert", text: "text-white/[0.06]" },
    v8: { img: "opacity-15", text: "text-luxury-ink/[0.06]" },
    v9: { img: "opacity-60 grayscale contrast-125", text: "text-[#0A0A0A]" },
  }[variant];

  if (client.src) {
    return (
      <Image
        src={client.src}
        alt={client.name}
        width={120}
        height={50}
        className={`h-10 w-auto max-w-[120px] object-contain sm:h-14 ${styles.img}`}
      />
    );
  }
  return (
    <span className={`text-xl font-extrabold tracking-wide sm:text-2xl whitespace-nowrap uppercase ${styles.text}`}>
      {client.name}
    </span>
  );
}

export function ClientLogos() {
  const { version } = useDesignVersion();

  // ── V9: Obsidian — Industrial brutalist directory ──
  if (version === "v9") {
    return (
      <section className="bg-[#F4F2EC] border-y border-[#0A0A0A]/14 py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 mb-12 items-end border-b border-[#0A0A0A]/14 pb-6">
            <div className="col-span-12 md:col-span-4">
              <div className="v9-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4D1F] mb-3">
                SECTION B · REGISTRY
              </div>
              <h2 className="v9-display text-5xl md:text-6xl text-[#0A0A0A]">
                FIELD<br />INDEX / 23
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7">
              <p className="text-base text-[#0A0A0A]/70 leading-relaxed">
                Operators of record running Claritas across financial services, media, telecoms, and retail. Twenty-three brands, one shared operating system.
              </p>
            </div>
          </div>

          {/* Logos as a strict ledger grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-[#0A0A0A]/14">
            {allClients.map((client, idx) => (
              <div
                key={client.name}
                className="relative group flex flex-col items-center justify-center border-r border-b border-[#0A0A0A]/14 aspect-[4/3] px-4 hover:bg-[#0A0A0A] hover:text-[#F4F2EC] transition-colors"
              >
                <div className="absolute top-2 left-2 v9-mono text-[8px] uppercase tracking-[0.3em] text-[#0A0A0A]/40 group-hover:text-[#FF4D1F]">
                  {String(idx + 1).padStart(3, "0")}
                </div>
                <div className="group-hover:brightness-0 group-hover:invert transition-all">
                  <LogoItem client={client} variant="v9" />
                </div>
                <div className="absolute bottom-2 right-2 v9-mono text-[8px] uppercase tracking-[0.25em] text-[#0A0A0A]/30 group-hover:text-[#F4F2EC]/60">
                  ACTIVE
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="v9-mono text-[10px] uppercase tracking-[0.3em] text-[#0A0A0A]/60">
              ↳ 23 DEPLOYMENTS · 15 COUNTRIES · 12 SECTORS
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 border border-[#0A0A0A] px-5 py-2.5 v9-mono text-[11px] uppercase tracking-[0.22em] font-semibold text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F4F2EC] transition-colors"
            >
              Read Dossiers
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ── V8: Atelier — Luxury editorial ──
  if (version === "v8") {
    return (
      <section className="py-32 px-8 md:px-16 bg-luxury-warm overflow-hidden relative">
        {/* Background watermark logos */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
              {row.map((c) => (
                <div key={c.name} className="shrink-0">
                  <LogoItem client={c} variant="v8" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-6 block">
                Our Expertise
              </span>
              <h2
                className="text-5xl md:text-6xl text-luxury-ink"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                Bespoke Strategic Advisory
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/case-studies" className="bg-luxury-ink text-luxury-cream px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-luxury-gold transition-colors duration-500">
                View All Services
              </Link>
            </motion.div>
          </div>

          <div className="space-y-0">
            {[
              { title: "Capital Architecture", category: "Sales", desc: "Structuring complex financial instruments with surgical precision." },
              { title: "Market Intelligence", category: "Marketing", desc: "Uncovering hidden patterns in global markets through proprietary AI." },
              { title: "Legacy Strategy", category: "Support", desc: "Crafting multi-generational roadmaps for enterprises and institutions." },
              { title: "Digital Sovereignty", category: "Technology", desc: "Securing and optimizing digital assets in an increasingly complex world." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group py-12 border-b border-luxury-ink/10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-8 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-12">
                  <span className="text-sm italic text-luxury-ink/30" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>0{i + 1}</span>
                  <div>
                    <h3
                      className="text-3xl md:text-4xl group-hover:text-luxury-gold transition-colors"
                      style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-luxury-ink/50 mt-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-ink/40">{item.category}</span>
                  <div className="w-12 h-12 rounded-full border border-luxury-ink/10 flex items-center justify-center group-hover:bg-luxury-ink group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
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
      <section className="bg-[#0b1121] border-y border-white/[0.04] py-24 sm:py-32 overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
              {row.map((c) => (
                <div key={c.name} className="shrink-0">
                  <LogoItem client={c} variant="v7" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-blue-400/60 uppercase">
              Trusted by industry leaders
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              50+ successful{" "}
              <span className="text-blue-400">
                customer stories
              </span>
            </h2>
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-blue-500 rounded-lg px-8 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-all"
              >
                View Case Studies &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V6: Precision ──
  if (version === "v6") {
    return (
      <section className="py-8 border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 opacity-50 grayscale">
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-500">
              Trusted By
            </span>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              <span className="flex items-center gap-1.5 text-lg font-bold text-zinc-800" style={{ fontFamily: "Georgia, serif" }}>
                FGV <Zap className="h-4 w-4" />
              </span>
              <span className="flex items-center gap-1.5 text-lg tracking-tight text-zinc-800 font-semibold">
                SingTel <Globe className="h-4 w-4" />
              </span>
              <span className="text-lg font-extrabold italic text-zinc-800">
                Nando&apos;s
              </span>
              <span className="text-lg font-bold tracking-widest uppercase text-zinc-800">
                Intel
              </span>
              <span className="text-lg font-medium tracking-tighter text-zinc-800">
                Pfizer
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── V5: Prestige ──
  if (version === "v5") {
    const stats = [
      { value: "50+", label: "Enterprise Clients" },
      { value: "12", label: "Industries" },
      { value: "15", label: "Countries" },
      { value: "98%", label: "Retention" },
    ];

    return (
      <section className="py-32 sm:py-40 bg-[#050b1a] overflow-hidden relative">
        {/* Watermark logos */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
              {row.map((c) => (
                <div key={c.name} className="shrink-0">
                  <LogoItem client={c} variant="v5" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left: Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.value}
                  </span>
                  <p className="mt-2 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Text + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">
                Legacy of Performance
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-light text-white leading-tight tracking-tighter">
                The Power of{" "}
                <em className="text-blue-500 underline">Predictive</em>{" "}
                Logic.
              </h2>
              <p className="mt-6 text-slate-400 font-light text-lg leading-relaxed max-w-lg">
                For over a decade, we have partnered with enterprises across Asia-Pacific to turn fragmented customer data into decisive competitive advantage. Our track record speaks through retention, not rhetoric.
              </p>
              <div className="mt-10">
                <Link
                  href="/case-studies"
                  className="inline-block px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.25em] text-[10px] hover:bg-white hover:text-[#050b1a] transition-all duration-700"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ── V4: Aurora ──
  if (version === "v4") {
    return (
      <section className="bg-[#0a0118] border-y border-white/[0.04] py-24 sm:py-32 overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
              {row.map((c) => (
                <div key={c.name} className="shrink-0">
                  <LogoItem client={c} variant="v4" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              50+ successful{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                customer stories
              </span>
            </h2>
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl px-8 py-3 text-sm font-medium text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
              >
                View Case Studies &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V2: Slate ──
  if (version === "v2") {
    return (
      <section className="relative overflow-hidden bg-[#f0f2f5] py-24 sm:py-32">
        {/* Background logos */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
              {row.map((c) => (
                <div key={c.name} className="shrink-0">
                  <LogoItem client={c} variant="v2" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#0d7377] uppercase">
              Trusted by industry leaders
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#1e293b] sm:text-4xl md:text-5xl">
              50+ successful
              <span className="text-[#0d7377]"> customer stories</span>
            </h2>
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="inline-block rounded-lg bg-[#0d7377] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0a5f62] hover:shadow-lg hover:shadow-[#0d7377]/20"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V3: Executive ──
  if (version === "v3") {
    return (
      <section className="relative overflow-hidden bg-[#f4f2ed] py-24 sm:py-32">
        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
          {[row1, row2, row3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
              {row.map((c) => (
                <div key={c.name} className="shrink-0">
                  <LogoItem client={c} variant="v3" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#1a2b4a]/40 uppercase">
              Client Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#1a2b4a] sm:text-4xl md:text-5xl">
              50+ successful
              <span className="text-amber-600"> customer stories</span>
            </h2>
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="inline-block rounded-lg bg-[#1a2b4a] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#243756]"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── V1: Coral Warmth ──
  return (
    <section className="relative bg-gray-100 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
        {[row1, row2, row3].map((row, ri) => (
          <div key={ri} className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
            {row.map((c) => (
              <div key={c.name} className="shrink-0">
                <LogoItem client={c} variant="v1" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl md:text-5xl">MORE THAN 50+ SUCCESSFUL</h2>
          <h2 className="text-2xl font-extrabold text-coral-500 sm:text-3xl md:text-5xl">CUSTOMER STORIES</h2>
          <div className="mt-8">
            <Link href="/case-studies" className="inline-block rounded-lg bg-coral-500 px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
              LEARN MORE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
