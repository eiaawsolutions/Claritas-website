"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Clock, Sparkle, Database, Inbox, Cpu } from "lucide-react";
import {
  AUTO_EVENTS,
  AutoEvent,
  AutoEventType,
  AUTO_TYPE_LABEL,
} from "@/lib/bmmb-demo-data";
import { PanelLabel } from "./atoms";

const TYPE_META: Record<
  AutoEventType,
  { icon: typeof Route; color: string }
> = {
  routing: { icon: Route, color: "#721011" },
  sla: { icon: Clock, color: "#b5731f" },
  hygiene: { icon: Sparkle, color: "#3d7a52" },
  enrichment: { icon: Database, color: "#4a6a8a" },
  ingestion: { icon: Inbox, color: "#6b5a8a" },
};

export function AutonomousLog() {
  // Start with a few events already on screen, then tick the rest in.
  const [count, setCount] = useState(4);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(AUTO_EVENTS.length);
      return;
    }
    if (paused) return;

    timer.current = setInterval(() => {
      setCount((c) => (c >= AUTO_EVENTS.length ? 4 : c + 1));
    }, 2600);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  // Newest first.
  const shown: AutoEvent[] = AUTO_EVENTS.slice(0, count).reverse();

  return (
    <div
      className="flex h-full flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="border-b border-[#3f3f3f]/[0.08] px-5 py-4">
        <div className="flex items-center justify-between">
          <PanelLabel step="03" title="Autonomous · Manage" />
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3d7a52]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3d7a52]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3d7a52]" />
            </span>
            Live
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-[12px] leading-snug text-[#3f3f3f]/60">
          <Cpu className="h-3 w-3 shrink-0 text-[#721011]" />
          AI agents handling routing, SLAs & pipeline hygiene — no human intervention.
        </p>
      </div>

      <div className="flex-1 space-y-0 overflow-y-auto px-3 py-2">
        <AnimatePresence initial={false}>
          {shown.map((ev, i) => {
            const meta = TYPE_META[ev.type];
            const Icon = meta.icon;
            const isNewest = i === 0;
            return (
              <motion.div
                key={ev.id}
                layout
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex gap-3 rounded-lg px-2.5 py-2.5 ${
                  isNewest ? "bg-[#721011]/[0.03]" : ""
                }`}
              >
                <div
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${meta.color}14`, color: meta.color }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: meta.color }}
                    >
                      {AUTO_TYPE_LABEL[ev.type]}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.1em] text-[#3f3f3f]/35">
                      {ev.source}
                    </span>
                    {ev.leadRef && (
                      <span className="ml-auto rounded bg-[#3f3f3f]/[0.05] px-1.5 py-0.5 text-[9px] font-medium tracking-[0.06em] text-[#3f3f3f]/50">
                        {ev.leadRef}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[12px] leading-snug text-[#3f3f3f]/75">
                    {ev.message}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="border-t border-[#3f3f3f]/[0.08] px-5 py-2.5 text-center text-[10px] leading-snug text-[#3f3f3f]/40">
        Bridging MAP 2.0 · CMS · core CRM. Hover to pause the stream.
      </div>
    </div>
  );
}
