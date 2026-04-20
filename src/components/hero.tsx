"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "12", label: "Industries Served" },
  { value: "15", label: "Countries" },
];

export function Hero() {
  const heroPhoto = "/v9/hero-executive.jpg";

  return (
    <section className="relative pt-28 cl-gradient-hero text-[#3f3f3f] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10 pb-16 lg:pb-20"
        >
          {/* LEFT — Copy column */}
          <div className="lg:col-span-6 lg:pr-4">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow">Enterprise CRM · Est. 2008</span>
            </div>

            <h1 className="cl-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f]">
              Built for leaders
              <br />
              <span className="italic font-light text-[#721011]">
                who measure
              </span>
              <br />
              in decades.
            </h1>

            <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-[#3f3f3f]/70">
              Claritas unifies marketing, sales, and service operations into a single instrument of record — trusted across Asia-Pacific by the organisations that set their industry&apos;s standard.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact?demo=true"
                className="group inline-flex items-center gap-3 bg-[#3f3f3f] text-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] transition-colors duration-500"
              >
                Request Private Briefing
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/claritas/framework"
                className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-0.5 hover:text-[#721011] hover:border-[#721011] transition-colors"
              >
                Our Framework
              </Link>
            </div>

            <div className="mt-14 pt-8 border-t border-[#3f3f3f]/10 grid grid-cols-3 gap-6 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="cl-serif text-[32px] font-semibold text-[#3f3f3f] leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#3f3f3f]/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Editorial photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[5/6] cl-paper-edge overflow-hidden">
              <Image
                src={heroPhoto}
                alt="Executive leadership meeting"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#3f3f3f]/30 pointer-events-none" />
              <div className="absolute inset-0 bg-[#721011]/[0.06] mix-blend-multiply pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -bottom-8 -left-4 lg:-left-12 bg-white border border-[#3f3f3f]/10 p-6 pr-10 max-w-[280px] cl-paper-edge"
            >
              <div className="cl-eyebrow mb-3">Plate N° I</div>
              <p className="cl-serif italic text-[15px] leading-snug text-[#3f3f3f]/85">
                &ldquo;An instrument designed for those who view customer relationships as a multi-generational asset.&rdquo;
              </p>
              <div className="mt-4 h-px cl-rule-crimson opacity-50" />
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[#721011] font-semibold">
                — From the Claritas Charter
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="h-px cl-rule-crimson opacity-50" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-14">
          <div className="cl-eyebrow shrink-0">Entrusted By</div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {["FGV HOLDINGS", "SINGTEL", "NANDO'S", "ESTATE 123", "INTEL", "PFIZER", "VISTAGE"].map((name) => (
              <span
                key={name}
                className="cl-serif text-[13px] tracking-[0.22em] text-[#3f3f3f]/45 hover:text-[#721011] transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
