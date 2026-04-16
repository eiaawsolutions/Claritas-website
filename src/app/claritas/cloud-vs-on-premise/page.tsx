"use client";

import { Cloud, Server } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";
import { useDesignVersion } from "@/config/design-context";

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
  const { version } = useDesignVersion();
  const isV5 = version === "v5";

  return (
    <SubpageShell
      badge="Deployment Options"
      title={isV5 ? "Cloud vs On-Premise" : "CLOUD VS ON-PREMISE"}
      description="Claritas™ CRM offers two deployment models to suit your organisation's needs. Choose cloud for fast deployment and low cost, or on-premise for maximum control and customisation. Both deliver the same powerful CRM capabilities."
      ctaTitle={isV5 ? "Not sure which is right for you?" : "Not sure which is right for you?"}
      ctaDescription="Our team can help you evaluate the best deployment option for your organisation."
      ctaPrimary={{ label: "TALK TO SALES", href: "/contact" }}
      ctaSecondary={{ label: "SEE PRICING", href: "/pricing" }}
    >
      {/* Two deployment cards */}
      <div className={isV5 ? "grid gap-6 sm:grid-cols-2 mb-20" : "grid gap-6 sm:grid-cols-2 mb-16"}>
        <div
          className={
            isV5
              ? "border border-blue-500/30 bg-transparent p-6 sm:p-8"
              : "rounded-2xl border-2 border-coral-200 bg-white p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(232,101,90,0.15)]"
          }
        >
          <div
            className={
              isV5
                ? "flex h-12 w-12 items-center justify-center bg-blue-500/10 text-blue-400"
                : "flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-500"
            }
          >
            <Cloud className="h-6 w-6" />
          </div>
          <h2 className={isV5 ? "mt-4 text-xl font-semibold text-white" : "mt-4 text-xl font-extrabold text-dark-900"}>
            On-Demand (Cloud)
          </h2>
          <p className={isV5 ? "mt-1 text-sm font-medium text-blue-400" : "mt-1 text-sm font-medium text-coral-500"}>
            Recommended
          </p>
          <p className={isV5 ? "mt-4 text-sm leading-relaxed text-slate-400 font-light" : "mt-4 text-sm leading-relaxed text-gray-500"}>
            Accelerate CRM implementation with Claritas&trade; Cloud Edition — fast and affordable.
            Low upfront costs with predictable monthly fees. Internet-based hosting enables access to
            customer information from any location, any device. Always on the latest version with automatic
            updates and 99.9% uptime SLA.
          </p>
        </div>
        <div
          className={
            isV5
              ? "border border-white/[0.06] bg-transparent p-6 sm:p-8"
              : "rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]"
          }
        >
          <div
            className={
              isV5
                ? "flex h-12 w-12 items-center justify-center bg-white/5 text-slate-400"
                : "flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500"
            }
          >
            <Server className="h-6 w-6" />
          </div>
          <h2 className={isV5 ? "mt-4 text-xl font-semibold text-white" : "mt-4 text-xl font-extrabold text-dark-900"}>
            On-Premise
          </h2>
          <p className={isV5 ? "mt-1 text-sm font-medium text-slate-500" : "mt-1 text-sm font-medium text-gray-400"}>
            Enterprise plan
          </p>
          <p className={isV5 ? "mt-4 text-sm leading-relaxed text-slate-400 font-light" : "mt-4 text-sm leading-relaxed text-gray-500"}>
            Suited for organisations needing extensive customisation or tight integration with existing
            on-site systems. This model provides maximum control and security on your system. Data stays
            on your servers, managed by your IT team. Available exclusively on the Enterprise plan.
          </p>
        </div>
      </div>

      {/* Comparison table */}
      <div>
        <h2
          className={
            isV5
              ? "text-center text-3xl md:text-5xl font-light text-white tracking-tighter mb-16"
              : "text-center text-2xl font-bold text-dark-900 sm:text-3xl"
          }
          style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
        >
          {isV5 ? "Side-by-Side Comparison" : <>SIDE-BY-SIDE <span className="text-coral-500">COMPARISON</span></>}
        </h2>
        <div
          className={
            isV5
              ? "mt-10 overflow-hidden border border-white/[0.06] max-w-4xl mx-auto"
              : "mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] max-w-4xl mx-auto"
          }
        >
          {/* Header */}
          <div
            className={
              isV5
                ? "grid grid-cols-3 border-b border-white/[0.06] bg-white/[0.03]"
                : "grid grid-cols-3 border-b border-gray-200 bg-dark-900 text-white"
            }
          >
            <div className={isV5 ? "px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400" : "px-4 py-3 text-xs font-bold uppercase tracking-wider"}>
              Criteria
            </div>
            <div className={isV5 ? "px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500" : "px-4 py-3 text-xs font-bold uppercase tracking-wider text-coral-400"}>
              Cloud
            </div>
            <div className={isV5 ? "px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400" : "px-4 py-3 text-xs font-bold uppercase tracking-wider"}>
              On-Premise
            </div>
          </div>
          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.criteria}
              className={
                isV5
                  ? `grid grid-cols-3 border-b border-white/[0.06] last:border-0 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`
                  : `grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`
              }
            >
              <div className={isV5 ? "px-4 py-3 text-xs font-semibold text-white" : "px-4 py-3 text-xs font-semibold text-dark-900"}>
                {row.criteria}
              </div>
              <div className={isV5 ? "px-4 py-3 text-xs text-slate-400 font-light" : "px-4 py-3 text-xs text-gray-600"}>
                {row.cloud}
              </div>
              <div className={isV5 ? "px-4 py-3 text-xs text-slate-400 font-light" : "px-4 py-3 text-xs text-gray-600"}>
                {row.onPrem}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
