import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, Building2, Calculator, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Integration | Claritas CRM",
  description:
    "Extend the value of your CRM — integrate with POS, ERP, accounting, and telephony systems for a unified business view.",
};

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
  return (
    <>
      <section className="bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Integration
            </span>
            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl">
              CRM <span className="text-coral-500">INTEGRATION</span>
            </h1>
            <p className="mt-4 text-lg font-medium italic text-gray-400">
              Integration extends the value of CRM
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Imagine POS sales data available in real-time, customer data automatically synchronised
              with your ERP, and invoices created automatically when opportunities close. Claritas&trade; CRM
              integrates with your existing business systems to create a unified view of every customer touchpoint.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {integrations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-500">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-dark-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-dark-900 sm:text-3xl">
            Need a custom <span className="text-coral-500">integration</span>?
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Our Enterprise plan includes custom integrations and API access. Talk to our team about your requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25">
              CONTACT SALES <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border-2 border-dark-900 px-8 py-3 text-sm font-bold uppercase tracking-wider text-dark-900 transition-all hover:bg-dark-900 hover:text-white">
              SEE PRICING
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
