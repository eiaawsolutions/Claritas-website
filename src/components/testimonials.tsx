"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-dark-900 sm:text-4xl">
            OUR <span className="text-coral-500">CLIENTS</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.company}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${
                      si < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
