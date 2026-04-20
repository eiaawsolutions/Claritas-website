import Link from "next/link";
import { ArrowRight } from "lucide-react";

const updates = [
  { date: "2026", tag: "Product", title: "Next-Generation AI-Powered Features", body: "Claritas CRM introduces AI-powered Next Best Action (NBA), intelligent lead scoring, and predictive analytics to help businesses make data-driven decisions faster than ever." },
  { date: "2020", tag: "Infrastructure", title: "Full Cloud-Native Pivot on Azure", body: "Claritas CRM completed its migration to a fully cloud-native architecture on Microsoft Azure, offering hybrid deployment options and enhanced scalability for enterprise customers." },
  { date: "2016", tag: "Milestone", title: "Enterprise Expansion Across APAC", body: "Claritas CRM expanded to serve major enterprises including SingTel, Pfizer, and Nando's — establishing a strong footprint across Malaysia, Singapore, and the broader APAC region." },
  { date: "2012", tag: "Partnership", title: "Microsoft Azure Partnership", body: "Claritas became a Microsoft Azure partner, bringing cloud-first CRM capabilities to businesses in the region with enterprise-grade infrastructure and global reach." },
  { date: "2010", tag: "Recognition", title: "MSC Approved by Malaysian Government", body: "Claritas CRM received MSC (Multimedia Super Corridor) product approval from the Malaysian government, recognising it as a certified technology product meeting international standards." },
  { date: "2008", tag: "Company", title: "Claritas CRM Founded by Netster", body: "Claritas CRM was launched by Netster with a vision to bring enterprise-grade customer relationship management solutions to businesses across the APAC market." },
];

export default function NewsEventsPage() {
  return (
    <>
      <section className="relative cl-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">Company Journal</span>
          </div>
          <h1 className="cl-serif text-[44px] md:text-[68px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f] max-w-4xl">
            Announcements <span className="italic font-light text-[#721011]">of record.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-[#3f3f3f]/70">
            Milestones, product releases, and institutional updates from Claritas &mdash; curated in the order they occurred.
          </p>
        </div>
      </section>

      <section className="bg-[#fafafa] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="space-y-12">
            {updates.map((u) => (
              <article
                key={u.title}
                className="grid md:grid-cols-12 gap-6 items-start border-b border-[#3f3f3f]/10 pb-12 last:border-b-0"
              >
                <div className="md:col-span-2">
                  <div className="cl-serif italic text-[36px] leading-none text-[#721011]">{u.date}</div>
                  <div className="mt-2 cl-eyebrow text-[10px]">{u.tag}</div>
                </div>
                <div className="md:col-span-10">
                  <h2 className="cl-serif text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-[#3f3f3f]">
                    {u.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-[1.7] text-[#3f3f3f]/70 max-w-2xl">{u.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-1 hover:text-[#721011] hover:border-[#721011] transition-colors"
            >
              Request Our Full Press Register
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
