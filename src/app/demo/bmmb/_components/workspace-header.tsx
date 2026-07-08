"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { WORKSPACE_METRICS, CURRENCY } from "@/lib/bmmb-demo-data";

export function WorkspaceHeader() {
  const m = WORKSPACE_METRICS;
  return (
    <header className="sticky top-0 z-40 border-b border-[#3f3f3f]/[0.1] bg-white/85 backdrop-blur-xl">
      <div className="flex items-center gap-4 px-4 py-3 md:px-6">
        {/* Claritas mark + client lockup */}
        <div className="flex items-center gap-3.5">
          <Link
            href="/solutions/fintech"
            className="flex items-center gap-2 text-[#3f3f3f]/50 transition-colors hover:text-[#721011]"
            aria-label="Back to Banking & Fintech solution"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Image
            src="/claritas-logo.svg"
            alt="Claritas"
            width={140}
            height={37}
            priority
            className="h-7 w-auto"
          />
          <span className="hidden h-6 w-px bg-[#3f3f3f]/15 sm:block" />
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="cl-serif text-[15px] leading-none text-[#3f3f3f]">
                Bank Muamalat
              </span>
              <span className="rounded bg-[#721011]/10 px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#721011]">
                Horizon 4
              </span>
            </div>
            <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3f3f3f]/40">
              Intelligent Sales Engine · Demo
            </div>
          </div>
        </div>

        {/* metrics strip */}
        <div className="ml-auto hidden items-stretch divide-x divide-[#3f3f3f]/[0.08] lg:flex">
          <Metric value={m.leadsScoredToday.toString()} label="Scored today" />
          <Metric value={m.hotLeads.toString()} label="Hot leads" accent />
          <Metric value={CURRENCY.format(m.pipelineValue)} label="Pipeline value" />
          <Metric value={m.slaAlerts.toString()} label="SLA alerts" />
          <Metric value={`${m.autonomousActions}`} label="Auto actions" />
        </div>

        {/* demo tag (always visible) */}
        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <span className="flex items-center gap-1.5 rounded-full bg-[#3d7a52]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#2f6141]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3d7a52]" />
            Simulated
          </span>
        </div>
      </div>
    </header>
  );
}

function Metric({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 text-center first:pl-0 last:pr-0"
    >
      <div
        className="cl-serif text-[17px] leading-none tabular-nums"
        style={{ color: accent ? "#721011" : "#3f3f3f" }}
      >
        {value}
      </div>
      <div className="mt-1 whitespace-nowrap text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#3f3f3f]/40">
        {label}
      </div>
    </motion.div>
  );
}
