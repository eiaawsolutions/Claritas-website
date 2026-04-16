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

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden pt-16 ${isV5 ? "bg-[#050b1a]" : "bg-gray-50"}`}>
        {isV5 && <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0a1428] to-[#050b1a]" />}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isV5 ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isV5 ? 0.6 : 0.5 }}
            className="max-w-3xl"
          >
            {isV5 ? (
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
              style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV5 ? (
                <>CRM for <span className="text-blue-500">Banking & Financial Services</span></>
              ) : (
                <>CRM FOR <span className="text-coral-500">BANKING & FINANCIAL SERVICES</span></>
              )}
            </h1>
            <p className={`mt-6 text-base leading-relaxed ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
              One of the major challenges in the banking and financial service industry is understanding customers&apos; demands and meeting their expectations in today&apos;s competitive market scenario. This is why CRM solution has become more crucial for the industry than ever before as CRM allows a customer-centric approach to win, grow and retain more customers, serve the customers better, manage a long and good relationship with the customers, understand the customers&apos; expectations and offer personalized solutions that meet the customers&apos; needs.
            </p>
            <p className={`mt-4 text-base leading-relaxed ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
              If you are looking for a flexible and customizable CRM solution that is suited to specific needs of banking and financial service industry, Claritas&trade; CRM is the right solution to support the requirements of your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?demo=true"
                className={
                  isV5
                    ? "inline-flex items-center gap-3 px-12 py-5 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                    : "inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
                }
              >
                REQUEST A DEMO
                <ArrowRight className={isV5 ? "h-3.5 w-3.5" : "h-4 w-4"} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Claritas CRM */}
      <section className={isV5 ? "py-24 sm:py-32 bg-[#050b1a]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isV5 ? "text-2xl sm:text-3xl font-light text-blue-500 tracking-tighter" : "text-2xl font-bold text-coral-500 sm:text-3xl"}
              style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              What is Claritas&trade; CRM?
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-600"}`}>
              Claritas&trade; CRM is an integrated and customer centric CRM solution that manages, tracks, and stores information related to your existing customers and new prospects. It helps banks and financial service companies to enhance customer experience and drive business growth to the next level by integrating technology, data, process and people to effectively organize, automate and synchronize marketing, sales and service engagements across all customer contact points.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 Capability Cards */}
      <section className={isV5 ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2
              className={isV5 ? "text-xl sm:text-2xl font-light text-blue-500 tracking-tighter" : "text-xl font-bold text-coral-500 sm:text-2xl"}
              style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              What does Claritas&trade; CRM do to help banking and financial service companies?
            </h2>
          </motion.div>

          <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isV5 ? "gap-8" : ""}`}>
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
                <div className={isV5 ? "bg-blue-500/10 px-4 py-2 text-center" : "rounded-lg bg-coral-500 px-4 py-2 text-center"}>
                  <h3 className={isV5 ? "text-sm font-bold text-blue-400" : "text-sm font-bold text-white"}>{cap.title}</h3>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-500"}`}>
                  {cap.description}
                </p>
                <Link
                  href={cap.href}
                  className={`mt-4 inline-block text-xs font-semibold ${isV5 ? "text-blue-500 hover:text-blue-400" : "text-coral-500 hover:text-coral-600"}`}
                >
                  Learn more &gt;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Claritas different */}
      <section className={isV5 ? "py-24 sm:py-32 bg-[#050b1a]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isV5 ? "text-xl sm:text-2xl font-light text-white tracking-tighter" : "text-xl font-bold text-dark-900 sm:text-2xl"}
              style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV5 ? (
                <>What makes Claritas&trade; CRM <span className="text-blue-500">different</span>?</>
              ) : (
                <>What makes Claritas&trade; CRM <span className="text-coral-500">different</span>?</>
              )}
            </h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isV5 ? "bg-blue-500" : "bg-dark-900"}`} />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 360-degree view */}
      <section className={isV5 ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"} id="dashboard">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={isV5 ? "text-xl sm:text-2xl font-light text-blue-500 uppercase tracking-tighter" : "text-xl font-bold text-coral-500 uppercase sm:text-2xl"}
              style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              Claritas&trade; CRM for Single 360-Degree View of Customer
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-600"}`}>
              Inadequate knowledge about a customer&apos;s information creates a shortfall when trying to serve the customer or close a deal. Claritas&trade; CRM enables a complete picture of every customer by integrating and consolidating all the key data that your organization holds on them in a single integrated CRM platform &ndash; creating a rich single 360-degree view of your customers&apos; profiles, product holdings, service subscriptions, open cases and opportunities, potential offers, service alerts, next best action (NBA) and interaction history, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={isV5 ? "py-24 sm:py-32 bg-[#050b1a]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className={isV5 ? "text-3xl md:text-5xl font-light text-white tracking-tighter" : "text-3xl font-extrabold text-dark-900"}
            style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isV5 ? (
              <>Ready to transform your <span className="text-blue-500">financial services CRM</span>?</>
            ) : (
              <>Ready to transform your{" "}<span className="text-coral-500">financial services CRM</span>?</>
            )}
          </h2>
          <p className={`mt-4 text-base ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
            Get started with a free 14-day trial. No credit card required.
          </p>
          <div className={`mt-8 flex flex-col items-center justify-center sm:flex-row ${isV5 ? "gap-6" : "gap-3"}`}>
            <Link
              href="/contact?demo=true"
              className={
                isV5
                  ? "inline-flex items-center gap-3 px-12 py-5 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                  : "inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              }
            >
              START FREE TRIAL
              <ArrowRight className={isV5 ? "h-3.5 w-3.5" : "h-4 w-4"} />
            </Link>
            <Link
              href="/contact"
              className={
                isV5
                  ? "inline-flex items-center gap-2 px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#050b1a] transition-all duration-500"
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
