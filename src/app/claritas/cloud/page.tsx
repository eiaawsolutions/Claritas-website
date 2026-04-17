"use client";

import { Cloud, Server, Globe, ShieldCheck, Zap } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";
import { useDesignVersion } from "@/config/design-context";

const benefits = [
  {
    icon: Zap,
    title: "Accelerated Deployment",
    desc: "Get up and running in days, not months. No hardware procurement, no server setup — your CRM is ready when you are.",
  },
  {
    icon: Globe,
    title: "Access From Anywhere",
    desc: "Work from any device, any location. Your CRM data is always available through a secure web browser or mobile app.",
  },
  {
    icon: Server,
    title: "Automatic Scaling",
    desc: "Azure automatically scales compute and storage resources to match your needs. Pay only for what you use as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Data hosted in ISO 27001 certified Microsoft data centres with encryption at rest and in transit, multi-tenant isolation, and DDoS protection.",
  },
  {
    icon: Cloud,
    title: "99.9% Uptime SLA",
    desc: "Azure guarantees 99.9% availability with automatic failover across geographically distributed data centres. Virtual disaster recovery included.",
  },
  {
    icon: Server,
    title: "3x Data Redundancy",
    desc: "Your mission-critical data is automatically backed up across three separate nodes for real-time high-availability and full redundancy.",
  },
];

const azureComponents = [
  { name: "Compute", desc: "Scalable virtual machines and app services for CRM processing" },
  { name: "SQL Azure", desc: "Fully managed relational database with built-in intelligence" },
  { name: "Storage", desc: "Durable, highly available cloud storage for documents and backups" },
  { name: "CDN", desc: "Global content delivery network for fast page loads worldwide" },
  { name: "AppFabric", desc: "Service bus and access control for secure integrations" },
];

export default function CloudPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;
  const isV9 = version === "v9";

  return (
    <SubpageShell
      badge="Cloud Platform"
      title={isV9 ? "Claritas Cloud." : isDark ? "Claritas Cloud" : "CLARITAS CLOUD"}
      subtitle={isV9 ? "Expanding capability, compounding certainty." : "Expanding software capabilities and computing power"}
      description="Claritas™ Cloud sits on top of Microsoft Azure Platform-as-a-Service (PaaS) to provide unprecedented availability at a fraction of the cost. With data centres across North America, Europe, and Asia, your CRM is always close to your users — delivering greater flexibility, reduced complexity, and transparent cost accounting."
      ctaTitle="Ready to move to the cloud?"
      ctaDescription="Begin with a fourteen-day trial or a private scoping session."
      ctaPrimary={{ label: isV9 ? "Begin Trial" : "START FREE TRIAL", href: "/contact?demo=true" }}
      ctaSecondary={{ label: isV9 ? "Cloud vs On-Premise" : "CLOUD VS ON-PREMISE", href: "/claritas/cloud-vs-on-premise" }}
    >
      {/* Benefits Grid */}
      <div className="mb-20">
        {isV9 ? (
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">The Case for Cloud</span>
              <span className="h-px w-10 bg-[#8B6F3E]" />
            </div>
            <h2 className="v9-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
              Six arguments for moving <span className="italic text-[#8B6F3E]">above the server room.</span>
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
            {isDark ? "Why Cloud?" : <>WHY <span className="text-coral-500">CLOUD?</span></>}
          </h2>
        )}
        <div className={isV9 ? "grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3" : isDark ? "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
          {benefits.map((b) => (
            <div
              key={b.title}
              className={
                isV9
                  ? "bg-[#EDE4D3] p-8 transition-shadow hover:v9-paper-edge"
                  : isV5
                  ? "border border-white/[0.06] bg-transparent p-6"
                  : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              }
            >
              <div
                className={
                  isV9
                    ? "flex h-11 w-11 items-center justify-center rounded-full bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20"
                    : isV5
                    ? "flex h-10 w-10 items-center justify-center bg-blue-500/10 text-blue-400"
                    : "flex h-10 w-10 items-center justify-center rounded-xl bg-coral-50 text-coral-500"
                }
              >
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className={isV9 ? "mt-5 v9-serif text-[22px] leading-tight text-[#1C1A17]" : isDark ? "mt-4 text-base font-semibold text-white" : "mt-4 text-base font-bold text-dark-900"}>
                {b.title}
              </h3>
              <p className={isV9 ? "mt-3 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-2 text-sm leading-relaxed text-slate-400 font-light" : "mt-2 text-sm leading-relaxed text-gray-500"}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Azure Stack */}
      <div>
        {isV9 ? (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">The Infrastructure</span>
              <span className="h-px w-10 bg-[#8B6F3E]" />
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#1C1A17]">
              Powered by <span className="italic text-[#8B6F3E]">Microsoft Azure.</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[15px] leading-[1.7] text-[#1C1A17]/65">
              Five foundational Azure components assembled into a robust, scalable platform of record.
            </p>
          </div>
        ) : (
          <>
            <h2
              className={
                isV5
                  ? "text-center text-3xl md:text-5xl font-light text-white tracking-tighter mb-16"
                  : "text-center text-2xl font-bold text-dark-900 sm:text-3xl"
              }
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isDark ? "Powered by Microsoft Azure" : <>POWERED BY <span className="text-coral-500">MICROSOFT AZURE</span></>}
            </h2>
            <p className={isDark ? "mt-4 text-center text-sm text-slate-500 font-light" : "mt-4 text-center text-sm text-gray-500"}>
              Claritas leverages five foundational Azure components for a robust, scalable CRM platform.
            </p>
          </>
        )}
        <div className={isV9 ? "space-y-3 max-w-4xl mx-auto" : "mt-10 space-y-3 max-w-4xl mx-auto"}>
          {azureComponents.map((c, ci) => (
            <div
              key={c.name}
              className={
                isV9
                  ? "flex items-start gap-5 bg-[#EDE4D3] p-5"
                  : isV5
                  ? "flex items-start gap-4 border border-white/[0.06] bg-transparent p-4"
                  : "flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              }
            >
              {isV9 ? (
                <span className="v9-serif italic text-[22px] text-[#8B6F3E] leading-none shrink-0 mt-0.5">
                  {String(ci + 1).padStart(2, "0")}
                </span>
              ) : (
                <span className={isDark ? "mt-0.5 text-blue-500 font-bold text-sm" : "mt-0.5 text-coral-500 font-bold text-sm"}>&#9658;</span>
              )}
              <div>
                <h3 className={isV9 ? "v9-serif text-[18px] text-[#1C1A17]" : isDark ? "text-sm font-semibold text-white" : "text-sm font-bold text-dark-900"}>
                  {c.name}
                </h3>
                <p className={isV9 ? "mt-1 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-1 text-sm text-slate-400 font-light" : "mt-1 text-sm text-gray-500"}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
