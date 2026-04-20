"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    num: "I",
    title: "Revenue",
    subtitle: "The Sales Instrument",
    desc: "Forecasts held to quarterly plan within 3%. Pipeline discipline codified for executive review. Every deal traceable from first touch to signature.",
    href: "/products/sales",
    photo: "/v9/pillar-revenue.jpg",
    alt: "Executive reviewing financial reports",
  },
  {
    num: "II",
    title: "Reach",
    subtitle: "The Marketing Instrument",
    desc: "Attribution modelled from first impression to signed contract. Audiences segmented by commercial value, not vanity metrics. Boardroom-ready reporting.",
    href: "/products/marketing",
    photo: "/v9/pillar-reach.jpg",
    alt: "Professional marketing strategy meeting",
  },
  {
    num: "III",
    title: "Retention",
    subtitle: "The Service Instrument",
    desc: "SLA discipline with predictive escalation. NPS movements tied to specific touchpoints. Customer outcomes reported with the gravity they deserve.",
    href: "/products/support",
    photo: "/v9/pillar-retention.jpg",
    alt: "Senior executives in formal discussion",
  },
];

export function ThreeCards() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#3f3f3f]/[0.08] relative overflow-hidden">
      <div className="absolute inset-0 cl-gradient-accent-sweep pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">The Claritas Discipline</span>
            <span className="h-px w-12 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[40px] md:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
            Three instruments.
            <br />
            <span className="italic font-light text-[#721011]">One standard of operation.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden cl-paper-edge">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3f3f3f]/35 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#721011]/[0.08] mix-blend-multiply" />

                <div className="absolute top-6 left-6 cl-serif text-[48px] leading-none text-white italic">
                  {item.num}
                </div>
              </div>

              <div className="px-1">
                <div className="cl-eyebrow mb-3">{item.subtitle}</div>
                <h3 className="cl-serif text-[36px] leading-tight tracking-[-0.02em] text-[#3f3f3f] mb-4">
                  {item.title}
                </h3>
                <div className="h-px w-10 bg-[#721011] mb-5" />
                <p className="text-[15px] leading-[1.7] text-[#3f3f3f]/70 mb-6">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-0.5 hover:text-[#721011] hover:border-[#721011] transition-colors"
                >
                  Further Reading
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
