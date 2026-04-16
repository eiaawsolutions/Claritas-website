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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Pricing
            </span>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl">
              SIMPLE, TRANSPARENT{" "}
              <span className="text-coral-500">PRICING</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Choose the plan that fits your team. All plans include a 14-day
              free trial with full access — no credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl border p-5 sm:p-6 lg:p-8 transition-all ${
                  plan.popular
                    ? "border-coral-200 bg-white shadow-[0_20px_60px_-15px_rgba(232,101,90,0.3)] ring-2 ring-coral-500"
                    : "border-gray-200 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-bold text-dark-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{plan.audience}</p>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-dark-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">{plan.period}</span>
                </div>

                <Link
                  href="/contact?demo=true"
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                    plan.popular
                      ? "bg-coral-500 text-white hover:bg-coral-600 shadow-lg shadow-coral-500/25"
                      : "border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white"
                  }`}
                >
                  {plan.price === "Custom"
                    ? "CONTACT SALES"
                    : "GET STARTED"}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coral-500" />
                      <span className="text-sm text-gray-600">{f}</span>
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
