"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Sparkles, Cpu, ArrowRight } from "lucide-react";
import { LEADS } from "@/lib/bmmb-demo-data";
import { WorkspaceHeader } from "./workspace-header";
import { LeadFeed } from "./lead-feed";
import { Customer360 } from "./customer-360";
import { OutreachComposer } from "./outreach-composer";
import { AutonomousLog } from "./autonomous-log";

export function Workspace() {
  const rankedFirst = [...LEADS].sort((a, b) => b.score - a.score)[0];
  const [activeId, setActiveId] = useState(rankedFirst.id);
  const [selectedNba, setSelectedNba] = useState(rankedFirst.nbas[0].id);
  const [showIntro, setShowIntro] = useState(true);

  const lead = useMemo(
    () => LEADS.find((l) => l.id === activeId) ?? LEADS[0],
    [activeId]
  );
  const nba = useMemo(
    () => lead.nbas.find((n) => n.id === selectedNba) ?? lead.nbas[0],
    [lead, selectedNba]
  );

  function handleSelectLead(id: string) {
    setActiveId(id);
    const next = LEADS.find((l) => l.id === id);
    if (next) setSelectedNba(next.nbas[0].id);
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-[#faf8f7]">
      <WorkspaceHeader />

      {/* ── Workspace grid ─────────────────────────────────────────
          Desktop: 3 columns (feed · 360+nba · composer) with the
          autonomous log docked under the feed.
          Mobile: stacked, scrollable.                                */}
      <div className="grid flex-1 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(300px,340px)_minmax(0,1fr)_minmax(340px,400px)]">
        {/* Left rail: predictive feed + autonomous log */}
        <div className="flex min-h-0 flex-col border-b border-[#3f3f3f]/[0.08] lg:border-b-0 lg:border-r">
          <div className="min-h-0 flex-[1.15] overflow-hidden border-b border-[#3f3f3f]/[0.08] bg-white">
            <LeadFeed activeId={activeId} onSelect={handleSelectLead} />
          </div>
          <div className="hidden min-h-0 flex-1 overflow-hidden bg-white lg:block">
            <AutonomousLog />
          </div>
        </div>

        {/* Center: Customer 360 + NBA */}
        <div className="min-h-0 overflow-hidden border-b border-[#3f3f3f]/[0.08] bg-[#fdfbfa] lg:border-b-0 lg:border-r">
          <AnimatePresence mode="wait">
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Customer360
                lead={lead}
                selectedNba={selectedNba}
                onSelectNba={setSelectedNba}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: generative composer */}
        <div className="min-h-0 overflow-hidden bg-white">
          <OutreachComposer lead={lead} nba={nba} />
        </div>

        {/* Autonomous log on mobile (stacks last) */}
        <div className="min-h-[380px] overflow-hidden border-t border-[#3f3f3f]/[0.08] bg-white lg:hidden">
          <AutonomousLog />
        </div>
      </div>

      {/* ── Intro overlay ──────────────────────────────────────────── */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-[#2a2a2a]/45 backdrop-blur-sm"
              onClick={() => setShowIntro(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white cl-paper-edge"
            >
              <div className="cl-gradient-dark px-8 py-7 text-white">
                <div className="cl-eyebrow text-[#d4696a]">Claritas × Bank Muamalat</div>
                <h2 className="mt-3 cl-serif text-[30px] leading-[1.05] tracking-[-0.01em]">
                  The Intelligent<br />
                  <span className="italic text-[#d4696a]">Sales Engine.</span>
                </h2>
                <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/70">
                  A working preview of Horizon 4 — the AI Sales Triad running inside a
                  Relationship Manager&apos;s CRM workspace.
                </p>
              </div>

              <div className="space-y-3 px-8 py-6">
                <IntroRow
                  icon={Target}
                  step="Predictive"
                  text="Leads scored on 8 years of behaviour, with the reasoning shown and a ranked Next Best Action."
                />
                <IntroRow
                  icon={Sparkles}
                  step="Generative"
                  text="One-click, personalised WhatsApp / email / call scripts — Shariah-guardrailed, RM-approved before sending."
                />
                <IntroRow
                  icon={Cpu}
                  step="Autonomous"
                  text="Agents route leads, watch SLAs, and keep the pipeline clean — live in the left rail."
                />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#3f3f3f]/[0.08] px-8 py-4">
                <span className="text-[10.5px] leading-snug text-[#3f3f3f]/45">
                  Simulated data · illustrative demo · no live customer records.
                </span>
                <button
                  type="button"
                  onClick={() => setShowIntro(false)}
                  className="group flex shrink-0 items-center gap-2 rounded-lg bg-[#3f3f3f] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#721011]"
                >
                  Enter Workspace
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowIntro(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer sliver — link back into the marketing site */}
      <div className="flex shrink-0 items-center justify-between border-t border-[#3f3f3f]/[0.1] bg-white px-4 py-2 md:px-6">
        <span className="text-[10px] leading-snug text-[#3f3f3f]/40">
          Claritas™ CRM · Horizon 4 concept demo for Bank Muamalat Malaysia Berhad
        </span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setShowIntro(true)}
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3f3f3f]/50 transition-colors hover:text-[#721011]"
          >
            How it works
          </button>
          <Link
            href="/contact?demo=true"
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#721011] transition-colors hover:text-[#3f3f3f]"
          >
            Request Briefing
          </Link>
        </div>
      </div>
    </div>
  );
}

function IntroRow({
  icon: Icon,
  step,
  text,
}: {
  icon: typeof Target;
  step: string;
  text: string;
}) {
  return (
    <div className="flex gap-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#721011]/25 bg-[#721011]/[0.06] text-[#721011]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#721011]">
          {step}
        </div>
        <p className="mt-0.5 text-[12.5px] leading-snug text-[#3f3f3f]/70">{text}</p>
      </div>
    </div>
  );
}
