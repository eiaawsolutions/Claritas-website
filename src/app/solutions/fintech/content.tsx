"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, TrendingUp, Headphones, Phone, BarChart3 } from "lucide-react";

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
              Industry Solution
            </span>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl">
              CRM FOR <span className="text-coral-500">BANKING & FINANCIAL SERVICES</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              One of the major challenges in the banking and financial service industry is understanding customers&apos; demands and meeting their expectations in today&apos;s competitive market scenario. This is why CRM solution has become more crucial for the industry than ever before as CRM allows a customer-centric approach to win, grow and retain more customers, serve the customers better, manage a long and good relationship with the customers, understand the customers&apos; expectations and offer personalized solutions that meet the customers&apos; needs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              If you are looking for a flexible and customizable CRM solution that is suited to specific needs of banking and financial service industry, Claritas&trade; CRM is the right solution to support the requirements of your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?demo=true"
                className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              >
                REQUEST A DEMO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Claritas CRM */}
      <section className="py-16 sm:py-20">
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
              Claritas&trade; CRM is an integrated and customer centric CRM solution that manages, tracks, and stores information related to your existing customers and new prospects. It helps banks and financial service companies to enhance customer experience and drive business growth to the next level by integrating technology, data, process and people to effectively organize, automate and synchronize marketing, sales and service engagements across all customer contact points.
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
            className="mb-10"
          >
            <h2 className="text-xl font-bold text-coral-500 sm:text-2xl">
              What does Claritas&trade; CRM do to help banking and financial service companies?
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
                {/* Red header bar */}
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

      {/* What makes Claritas different */}
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
              {differentiators.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-900" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 360-degree view */}
      <section className="bg-gray-50 py-16 sm:py-20" id="dashboard">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-coral-500 uppercase sm:text-2xl">
              Claritas&trade; CRM for Single 360-Degree View of Customer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Inadequate knowledge about a customer&apos;s information creates a shortfall when trying to serve the customer or close a deal. Claritas&trade; CRM enables a complete picture of every customer by integrating and consolidating all the key data that your organization holds on them in a single integrated CRM platform &ndash; creating a rich single 360-degree view of your customers&apos; profiles, product holdings, service subscriptions, open cases and opportunities, potential offers, service alerts, next best action (NBA) and interaction history, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark-900">
            Ready to transform your{" "}
            <span className="text-coral-500">financial services CRM</span>?
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
