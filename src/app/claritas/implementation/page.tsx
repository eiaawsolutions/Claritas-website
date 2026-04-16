"use client";

import { SubpageShell } from "@/components/subpage-shell";
import { useDesignVersion } from "@/config/design-context";

const stages = [
  {
    number: "01",
    title: "Manual Operations",
    desc: "Most companies begin with manual processes, typically using Excel spreadsheets as their initial CRM tool. Customer data is scattered across emails, documents, and individual records with no centralised view.",
    colour: "bg-gray-200 text-gray-600",
  },
  {
    number: "02",
    title: "Partial Automation",
    desc: "As organisations expand and need to share information across departments, they automate specific aspects — such as marketing campaigns or support ticketing — while maintaining spreadsheet-based reporting for other areas.",
    colour: "bg-coral-100 text-coral-600",
  },
  {
    number: "03",
    title: "End-to-End Automation",
    desc: "When companies lose track of customer activities, preferences, spending patterns, and quotations, they implement system-wide automation. This creates a comprehensive 360-degree customer view, integrating campaigns, sales pipelines, and customer service in one platform.",
    colour: "bg-coral-200 text-coral-700",
  },
  {
    number: "04",
    title: "Optimisation & Full Potential",
    desc: "Beyond implementation, organisations optimise CRM to mine data for top customers by brand or demographic, execute cross-selling and up-selling strategies, generate executive-level management reports, and allocate time toward high-value customers. This is where the real ROI is realised.",
    colour: "bg-coral-500 text-white",
  },
];

const fourPs = [
  {
    letter: "P",
    title: "Process",
    desc: "Every industry practises CRM differently. Industry-specific understanding is essential for defining appropriate process flows. Claritas brings domain knowledge across 12+ industries to guide best practices — not just ask 'what are your requirements?'.",
  },
  {
    letter: "P",
    title: "Product",
    desc: "Selecting the right tool matters significantly. Organisations should evaluate usability, market maturity, and alignment with specific needs. Claritas offers marketing, sales, support, call centre, and loyalty modules in a single integrated platform.",
  },
  {
    letter: "P",
    title: "People",
    desc: "Success requires the right people to implement it — from internal process champions and designers to vendor automation specialists. Claritas provides dedicated project managers, consultants, and training programmes to ensure adoption.",
  },
  {
    letter: "P",
    title: "Price",
    desc: "Budget determines resource allocation. Total cost of ownership (TCO) and return on investment (ROI) justification is critical. Claritas offers transparent pricing from RM 79/user/month with a 14-day free trial to validate before committing.",
  },
];

export default function ImplementationPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  return (
    <SubpageShell
      badge="Implementation"
      title={isDark ? "CRM Implementation" : "CRM IMPLEMENTATION"}
      subtitle="The adoption of CRM is not an overnight implementation"
      description="CRM is a journey, not an instantaneous transformation. Companies often expect significant results within the first month — but lasting success comes from a structured, phased approach. Here is the maturity path most organisations follow."
      ctaTitle={isDark ? "Start your CRM journey today" : "Start your CRM journey today"}
      ctaDescription="Our consultants guide you through every stage — from planning to optimisation."
      ctaPrimary={{ label: "REQUEST A DEMO", href: "/contact?demo=true" }}
      ctaSecondary={{ label: "READ SUCCESS STORIES", href: "/case-studies" }}
    >
      {/* Maturity Stages */}
      <div className={isDark ? "mb-20" : "mb-16"}>
        <h2
          className={
            isV5
              ? "text-center text-3xl md:text-5xl font-light text-white tracking-tighter mb-16"
              : "text-center text-2xl font-bold text-dark-900 sm:text-3xl"
          }
          style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
        >
          {isDark ? "CRM Maturity Journey" : <>CRM MATURITY <span className="text-coral-500">JOURNEY</span></>}
        </h2>
        <div className={isDark ? "space-y-4 max-w-4xl mx-auto" : "mt-12 space-y-4 max-w-4xl mx-auto"}>
          {stages.map((s) => (
            <div
              key={s.number}
              className={
                isV5
                  ? "flex gap-4 border border-white/[0.06] bg-transparent p-6"
                  : "flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              }
            >
              <div
                className={
                  isV5
                    ? "flex h-12 w-12 shrink-0 items-center justify-center bg-blue-500/10 text-blue-400 text-sm font-bold"
                    : `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${s.colour}`
                }
              >
                {s.number}
              </div>
              <div>
                <h3 className={isDark ? "text-base font-semibold text-white" : "text-base font-bold text-dark-900"}>
                  {s.title}
                </h3>
                <p className={isDark ? "mt-2 text-sm leading-relaxed text-slate-400 font-light" : "mt-2 text-sm leading-relaxed text-gray-500"}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 P's */}
      <div>
        <h2
          className={
            isV5
              ? "text-center text-3xl md:text-5xl font-light text-white tracking-tighter mb-6"
              : "text-center text-2xl font-bold text-dark-900 sm:text-3xl"
          }
          style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
        >
          {isDark ? "The 4 P\u2019s of CRM Success" : <>THE 4 <span className="text-coral-500">P&apos;s</span> OF CRM SUCCESS</>}
        </h2>
        <p className={isDark ? "mt-4 mx-auto max-w-2xl text-center text-sm text-slate-500 font-light mb-16" : "mt-4 mx-auto max-w-2xl text-center text-sm text-gray-500"}>
          Four critical success factors determine whether your CRM implementation reaches its full potential.
        </p>
        <div className={isDark ? "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" : "mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
          {fourPs.map((p) => (
            <div
              key={p.title}
              className={
                isV5
                  ? "border border-white/[0.06] bg-transparent p-6 text-center"
                  : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              }
            >
              <span className={isDark ? "text-4xl font-bold text-blue-500" : "text-4xl font-extrabold text-coral-500"}>
                {p.letter}
              </span>
              <h3 className={isDark ? "mt-2 text-base font-semibold text-white" : "mt-2 text-base font-bold text-dark-900"}>
                {p.title}
              </h3>
              <p className={isDark ? "mt-3 text-xs leading-relaxed text-slate-400 font-light" : "mt-3 text-xs leading-relaxed text-gray-500"}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
