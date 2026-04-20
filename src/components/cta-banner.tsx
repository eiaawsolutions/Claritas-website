"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-white py-28 lg:py-36 relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/v9/cta-backdrop.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white" />
        <div className="absolute inset-0 cl-gradient-accent-sweep" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-14 bg-[#721011]" />
            <span className="cl-eyebrow">By Private Appointment</span>
            <span className="h-px w-14 bg-[#721011]" />
          </div>

          <h2 className="cl-serif text-[48px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.025em] text-[#3f3f3f]">
            We accept a limited
            <br />
            <span className="italic font-light text-[#721011]">number of engagements.</span>
          </h2>

          <p className="mt-10 max-w-xl mx-auto text-[17px] leading-[1.75] text-[#3f3f3f]/70">
            A private briefing is the first step — conducted by a senior member of our team, tailored to your mandate, and bound by mutual confidence.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact?demo=true"
              className="group inline-flex items-center gap-3 bg-[#3f3f3f] text-white px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] transition-colors duration-500"
            >
              Request Private Briefing
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-0.5 hover:text-[#721011] hover:border-[#721011] transition-colors"
            >
              Review Terms of Engagement
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
