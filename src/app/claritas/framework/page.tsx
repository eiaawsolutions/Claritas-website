import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Database, Code2, Headphones, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Claritas Framework | Technical Architecture",
  description:
    "Claritas CRM framework — built on .NET, multi-tenant architecture, Azure cloud stack, with 3x data redundancy and 8x5 support.",
};

const techStack = [
  { label: ".NET Framework 4.0", desc: "Enterprise-grade runtime for robust, scalable applications" },
  { label: "C# / WCF / WF", desc: "Windows Communication Foundation and Workflow Foundation for service-oriented architecture" },
  { label: "SQL Server", desc: "SQL Server Reporting Services for powerful, customizable reports and dashboards" },
  { label: "Web 2.0", desc: "Modern web technologies including AJAX, JSON, JavaScript, and jQuery for responsive UX" },
  { label: "Microsoft Azure", desc: "Cloud compute, database, and storage infrastructure for global availability" },
];

const pillars = [
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    desc: "Multiple customers share common technology on the latest release, eliminating the need for manual application or infrastructure upgrades. Every customer always runs the most current version.",
  },
  {
    icon: Database,
    title: "3x Data Redundancy",
    desc: "Your mission-critical data is automatically backed up three times across separate nodes, achieving real-time high-availability and full redundancy. Data is hosted in Microsoft GFS Data Centres with state-of-the-art security.",
  },
  {
    icon: Code2,
    title: "Service-Oriented Architecture",
    desc: "Built on SOA principles with WCF for seamless integration with external systems. The modular architecture allows components to be independently updated, scaled, and maintained.",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    desc: "8x5 unlimited technical support via email and hotline included with all plans. Optional 24x7 premium support available. Professional services include onsite support, customization, and training.",
  },
];

export default function FrameworkPage() {
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Technical Architecture
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CLARITAS <span className="text-coral-500">FRAMEWORK</span>
            </h1>
            <p className="mt-4 text-lg font-medium italic text-gray-400">
              On-demand access to your data: Seamless &mdash; Secure &mdash; Reliable
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Claritas&trade; provides hosted applications and data storage with flexible, scalable management
              of operating expenses aligned to your company&apos;s growth. Built on proven Microsoft technologies,
              the platform delivers enterprise-grade reliability with cloud-native agility.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            TECHNOLOGY <span className="text-coral-500">STACK</span>
          </h2>
          <div className="mt-10 space-y-3">
            {techStack.map((t) => (
              <div key={t.label} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <span className="mt-0.5 text-coral-500 font-bold text-sm">&#9658;</span>
                <div>
                  <h3 className="text-sm font-bold text-dark-900">{t.label}</h3>
                  <p className="mt-1 text-sm text-gray-500">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            ARCHITECTURE <span className="text-coral-500">PILLARS</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-dark-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            See it in <span className="text-coral-500">action</span>
          </h2>
          <p className="mt-4 text-base text-gray-500">Request a demo to experience the Claritas framework firsthand.</p>
          <Link href="/contact?demo=true" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
            REQUEST A DEMO <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
