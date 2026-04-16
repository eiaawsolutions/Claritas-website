import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Implementation | Claritas CRM",
  description:
    "The CRM implementation journey — from manual processes to full optimisation. Learn the 4-stage maturity model and the 4 P's framework.",
};

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
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Implementation
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CRM <span className="text-coral-500">IMPLEMENTATION</span>
            </h1>
            <p className="mt-4 text-lg font-medium italic text-gray-400">
              The adoption of CRM is not an overnight implementation
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              CRM is a journey, not an instantaneous transformation. Companies often expect significant
              results within the first month — but lasting success comes from a structured, phased approach.
              Here is the maturity path most organisations follow.
            </p>
          </div>
        </div>
      </section>

      {/* Maturity Stages */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            CRM MATURITY <span className="text-coral-500">JOURNEY</span>
          </h2>
          <div className="mt-12 space-y-4">
            {stages.map((s) => (
              <div key={s.number} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${s.colour}`}>
                  {s.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 P's */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            THE 4 <span className="text-coral-500">P&apos;s</span> OF CRM SUCCESS
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-sm text-gray-500">
            Four critical success factors determine whether your CRM implementation reaches its full potential.
          </p>
          <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fourPs.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <span className="text-4xl font-extrabold text-coral-500">{p.letter}</span>
                <h3 className="mt-2 text-base font-bold text-dark-900">{p.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            Start your CRM <span className="text-coral-500">journey</span> today
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Our consultants guide you through every stage — from planning to optimisation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact?demo=true" className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
              REQUEST A DEMO <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white">
              READ SUCCESS STORIES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
