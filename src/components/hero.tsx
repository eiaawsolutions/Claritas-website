"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16" style={{ background: "#f5f3ee" }}>
      {/* Subtle decorative shapes matching the design */}
      <div className="absolute right-0 top-16 h-64 w-64 rounded-full opacity-30" style={{ background: "#e8dcc8" }} />
      <div className="absolute -right-8 bottom-0 hidden lg:block">
        {/* Decorative arrows / leaves */}
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none" className="opacity-20">
          <path d="M30 0 L30 40 M20 30 L30 40 L40 30" stroke="#9ca3af" strokeWidth="2" />
          <path d="M30 50 L30 90 M20 80 L30 90 L40 80" stroke="#9ca3af" strokeWidth="2" />
          <path d="M30 100 L30 120" stroke="#9ca3af" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block rounded-full px-5 py-2 text-sm font-semibold text-dark-900 tracking-wide"
              style={{ background: "#e8c84b" }}
            >
              Pioneering CRM innovation
            </span>

            <h1 className="mt-6 text-2xl font-extrabold leading-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.15] uppercase tracking-tight">
              Better Sales
              <br />
              With Effective Marketing,
              <br />
              Start With ClaritasCRM
            </h1>

            <p className="mt-5 max-w-md text-base text-gray-500 leading-relaxed italic">
              Manage your relationship with customer from all aspects
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              >
                REACH US
              </Link>
              <Link
                href="/contact?demo=true"
                className="rounded-lg border border-coral-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-coral-400 transition-all hover:bg-coral-50"
              >
                VIEW DEMO
              </Link>
            </div>
          </motion.div>

          {/* Right — Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 0 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              x: { duration: 0.5, delay: 0.2 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative flex items-center justify-center"
          >
            <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100">
              <Image
                src="/hero-crm.png"
                alt="CRM Analytics Dashboard — two professionals analyzing business data, charts and graphs"
                width={560}
                height={340}
                className="w-full max-w-lg h-auto object-contain rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
