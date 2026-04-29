"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const VERSIONS = [
  { n: 1, name: "Monolith", tag: "Brutalist Editorial" },
  { n: 2, name: "Atelier", tag: "Boutique Consultancy" },
  { n: 3, name: "Quartz", tag: "Glassmorphism SaaS" },
  { n: 4, name: "Obsidian", tag: "Dark / Neon Crimson" },
  { n: 5, name: "Botanical", tag: "Heritage Organic" },
  { n: 6, name: "Kinetic", tag: "Motion Showcase" },
  { n: 7, name: "Dossier", tag: "Swiss Analyst Grid" },
  { n: 8, name: "Aurora", tag: "Modern Enterprise" },
  { n: 9, name: "Linen", tag: "Hermès Ultra-Airy" },
  { n: 10, name: "Helix", tag: "Apple Minimal" },
  { n: 11, name: "Ledger", tag: "Newspaper Editorial" },
  { n: 12, name: "Origami", tag: "Paper-Craft Tilted" },
  { n: 13, name: "Prism", tag: "Linear Light Engineering" },
  { n: 14, name: "Cartograph", tag: "Zoomable Relationship Map" },
  { n: 15, name: "Console", tag: "Live Operator Dashboard" },
  { n: 16, name: "Reel", tag: "Full-Screen Vertical Stories" },
  { n: 17, name: "Manifesto", tag: "Horizontal Scroll Essay" },
  { n: 18, name: "Diff", tag: "Before/After Sync Pane" },
  { n: 19, name: "Spreadsheet", tag: "The Page IS the Sheet" },
];

export function VersionToggle() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = pathname.match(/\/versions\/(\d+)/)?.[1];

  useEffect(() => {
    if (current) localStorage.setItem("claritas-version", current);
  }, [current]);

  const active = VERSIONS.find((v) => String(v.n) === current);

  return (
    <>
      {/* Persistent bright rail */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-[#721011] via-[#8d1a1c] to-[#721011] shadow-[0_4px_20px_rgba(114,16,17,0.4)] text-white">
        <div className="mx-auto max-w-[1700px] px-4 md:px-6 h-14 flex items-center gap-3 md:gap-5">
          <Link
            href="/"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-white/90 hover:text-white transition shrink-0 inline-flex items-center gap-1.5"
          >
            ← Live Site
          </Link>
          <div className="h-4 w-px bg-white/30 shrink-0" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold text-white shrink-0 hidden sm:inline">
            ⚡ Click to switch design ↓
          </span>
          <div className="h-4 w-px bg-white/30 shrink-0 hidden sm:block" />

          {/* Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none flex-1 py-1">
            {VERSIONS.map((v) => {
              const isActive = String(v.n) === current;
              return (
                <Link
                  key={v.n}
                  href={`/versions/${v.n}`}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold transition border ${
                    isActive
                      ? "bg-white text-[#721011] border-white shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                      : "bg-white/10 text-white border-white/30 hover:bg-white hover:text-[#721011] hover:border-white"
                  }`}
                  title={v.tag}
                >
                  <span className={isActive ? "opacity-70" : "opacity-80"}>V{v.n}</span>
                  <span>{v.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Active label + drawer toggle */}
          {active && (
            <button
              onClick={() => setOpen((s) => !s)}
              className="hidden lg:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-white/90 hover:text-white shrink-0 border border-white/30 px-3 py-1.5 rounded-md hover:bg-white/10"
            >
              <span>{active.tag}</span>
              <span className="opacity-80">{open ? "▴" : "▾"}</span>
            </button>
          )}
        </div>

        {/* Expanded drawer */}
        {open && active && (
          <div className="border-t border-white/20 bg-[#5a0c0d] px-4 md:px-6 py-4 text-[12px] text-white/80">
            <div className="mx-auto max-w-[1700px] grid grid-cols-2 md:grid-cols-4 gap-4">
              {VERSIONS.map((v) => (
                <Link
                  key={v.n}
                  href={`/versions/${v.n}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-white transition"
                >
                  <div className="text-[9px] uppercase tracking-[0.24em] text-white/50">
                    Version {v.n}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{v.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/70 mt-0.5">
                    {v.tag}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer so content sits below the bar */}
      <div className="h-14" aria-hidden />
    </>
  );
}
