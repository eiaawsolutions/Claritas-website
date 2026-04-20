"use client";

import { Cloud, Server } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";

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
    <SubpageShell
      badge="Deployment Options"
      title="Cloud or On-Premise?"
      subtitle="Two deployment paths, one standard of discipline."
      description="Claritas™ CRM offers two deployment models to suit your organisation's needs. Choose cloud for rapid deployment and predictable economics, or on-premise for maximum control and customisation. Both deliver the same capabilities."
      ctaTitle="Not sure which is right for you?"
      ctaDescription="Our team will help you evaluate the optimal deployment path for your organisation."
      ctaPrimary={{ label: "Talk to Sales", href: "/contact" }}
      ctaSecondary={{ label: "Review Pricing", href: "/pricing" }}
    >
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 mb-20">
        <div className="bg-[#fafafa] p-8 lg:p-10 cl-paper-edge ring-1 ring-[#721011]/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
            <Cloud className="h-6 w-6" />
          </div>
          <h2 className="mt-6 cl-serif text-[28px] leading-tight text-[#3f3f3f]">
            On-Demand (Cloud)
          </h2>
          <p className="mt-2 cl-eyebrow text-[10px]">Recommended</p>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#3f3f3f]/70">
            Accelerate CRM implementation with Claritas&trade; Cloud Edition. Low upfront cost, predictable monthly fees, access from any location, always on the latest version, 99.9% uptime SLA.
          </p>
        </div>
        <div className="bg-[#fafafa] p-8 lg:p-10 border border-[#3f3f3f]/[0.06]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f3f3f]/10 text-[#3f3f3f]/70 border border-[#3f3f3f]/20">
            <Server className="h-6 w-6" />
          </div>
          <h2 className="mt-6 cl-serif text-[28px] leading-tight text-[#3f3f3f]">
            On-Premise
          </h2>
          <p className="mt-2 cl-eyebrow text-[10px] text-[#3f3f3f]/60">Enterprise Plan</p>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#3f3f3f]/70">
            For organisations requiring deep customisation, tight integration with on-site systems, or data residency on client infrastructure. Maximum control, managed by your IT team.
          </p>
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">Side by Side</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            Twelve criteria, <span className="italic text-[#721011]">two paths.</span>
          </h2>
        </div>
        <div className="overflow-hidden bg-[#fafafa] max-w-4xl mx-auto border border-[#3f3f3f]/[0.06]">
          <div className="grid grid-cols-3 border-b border-[#3f3f3f]/10 bg-[#3f3f3f] text-white">
            <div className="px-5 py-4 cl-eyebrow text-[10px] text-white/60">Criteria</div>
            <div className="px-5 py-4 cl-eyebrow text-[10px] text-[#d4696a]">Cloud</div>
            <div className="px-5 py-4 cl-eyebrow text-[10px] text-white/60">On-Premise</div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.criteria}
              className={`grid grid-cols-3 border-b border-[#3f3f3f]/10 last:border-0 ${i % 2 === 0 ? "bg-[#fafafa]" : "bg-white"}`}
            >
              <div className="px-5 py-4 cl-serif text-[14px] text-[#3f3f3f]">
                {row.criteria}
              </div>
              <div className="px-5 py-4 text-[13px] leading-[1.6] text-[#3f3f3f]/75">
                {row.cloud}
              </div>
              <div className="px-5 py-4 text-[13px] leading-[1.6] text-[#3f3f3f]/75">
                {row.onPrem}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
