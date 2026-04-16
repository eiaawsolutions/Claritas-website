"use client";

import { ShieldCheck, Lock, Eye, Server, FileCheck, Trash2, Users } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";
import { useDesignVersion } from "@/config/design-context";

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
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  return (
    <SubpageShell
      badge="Security"
      title={isDark ? "Claritas Security" : "CLARITAS SECURITY"}
      subtitle="Your application security and data privacy is our utmost priority"
      description="We take customer confidentiality seriously. Claritas™ CRM is built on enterprise-grade security infrastructure with multiple layers of protection — from physical data centre security to application-level encryption and audit trails."
      ctaTitle={isDark ? "Questions about security?" : "Questions about security?"}
      ctaDescription="Our team is happy to discuss security requirements and compliance needs."
      ctaPrimary={{ label: "CONTACT US", href: "/contact" }}
    >
      <div className={isDark ? "space-y-4 max-w-4xl mx-auto" : "space-y-4 max-w-4xl mx-auto"}>
        {sections.map((s) => (
          <div
            key={s.title}
            className={
              isV5
                ? "border border-white/[0.06] bg-transparent p-6 sm:p-8"
                : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            }
          >
            <div className="flex items-start gap-4">
              <div
                className={
                  isV5
                    ? "flex h-10 w-10 shrink-0 items-center justify-center bg-blue-500/10 text-blue-400"
                    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-50 text-coral-500"
                }
              >
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className={isDark ? "text-base font-semibold text-white" : "text-base font-bold text-dark-900"}>
                  {s.title}
                </h3>
                <p className={isDark ? "mt-2 text-sm leading-relaxed text-slate-400 font-light" : "mt-2 text-sm leading-relaxed text-gray-500"}>
                  {s.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SubpageShell>
  );
}
