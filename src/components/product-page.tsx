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
  color?: string;
  bgLight?: string;
  textColor?: string;
}

export function ProductPage({
  icon: Icon,
  category,
  title,
  tagline,
  description,
  sections,
}: ProductPageProps) {
  return (
    <>
      <section className="relative cl-gradient-hero text-[#3f3f3f] pt-32 pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#721011]/30 bg-[#721011]/10 text-[#721011]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="cl-eyebrow">{category}</div>
              </div>
            </div>

            <h1 className="cl-serif text-[48px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.025em] text-[#3f3f3f] max-w-4xl">
              {title}
            </h1>

            <p className="mt-8 cl-serif italic text-[22px] md:text-[26px] leading-[1.4] text-[#721011] max-w-2xl">
              {tagline}
            </p>

            <p className="mt-6 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-2xl">
              {description}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/contact?demo=true"
                className="group inline-flex items-center gap-3 bg-[#3f3f3f] text-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] transition-colors duration-500"
              >
                Request Private Briefing
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-0.5 hover:text-[#721011] hover:border-[#721011] transition-colors"
              >
                Review Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">The Specification</span>
              <span className="h-px w-10 bg-[#721011]" />
            </div>
            <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
              What distinguishes the <span className="italic text-[#721011]">{title.toLowerCase()}</span> module.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white p-8 lg:p-10 border border-[#3f3f3f]/[0.06]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="cl-serif italic text-[28px] text-[#721011] leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[#3f3f3f]/10" />
                </div>
                <h3 className="cl-serif text-[22px] md:text-[26px] leading-tight tracking-[-0.01em] text-[#3f3f3f]">
                  {section.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#3f3f3f]/70">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
