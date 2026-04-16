import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Server, Globe, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Claritas Cloud | CRM on Microsoft Azure",
  description:
    "Claritas CRM runs on Microsoft Azure PaaS — enterprise-grade cloud with global data centres, 99.9% SLA, and automatic backups.",
};

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
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Cloud Platform
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CLARITAS <span className="text-coral-500">CLOUD</span>
            </h1>
            <p className="mt-4 text-lg font-medium italic text-gray-400">
              Expanding software capabilities and computing power
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Claritas&trade; Cloud sits on top of Microsoft Azure Platform-as-a-Service (PaaS) to provide you unprecedented
              availability at a fraction of the cost. With data centres across North America, Europe, and Asia, your CRM
              is always close to your users — delivering greater flexibility, reduced complexity, and transparent cost accounting.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            WHY <span className="text-coral-500">CLOUD?</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-dark-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Azure Stack */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-dark-900 sm:text-3xl">
            POWERED BY <span className="text-coral-500">MICROSOFT AZURE</span>
          </h2>
          <p className="mt-4 text-center text-sm text-gray-500">
            Claritas leverages five foundational Azure components for a robust, scalable CRM platform.
          </p>
          <div className="mt-10 space-y-3">
            {azureComponents.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 text-coral-500 font-bold text-sm">&#9658;</span>
                <div>
                  <h3 className="text-sm font-bold text-dark-900">{c.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            Ready to move to the <span className="text-coral-500">cloud</span>?
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Get started with a free 14-day trial. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?demo=true"
              className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            >
              START FREE TRIAL <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/claritas/cloud-vs-on-premise"
              className="inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
            >
              CLOUD VS ON-PREMISE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
