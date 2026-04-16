"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Quote } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

/* ────────────────────────────────────────────
   Industry categories with client logos
   ──────────────────────────────────────────── */

interface Client {
  name: string;
  logo?: string; // path in /public/clients/
  caseStudyId?: string; // links to detailed case study modal
}

interface Industry {
  name: string;
  clients: Client[];
}

const industries: Industry[] = [
  {
    name: "Diversified Business",
    clients: [{ name: "FGV", logo: "/clients/fgv.png", caseStudyId: "fgv" }],
  },
  {
    name: "Retail & Franchise",
    clients: [
      { name: "Nando's", logo: "/clients/nandos.png" },
      { name: "Room Service Deliveries", caseStudyId: "rsd" },
    ],
  },
  {
    name: "Pharmaceutical",
    clients: [
      { name: "Pfizer", logo: "/clients/pfizer.png", caseStudyId: "pfizer" },
      { name: "Zuellig Pharma", caseStudyId: "zuellig" },
    ],
  },
  {
    name: "Telecommunication",
    clients: [
      { name: "SingTel", logo: "/clients/singtel.png" },
      { name: "FlashTech" },
    ],
  },
  {
    name: "Media & Publishing",
    clients: [
      { name: "Astro", logo: "/clients/astro_logo.svg" },
      { name: "Singapore Press Holdings" },
    ],
  },
  {
    name: "E-Commerce & New Media",
    clients: [
      { name: "Joey Yap" },
      { name: "Estate123", logo: "/clients/estate123.png" },
      { name: "Bloom House" },
      { name: "AFOS" },
    ],
  },
  {
    name: "Finance & Insurance",
    clients: [
      { name: "CIMB Aviva", logo: "/clients/cimbaviva_logo.svg" },
      { name: "Mestari", logo: "/clients/mestari.png" },
      { name: "CIMB Bank" },
      { name: "Lonpac" },
    ],
  },
  {
    name: "Logistics & Transportation",
    clients: [
      { name: "Proton" },
      { name: "PLUS" },
      { name: "SingPost" },
    ],
  },
  {
    name: "Call Centre",
    clients: [
      { name: "Kannal Solutions", caseStudyId: "kannal" },
      { name: "Satu Call" },
    ],
  },
  {
    name: "Manufacturing",
    clients: [
      { name: "Carlsberg" },
      { name: "Intel", logo: "/clients/intel.png" },
    ],
  },
  {
    name: "ICT & Technology",
    clients: [{ name: "Vistage", logo: "/clients/vistage.png" }],
  },
  {
    name: "Education & Learning",
    clients: [{ name: "IGM" }],
  },
];

/* ────────────────────────────────────────────
   Detailed case studies (modal content)
   ──────────────────────────────────────────── */

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "pfizer",
    company: "Pfizer",
    industry: "Healthcare & Pharmaceutical",
    challenge:
      "Pfizer, the world's largest research-based pharmaceutical company, needed to keep sales data synchronized between backend systems and sales representatives' mobile devices across Malaysia and Singapore. The company struggled with duplicate customer records and product team alignment issues.",
    solution:
      "Claritas implemented two integrated solutions: Customer Data Management (CDM) to consolidate buying and non-buying customer data from multiple sources into a single application, enabling cross-departmental sharing and duplicate merging. Sales-Data-on-The-Go (SDOTG) provided mobile sales force automation, synchronizing backend sales and product data daily to representatives' devices.",
    results:
      "Sales representatives gained real-time access to sales figures, targets, product information, stock levels, and appointment scheduling from mobile devices anywhere, anytime. Great reduction of issues on product team alignment and duplicate customer records.",
    quote:
      "Claritas solution has given us tremendous visibility into real-time mobile sales and marketing activities. With consolidated customer master data in the system, we can see a great reduction of issues on product team alignment and duplicate customer records.",
    quoteAuthor: "Max Koh",
    quoteRole: "Business Technology Manager, Pfizer",
  },
  {
    id: "zuellig",
    company: "Zuellig Pharma",
    industry: "Healthcare & Pharmaceutical",
    challenge:
      "As a leading pharmaceutical distribution specialist operating across 15 countries in Asia for over six decades, Zuellig Pharma faced the challenge of managing hundreds of customer and principal feedbacks from multiple regions without a centralized system.",
    solution:
      "Claritas Helpdesk solution was deployed to record and store feedbacks as individual docket files. Each file is assigned to appropriate stakeholders with escalation capabilities allowing supervisors to reassign unresolved issues. The dashboard provides clear visibility of all cases, particularly outstanding ones requiring attention within SLA.",
    results:
      "Within months of implementation, improvement appeared in service turnaround time. The system enables handling of hundreds of inbound feedbacks daily. Following successful Malaysia deployment, Zuellig Pharma expanded the helpdesk solution to its Singapore operation.",
    quote:
      "Adopting Claritas helpdesk solution has enabled us to manage customer service and principal service efficiently.",
    quoteAuthor: "Maggie Tan",
    quoteRole: "Customer Service Manager, Zuellig Pharma",
  },
  {
    id: "rsd",
    company: "Room Service Deliveries",
    industry: "Retail, Franchise & E-Commerce",
    challenge:
      "Room Service Deliveries, a food delivery company operating across Malaysia, Singapore, and Indonesia, needed to integrate its website into a unified CRM and e-commerce platform to manage web orders through its contact center while expanding operations across multiple countries without increasing operational costs.",
    solution:
      "Claritas implemented a front-end customer shopping cart with backend CRM system, restaurant and menu item management, web and telephone order processing, logistics processing, and integrated call center features enabling centralized regional administration.",
    results:
      "The platform now supports over 100 restaurants and serves 200+ blue-chip companies. Room Service Deliveries became the top food delivery franchise in Malaysia and Singapore, enabling expansion into Australia and European markets.",
    quote:
      "Netster has implemented an integrated CRM and E-Commerce platform, all from our centralized contact center. It has truly enabled us to expand across multiple countries while maintaining operational cost.",
    quoteAuthor: "Mark Simmons",
    quoteRole: "Managing Director, Room Service Deliveries",
  },
  {
    id: "kannal",
    company: "Kannal Solutions",
    industry: "Call Centre",
    challenge:
      "Kannal Solutions (KSOL), a subsidiary of public-listed Kannaltec Group, provides outsourced call center facilities for banking, insurance, and media sectors. The organization faced difficulties with systematic management of multiple outbound activities, including telemarketing sales representative oversight and sales reporting.",
    solution:
      "Claritas CRM was deployed with minimal customization, offering out-of-the-box features for outbound campaign management: leads manager and tracking, call list uploading and cleansing to eliminate duplication, lead assignment per agent, integrated call manager for scheduling, credit card enrollment support, and email campaign capabilities.",
    results:
      "Measurable increase in agent productivity compared to manual dialing and tracking. Improved capacity to scale outbound operations with better monitoring of productivity and performance metrics. Now serves major clients including Lonpac Insurance, CIMB Aviva, and Astro.",
    quote:
      "Thanks to Claritas, we manage to ramp up and scale our outbound call center operation in time to support our growing customer base.",
    quoteAuthor: "Chan Fok Yee",
    quoteRole: "General Manager, Kannal Solutions",
  },
  {
    id: "fgv",
    company: "FGV Holdings",
    industry: "Diversified Business",
    challenge:
      "FGV Holdings, one of the largest plantation companies globally, needed to centralize customer relationship management across its diversified business units spanning plantation, logistics, and downstream operations.",
    solution:
      "Claritas CRM was implemented to provide a unified 360-degree view of customer relationships, integrating marketing campaigns, sales pipeline management, and support ticketing across business units.",
    results:
      "Complete visibility across all customer touchpoints with integrated marketing and sales pipeline. Transformed how FGV manages customer relationships across its diversified portfolio.",
    quote:
      "Claritas CRM transformed how we manage our customer relationships. The integrated marketing and sales pipeline gave us complete visibility across all touchpoints.",
    quoteAuthor: "Ahmad Rahman",
    quoteRole: "FGV Holdings",
  },
];

/* ────────────────────────────────────────────
   Page Component
   ──────────────────────────────────────────── */

export default function CaseStudiesPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden pt-16 ${isV5 ? "bg-[#050b1a]" : "bg-gray-50"}`}>
        {isV5 && <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0a1428] to-[#050b1a]" />}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isV5 ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isV5 ? 0.6 : 0.5 }}
            className="max-w-3xl"
          >
            {isV5 ? (
              <div className="flex items-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  Case Studies
                </span>
              </div>
            ) : (
              <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Case Studies
              </span>
            )}
            <h1
              className={
                isV5
                  ? "text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                  : "mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl"
              }
              style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV5 ? (
                <>Success <span className="text-blue-500">Stories</span></>
              ) : (
                <>SUCCESS <span className="text-coral-500">STORIES</span></>
              )}
            </h1>
            <p className={`mt-4 text-base leading-relaxed ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
              Retaining customers to form a long-term customer relationship is the
              most important factor when it comes to implementing CRM solutions. We
              put what we embrace into practice, ensuring we deliver the ultimate
              satisfaction to every customer who uses our product. Read more on our
              selected case studies that prove Claritas&trade; lived up to its
              expectation in optimizing our clients&apos; business value.
            </p>
            <div className={`mt-6 flex items-center gap-4 text-sm ${isV5 ? "text-slate-500" : "text-gray-400"}`}>
              <span className={`flex h-10 w-10 items-center justify-center text-sm font-bold text-white ${isV5 ? "bg-blue-500" : "rounded-full bg-coral-500"}`}>
                50+
              </span>
              Successful customer stories across APAC
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className={isV5 ? "bg-[#050b1a] py-20 sm:py-28" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={isV5 ? "space-y-16" : "space-y-12"}>
            {industries.map((industry, ii) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: ii * 0.03 }}
              >
                <h2 className={
                  isV5
                    ? "mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500"
                    : "mb-5 text-xs font-bold uppercase tracking-widest text-coral-500"
                }>
                  {industry.name}
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {industry.clients.map((client) => {
                    const hasCaseStudy = client.caseStudyId != null;
                    const inner = (
                      <div
                        className={
                          isV5
                            ? `group flex h-24 flex-col items-center justify-center border px-4 py-3 text-center transition-all duration-300 ${
                                hasCaseStudy
                                  ? "border-blue-500/30 bg-transparent cursor-pointer hover:border-blue-500 hover:-translate-y-2"
                                  : "border-white/[0.06] bg-transparent hover:border-white/[0.12] hover:-translate-y-1"
                              }`
                            : `group flex h-24 flex-col items-center justify-center rounded-xl border bg-white px-4 py-3 text-center transition-all duration-300 ${
                                hasCaseStudy
                                  ? "border-coral-200 shadow-[0_8px_30px_-8px_rgba(232,101,90,0.15)] cursor-pointer hover:shadow-[0_20px_50px_-12px_rgba(232,101,90,0.3)] hover:-translate-y-2 hover:border-coral-400"
                                  : "border-gray-100 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                              }`
                        }
                      >
                        {client.logo ? (
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={100}
                            height={40}
                            className={`h-8 w-auto object-contain transition-opacity ${isV5 ? "opacity-50 group-hover:opacity-100 brightness-0 invert" : "opacity-70 group-hover:opacity-100"}`}
                          />
                        ) : (
                          <span className={`text-sm font-bold transition-colors ${isV5 ? "text-slate-500 group-hover:text-white" : "text-dark-900/60 group-hover:text-dark-900"}`}>
                            {client.name}
                          </span>
                        )}
                        {hasCaseStudy && (
                          <span className={`mt-1.5 text-[10px] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity ${isV5 ? "text-blue-500" : "text-coral-500"}`}>
                            View Story
                          </span>
                        )}
                      </div>
                    );

                    if (hasCaseStudy) {
                      return (
                        <button
                          key={client.name}
                          onClick={() => {
                            const cs = caseStudies.find(
                              (c) => c.id === client.caseStudyId,
                            );
                            if (cs) setActiveCaseStudy(cs);
                          }}
                          className="text-left"
                        >
                          {inner}
                        </button>
                      );
                    }
                    return <div key={client.name}>{inner}</div>;
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={isV5 ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className={isV5 ? "text-3xl md:text-5xl font-light text-white tracking-tighter" : "text-2xl font-extrabold text-dark-900 sm:text-3xl"}
            style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isV5 ? (
              <>Ready to be our next <span className="text-blue-500">success story</span>?</>
            ) : (
              <>Ready to be our next{" "}<span className="text-coral-500">success story</span>?</>
            )}
          </h2>
          <p className={`mt-4 text-base ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
            Join 50+ companies across APAC who trust Claritas CRM. Get started
            with a free 14-day trial.
          </p>
          <div className={`mt-8 flex flex-col items-center justify-center sm:flex-row ${isV5 ? "gap-6" : "gap-3"}`}>
            <Link
              href="/contact?demo=true"
              className={
                isV5
                  ? "inline-flex items-center gap-3 px-12 py-5 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                  : "inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              }
            >
              REQUEST A DEMO
              <ArrowRight className={isV5 ? "h-3.5 w-3.5" : "h-4 w-4"} />
            </Link>
            <Link
              href="/pricing"
              className={
                isV5
                  ? "inline-flex items-center gap-2 px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#050b1a] transition-all duration-500"
                  : "inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white"
              }
            >
              SEE PRICING
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className={
                isV5
                  ? "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-[#050b1a] border border-white/[0.06] p-6 shadow-2xl sm:p-8"
                  : "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
              }
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className={
                  isV5
                    ? "absolute right-4 top-4 p-1.5 text-slate-500 transition-colors hover:bg-white/[0.06] hover:text-white"
                    : "absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                }
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Badge */}
              <span className={
                isV5
                  ? "inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500"
                  : "inline-block rounded-full bg-coral-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral-500"
              }>
                {activeCaseStudy.industry}
              </span>

              <h2
                className={isV5 ? "mt-3 text-2xl sm:text-3xl font-light text-white tracking-tighter" : "mt-3 text-2xl font-extrabold text-dark-900 sm:text-3xl"}
                style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
              >
                {activeCaseStudy.company}
              </h2>

              {/* Challenge */}
              <div className="mt-6">
                <h3 className={
                  isV5
                    ? "text-[10px] font-black uppercase tracking-[0.3em] text-blue-500"
                    : "text-xs font-bold uppercase tracking-wider text-gray-400"
                }>
                  The Challenge
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  {activeCaseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mt-6">
                <h3 className={
                  isV5
                    ? "text-[10px] font-black uppercase tracking-[0.3em] text-blue-500"
                    : "text-xs font-bold uppercase tracking-wider text-gray-400"
                }>
                  The Solution
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  {activeCaseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mt-6">
                <h3 className={
                  isV5
                    ? "text-[10px] font-black uppercase tracking-[0.3em] text-blue-500"
                    : "text-xs font-bold uppercase tracking-wider text-gray-400"
                }>
                  The Results
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-600"}`}>
                  {activeCaseStudy.results}
                </p>
              </div>

              {/* Quote */}
              <div className={isV5 ? "mt-8 border border-white/[0.06] bg-white/[0.03] p-5" : "mt-8 rounded-xl bg-gray-50 p-5"}>
                <Quote className={isV5 ? "h-6 w-6 text-blue-500/50" : "h-6 w-6 text-coral-300"} />
                <p className={`mt-2 text-sm italic leading-relaxed ${isV5 ? "text-slate-300" : "text-gray-700"}`}>
                  &ldquo;{activeCaseStudy.quote}&rdquo;
                </p>
                <p className={`mt-3 text-xs font-semibold ${isV5 ? "text-white" : "text-dark-900"}`}>
                  {activeCaseStudy.quoteAuthor}
                </p>
                <p className={`text-xs ${isV5 ? "text-slate-500" : "text-gray-400"}`}>
                  {activeCaseStudy.quoteRole}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?demo=true"
                  className={
                    isV5
                      ? "inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                      : "inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600"
                  }
                  onClick={() => setActiveCaseStudy(null)}
                >
                  Request a Demo
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className={
                    isV5
                      ? "px-8 py-4 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-all hover:border-white/40 hover:text-white"
                      : "rounded-full border border-gray-300 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 transition-all hover:border-gray-400 hover:text-dark-900"
                  }
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
