"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

const allClients = [...row1, ...row2, ...row3];

function LogoItem({ client }: { client: Client }) {
  if (client.src) {
    return (
      <Image
        src={client.src}
        alt={client.name}
        width={120}
        height={50}
        className="h-10 w-auto max-w-[120px] object-contain sm:h-14 opacity-55 grayscale transition-opacity"
      />
    );
  }
  return (
    <span className="text-xl font-extrabold tracking-wide sm:text-2xl whitespace-nowrap uppercase text-[#3f3f3f]/55">
      {client.name}
    </span>
  );
}

export function ClientLogos() {
  return (
    <section className="bg-white border-t border-[#3f3f3f]/[0.08] py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 cl-gradient-accent-sweep pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">The Client Register</span>
            <span className="h-px w-12 bg-[#721011]" />
          </div>
          <h2 className="cl-serif text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-[#3f3f3f]">
            A partial list of those
            <br />
            <span className="italic font-light text-[#721011]">whose standards we serve.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {allClients.map((client, idx) => (
            <div
              key={client.name}
              className={`group flex items-center justify-center aspect-[3/2] px-6 py-8 transition-opacity hover:opacity-100 ${
                idx % 6 !== 5 ? "md:border-r" : ""
              } ${idx < allClients.length - 6 ? "border-b" : ""} border-[#3f3f3f]/[0.08]`}
            >
              <div className="opacity-75 group-hover:opacity-100 transition-opacity">
                <LogoItem client={client} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="cl-serif italic text-[17px] text-[#3f3f3f]/60 mb-6">
            Twenty-three institutions. Twelve industries. Fifteen countries.
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold text-[#3f3f3f] border-b border-[#3f3f3f] pb-1 hover:text-[#721011] hover:border-[#721011] transition-colors"
          >
            Read the Case Studies
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
