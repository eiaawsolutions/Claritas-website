"use client";

import { useEffect, useRef, useState } from "react";
import { Temperature, TEMPERATURE_STYLE } from "@/lib/bmmb-demo-data";

/* ── Predictive score ring ──────────────────────────────────────────── */

export function ScoreRing({
  score,
  size = 52,
  stroke = 4,
}: {
  score: number;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const color = score >= 85 ? "#721011" : score >= 70 ? "#b5731f" : "#6b7a7f";
  const offset = c - (score / 100) * c;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(63,63,63,0.10)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center cl-serif tabular-nums"
        style={{ color, fontSize: size * 0.34, fontWeight: 500 }}
      >
        {score}
      </div>
    </div>
  );
}

/* ── Temperature pill ───────────────────────────────────────────────── */

export function TemperaturePill({ t }: { t: Temperature }) {
  const s = TEMPERATURE_STYLE[t];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
      style={{
        color: s.text,
        background: `${s.dot}12`,
        boxShadow: `inset 0 0 0 1px ${s.ring}`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
      {s.label}
    </span>
  );
}

/* ── Section eyebrow used inside the workspace panels ───────────────── */

export function PanelLabel({
  step,
  title,
  accent,
}: {
  step: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className="cl-serif italic text-[15px] leading-none"
        style={{ color: accent ?? "#721011" }}
      >
        {step}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3f3f3f]/55">
        {title}
      </span>
    </div>
  );
}

/* ── Typing-effect hook — reveals text char-by-char (respects reduced motion) ── */

export function useTypewriter(text: string, active: boolean, cps = 90) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      // Don't wipe the finished text when the caller stops the animation —
      // it stays on screen for proof-reading. Only a text change resets it.
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setOut(text);
      setDone(true);
      return;
    }

    setOut("");
    setDone(false);
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = (ts - start) / 1000;
      const n = Math.min(text.length, Math.floor(elapsed * cps));
      setOut(text.slice(0, n));
      if (n < text.length) {
        raf.current = requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };
    raf.current = requestAnimationFrame(step);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, active, cps]);

  return { out, done };
}
