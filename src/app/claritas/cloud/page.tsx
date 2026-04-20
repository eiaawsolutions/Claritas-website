"use client";

import { Cloud, Server, Globe, ShieldCheck, Zap } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";

const benefits = [
  { icon: Zap, title: "Accelerated Deployment", desc: "Get up and running in days, not months. No hardware procurement, no server setup — your CRM is ready when you are." },
  { icon: Globe, title: "Access From Anywhere", desc: "Work from any device, any location. Your CRM data is always available through a secure web browser or mobile app." },
  { icon: Server, title: "Automatic Scaling", desc: "Azure automatically scales compute and storage resources to match your needs. Pay only for what you use as your business grows." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Data hosted in ISO 27001 certified Microsoft data centres with encryption at rest and in transit, multi-tenant isolation, and DDoS protection." },
  { icon: Cloud, title: "99.9% Uptime SLA", desc: "Azure guarantees 99.9% availability with automatic failover across geographically distributed data centres. Virtual disaster recovery included." },
  { icon: Server, title: "3x Data Redundancy", desc: "Your mission-critical data is automatically backed up across three separate nodes for real-time high-availability and full redundancy." },
];

const azureComponents = [
  { name: "Compute", desc: "Scalable virtual machines and app services for CRM processing" },
  { name: "SQL Azure", desc: "Fully managed relational database with built-in intelligence" },
  { name: "Storage", desc: "Durable, highly available cloud storage for documents and backups" },
  { name: "CDN", desc: "Global content delivery network for fast page loads worldwide" },
  { name: "AppFabric", desc: "Service bus and access control for secure integrations" },
];

export default function CloudPage() {
  return (
    <SubpageShell
      badge="Cloud Platform"
      title="Claritas Cloud."
      subtitle="Expanding capability, compounding certainty."
      description="Claritas™ Cloud sits on top of Microsoft Azure Platform-as-a-Service (PaaS) to provide unprecedented availability at a fraction of the cost. With data centres across North America, Europe, and Asia, your CRM is always close to your users — delivering greater flexibility, reduced complexity, and transparent cost accounting."
      ctaTitle="Ready to move to the cloud?"
      ctaDescription="Begin with a fourteen-day trial or a private scoping session."
      ctaPrimary={{ label: "Begin Trial", href: "/contact?demo=true" }}
      ctaSecondary={{ label: "Cloud vs On-Premise", href: "/claritas/cloud-vs-on-premise" }}
    >
      <div className="mb-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">The Case for Cloud</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
            Six arguments for moving <span className="italic text-[#721011]">above the server room.</span>
          </h2>
        </div>
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="bg-[#fafafa] p-8 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 cl-serif text-[22px] leading-tight text-[#3f3f3f]">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#721011]" />
            <span className="cl-eyebrow">The Infrastructure</span>
            <span className="h-px w-10 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            Powered by <span className="italic text-[#721011]">Microsoft Azure.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[15px] leading-[1.7] text-[#3f3f3f]/65">
            Five foundational Azure components assembled into a robust, scalable platform of record.
          </p>
        </div>
        <div className="space-y-3 max-w-4xl mx-auto">
          {azureComponents.map((c, ci) => (
            <div key={c.name} className="flex items-start gap-5 bg-[#fafafa] p-5 border border-[#3f3f3f]/[0.06]">
              <span className="cl-serif italic text-[22px] text-[#721011] leading-none shrink-0 mt-0.5">
                {String(ci + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="cl-serif text-[18px] text-[#3f3f3f]">{c.name}</h3>
                <p className="mt-1 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
