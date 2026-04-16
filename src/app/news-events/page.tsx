import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Events | Claritas CRM",
  description: "Latest news, updates, and events from Claritas CRM.",
};

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
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Company Updates
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              NEWS & <span className="text-coral-500">EVENTS</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Stay up to date with the latest from Claritas CRM — product announcements, milestones,
              partnerships, and events.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {updates.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-extrabold text-coral-500">{item.date}</span>
                  <span className="rounded-full bg-gray-100 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    {item.tag}
                  </span>
                </div>
                <h2 className="mt-3 text-base font-bold text-dark-900 sm:text-lg">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            Want to stay <span className="text-coral-500">updated</span>?
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Get in touch to learn more about upcoming events, webinars, and product releases.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
          >
            CONTACT US <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
