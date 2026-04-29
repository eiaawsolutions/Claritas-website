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
      {/* Persistent rail */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-black/85 backdrop-blur-md border-b border-white/10 text-white">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 h-12 flex items-center gap-3 md:gap-5">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60 hover:text-white transition shrink-0"
          >
            ← Live Site
          </Link>
          <div className="h-3 w-px bg-white/20 shrink-0" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 shrink-0 hidden md:inline">
            Design Review
          </span>
          <div className="h-3 w-px bg-white/20 shrink-0 hidden md:block" />

          {/* Chips */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none flex-1">
            {VERSIONS.map((v) => {
              const isActive = String(v.n) === current;
              return (
                <Link
                  key={v.n}
                  href={`/versions/${v.n}`}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[10px] uppercase tracking-[0.16em] font-semibold transition border ${
                    isActive
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white/70 border-white/15 hover:bg-white/5 hover:text-white hover:border-white/30"
                  }`}
                  title={v.tag}
                >
                  <span className="opacity-60">V{v.n}</span>
                  <span>{v.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Active label + drawer toggle */}
          {active && (
            <button
              onClick={() => setOpen((s) => !s)}
              className="hidden lg:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white shrink-0"
            >
              <span>{active.tag}</span>
              <span className="opacity-50">{open ? "▴" : "▾"}</span>
            </button>
          )}
        </div>

        {/* Expanded drawer */}
        {open && active && (
          <div className="border-t border-white/10 bg-black/95 px-4 md:px-6 py-4 text-[12px] text-white/70">
            <div className="mx-auto max-w-[1600px] grid grid-cols-2 md:grid-cols-4 gap-4">
              {VERSIONS.map((v) => (
                <Link
                  key={v.n}
                  href={`/versions/${v.n}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-white transition"
                >
                  <div className="text-[9px] uppercase tracking-[0.24em] text-white/40">
                    Version {v.n}
                  </div>
                  <div className="text-sm font-medium text-white mt-0.5">{v.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 mt-0.5">
                    {v.tag}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer so content sits below the bar */}
      <div className="h-12" aria-hidden />
    </>
  );
}
