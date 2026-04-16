"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Client {
  name: string;
  src?: string;
}

const row1: Client[] = [
  { name: "FGV", src: "/clients/fgv.png" },
  { name: "Nando's", src: "/clients/nandos.png" },
  { name: "Pfizer", src: "/clients/pfizer.png" },
  { name: "SingTel", src: "/clients/singtel.png" },
  { name: "Flashtech" },
  { name: "Singapore Press Holdings" },
];

const row2: Client[] = [
  { name: "Joey Yap" },
  { name: "Astro" },
  { name: "RoomServ" },
  { name: "Estate123", src: "/clients/estate123.png" },
  { name: "Bloom House" },
];

const row3: Client[] = [
  { name: "AFOS" },
  { name: "Carlsberg" },
  { name: "Intel", src: "/clients/intel.png" },
  { name: "Mestari", src: "/clients/mestari.png" },
  { name: "Vistage", src: "/clients/vistage.png" },
  { name: "Proton" },
  { name: "CIMB Aviva" },
];

function LogoItem({ client }: { client: Client }) {
  if (client.src) {
    return (
      <Image
        src={client.src}
        alt={client.name}
        width={120}
        height={50}
        className="h-10 w-auto max-w-[120px] object-contain opacity-20 sm:h-14"
      />
    );
  }
  return (
    <span className="text-xl font-extrabold tracking-wide text-dark-900/[0.08] sm:text-2xl whitespace-nowrap uppercase">
      {client.name}
    </span>
  );
}

export function ClientLogos() {
  return (
    <section className="relative bg-gray-100 py-24 sm:py-32 overflow-hidden">
      {/* Scattered logo watermarks — 3 rows behind the text */}
      <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none select-none">
        <div className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 sm:px-4 md:gap-10">
          {row1.map((c) => (
            <div key={c.name} className="shrink-0">
              <LogoItem client={c} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 sm:px-8 md:gap-10">
          {row2.map((c) => (
            <div key={c.name} className="shrink-0">
              <LogoItem client={c} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-around gap-2 px-2 sm:gap-6 md:gap-10">
          {row3.map((c) => (
            <div key={c.name} className="shrink-0">
              <LogoItem client={c} />
            </div>
          ))}
        </div>
      </div>

      {/* Foreground heading + CTA */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl md:text-5xl">
            MORE THAN 50+ SUCCESSFUL
          </h2>
          <h2 className="text-2xl font-extrabold text-coral-500 sm:text-3xl md:text-5xl">
            CUSTOMER STORIES
          </h2>

          <div className="mt-8">
            <Link
              href="/about#case-studies"
              className="inline-block rounded-lg bg-coral-500 px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25"
            >
              LEARN MORE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
