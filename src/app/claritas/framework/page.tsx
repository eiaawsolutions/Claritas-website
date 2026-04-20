"use client";

import { Layers, Database, Code2, Headphones } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";

const techStack = [
  { label: ".NET Framework 4.0", desc: "Enterprise-grade runtime for robust, scalable applications" },
  { label: "C# / WCF / WF", desc: "Windows Communication Foundation and Workflow Foundation for service-oriented architecture" },
  { label: "SQL Server", desc: "SQL Server Reporting Services for powerful, customizable reports and dashboards" },
  { label: "Web 2.0", desc: "Modern web technologies including AJAX, JSON, JavaScript, and jQuery for responsive UX" },
  { label: "Microsoft Azure", desc: "Cloud compute, database, and storage infrastructure for global availability" },
];

const pillars = [
  { icon: Layers, title: "Multi-Tenant Architecture", desc: "Multiple customers share common technology on the latest release, eliminating the need for manual application or infrastructure upgrades. Every customer always runs the most current version." },
  { icon: Database, title: "3x Data Redundancy", desc: "Your mission-critical data is automatically backed up three times across separate nodes, achieving real-time high-availability and full redundancy. Data is hosted in Microsoft GFS Data Centres with state-of-the-art security." },
  { icon: Code2, title: "Service-Oriented Architecture", desc: "Built on SOA principles with WCF for seamless integration with external systems. The modular architecture allows components to be independently updated, scaled, and maintained." },
  { icon: Headphones, title: "Professional Support", desc: "8x5 unlimited technical support via email and hotline included with all plans. Optional 24x7 premium support available. Professional services include onsite support, customization, and training." },
];

export default function FrameworkPage() {
  return (
    <SubpageShell
      badge="Technical Architecture"
      title="The Claritas Framework."
      subtitle="On-demand, secure, reliable — by design."
      description="Claritas™ provides hosted applications and data storage with flexible, scalable management of operating expenses aligned to your company's growth. Built on proven Microsoft technologies, the platform delivers enterprise-grade reliability with cloud-native agility."
      ctaTitle="See it in action"
      ctaDescription="Request a private demonstration of the Claritas framework."
      ctaPrimary={{ label: "Request Demonstration", href: "/contact?demo=true" }}
    >
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">Technology Stack</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            Built on <span className="italic text-[#721011]">proven instruments.</span>
          </h2>
        </div>
        <div className="space-y-3 max-w-4xl mx-auto">
          {techStack.map((t, ti) => (
            <div key={t.label} className="flex items-start gap-5 bg-[#fafafa] p-5 border border-[#3f3f3f]/[0.06]">
              <span className="cl-serif italic text-[22px] text-[#721011] leading-none shrink-0 mt-0.5">
                {String(ti + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="cl-serif text-[18px] text-[#3f3f3f]">{t.label}</h3>
                <p className="mt-1 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">Architecture Pillars</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            Four principles that <span className="italic text-[#721011]">hold the structure.</span>
          </h2>
        </div>
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="bg-[#fafafa] p-8 lg:p-10 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 cl-serif text-[22px] leading-tight text-[#3f3f3f]">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
