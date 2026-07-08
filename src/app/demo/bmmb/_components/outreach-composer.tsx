"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  PhoneCall,
  ShieldAlert,
  Check,
  RefreshCw,
  Send,
  Sparkles,
} from "lucide-react";
import { Lead, DraftChannel, NextBestAction } from "@/lib/bmmb-demo-data";
import { PanelLabel, useTypewriter } from "./atoms";

const CHANNELS: { key: DraftChannel; label: string; icon: typeof Mail }[] = [
  { key: "WhatsApp", label: "WhatsApp", icon: MessageCircle },
  { key: "Email", label: "Email", icon: Mail },
  { key: "Call Script", label: "Call Script", icon: PhoneCall },
];

type Phase = "idle" | "thinking" | "typing" | "ready" | "sent";

export function OutreachComposer({
  lead,
  nba,
}: {
  lead: Lead;
  nba: NextBestAction | undefined;
}) {
  const [channel, setChannel] = useState<DraftChannel>("WhatsApp");
  const [phase, setPhase] = useState<Phase>("idle");
  const [regenKey, setRegenKey] = useState(0);

  const draft = lead.drafts[channel];

  // Re-run the "thinking → typing" sequence whenever the target changes.
  useEffect(() => {
    setPhase("thinking");
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setPhase("typing"), reduce ? 120 : 950);
    return () => clearTimeout(t);
  }, [lead.id, channel, nba?.id, regenKey]);

  const typing = phase === "typing";
  const { out, done } = useTypewriter(draft.body, typing, 140);

  useEffect(() => {
    if (typing && done) setPhase("ready");
  }, [typing, done]);

  const contextLine = useMemo(() => {
    if (!nba) return `Personalised for ${lead.name.split(" ")[0]}`;
    return `${nba.headline} · grounded in ${lead.tenureYears}-yr history`;
  }, [nba, lead]);

  return (
    <div className="flex h-full flex-col">
      {/* header */}
      <div className="border-b border-[#3f3f3f]/[0.08] px-5 py-4">
        <PanelLabel step="02" title="Generative · Engage" />
        <p className="mt-2 flex items-center gap-1.5 text-[12px] leading-snug text-[#3f3f3f]/60">
          <Sparkles className="h-3 w-3 shrink-0 text-[#721011]" />
          {contextLine}
        </p>
      </div>

      {/* channel tabs */}
      <div className="flex gap-1 border-b border-[#3f3f3f]/[0.08] px-3 py-2.5">
        {CHANNELS.map((c) => {
          const Icon = c.icon;
          const on = c.key === channel;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setChannel(c.key)}
              className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                on ? "text-[#721011]" : "text-[#3f3f3f]/45 hover:text-[#3f3f3f]/70"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="channel-tab"
                  className="absolute inset-0 rounded-lg bg-[#721011]/[0.07]"
                  transition={{ duration: 0.25 }}
                />
              )}
              <Icon className="relative h-3.5 w-3.5" />
              <span className="relative hidden sm:inline">{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* draft body */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {phase === "thinking" ? (
          <ThinkingState channel={channel} />
        ) : (
          <div>
            {channel === "Email" && draft.subject && (
              <div className="mb-3 border-b border-[#3f3f3f]/[0.08] pb-3">
                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#3f3f3f]/40">
                  Subject
                </div>
                <div className="mt-1 cl-serif text-[16px] leading-snug text-[#3f3f3f]">
                  {draft.subject}
                </div>
              </div>
            )}
            <div
              className={`whitespace-pre-wrap text-[13.5px] leading-relaxed text-[#3f3f3f]/85 ${
                channel === "Call Script" ? "font-[family-name:var(--font-inter)]" : ""
              }`}
            >
              {/* Animate char-by-char while typing; once ready/sent, hold the
                  full draft on screen so the RM can proof-read before sending. */}
              {phase === "typing" ? out : draft.body}
              {phase === "typing" && (
                <span className="ml-0.5 inline-block h-[15px] w-[7px] translate-y-[2px] animate-pulse bg-[#721011]" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* compliance note */}
      <AnimatePresence>
        {(phase === "ready" || phase === "sent") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#3f3f3f]/[0.08] bg-[#faf8f7] px-5 py-3"
          >
            <div className="flex gap-2.5">
              <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b5731f]" />
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#3f3f3f]/45">
                  Shariah & Compliance Guardrail
                </div>
                <p className="mt-1 text-[11.5px] leading-snug text-[#3f3f3f]/70">
                  {draft.complianceNote}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* action bar */}
      <div className="border-t border-[#3f3f3f]/[0.08] px-5 py-3.5">
        <AnimatePresence mode="wait">
          {phase === "sent" ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#3d7a52]/10 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2f6141]"
            >
              <Check className="h-4 w-4" />
              Sent via {channel} · logged to CRM
            </motion.div>
          ) : (
            <motion.div
              key="actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2.5"
            >
              <button
                type="button"
                onClick={() => setRegenKey((k) => k + 1)}
                disabled={phase !== "ready"}
                className="flex items-center gap-1.5 rounded-lg border border-[#3f3f3f]/15 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3f3f3f]/70 transition-colors hover:border-[#3f3f3f]/30 disabled:opacity-40"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Regenerate
              </button>
              <button
                type="button"
                onClick={() => setPhase("sent")}
                disabled={phase !== "ready"}
                className="group flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#3f3f3f] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#721011] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
                Approve &amp; Send
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="mt-2.5 text-center text-[10px] leading-snug text-[#3f3f3f]/40">
          RM reviews every draft. Human-in-the-loop before anything reaches a customer.
        </p>
      </div>
    </div>
  );
}

function ThinkingState({ channel }: { channel: DraftChannel }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#721011]/15" />
        <span className="absolute inset-2 animate-pulse rounded-full bg-[#721011]/25" />
        <Sparkles className="relative h-6 w-6 text-[#721011]" />
      </div>
      <div>
        <div className="cl-serif text-[16px] text-[#3f3f3f]">Drafting your {channel} outreach…</div>
        <div className="mt-1 flex items-center justify-center gap-1 text-[11.5px] text-[#3f3f3f]/55">
          Reading profile
          <span className="inline-flex gap-0.5">
            <Dot delay={0} />
            <Dot delay={0.2} />
            <Dot delay={0.4} />
          </span>
        </div>
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.1, repeat: Infinity, delay }}
      className="text-[#721011]"
    >
      ·
    </motion.span>
  );
}
