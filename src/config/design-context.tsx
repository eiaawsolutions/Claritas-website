"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type DesignVersionId = "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8" | "v9";

interface DesignContextValue {
  version: DesignVersionId;
  setVersion: (v: DesignVersionId) => void;
  cycleName: string;
}

const VERSION_NAMES: Record<DesignVersionId, string> = {
  v1: "Coral Warmth",
  v2: "Slate",
  v3: "Executive",
  v4: "Aurora",
  v5: "Prestige",
  v6: "Precision",
  v7: "Enterprise",
  v8: "Atelier",
  v9: "Obsidian",
};

const DesignContext = createContext<DesignContextValue>({
  version: "v9",
  setVersion: () => {},
  cycleName: "Obsidian",
});

export function DesignVersionProvider({ children }: { children: ReactNode }) {
  const [version, setVersionState] = useState<DesignVersionId>("v9");

  // Sync the data-design attribute on mount and on change
  useEffect(() => {
    document.documentElement.setAttribute("data-design", version);
  }, [version]);

  const setVersion = useCallback((v: DesignVersionId) => {
    setVersionState(v);
  }, []);

  return (
    <DesignContext.Provider
      value={{ version, setVersion, cycleName: VERSION_NAMES[version] }}
    >
      {children}
    </DesignContext.Provider>
  );
}

export function useDesignVersion() {
  return useContext(DesignContext);
}
