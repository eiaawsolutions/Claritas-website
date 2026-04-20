"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

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

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#3f3f3f]/[0.08]">
      <nav className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80" aria-label="Claritas — home">
            <Image
              src="/claritas-logo.svg"
              alt="Claritas"
              width={158}
              height={42}
              priority
              className="h-9 w-auto"
            />
            <span className="cl-eyebrow text-[9px] hidden xl:inline">EST 2008</span>
          </Link>

          {/* Center nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#3f3f3f]/70 hover:text-[#3f3f3f] transition-colors"
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
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-72 bg-white border border-[#3f3f3f]/[0.08] cl-paper-edge"
                    >
                      <div className="border-b border-[#3f3f3f]/[0.08] px-5 py-3">
                        <span className="cl-eyebrow text-[9px]">{link.name}</span>
                      </div>
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="group flex items-center justify-between px-5 py-2.5 cl-serif text-[15px] text-[#3f3f3f]/75 hover:text-[#721011] transition-colors"
                          >
                            <span>{child.name}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#3f3f3f]/70 hover:text-[#3f3f3f]"
            >
              Client Portal
            </Link>
            <Link
              href="/contact?demo=true"
              className="bg-[#3f3f3f] text-white px-6 py-3 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-[#721011] transition-colors duration-500"
            >
              Request Briefing
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#3f3f3f]"
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
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-1 pb-6 pt-2 border-t border-[#3f3f3f]/[0.08]">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => !link.children && setMobileOpen(false)}
                      className="block px-3 py-3 cl-serif text-[17px] text-[#3f3f3f]"
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="ml-4 space-y-0.5 border-l border-[#721011]/30 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-[14px] text-[#3f3f3f]/65 hover:text-[#721011]"
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
                    className="block w-full bg-[#3f3f3f] text-white py-3.5 text-center text-[11px] uppercase tracking-[0.22em] font-semibold"
                  >
                    Request Briefing
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
