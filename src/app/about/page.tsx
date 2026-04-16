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
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              About Us
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Empowering businesses with{" "}
              <span className="text-coral-500">smarter CRM</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              Claritas&trade; is a registered trademark of Netster &mdash; a Malaysian
              technology company dedicated to building enterprise-grade customer
              relationship management solutions for the APAC market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Claritas CRM */}
      <section className="py-16 sm:py-20" id="what-is-crm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-coral-500 sm:text-3xl">
              What is Claritas&trade; CRM?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Claritas&trade; CRM is an integrated and customer centric CRM solution that manages, tracks, and stores information related to your existing customers and new prospects. It helps companies to enhance customer experience and drive business growth to the next level by integrating technology, data, process and people to effectively organize, automate and synchronize marketing, sales and service engagements across all customer contact points.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 Capability Cards */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl">
              WHAT <span className="text-coral-500">CLARITAS&trade; CRM</span> CAN DO
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="rounded-lg bg-coral-500 px-4 py-2 text-center">
                  <h3 className="text-sm font-bold text-white">{cap.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {cap.description}
                </p>
                <Link
                  href={cap.href}
                  className="mt-4 inline-block text-xs font-semibold text-coral-500 hover:text-coral-600"
                >
                  Learn more &gt;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes different */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-dark-900 sm:text-2xl">
              What makes Claritas&trade; CRM <span className="text-coral-500">different</span>?
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Claritas\u2122 CRM domain knowledge and understanding of the different organizations and operating models enable our consulting services to guide our clients for best practices, instead of just asking the client \u201cwhat are your requirements?\u201d.",
                "Claritas\u2122 CRM solution is constantly evolving with new features and functionality becoming available for the clients on future releases.",
                "Fast time to market with proven track record of implementation and flexibility to adapt to a variety of needs to deliver more value for money.",
                "Established project management, implementation approach and governance methodology to ensure smooth execution of the project and ensure efficient and effective response to unforeseen changes in the implementation.",
              ].map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-900" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 360 View */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-coral-500 uppercase sm:text-2xl">
              Single 360-Degree View of Customer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Inadequate knowledge about a customer&apos;s information creates a shortfall when trying to serve the customer or close a deal. Claritas&trade; CRM enables a complete picture of every customer by integrating and consolidating all the key data that your organization holds on them in a single integrated CRM platform &ndash; creating a rich single 360-degree view of your customers&apos; profiles, product holdings, service subscriptions, open cases and opportunities, potential offers, service alerts, next best action (NBA) and interaction history, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl md:text-4xl">
              WHAT <span className="text-coral-500">DRIVES</span> US
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral-50 text-coral-500">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-dark-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 sm:py-20" id="case-studies">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl md:text-4xl">
              OUR <span className="text-coral-500">JOURNEY</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <span className="text-2xl font-extrabold text-coral-500">
                  {t.year}
                </span>
                <h3 className="mt-2 text-base font-bold text-dark-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl">
            CRM for <span className="text-coral-500">Banking & Financial Services</span>
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Looking for a flexible and customizable CRM solution suited to banking and financial services?
          </p>
          <Link
            href="/solutions/fintech"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
          >
            VIEW FINTECH SOLUTION
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
