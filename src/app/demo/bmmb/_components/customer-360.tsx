"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, TrendingDown, Minus, ShieldCheck, Sparkles } from "lucide-react";
import {
  Lead,
  NextBestAction,
  CURRENCY,
  NBA_KIND_LABEL,
} from "@/lib/bmmb-demo-data";
import { ScoreRing, TemperaturePill, PanelLabel } from "./atoms";

const TREND_ICON = {
  Growing: TrendingUp,
  Stable: Minus,
  Declining: TrendingDown,
} as const;

const TREND_COLOR = {
  Growing: "#3d7a52",
  Stable: "#6b7a7f",
  Declining: "#721011",
} as const;

const WEIGHT_WIDTH = { strong: "100%", moderate: "66%", supporting: "38%" } as const;

export function Customer360({
  lead,
  selectedNba,
  onSelectNba,
}: {
  lead: Lead;
  selectedNba: string;
  onSelectNba: (id: string) => void;
}) {
  const Trend = TREND_ICON[lead.balanceTrend];

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      {/* ── Customer 360 header ─────────────────────────────────── */}
      <div className="cl-gradient-accent-sweep border-b border-[#3f3f3f]/[0.08] px-6 py-5 md:px-8 md:py-6">
        <PanelLabel step="360°" title="Customer View" />
        <div className="mt-4 flex flex-wrap items-start gap-5">
          <ScoreRing score={lead.score} size={68} stroke={5} />
          <div className="min-w-0 flex-1">
            <h2 className="cl-serif text-[26px] leading-tight tracking-[-0.01em] text-[#3f3f3f] md:text-[30px]">
              {lead.name}
            </h2>
            <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3f3f3f]/45">
                {lead.ref}
              </span>
              <span className="text-[#3f3f3f]/20">·</span>
              <TemperaturePill t={lead.temperature} />
              <span className="rounded-full bg-[#3f3f3f]/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3f3f3f]/55">
                {lead.segment}
              </span>
            </div>
            <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-[#3f3f3f]/70">
              {lead.snapshot}
            </p>
          </div>
        </div>

        {/* facts strip */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Fact label="Tenure" value={`${lead.tenureYears} yrs`} />
          <Fact
            label="Balance"
            value={lead.balanceTrend}
            icon={<Trend className="h-3.5 w-3.5" style={{ color: TREND_COLOR[lead.balanceTrend] }} />}
            valueColor={TREND_COLOR[lead.balanceTrend]}
          />
          <Fact label="Churn Risk" value={lead.churnRisk} />
          <Fact label="Last Touch" value={lead.channel} />
        </div>
      </div>

      {/* ── Why this score ──────────────────────────────────────── */}
      <div className="border-b border-[#3f3f3f]/[0.08] px-6 py-5 md:px-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-[#721011]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3f3f3f]/55">
            Why the model scored this {lead.score}
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          {lead.factors.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#3f3f3f]/[0.07]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: WEIGHT_WIDTH[f.weight] }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      f.weight === "strong"
                        ? "#721011"
                        : f.weight === "moderate"
                        ? "#b5731f"
                        : "#a3aeb2",
                  }}
                />
              </div>
              <span className="w-[58%] shrink-0 text-[12.5px] leading-snug text-[#3f3f3f]/70">
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Next Best Action engine ─────────────────────────────── */}
      <div className="px-6 py-5 md:px-8">
        <PanelLabel step="NBA" title="Next Best Action · Decisioning" />
        <p className="mt-2 text-[12.5px] text-[#3f3f3f]/60">
          Real-time recommendations pushed to Customer 360 & digital channels.
        </p>
        <div className="mt-4 space-y-3">
          {lead.nbas.map((nba, i) => (
            <NbaCard
              key={nba.id}
              nba={nba}
              index={i}
              active={nba.id === selectedNba}
              onSelect={() => onSelectNba(nba.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Fact({
  label,
  value,
  icon,
  valueColor,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  valueColor?: string;
}) {
  return (
    <div className="rounded-lg bg-white/70 px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(63,63,63,0.06)]">
      <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#3f3f3f]/40">
        {label}
      </div>
      <div
        className="mt-1 flex items-center gap-1.5 text-[14px] font-semibold"
        style={{ color: valueColor ?? "#3f3f3f" }}
      >
        {icon}
        {value}
      </div>
    </div>
  );
}

function NbaCard({
  nba,
  index,
  active,
  onSelect,
}: {
  nba: NextBestAction;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  const primary = index === 0;
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className={`group block w-full rounded-xl border p-4 text-left transition-all ${
        active
          ? "border-[#721011]/40 bg-[#721011]/[0.035] cl-paper-edge-crimson"
          : "border-[#3f3f3f]/[0.1] bg-white hover:border-[#721011]/25"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] ${
              primary ? "bg-[#721011] text-white" : "bg-[#3f3f3f]/[0.08] text-[#3f3f3f]/60"
            }`}
          >
            {NBA_KIND_LABEL[nba.kind]}
          </span>
          {primary && (
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#721011]/70">
              Recommended
            </span>
          )}
        </div>
        <div className="text-right">
          <div className="cl-serif text-[20px] leading-none text-[#721011] tabular-nums">
            {nba.propensity}
            <span className="text-[11px] text-[#721011]/50">%</span>
          </div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#3f3f3f]/40">
            propensity
          </div>
        </div>
      </div>

      <h4 className="mt-3 cl-serif text-[18px] leading-tight text-[#3f3f3f]">
        {nba.headline}
      </h4>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#3f3f3f]/65">{nba.detail}</p>

      <div className="mt-3 flex items-center justify-between border-t border-[#3f3f3f]/[0.07] pt-3">
        <span className="flex items-center gap-1.5 text-[11.5px] text-[#3f3f3f]/60">
          <ShieldCheck className="h-3.5 w-3.5 text-[#3d7a52]" />
          {nba.product}
        </span>
        {nba.estValue > 0 && (
          <span className="text-[11.5px] font-semibold text-[#3f3f3f]/80 tabular-nums">
            {CURRENCY.format(nba.estValue)}
          </span>
        )}
      </div>

      <div
        className={`mt-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
          active ? "text-[#721011]" : "text-[#3f3f3f]/45 group-hover:text-[#721011]"
        }`}
      >
        {active ? "Selected for outreach" : "Draft outreach"}
        <ArrowUpRight className="h-3 w-3" />
      </div>
    </motion.button>
  );
}
