"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Quote } from "lucide-react";

interface Client {
  name: string;
  logo?: string;
  caseStudyId?: string;
}

interface Industry {
  name: string;
  clients: Client[];
}

const industries: Industry[] = [
  { name: "Diversified Business", clients: [{ name: "FGV", logo: "/clients/fgv.png", caseStudyId: "fgv" }] },
  { name: "Retail & Franchise", clients: [{ name: "Nando's", logo: "/clients/nandos.png" }, { name: "Room Service Deliveries", caseStudyId: "rsd" }] },
  { name: "Pharmaceutical", clients: [{ name: "Pfizer", logo: "/clients/pfizer.png", caseStudyId: "pfizer" }, { name: "Zuellig Pharma", caseStudyId: "zuellig" }] },
  { name: "Telecommunication", clients: [{ name: "SingTel", logo: "/clients/singtel.png" }, { name: "FlashTech" }] },
  { name: "Media & Publishing", clients: [{ name: "Astro", logo: "/clients/astro_logo.svg" }, { name: "Singapore Press Holdings" }] },
  { name: "E-Commerce & New Media", clients: [{ name: "Joey Yap" }, { name: "Estate123", logo: "/clients/estate123.png" }, { name: "Bloom House" }, { name: "AFOS" }] },
  { name: "Finance & Insurance", clients: [{ name: "CIMB Aviva", logo: "/clients/cimbaviva_logo.svg" }, { name: "Mestari", logo: "/clients/mestari.png" }, { name: "CIMB Bank" }, { name: "Lonpac" }] },
  { name: "Logistics & Transportation", clients: [{ name: "Proton" }, { name: "PLUS" }, { name: "SingPost" }] },
  { name: "Call Centre", clients: [{ name: "Kannal Solutions", caseStudyId: "kannal" }, { name: "Satu Call" }] },
  { name: "Manufacturing", clients: [{ name: "Carlsberg" }, { name: "Intel", logo: "/clients/intel.png" }] },
  { name: "ICT & Technology", clients: [{ name: "Vistage", logo: "/clients/vistage.png" }] },
  { name: "Education & Learning", clients: [{ name: "IGM" }] },
];

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
    challenge: "Pfizer, the world's largest research-based pharmaceutical company, needed to keep sales data synchronized between backend systems and sales representatives' mobile devices across Malaysia and Singapore. The company struggled with duplicate customer records and product team alignment issues.",
    solution: "Claritas implemented two integrated solutions: Customer Data Management (CDM) to consolidate buying and non-buying customer data from multiple sources into a single application, enabling cross-departmental sharing and duplicate merging. Sales-Data-on-The-Go (SDOTG) provided mobile sales force automation, synchronizing backend sales and product data daily to representatives' devices.",
    results: "Sales representatives gained real-time access to sales figures, targets, product information, stock levels, and appointment scheduling from mobile devices anywhere, anytime. Great reduction of issues on product team alignment and duplicate customer records.",
    quote: "Claritas solution has given us tremendous visibility into real-time mobile sales and marketing activities. With consolidated customer master data in the system, we can see a great reduction of issues on product team alignment and duplicate customer records.",
    quoteAuthor: "Max Koh",
    quoteRole: "Business Technology Manager, Pfizer",
  },
  {
    id: "zuellig",
    company: "Zuellig Pharma",
    industry: "Healthcare & Pharmaceutical",
    challenge: "As a leading pharmaceutical distribution specialist operating across 15 countries in Asia for over six decades, Zuellig Pharma faced the challenge of managing hundreds of customer and principal feedbacks from multiple regions without a centralized system.",
    solution: "Claritas Helpdesk solution was deployed to record and store feedbacks as individual docket files. Each file is assigned to appropriate stakeholders with escalation capabilities allowing supervisors to reassign unresolved issues. The dashboard provides clear visibility of all cases, particularly outstanding ones requiring attention within SLA.",
    results: "Within months of implementation, improvement appeared in service turnaround time. The system enables handling of hundreds of inbound feedbacks daily. Following successful Malaysia deployment, Zuellig Pharma expanded the helpdesk solution to its Singapore operation.",
    quote: "Adopting Claritas helpdesk solution has enabled us to manage customer service and principal service efficiently.",
    quoteAuthor: "Maggie Tan",
    quoteRole: "Customer Service Manager, Zuellig Pharma",
  },
  {
    id: "rsd",
    company: "Room Service Deliveries",
    industry: "Retail, Franchise & E-Commerce",
    challenge: "Room Service Deliveries, a food delivery company operating across Malaysia, Singapore, and Indonesia, needed to integrate its website into a unified CRM and e-commerce platform to manage web orders through its contact center while expanding operations across multiple countries without increasing operational costs.",
    solution: "Claritas implemented a front-end customer shopping cart with backend CRM system, restaurant and menu item management, web and telephone order processing, logistics processing, and integrated call center features enabling centralized regional administration.",
    results: "The platform now supports over 100 restaurants and serves 200+ blue-chip companies. Room Service Deliveries became the top food delivery franchise in Malaysia and Singapore, enabling expansion into Australia and European markets.",
    quote: "Netster has implemented an integrated CRM and E-Commerce platform, all from our centralized contact center. It has truly enabled us to expand across multiple countries while maintaining operational cost.",
    quoteAuthor: "Mark Simmons",
    quoteRole: "Managing Director, Room Service Deliveries",
  },
  {
    id: "kannal",
    company: "Kannal Solutions",
    industry: "Call Centre",
    challenge: "Kannal Solutions (KSOL), a subsidiary of public-listed Kannaltec Group, provides outsourced call center facilities for banking, insurance, and media sectors. The organization faced difficulties with systematic management of multiple outbound activities, including telemarketing sales representative oversight and sales reporting.",
    solution: "Claritas CRM was deployed with minimal customization, offering out-of-the-box features for outbound campaign management: leads manager and tracking, call list uploading and cleansing to eliminate duplication, lead assignment per agent, integrated call manager for scheduling, credit card enrollment support, and email campaign capabilities.",
    results: "Measurable increase in agent productivity compared to manual dialing and tracking. Improved capacity to scale outbound operations with better monitoring of productivity and performance metrics. Now serves major clients including Lonpac Insurance, CIMB Aviva, and Astro.",
    quote: "Thanks to Claritas, we manage to ramp up and scale our outbound call center operation in time to support our growing customer base.",
    quoteAuthor: "Chan Fok Yee",
    quoteRole: "General Manager, Kannal Solutions",
  },
  {
    id: "fgv",
    company: "FGV Holdings",
    industry: "Diversified Business",
    challenge: "FGV Holdings, one of the largest plantation companies globally, needed to centralize customer relationship management across its diversified business units spanning plantation, logistics, and downstream operations.",
    solution: "Claritas CRM was implemented to provide a unified 360-degree view of customer relationships, integrating marketing campaigns, sales pipeline management, and support ticketing across business units.",
    results: "Complete visibility across all customer touchpoints with integrated marketing and sales pipeline. Transformed how FGV manages customer relationships across its diversified portfolio.",
    quote: "Claritas CRM transformed how we manage our customer relationships. The integrated marketing and sales pipeline gave us complete visibility across all touchpoints.",
    quoteAuthor: "Ahmad Rahman",
    quoteRole: "FGV Holdings",
  },
];

export default function CaseStudiesPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <section className="relative cl-gradient-hero pt-32 pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#721011]" />
              <span className="cl-eyebrow">The Client Register</span>
            </div>
            <h1 className="cl-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f]">
              Success, <span className="italic font-light text-[#721011]">recorded.</span>
            </h1>
            <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-2xl">
              Long-term customer relationships are the measure we hold ourselves to. A selection of the institutions who have trusted Claritas&trade; as their instrument of record across Asia-Pacific.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="cl-serif text-[48px] italic text-[#721011] leading-none">50+</span>
              <span className="text-[14px] text-[#3f3f3f]/60 max-w-xs">
                Institutions served across APAC, twelve industries, fifteen countries.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 space-y-16">
          {industries.map((industry, ii) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ii * 0.04 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-[#721011]" />
                <span className="cl-eyebrow">{industry.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {industry.clients.map((client) => {
                  const hasCaseStudy = client.caseStudyId != null;
                  const inner = (
                    <div
                      className={`group flex h-28 flex-col items-center justify-center bg-white border border-[#3f3f3f]/[0.06] px-4 py-3 text-center transition-all duration-500 ${
                        hasCaseStudy ? "cursor-pointer hover:cl-paper-edge hover:-translate-y-0.5" : "hover:cl-paper-edge"
                      }`}
                    >
                      {client.logo ? (
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={100}
                          height={40}
                          className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <span className="cl-serif text-[14px] text-[#3f3f3f]/70 group-hover:text-[#3f3f3f] transition-colors">
                          {client.name}
                        </span>
                      )}
                      {hasCaseStudy && (
                        <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#721011] opacity-0 group-hover:opacity-100 transition-opacity">
                          Read Dossier
                        </span>
                      )}
                    </div>
                  );
                  if (hasCaseStudy) {
                    return (
                      <button
                        key={client.name}
                        onClick={() => {
                          const cs = caseStudies.find((c) => c.id === client.caseStudyId);
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
      </section>

      <section className="cl-gradient-dark text-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#d4696a]" />
            <span className="cl-eyebrow text-[#d4696a]">The Next Page</span>
            <span className="h-px w-12 bg-[#d4696a]" />
          </div>
          <h2 className="cl-serif text-[44px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
            Ready to be our next <span className="italic font-light text-[#d4696a]">success story?</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact?demo=true"
              className="group inline-flex items-center gap-3 bg-white text-[#3f3f3f] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] hover:text-white transition-colors duration-500"
            >
              Request Private Briefing
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="text-[12px] uppercase tracking-[0.24em] font-semibold text-white/80 border-b border-white/60 pb-0.5 hover:text-[#d4696a] hover:border-[#d4696a] transition-colors"
            >
              Review Pricing
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#3f3f3f]/70 p-4 backdrop-blur-sm"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-white p-8 sm:p-12 cl-paper-edge"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute right-5 top-5 rounded-full p-1.5 text-[#3f3f3f]/40 transition-colors hover:bg-[#fafafa] hover:text-[#3f3f3f]"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="cl-eyebrow mb-4">{activeCaseStudy.industry}</div>
              <h2 className="cl-serif text-[32px] md:text-[44px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
                {activeCaseStudy.company}
              </h2>
              {[
                { label: "The Challenge", body: activeCaseStudy.challenge },
                { label: "The Solution", body: activeCaseStudy.solution },
                { label: "The Results", body: activeCaseStudy.results },
              ].map((sect) => (
                <div key={sect.label} className="mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-8 bg-[#721011]" />
                    <span className="cl-eyebrow">{sect.label}</span>
                  </div>
                  <p className="text-[15px] leading-[1.7] text-[#3f3f3f]/75">{sect.body}</p>
                </div>
              ))}
              <div className="mt-10 bg-[#fafafa] p-6 border border-[#3f3f3f]/[0.06]">
                <Quote className="h-6 w-6 text-[#721011]" strokeWidth={1} />
                <p className="mt-4 cl-serif italic text-[17px] leading-[1.6] text-[#3f3f3f]/85">
                  &ldquo;{activeCaseStudy.quote}&rdquo;
                </p>
                <div className="mt-5 h-px w-10 cl-rule-crimson" />
                <p className="mt-3 cl-serif text-[15px] text-[#3f3f3f]">{activeCaseStudy.quoteAuthor}</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#721011] font-semibold">
                  {activeCaseStudy.quoteRole}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?demo=true"
                  className="group inline-flex items-center justify-center gap-2 bg-[#3f3f3f] text-white px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-[#721011] transition-colors"
                  onClick={() => setActiveCaseStudy(null)}
                >
                  Request Briefing
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="border border-[#3f3f3f]/25 px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#3f3f3f]/70 hover:border-[#721011] hover:text-[#721011]"
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
