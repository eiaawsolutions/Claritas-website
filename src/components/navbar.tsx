"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Plus, Command } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Claritas",
    href: "/claritas/cloud",
    children: [
      { name: "Claritas Cloud", href: "/claritas/cloud" },
      { name: "Framework", href: "/claritas/framework" },
      { name: "Security", href: "/claritas/security" },
      { name: "Integration", href: "/claritas/integration" },
      { name: "Cloud vs On-Premise", href: "/claritas/cloud-vs-on-premise" },
      { name: "Implementation", href: "/claritas/implementation" },
    ],
  },
  {
    name: "Product",
    href: "/products/marketing",
    children: [
      { name: "CRM for Marketing", href: "/products/marketing" },
      { name: "CRM for Sales", href: "/products/sales" },
      { name: "CRM for Support", href: "/products/support" },
      { name: "Call Center", href: "/products/call-center" },
      { name: "Loyalty Program", href: "/products/loyalty" },
      { name: "CRM for SME", href: "/products/sme" },
      { name: "Banking & Fintech", href: "/solutions/fintech" },
      { name: "Dashboard & Reports", href: "/products/dashboard" },
    ],
  },
  {
    name: "Company",
    href: "/about",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "News & Events", href: "/news-events" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { version } = useDesignVersion();

  // ── V9: Obsidian — Industrial brutalist / declassified terminal ──
  if (version === "v9") {
    return (
      <header className="fixed top-0 w-full z-50 bg-[#F4F2EC]/95 backdrop-blur-md border-b border-[#0A0A0A]/14">
        {/* Thin black meta bar */}
        <div className="bg-[#0A0A0A] text-[#F4F2EC]/80 border-b border-[#F4F2EC]/10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-center justify-between py-1.5 v9-mono text-[9px] uppercase tracking-[0.3em]">
            <span>SYS · CLARITAS/OPS · v9</span>
            <span className="hidden md:inline">KL 03:12 · SG 03:12 · JKT 02:12</span>
            <span className="text-[#FF4D1F]">● ONLINE</span>
          </div>
        </div>

        <nav className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo — wordmark */}
            <Link href="/" className="flex items-baseline gap-2 transition-opacity hover:opacity-80">
              <span className="text-xl font-black tracking-tighter text-[#0A0A0A]">CLARITAS</span>
              <span className="v9-mono text-[9px] uppercase tracking-[0.3em] text-[#FF4D1F]">/CRM</span>
            </Link>

            {/* Center nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-4 py-2 v9-mono text-[11px] uppercase tracking-[0.22em] font-medium text-[#0A0A0A]/70 transition-colors hover:text-[#0A0A0A]"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-2.5 w-2.5 opacity-60" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.1 }}
                        className="absolute left-0 top-full mt-1 w-64 bg-[#F4F2EC] border border-[#0A0A0A]/14 shadow-[6px_6px_0_rgba(10,10,10,0.08)]"
                      >
                        <div className="border-b border-[#0A0A0A]/14 px-3 py-2 v9-mono text-[9px] uppercase tracking-[0.3em] text-[#FF4D1F]">
                          ↳ {link.name}
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-3 py-2.5 v9-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/70 border-b border-[#0A0A0A]/8 last:border-b-0 transition-all hover:bg-[#0A0A0A] hover:text-[#F4F2EC]"
                          >
                            <span>{child.name}</span>
                            <ArrowRight className="h-3 w-3 opacity-40" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right CTA */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <Link
                href="/contact"
                className="v9-mono text-[11px] uppercase tracking-[0.22em] font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A]"
              >
                Sign in
              </Link>
              <Link
                href="/contact?demo=true"
                className="group flex items-center gap-2 bg-[#0A0A0A] text-[#F4F2EC] px-4 py-2 v9-mono text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-[#FF4D1F] transition-colors"
              >
                Request Demo
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#0A0A0A]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="space-y-1 pb-6 pt-2 border-t border-[#0A0A0A]/14">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block px-3 py-2.5 v9-mono text-[11px] uppercase tracking-[0.22em] font-semibold text-[#0A0A0A]"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-4 space-y-0.5 border-l border-[#0A0A0A]/14 pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 v9-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
                            >
                              · {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-4">
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full bg-[#0A0A0A] text-[#F4F2EC] py-3 text-center v9-mono text-[11px] uppercase tracking-[0.22em] font-semibold"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V8: Atelier — Luxury editorial aesthetic ──
  if (version === "v8") {
    return (
      <header className="fixed top-0 w-full z-50 transition-all duration-700 bg-luxury-cream/90 backdrop-blur-md border-b border-luxury-ink/5">
        <nav className="mx-auto max-w-[1800px] px-8 md:px-16">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-2xl tracking-tighter font-medium" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
                CLARITAS
              </Link>
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-ink/60 hover:text-luxury-ink transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      {link.children && <ChevronDown className="h-2.5 w-2.5 opacity-50" />}
                    </Link>

                    <AnimatePresence>
                      {link.children && openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-4 w-56 bg-luxury-cream border border-luxury-ink/[0.06] p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium text-luxury-ink/50 transition-all hover:text-luxury-ink hover:bg-luxury-warm"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-ink/60 hover:text-luxury-ink transition-colors">
                Client Portal
              </Link>
              <Link
                href="/contact?demo=true"
                className="bg-luxury-ink text-luxury-cream px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-luxury-gold transition-colors duration-500"
              >
                Inquire
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-luxury-ink/60 hover:text-luxury-ink"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-8 pt-4 border-t border-luxury-ink/5">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block px-3 py-3 text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-ink"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-6 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-[11px] uppercase tracking-[0.15em] font-medium text-luxury-ink/40 hover:text-luxury-ink"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-4">
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full bg-luxury-ink text-luxury-cream py-3 text-center text-[11px] uppercase tracking-[0.2em] font-semibold"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V7: Enterprise — Dark navy SaaS ──
  if (version === "v7") {
    return (
      <header className="fixed top-0 w-full z-50 bg-[#0b1121]/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Image
                src="/claritas-tm-logo.png"
                alt="Claritas CRM"
                width={140}
                height={36}
                className="h-7 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            {/* Center nav */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#0f1729]/95 backdrop-blur-2xl border border-white/[0.08] p-2 shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3.5 py-2.5 text-[13px] text-slate-400 transition-all hover:bg-white/[0.06] hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right CTA */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/contact"
                className="text-[13px] font-medium text-slate-400 transition-colors hover:text-white"
              >
                Sign in
              </Link>
              <Link
                href="/contact?demo=true"
                className="rounded-lg bg-blue-500 px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-blue-400"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-white/[0.06]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-4 pt-2 border-t border-white/[0.06]">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/[0.06]"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-white/[0.06] hover:text-white"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-3 space-y-2">
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-center py-2.5 text-sm font-medium text-slate-400"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V6: Precision — Light-mode technical/engineering aesthetic ──
  if (version === "v6") {
    const v6NavItems = [
      { name: "Platform", href: "/products/marketing" },
      { name: "Solutions", href: "/claritas/cloud" },
      { name: "Customers", href: "/case-studies" },
      { name: "Pricing", href: "/pricing" },
    ];

    return (
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200/50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo LEFT — square icon + Claritas text */}
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-950">
                <Command className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-950">
                Claritas
              </span>
            </Link>

            {/* Center — pill navigation group */}
            <div className="hidden md:flex md:items-center">
              <div className="flex items-center bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50">
                {v6NavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-white rounded-full transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — Sign in + Get Started */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                Sign in
              </Link>
              <Link
                href="/contact?demo=true"
                className="group flex items-center gap-2 bg-zinc-950 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-zinc-600 hover:bg-zinc-100"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-4 pt-2 border-t border-zinc-200/50">
                  {v6NavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="px-3 pt-3 space-y-2">
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-center py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-950"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full rounded-full bg-zinc-950 py-2.5 text-center text-sm font-medium text-white"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V5: Prestige — McKinsey/Bain luxury consulting aesthetic ──
  if (version === "v5") {
    return (
      <header className="fixed top-0 w-full z-50 bg-[#050b1a]/90 backdrop-blur-2xl border-b border-white/[0.05]">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo — circle icon + CLARITAS text */}
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/20">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-[0.15em] text-white">
                CLARITAS
              </span>
            </Link>

            {/* Center — Nav Links */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="group relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-1 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                    {/* Hover underline bar */}
                    <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-56 border border-white/[0.08] bg-[#050b1a]/95 p-2 shadow-2xl backdrop-blur-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 transition-all hover:bg-white/[0.04] hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right — CTA */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:border-white/40"
              >
                Connect
                <Plus className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-8 pt-4 border-t border-white/[0.05]">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block px-3 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-6 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-white"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-4">
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="flex w-full items-center justify-center gap-2 border border-white/10 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white"
                    >
                      Connect
                      <Plus className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V4: Aurora — Vivid gradient mesh + glassmorphism ──
  if (version === "v4") {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0118]/70 backdrop-blur-2xl border-b border-white/[0.06]">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo LEFT */}
            <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
              <Image
                src="/claritas-tm-logo.png"
                alt="Claritas CRM"
                width={140}
                height={36}
                className="h-7 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            {/* Nav links CENTER */}
            <div className="hidden md:flex md:items-center md:gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#12061f]/90 backdrop-blur-2xl border border-white/[0.08] p-2 shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3.5 py-2.5 text-[13px] text-slate-400 transition-all hover:bg-white/[0.06] hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right — Contact + CTA */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/contact"
                className="text-[13px] font-medium text-slate-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/contact?demo=true"
                className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2 text-[13px] font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-white/[0.06]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-4 pt-2 border-t border-white/[0.06]">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/[0.06]"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-white/[0.06] hover:text-white"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-3">
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V2: Slate — Clean professional business ──
  if (version === "v2") {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <Image
                src="/claritas-tm-logo.png"
                alt="Claritas CRM"
                width={140}
                height={36}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Center — Nav Links */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#0d7377]"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.12 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3.5 py-2.5 text-[13px] text-slate-500 transition-all hover:bg-[#f0fafa] hover:text-[#0d7377]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right — CTA */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/contact"
                className="text-[13px] font-medium text-slate-500 transition-colors hover:text-[#0d7377]"
              >
                Contact
              </Link>
              <Link
                href="/contact?demo=true"
                className="rounded-lg bg-[#0d7377] px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[#0a5f62] hover:shadow-lg hover:shadow-[#0d7377]/20"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-slate-50"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-4 pt-2 border-t border-slate-100">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#1e293b] hover:bg-slate-50"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-[#0d7377]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-3">
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full rounded-lg bg-[#0d7377] py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V3: Executive — Clean corporate authority ──
  if (version === "v3") {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <Image
                src="/claritas-tm-logo.png"
                alt="Claritas CRM"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Center nav */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide text-gray-600 transition-colors hover:text-[#1a2b4a]"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-40" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.12 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3.5 py-2.5 text-[13px] text-gray-500 transition-all hover:bg-[#f8f6f1] hover:text-[#1a2b4a]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/contact"
                className="text-[13px] font-medium text-gray-500 transition-colors hover:text-[#1a2b4a]"
              >
                Contact Sales
              </Link>
              <Link
                href="/contact?demo=true"
                className="rounded-lg bg-[#1a2b4a] px-6 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[#243756] hover:shadow-lg hover:shadow-[#1a2b4a]/20"
              >
                Request Demo
              </Link>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-50"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-1 pb-4 pt-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-[#1a2b4a]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-3 pt-3">
                    <Link
                      href="/contact?demo=true"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full rounded-lg bg-[#1a2b4a] py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    );
  }

  // ── V1: Coral Warmth (Original) ──
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-coral-500"
                >
                  {link.name}
                  {link.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                <AnimatePresence>
                  {link.children && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      className="absolute left-0 top-full mt-1 w-52 rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-coral-50 hover:text-coral-500"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <div className="rounded-xl bg-white p-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] ring-1 ring-gray-100">
              <Image
                src="/claritas-tm-logo.png"
                alt="Claritas CRM"
                width={160}
                height={40}
                className="h-8 w-auto object-contain rounded-lg"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:block">
            <Link
              href="/contact?demo=true"
              className="rounded-full bg-coral-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            >
              FREE TRIAL
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 pb-4 pt-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => !link.children && setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="ml-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-coral-500"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-3 pt-3">
                  <Link
                    href="/contact?demo=true"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full rounded-full bg-coral-500 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    FREE TRIAL
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
