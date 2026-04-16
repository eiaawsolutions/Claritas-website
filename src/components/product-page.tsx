"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ContentSection {
  title: string;
  body: string;
}

interface ProductPageProps {
  icon: LucideIcon;
  category: string;
  title: string;
  tagline: string;
  description: string;
  sections: ContentSection[];
  color: string;
  bgLight: string;
  textColor: string;
}

export function ProductPage({
  icon: Icon,
  category,
  title,
  tagline,
  description,
  sections,
  bgLight,
  textColor,
}: ProductPageProps) {
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
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgLight} ${textColor}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                {category}
              </span>
            </div>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-lg font-medium italic text-gray-400">
              {tagline}
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href="/contact?demo=true"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              >
                REQUEST A DEMO
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-dark-900 px-7 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
              >
                SEE PRICING
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
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
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark-900">
            Ready to supercharge your{" "}
            <span className="text-coral-500">{category.toLowerCase()}</span>?
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
