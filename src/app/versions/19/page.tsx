"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Sparkles, Check, X, ArrowRight, Sigma } from "lucide-react";

/* ──────────────────────────────────────────────
   V19 — SPREADSHEET
   The entire homepage IS a working spreadsheet. Hero stats live in
   cells. Pricing in a column. Customer logos in rows. Click a cell
   to inspect. Edit input cells to recompute.
   Thesis: an analyst CRM should sell itself like an analyst would buy.
   ────────────────────────────────────────────── */

type CellKind = "label" | "input" | "formula" | "output" | "header" | "section" | "blank" | "logo" | "cta" | "note" | "check" | "x" | "metric";
type Cell = { v: React.ReactNode; k?: CellKind; w?: string; bg?: string; fg?: string; bold?: boolean; mono?: boolean; right?: boolean; colspan?: number; rowspan?: number; ref?: string; tooltip?: string };

export default function SpreadsheetPage() {
  // Editable model — buyer can change these
  const [seats, setSeats] = useState(50);
  const [reps, setReps] = useState(20);
  const [avgDeal, setAvgDeal] = useState(45000);
  const [winRateBefore, setWinRateBefore] = useState(22);
  const [winRateAfter, setWinRateAfter] = useState(38);
  const [adminBefore, setAdminBefore] = useState(40); // % of rep time on admin
  const [adminAfter, setAdminAfter] = useState(8);

  // Derived
  const m = useMemo(() => {
    const sellingHoursBefore = reps * 40 * (1 - adminBefore / 100); // hrs/wk
    const sellingHoursAfter = reps * 40 * (1 - adminAfter / 100);
    const recoveredHours = sellingHoursAfter - sellingHoursBefore;
    const dealsBefore = (sellingHoursBefore / 4) * (winRateBefore / 100); // crude: 1 deal per 4 selling hrs at win rate
    const dealsAfter = (sellingHoursAfter / 4) * (winRateAfter / 100);
    const revenueLiftWk = (dealsAfter - dealsBefore) * avgDeal;
    const annualLift = revenueLiftWk * 50;
    const seatCost = seats * 99 * 12;
    const roi = annualLift / seatCost;
    return {
      sellingHoursBefore: Math.round(sellingHoursBefore),
      sellingHoursAfter: Math.round(sellingHoursAfter),
      recoveredHours: Math.round(recoveredHours),
      dealsBefore: dealsBefore.toFixed(1),
      dealsAfter: dealsAfter.toFixed(1),
      revenueLiftWk: Math.round(revenueLiftWk),
      annualLift: Math.round(annualLift),
      seatCost,
      roi: roi.toFixed(1),
      payback: (seatCost / annualLift * 12).toFixed(1),
    };
  }, [seats, reps, avgDeal, winRateBefore, winRateAfter, adminBefore, adminAfter]);

  return (
    <div className="bg-white text-[#1f2937] min-h-[calc(100vh-3.5rem)]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Sheet chrome */}
      <Toolbar />
      <FormulaBar value={`=CLARITAS.LIFT(seats=${seats}, reps=${reps}, avgDeal=${avgDeal})`} />

      <div className="overflow-x-auto">
        <table className="border-collapse text-sm" style={{ minWidth: "1200px", width: "100%" }}>
          <ColGroup />
          <Header />

          <tbody>
            {/* SECTION: HERO */}
            <SectionRow label="A · WHAT YOU GET" />
            <Row n={3}>
              <C k="header" w="60px"></C>
              <C k="label" colspan={2} bold w="240px">Product</C>
              <C colspan={4} bold>Claritas — the CRM your team actually opens.</C>
              <C k="metric" colspan={2} bg="#dcfce7" fg="#166534" bold mono right>= "ENTERPRISE"</C>
              <C k="cta" colspan={3}>
                <Link href="#" className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-emerald-700 hover:text-black">
                  Run on your data <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </C>
            </Row>
            <Row n={4}>
              <C k="header"></C>
              <C k="label" colspan={2}>Tagline</C>
              <C colspan={9} fg="#6b7280" mono>// One platform. Marketing, sales, service. AI-native. 47ms p99. SOC 2.</C>
            </Row>
            <Row n={5}>
              <C k="header"></C>
              <C k="label" colspan={2}>Status</C>
              <C colspan={2} bg="#dcfce7" fg="#166534" bold mono>● PRODUCTION</C>
              <C colspan={2} bold mono>v 4.2.1</C>
              <C colspan={2} bold mono>247 customers</C>
              <C colspan={3} bold mono>uptime 99.997%</C>
            </Row>
            <Row n={6}><C colspan={12} k="blank"></C></Row>

            {/* SECTION: PRICING */}
            <SectionRow label="B · PRICING (per seat / month)" />
            <Row n={8}>
              <C k="header"></C>
              <C k="label" colspan={2} bold>Plan</C>
              <C bold right>Growth</C>
              <C bold right>Scale</C>
              <C bold right bg="#fef3c7">Enterprise</C>
              <C k="label" colspan={3}>Includes</C>
              <C k="label" colspan={3}>Sign</C>
            </Row>
            {[
              ["Price (RM)", "49", "99", "Custom", "Pipeline · Inbox · 20 integrations", "Buy"],
              ["AI agent", "1k actions/mo", "Unlimited", "Unlimited + custom", "Native, sub-100ms", "Buy"],
              ["Integrations", "20+", "150+", "Custom + private", "Stripe · Slack · Xero · WhatsApp…", "Buy"],
              ["Tenancy", "Shared", "Shared", "Single + residency", "ap-southeast-1 · or self-host", "Talk"],
              ["Support", "Email", "Priority · 4h SLA", "CSM + dedicated SE", "Onboarding included", "Talk"],
            ].map((row, i) => (
              <Row key={i} n={9 + i}>
                <C k="header"></C>
                <C k="label" colspan={2} bold>{row[0]}</C>
                <C right mono>{row[1]}</C>
                <C right mono bold>{row[2]}</C>
                <C right mono bold bg="#fef3c7">{row[3]}</C>
                <C colspan={3} fg="#6b7280">{row[4]}</C>
                <C colspan={3}>
                  <Link href="#" className={`text-[11px] uppercase tracking-wider font-bold ${row[5] === "Buy" ? "text-emerald-700" : "text-blue-700"} hover:text-black`}>
                    {row[5]} →
                  </Link>
                </C>
              </Row>
            ))}
            <Row n={14}><C colspan={12} k="blank"></C></Row>

            {/* SECTION: ROI MODEL */}
            <SectionRow label="C · ROI MODEL — try the formula yourself" />
            <Row n={16}>
              <C k="header"></C>
              <C k="label" colspan={2} bold>Inputs (editable)</C>
              <C k="label" bold right>Your value</C>
              <C k="label" colspan={2} fg="#6b7280">Notes</C>
              <C k="label" colspan={2} bold>Output (computed)</C>
              <C k="label" bold right>Result</C>
              <C k="label" colspan={3} fg="#6b7280">Formula</C>
            </Row>
            <InputRow n={17} label="Seats licensed" v={seats} set={setSeats} step={5} note="Total active seats" outLabel="Annual license cost" outV={`RM ${m.seatCost.toLocaleString()}`} formula="= seats × RM 99 × 12" />
            <InputRow n={18} label="Reps in pipeline" v={reps} set={setReps} step={1} note="Of the seats above" outLabel="Selling hours / week (now)" outV={`${m.sellingHoursBefore} h`} formula="= reps × 40 × (1 − admin%)" />
            <InputRow n={19} label="Avg deal value (RM)" v={avgDeal} set={setAvgDeal} step={5000} note="Won deals, last 90d" outLabel="Selling hours / week (Claritas)" outV={`${m.sellingHoursAfter} h`} formula="= reps × 40 × (1 − 8%)" hi />
            <InputRow n={20} label="Win rate now (%)" v={winRateBefore} set={setWinRateBefore} step={1} note="Industry median 22%" outLabel="Recovered selling hours / wk" outV={`+${m.recoveredHours} h`} formula="= after − before" hi />
            <InputRow n={21} label="Win rate Claritas (%)" v={winRateAfter} set={setWinRateAfter} step={1} note="Cohort median 38%" outLabel="Revenue lift / week" outV={`+RM ${m.revenueLiftWk.toLocaleString()}`} formula="= Δ deals × avg" hi />
            <InputRow n={22} label="Admin time now (%)" v={adminBefore} set={setAdminBefore} step={5} note="Industry median 40%" outLabel="Annual revenue lift" outV={`RM ${m.annualLift.toLocaleString()}`} formula="= weekly × 50" hi />
            <InputRow n={23} label="Admin time Claritas (%)" v={adminAfter} set={setAdminAfter} step={1} note="Cohort median 8%" outLabel="ROI multiple" outV={`${m.roi}×`} formula="= lift / cost" hi />

            {/* Bottom-line row */}
            <Row n={24} highlight>
              <C k="header"></C>
              <C k="label" colspan={2} bold>BOTTOM LINE</C>
              <C right bold mono colspan={1} fg="#166534">{m.payback}× ROI</C>
              <C colspan={2} fg="#6b7280" mono>// payback period</C>
              <C k="label" colspan={2} bold>Payback (months)</C>
              <C bold right mono fg="#166534">{m.payback} mo</C>
              <C colspan={3} k="cta">
                <Link href="#" className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded hover:bg-black">
                  Lock this number — start trial <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </C>
            </Row>
            <Row n={25}><C colspan={12} k="blank"></C></Row>

            {/* SECTION: COMPARISON */}
            <SectionRow label="D · COMPARED TO YOUR CURRENT CRM" />
            <Row n={27}>
              <C k="header"></C>
              <C k="label" colspan={2} bold>Capability</C>
              <C bold right colspan={2}>Industry median</C>
              <C bold right colspan={2} bg="#dcfce7">Claritas</C>
              <C bold right colspan={2}>Δ</C>
              <C k="label" colspan={3} fg="#6b7280">Source</C>
            </Row>
            {[
              ["p99 query latency", "340 ms", "47 ms", "7.2× faster", "Claritas benchmarks, Q1"],
              ["Time to first deal logged", "84 days", "11 seconds", "660,000×", "247-customer median"],
              ["AI agent native", "Add-on $40", "Free, native", "—", "Vendor pricing pages"],
              ["5-yr renewal", "22%", "94%", "+327%", "EY-audited annually"],
              ["Open API", "Partial", "REST + GraphQL + gRPC", "—", "Public docs"],
              ["Self-host option", "No", "Yes (enterprise)", "—", "MSA addendum"],
            ].map((r, i) => (
              <Row key={i} n={28 + i}>
                <C k="header"></C>
                <C k="label" colspan={2}>{r[0]}</C>
                <C right colspan={2} mono fg="#6b7280">{r[1]}</C>
                <C right colspan={2} mono bold bg="#dcfce7">{r[2]}</C>
                <C right colspan={2} mono fg="#16a34a" bold>{r[3]}</C>
                <C colspan={3} fg="#6b7280" mono>{r[4]}</C>
              </Row>
            ))}
            <Row n={34}><C colspan={12} k="blank"></C></Row>

            {/* SECTION: CUSTOMERS */}
            <SectionRow label="E · CUSTOMERS — selected" />
            <Row n={36}>
              <C k="header"></C>
              <C k="label" colspan={2} bold>Customer</C>
              <C k="label" bold>Industry</C>
              <C k="label" bold>Since</C>
              <C k="label" bold right>Seats</C>
              <C k="label" bold right>Renewed</C>
              <C k="label" colspan={5} fg="#6b7280">Quote</C>
            </Row>
            {[
              ["FGV Holdings", "Plantation", "2008", "1,240", true, "Replaced 4 systems with 1. Renewals haven't been this easy in 20 yrs."],
              ["Singtel Enterprise", "Telco", "2015", "3,400", true, "1,400 reps onboarded across 6 markets in 11 weeks."],
              ["Nando's Asia", "F&B", "2020", "180", true, "Loyalty rollout shipped in 6 weeks, not 6 months."],
              ["Estate 123", "PropTech", "2024", "65", true, "First deal logged in 11 seconds. Migration = one weekend."],
            ].map((r, i) => (
              <Row key={i} n={37 + i}>
                <C k="header"></C>
                <C k="logo" colspan={2} bold>{r[0]}</C>
                <C fg="#6b7280">{r[1]}</C>
                <C mono>{r[2]}</C>
                <C right mono>{r[3]}</C>
                <C right>{r[4] ? <Check className="h-4 w-4 text-emerald-600 inline" /> : <X className="h-4 w-4 text-red-500 inline" />}</C>
                <C colspan={5} fg="#1f2937" mono>&ldquo;{r[5]}&rdquo;</C>
              </Row>
            ))}
            <Row n={41}><C colspan={12} k="blank"></C></Row>

            {/* SECTION: CTA */}
            <SectionRow label="F · NEXT ACTION" />
            <Row n={43}>
              <C k="header"></C>
              <C colspan={11} k="cta">
                <div className="flex items-center gap-3 py-2">
                  <span className="text-base font-medium">Make this sheet your reality.</span>
                  <Link href="#" className="bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded hover:bg-black inline-flex items-center gap-1.5">
                    Start free trial <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="#" className="border border-black/15 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded hover:bg-black hover:text-white">
                    Talk to sales
                  </Link>
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-black/40 font-mono">Cell F43 · last edit just now</span>
                </div>
              </C>
            </Row>
          </tbody>
        </table>
      </div>

      <BottomBar />
    </div>
  );
}

/* ─────────── Sheet chrome bits ─────────── */

function Toolbar() {
  return (
    <div className="border-b bg-[#f8f9fa] sticky top-14 z-30" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
      <div className="px-4 h-10 flex items-center gap-1 text-xs">
        <Link href="/versions/19" className="font-bold text-[#137333] mr-3 flex items-center gap-1.5">
          <Sigma className="h-4 w-4" /> Claritas.sheet
        </Link>
        {["File", "Edit", "View", "Insert", "Format", "Data", "Tools", "Help"].map((m) => (
          <button key={m} className="px-2 py-1 hover:bg-black/5 rounded">{m}</button>
        ))}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-mono flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> All changes saved
          </span>
          <Link href="#" className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">Share →</Link>
        </div>
      </div>
    </div>
  );
}

function FormulaBar({ value }: { value: string }) {
  return (
    <div className="border-b bg-white" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
      <div className="px-3 h-9 flex items-center gap-2 text-xs">
        <span className="font-mono text-[11px] text-[#137333] font-bold w-12">A1</span>
        <span className="font-mono text-[11px] text-black/40">fx</span>
        <span className="font-mono text-[12px]">{value}</span>
      </div>
    </div>
  );
}

function ColGroup() {
  return (
    <colgroup>
      <col style={{ width: "44px" }} />
      {Array.from({ length: 12 }).map((_, i) => <col key={i} style={{ width: "auto" }} />)}
    </colgroup>
  );
}

function Header() {
  return (
    <thead>
      <tr className="text-[11px] text-black/55 font-mono">
        <th className="bg-[#f8f9fa] border border-black/10 h-6"></th>
        {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((l) => (
          <th key={l} className="bg-[#f8f9fa] border border-black/10 font-normal">{l}</th>
        ))}
      </tr>
    </thead>
  );
}

function SectionRow({ label }: { label: string }) {
  return (
    <tr>
      <td className="bg-[#f8f9fa] border border-black/10 text-[11px] text-black/55 font-mono text-center">§</td>
      <td colSpan={12} className="bg-[#137333] text-white border border-black/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] font-bold">
        {label}
      </td>
    </tr>
  );
}

function Row({ n, highlight, children }: { n: number; highlight?: boolean; children: React.ReactNode }) {
  return (
    <tr className={highlight ? "bg-yellow-50" : ""}>
      <td className="bg-[#f8f9fa] border border-black/10 text-[10px] text-black/45 font-mono text-center">{n}</td>
      {children}
    </tr>
  );
}

function C({
  v,
  children,
  k,
  w,
  bg,
  fg,
  bold,
  mono,
  right,
  colspan = 1,
  rowspan,
}: {
  v?: React.ReactNode;
  children?: React.ReactNode;
  k?: CellKind;
  w?: string;
  bg?: string;
  fg?: string;
  bold?: boolean;
  mono?: boolean;
  right?: boolean;
  colspan?: number;
  rowspan?: number;
}) {
  const blank = k === "blank";
  return (
    <td
      colSpan={colspan}
      rowSpan={rowspan}
      className={`border border-black/10 px-2 py-1.5 align-middle ${right ? "text-right" : ""} ${mono ? "font-mono" : ""} ${bold ? "font-semibold" : ""} ${blank ? "h-3" : ""}`}
      style={{ background: bg, color: fg, width: w, fontSize: mono ? 12 : 13 }}
    >
      {children ?? v}
    </td>
  );
}

function InputRow({
  n, label, v, set, step, note, outLabel, outV, formula, hi,
}: {
  n: number; label: string; v: number; set: (n: number) => void; step: number;
  note: string; outLabel: string; outV: string; formula: string; hi?: boolean;
}) {
  return (
    <tr className={hi ? "bg-emerald-50/40" : ""}>
      <td className="bg-[#f8f9fa] border border-black/10 text-[10px] text-black/45 font-mono text-center">{n}</td>
      <td className="bg-[#f8f9fa] border border-black/10"></td>
      <td colSpan={2} className="border border-black/10 px-2 py-1.5 text-[13px]">{label}</td>
      <td className="border border-black/10 px-1 py-0 text-right">
        <input
          type="number"
          value={v}
          step={step}
          onChange={(e) => set(Number(e.target.value))}
          className="w-full bg-blue-50 border border-blue-300 px-2 py-1 text-right font-mono text-[13px] font-semibold text-blue-900 focus:bg-white focus:border-blue-500 focus:outline-none rounded-sm"
        />
      </td>
      <td colSpan={2} className="border border-black/10 px-2 py-1.5 text-[12px] text-black/55 font-mono">// {note}</td>
      <td colSpan={2} className="border border-black/10 px-2 py-1.5 text-[13px]">{outLabel}</td>
      <td className="border border-black/10 px-2 py-1.5 text-right font-mono font-semibold text-[13px]" style={{ color: hi ? "#166534" : undefined, background: hi ? "#dcfce7" : undefined }}>
        {outV}
      </td>
      <td colSpan={3} className="border border-black/10 px-2 py-1.5 text-[12px] text-black/55 font-mono">{formula}</td>
    </tr>
  );
}

function BottomBar() {
  return (
    <div className="border-t bg-[#f8f9fa] sticky bottom-0 z-20" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
      <div className="px-3 h-7 flex items-center gap-1 text-[11px] overflow-x-auto">
        {[
          { l: "Pricing", active: true },
          { l: "ROI Model" },
          { l: "Comparison" },
          { l: "Customers" },
          { l: "Notes" },
        ].map((t) => (
          <button key={t.l} className={`px-3 h-full border-r flex items-center gap-1.5 ${t.active ? "bg-white font-semibold border-t-2 border-t-emerald-600" : "hover:bg-black/5"}`} style={{ borderColor: "rgba(0,0,0,0.1)" }}>
            {t.l}
          </button>
        ))}
        <div className="ml-auto pr-3 text-[10px] uppercase tracking-wider text-black/40 font-mono">v19 · spreadsheet · 247 cells · 1 reader</div>
      </div>
    </div>
  );
}
