import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Server, FileCheck, Trash2, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Security | Claritas CRM",
  description:
    "Enterprise-grade security — ISO 27001 certified data centres, encryption, multi-tenant isolation, audit trails, and disaster recovery.",
};

const sections = [
  {
    icon: Server,
    title: "Physical Data Centre",
    body: "Claritas operates within Microsoft Global Foundation Services data centres with geographic distribution across North America, Europe, and Asia. These world-class facilities include redundancy for power, hardware failure prevention, physical intrusion defence, and network outage mitigation. The same infrastructure hosts Microsoft Online Services like Office 365.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    body: "Protection mechanisms include identity and access management, multi-tenant data isolation (both physical and logical), and encryption of sensitive fields using industry-standard algorithms. SSL/secure HTTP with private key management is available. Network packet filtering minimises spoofing and denial-of-service attacks. Fixed IP address access restrictions are configurable per customer.",
  },
  {
    icon: FileCheck,
    title: "Integrity & Compliance",
    body: "Claritas sits on top of the Microsoft Azure cloud stack, maintaining ISO 27001 certification and Safe Harbor Framework compliance. Geographic data storage location options are offered. Access controls, encryption, availability measures, and privacy protections prevent unauthorised modifications and access to your data.",
  },
  {
    icon: ShieldCheck,
    title: "Availability",
    body: "The cloud infrastructure provides robust availability based on extensive redundancy achieved with virtualisation technology. Virtual disaster recovery with hot-failover capability leverages geographically distributed infrastructure. Automatic health monitoring and failover occur transparently without customer intervention during maintenance — ensuring 99.9% uptime SLA.",
  },
  {
    icon: Eye,
    title: "Accountability & Audit Trails",
    body: "Claritas demonstrates safe operation accountability and traceability through multiple levels of monitoring, logging, and reporting. The audit trail captures all module activities in database logs, providing full visibility into intentional or unintentional data modifications. Every action is traceable to a specific user and timestamp.",
  },
  {
    icon: Server,
    title: "Data Backup & Retention",
    body: "Data replicates across three separate nodes within the cloud for real-time high-availability. Automatic periodic archival and backup optimise system performance. Optional personalised backup extracts data to offsite private storage for an additional layer of protection.",
  },
  {
    icon: Trash2,
    title: "Data Deletion",
    body: "Upon subscription termination, rigorous procedures ensure complete data removal from primary and backup sites. Successful execution of delete operations removes all references to the associated data items. Your data is never retained beyond the agreed retention period.",
  },
  {
    icon: Users,
    title: "Internal Staff Protocols",
    body: "All staff implement high levels of professionalism and integrity. Formal access request processes require client acknowledgement before accessing confidential accounts. Multi-tier security features enable independent malicious activity detection. Background checks and security training are mandatory for all personnel handling customer data.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Security
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CLARITAS <span className="text-coral-500">SECURITY</span>
            </h1>
            <p className="mt-4 text-lg font-medium italic text-gray-400">
              Your application security and data privacy is our utmost priority
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              We take customer confidentiality seriously. Claritas&trade; CRM is built on enterprise-grade
              security infrastructure with multiple layers of protection — from physical data centre security
              to application-level encryption and audit trails.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-dark-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            Questions about <span className="text-coral-500">security</span>?
          </h2>
          <p className="mt-4 text-base text-gray-500">Our team is happy to discuss security requirements and compliance needs.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
            CONTACT US <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
