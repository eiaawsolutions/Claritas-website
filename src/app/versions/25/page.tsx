"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Globe, ServerCog, Eye, ArrowRight, Check, X, Download } from "lucide-react";

/* ──────────────────────────────────────────────
   V25 — TRUST
   Standard architecture, but rearranged for the enterprise IT / legal
   / procurement buyer. Hero leads with compliance, not feature wow.
   Then capabilities, then a side-by-side procurement comparison,
   then pricing, then CTA. No drama. Maximum signal.
   For: CIO, CISO, GC, head of procurement.
   ────────────────────────────────────────────── */

const SKY = "#0ea5e9";
const INK = "#0f172a";
const HUSH = "#64748b";

export default function TrustPage() {
  return (
    <div className="bg-white text-[#0f172a]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <Compliance />
      <Capabilities />
      <Procurement />
      <Pricing />
      <Customers />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-14 z-30 backdrop-blur bg-white/85 border-b border-slate-200">
      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
        <Link href="/versions/25" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <div className="h-7 w-7 rounded-md grid place-items-center text-white text-sm font-bold" style={{ background: SKY }}>C</div>
          Claritas
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
          {["Platform", "Security", "Compliance", "Pricing", "Customers"].map((x) => (
            <Link key={x} href="#" className="hover:text-slate-900">{x}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline text-sm text-slate-600 hover:text-slate-900">Trust Center</Link>
          <Link href="#" className="text-sm bg-slate-900 text-white px-5 py-2 rounded-md font-medium hover:bg-[#0ea5e9]">
            Talk to sales
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-20 pb-20 md:pt-28">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-6 text-[#0ea5e9]">
              <Shield className="h-3.5 w-3.5" />
              Built for institutions that take security as seriously as their customers
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-[-0.035em]">
              The CRM your <span className="text-[#0ea5e9]">CISO</span>, <span className="text-[#0ea5e9]">GC</span>, and <span className="text-[#0ea5e9]">CIO</span> will sign off on.
            </h1>
            <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-xl">
              Claritas is the unified customer platform engineered for enterprise IT requirements: SOC 2 Type II, ISO 27001, PDPA, GDPR. Single tenancy and data residency available on request. Penetration tested annually.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="#" className="bg-slate-900 text-white px-7 py-3.5 rounded-md font-medium hover:bg-[#0ea5e9] inline-flex items-center gap-2">
                Start procurement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#" className="border border-slate-300 px-7 py-3.5 rounded-md font-medium hover:bg-slate-50 inline-flex items-center gap-2">
                <Download className="h-4 w-4" /> Download trust pack (PDF)
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> Security questionnaire ready</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> MSA + DPA available</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> SLA guarantees</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> Audit logs included</span>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5">
          <div className="rounded-2xl border-2 border-slate-200 p-7 bg-gradient-to-br from-sky-50 to-white">
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#0ea5e9] font-bold mb-4">Compliance &amp; certifications</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: "SOC 2 Type II", s: "Audited annually" },
                { l: "ISO 27001:2022", s: "Certified" },
                { l: "PDPA (MY)", s: "Fully compliant" },
                { l: "GDPR (EU)", s: "Fully compliant" },
                { l: "HIPAA-ready", s: "On request" },
                { l: "PCI-DSS L1", s: "Via Stripe" },
              ].map((b) => (
                <div key={b.l} className="border border-slate-200 bg-white rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <div className="text-sm font-semibold">{b.l}</div>
                  </div>
                  <div className="text-[11px] text-slate-500">{b.s}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-slate-200 text-xs text-slate-600">
              All reports available under NDA from the <Link href="#" className="text-[#0ea5e9] underline">Trust Center →</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Compliance() {
  const items = [
    { i: Lock, t: "Encrypted everywhere", c: "AES-256 at rest. TLS 1.3 in transit. Per-tenant encryption keys on enterprise. Bring your own KMS via AWS / Azure." },
    { i: ServerCog, t: "Single tenancy, on request", c: "Shared multi-tenant by default. Single-tenant Postgres + dedicated app instance for enterprise contracts. ap-southeast-1 / eu-west / your region." },
    { i: Eye, t: "Audit logs, by default", c: "Every read, write, delete, and admin action logged. 7-year retention. SIEM-ready exports (Splunk, Datadog, Sumo)." },
    { i: Globe, t: "Data residency", c: "Choose your region: Malaysia (PDPA), Singapore, EU (GDPR), US, or your private cloud. Data never leaves the region you pick." },
    { i: FileCheck, t: "Pentest, annually", c: "External red team engagement every 12 months. Latest report available under NDA. CVE-style disclosure for any finding above CVSS 4.0." },
    { i: Shield, t: "Incident response, 24/7", c: "On-call security engineering. RPO ≤ 1h, RTO ≤ 4h on enterprise. Status page + customer notification within 30 min of any P1." },
  ];
  return (
    <section className="px-6 py-24 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.28em] mb-3 font-bold text-[#0ea5e9]">Trust architecture</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              Enterprise security as the default — not the upgrade.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-base text-slate-600 leading-relaxed">
            Every Claritas deployment ships with the controls below included. No security paywall. No "Enterprise+" bundle for the basics every modern CRM should have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((it) => (
            <div key={it.t} className="bg-white border border-slate-200 p-7 rounded-lg hover:border-[#0ea5e9] transition">
              <it.i className="h-6 w-6 text-[#0ea5e9] mb-4" />
              <div className="font-semibold text-lg">{it.t}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{it.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="px-6 py-24 border-b border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.28em] mb-3 font-bold text-[#0ea5e9]">The platform</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Marketing. Sales. Service. <span className="text-slate-400">One platform of record.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Marketing", c: "Audiences drawn from a unified record. Every send measured against the customer's full journey, not the campaign's window." },
            { t: "Sales", c: "Pipeline as discipline. Forecasts you can defend in any board meeting. AI-assisted, never AI-replaced." },
            { t: "Service", c: "Resolution as the only metric that holds. Every ticket, customer, and history in one elegant timeline." },
          ].map((it) => (
            <div key={it.t} className="border border-slate-200 p-7 rounded-lg">
              <div className="text-xl font-semibold">{it.t}</div>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{it.c}</p>
              <Link href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0ea5e9]">
                Read the brief <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Procurement() {
  const rows = [
    ["SOC 2 Type II report", "Available on request", true, "Provided in 24h under NDA"],
    ["ISO 27001:2022 certificate", "Available", true, "Latest issued Jan 2026"],
    ["DPA (Data Processing Addendum)", "Standard", true, "Pre-signed, our paper or yours"],
    ["MSA (Master Services Agreement)", "Standard or bespoke", true, "60-day legal cycle typical"],
    ["Single tenancy", "Enterprise tier", true, "Dedicated DB + app, ap-southeast-1"],
    ["Data residency selection", "Enterprise tier", true, "MY · SG · EU · US · private cloud"],
    ["Self-hosted deployment", "Enterprise tier", true, "On-prem, VPC, or air-gapped"],
    ["SAML SSO + SCIM provisioning", "All tiers", true, "Okta · Azure AD · OneLogin · Google"],
    ["Custom audit log retention", "Up to 7 years", true, "SIEM exports included"],
    ["24/7 P1 support with SLA", "Enterprise tier", true, "1-hour response, 4-hour resolution"],
  ];
  return (
    <section className="px-6 py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.28em] mb-3 font-bold text-[#0ea5e9]">For procurement</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Procurement-ready, on day one.</h2>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-600">
              <tr>
                <th className="text-left p-4 font-semibold" style={{ width: "32%" }}>Requirement</th>
                <th className="text-left p-4 font-semibold" style={{ width: "22%" }}>Availability</th>
                <th className="text-center p-4 font-semibold" style={{ width: "10%" }}>Included</th>
                <th className="text-left p-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-200">
                  <td className="p-4 font-medium">{r[0]}</td>
                  <td className="p-4 text-slate-600">{r[1]}</td>
                  <td className="p-4 text-center">{r[2] ? <Check className="h-4 w-4 text-emerald-600 inline" /> : <X className="h-4 w-4 text-red-500 inline" />}</td>
                  <td className="p-4 text-slate-500">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center text-sm text-slate-600">
          Need something not on this list? <Link href="#" className="text-[#0ea5e9] font-medium">Talk to enterprise sales →</Link>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { n: "Growth", p: "RM 49", per: "per seat / month", desc: "For revenue teams getting started.", feats: ["SOC 2 + ISO 27001", "SAML SSO", "Audit logs (1yr)", "Email support"], cta: "Start free" },
    { n: "Scale", p: "RM 99", per: "per seat / month", desc: "For ops-led teams scaling.", feats: ["Everything in Growth", "SCIM provisioning", "Audit logs (3yr)", "Priority support · 4h SLA"], cta: "Start free", featured: true },
    { n: "Enterprise", p: "Custom", per: "annual contract", desc: "Institutions with serious requirements.", feats: ["Single tenancy + residency", "Self-host option", "Audit logs (7yr) + SIEM", "24/7 P1 + dedicated CSM"], cta: "Talk to sales" },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.28em] mb-3 font-bold text-[#0ea5e9]">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Transparent. Predictable. <span className="text-slate-400">Audit-ready.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.n} className={`relative rounded-lg p-8 ${t.featured ? "border-2 border-[#0ea5e9] bg-sky-50/30" : "border border-slate-200"}`}>
              {t.featured && <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-wider bg-[#0ea5e9] text-white px-3 py-1 rounded-full font-bold">Most chosen</div>}
              <div className="text-xl font-semibold">{t.n}</div>
              <div className="text-sm text-slate-500 mt-1">{t.desc}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{t.p}</span>
                <span className="text-sm text-slate-500">{t.per}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="#" className={`mt-7 block text-center rounded-md py-3 text-sm font-medium ${t.featured ? "bg-[#0ea5e9] text-white" : "border border-slate-300 hover:bg-slate-50"}`}>
                {t.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section className="px-6 py-20 border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-xs uppercase tracking-[0.28em] mb-7 font-bold text-[#0ea5e9] text-center">
          Trusted by 247 enterprise customers, including
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {["FGV Holdings", "Singtel", "Nando's", "Estate 123", "Intel", "Pfizer", "Astro", "Maxis", "Petronas"].map((l) => (
            <span key={l} className="text-base font-semibold text-slate-400 hover:text-slate-700 transition tracking-tight">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-24 text-center bg-slate-900 text-white">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
        Procurement-ready. On day one.
      </h2>
      <p className="mt-6 text-lg text-white/65 max-w-xl mx-auto">
        Download the trust pack, send your security questionnaire, or talk to enterprise sales. Most procurements close in 60 days.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="#" className="bg-white text-slate-900 px-7 py-3.5 rounded-md font-medium hover:bg-[#0ea5e9] hover:text-white inline-flex items-center justify-center gap-2">
          <Download className="h-4 w-4" /> Download trust pack
        </Link>
        <Link href="#" className="border border-white/20 px-7 py-3.5 rounded-md font-medium hover:bg-white/10">
          Talk to enterprise sales
        </Link>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-[1400px] px-6 py-14 grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-semibold">
            <div className="h-7 w-7 rounded-md grid place-items-center text-white text-sm font-bold" style={{ background: SKY }}>C</div>
            Claritas
          </div>
          <p className="mt-4 text-slate-600 max-w-xs">Procurement-ready CRM. Trusted by 247 enterprises across Asia-Pacific.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-slate-500">
            <span className="px-2 py-1 border border-slate-300 rounded">SOC 2</span>
            <span className="px-2 py-1 border border-slate-300 rounded">ISO 27001</span>
            <span className="px-2 py-1 border border-slate-300 rounded">PDPA</span>
            <span className="px-2 py-1 border border-slate-300 rounded">GDPR</span>
          </div>
        </div>
        {[
          { h: "Trust Center", l: ["SOC 2 report", "ISO 27001 cert", "DPA · MSA", "Penetration tests", "Status"] },
          { h: "Platform", l: ["Marketing", "Sales", "Service", "Pricing"] },
          { h: "Customers", l: ["Case studies", "Industries", "Migration"] },
          { h: "Company", l: ["About", "Press", "Careers", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-medium">{c.h}</div>
            <ul className="mt-3 space-y-2 text-slate-600">{c.l.map((x) => <li key={x}><Link href="#" className="hover:text-slate-900">{x}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex justify-between text-xs text-slate-500">
          <span>© Claritas Inc. 2026 · ISO 27001:2022 · SOC 2 Type II</span>
          <span>V25 · Trust</span>
        </div>
      </div>
    </footer>
  );
}
