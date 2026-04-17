"use client";

import { useDesignVersion, type DesignVersionId } from "@/config/design-context";
import { motion } from "framer-motion";

const versions: { id: DesignVersionId; label: string; color: string }[] = [
  { id: "v1", label: "V1", color: "bg-coral-500" },
  { id: "v2", label: "V2", color: "bg-teal-700" },
  { id: "v3", label: "V3", color: "bg-amber-600" },
  { id: "v4", label: "V4", color: "bg-teal-500" },
  { id: "v5", label: "V5", color: "bg-blue-600" },
  { id: "v6", label: "V6", color: "bg-zinc-900" },
  { id: "v7", label: "V7", color: "bg-blue-500" },
  { id: "v8", label: "V8", color: "bg-luxury-gold" },
  { id: "v9", label: "V9", color: "bg-[#8B6F3E]" },
];

export function VersionSwitcher() {
  const { version, setVersion, cycleName } = useDesignVersion();

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex items-center gap-2">
      <div className="flex items-center gap-1 rounded-full bg-black/80 p-1 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        {versions.map((v) => (
          <button
            key={v.id}
            onClick={() => setVersion(v.id)}
            className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              version === v.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {version === v.id && (
              <motion.div
                layoutId="version-pill"
                className={`absolute inset-0 rounded-full ${v.color}`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{v.label}</span>
          </button>
        ))}
      </div>
      <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-gray-300 backdrop-blur-xl">
        {cycleName}
      </span>
    </div>
  );
}
