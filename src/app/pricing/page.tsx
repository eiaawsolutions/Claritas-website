"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    audience: "For small teams getting started",
    price: "RM 79",
    period: "/user/month",
    popular: false,
    features: [
      "Contact management (up to 5,000)",
      "Basic pipeline management",
      "Email integration",
      "Task & activity tracking",
      "Standard reports",
      "Email support",
      "Mobile app access",
    ],
  },
  {
    name: "Professional",
    audience: "For growing teams that need more",
    price: "RM 149",
    period: "/user/month",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Unlimited contacts",
      "Marketing campaign module",
      "Sales forecasting",
      "Support ticketing",
      "Custom dashboards & reports",
      "API access",
      "Priority support",
      "Workflow automation",
    ],
  },
  {
    name: "Enterprise",
    audience: "For large organizations",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Everything in Professional, plus:",
      "Call center module",
      "Loyalty program",
      "Advanced security (SSO, audit)",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise deployment option",
      "SLA-backed support",
      "Training & onboarding",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative cl-gradient-hero pt-32 pb-16 text-center">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">Terms of Engagement</span>
            <span className="h-px w-12 bg-[#721011]" />
          </div>
          <h1 className="cl-serif text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f] max-w-4xl mx-auto">
            Transparent pricing, <span className="italic font-light text-[#721011]">considered partnership.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-[17px] leading-[1.75] text-[#3f3f3f]/70">
            Three tiers, each calibrated to a stage of organisational maturity. Every engagement begins with a fourteen-day trial and a private scoping session.
          </p>
        </div>
      </section>

      <section className="bg-[#fafafa] pb-28 pt-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative bg-white p-8 lg:p-10 border border-[#3f3f3f]/[0.06] ${plan.popular ? "cl-paper-edge ring-1 ring-[#721011]/30" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3f3f3f] text-white px-4 py-1 text-[10px] uppercase tracking-[0.28em] font-semibold">
                    Most Chosen
                  </span>
                )}

                <div className="cl-eyebrow mb-3">Tier {String(i + 1).padStart(2, "0")}</div>
                <h3 className="cl-serif text-[32px] leading-tight text-[#3f3f3f]">
                  {plan.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3f3f3f]/60 italic cl-serif">
                  {plan.audience}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="cl-serif text-[52px] leading-none text-[#3f3f3f]">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-[13px] text-[#3f3f3f]/55">{plan.period}</span>}
                </div>

                <div className="mt-6 h-px cl-rule-crimson opacity-60" />

                <Link
                  href="/contact?demo=true"
                  className={`mt-8 flex w-full items-center justify-center gap-2 px-5 py-3.5 text-[11px] uppercase tracking-[0.24em] font-semibold transition-colors duration-500 ${
                    plan.popular
                      ? "bg-[#3f3f3f] text-white hover:bg-[#721011]"
                      : "border border-[#3f3f3f]/25 text-[#3f3f3f] hover:border-[#721011] hover:text-[#721011]"
                  }`}
                >
                  {plan.price === "Custom" ? "Request Consultation" : "Begin Trial"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#721011]" strokeWidth={1.5} />
                      <span className="text-[14px] leading-[1.6] text-[#3f3f3f]/75">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
