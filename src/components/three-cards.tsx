"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Increase Sales Success",
    subtitle: "Sell Smarter, Sell Faster",
    href: "/products/sales",
  },
  {
    icon: Target,
    title: "Effective Marketing Campaign",
    subtitle: "Target The Right Customer",
    href: "/products/marketing",
  },
  {
    icon: Heart,
    title: "Enhance Customer Experience",
    subtitle: "Care for Your Customer",
    href: "/products/support",
  },
];

export function ThreeCards() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-coral-50 text-coral-500 transition-transform group-hover:scale-110">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-dark-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{card.subtitle}</p>
              <Link
                href={card.href}
                className="mt-6 inline-block rounded-full bg-coral-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
              >
                GET STARTED
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
