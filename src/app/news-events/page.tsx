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
  const isV6 = version === "v6";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  return (
    <>
      <section className={`pt-16 ${isV6 ? "bg-zinc-950 relative" : isDark ? "bg-[#0b1121] relative" : "bg-gray-50"}`}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-[#0f1729] to-[#0b1121]" />}
        {isV6 && <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isV6 ? "py-20 sm:py-28" : isDark ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <div className="max-w-3xl">
            {isV6 ? (
              <span className="inline-block px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">
                Company Updates
              </span>
            ) : isDark ? (
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
                isV6
                  ? "mt-6 text-3xl md:text-5xl font-bold text-white tracking-tight"
                  : isV5
                    ? "text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                    : "mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl"
              }
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV6 ? (
                <>News & <span className="text-blue-400">Events</span></>
              ) : isDark ? (
                <>News & <span className="text-blue-500">Events</span></>
              ) : (
                <>NEWS & <span className="text-coral-500">EVENTS</span></>
              )}
            </h1>
            <p className={`mt-4 text-base leading-relaxed ${isV6 ? "text-zinc-400 font-light" : isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
              Stay up to date with the latest from Claritas CRM — product announcements, milestones,
              partnerships, and events.
            </p>
          </div>
        </div>
      </section>

      <section className={isV6 ? "py-20 sm:py-28 bg-zinc-50" : isDark ? "py-20 sm:py-28 bg-[#0b1121]" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className={isV6 ? "space-y-6" : isDark ? "space-y-8" : "space-y-6"}>
            {updates.map((item) => (
              <div
                key={item.title}
                className={
                  isV6
                    ? "bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 transition-all hover:shadow-md hover:-translate-y-1"
                    : isV5
                      ? "border border-white/[0.06] bg-transparent p-8 transition-all hover:border-white/[0.12] hover:-translate-y-1"
                      : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                }
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`font-extrabold ${isV6 ? "text-sm text-blue-600" : isDark ? "text-sm text-blue-500" : "text-sm text-coral-500"}`}>{item.date}</span>
                  <span className={
                    isV6
                      ? "rounded-full bg-zinc-100 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500"
                      : isV5
                        ? "text-[10px] font-black uppercase tracking-[0.3em] text-slate-500"
                        : "rounded-full bg-gray-100 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500"
                  }>
                    {item.tag}
                  </span>
                </div>
                <h2 className={`mt-3 text-base sm:text-lg font-bold ${isV6 ? "text-zinc-950" : isDark ? "text-white" : "text-dark-900"}`}>
                  {item.title}
                </h2>
                <p className={`mt-2 text-sm leading-relaxed ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-500"}`}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={isV6 ? "bg-white py-24 sm:py-32" : isDark ? "bg-[#0f1729] py-24 sm:py-32" : "bg-gray-50 py-16 sm:py-20"}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className={isV6 ? "text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight" : isDark ? "text-3xl md:text-5xl font-light text-white tracking-tighter" : "text-2xl font-extrabold text-dark-900 sm:text-3xl"}
            style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
          >
            {isV6 ? (
              <>Want to stay <span className="text-blue-600">updated</span>?</>
            ) : isDark ? (
              <>Want to stay <span className="text-blue-500">updated</span>?</>
            ) : (
              <>Want to stay <span className="text-coral-500">updated</span>?</>
            )}
          </h2>
          <p className={`mt-4 text-base ${isV6 ? "text-zinc-600" : isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
            Get in touch to learn more about upcoming events, webinars, and product releases.
          </p>
          <Link
            href="/contact"
            className={
              isV6
                ? "mt-10 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-800 hover:shadow-lg"
                : isV5
                  ? "mt-10 inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0b1121] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                  : "mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            }
          >
            CONTACT US <ArrowRight className={isV6 ? "h-4 w-4" : isDark ? "h-3.5 w-3.5" : "h-4 w-4"} />
          </Link>
        </div>
      </section>
    </>
  );
}
