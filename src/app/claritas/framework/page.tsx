"use client";

import { Layers, Database, Code2, Headphones } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";
import { useDesignVersion } from "@/config/design-context";

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
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;
  const isV9 = version === "v9";

  return (
    <SubpageShell
      badge="Technical Architecture"
      title={isV9 ? "The Claritas Framework." : isDark ? "Claritas Framework" : "CLARITAS FRAMEWORK"}
      subtitle={isV9 ? "On-demand, secure, reliable — by design." : "On-demand access to your data: Seamless — Secure — Reliable"}
      description="Claritas™ provides hosted applications and data storage with flexible, scalable management of operating expenses aligned to your company's growth. Built on proven Microsoft technologies, the platform delivers enterprise-grade reliability with cloud-native agility."
      ctaTitle="See it in action"
      ctaDescription="Request a private demonstration of the Claritas framework."
      ctaPrimary={{ label: isV9 ? "Request Demonstration" : "REQUEST A DEMO", href: "/contact?demo=true" }}
    >
      <div className="mb-20">
        {isV9 ? (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">Technology Stack</span>
              <span className="h-px w-10 bg-[#8B6F3E]" />
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#1C1A17]">
              Built on <span className="italic text-[#8B6F3E]">proven instruments.</span>
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
            {isDark ? "Technology Stack" : <>TECHNOLOGY <span className="text-coral-500">STACK</span></>}
          </h2>
        )}
        <div className="space-y-3 max-w-4xl mx-auto">
          {techStack.map((t, ti) => (
            <div
              key={t.label}
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
                  {String(ti + 1).padStart(2, "0")}
                </span>
              ) : (
                <span className={isDark ? "mt-0.5 text-blue-500 font-bold text-sm" : "mt-0.5 text-coral-500 font-bold text-sm"}>&#9658;</span>
              )}
              <div>
                <h3 className={isV9 ? "v9-serif text-[18px] text-[#1C1A17]" : isDark ? "text-sm font-semibold text-white" : "text-sm font-bold text-dark-900"}>
                  {t.label}
                </h3>
                <p className={isV9 ? "mt-1 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-1 text-sm text-slate-400 font-light" : "mt-1 text-sm text-gray-500"}>
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {isV9 ? (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">Architecture Pillars</span>
              <span className="h-px w-10 bg-[#8B6F3E]" />
            </div>
            <h2 className="v9-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#1C1A17]">
              Four principles that <span className="italic text-[#8B6F3E]">hold the structure.</span>
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
            {isDark ? "Architecture Pillars" : <>ARCHITECTURE <span className="text-coral-500">PILLARS</span></>}
          </h2>
        )}
        <div className={isV9 ? "grid gap-6 lg:gap-8 sm:grid-cols-2" : isDark ? "mt-16 grid gap-6 sm:grid-cols-2" : "mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2"}>
          {pillars.map((p) => (
            <div
              key={p.title}
              className={
                isV9
                  ? "bg-[#EDE4D3] p-8 lg:p-10 transition-shadow hover:v9-paper-edge"
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
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className={isV9 ? "mt-5 v9-serif text-[22px] leading-tight text-[#1C1A17]" : isDark ? "mt-4 text-base font-semibold text-white" : "mt-4 text-base font-bold text-dark-900"}>
                {p.title}
              </h3>
              <p className={isV9 ? "mt-3 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-2 text-sm leading-relaxed text-slate-400 font-light" : "mt-2 text-sm leading-relaxed text-gray-500"}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
