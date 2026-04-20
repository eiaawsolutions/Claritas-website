"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SubpageShellProps {
  badge: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  children: React.ReactNode;
}

export function SubpageShell({
  badge,
  title,
  subtitle,
  description,
  ctaTitle,
  ctaDescription,
  ctaPrimary,
  ctaSecondary,
  children,
}: SubpageShellProps) {
  return (
    <>
      <section className="relative cl-gradient-hero text-[#3f3f3f] pt-32 pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#721011]" />
              <span className="cl-eyebrow">{badge}</span>
            </div>
            <h1 className="cl-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-8 cl-serif italic text-[22px] md:text-[26px] leading-[1.4] text-[#721011] max-w-2xl">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-6 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">{children}</div>
      </section>

      {ctaTitle && (
        <section className="cl-gradient-dark text-white py-24 lg:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, #721011 0%, transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#d4696a]" />
              <span className="cl-eyebrow text-[#d4696a]">By Private Appointment</span>
              <span className="h-px w-12 bg-[#d4696a]" />
            </div>
            <h2 className="cl-serif text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
              {ctaTitle}
            </h2>
            {ctaDescription && (
              <p className="mt-8 max-w-xl mx-auto text-[17px] leading-[1.7] text-white/70">{ctaDescription}</p>
            )}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="group inline-flex items-center gap-3 bg-white text-[#3f3f3f] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] hover:text-white transition-colors duration-500"
                >
                  {ctaPrimary.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="text-[12px] uppercase tracking-[0.24em] font-semibold text-white/80 border-b border-white/60 pb-0.5 hover:text-[#d4696a] hover:border-[#d4696a] transition-colors"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function ContentCard({
  number,
  title,
  children,
}: {
  number?: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group cl-gradient-card p-8 lg:p-10 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge">
      {number != null && (
        <div className="flex items-center gap-4 mb-6">
          <span className="cl-serif italic text-[28px] text-[#721011] leading-none">
            {String(number).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-[#3f3f3f]/10" />
        </div>
      )}
      <h3 className="cl-serif text-[24px] md:text-[28px] leading-tight tracking-[-0.01em] text-[#3f3f3f]">
        {title}
      </h3>
      <div className="mt-5 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{children}</div>
    </div>
  );
}

export function SectionHeading({
  badge,
  title,
}: {
  badge?: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      {badge && (
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-10 bg-[#721011]" />
          <span className="cl-eyebrow">{badge}</span>
          <span className="h-px w-10 bg-[#721011]" />
        </div>
      )}
      <h2 className="cl-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
        {title}
      </h2>
    </motion.div>
  );
}
