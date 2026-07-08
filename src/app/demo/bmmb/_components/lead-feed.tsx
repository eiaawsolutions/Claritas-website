"use client";

import { motion } from "framer-motion";
import { Lead, LEADS } from "@/lib/bmmb-demo-data";
import { ScoreRing, TemperaturePill, PanelLabel } from "./atoms";

const CHANNEL_GLYPH: Record<Lead["channel"], string> = {
  Website: "Web",
  WhatsApp: "WA",
  Branch: "Br",
  "i-Muamalat": "iM",
  Atlas: "At",
  "MAP Webform": "MAP",
};

export function LeadFeed({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const ranked = [...LEADS].sort((a, b) => b.score - a.score);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-[#3f3f3f]/[0.08] px-5 py-4">
        <PanelLabel step="01" title="Predictive · Target" />
        <p className="mt-2 text-[12.5px] leading-snug text-[#3f3f3f]/60">
          Leads scored on 8 years of behaviour. Ranked by win-likelihood.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {ranked.map((lead, i) => {
          const active = lead.id === activeId;
          return (
            <motion.button
              key={lead.id}
              type="button"
              onClick={() => onSelect(lead.id)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative flex w-full items-center gap-3.5 border-b border-[#3f3f3f]/[0.06] px-5 py-4 text-left transition-colors ${
                active ? "bg-[#721011]/[0.045]" : "hover:bg-[#3f3f3f]/[0.025]"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="lead-active-bar"
                  className="absolute left-0 top-0 h-full w-[3px] bg-[#721011]"
                />
              )}
              <ScoreRing score={lead.score} size={46} stroke={3.5} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate cl-serif text-[15px] leading-tight text-[#3f3f3f]">
                    {lead.name}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <TemperaturePill t={lead.temperature} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3f3f3f]/40">
                    {lead.segment}
                  </span>
                </div>
                <p className="mt-1.5 truncate text-[11.5px] leading-snug text-[#3f3f3f]/55">
                  {lead.buyingSignal}
                </p>
              </div>
              <span className="shrink-0 rounded border border-[#3f3f3f]/12 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#3f3f3f]/45">
                {CHANNEL_GLYPH[lead.channel]}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
