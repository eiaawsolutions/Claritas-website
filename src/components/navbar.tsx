"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "/about",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "News & Events", href: "/about#news" },
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
  { name: "Careers", href: "/#careers" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left — Nav Links (desktop) */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-coral-500"
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </Link>

                {/* Dropdown */}
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

          {/* Center — Logo */}
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

          {/* Right — CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact?demo=true"
              className="rounded-full bg-coral-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            >
              FREE TRIAL
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
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
