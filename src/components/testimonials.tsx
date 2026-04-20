"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Rahman",
    company: "FGV Holdings",
    rating: 4,
    text: "Claritas CRM transformed how we manage our customer relationships. The integrated marketing and sales pipeline gave us complete visibility across all touchpoints.",
  },
  {
    name: "Sarah Chen",
    company: "SingTel Malaysia",
    rating: 5,
    text: "The support module has significantly improved our customer satisfaction scores. Automated ticket routing and SLA tracking saved our team countless hours.",
  },
  {
    name: "David Tan",
    company: "Nando's Malaysia",
    rating: 4,
    text: "We chose Claritas for its loyalty program integration. Being able to connect our CRM data with customer rewards has driven measurable repeat business growth.",
  },
];

export function Testimonials() {
  return (
    <section className="cl-gradient-dark text-white py-28 lg:py-36 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #721011 0%, transparent 50%), radial-gradient(circle at 80% 70%, #8d1a1c 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#d4696a]" />
            <span className="cl-eyebrow text-[#d4696a]">Client Testimony</span>
          </div>
          <h2 className="cl-serif text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em]">
            A fiduciary record
            <br />
            <span className="italic font-light text-[#d4696a]">of our client relationships.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Quote className="absolute -top-2 -left-1 h-12 w-12 text-[#721011]/60" strokeWidth={1} />

              <blockquote className="relative pt-10">
                <p className="cl-serif text-[20px] lg:text-[22px] leading-[1.55] italic text-white/90">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-8">
                <div className="h-px w-12 cl-rule-crimson mb-5" />
                <div className="cl-serif text-[17px] text-white">
                  {t.name}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#d4696a] font-semibold">
                  {t.company}
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-3 w-3 ${idx < t.rating ? "fill-[#d4696a] text-[#d4696a]" : "text-white/20"}`}
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
