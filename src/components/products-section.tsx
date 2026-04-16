"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    title: "MARKETING",
    subtitle: "Deliver impactful marketing campaign and uncover hidden opportunities!",
    bullets: [
      "Integrated Mass Marketing Tool",
      "Manage Campaign Life Cycle",
      "Track Response and Monitor Results",
    ],
    href: "/products/marketing",
    imagePosition: "left" as const,
    illustration: (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100">
          <Image
            src="/marketing.png"
            alt="Marketing"
            width={420}
            height={438}
            className="w-full max-w-xs h-auto object-contain rounded-xl"
          />
        </div>
      </motion.div>
    ),
  },
  {
    title: "SALES",
    subtitle: "Empowering You To Sell Smarter And Sell Faster!",
    bullets: [
      "Turn leads into opportunity",
      "Integrated Quotation Module",
      "Benchmark Sales against Forecast",
    ],
    href: "/products/sales",
    imagePosition: "right" as const,
    illustration: (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100">
          <Image
            src="/sales.png"
            alt="Sales"
            width={420}
            height={438}
            className="w-full max-w-xs h-auto object-contain rounded-xl"
          />
        </div>
      </motion.div>
    ),
  },
  {
    title: "SUPPORT",
    subtitle: "Boost Service Effectiveness and Increase Customer Satisfaction!",
    bullets: [
      "Automate your support processes",
      "Track Service Level Systematically",
      "Service and Contract Management",
    ],
    href: "/products/support",
    imagePosition: "left" as const,
    illustration: (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100">
          <Image
            src="/support.png"
            alt="Support"
            width={420}
            height={438}
            className="w-full max-w-xs h-auto object-contain rounded-xl"
          />
        </div>
      </motion.div>
    ),
  },
];

export function ProductsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20" id="products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-dark-900 sm:text-4xl">
            OUR <span className="text-coral-500">PRODUCTS</span>
          </h2>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {products.map((product) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`flex justify-center ${
                  product.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {product.illustration}
              </div>

              <div
                className={
                  product.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                }
              >
                <h3 className="text-3xl font-extrabold text-dark-900 sm:text-4xl lg:text-5xl">
                  {product.title}
                </h3>
                <p className="mt-3 text-base text-gray-400 italic">
                  {product.subtitle}
                </p>
                <ul className="mt-6 space-y-3">
                  {product.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-900" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="mt-8 inline-block rounded-full bg-coral-500 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
                >
                  LEARN MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
