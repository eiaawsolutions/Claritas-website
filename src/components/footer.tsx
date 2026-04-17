"use client";

import Link from "next/link";
import { useDesignVersion } from "@/config/design-context";

const columns = [
  {
    title: "Claritas",
    links: [
      { name: "Cloud", href: "/claritas/cloud" },
      { name: "Framework", href: "/claritas/framework" },
      { name: "Security", href: "/claritas/security" },
      { name: "Integration", href: "/claritas/integration" },
      { name: "Cloud vs On-Premise", href: "/claritas/cloud-vs-on-premise" },
      { name: "Implementation", href: "/claritas/implementation" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "CRM for Marketing", href: "/products/marketing" },
      { name: "CRM for Sales", href: "/products/sales" },
      { name: "CRM for Support", href: "/products/support" },
      { name: "Call Centre", href: "/products/call-center" },
      { name: "Loyalty Program", href: "/products/loyalty" },
      { name: "CRM for SME", href: "/products/sme" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Request Demo", href: "/contact?demo=true" },
      { name: "Free Trial", href: "/contact?demo=true" },
      { name: "Pricing", href: "/pricing" },
      { name: "Dashboard & Reports", href: "/products/dashboard" },
      { name: "Banking & Fintech", href: "/solutions/fintech" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "News & Events", href: "/news-events" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialIcons = [
  {
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export function Footer() {
  const { version } = useDesignVersion();

  const styles = {
    v1: {
      wrapper: "border-t border-dark-700 bg-dark-900",
      heading: "text-xs font-bold uppercase tracking-wider text-white",
      link: "text-xs text-gray-400 transition-colors hover:text-coral-400",
      border: "border-dark-700",
      copy: "text-xs text-gray-500",
      socialBg: "bg-dark-700 text-gray-400 hover:bg-coral-500 hover:text-white",
    },
    v2: {
      wrapper: "border-t border-slate-200 bg-[#1e293b]",
      heading: "text-xs font-semibold uppercase tracking-wider text-white/80",
      link: "text-xs text-white/40 transition-colors hover:text-[#2dd4bf]",
      border: "border-white/[0.08]",
      copy: "text-xs text-white/30",
      socialBg: "bg-white/[0.06] text-white/40 hover:bg-[#0d7377]/30 hover:text-[#2dd4bf]",
    },
    v3: {
      wrapper: "border-t border-[#1a2b4a]/[0.08] bg-[#1a2b4a]",
      heading: "text-xs font-semibold uppercase tracking-wider text-white/80",
      link: "text-xs text-white/40 transition-colors hover:text-amber-400",
      border: "border-white/[0.08]",
      copy: "text-xs text-white/30",
      socialBg: "bg-white/[0.06] text-white/40 hover:bg-amber-500/20 hover:text-amber-400",
    },
    v4: {
      wrapper: "border-t border-white/[0.04] bg-[#08010f]",
      heading: "text-xs font-semibold uppercase tracking-wider text-white/80",
      link: "text-xs text-slate-500 transition-colors hover:text-violet-300",
      border: "border-white/[0.04]",
      copy: "text-xs text-slate-600",
      socialBg: "bg-white/[0.04] text-slate-500 hover:bg-violet-500/20 hover:text-violet-300",
    },
    v5: {
      wrapper: "border-t border-white/[0.05] bg-[#050b1a]",
      heading: "text-white font-bold uppercase tracking-[0.3em] text-[10px]",
      link: "text-slate-500 hover:text-white transition-colors text-xs font-light uppercase tracking-widest",
      border: "border-white/[0.05]",
      copy: "text-slate-600 text-[10px] uppercase tracking-[0.2em]",
      socialBg: "border border-white/10 text-slate-400 hover:text-white hover:border-blue-500 rounded-full",
    },
    v6: {
      wrapper: "border-t border-zinc-200 bg-white",
      heading: "text-zinc-950 font-bold text-sm tracking-wider uppercase",
      link: "text-sm text-zinc-500 hover:text-blue-600 transition-colors",
      border: "border-zinc-200",
      copy: "text-xs font-medium text-zinc-400",
      socialBg: "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900",
    },
    v7: {
      wrapper: "border-t border-white/[0.06] bg-[#080e1e]",
      heading: "text-xs font-semibold uppercase tracking-wider text-white/80",
      link: "text-xs text-slate-500 transition-colors hover:text-blue-400",
      border: "border-white/[0.06]",
      copy: "text-xs text-slate-600",
      socialBg: "bg-white/[0.04] text-slate-500 hover:bg-blue-500/20 hover:text-blue-400",
    },
    v8: {
      wrapper: "border-t border-[#1A1A1A]/10 bg-[#1A1A1A]",
      heading: "text-white font-bold uppercase tracking-[0.3em] text-[10px]",
      link: "text-white/40 hover:text-[#D4B886] transition-colors text-xs",
      border: "border-white/[0.08]",
      copy: "text-white/30 text-[10px] uppercase tracking-[0.15em]",
      socialBg: "border border-white/10 text-white/40 hover:text-[#D4B886] hover:border-[#B8965A]",
    },
    v9: {
      wrapper: "border-t border-[#F4F2EC]/10 bg-[#0A0A0A]",
      heading: "text-[#F4F2EC] v9-mono uppercase tracking-[0.3em] text-[10px] font-bold",
      link: "text-[#F4F2EC]/50 hover:text-[#FF4D1F] transition-colors v9-mono text-[11px] uppercase tracking-[0.15em]",
      border: "border-[#F4F2EC]/10",
      copy: "text-[#F4F2EC]/40 v9-mono text-[10px] uppercase tracking-[0.25em]",
      socialBg: "border border-[#F4F2EC]/20 text-[#F4F2EC]/50 hover:text-[#FF4D1F] hover:border-[#FF4D1F] rounded-none",
    },
  };

  // ── V9: Obsidian — Declassified footer ──
  if (version === "v9") {
    return (
      <footer className="bg-[#0A0A0A] text-[#F4F2EC] border-t border-[#F4F2EC]/10">
        {/* Giant wordmark bar */}
        <div className="border-b border-[#F4F2EC]/10 overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <span className="v9-display text-[18vw] lg:text-[14vw] leading-none text-[#F4F2EC]/95">
                CLARITAS<span className="text-[#FF4D1F]">.</span>
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between v9-mono text-[10px] uppercase tracking-[0.3em] text-[#F4F2EC]/50">
              <span>OPERATING SYSTEM FOR CUSTOMER REVENUE</span>
              <span>FILE-09 / REV 2026.04</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="v9-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4D1F] mb-4">
                ↳ TRANSMISSION
              </div>
              <p className="text-base text-[#F4F2EC]/70 leading-relaxed max-w-sm mb-6">
                Engineered in Petaling Jaya. Deployed across APAC. Operated 24/7 by a small team of obsessive operators.
              </p>
              <div className="v9-mono text-[11px] uppercase tracking-[0.2em] text-[#F4F2EC]/50 space-y-1">
                <div>SALES · <span className="text-[#F4F2EC]">sales@claritascrm.com</span></div>
                <div>HOTLINE · <span className="text-[#F4F2EC]">03-7613 4824</span></div>
              </div>
            </div>
            {columns.map((col) => (
              <div key={col.title} className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-auto">
                <h3 className="v9-mono text-[10px] uppercase tracking-[0.3em] text-[#F4F2EC] font-bold mb-5 pb-2 border-b border-[#F4F2EC]/15">
                  ▸ {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="v9-mono text-[11px] uppercase tracking-[0.12em] text-[#F4F2EC]/55 hover:text-[#FF4D1F] transition-colors">
                        · {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#F4F2EC]/10">
            <p className="v9-mono text-[10px] uppercase tracking-[0.25em] text-[#F4F2EC]/40">
              © {new Date().getFullYear()} CLARITAS™ · NETSTER SDN BHD · ALL RIGHTS RESERVED
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-[#F4F2EC]/20 text-[#F4F2EC]/50 hover:text-[#FF4D1F] hover:border-[#FF4D1F] transition-colors"
                  aria-label={icon.label}
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ── V8: Atelier — Luxury editorial footer ──
  if (version === "v8") {
    return (
      <footer className="py-20 px-8 md:px-16 border-t border-luxury-ink/5 bg-luxury-cream">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl tracking-tighter font-medium mb-8 block" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
                CLARITAS
              </Link>
              <p className="text-sm text-luxury-ink/50 leading-relaxed max-w-xs">
                A strategic CRM platform dedicated to the pursuit of clarity in an age of complexity.
              </p>
            </div>
            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 text-luxury-ink">{col.title}</h5>
                <ul className="space-y-4 text-sm text-luxury-ink/60">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-luxury-ink transition-colors">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-luxury-ink/5 gap-8">
            <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-ink/40">
              &copy; {new Date().getFullYear()} Claritas&trade; is registered trademark of Netster. All rights reserved.
            </div>
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-luxury-ink/40">
              <Link href="/privacy" className="hover:text-luxury-ink transition-colors">Privacy</Link>
              <Link href="/privacy" className="hover:text-luxury-ink transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-luxury-ink transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const s = styles[version];

  return (
    <footer className={s.wrapper}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className={s.heading}>{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={s.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-10 flex flex-col items-center gap-4 border-t ${s.border} pt-6 sm:flex-row sm:justify-between`}>
          <p className={s.copy}>
            &copy; All rights reserved. Claritas&trade; is registered trademark of Netster.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#"
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${s.socialBg}`}
                aria-label={icon.label}
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
