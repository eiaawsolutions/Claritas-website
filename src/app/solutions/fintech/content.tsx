"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, TrendingUp, Headphones, Phone, BarChart3 } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const capabilities = [
  {
    title: "Single View of Customer",
    description:
      "Build a complete 360-degree view of your customer in a single integrated platform.",
    href: "/products/marketing",
    icon: Eye,
  },
  {
    title: "Impactful Marketing",
    description:
      "Automate and simplify essential marketing tasks that allow your companies to build effective campaigns and deliver the right message on the right channel at just the right time.",
    href: "/products/marketing",
    icon: Target,
  },
  {
    title: "Sales Opportunities",
    description:
      "Streamline and improve your omni-channel sales process, build a sales pipeline, automate and simplify tasks and analyze sales data to increase sales conversion and enhance sales productivity.",
    href: "/products/sales",
    icon: TrendingUp,
  },
  {
    title: "Service Excellence",
    description:
      "Provide an effortless omnichannel customer experience by delivering value and improving engagement with every interaction.",
    href: "/products/support",
    icon: Headphones,
  },
  {
    title: "Integrated Contact Centre",
    description:
      "Integrate CRM solution with contact centre systems and operations to reduce resolution time and deliver a consistent and personalised customer experience more efficiently.",
    href: "/products/call-center",
    icon: Phone,
  },
  {
    title: "Insightful Metrics",
    description:
      "Turn data into useful information, enabling a snapshot of the customer, marketing, sales and service metrics that matter most to your organization.",
    href: "/solutions/fintech#dashboard",
    icon: BarChart3,
  },
];

const differentiators = [
  "Claritas\u2122 CRM domain knowledge and understanding of the different organizations and operating models enable our consulting services to guide our clients for best practices, instead of just asking the client \u201cwhat are your requirements?\u201d.",
  "Claritas\u2122 CRM solution is constantly evolving with new features and functionality becoming available for the clients on future releases.",
  "Fast time to market with proven track record of implementation and flexibility to adapt to a variety of needs to deliver more value for money.",
  "Established project management, implementation approach and governance methodology to ensure smooth execution of the project and ensure efficient and effective response to unforeseen changes in the implementation.",
];

export function FintechContent() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  if (version === "v9") {
    return (
      <>
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
                <span className="v9-eyebrow">Industry Solution</span>
              </div>
              <h1 className="v9-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#1C1A17]">
                CRM for Banking &amp; <br /><span className="italic font-light text-[#8B6F3E]">Financial Services.</span>
              </h1>
              <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70 max-w-2xl">
                In financial services, the distance between customer expectation and delivery is the market. Claritas&trade; closes that distance — a flexible, fully customisable platform calibrated to the regulatory and operational discipline the industry demands.
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="/contact?demo=true"
                  className="group inline-flex items-center gap-3 bg-[#1C1A17] text-[#F7F1E8] px-8 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#8B6F3E] transition-colors duration-500"
                >
                  Request Private Briefing
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#EDE4D3] py-24">
          <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">The Platform</span>
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1C1A17]">
              What is Claritas&trade; <span className="italic text-[#8B6F3E]">CRM?</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70">
              An integrated, customer-centric platform that manages, tracks, and stores information on every existing customer and new prospect. Claritas&trade; helps financial institutions drive growth by orchestrating technology, data, process, and people &mdash; aligning marketing, sales, and service across every customer touchpoint under regulatory constraint.
            </p>
          </div>
        </section>

        <section className="bg-[#F7F1E8] py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">The Capabilities</span>
                <span className="h-px w-10 bg-[#8B6F3E]" />
              </div>
              <h2 className="v9-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#1C1A17]">
                How Claritas&trade; serves <span className="italic text-[#8B6F3E]">the institution.</span>
              </h2>
            </div>
            <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="v9-serif text-[22px] leading-tight text-[#1C1A17]">{cap.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#1C1A17]/70">{cap.description}</p>
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

        <section className="bg-[#EDE4D3] py-24">
          <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">The Distinction</span>
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1C1A17]">
              What makes Claritas&trade; CRM <span className="italic text-[#8B6F3E]">different.</span>
            </h2>
            <ul className="mt-10 space-y-6">
              {differentiators.map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] leading-[1.7] text-[#1C1A17]/75">
                  <span className="v9-serif italic text-[22px] text-[#8B6F3E] leading-none shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F7F1E8] py-24" id="dashboard">
          <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">Customer Architecture</span>
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1C1A17]">
              A single, 360° view of every <span className="italic text-[#8B6F3E]">client.</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#1C1A17]/70">
              Inadequate knowledge of a customer creates a shortfall at every moment of truth. Claritas&trade; consolidates profiles, product holdings, service subscriptions, open cases, opportunities, service alerts, next best action, and full interaction history into a single platform &mdash; the complete picture, held to fiduciary standards.
            </p>
          </div>
        </section>

        <section className="bg-[#1C1A17] text-[#F7F1E8] py-24 lg:py-32">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#B89968]" />
              <span className="v9-eyebrow text-[#B89968]">By Private Appointment</span>
              <span className="h-px w-12 bg-[#B89968]" />
            </div>
            <h2 className="v9-serif text-[44px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
              Ready to transform your <br /><span className="italic font-light text-[#B89968]">financial services CRM?</span>
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact?demo=true"
                className="group inline-flex items-center gap-3 bg-[#F7F1E8] text-[#1C1A17] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#B89968] transition-colors duration-500"
              >
                Begin Trial
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#F7F1E8]/80 border-b border-[#F7F1E8]/60 pb-0.5 hover:text-[#B89968] hover:border-[#B89968] transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden pt-16 ${isDark ? "bg-[#0b1121]" : "bg-gray-50"}`}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-[#0f1729] to-[#0b1121]" />}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isDark ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isDark ? 0.6 : 0.5 }}
            className="max-w-3xl"
          >
            {isDark ? (
              <div className="flex items-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  Industry Solution
                </span>
              </div>
            ) : (
              <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Industry Solution
              </span>
            )}
            <h1
              className={
                isV5
                  ? "text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                  : "mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl"
              }
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isDark ? (
                <>CRM for <span className="text-blue-500">Banking & Financial Services</span></>
              ) : (
                <>CRM FOR <span className="text-coral-500">BANKING & FINANCIAL SERVICES</span></>
              )}
            </h1>
            <p className={`mt-6 text-base leading-relaxed ${isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
              One of the major challenges in the banking and financial service industry is understanding customers&apos; demands and meeting their expectations in today&apos;s competitive market scenario. This is why CRM solution has become more crucial for the industry than ever before as CRM allows a customer-centric approach to win, grow and retain more customers, serve the customers better, manage a long and good relationship with the customers, understand the customers&apos; expectations and offer personalized solutions that meet the customers&apos; needs.
            </p>
            <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
              If you are looking for a flexible and customizable CRM solution that is suited to specific needs of banking and financial service industry, Claritas&trade; CRM is the right solution to support the requirements of your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?demo=true"
                className={
                  isV5
                    ? "inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0b1121] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                    : "inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
                }
              >
                REQUEST A DEMO
                <ArrowRight className={isDark ? "h-3.5 w-3.5" : "h-4 w-4"} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Claritas CRM */}
      <section className={isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isDark ? "text-2xl sm:text-3xl font-light text-blue-500 tracking-tighter" : "text-2xl font-bold text-coral-500 sm:text-3xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              What is Claritas&trade; CRM?
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
              Claritas&trade; CRM is an integrated and customer centric CRM solution that manages, tracks, and stores information related to your existing customers and new prospects. It helps banks and financial service companies to enhance customer experience and drive business growth to the next level by integrating technology, data, process and people to effectively organize, automate and synchronize marketing, sales and service engagements across all customer contact points.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 Capability Cards */}
      <section className={isDark ? "bg-[#0f1729] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2
              className={isDark ? "text-xl sm:text-2xl font-light text-blue-500 tracking-tighter" : "text-xl font-bold text-coral-500 sm:text-2xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              What does Claritas&trade; CRM do to help banking and financial service companies?
            </h2>
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
                  isV5
                    ? "border border-white/[0.06] bg-transparent p-8 transition-all hover:border-white/[0.12] hover:-translate-y-1"
                    : "group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                }
              >
                {/* Header bar */}
                <div className={isDark ? "bg-blue-500/10 px-4 py-2 text-center" : "rounded-lg bg-coral-500 px-4 py-2 text-center"}>
                  <h3 className={isDark ? "text-sm font-bold text-blue-400" : "text-sm font-bold text-white"}>{cap.title}</h3>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-slate-400 font-light" : "text-gray-500"}`}>
                  {cap.description}
                </p>
                <Link
                  href={cap.href}
                  className={`mt-4 inline-block text-xs font-semibold ${isDark ? "text-blue-500 hover:text-blue-400" : "text-coral-500 hover:text-coral-600"}`}
                >
                  Learn more &gt;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Claritas different */}
      <section className={isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isDark ? "text-xl sm:text-2xl font-light text-white tracking-tighter" : "text-xl font-bold text-dark-900 sm:text-2xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isDark ? (
                <>What makes Claritas&trade; CRM <span className="text-blue-500">different</span>?</>
              ) : (
                <>What makes Claritas&trade; CRM <span className="text-coral-500">different</span>?</>
              )}
            </h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isDark ? "bg-blue-500" : "bg-dark-900"}`} />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 360-degree view */}
      <section className={isDark ? "bg-[#0f1729] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"} id="dashboard">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isDark ? "text-xl sm:text-2xl font-light text-blue-500 uppercase tracking-tighter" : "text-xl font-bold text-coral-500 uppercase sm:text-2xl"}
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              Claritas&trade; CRM for Single 360-Degree View of Customer
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
              Inadequate knowledge about a customer&apos;s information creates a shortfall when trying to serve the customer or close a deal. Claritas&trade; CRM enables a complete picture of every customer by integrating and consolidating all the key data that your organization holds on them in a single integrated CRM platform &ndash; creating a rich single 360-degree view of your customers&apos; profiles, product holdings, service subscriptions, open cases and opportunities, potential offers, service alerts, next best action (NBA) and interaction history, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={isDark ? "py-24 sm:py-32 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className={isDark ? "text-3xl md:text-5xl font-light text-white tracking-tighter" : "text-3xl font-extrabold text-dark-900"}
            style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isDark ? (
              <>Ready to transform your <span className="text-blue-500">financial services CRM</span>?</>
            ) : (
              <>Ready to transform your{" "}<span className="text-coral-500">financial services CRM</span>?</>
            )}
          </h2>
          <p className={`mt-4 text-base ${isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
            Get started with a free 14-day trial. No credit card required.
          </p>
          <div className={`mt-8 flex flex-col items-center justify-center sm:flex-row ${isDark ? "gap-6" : "gap-3"}`}>
            <Link
              href="/contact?demo=true"
              className={
                isV5
                  ? "inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0b1121] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                  : "inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              }
            >
              START FREE TRIAL
              <ArrowRight className={isDark ? "h-3.5 w-3.5" : "h-4 w-4"} />
            </Link>
            <Link
              href="/contact"
              className={
                isV5
                  ? "inline-flex items-center gap-2 px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#0b1121] transition-all duration-500"
                  : "inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
              }
            >
              CONTACT SALES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
