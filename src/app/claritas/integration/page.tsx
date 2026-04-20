"use client";

import { ShoppingCart, Building2, Calculator, Phone } from "lucide-react";
import { SubpageShell } from "@/components/subpage-shell";

const integrations = [
  { icon: ShoppingCart, title: "POS / E-Commerce", desc: "Real-time or batch updates of sales information to the CRM system. Features include customer self-help portals, business intelligence sourcing, and 360-degree visibility into your shoppers' purchase history for targeted campaigns. Connect your online store and point-of-sale systems to track every customer interaction." },
  { icon: Building2, title: "ERP System", desc: "Integrating CRM with your ERP system reduces order-entry errors, enables discount approval workflows, and minimises duplicate data entry across systems. Automatically synchronise customer data, product catalogues, and order information between your CRM and enterprise resource planning platform." },
  { icon: Calculator, title: "Accounting Software", desc: "Critical for cost-and-revenue analysis. Claritas CRM functions as the master customer database, triggering real-time accounting updates with direct database connectivity. Build sales aging dashboards, track revenue per customer, and maintain a single source of truth for financial reporting." },
  { icon: Phone, title: "Telephony / CTI", desc: "Computer Telephony Integration allows automatic caller identification, instant contact information display via screen pops, and skill-based call routing. Your call centre agents see the full customer profile before they answer — reducing resolution time and delivering personalised service." },
];

export default function IntegrationPage() {
  return (
    <SubpageShell
      badge="Integration"
      title="Integration."
      subtitle="Extending the value of every customer record."
      description="Imagine POS sales data available in real-time, customer data automatically synchronised with your ERP, and invoices created automatically when opportunities close. Claritas™ CRM integrates with your existing business systems to create a unified view of every customer touchpoint."
      ctaTitle="Need a custom integration?"
      ctaDescription="Our Enterprise plan includes custom integrations and API access. Speak with our integration architects."
      ctaPrimary={{ label: "Contact Sales", href: "/contact" }}
      ctaSecondary={{ label: "Review Pricing", href: "/pricing" }}
    >
      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2">
        {integrations.map((item) => (
          <div key={item.title} className="bg-[#fafafa] p-8 lg:p-10 border border-[#3f3f3f]/[0.06] transition-shadow hover:cl-paper-edge">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 cl-serif text-[24px] leading-tight text-[#3f3f3f]">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#3f3f3f]/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </SubpageShell>
  );
}
