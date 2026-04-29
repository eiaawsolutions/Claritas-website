"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, Maximize2, X, Sparkles } from "lucide-react";

/* ──────────────────────────────────────────────
   V14 — CARTOGRAPH
   The homepage IS an interactive map of customer relationships.
   Pan, zoom, click nodes. No conventional scroll page.
   Thesis: a CRM company should show what a CRM sees.
   ────────────────────────────────────────────── */

type NodeType = "anchor" | "customer" | "deal" | "interaction" | "agent";

type Node = {
  id: string;
  label: string;
  sub?: string;
  type: NodeType;
  x: number;  // % of canvas
  y: number;
  meta?: { value?: string; stage?: string; channel?: string; sentiment?: string; date?: string };
};

type Edge = { from: string; to: string; weight?: number; label?: string };

const NODES: Node[] = [
  { id: "claritas", label: "Claritas", sub: "Customer Graph", type: "anchor", x: 50, y: 50 },

  // 4 enterprise customers around the anchor
  { id: "fgv", label: "FGV Holdings", sub: "Plantation · 12 estates", type: "customer", x: 22, y: 26 },
  { id: "singtel", label: "Singtel", sub: "Telco · APAC", type: "customer", x: 78, y: 28 },
  { id: "nandos", label: "Nando's Asia", sub: "F&B · 240 outlets", type: "customer", x: 18, y: 72 },
  { id: "estate", label: "Estate 123", sub: "PropTech · Kuala Lumpur", type: "customer", x: 80, y: 74 },

  // FGV branch — deal + interaction
  { id: "fgv-deal", label: "Q2 Renewal", sub: "RM 480k · Negotiation", type: "deal", x: 10, y: 14, meta: { value: "RM 480,000", stage: "Negotiation", date: "2026-04-12" } },
  { id: "fgv-meet", label: "Board call", sub: "12 Apr · Sentiment ▲", type: "interaction", x: 32, y: 12, meta: { channel: "Zoom · 47 min", sentiment: "Positive", date: "2026-04-12" } },
  { id: "fgv-agent", label: "Agent draft", sub: "Recovery email queued", type: "agent", x: 8, y: 38, meta: { channel: "Email · awaiting review", date: "2026-04-29" } },

  // Singtel branch
  { id: "singtel-deal", label: "ASEAN expansion", sub: "RM 2.1M · Proposal", type: "deal", x: 92, y: 16, meta: { value: "RM 2,100,000", stage: "Proposal", date: "2026-04-21" } },
  { id: "singtel-meet", label: "RFP submitted", sub: "21 Apr · Awaiting", type: "interaction", x: 70, y: 14, meta: { channel: "Document · 47 pages", date: "2026-04-21" } },
  { id: "singtel-agent", label: "Forecast scoring", sub: "82% confidence", type: "agent", x: 92, y: 42, meta: { channel: "ML · refreshed hourly", date: "2026-04-29" } },

  // Nando's branch
  { id: "nandos-deal", label: "Loyalty rollout", sub: "RM 320k · Discovery", type: "deal", x: 8, y: 82, meta: { value: "RM 320,000", stage: "Discovery", date: "2026-04-18" } },
  { id: "nandos-meet", label: "Field visit · KL", sub: "18 Apr · 4 outlets", type: "interaction", x: 30, y: 88, meta: { channel: "On-site · 6h", date: "2026-04-18" } },

  // Estate branch
  { id: "estate-deal", label: "Closed Won", sub: "RM 95k · 23 Apr", type: "deal", x: 92, y: 84, meta: { value: "RM 95,000", stage: "Closed Won", date: "2026-04-23" } },
  { id: "estate-meet", label: "Champagne dinner", sub: "23 Apr · Win party", type: "interaction", x: 70, y: 88, meta: { channel: "In-person · KL", sentiment: "Celebrated", date: "2026-04-23" } },
  { id: "estate-agent", label: "Onboarding agent", sub: "12 tasks dispatched", type: "agent", x: 92, y: 60, meta: { channel: "Workflow · running", date: "2026-04-24" } },
];

const EDGES: Edge[] = [
  { from: "claritas", to: "fgv", weight: 4, label: "18-yr relationship" },
  { from: "claritas", to: "singtel", weight: 4, label: "11-yr relationship" },
  { from: "claritas", to: "nandos", weight: 3, label: "6-yr relationship" },
  { from: "claritas", to: "estate", weight: 2, label: "2-yr relationship" },

  { from: "fgv", to: "fgv-deal" }, { from: "fgv", to: "fgv-meet" }, { from: "fgv", to: "fgv-agent" },
  { from: "singtel", to: "singtel-deal" }, { from: "singtel", to: "singtel-meet" }, { from: "singtel", to: "singtel-agent" },
  { from: "nandos", to: "nandos-deal" }, { from: "nandos", to: "nandos-meet" },
  { from: "estate", to: "estate-deal" }, { from: "estate", to: "estate-meet" }, { from: "estate", to: "estate-agent" },
];

const TYPE_COLORS: Record<NodeType, { fill: string; stroke: string; ring: string }> = {
  anchor: { fill: "#fbbf24", stroke: "#f59e0b", ring: "rgba(251,191,36,0.25)" },
  customer: { fill: "#22d3ee", stroke: "#06b6d4", ring: "rgba(34,211,238,0.18)" },
  deal: { fill: "#a78bfa", stroke: "#8b5cf6", ring: "rgba(167,139,250,0.18)" },
  interaction: { fill: "#34d399", stroke: "#10b981", ring: "rgba(52,211,153,0.18)" },
  agent: { fill: "#f472b6", stroke: "#ec4899", ring: "rgba(244,114,182,0.18)" },
};

export default function CartographPage() {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState<Node | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  };
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging) return;
    setPan({
      x: dragStart.current.panX + (e.clientX - dragStart.current.x),
      y: dragStart.current.panY + (e.clientY - dragStart.current.y),
    });
  }, [dragging]);
  const onMouseUp = useCallback(() => setDragging(false), []);

  useEffect(() => {
    if (!dragging) return;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); setSelected(null); };

  return (
    <div className="bg-[#0a0e1a] text-white h-[calc(100vh-3.5rem)] overflow-hidden flex flex-col" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Top bar */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur shrink-0">
        <div className="px-6 h-14 flex items-center justify-between">
          <Link href="/versions/14" className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md grid place-items-center font-bold text-black" style={{ background: "#fbbf24" }}>C</div>
            <div>
              <div className="font-semibold text-sm tracking-tight">Claritas</div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-white/40 font-mono">live customer graph · interactive</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs text-white/60 font-mono uppercase tracking-wider">
            <Link href="#" className="hover:text-white">overview</Link>
            <Link href="#" className="hover:text-white">platform</Link>
            <Link href="#" className="hover:text-white">customers</Link>
            <Link href="#" className="hover:text-white">pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-emerald-400 px-2 py-1 border border-emerald-400/30 rounded">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              247 customers · 4.8B events
            </span>
            <Link href="#" className="text-xs uppercase tracking-wider px-4 py-2 bg-[#fbbf24] text-black font-bold hover:bg-white">
              Map your graph →
            </Link>
          </div>
        </div>
      </header>

      {/* Canvas + side panel */}
      <div className="flex-1 flex min-h-0">
        {/* Canvas */}
        <div className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing select-none" onMouseDown={onMouseDown}>
          {/* Grid bg */}
          <div aria-hidden className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: `${40 * zoom}px ${40 * zoom}px`,
              backgroundPosition: `${pan.x}px ${pan.y}px`,
            }} />

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(34,211,238,0.08) 0%, transparent 60%)" }} />

          <motion.div
            className="absolute inset-0"
            animate={{ x: pan.x, y: pan.y, scale: zoom }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            style={{ transformOrigin: "50% 50%" }}
          >
            {/* Edges (SVG layer) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {EDGES.map((e, i) => {
                const a = NODES.find((n) => n.id === e.from)!;
                const b = NODES.find((n) => n.id === e.to)!;
                return (
                  <g key={i}>
                    <line x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                      stroke="rgba(255,255,255,0.18)" strokeWidth={e.weight ? 0.18 : 0.08}
                      strokeDasharray={e.weight ? "0" : "0.4 0.3"} />
                    {e.weight && (
                      <circle cx={(a.x + b.x) / 2} cy={(a.y + b.y) / 2} r="0.4" fill="#fbbf24">
                        <animate attributeName="r" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            {NODES.map((n) => {
              const c = TYPE_COLORS[n.type];
              const size = n.type === "anchor" ? 22 : n.type === "customer" ? 16 : 11;
              const isActive = selected?.id === n.id;
              return (
                <motion.button
                  key={n.id}
                  onClick={(e) => { e.stopPropagation(); setSelected(n); }}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="absolute group"
                  style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: NODES.indexOf(n) * 0.04, type: "spring" }}
                >
                  <div className="relative grid place-items-center">
                    <div className="absolute rounded-full animate-pulse"
                      style={{ width: size * 2.2, height: size * 2.2, background: c.ring }} />
                    <div className={`relative rounded-full border-2 ${isActive ? "ring-4 ring-white" : ""}`}
                      style={{ width: size, height: size, background: c.fill, borderColor: c.stroke }} />
                    <div className={`mt-1.5 text-center transition-opacity ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                      style={{ fontSize: n.type === "anchor" ? 11 : 9 }}>
                      <div className="font-bold whitespace-nowrap" style={{ color: c.fill }}>{n.label}</div>
                      {n.sub && <div className="text-white/55 whitespace-nowrap text-[8px] mt-0.5">{n.sub}</div>}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Floating call-to-explore */}
          {!selected && zoom === 1 && (
            <div className="absolute top-6 left-6 max-w-sm">
              <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#fbbf24] mb-2">⌖ live demo · the claritas graph</div>
              <h1 className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight">
                Click any node. <span className="text-[#fbbf24]">Drag to pan. Zoom in.</span>
              </h1>
              <p className="mt-3 text-sm text-white/60">
                This is what your customer relationships look like inside Claritas — not as rows in a table, but as a living graph. Every node is queryable. Every edge is auditable. Every interaction is a typed event.
              </p>
            </div>
          )}

          {/* Zoom controls */}
          <div className="absolute bottom-6 left-6 flex flex-col gap-1 bg-black/60 backdrop-blur border border-white/10 rounded-lg p-1">
            <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))} className="h-9 w-9 grid place-items-center hover:bg-white/10 rounded">
              <ZoomIn className="h-4 w-4" />
            </button>
            <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))} className="h-9 w-9 grid place-items-center hover:bg-white/10 rounded">
              <ZoomOut className="h-4 w-4" />
            </button>
            <button onClick={reset} className="h-9 w-9 grid place-items-center hover:bg-white/10 rounded" title="Reset">
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur border border-white/10 rounded-lg p-3 text-[10px] font-mono uppercase tracking-wider space-y-1.5">
            {[
              { l: "Anchor", c: TYPE_COLORS.anchor.fill },
              { l: "Customer", c: TYPE_COLORS.customer.fill },
              { l: "Deal", c: TYPE_COLORS.deal.fill },
              { l: "Interaction", c: TYPE_COLORS.interaction.fill },
              { l: "Agent action", c: TYPE_COLORS.agent.fill },
            ].map((x) => (
              <div key={x.l} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: x.c }} />
                <span className="text-white/70">{x.l}</span>
              </div>
            ))}
          </div>

          {/* Bottom rail (live status) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/60 backdrop-blur border border-white/10 rounded-full px-5 py-2 text-[10px] font-mono uppercase tracking-wider text-white/60">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> live</span>
            <span>{NODES.length} nodes · {EDGES.length} edges</span>
            <span>zoom: {(zoom * 100).toFixed(0)}%</span>
          </div>
        </div>

        {/* Side panel */}
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.aside
              key={selected.id}
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="w-full md:w-[400px] border-l border-white/10 bg-black/60 backdrop-blur-xl flex flex-col"
            >
              <div className="border-b border-white/10 p-5 flex items-start justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em]" style={{ color: TYPE_COLORS[selected.type].fill }}>
                    ◉ {selected.type}
                  </div>
                  <div className="mt-1 text-2xl font-semibold tracking-tight">{selected.label}</div>
                  {selected.sub && <div className="text-sm text-white/55 mt-1">{selected.sub}</div>}
                </div>
                <button onClick={() => setSelected(null)} className="h-7 w-7 grid place-items-center rounded hover:bg-white/10">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5 space-y-5 overflow-y-auto flex-1">
                {selected.meta && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mb-2">Metadata</div>
                    <div className="space-y-1.5">
                      {Object.entries(selected.meta).map(([k, v]) => (
                        <div key={k} className="flex justify-between text-sm border-b border-white/5 pb-1.5">
                          <span className="text-white/50 capitalize">{k}</span>
                          <span className="font-mono text-white/90">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selected.type === "customer" && (
                  <>
                    <div className="border border-white/10 rounded-lg p-4 bg-white/[0.02]">
                      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#f472b6] mb-2">
                        <Sparkles className="h-3 w-3" /> Agent insight
                      </div>
                      <p className="text-sm text-white/85 leading-relaxed">
                        Engagement velocity up 28% over the last 30 days. Champion identified: VP Operations. Recommend executive briefing within 14 days to maintain momentum.
                      </p>
                      <button className="mt-3 text-[11px] font-mono uppercase bg-white text-black px-3 py-1.5 rounded">
                        Schedule briefing →
                      </button>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mb-2">Recent events</div>
                      {[
                        ["29 Apr · 11:42", "Agent drafted recovery email"],
                        ["28 Apr · 16:08", "Stage moved → Negotiation"],
                        ["21 Apr · 09:30", "Board call scheduled"],
                        ["18 Apr · 14:15", "Document opened (47s)"],
                      ].map(([t, e]) => (
                        <div key={t} className="flex gap-3 py-1.5 border-b border-white/5 text-xs">
                          <span className="text-white/40 font-mono shrink-0 w-24">{t}</span>
                          <span className="text-white/80">{e}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {selected.type === "anchor" && (
                  <div className="space-y-4">
                    <p className="text-sm text-white/70 leading-relaxed">
                      Every node above is a real entity inside the Claritas customer graph. Every edge is a real relationship. The platform is event-sourced — you can replay any state, any time.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[["247", "customers"], ["4.8B", "events"], ["18", "yrs of data"], ["98.4%", "renewal"]].map(([v, l]) => (
                        <div key={l} className="border border-white/10 p-3 rounded">
                          <div className="text-2xl font-bold text-[#fbbf24]">{v}</div>
                          <div className="text-[10px] uppercase tracking-wider text-white/50 mt-0.5">{l}</div>
                        </div>
                      ))}
                    </div>
                    <Link href="#" className="block text-center bg-[#fbbf24] text-black font-bold py-3 rounded hover:bg-white text-sm">
                      Bring your customers in →
                    </Link>
                  </div>
                )}
              </div>
            </motion.aside>
          ) : (
            <motion.aside
              key="empty"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              className="hidden lg:flex w-[400px] border-l border-white/10 bg-black/60 backdrop-blur-xl flex-col p-6"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mb-4">⌖ How to read this map</div>
              <div className="space-y-5 text-sm text-white/70">
                {[
                  ["The yellow node is Claritas — the platform.", "Every other node is a real entity managed inside the system."],
                  ["Customers orbit the platform.", "Edge thickness shows relationship age. The thickest edges go back to 2008."],
                  ["Each customer has its own galaxy.", "Deals, interactions, and AI agent actions cluster around the parent."],
                  ["Click anything to inspect.", "Replayable history, sentiment, agent recommendations, and the next-best action."],
                ].map(([h, b], i) => (
                  <div key={i} className="border-l-2 pl-4" style={{ borderColor: "#fbbf24" }}>
                    <div className="font-semibold text-white">{h}</div>
                    <div className="mt-1 text-white/55">{b}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/40">
                v14 · cartograph · the homepage as the product
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
