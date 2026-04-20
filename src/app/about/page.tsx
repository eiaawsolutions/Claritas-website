"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/contact-section";
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
  { year: "2008", title: "Founded", desc: "Claritas CRM launched by Netster with a vision to bring enterprise-grade CRM to APAC businesses." },
  { year: "2010", title: "MSC Approved", desc: "Received MSC (Multimedia Super Corridor) product approval from the Malaysian government." },
  { year: "2012", title: "Azure Partnership", desc: "Became a Microsoft Azure partner, bringing cloud-first CRM to the region." },
  { year: "2016", title: "Enterprise Expansion", desc: "Expanded to serve major enterprises including SingTel, Pfizer, and Nando\u2019s." },
  { year: "2020", title: "Cloud-First Pivot", desc: "Full cloud-native architecture on Azure with hybrid deployment options." },
  { year: "2026", title: "Next Generation", desc: "AI-powered features, modern UX, and deeper integrations for the next era of CRM." },
];

const values = [
  { icon: Users, title: "Customer First", desc: "Every feature we build starts with the question: does this help our customers serve their customers better?" },
  { icon: Globe, title: "Built for APAC", desc: "We understand the unique needs of businesses in Malaysia, Singapore, and the broader APAC region." },
  { icon: Shield, title: "Security & Trust", desc: "Enterprise-grade security, data protection compliance, and transparent practices are non-negotiable." },
  { icon: Award, title: "Continuous Innovation", desc: "We ship improvements every sprint, driven by customer feedback and market intelligence." },
];

const capabilities = [
  { title: "Single View of Customer", description: "Build a complete 360-degree view of your customer in a single integrated platform.", icon: Eye, href: "/products/marketing" },
  { title: "Impactful Marketing", description: "Automate and simplify essential marketing tasks to build effective campaigns and deliver the right message at the right time.", icon: Target, href: "/products/marketing" },
  { title: "Sales Opportunities", description: "Streamline your omni-channel sales process, build a sales pipeline, and analyze sales data to increase conversion.", icon: TrendingUp, href: "/products/sales" },
  { title: "Service Excellence", description: "Provide an effortless omnichannel customer experience by delivering value with every interaction.", icon: Headphones, href: "/products/support" },
  { title: "Integrated Contact Centre", description: "Integrate CRM with contact centre systems to reduce resolution time and deliver consistent customer experience.", icon: Phone, href: "/products/call-center" },
  { title: "Insightful Metrics", description: "Turn data into useful information with a snapshot of customer, marketing, sales and service metrics.", icon: BarChart3, href: "/products/call-center" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative cl-gradient-hero pt-32 pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#721011]" />
              <span className="cl-eyebrow">Our Charter</span>
            </div>
            <h1 className="cl-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f]">
              Empowering businesses with
              <br />
              <span className="italic font-light text-[#721011]">smarter CRM.</span>
            </h1>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-2xl">
              Claritas&trade; is a registered trademark of Netster &mdash; a Malaysian technology company dedicated to building enterprise-grade customer relationship management solutions for the APAC market.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">Our Definition</span>
            </div>
            <h2 className="cl-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
              What is Claritas&trade; <span className="italic text-[#721011]">CRM?</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70">
              Claritas&trade; CRM is an integrated and customer-centric solution that manages, tracks, and stores information related to existing customers and new prospects. It helps organisations enhance customer experience and drive measurable growth by integrating technology, data, process and people to orchestrate marketing, sales, and service engagements across every touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">The Capabilities</span>
              <span className="h-px w-10 bg-[#721011]" />
            </div>
            <h2 className="cl-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
              What Claritas&trade; <span className="italic text-[#721011]">CRM can do.</span>
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
                className="bg-[#fafafa] p-8 lg:p-10 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20 mb-6">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="cl-serif text-[22px] md:text-[24px] leading-tight tracking-[-0.01em] text-[#3f3f3f]">
                  {cap.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#3f3f3f]/70">
                  {cap.description}
                </p>
                <Link
                  href={cap.href}
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-0.5 hover:text-[#721011] hover:border-[#721011] transition-colors"
                >
                  Further Reading
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">The Distinction</span>
            </div>
            <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#3f3f3f]">
              What makes Claritas&trade; CRM <span className="italic text-[#721011]">different.</span>
            </h2>
            <ul className="mt-10 space-y-6">
              {[
                "Claritas\u2122 CRM domain knowledge and our consulting services guide clients toward best practices, rather than simply executing against a requirements document.",
                "The Claritas\u2122 CRM solution is continuously evolving, with new features and functionality released to clients as part of the product roadmap.",
                "Rapid time to market, a proven track record of implementation, and the adaptability to deliver more value for each ringgit invested.",
                "Established project management, implementation methodology, and governance to ensure the engagement runs smoothly and responds efficiently to change.",
              ].map((d, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] leading-[1.7] text-[#3f3f3f]/75">
                  <span className="cl-serif italic text-[22px] text-[#721011] leading-none shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">Architecture</span>
            </div>
            <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#3f3f3f]">
              A single, 360° view of every <span className="italic text-[#721011]">customer.</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70">
              Inadequate knowledge about a customer creates a shortfall when serving them or closing a deal. Claritas&trade; CRM assembles a complete picture of every customer by consolidating all key data your organisation holds &ndash; profiles, product holdings, service subscriptions, open cases, opportunities, potential offers, service alerts, next best action, and the full interaction history &ndash; into one integrated platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">Our Values</span>
              <span className="h-px w-10 bg-[#721011]" />
            </div>
            <h2 className="cl-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
              What drives <span className="italic text-[#721011]">us.</span>
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
                className="bg-white p-8 text-center border border-[#3f3f3f]/[0.06]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 cl-serif text-[20px] leading-tight text-[#3f3f3f]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#3f3f3f]/65">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32" id="case-studies">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">Our Journey</span>
              <span className="h-px w-10 bg-[#721011]" />
            </div>
            <h2 className="cl-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
              Eighteen years of <span className="italic text-[#721011]">quiet conviction.</span>
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
                className="bg-[#fafafa] p-8 border border-[#3f3f3f]/[0.06]"
              >
                <span className="cl-serif italic text-[40px] leading-none text-[#721011]">
                  {t.year}
                </span>
                <h3 className="mt-4 cl-serif text-[20px] leading-tight text-[#3f3f3f]">
                  {t.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#3f3f3f]/65">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cl-gradient-dark text-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#d4696a]" />
            <span className="cl-eyebrow text-[#d4696a]">Specialist Solution</span>
            <span className="h-px w-12 bg-[#d4696a]" />
          </div>
          <h2 className="cl-serif text-[44px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
            CRM for Banking &amp; <span className="italic font-light text-[#d4696a]">Financial Services.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-[17px] leading-[1.7] text-white/70">
            A flexible, fully customisable CRM suited to the regulatory and operational demands of banking and financial services.
          </p>
          <Link
            href="/solutions/fintech"
            className="mt-12 inline-flex items-center gap-3 bg-white text-[#3f3f3f] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] hover:text-white transition-colors duration-500 group"
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
