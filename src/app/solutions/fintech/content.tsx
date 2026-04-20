"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, TrendingUp, Headphones, Phone, BarChart3 } from "lucide-react";

const capabilities = [
  { title: "Single View of Customer", description: "Build a complete 360-degree view of your customer in a single integrated platform.", href: "/products/marketing", icon: Eye },
  { title: "Impactful Marketing", description: "Automate and simplify essential marketing tasks that allow your companies to build effective campaigns and deliver the right message on the right channel at just the right time.", href: "/products/marketing", icon: Target },
  { title: "Sales Opportunities", description: "Streamline and improve your omni-channel sales process, build a sales pipeline, automate and simplify tasks and analyze sales data to increase sales conversion and enhance sales productivity.", href: "/products/sales", icon: TrendingUp },
  { title: "Service Excellence", description: "Provide an effortless omnichannel customer experience by delivering value and improving engagement with every interaction.", href: "/products/support", icon: Headphones },
  { title: "Integrated Contact Centre", description: "Integrate CRM solution with contact centre systems and operations to reduce resolution time and deliver a consistent and personalised customer experience more efficiently.", href: "/products/call-center", icon: Phone },
  { title: "Insightful Metrics", description: "Turn data into useful information, enabling a snapshot of the customer, marketing, sales and service metrics that matter most to your organization.", href: "/solutions/fintech#dashboard", icon: BarChart3 },
];

const differentiators = [
  "Claritas\u2122 CRM domain knowledge and understanding of the different organizations and operating models enable our consulting services to guide our clients for best practices, instead of just asking the client \u201cwhat are your requirements?\u201d.",
  "Claritas\u2122 CRM solution is constantly evolving with new features and functionality becoming available for the clients on future releases.",
  "Fast time to market with proven track record of implementation and flexibility to adapt to a variety of needs to deliver more value for money.",
  "Established project management, implementation approach and governance methodology to ensure smooth execution of the project and ensure efficient and effective response to unforeseen changes in the implementation.",
];

export function FintechContent() {
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
              <span className="cl-eyebrow">Industry Solution</span>
            </div>
            <h1 className="cl-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f]">
              CRM for Banking &amp; <br /><span className="italic font-light text-[#721011]">Financial Services.</span>
            </h1>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-2xl">
              In financial services, the distance between customer expectation and delivery is the market. Claritas&trade; closes that distance — a flexible, fully customisable platform calibrated to the regulatory and operational discipline the industry demands.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact?demo=true"
                className="group inline-flex items-center gap-3 bg-[#3f3f3f] text-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] transition-colors duration-500"
              >
                Request Private Briefing
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">The Platform</span>
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#3f3f3f]">
            What is Claritas&trade; <span className="italic text-[#721011]">CRM?</span>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70">
            An integrated, customer-centric platform that manages, tracks, and stores information on every existing customer and new prospect. Claritas&trade; helps financial institutions drive growth by orchestrating technology, data, process, and people &mdash; aligning marketing, sales, and service across every customer touchpoint under regulatory constraint.
          </p>
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
            <h2 className="cl-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
              How Claritas&trade; serves <span className="italic text-[#721011]">the institution.</span>
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
                className="bg-[#fafafa] p-8 lg:p-10 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20 mb-6">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="cl-serif text-[22px] leading-tight text-[#3f3f3f]">{cap.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{cap.description}</p>
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
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">The Distinction</span>
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#3f3f3f]">
            What makes Claritas&trade; CRM <span className="italic text-[#721011]">different.</span>
          </h2>
          <ul className="mt-10 space-y-6">
            {differentiators.map((d, i) => (
              <li key={i} className="flex items-start gap-4 text-[16px] leading-[1.7] text-[#3f3f3f]/75">
                <span className="cl-serif italic text-[22px] text-[#721011] leading-none shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24" id="dashboard">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">Customer Architecture</span>
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#3f3f3f]">
            A single, 360° view of every <span className="italic text-[#721011]">client.</span>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70">
            Inadequate knowledge of a customer creates a shortfall at every moment of truth. Claritas&trade; consolidates profiles, product holdings, service subscriptions, open cases, opportunities, service alerts, next best action, and full interaction history into a single platform &mdash; the complete picture, held to fiduciary standards.
          </p>
        </div>
      </section>

      <section className="cl-gradient-dark text-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#d4696a]" />
            <span className="cl-eyebrow text-[#d4696a]">By Private Appointment</span>
            <span className="h-px w-12 bg-[#d4696a]" />
          </div>
          <h2 className="cl-serif text-[44px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
            Ready to transform your <br /><span className="italic font-light text-[#d4696a]">financial services CRM?</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact?demo=true"
              className="group inline-flex items-center gap-3 bg-white text-[#3f3f3f] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] hover:text-white transition-colors duration-500"
            >
              Begin Trial
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="text-[12px] uppercase tracking-[0.24em] font-semibold text-white/80 border-b border-white/60 pb-0.5 hover:text-[#d4696a] hover:border-[#d4696a] transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
