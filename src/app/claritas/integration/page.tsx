"use client";

import { ShoppingCart, Building2, Calculator, Phone } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";
import { useDesignVersion } from "@/config/design-context";

const integrations = [
  {
    icon: ShoppingCart,
    title: "POS / E-Commerce",
    desc: "Real-time or batch updates of sales information to the CRM system. Features include customer self-help portals, business intelligence sourcing, and 360-degree visibility into your shoppers' purchase history for targeted campaigns. Connect your online store and point-of-sale systems to track every customer interaction.",
  },
  {
    icon: Building2,
    title: "ERP System",
    desc: "Integrating CRM with your ERP system reduces order-entry errors, enables discount approval workflows, and minimises duplicate data entry across systems. Automatically synchronise customer data, product catalogues, and order information between your CRM and enterprise resource planning platform.",
  },
  {
    icon: Calculator,
    title: "Accounting Software",
    desc: "Critical for cost-and-revenue analysis. Claritas CRM functions as the master customer database, triggering real-time accounting updates with direct database connectivity. Build sales aging dashboards, track revenue per customer, and maintain a single source of truth for financial reporting.",
  },
  {
    icon: Phone,
    title: "Telephony / CTI",
    desc: "Computer Telephony Integration allows automatic caller identification, instant contact information display via screen pops, and skill-based call routing. Your call centre agents see the full customer profile before they answer — reducing resolution time and delivering personalised service.",
  },
];

export default function IntegrationPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;
  const isV9 = version === "v9";

  return (
    <SubpageShell
      badge="Integration"
      title={isV9 ? "Integration." : isDark ? "CRM Integration" : "CRM INTEGRATION"}
      subtitle={isV9 ? "Extending the value of every customer record." : "Integration extends the value of CRM"}
      description="Imagine POS sales data available in real-time, customer data automatically synchronised with your ERP, and invoices created automatically when opportunities close. Claritas™ CRM integrates with your existing business systems to create a unified view of every customer touchpoint."
      ctaTitle="Need a custom integration?"
      ctaDescription="Our Enterprise plan includes custom integrations and API access. Speak with our integration architects."
      ctaPrimary={{ label: isV9 ? "Contact Sales" : "CONTACT SALES", href: "/contact" }}
      ctaSecondary={{ label: isV9 ? "Review Pricing" : "SEE PRICING", href: "/pricing" }}
    >
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2">
        {integrations.map((item) => (
          <div
            key={item.title}
            className={
              isV9
                ? "bg-[#EDE4D3] p-8 lg:p-10 transition-shadow hover:v9-paper-edge"
                : isV5
                ? "border border-white/[0.06] bg-transparent p-6 sm:p-8"
                : "rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            }
          >
            <div
              className={
                isV9
                  ? "flex h-12 w-12 items-center justify-center rounded-full bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20"
                  : isV5
                  ? "flex h-12 w-12 items-center justify-center bg-blue-500/10 text-blue-400"
                  : "flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-500"
              }
            >
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className={isV9 ? "mt-6 v9-serif text-[24px] leading-tight text-[#1C1A17]" : isDark ? "mt-5 text-lg font-semibold text-white" : "mt-5 text-lg font-bold text-dark-900"}>
              {item.title}
            </h3>
            <p className={isV9 ? "mt-4 text-[15px] leading-[1.7] text-[#1C1A17]/70" : isDark ? "mt-3 text-sm leading-relaxed text-slate-400 font-light" : "mt-3 text-sm leading-relaxed text-gray-500"}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </SubpageShell>
  );
}
