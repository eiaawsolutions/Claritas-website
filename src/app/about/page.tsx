"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/contact-section";
import { useDesignVersion } from "@/config/design-context";
import {
  Users,
  Globe,
  Award,
  Shield,
  Eye,
  Target,
  TrendingUp,
  Headphones,
  Phone,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "2008",
    title: "Founded",
    desc: "Claritas CRM launched by Netster with a vision to bring enterprise-grade CRM to APAC businesses.",
  },
  {
    year: "2010",
    title: "MSC Approved",
    desc: "Received MSC (Multimedia Super Corridor) product approval from the Malaysian government.",
  },
  {
    year: "2012",
    title: "Azure Partnership",
    desc: "Became a Microsoft Azure partner, bringing cloud-first CRM to the region.",
  },
  {
    year: "2016",
    title: "Enterprise Expansion",
    desc: "Expanded to serve major enterprises including SingTel, Pfizer, and Nando\u2019s.",
  },
  {
    year: "2020",
    title: "Cloud-First Pivot",
    desc: "Full cloud-native architecture on Azure with hybrid deployment options.",
  },
  {
    year: "2026",
    title: "Next Generation",
    desc: "AI-powered features, modern UX, and deeper integrations for the next era of CRM.",
  },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    desc: "Every feature we build starts with the question: does this help our customers serve their customers better?",
  },
  {
    icon: Globe,
    title: "Built for APAC",
    desc: "We understand the unique needs of businesses in Malaysia, Singapore, and the broader APAC region.",
  },
  {
    icon: Shield,
    title: "Security & Trust",
    desc: "Enterprise-grade security, data protection compliance, and transparent practices are non-negotiable.",
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    desc: "We ship improvements every sprint, driven by customer feedback and market intelligence.",
  },
];

const capabilities = [
  {
    title: "Single View of Customer",
    description: "Build a complete 360-degree view of your customer in a single integrated platform.",
    icon: Eye,
    href: "/products/marketing",
  },
  {
    title: "Impactful Marketing",
    description: "Automate and simplify essential marketing tasks to build effective campaigns and deliver the right message at the right time.",
    icon: Target,
    href: "/products/marketing",
  },
  {
    title: "Sales Opportunities",
    description: "Streamline your omni-channel sales process, build a sales pipeline, and analyze sales data to increase conversion.",
    icon: TrendingUp,
    href: "/products/sales",
  },
  {
    title: "Service Excellence",
    description: "Provide an effortless omnichannel customer experience by delivering value with every interaction.",
    icon: Headphones,
    href: "/products/support",
  },
  {
    title: "Integrated Contact Centre",
    description: "Integrate CRM with contact centre systems to reduce resolution time and deliver consistent customer experience.",
    icon: Phone,
    href: "/products/call-center",
  },
  {
    title: "Insightful Metrics",
    description: "Turn data into useful information with a snapshot of customer, marketing, sales and service metrics.",
    icon: BarChart3,
    href: "/products/call-center",
  },
];

export default function AboutPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV6 = version === "v6";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  // ── V9 Atrium — Executive editorial ──
  if (version === "v9") {
    return (
      <>
        {/* Hero */}
        <section className="relative bg-[#F7F1E8] pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Our Charter</span>
              </div>
              <h1 className="v9-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#1C1A17]">
                Empowering businesses with
                <br />
                <span className="italic font-light text-[#8B6F3E]">smarter CRM.</span>
              </h1>
              <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70 max-w-2xl">
                Claritas&trade; is a registered trademark of Netster &mdash; a Malaysian technology company dedicated to building enterprise-grade customer relationship management solutions for the APAC market.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is CRM */}
        <section className="bg-[#EDE4D3] py-24">
          <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Our Definition</span>
              </div>
              <h2 className="v9-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#1C1A17]">
                What is Claritas&trade; <span className="italic text-[#8B6F3E]">CRM?</span>
              </h2>
              <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70">
                Claritas&trade; CRM is an integrated and customer-centric solution that manages, tracks, and stores information related to existing customers and new prospects. It helps organisations enhance customer experience and drive measurable growth by integrating technology, data, process and people to orchestrate marketing, sales, and service engagements across every touchpoint.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-[#F7F1E8] py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">The Capabilities</span>
                <span className="h-px w-10 bg-[#8B6F3E]" />
              </div>
              <h2 className="v9-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
                What Claritas&trade; <span className="italic text-[#8B6F3E]">CRM can do.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="bg-[#EDE4D3] p-8 lg:p-10 transition-shadow hover:v9-paper-edge"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20 mb-6">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <h3 className="v9-serif text-[22px] md:text-[24px] leading-tight tracking-[-0.01em] text-[#1C1A17]">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#1C1A17]/70">
                    {cap.description}
                  </p>
                  <Link
                    href={cap.href}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#1C1A17] border-b border-[#1C1A17] pb-0.5 hover:text-[#8B6F3E] hover:border-[#8B6F3E] transition-colors"
                  >
                    Further Reading
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-[#EDE4D3] py-24">
          <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">The Distinction</span>
              </div>
              <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1C1A17]">
                What makes Claritas&trade; CRM <span className="italic text-[#8B6F3E]">different.</span>
              </h2>
              <ul className="mt-10 space-y-6">
                {[
                  "Claritas\u2122 CRM domain knowledge and our consulting services guide clients toward best practices, rather than simply executing against a requirements document.",
                  "The Claritas\u2122 CRM solution is continuously evolving, with new features and functionality released to clients as part of the product roadmap.",
                  "Rapid time to market, a proven track record of implementation, and the adaptability to deliver more value for each ringgit invested.",
                  "Established project management, implementation methodology, and governance to ensure the engagement runs smoothly and responds efficiently to change.",
                ].map((d, i) => (
                  <li key={i} className="flex items-start gap-4 text-[16px] leading-[1.7] text-[#1C1A17]/75">
                    <span className="v9-serif italic text-[22px] text-[#8B6F3E] leading-none shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 360 View */}
        <section className="bg-[#F7F1E8] py-24">
          <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Architecture</span>
              </div>
              <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1C1A17]">
                A single, 360° view of every <span className="italic text-[#8B6F3E]">customer.</span>
              </h2>
              <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70">
                Inadequate knowledge about a customer creates a shortfall when serving them or closing a deal. Claritas&trade; CRM assembles a complete picture of every customer by consolidating all key data your organisation holds &ndash; profiles, product holdings, service subscriptions, open cases, opportunities, potential offers, service alerts, next best action, and the full interaction history &ndash; into one integrated platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#EDE4D3] py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Our Values</span>
                <span className="h-px w-10 bg-[#8B6F3E]" />
              </div>
              <h2 className="v9-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
                What drives <span className="italic text-[#8B6F3E]">us.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F7F1E8] p-8 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 v9-serif text-[20px] leading-tight text-[#1C1A17]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#1C1A17]/65">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[#F7F1E8] py-24 lg:py-32" id="case-studies">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Our Journey</span>
                <span className="h-px w-10 bg-[#8B6F3E]" />
              </div>
              <h2 className="v9-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
                Eighteen years of <span className="italic text-[#8B6F3E]">quiet conviction.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#EDE4D3] p-8"
                >
                  <span className="v9-serif italic text-[40px] leading-none text-[#8B6F3E]">
                    {t.year}
                  </span>
                  <h3 className="mt-4 v9-serif text-[20px] leading-tight text-[#1C1A17]">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#1C1A17]/65">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fintech CTA */}
        <section className="bg-[#1C1A17] text-[#F7F1E8] py-24 lg:py-32">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#B89968]" />
              <span className="v9-eyebrow text-[#B89968]">Specialist Solution</span>
              <span className="h-px w-12 bg-[#B89968]" />
            </div>
            <h2 className="v9-serif text-[44px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
              CRM for Banking &amp; <span className="italic font-light text-[#B89968]">Financial Services.</span>
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-[17px] leading-[1.7] text-[#F7F1E8]/70">
              A flexible, fully customisable CRM suited to the regulatory and operational demands of banking and financial services.
            </p>
            <Link
              href="/solutions/fintech"
              className="mt-12 inline-flex items-center gap-3 bg-[#F7F1E8] text-[#1C1A17] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#B89968] transition-colors duration-500 group"
            >
              View the Fintech Solution
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <ContactSection />
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden pt-16 ${isV6 ? "bg-zinc-950" : isDark ? "bg-[#0b1121]" : "bg-gray-50"}`}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-[#0f1729] to-[#0b1121]" />}
        {isV6 && (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        )}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isV6 || isDark ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isV6 ? 0.6 : isDark ? 0.6 : 0.5 }}
            className="max-w-3xl"
          >
            {isV6 ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">
                About Us
              </span>
            ) : isDark ? (
              <div className="flex items-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  About Us
                </span>
              </div>
            ) : (
              <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                About Us
              </span>
            )}
            <h1
              className={
                isV6
                  ? "mt-6 text-3xl md:text-5xl font-bold text-white tracking-tight"
                  : isDark
                  ? "text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                  : "mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl"
              }
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV6 ? (
                <>Empowering businesses with <span className="text-blue-400">smarter CRM</span></>
              ) : isDark ? (
                <>Empowering businesses with <span className="text-blue-500">smarter CRM</span></>
              ) : (
                <>Empowering businesses with{" "}<span className="text-coral-500">smarter CRM</span></>
              )}
            </h1>
            <p className={`mt-6 text-base leading-relaxed ${isV6 ? "text-zinc-400 font-light" : isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
              Claritas&trade; is a registered trademark of Netster &mdash; a Malaysian
              technology company dedicated to building enterprise-grade customer
              relationship management solutions for the APAC market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Claritas CRM */}
      <section className={isV6 ? "py-20 bg-white" : isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"} id="what-is-crm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isV6 ? "text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight" : isDark ? "text-2xl sm:text-3xl font-light text-blue-500 tracking-tighter" : "text-2xl font-bold text-coral-500 sm:text-3xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              What is Claritas&trade; CRM?
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
              Claritas&trade; CRM is an integrated and customer centric CRM solution that manages, tracks, and stores information related to your existing customers and new prospects. It helps companies to enhance customer experience and drive business growth to the next level by integrating technology, data, process and people to effectively organize, automate and synchronize marketing, sales and service engagements across all customer contact points.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 Capability Cards */}
      <section className={isV6 ? "bg-zinc-50 py-20" : isDark ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={isDark ? "text-center mb-16" : "text-center mb-12"}
          >
            {isV6 ? (
              <>
                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                  Capabilities
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight">
                  What Claritas&trade; CRM Can Do
                </h2>
              </>
            ) : isDark ? (
              <>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                  Capabilities
                </span>
                <h2
                  className="mt-4 text-3xl md:text-5xl font-light text-white tracking-tighter"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  What Claritas&trade; CRM Can Do
                </h2>
              </>
            ) : (
              <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl">
                WHAT <span className="text-coral-500">CLARITAS&trade; CRM</span> CAN DO
              </h2>
            )}
          </motion.div>

          <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isDark ? "gap-8" : ""}`}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={
                  isV6
                    ? "group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    : isDark
                    ? "border border-white/[0.06] bg-transparent p-8 transition-all hover:border-white/[0.12] hover:-translate-y-1"
                    : "group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                }
              >
                <div className={isV6 ? "rounded-lg bg-blue-600 px-4 py-2 text-center" : isDark ? "bg-blue-500/10 px-4 py-2 text-center" : "rounded-lg bg-coral-500 px-4 py-2 text-center"}>
                  <h3 className={isV6 ? "text-sm font-bold text-white" : isDark ? "text-sm font-bold text-blue-400" : "text-sm font-bold text-white"}>{cap.title}</h3>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-500"}`}>
                  {cap.description}
                </p>
                <Link
                  href={cap.href}
                  className={`mt-4 inline-block text-xs font-semibold ${isV6 ? "text-blue-600 hover:text-blue-700" : isDark ? "text-blue-500 hover:text-blue-400" : "text-coral-500 hover:text-coral-600"}`}
                >
                  Learn more &gt;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes different */}
      <section className={isV6 ? "py-20 bg-white" : isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isV6 ? "text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight" : isDark ? "text-xl sm:text-2xl font-light text-white tracking-tighter" : "text-xl font-bold text-dark-900 sm:text-2xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV6 ? (
                <>What makes Claritas&trade; CRM <span className="text-blue-600">different</span>?</>
              ) : isDark ? (
                <>What makes Claritas&trade; CRM <span className="text-blue-500">different</span>?</>
              ) : (
                <>What makes Claritas&trade; CRM <span className="text-coral-500">different</span>?</>
              )}
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Claritas\u2122 CRM domain knowledge and understanding of the different organizations and operating models enable our consulting services to guide our clients for best practices, instead of just asking the client \u201cwhat are your requirements?\u201d.",
                "Claritas\u2122 CRM solution is constantly evolving with new features and functionality becoming available for the clients on future releases.",
                "Fast time to market with proven track record of implementation and flexibility to adapt to a variety of needs to deliver more value for money.",
                "Established project management, implementation approach and governance methodology to ensure smooth execution of the project and ensure efficient and effective response to unforeseen changes in the implementation.",
              ].map((d, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isV6 ? "bg-blue-600" : isDark ? "bg-blue-500" : "bg-dark-900"}`} />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 360 View */}
      <section className={isV6 ? "bg-zinc-50 py-20" : isDark ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isV6 ? "text-xl sm:text-2xl font-bold text-blue-600 uppercase tracking-tight" : isDark ? "text-xl sm:text-2xl font-light text-blue-500 uppercase tracking-tighter" : "text-xl font-bold text-coral-500 uppercase sm:text-2xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              Single 360-Degree View of Customer
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
              Inadequate knowledge about a customer&apos;s information creates a shortfall when trying to serve the customer or close a deal. Claritas&trade; CRM enables a complete picture of every customer by integrating and consolidating all the key data that your organization holds on them in a single integrated CRM platform &ndash; creating a rich single 360-degree view of your customers&apos; profiles, product holdings, service subscriptions, open cases and opportunities, potential offers, service alerts, next best action (NBA) and interaction history, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className={isV6 ? "py-20 bg-white" : isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={isDark ? "text-center mb-16" : "text-center mb-12"}>
            {isV6 ? (
              <>
                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                  Our Values
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight">
                  What Drives Us
                </h2>
              </>
            ) : isDark ? (
              <>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                  Our Values
                </span>
                <h2
                  className="mt-4 text-3xl md:text-5xl font-light text-white tracking-tighter"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  What Drives Us
                </h2>
              </>
            ) : (
              <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl md:text-4xl">
                WHAT <span className="text-coral-500">DRIVES</span> US
              </h2>
            )}
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 ${isDark ? "gap-8" : "gap-6"}`}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={
                  isV6
                    ? "rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    : isDark
                    ? "border border-white/[0.06] bg-transparent p-8 text-center transition-all hover:border-white/[0.12] hover:-translate-y-1"
                    : "rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                }
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center ${isV6 ? "rounded-full bg-blue-50 text-blue-600" : isDark ? "bg-blue-500/10 text-blue-400" : "rounded-full bg-coral-50 text-coral-500"}`}>
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className={`mt-4 text-base font-bold ${isV6 ? "text-zinc-950" : isDark ? "text-white" : "text-dark-900"}`}>
                  {v.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-500"}`}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={isV6 ? "bg-zinc-50 py-20" : isDark ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"} id="case-studies">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={isDark ? "text-center mb-16" : "text-center mb-12"}>
            {isV6 ? (
              <>
                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                  Timeline
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight">
                  Our Journey
                </h2>
              </>
            ) : isDark ? (
              <>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                  Timeline
                </span>
                <h2
                  className="mt-4 text-3xl md:text-5xl font-light text-white tracking-tighter"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  Our Journey
                </h2>
              </>
            ) : (
              <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl md:text-4xl">
                OUR <span className="text-coral-500">JOURNEY</span>
              </h2>
            )}
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 ${isDark ? "gap-8" : "gap-6"}`}>
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={
                  isV6
                    ? "rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    : isDark
                    ? "border border-white/[0.06] bg-transparent p-8 transition-all hover:border-white/[0.12] hover:-translate-y-1"
                    : "rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                }
              >
                <span className={`text-2xl font-extrabold ${isV6 ? "text-blue-600" : isDark ? "text-blue-500" : "text-coral-500"}`}>
                  {t.year}
                </span>
                <h3 className={`mt-2 text-base font-bold ${isV6 ? "text-zinc-950" : isDark ? "text-white" : "text-dark-900"}`}>
                  {t.title}
                </h3>
                <p className={`mt-2 text-sm ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-500"}`}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech CTA */}
      <section className={isV6 ? "py-20 bg-white border-t border-zinc-200" : isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className={isV6 ? "text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight" : isDark ? "text-2xl sm:text-3xl font-light text-white tracking-tighter" : "text-2xl font-bold text-dark-900 sm:text-3xl"}
            style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isV6 ? (
              <>CRM for <span className="text-blue-600">Banking & Financial Services</span></>
            ) : isDark ? (
              <>CRM for <span className="text-blue-500">Banking & Financial Services</span></>
            ) : (
              <>CRM for <span className="text-coral-500">Banking & Financial Services</span></>
            )}
          </h2>
          <p className={`mt-4 text-base ${isV6 ? "text-zinc-500" : isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
            Looking for a flexible and customizable CRM solution suited to banking and financial services?
          </p>
          <Link
            href="/solutions/fintech"
            className={
              isV6
                ? "mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-800 hover:shadow-lg"
                : isDark
                ? "mt-8 inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0b1121] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                : "mt-6 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            }
          >
            VIEW FINTECH SOLUTION
            <ArrowRight className={isDark ? "h-3.5 w-3.5" : "h-4 w-4"} />
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
