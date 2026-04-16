import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Server, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud vs On-Premise | Claritas CRM",
  description:
    "Compare Claritas CRM cloud and on-premise deployment — cost, control, scalability, and security side by side.",
};

const comparisons = [
  { criteria: "Upfront Cost", cloud: "Low — no hardware, no server setup", onPrem: "High — servers, licenses, infrastructure" },
  { criteria: "Monthly Cost", cloud: "Predictable per-user subscription", onPrem: "Maintenance, power, IT staff overhead" },
  { criteria: "Deployment Time", cloud: "Days — ready when you are", onPrem: "Weeks to months — procurement and setup" },
  { criteria: "Scalability", cloud: "Automatic — Azure scales on demand", onPrem: "Manual — requires hardware upgrades" },
  { criteria: "Access", cloud: "Any device, any location, any time", onPrem: "On-site or via VPN" },
  { criteria: "Security", cloud: "ISO 27001 certified Azure data centres", onPrem: "Your IT team manages security" },
  { criteria: "Backups", cloud: "Automatic 3x redundancy", onPrem: "Your responsibility to configure" },
  { criteria: "Updates", cloud: "Automatic — always latest version", onPrem: "Manual — scheduled downtime required" },
  { criteria: "Customisation", cloud: "Configuration-based, API access", onPrem: "Full control, deep customisation" },
  { criteria: "Data Control", cloud: "Hosted by Microsoft Azure", onPrem: "Data stays on your servers" },
  { criteria: "Disaster Recovery", cloud: "Built-in hot-failover across regions", onPrem: "Your DR plan and infrastructure" },
  { criteria: "Availability", cloud: "99.9% SLA guaranteed", onPrem: "Depends on your infrastructure" },
];

export default function CloudVsOnPremisePage() {
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Deployment Options
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CLOUD VS <span className="text-coral-500">ON-PREMISE</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Claritas&trade; CRM offers two deployment models to suit your organisation&apos;s needs. Choose
              cloud for fast deployment and low cost, or on-premise for maximum control and customisation.
              Both deliver the same powerful CRM capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Two cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-coral-200 bg-white p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(232,101,90,0.15)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                <Cloud className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-extrabold text-dark-900">On-Demand (Cloud)</h2>
              <p className="mt-1 text-sm font-medium text-coral-500">Recommended</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Accelerate CRM implementation with Claritas&trade; Cloud Edition — fast and affordable.
                Low upfront costs with predictable monthly fees. Internet-based hosting enables access to
                customer information from any location, any device. Always on the latest version with automatic
                updates and 99.9% uptime SLA.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
                <Server className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-extrabold text-dark-900">On-Premise</h2>
              <p className="mt-1 text-sm font-medium text-gray-400">Enterprise plan</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Suited for organisations needing extensive customisation or tight integration with existing
                on-site systems. This model provides maximum control and security on your system. Data stays
                on your servers, managed by your IT team. Available exclusively on the Enterprise plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            SIDE-BY-SIDE <span className="text-coral-500">COMPARISON</span>
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-200 bg-dark-900 text-white">
              <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider">Criteria</div>
              <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-coral-400">Cloud</div>
              <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider">On-Premise</div>
            </div>
            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.criteria}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="px-4 py-3 text-xs font-semibold text-dark-900">{row.criteria}</div>
                <div className="px-4 py-3 text-xs text-gray-600">{row.cloud}</div>
                <div className="px-4 py-3 text-xs text-gray-600">{row.onPrem}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            Not sure which is <span className="text-coral-500">right for you</span>?
          </h2>
          <p className="mt-4 text-base text-gray-500">Our team can help you evaluate the best deployment option for your organisation.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
              TALK TO SALES <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white">
              SEE PRICING
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
