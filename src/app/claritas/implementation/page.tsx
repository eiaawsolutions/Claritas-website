"use client";

import { SubpageShell } from "@/components/subpage-shell";

const stages = [
  { number: "01", title: "Manual Operations", desc: "Most companies begin with manual processes, typically using Excel spreadsheets as their initial CRM tool. Customer data is scattered across emails, documents, and individual records with no centralised view." },
  { number: "02", title: "Partial Automation", desc: "As organisations expand and need to share information across departments, they automate specific aspects — such as marketing campaigns or support ticketing — while maintaining spreadsheet-based reporting for other areas." },
  { number: "03", title: "End-to-End Automation", desc: "When companies lose track of customer activities, preferences, spending patterns, and quotations, they implement system-wide automation. This creates a comprehensive 360-degree customer view, integrating campaigns, sales pipelines, and customer service in one platform." },
  { number: "04", title: "Optimisation & Full Potential", desc: "Beyond implementation, organisations optimise CRM to mine data for top customers by brand or demographic, execute cross-selling and up-selling strategies, generate executive-level management reports, and allocate time toward high-value customers. This is where the real ROI is realised." },
];

const fourPs = [
  { letter: "P", title: "Process", desc: "Every industry practises CRM differently. Industry-specific understanding is essential for defining appropriate process flows. Claritas brings domain knowledge across 12+ industries to guide best practices — not just ask 'what are your requirements?'." },
  { letter: "P", title: "Product", desc: "Selecting the right tool matters significantly. Organisations should evaluate usability, market maturity, and alignment with specific needs. Claritas offers marketing, sales, support, call centre, and loyalty modules in a single integrated platform." },
  { letter: "P", title: "People", desc: "Success requires the right people to implement it — from internal process champions and designers to vendor automation specialists. Claritas provides dedicated project managers, consultants, and training programmes to ensure adoption." },
  { letter: "P", title: "Price", desc: "Budget determines resource allocation. Total cost of ownership (TCO) and return on investment (ROI) justification is critical. Claritas offers transparent pricing from RM 79/user/month with a 14-day free trial to validate before committing." },
];

export default function ImplementationPage() {
  return (
    <SubpageShell
      badge="Implementation"
      title="Implementation."
      subtitle="CRM adoption is a journey, not an overnight transformation."
      description="CRM is a journey, not an instantaneous transformation. Companies often expect significant results within the first month — but lasting success comes from a structured, phased approach. Here is the maturity path most organisations follow."
      ctaTitle="Start your CRM journey today"
      ctaDescription="Our consultants guide you through every stage — from planning to optimisation."
      ctaPrimary={{ label: "Request a Demo", href: "/contact?demo=true" }}
      ctaSecondary={{ label: "Read Success Stories", href: "/case-studies" }}
    >
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">The Journey</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            The CRM <span className="italic text-[#721011]">maturity journey.</span>
          </h2>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {stages.map((s) => (
            <div key={s.number} className="flex gap-5 bg-[#fafafa] p-6 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20 cl-serif italic">
                {s.number}
              </div>
              <div>
                <h3 className="cl-serif text-[20px] leading-tight text-[#3f3f3f]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">Success Factors</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            The 4 <span className="italic text-[#721011]">P&apos;s</span> of CRM success.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-[1.7] text-[#3f3f3f]/65">
            Four critical success factors determine whether your CRM implementation reaches its full potential.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fourPs.map((p) => (
            <div key={p.title} className="bg-[#fafafa] p-6 text-center border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge">
              <span className="cl-serif italic text-[44px] text-[#721011] leading-none">{p.letter}</span>
              <h3 className="mt-3 cl-serif text-[20px] leading-tight text-[#3f3f3f]">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#3f3f3f]/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
