"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const products = [
  {
    title: "Marketing",
    subtitle: "Deliver impactful marketing campaign and uncover hidden opportunities!",
    bullets: [
      "Integrated Mass Marketing Tool",
      "Manage Campaign Life Cycle",
      "Track Response and Monitor Results",
    ],
    href: "/products/marketing",
    imagePosition: "left" as const,
    image: "/marketing.png",
    photo: {
      src: "/v9/product-marketing.jpg",
      alt: "Marketing strategy session",
      caption: "A campaign calibrated to convert, not merely to be seen.",
    },
  },
  {
    title: "Sales",
    subtitle: "Empowering You To Sell Smarter And Sell Faster!",
    bullets: [
      "Turn leads into opportunity",
      "Integrated Quotation Module",
      "Benchmark Sales against Forecast",
    ],
    href: "/products/sales",
    imagePosition: "right" as const,
    image: "/sales.png",
    photo: {
      src: "/v9/product-sales.jpg",
      alt: "Executive signing a contract",
      caption: "The pipeline as a fiduciary instrument — each stage a commitment.",
    },
  },
  {
    title: "Support",
    subtitle: "Boost Service Effectiveness and Increase Customer Satisfaction!",
    bullets: [
      "Automate your support processes",
      "Track Service Level Systematically",
      "Service and Contract Management",
    ],
    href: "/products/support",
    imagePosition: "left" as const,
    image: "/support.png",
    photo: {
      src: "/v9/product-support.jpg",
      alt: "Professional customer service conversation",
      caption: "Retention is the discipline of never making a client ask twice.",
    },
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="bg-[#fafafa] py-24 lg:py-32 border-t border-[#3f3f3f]/[0.08] relative overflow-hidden">
      <div className="absolute inset-0 cl-gradient-accent-sweep pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">The Product Portfolio</span>
          </div>
          <h2 className="cl-serif text-[40px] md:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
            Three modules.
            <br />
            <span className="italic font-light text-[#721011]">Engineered without compromise.</span>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-xl">
            Deployed standalone or as a unified platform of record. Each module is held to the same standard: boardroom-ready outputs, zero data friction, and the assumption that our clients&apos; time is the most valuable instrument in the room.
          </p>
        </motion.div>

        <div className="space-y-28 lg:space-y-40">
          {products.map((product, i) => {
            const imageRight = product.imagePosition === "right";

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-7 ${imageRight ? "lg:order-2" : "lg:order-1"} relative`}>
                  <div className="relative aspect-[5/6] cl-paper-edge overflow-hidden">
                    <Image
                      src={product.photo.src}
                      alt={product.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3f3f3f]/35 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-[#721011]/[0.07] mix-blend-multiply" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                      <div className="cl-eyebrow text-[#d4696a] mb-2">
                        Plate N° {i + 1}
                      </div>
                      <p className="cl-serif italic text-[15px] lg:text-[17px] leading-snug max-w-sm">
                        {product.photo.caption}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 hidden lg:block w-48 bg-white p-2 cl-paper-edge">
                    <Image
                      src={product.image}
                      alt={`${product.title} module screen`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-5 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="cl-eyebrow mb-4">
                    Module · {String(i + 1).padStart(2, "0")} / 03
                  </div>
                  <h3 className="cl-serif text-[44px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f]">
                    {product.title}
                  </h3>
                  <div className="mt-6 h-px w-14 cl-rule-crimson opacity-80" />
                  <p className="mt-6 text-[18px] leading-[1.65] italic text-[#3f3f3f]/75 cl-serif">
                    {product.subtitle}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {product.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-4 text-[15px] leading-[1.6] text-[#3f3f3f]/75">
                        <span className="text-[#721011] font-serif text-lg leading-none mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-1 hover:text-[#721011] hover:border-[#721011] transition-colors"
                  >
                    Read the Specification
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
