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
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;
  const isV9 = version === "v9";

  return (
    <SubpageShell
      badge="Deployment Options"
      title={isV9 ? "Cloud or On-Premise?" : isDark ? "Cloud vs On-Premise" : "CLOUD VS ON-PREMISE"}
      subtitle={isV9 ? "Two deployment paths, one standard of discipline." : undefined}
      description="Claritas™ CRM offers two deployment models to suit your organisation's needs. Choose cloud for rapid deployment and predictable economics, or on-premise for maximum control and customisation. Both deliver the same capabilities."
      ctaTitle="Not sure which is right for you?"
      ctaDescription="Our team will help you evaluate the optimal deployment path for your organisation."
      ctaPrimary={{ label: isV9 ? "Talk to Sales" : "TALK TO SALES", href: "/contact" }}
      ctaSecondary={{ label: isV9 ? "Review Pricing" : "SEE PRICING", href: "/pricing" }}
    >
      {/* Two deployment cards */}
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 mb-20">
        <div
          className={
            isV9
              ? "bg-[#EDE4D3] p-8 lg:p-10 v9-paper-edge ring-1 ring-[#8B6F3E]/30"
              : isV5
              ? "border border-blue-500/30 bg-transparent p-6 sm:p-8"
              : "rounded-2xl border-2 border-coral-200 bg-white p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(232,101,90,0.15)]"
          }
        >
          <div
            className={
              isV9
                ? "flex h-12 w-12 items-center justify-center rounded-full bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20"
                : isV5
                ? "flex h-12 w-12 items-center justify-center bg-blue-500/10 text-blue-400"
                : "flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-500"
            }
          >
            <Cloud className="h-6 w-6" />
          </div>
          <h2 className={isV9 ? "mt-6 v9-serif text-[28px] leading-tight text-[#1C1A17]" : isDark ? "mt-4 text-xl font-semibold text-white" : "mt-4 text-xl font-extrabold text-dark-900"}>
            On-Demand (Cloud)
          </h2>
          <p className={isV9 ? "mt-2 v9-eyebrow text-[10px]" : isDark ? "mt-1 text-sm font-medium text-blue-400" : "mt-1 text-sm font-medium text-coral-500"}>
            Recommended
          </p>
          <p className={isV9 ? "mt-5 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-4 text-sm leading-relaxed text-slate-400 font-light" : "mt-4 text-sm leading-relaxed text-gray-500"}>
            Accelerate CRM implementation with Claritas&trade; Cloud Edition. Low upfront cost, predictable monthly fees, access from any location, always on the latest version, 99.9% uptime SLA.
          </p>
        </div>
        <div
          className={
            isV9
              ? "bg-[#EDE4D3] p-8 lg:p-10"
              : isV5
              ? "border border-white/[0.06] bg-transparent p-6 sm:p-8"
              : "rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]"
          }
        >
          <div
            className={
              isV9
                ? "flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1A17]/10 text-[#1C1A17]/70 border border-[#1C1A17]/20"
                : isV5
                ? "flex h-12 w-12 items-center justify-center bg-white/5 text-slate-400"
                : "flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500"
            }
          >
            <Server className="h-6 w-6" />
          </div>
          <h2 className={isV9 ? "mt-6 v9-serif text-[28px] leading-tight text-[#1C1A17]" : isDark ? "mt-4 text-xl font-semibold text-white" : "mt-4 text-xl font-extrabold text-dark-900"}>
            On-Premise
          </h2>
          <p className={isV9 ? "mt-2 v9-eyebrow text-[10px] text-[#1C1A17]/60" : isDark ? "mt-1 text-sm font-medium text-slate-500" : "mt-1 text-sm font-medium text-gray-400"}>
            Enterprise Plan
          </p>
          <p className={isV9 ? "mt-5 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-4 text-sm leading-relaxed text-slate-400 font-light" : "mt-4 text-sm leading-relaxed text-gray-500"}>
            For organisations requiring deep customisation, tight integration with on-site systems, or data residency on client infrastructure. Maximum control, managed by your IT team.
          </p>
        </div>
      </div>

      {/* Comparison table */}
      <div>
        {isV9 ? (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">Side by Side</span>
              <span className="h-px w-10 bg-[#8B6F3E]" />
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#1C1A17]">
              Twelve criteria, <span className="italic text-[#8B6F3E]">two paths.</span>
            </h2>
          </div>
        ) : (
          <h2
            className={
              isV5
                ? "text-center text-3xl md:text-5xl font-light text-white tracking-tighter mb-16"
                : "text-center text-2xl font-bold text-dark-900 sm:text-3xl"
            }
            style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isDark ? "Side-by-Side Comparison" : <>SIDE-BY-SIDE <span className="text-coral-500">COMPARISON</span></>}
          </h2>
        )}
        <div
          className={
            isV9
              ? "overflow-hidden bg-[#EDE4D3] max-w-4xl mx-auto"
              : isV5
              ? "mt-10 overflow-hidden border border-white/[0.06] max-w-4xl mx-auto"
              : "mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] max-w-4xl mx-auto"
          }
        >
          {/* Header */}
          <div
            className={
              isV9
                ? "grid grid-cols-3 border-b border-[#1C1A17]/10 bg-[#1C1A17] text-[#F7F1E8]"
                : isV5
                ? "grid grid-cols-3 border-b border-white/[0.06] bg-white/[0.03]"
                : "grid grid-cols-3 border-b border-gray-200 bg-dark-900 text-white"
            }
          >
            <div className={isV9 ? "px-5 py-4 v9-eyebrow text-[10px] text-[#F7F1E8]/60" : isDark ? "px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400" : "px-4 py-3 text-xs font-bold uppercase tracking-wider"}>
              Criteria
            </div>
            <div className={isV9 ? "px-5 py-4 v9-eyebrow text-[10px] text-[#B89968]" : isDark ? "px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500" : "px-4 py-3 text-xs font-bold uppercase tracking-wider text-coral-400"}>
              Cloud
            </div>
            <div className={isV9 ? "px-5 py-4 v9-eyebrow text-[10px] text-[#F7F1E8]/60" : isDark ? "px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400" : "px-4 py-3 text-xs font-bold uppercase tracking-wider"}>
              On-Premise
            </div>
          </div>
          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.criteria}
              className={
                isV9
                  ? `grid grid-cols-3 border-b border-[#1C1A17]/10 last:border-0 ${i % 2 === 0 ? "bg-[#EDE4D3]" : "bg-[#F7F1E8]"}`
                  : isV5
                  ? `grid grid-cols-3 border-b border-white/[0.06] last:border-0 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`
                  : `grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`
              }
            >
              <div className={isV9 ? "px-5 py-4 v9-serif text-[14px] text-[#1C1A17]" : isDark ? "px-4 py-3 text-xs font-semibold text-white" : "px-4 py-3 text-xs font-semibold text-dark-900"}>
                {row.criteria}
              </div>
              <div className={isV9 ? "px-5 py-4 text-[13px] leading-[1.6] text-[#1C1A17]/75" : isDark ? "px-4 py-3 text-xs text-slate-400 font-light" : "px-4 py-3 text-xs text-gray-600"}>
                {row.cloud}
              </div>
              <div className={isV9 ? "px-5 py-4 text-[13px] leading-[1.6] text-[#1C1A17]/75" : isDark ? "px-4 py-3 text-xs text-slate-400 font-light" : "px-4 py-3 text-xs text-gray-600"}>
                {row.onPrem}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
