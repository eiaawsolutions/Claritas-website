"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, ArrowRight } from "lucide-react";

const dashboardFeatures = [
  "Automates a significant proportion of the Day-to-Day Management KPI reporting",
  "New Self-Service Visibility to critical metrics across the entire Contact Centre Operations",
  "Quickly spot Performance & Productivity gaps",
  "Monitor Customer Activity and allocate Staff Resources more effectively",
  "Proactively Manage your Contact Centre",
  "Make Decisions in Real-Time",
];

const sections = [
  {
    title: "Historical Analysis",
    body: "Comprehensive Historical reporting is fully automated behind the scenes and made available centrally to everyone in a suite of Performance and Productivity Dashboards every half hour. These provide managers with vital KPI snapshots of their department\u2019s Intra-Day, Daily, Weekly, Monthly and Year to Date. Our exception reporting gives managers strong visual indicators of non-compliance or where action is required. Lapses and root cause can be observed and fully understood in a couple of clicks, without any human reporting effort. Historical results can be accessed painlessly using the available on-screen Date Controls.",
  },
  {
    title: "Channel Insights: Performance and Productivity",
    body: "With your essential KPI reporting being fully automated every day, you can painlessly access critical Contact Centre metrics yourself 24x7, and monitor adherence to Daily, Weekly, and Monthly Performance & Productivity Service Levels Agreement (SLAs). With an intuitive Point and Click design, you can select and filter different Departments and Channels, chose between Graphical and Classical Report styles. Being fully integrated, with a single click you can quickly identify the root cause of any Performance or Productivity issues.",
  },
  {
    title: "Management Dashboard Visibility",
    body: "Our reporting such as Live Performance, Productivity, Staff Status & Comprehensive Historical KPI reporting, are flexible to be configured at real-time, by Day/Week/Month & Year to Date. Management information is organized in a user-friendly manner, and can be accessed according to role, from top level down to the very granular e.g. By Agent by Half Hour by individual Skill.",
  },
];

export function DashboardContent() {
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
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                <BarChart3 className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Analytics
              </span>
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl">
              CLARITAS&trade; CRM <span className="text-coral-500">DASHBOARD AND REPORTS</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              Our reporting such as Live Performance, Productivity, Staff Status & Comprehensive Historical KPI reporting, are flexible to be configured at real-time, by Day/Week/Month & Year to Date.
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

      {/* Key capabilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-dark-900 sm:text-2xl">
              KEY <span className="text-coral-500">CAPABILITIES</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {dashboardFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <h3 className="flex items-start gap-2 text-lg font-bold text-dark-900">
                  <span className="mt-0.5 text-coral-500">&#9658;</span>
                  {section.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark-900">
            Ready for <span className="text-coral-500">real-time insights</span>?
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
