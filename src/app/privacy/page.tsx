"use client";

import { useDesignVersion } from "@/config/design-context";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you voluntarily provide when you fill out our contact forms, request a demo, or sign up for a free trial. This may include your name, email address, phone number, company name, and any message content you submit. We also collect standard web analytics data such as IP addresses, browser type, pages visited, and referring URLs through server logs.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to respond to your enquiries and provide the services you request, communicate with you about our products and updates, improve our website and user experience, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.",
  },
  {
    title: "Data Storage and Security",
    body: "Your data is hosted on Microsoft Azure cloud infrastructure with enterprise-grade security controls including encryption at rest and in transit, multi-tenant data isolation, regular automated backups across three separate nodes, and ISO 27001 certified data centres. Access to customer data is restricted to authorized personnel only, with formal access request processes and audit trail logging.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies and similar technologies to enhance your browsing experience. These include essential cookies required for the website to function, analytics cookies that help us understand how visitors use our site, and preference cookies that remember your settings. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.",
  },
  {
    title: "Third-Party Services",
    body: "We may use third-party services for web analytics, email delivery, and hosting infrastructure. These service providers are bound by their own privacy policies and are only granted access to information necessary to perform their services. We use Google Fonts served through Next.js (self-hosted, no data sent to Google) and Microsoft Azure for cloud hosting.",
  },
  {
    title: "Data Retention",
    body: "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Contact form submissions are retained for the duration of any business relationship and for a reasonable period thereafter. You may request deletion of your data at any time.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict processing of your data, and withdraw consent where processing is based on consent. To exercise any of these rights, please contact us at sales@claritascrm.com or call 03-7613 4824.",
  },
  {
    title: "Children's Privacy",
    body: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete that information promptly.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about this privacy policy or our data practices, please contact us at:\n\nNetster Consulting Asia\n9-7, Block A, Jaya One, 72A Jalan Prof Diraja, Jln Profesor Diraja Ungku Aziz, 46200 Petaling Jaya, Selangor, Malaysia.\n\nEmail: sales@claritascrm.com\nPhone: 03-7613 4824",
  },
];

export default function PrivacyPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV6 = version === "v6";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  return (
    <>
      <section className={`pt-16 ${isV6 ? "bg-zinc-950 relative" : isDark ? "bg-[#0b1121] relative" : "bg-gray-50"}`}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-[#0f1729] to-[#0b1121]" />}
        {isV6 && <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />}
        <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative ${isV6 ? "py-20 sm:py-28" : isDark ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          {isV6 ? (
            <span className="inline-block px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">
              Legal
            </span>
          ) : isDark ? (
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-[60px] bg-blue-500" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                Legal
              </span>
            </div>
          ) : (
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Legal
            </span>
          )}
          <h1
            className={
              isV6
                ? "mt-6 text-3xl md:text-5xl font-bold text-white tracking-tight"
                : isV5
                  ? "text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                  : "mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl"
            }
            style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isV6 ? (
              <>Privacy <span className="text-blue-400">Policy</span></>
            ) : isDark ? (
              <>Privacy <span className="text-blue-500">Policy</span></>
            ) : (
              <>PRIVACY <span className="text-coral-500">POLICY</span></>
            )}
          </h1>
          <p className={`mt-4 text-sm ${isV6 ? "text-zinc-400" : isDark ? "text-slate-500" : "text-gray-400"}`}>
            Last updated: April 2026
          </p>
          <p className={`mt-4 text-base leading-relaxed ${isV6 ? "text-zinc-400 font-light" : isDark ? "text-slate-400 font-light" : "text-gray-500"}`}>
            Claritas&trade; CRM, a registered trademark of Netster, is committed to protecting your
            privacy. This policy explains how we collect, use, and safeguard your personal information
            when you visit our website or use our services.
          </p>
        </div>
      </section>

      <section className={isV6 ? "py-20 sm:py-28 bg-zinc-50" : isDark ? "py-20 sm:py-28 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className={isV6 ? "space-y-10" : isDark ? "space-y-12" : "space-y-10"}>
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className={isV6 ? "text-lg font-semibold text-zinc-950" : isDark ? "text-lg font-bold text-white" : "text-lg font-bold text-dark-900"}>
                  <span className={`mr-2 ${isV6 ? "text-blue-600" : isDark ? "text-blue-500" : "text-coral-500"}`}>{i + 1}.</span>
                  {s.title}
                </h2>
                <p className={`mt-3 text-sm leading-relaxed whitespace-pre-line ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
