/**
 * UI/UX Design Version Registry
 * ──────────────────────────────
 * Each version captures the full visual design system so it can be
 * recalled, compared, or applied for client review.
 *
 * Usage:
 *   import { designVersions, getVersion, ACTIVE_VERSION } from "@/config/design-versions";
 *   const v1 = getVersion("v1");
 */

export interface DesignVersion {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  status: "active" | "archived" | "draft";
  preview?: string; // URL or path to a preview screenshot

  /** ── Color Tokens ── */
  colors: {
    primary: string;        // Main brand / CTA color
    primaryLight: string;   // Light variant (bg tints)
    primaryDark: string;    // Darker hover state
    primaryGlow: string;    // Shadow / glow rgba
    dark: string;           // Primary text / dark sections
    darkMuted: string;      // Dark backgrounds (inputs)
    darkBorder: string;     // Dark section borders
    background: string;     // Page background
    surfaceLight: string;   // Alternating section bg
    surfaceMuted: string;   // Muted section bg (logos)
    cardBorder: string;     // Card border color
    textPrimary: string;    // Main text
    textSecondary: string;  // Body / descriptions
    textMuted: string;      // Subtle text
    textOnDark: string;     // Text on dark backgrounds
    accent: string;         // Badge / highlight color
    success: string;        // Success state
    error: string;          // Error state
    starFilled: string;     // Rating stars
    starEmpty: string;      // Rating stars unfilled
  };

  /** ── Typography ── */
  typography: {
    fontFamily: string;
    fontWeights: number[];
    headingDisplay: string;     // Hero h1
    headingSection: string;     // Section h2
    headingCard: string;        // Card h3
    body: string;               // Body text
    small: string;              // Small text
    buttonText: string;         // CTA buttons
    badgeText: string;          // Badges / labels
  };

  /** ── Spacing ── */
  spacing: {
    sectionPadding: string;
    containerMaxWidth: string;
    containerPadding: string;
    cardPadding: string;
    gridGap: string;
  };

  /** ── Border Radius ── */
  radius: {
    button: string;
    card: string;
    input: string;
    badge: string;
    avatar: string;
    image: string;
  };

  /** ── Shadows ── */
  shadows: {
    card: string;
    cardHover: string;
    cardPopular: string;
    button: string;
    navbar: string;
    floating: string;
    chatButton: string;
  };

  /** ── Animations ── */
  animations: {
    floatingY: number[];             // Keyframes [start, peak, end]
    floatingDuration: number;         // Seconds
    hoverLift: number;                // Pixels (negative Y)
    fadeInDuration: number;           // Seconds
    staggerDelay: number;             // Seconds between items
    dropdownDuration: number;         // Seconds
  };

  /** ── Component Styles ── */
  components: {
    navbar: {
      height: string;
      background: string;
      border: string;
      logoHeight: string;
      ctaStyle: string;
    };
    hero: {
      background: string;
      badgeColor: string;
      imageContainer: string;
      imageAnimation: string;
    };
    cards: {
      style: string;
      hoverEffect: string;
      iconContainer: string;
    };
    footer: {
      layout: string;            // "single-row" | "4-column" | etc.
      background: string;
      socialIconSize: string;
    };
    chatbot: {
      buttonSize: string;
      windowSize: string;
      headerColor: string;
      botBubble: string;
      userBubble: string;
    };
    buttons: {
      primary: string;
      secondary: string;
      ghost: string;
    };
    forms: {
      inputStyle: string;
      inputFocus: string;
    };
    pricing: {
      popularHighlight: string;
      priceSize: string;
    };
  };

  /** ── Section Backgrounds Pattern ── */
  sectionPattern: string[];

  /** ── Notes ── */
  notes: string;
}

// ═══════════════════════════════════════════════
//  VERSION 1 — "Coral Warmth" (Original / Current)
// ═══════════════════════════════════════════════
const v1: DesignVersion = {
  id: "v1",
  name: "Coral Warmth",
  description:
    "Original Claritas design — warm coral primary, cream hero, dark navy sections, floating card effects with Framer Motion. Professional yet approachable with Poppins typography.",
  createdAt: "2026-04-16",
  status: "active",

  colors: {
    primary: "#e8655a",         // coral-500
    primaryLight: "#fef2f0",    // coral-50
    primaryDark: "#d44d42",     // coral-600
    primaryGlow: "rgba(232,101,90,0.25)",
    dark: "#1a1a2e",            // dark-900
    darkMuted: "#232340",       // dark-800
    darkBorder: "#2d2d50",      // dark-700
    background: "#ffffff",
    surfaceLight: "#f9fafb",    // gray-50
    surfaceMuted: "#f3f4f6",    // gray-100
    cardBorder: "#e5e7eb",      // gray-200
    textPrimary: "#1a1a2e",     // dark-900
    textSecondary: "#6b7280",   // gray-500
    textMuted: "#9ca3af",       // gray-400
    textOnDark: "#ffffff",
    accent: "#e8c84b",          // golden yellow (hero badge)
    success: "#22c55e",         // green-500
    error: "#ef4444",           // red-500
    starFilled: "#fbbf24",      // amber-400
    starEmpty: "#e5e7eb",       // gray-200
  },

  typography: {
    fontFamily: "Poppins",
    fontWeights: [300, 400, 500, 600, 700, 800],
    headingDisplay: "text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight",
    headingSection: "text-2xl sm:text-3xl md:text-4xl font-bold",
    headingCard: "text-lg font-bold",
    body: "text-base leading-relaxed",
    small: "text-sm leading-relaxed",
    buttonText: "text-sm font-bold uppercase tracking-wider",
    badgeText: "text-xs font-semibold uppercase tracking-wider",
  },

  spacing: {
    sectionPadding: "py-16 sm:py-20",
    containerMaxWidth: "max-w-7xl",
    containerPadding: "px-4 sm:px-6 lg:px-8",
    cardPadding: "p-5 sm:p-6 md:p-8",
    gridGap: "gap-4 sm:gap-6",
  },

  radius: {
    button: "rounded-full",
    card: "rounded-2xl",
    input: "rounded-lg",
    badge: "rounded-full",
    avatar: "rounded-full",
    image: "rounded-xl",
  },

  shadows: {
    card: "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]",
    cardHover: "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]",
    cardPopular: "shadow-[0_20px_60px_-15px_rgba(232,101,90,0.3)]",
    button: "shadow-lg shadow-coral-500/25",
    navbar: "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)]",
    floating: "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]",
    chatButton: "shadow-lg shadow-coral-500/30",
  },

  animations: {
    floatingY: [0, -8, 0],
    floatingDuration: 3,
    hoverLift: -6,
    fadeInDuration: 0.4,
    staggerDelay: 0.1,
    dropdownDuration: 0.12,
  },

  components: {
    navbar: {
      height: "h-16",
      background: "bg-white border-b border-gray-100",
      border: "border-b border-gray-100",
      logoHeight: "h-8",
      ctaStyle: "rounded-full bg-coral-500 px-6 py-2.5 text-sm font-semibold text-white",
    },
    hero: {
      background: "#f5f3ee (warm cream/beige)",
      badgeColor: "#e8c84b (golden yellow)",
      imageContainer: "rounded-2xl bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100",
      imageAnimation: "y: [0, -8, 0], duration: 3s, infinite, easeInOut",
    },
    cards: {
      style: "rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]",
      hoverEffect: "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1",
      iconContainer: "h-10 w-10 rounded-xl bg-coral-50 text-coral-500",
    },
    footer: {
      layout: "4-column grid (Claritas, Product, Support, Company)",
      background: "bg-dark-900 border-t border-dark-700",
      socialIconSize: "h-10 w-10 sm:h-8 sm:w-8",
    },
    chatbot: {
      buttonSize: "h-14 w-14",
      windowSize: "h-[100dvh] w-full sm:h-[520px] sm:w-[380px]",
      headerColor: "bg-coral-500",
      botBubble: "bg-gray-100 text-gray-800 rounded-tl-sm",
      userBubble: "bg-coral-500 text-white rounded-tr-sm",
    },
    buttons: {
      primary: "rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25",
      secondary: "rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 hover:bg-dark-900 hover:text-white",
      ghost: "rounded-full border border-gray-600 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:border-coral-500 hover:text-white",
    },
    forms: {
      inputStyle: "rounded-lg border border-dark-600 bg-dark-800 px-4 py-3 text-sm text-white placeholder:text-gray-500",
      inputFocus: "focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500",
    },
    pricing: {
      popularHighlight: "border-2 border-coral-200 ring-2 ring-coral-500 shadow-[0_20px_60px_-15px_rgba(232,101,90,0.3)]",
      priceSize: "text-4xl font-extrabold",
    },
  },

  sectionPattern: [
    "white",
    "gray-50 (surfaceLight)",
    "gray-100 (surfaceMuted) — logos section",
    "dark-900 — contact section",
    "#f5f3ee — hero only",
  ],

  notes:
    "V1 is the launch design. Warm coral (#e8655a) as primary, cream hero bg, navy dark sections. Cards float with Framer Motion (y: [0,-8,0]). Poppins font throughout. Mobile-first responsive. Footer is 4-column grid. Chatbot goes full-screen on mobile. All images use Next.js Image with rounded-xl inside white card containers with ring-1 ring-gray-100.",
};

// ═══════════════════════════════════════════════
//  VERSION 2 — "Slate" (Clean professional business)
// ═══════════════════════════════════════════════
const v2: DesignVersion = {
  id: "v2",
  name: "Slate",
  description:
    "Clean professional business aesthetic — cool light backgrounds (#f7f8fa / white), deep teal accent (#0d7377), slate text (#1e293b), simple layouts, no gradients or glassmorphism. Two-column hero with trust badges. Inter font.",
  createdAt: "2026-04-16",
  status: "archived",
  colors: {
    primary: "#0d7377",
    primaryLight: "rgba(13,115,119,0.1)",
    primaryDark: "#0a5f62",
    primaryGlow: "rgba(13,115,119,0.2)",
    dark: "#1e293b",
    darkMuted: "#334155",
    darkBorder: "rgba(226,232,240,1)",
    background: "#f7f8fa",
    surfaceLight: "#ffffff",
    surfaceMuted: "#f0f2f5",
    cardBorder: "rgba(226,232,240,1)",
    textPrimary: "#1e293b",
    textSecondary: "#64748b",
    textMuted: "#94a3b8",
    textOnDark: "#ffffff",
    accent: "#2dd4bf",
    success: "#10b981",
    error: "#ef4444",
    starFilled: "#0d7377",
    starEmpty: "#e2e8f0",
  },
  typography: {
    fontFamily: "Inter",
    fontWeights: [400, 500, 600, 700],
    headingDisplay: "text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight",
    headingSection: "text-3xl sm:text-4xl font-bold",
    headingCard: "text-lg font-semibold",
    body: "text-base leading-relaxed",
    small: "text-sm leading-relaxed",
    buttonText: "text-sm font-semibold",
    badgeText: "text-xs font-semibold",
  },
  spacing: { sectionPadding: "py-16 sm:py-20", containerMaxWidth: "max-w-7xl", containerPadding: "px-4 sm:px-6 lg:px-8", cardPadding: "p-6 sm:p-8", gridGap: "gap-6" },
  radius: { button: "rounded-lg", card: "rounded-xl", input: "rounded-lg", badge: "rounded-full", avatar: "rounded-full", image: "rounded-xl" },
  shadows: { card: "shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)]", cardHover: "shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)]", cardPopular: "shadow-[0_20px_60px_-15px_rgba(13,115,119,0.12)]", button: "shadow-lg shadow-[#0d7377]/20", navbar: "none", floating: "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]", chatButton: "shadow-lg shadow-[#0d7377]/20" },
  animations: { floatingY: [0, 0, 0], floatingDuration: 0, hoverLift: -4, fadeInDuration: 0.4, staggerDelay: 0.1, dropdownDuration: 0.12 },
  components: {
    navbar: { height: "h-16", background: "bg-white/95 backdrop-blur-sm border-b border-slate-200", border: "border-slate-200", logoHeight: "h-7", ctaStyle: "rounded-lg bg-[#0d7377] px-5 py-2 text-[13px] font-semibold text-white" },
    hero: { background: "#f7f8fa, two-column layout with trust badges", badgeColor: "teal line + uppercase label", imageContainer: "rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]", imageAnimation: "fade in from x:20, no float" },
    cards: { style: "rounded-xl border border-slate-200 bg-[#f7f8fa] p-8 text-center", hoverEffect: "hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] hover:border-[#0d7377]/20 hover:y-[-4px]", iconContainer: "h-12 w-12 rounded-lg bg-[#0d7377]/10 text-[#0d7377]" },
    footer: { layout: "4-column grid", background: "bg-[#1e293b] border-t border-slate-200", socialIconSize: "h-8 w-8" },
    chatbot: { buttonSize: "h-14 w-14", windowSize: "h-[100dvh] w-full sm:h-[520px] sm:w-[380px]", headerColor: "bg-[#1e293b]", botBubble: "bg-slate-100 text-[#1e293b]", userBubble: "bg-[#0d7377] text-white" },
    buttons: { primary: "rounded-lg bg-[#0d7377] px-8 py-3 text-sm font-semibold text-white hover:bg-[#0a5f62]", secondary: "rounded-lg border border-[#1e293b]/20 px-8 py-3 text-sm font-medium text-[#1e293b] hover:border-[#0d7377] hover:text-[#0d7377]", ghost: "rounded-lg border border-slate-200 px-6 py-2 text-xs font-semibold text-slate-500 hover:border-[#0d7377] hover:text-[#0d7377]" },
    forms: { inputStyle: "rounded-lg border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/40", inputFocus: "focus:border-[#0d7377] focus:ring-1 focus:ring-[#0d7377]/40" },
    pricing: { popularHighlight: "border-[#0d7377] ring-1 ring-[#0d7377] shadow-[0_20px_60px_-15px_rgba(13,115,119,0.12)]", priceSize: "text-4xl font-bold" },
  },
  sectionPattern: ["#f7f8fa", "#ffffff", "#f0f2f5 (alternating light cool tones)"],
  notes: "V2 Slate: Clean professional business. Light cool backgrounds, deep teal (#0d7377) accent, slate text. No gradients, no glassmorphism. Two-column hero with trust badges. Hover lift animations on cards. Inter font.",
};

// ═══════════════════════════════════════════════
//  VERSION 3 — "Executive" (Clean corporate)
// ═══════════════════════════════════════════════
const v3: DesignVersion = {
  id: "v3",
  name: "Executive",
  description:
    "Clean corporate authority — warm stone backgrounds (#faf9f7), navy text (#1a2b4a), amber accents, serif-like authority, dot grid pattern, two-column hero with trust badges.",
  createdAt: "2026-04-16",
  status: "archived",
  colors: {
    primary: "#1a2b4a",
    primaryLight: "#faf9f7",
    primaryDark: "#243756",
    primaryGlow: "rgba(26,43,74,0.08)",
    dark: "#1a2b4a",
    darkMuted: "#243756",
    darkBorder: "rgba(26,43,74,0.06)",
    background: "#ffffff",
    surfaceLight: "#faf9f7",
    surfaceMuted: "#f4f2ed",
    cardBorder: "rgba(26,43,74,0.06)",
    textPrimary: "#1a2b4a",
    textSecondary: "rgba(26,43,74,0.6)",
    textMuted: "rgba(26,43,74,0.4)",
    textOnDark: "#ffffff",
    accent: "#d97706",
    success: "#059669",
    error: "#dc2626",
    starFilled: "#f59e0b",
    starEmpty: "#e5e7eb",
  },
  typography: {
    fontFamily: "Plus Jakarta Sans",
    fontWeights: [300, 400, 500, 600, 700, 800],
    headingDisplay: "text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight",
    headingSection: "text-3xl sm:text-4xl font-bold",
    headingCard: "text-lg font-semibold",
    body: "text-base leading-relaxed",
    small: "text-sm leading-relaxed",
    buttonText: "text-sm font-semibold",
    badgeText: "text-xs font-semibold tracking-[0.2em]",
  },
  spacing: { sectionPadding: "py-20 sm:py-28", containerMaxWidth: "max-w-7xl", containerPadding: "px-4 sm:px-6 lg:px-8", cardPadding: "p-6 sm:p-8", gridGap: "gap-8" },
  radius: { button: "rounded-lg", card: "rounded-2xl", input: "rounded-lg", badge: "rounded-full", avatar: "rounded-full", image: "rounded-xl" },
  shadows: { card: "shadow-none", cardHover: "shadow-[0_20px_60px_-15px_rgba(26,43,74,0.08)]", cardPopular: "shadow-[0_20px_60px_-15px_rgba(26,43,74,0.12)]", button: "none", navbar: "shadow-sm", floating: "shadow-[0_20px_60px_-15px_rgba(26,43,74,0.08)]", chatButton: "shadow-lg shadow-[#1a2b4a]/30" },
  animations: { floatingY: [0, 0, 0], floatingDuration: 0, hoverLift: 0, fadeInDuration: 0.6, staggerDelay: 0.1, dropdownDuration: 0.15 },
  components: {
    navbar: { height: "h-[72px]", background: "bg-white/80 backdrop-blur-xl border-b border-[#1a2b4a]/[0.06]", border: "border-[#1a2b4a]/[0.06]", logoHeight: "h-8", ctaStyle: "rounded-lg bg-[#1a2b4a] px-5 py-2.5 text-[13px] font-semibold text-white" },
    hero: { background: "#faf9f7 with dot grid pattern", badgeColor: "none (line + text label)", imageContainer: "rounded-2xl border border-[#1a2b4a]/[0.06] bg-white p-3 shadow-[0_20px_60px_-15px_rgba(26,43,74,0.08)]", imageAnimation: "fade in, no float" },
    cards: { style: "rounded-2xl border border-[#1a2b4a]/[0.06] bg-[#faf9f7] p-8", hoverEffect: "hover:shadow-[0_20px_60px_-15px_rgba(26,43,74,0.08)] hover:border-[#1a2b4a]/[0.1]", iconContainer: "h-12 w-12 rounded-xl bg-[#1a2b4a]/[0.05] text-[#1a2b4a]/70" },
    footer: { layout: "4-column grid", background: "bg-[#1a2b4a]", socialIconSize: "h-8 w-8" },
    chatbot: { buttonSize: "h-14 w-14", windowSize: "h-[100dvh] w-full sm:h-[520px] sm:w-[380px]", headerColor: "bg-[#1a2b4a]", botBubble: "bg-[#f4f2ed] text-[#1a2b4a]", userBubble: "bg-[#1a2b4a] text-white" },
    buttons: { primary: "rounded-lg bg-[#1a2b4a] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#243756]", secondary: "rounded-lg border border-[#1a2b4a]/20 px-8 py-3.5 text-sm font-medium text-[#1a2b4a] hover:border-[#1a2b4a]/40", ghost: "rounded-lg border border-[#1a2b4a]/10 px-6 py-2 text-xs font-semibold text-[#1a2b4a]/60 hover:border-[#1a2b4a]/20" },
    forms: { inputStyle: "rounded-lg border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/40", inputFocus: "focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30" },
    pricing: { popularHighlight: "border-amber-500/30 ring-1 ring-amber-500 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.12)]", priceSize: "text-4xl font-bold" },
  },
  sectionPattern: ["white", "#faf9f7", "white", "#f4f2ed", "#1a2b4a (contact)"],
  notes: "V3 Executive: Corporate authority. No float or hover-lift animations. Dot grid pattern on hero. Navy (#1a2b4a) primary, amber accents. Trust badges row (Shield, Zap, BarChart3, Users). Plus Jakarta Sans font.",
};

// ═══════════════════════════════════════════════
//  VERSION 4 — "Stitch" (Deep navy + teal)
// ═══════════════════════════════════════════════
const v4: DesignVersion = {
  id: "v4",
  name: "Stitch",
  description:
    "Deep navy (#0c1425) with teal accents, glassmorphism panels, Inter font, minimal animations, modern SaaS feel.",
  createdAt: "2026-04-16",
  status: "active",
  colors: {
    primary: "#14b8a6",
    primaryLight: "rgba(20,184,166,0.1)",
    primaryDark: "#0d9488",
    primaryGlow: "rgba(20,184,166,0.25)",
    dark: "#0c1425",
    darkMuted: "#101b30",
    darkBorder: "rgba(255,255,255,0.06)",
    background: "#0c1425",
    surfaceLight: "#101b30",
    surfaceMuted: "#0f1829",
    cardBorder: "rgba(255,255,255,0.08)",
    textPrimary: "#ffffff",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    textOnDark: "#ffffff",
    accent: "#14b8a6",
    success: "#14b8a6",
    error: "#ef4444",
    starFilled: "#14b8a6",
    starEmpty: "rgba(255,255,255,0.06)",
  },
  typography: {
    fontFamily: "Inter",
    fontWeights: [300, 400, 500, 600, 700, 800],
    headingDisplay: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
    headingSection: "text-3xl sm:text-4xl font-bold",
    headingCard: "text-lg font-semibold",
    body: "text-base leading-relaxed",
    small: "text-[13px] leading-relaxed",
    buttonText: "text-[13px] font-semibold",
    badgeText: "text-xs font-medium",
  },
  spacing: { sectionPadding: "py-20 sm:py-28", containerMaxWidth: "max-w-7xl", containerPadding: "px-4 sm:px-6 lg:px-8", cardPadding: "p-6 sm:p-8", gridGap: "gap-6" },
  radius: { button: "rounded-lg", card: "rounded-xl", input: "rounded-lg", badge: "rounded-full", avatar: "rounded-full", image: "rounded-lg" },
  shadows: { card: "none", cardHover: "none", cardPopular: "shadow-[0_0_60px_-20px_rgba(20,184,166,0.15)]", button: "shadow-lg shadow-teal-500/25", navbar: "none", floating: "none", chatButton: "shadow-lg shadow-teal-500/30" },
  animations: { floatingY: [0, 0, 0], floatingDuration: 0, hoverLift: 0, fadeInDuration: 0.5, staggerDelay: 0.1, dropdownDuration: 0.15 },
  components: {
    navbar: { height: "h-16", background: "bg-[#0c1425] border-b border-white/[0.06]", border: "border-white/[0.06]", logoHeight: "h-7", ctaStyle: "rounded-lg bg-teal-500 px-5 py-2 text-[13px] font-semibold text-white" },
    hero: { background: "#0c1425 with subtle gradient", badgeColor: "teal-500/10 border teal-500/20", imageContainer: "rounded-xl border border-white/[0.08] bg-white/[0.02] p-2", imageAnimation: "fade in, no float" },
    cards: { style: "rounded-xl border border-white/[0.08] bg-white/[0.02] p-8", hoverEffect: "hover:border-teal-500/20 hover:bg-white/[0.04]", iconContainer: "h-11 w-11 rounded-lg bg-teal-500/10 text-teal-400" },
    footer: { layout: "4-column grid", background: "bg-[#0c1425] border-t border-white/[0.06]", socialIconSize: "h-8 w-8" },
    chatbot: { buttonSize: "h-14 w-14", windowSize: "h-[100dvh] w-full sm:h-[520px] sm:w-[380px]", headerColor: "bg-[#101b30]", botBubble: "bg-white/[0.05] text-slate-300", userBubble: "bg-teal-500 text-white" },
    buttons: { primary: "rounded-lg bg-teal-500 px-8 py-3 text-[13px] font-semibold text-white hover:bg-teal-400", secondary: "rounded-lg border border-white/[0.12] px-8 py-3 text-[13px] font-medium text-slate-300 hover:border-white/30 hover:text-white", ghost: "rounded-lg border border-white/[0.08] px-6 py-2 text-xs font-medium text-slate-400 hover:border-teal-500/30 hover:text-white" },
    forms: { inputStyle: "rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500", inputFocus: "focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30" },
    pricing: { popularHighlight: "border-teal-500/30 ring-1 ring-teal-500 shadow-[0_0_60px_-20px_rgba(20,184,166,0.15)]", priceSize: "text-4xl font-bold" },
  },
  sectionPattern: ["#0c1425", "#101b30", "#0c1425 (alternating deep navy)"],
  notes: "V4 Stitch: Deep navy + teal. No float animations. Glassmorphism borders (white/[0.08]). Teal CTAs. Inter font. Logo inverted (white) on dark navbar. Minimal, modern SaaS aesthetic.",
};

// ═══════════════════════════════════════════════
//  VERSION REGISTRY
// ═══════════════════════════════════════════════

export const designVersions: DesignVersion[] = [v1, v2, v3, v4];

/** Currently active design version */
export const ACTIVE_VERSION = "v4";

/** Look up a version by ID */
export function getVersion(id: string): DesignVersion | undefined {
  return designVersions.find((v) => v.id === id);
}

/** Get the currently active version */
export function getActiveVersion(): DesignVersion {
  const v = getVersion(ACTIVE_VERSION);
  if (!v) throw new Error(`Active design version "${ACTIVE_VERSION}" not found`);
  return v;
}

/** List all versions with summary info */
export function listVersions() {
  return designVersions.map((v) => ({
    id: v.id,
    name: v.name,
    description: v.description,
    status: v.status,
    createdAt: v.createdAt,
  }));
}
