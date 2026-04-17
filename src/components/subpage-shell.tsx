"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

/**
 * Shared subpage shell that wraps content pages with version-aware styling.
 * Handles hero section, content wrapper, and CTA section for all design versions.
 */

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
  const { version } = useDesignVersion();

  if (version === "v9") {
    return (
      <>
        <section className="relative bg-[#F7F1E8] text-[#1C1A17] pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">{badge}</span>
              </div>
              <h1 className="v9-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#1C1A17]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-8 v9-serif italic text-[22px] md:text-[26px] leading-[1.4] text-[#8B6F3E] max-w-2xl">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="mt-6 text-[17px] leading-[1.75] text-[#1C1A17]/70 max-w-2xl">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#F7F1E8] py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">{children}</div>
        </section>

        {ctaTitle && (
          <section className="bg-[#1C1A17] text-[#F7F1E8] py-24 lg:py-32 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, #B89968 0%, transparent 50%)",
              }}
            />
            <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#B89968]" />
                <span className="v9-eyebrow text-[#B89968]">By Private Appointment</span>
                <span className="h-px w-12 bg-[#B89968]" />
              </div>
              <h2 className="v9-serif text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em]">
                {ctaTitle}
              </h2>
              {ctaDescription && (
                <p className="mt-8 max-w-xl mx-auto text-[17px] leading-[1.7] text-[#F7F1E8]/70">{ctaDescription}</p>
              )}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="group inline-flex items-center gap-3 bg-[#F7F1E8] text-[#1C1A17] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#B89968] hover:text-[#1C1A17] transition-colors duration-500"
                  >
                    {ctaPrimary.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="text-[12px] uppercase tracking-[0.24em] font-semibold text-[#F7F1E8]/80 border-b border-[#F7F1E8]/60 pb-0.5 hover:text-[#B89968] hover:border-[#B89968] transition-colors"
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

  if (version === "v8") {
    return (
      <>
        {/* Hero */}
        <section className="relative bg-luxury-cream pt-20 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-20 sm:py-28 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold mb-8 block">
                {badge}
              </span>
              <h1
                className="text-4xl md:text-6xl text-luxury-ink leading-[0.95] tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 text-xl text-luxury-ink/60 italic" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="mt-6 text-base leading-relaxed text-luxury-ink/50 max-w-2xl">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-luxury-cream">
          <div className="max-w-[1800px] mx-auto px-8 md:px-16">{children}</div>
        </section>

        {ctaTitle && (
          <section className="bg-luxury-ink py-32">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2
                className="text-4xl md:text-6xl text-luxury-cream tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {ctaTitle}
              </h2>
              {ctaDescription && <p className="mt-6 text-lg text-luxury-cream/50">{ctaDescription}</p>}
              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                {ctaPrimary && (
                  <Link href={ctaPrimary.href} className="group flex items-center gap-2 bg-luxury-cream text-luxury-ink px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-white transition-all duration-500">
                    {ctaPrimary.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link href={ctaSecondary.href} className="border border-luxury-cream/20 text-luxury-cream px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
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

  if (version === "v7") {
    return (
      <>
        {/* Hero */}
        <section className="relative bg-[#0b1121] pt-16 overflow-hidden">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-blue-400">
                {badge}
              </span>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
              )}
              {description && (
                <p className="mt-4 text-base leading-relaxed text-slate-500 max-w-2xl">{description}</p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#0b1121]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </section>

        {ctaTitle && (
          <section className="bg-[#0f1729] py-20 sm:py-28">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{ctaTitle}</h2>
              {ctaDescription && <p className="mt-4 text-base text-slate-400">{ctaDescription}</p>}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {ctaPrimary && (
                  <Link href={ctaPrimary.href} className="group flex items-center gap-2 bg-blue-500 rounded-lg px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors">
                    {ctaPrimary.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link href={ctaSecondary.href} className="border border-white/[0.12] rounded-lg px-8 py-3.5 text-sm font-medium text-white hover:border-white/30 transition-colors">
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

  if (version === "v6") {
    return (
      <>
        {/* Hero */}
        <section className="relative bg-zinc-950 pt-24 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">
                {badge}
              </span>
              <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 text-zinc-400 font-light italic">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="mt-6 text-base leading-relaxed text-zinc-400 max-w-2xl font-light">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>

        {/* CTA */}
        {ctaTitle && (
          <section className="bg-white py-24 border-t border-zinc-200">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="relative bg-zinc-950 rounded-[2rem] p-10 md:p-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative">
                  <h2 className="text-white font-bold text-3xl tracking-tight">
                    {ctaTitle}
                  </h2>
                  {ctaDescription && (
                    <p className="mt-6 text-zinc-400">
                      {ctaDescription}
                    </p>
                  )}
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    {ctaPrimary && (
                      <Link
                        href={ctaPrimary.href}
                        className="group inline-flex items-center gap-2 bg-white text-zinc-950 rounded-full px-8 py-3.5 text-sm font-bold hover:bg-zinc-100 transition-colors"
                      >
                        {ctaPrimary.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                    {ctaSecondary && (
                      <Link
                        href={ctaSecondary.href}
                        className="inline-flex items-center gap-2 bg-zinc-800 text-white border border-zinc-700 rounded-full px-8 py-3.5 text-sm font-bold hover:bg-zinc-700 transition-colors"
                      >
                        {ctaSecondary.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  if (version === "v5") {
    return (
      <>
        {/* Hero */}
        <section className="relative bg-[#050b1a] pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0a1428] to-[#050b1a]" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  {badge}
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 text-xl text-slate-400 font-light italic">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="mt-6 text-base leading-relaxed text-slate-500 max-w-2xl font-light">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 sm:py-28 bg-[#050b1a]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>

        {/* CTA */}
        {ctaTitle && (
          <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h2
                className="text-3xl md:text-5xl font-light text-[#050b1a] tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {ctaTitle}
              </h2>
              {ctaDescription && (
                <p className="mt-6 text-lg text-slate-500 font-light">
                  {ctaDescription}
                </p>
              )}
              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="group px-12 py-5 bg-[#050b1a] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 transition-all duration-500 flex items-center gap-3"
                  >
                    {ctaPrimary.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="px-12 py-5 border border-[#050b1a]/20 text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#050b1a] hover:text-white transition-all duration-500"
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

  // Default (v1-v4): pass through with standard light-theme wrapper
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {badge}
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg font-medium italic text-gray-400">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>

      {ctaTitle && (
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
              {ctaTitle}
            </h2>
            {ctaDescription && (
              <p className="mt-4 text-base text-gray-500">{ctaDescription}</p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
                >
                  {ctaPrimary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
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

/** Version-aware card for content sections */
export function ContentCard({
  number,
  title,
  children,
}: {
  number?: number;
  title: string;
  children: React.ReactNode;
}) {
  const { version } = useDesignVersion();

  if (version === "v9") {
    return (
      <div className="group bg-[#EDE4D3] p-8 lg:p-10 transition-shadow hover:v9-paper-edge">
        {number != null && (
          <div className="flex items-center gap-4 mb-6">
            <span className="v9-serif italic text-[28px] text-[#8B6F3E] leading-none">
              {String(number).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-[#1C1A17]/10" />
          </div>
        )}
        <h3 className="v9-serif text-[24px] md:text-[28px] leading-tight tracking-[-0.01em] text-[#1C1A17]">
          {title}
        </h3>
        <div className="mt-5 text-[15px] leading-[1.7] text-[#1C1A17]/70">{children}</div>
      </div>
    );
  }

  if (version === "v8") {
    return (
      <div className="border border-luxury-ink/[0.06] bg-luxury-warm p-6 sm:p-10 transition-all hover:border-luxury-gold/20">
        {number != null && (
          <div className="flex items-center gap-4 mb-6">
            <span className="text-luxury-gold font-bold text-sm" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>{String(number).padStart(2, "0")}</span>
            <div className="flex-1 h-px bg-luxury-ink/[0.06]" />
          </div>
        )}
        <h3 className="text-xl text-luxury-ink" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>{title}</h3>
        <div className="mt-4 text-base leading-relaxed text-luxury-ink/60">{children}</div>
      </div>
    );
  }

  if (version === "v7") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 transition-all hover:bg-white/[0.05] hover:border-white/[0.12]">
        {number != null && (
          <div className="flex items-center gap-4 mb-5">
            <span className="text-blue-400 font-bold text-sm">{String(number).padStart(2, "0")}</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="mt-3 text-sm leading-relaxed text-slate-400">{children}</div>
      </div>
    );
  }

  if (version === "v6") {
    return (
      <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
        {number != null && (
          <>
            <span className="text-blue-600 font-bold text-sm">
              {String(number).padStart(2, "0")}
            </span>
            <div className="h-px bg-zinc-200 my-4" />
          </>
        )}
        <h3 className="text-lg font-semibold text-zinc-950">
          {title}
        </h3>
        <div className="mt-4 text-sm leading-relaxed text-zinc-600">
          {children}
        </div>
      </div>
    );
  }

  if (version === "v5") {
    return (
      <div className="border border-white/[0.06] bg-transparent p-8 sm:p-10">
        {number != null && (
          <div className="flex items-center gap-4 mb-6">
            <span className="text-blue-500 font-bold text-sm">
              {String(number).padStart(2, "0")}
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        )}
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
          {title}
        </h3>
        <div className="mt-4 text-base leading-relaxed text-slate-400 font-light">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1">
      <h3 className="flex items-start gap-2 text-lg font-bold text-dark-900">
        {number != null && (
          <span className="mr-2 text-coral-500">{number}.</span>
        )}
        {title}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-gray-600">
        {children}
      </div>
    </div>
  );
}

/** Version-aware section heading */
export function SectionHeading({
  badge,
  title,
}: {
  badge?: string;
  title: string;
}) {
  const { version } = useDesignVersion();

  if (version === "v9") {
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
            <span className="h-px w-10 bg-[#8B6F3E]" />
            <span className="v9-eyebrow">{badge}</span>
            <span className="h-px w-10 bg-[#8B6F3E]" />
          </div>
        )}
        <h2 className="v9-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
          {title}
        </h2>
      </motion.div>
    );
  }

  if (version === "v8") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        {badge && (
          <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold">{badge}</span>
        )}
        <h2
          className="mt-4 text-4xl md:text-5xl text-luxury-ink tracking-tighter"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          {title}
        </h2>
      </motion.div>
    );
  }

  if (version === "v7") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-14"
      >
        {badge && (
          <span className="text-xs font-semibold tracking-[0.15em] text-blue-400/80 uppercase">{badge}</span>
        )}
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      </motion.div>
    );
  }

  if (version === "v6") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-14"
      >
        {badge && (
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">{badge}</span>
        )}
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">{title}</h2>
      </motion.div>
    );
  }

  if (version === "v5") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16"
      >
        {badge && (
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
            {badge}
          </span>
        )}
        <h2
          className="mt-4 text-3xl md:text-5xl font-light text-white tracking-tighter"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          {title}
        </h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl font-bold text-dark-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
