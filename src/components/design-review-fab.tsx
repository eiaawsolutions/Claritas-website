"use client";

import Link from "next/link";

export function DesignReviewFAB() {
  return (
    <Link
      href="/versions"
      className="fixed bottom-6 left-6 z-[9998] inline-flex items-center gap-2 bg-[#721011] hover:bg-[#8d1a1c] text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(114,16,17,0.5)] text-[11px] uppercase tracking-[0.18em] font-bold transition-all hover:scale-105"
    >
      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
      View 8 design versions →
    </Link>
  );
}
