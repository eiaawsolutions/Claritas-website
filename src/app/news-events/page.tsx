"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

const updates = [
  {
    date: "2026",
    tag: "Product",
    title: "Next-Generation AI-Powered Features",
    body: "Claritas CRM introduces AI-powered Next Best Action (NBA), intelligent lead scoring, and predictive analytics to help businesses make data-driven decisions faster than ever.",
  },
  {
    date: "2020",
    tag: "Infrastructure",
    title: "Full Cloud-Native Pivot on Azure",
    body: "Claritas CRM completed its migration to a fully cloud-native architecture on Microsoft Azure, offering hybrid deployment options and enhanced scalability for enterprise customers.",
  },
  {
    date: "2016",
    tag: "Milestone",
    title: "Enterprise Expansion Across APAC",
    body: "Claritas CRM expanded to serve major enterprises including SingTel, Pfizer, and Nando's — establishing a strong footprint across Malaysia, Singapore, and the broader APAC region.",
  },
  {
    date: "2012",
    tag: "Partnership",
    title: "Microsoft Azure Partnership",
    body: "Claritas became a Microsoft Azure partner, bringing cloud-first CRM capabilities to businesses in the region with enterprise-grade infrastructure and global reach.",
  },
  {
    date: "2010",
    tag: "Recognition",
    title: "MSC Approved by Malaysian Government",
    body: "Claritas CRM received MSC (Multimedia Super Corridor) product approval from the Malaysian government, recognising it as a certified technology product meeting international standards.",
  },
  {
    date: "2008",
    tag: "Company",
    title: "Claritas CRM Founded by Netster",
    body: "Claritas CRM was launched by Netster with a vision to bring enterprise-grade customer relationship management solutions to businesses across the APAC market.",
  },
];

export default function NewsEventsPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";

  return (
    <>
      <section className={`pt-16 ${isV5 ? "bg-[#050b1a] relative" : "bg-gray-50"}`}>
        {isV5 && <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#0a1428] to-[#050b1a]" />}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isV5 ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <div className="max-w-3xl">
            {isV5 ? (
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-[60px] bg-blue-500" />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  Company Updates
                </span>
              </div>
            ) : (
              <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Company Updates
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
                <>News & <span className="text-blue-500">Events</span></>
              ) : (
                <>NEWS & <span className="text-coral-500">EVENTS</span></>
              )}
            </h1>
            <p className={`mt-4 text-base leading-relaxed ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
              Stay up to date with the latest from Claritas CRM — product announcements, milestones,
              partnerships, and events.
            </p>
          </div>
        </div>
      </section>

      <section className={isV5 ? "py-20 sm:py-28 bg-[#050b1a]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className={isV5 ? "space-y-8" : "space-y-6"}>
            {updates.map((item) => (
              <div
                key={item.title}
                className={
                  isV5
                    ? "border border-white/[0.06] bg-transparent p-8 transition-all hover:border-white/[0.12] hover:-translate-y-1"
                    : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                }
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`font-extrabold ${isV5 ? "text-sm text-blue-500" : "text-sm text-coral-500"}`}>{item.date}</span>
                  <span className={
                    isV5
                      ? "text-[10px] font-black uppercase tracking-[0.3em] text-slate-500"
                      : "rounded-full bg-gray-100 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500"
                  }>
                    {item.tag}
                  </span>
                </div>
                <h2 className={`mt-3 text-base sm:text-lg font-bold ${isV5 ? "text-white" : "text-dark-900"}`}>
                  {item.title}
                </h2>
                <p className={`mt-2 text-sm leading-relaxed ${isV5 ? "text-slate-400 font-light" : "text-gray-500"}`}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={isV5 ? "bg-[#0a1428] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className={isV5 ? "text-3xl md:text-5xl font-light text-white tracking-tighter" : "text-2xl font-extrabold text-dark-900 sm:text-3xl"}
            style={isV5 ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isV5 ? (
              <>Want to stay <span className="text-blue-500">updated</span>?</>
            ) : (
              <>Want to stay <span className="text-coral-500">updated</span>?</>
            )}
          </h2>
          <p className={`mt-4 text-base ${isV5 ? "text-slate-500 font-light" : "text-gray-500"}`}>
            Get in touch to learn more about upcoming events, webinars, and product releases.
          </p>
          <Link
            href="/contact"
            className={
              isV5
                ? "mt-10 inline-flex items-center gap-3 px-12 py-5 bg-white text-[#050b1a] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                : "mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            }
          >
            CONTACT US <ArrowRight className={isV5 ? "h-3.5 w-3.5" : "h-4 w-4"} />
          </Link>
        </div>
      </section>
    </>
  );
}
