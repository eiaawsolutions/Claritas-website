import Link from "next/link";
import Image from "next/image";

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
  return (
    <footer className="bg-white text-[#3f3f3f] border-t border-[#3f3f3f]/[0.08] relative overflow-hidden">
      {/* Subtle warm gradient wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(114, 16, 17, 0.035), transparent 60%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(63, 63, 63, 0.04), transparent 70%), linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
          }}
        />
      </div>

      {/* Colophon line */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-[#3f3f3f]/10 pb-12">
          <div className="max-w-md">
            <Link href="/" className="inline-block" aria-label="Claritas — home">
              <Image
                src="/claritas-logo.svg"
                alt="Claritas"
                width={260}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#721011]" />
              <span className="cl-eyebrow text-[10px]">Est. 2008 · Petaling Jaya</span>
            </div>
            <p className="mt-8 cl-serif italic text-[17px] leading-[1.6] text-[#3f3f3f]/70">
              An operating system for customer relationships — built for organisations that measure success in decades, not quarters.
            </p>
          </div>

          <div className="md:text-right">
            <div className="cl-eyebrow text-[10px] mb-3">Private Enquiries</div>
            <div className="cl-serif text-[18px] text-[#3f3f3f] mb-1">
              sales@claritascrm.com
            </div>
            <div className="cl-serif text-[18px] text-[#3f3f3f]/70">
              03-7613 4824
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="cl-eyebrow text-[10px] mb-6 pb-3 border-b border-[#3f3f3f]/10">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="cl-serif text-[15px] text-[#3f3f3f]/70 hover:text-[#721011] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-[#3f3f3f]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#3f3f3f]/50">
            © {new Date().getFullYear()} Claritas™ · a Netster Sdn Bhd company · all rights reserved
          </p>
          <div className="flex items-center gap-2">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3f3f3f]/20 text-[#3f3f3f]/55 hover:text-[#721011] hover:border-[#721011] transition-colors"
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
