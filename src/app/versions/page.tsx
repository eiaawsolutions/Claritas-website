import Link from "next/link";

const VERSIONS = [
  { n: 1, name: "Monolith", tag: "Brutalist Editorial", desc: "Display-serif typography, hairline rules, B&W. A magazine cover that loads.", swatch: ["#000000", "#ffffff", "#cc0000"] },
  { n: 2, name: "Atelier", tag: "Boutique Consultancy", desc: "Warm cream + ink, asymmetric bento, hand-set craft for the discerning buyer.", swatch: ["#f5efe6", "#1a1a1a", "#a8401a"] },
  { n: 3, name: "Quartz", tag: "Glassmorphism SaaS", desc: "Frosted cards over pastel auroras. Stripe / Linear-tier modern polish.", swatch: ["#eef2ff", "#a78bfa", "#67e8f9"] },
  { n: 4, name: "Obsidian", tag: "Dark / Neon Crimson", desc: "Platform aesthetic. Dark canvas, terminal motifs, glowing accents.", swatch: ["#0a0a0a", "#ff1f3d", "#06b6d4"] },
  { n: 5, name: "Botanical", tag: "Heritage Organic", desc: "Sage + clay palette, organic shapes, slow scroll. Hermès energy for CRM.", swatch: ["#e8e2d4", "#5a6b4a", "#b8855a"] },
  { n: 6, name: "Kinetic", tag: "Motion Showcase", desc: "Pinned sections, oversized numerics, scroll-driven choreography. Awwwards bait.", swatch: ["#ffffff", "#000000", "#ff5722"] },
  { n: 7, name: "Dossier", tag: "Swiss Analyst Grid", desc: "Mono + serif, footnotes, data density. Bloomberg / FT for buyers who read.", swatch: ["#fafaf7", "#1a1a1a", "#dc2626"] },
  { n: 8, name: "Aurora", tag: "Modern Enterprise", desc: "Bold sans display, vibrant gradients, glassy cards. Vercel / Framer scale.", swatch: ["#0f172a", "#a855f7", "#06b6d4"] },
  { n: 9, name: "Linen", tag: "Hermès Ultra-Airy", desc: "All white, ultra-airy editorial serif, single sage thread. Aesop / Hermès.", swatch: ["#ffffff", "#1a1a1a", "#7a8866"] },
  { n: 10, name: "Helix", tag: "Apple Minimal", desc: "Massive type, perfect grid, single product hero, depth from shadow only.", swatch: ["#ffffff", "#1d1d1f", "#0066cc"] },
  { n: 11, name: "Ledger", tag: "Newspaper Editorial", desc: "Multi-column, drop caps, footnotes. Wall Street Journal weight.", swatch: ["#ffffff", "#1a1a1a", "#a02828"] },
  { n: 12, name: "Origami", tag: "Paper-Craft Tilted", desc: "Tilted cards, soft drop-shadows, asymmetric. Premium playful.", swatch: ["#ffffff", "#0f172a", "#f59e0b"] },
  { n: 13, name: "Prism", tag: "Linear Light Engineering", desc: "Bold sans display, single subtle gradient text, engineering-clean.", swatch: ["#ffffff", "#0f0f0f", "#7c3aed"] },
  { n: 14, name: "Cartograph", tag: "Zoomable Relationship Map", desc: "The homepage IS an interactive map of customer relationships. Pan, zoom, click nodes.", swatch: ["#0a0e1a", "#22d3ee", "#fbbf24"] },
  { n: 15, name: "Console", tag: "Live Operator Dashboard", desc: "No scroll. Looks like the CRM running live. You're already inside the product.", swatch: ["#0d0d10", "#10b981", "#a855f7"] },
  { n: 16, name: "Reel", tag: "Full-Screen Vertical Stories", desc: "Scroll-snapped full-screen slides. TikTok grammar applied to enterprise CRM.", swatch: ["#000000", "#ffffff", "#f43f5e"] },
  { n: 17, name: "Manifesto", tag: "Horizontal Scroll Essay", desc: "Scroll sideways through giant declarative panels. The site is a thesis.", swatch: ["#fafaf5", "#0a0a0a", "#dc2626"] },
  { n: 18, name: "Diff", tag: "Before/After Sync Pane", desc: "Left: your CRM today. Right: with Claritas. Synchronized scroll comparison.", swatch: ["#fef2f2", "#ecfdf5", "#1f2937"] },
  { n: 19, name: "Spreadsheet", tag: "The Page IS the Sheet", desc: "Pricing in columns, stats in cells, logos in rows. Click cells to interact.", swatch: ["#ffffff", "#1f2937", "#16a34a"] },
  { n: 20, name: "Cinema", tag: "Film-Grade Editorial", desc: "Dark editorial site. Cinematic hero, oversized type, single white CTA. Stripe Sessions energy.", swatch: ["#0a0a0a", "#fafafa", "#d4af37"] },
  { n: 21, name: "Atelier+", tag: "Boutique Consultancy v2", desc: "Proper magazine-grade boutique consultancy with editorial photography and asymmetric type.", swatch: ["#f5efe6", "#1a1a1a", "#a8401a"] },
  { n: 22, name: "Bento", tag: "Apple iPad Format", desc: "Big hero, then a precise bento grid. Familiar architecture, agency-grade execution.", swatch: ["#fbfbfd", "#1d1d1f", "#0066cc"] },
  { n: 23, name: "Newsroom", tag: "Customer-Led Proof First", desc: "Hero IS a customer quote at 9vw. Three case study cards with logos, metrics, photos.", swatch: ["#ffffff", "#0a0a0a", "#dc2626"] },
  { n: 24, name: "Atrium Dark", tag: "Agency-Tier Dark", desc: "Proper Linear/Framer-tier dark site. Tasteful motion, scroll choreography, premium polish.", swatch: ["#08080c", "#a78bfa", "#22d3ee"] },
  { n: 25, name: "Trust", tag: "Security-First Enterprise", desc: "For IT/legal buyers. Compliance badges, capabilities, pricing, comparison. No drama.", swatch: ["#ffffff", "#0f172a", "#0ea5e9"] },
];

export default function VersionsIndexPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.32em] text-white/40 mb-6">
            Claritas · Design Review
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
            Eight outlooks. <span className="text-white/50 italic">One brand.</span>
          </h1>
          <p className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed">
            Each version below is a fully standalone homepage — its own typography, palette, motion language, navigation, and copy tone. Click in. Toggle. Choose what feels like Claritas.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VERSIONS.map((v) => (
            <Link
              key={v.n}
              href={`/versions/${v.n}`}
              className="group block bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition p-6 rounded-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                  V{v.n}
                </span>
                <div className="flex gap-1">
                  {v.swatch.map((c) => (
                    <span
                      key={c}
                      className="h-3 w-3 rounded-full border border-white/10"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-2xl font-medium tracking-tight">{v.name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/50">
                {v.tag}
              </div>
              <p className="mt-4 text-sm text-white/55 leading-relaxed">{v.desc}</p>
              <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-white/70 group-hover:text-white transition inline-flex items-center gap-2">
                View →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
