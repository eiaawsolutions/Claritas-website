"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

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
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV6 = version === "v6";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden pt-16 ${isV6 ? "bg-zinc-950" : isDark ? "bg-[#0b1121]" : "bg-gray-50"}`}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-[#0f1729] to-[#0b1121]" />}
        {isV6 && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        )}
        <div className={`mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative ${isV6 ? "py-20 sm:py-28" : isDark ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isV6 ? 0.5 : isDark ? 0.6 : 0.5 }}
          >
            {isV6 ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">
                Pricing
              </span>
            ) : isDark ? (
              <div className="flex items-center justify-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  Pricing
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
              </div>
            ) : (
              <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Pricing
              </span>
            )}
            <h1
              className={
                isV6
                  ? "mt-6 text-3xl md:text-5xl font-bold text-white tracking-tight"
                  : isDark
                    ? "text-4xl md:text-5xl font-bold text-white tracking-tight"
                    : "mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl"
              }
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV6 ? (
                <>Simple, Transparent <span className="text-blue-400">Pricing</span></>
              ) : isDark ? (
                <>Simple, Transparent <span className="text-blue-500">Pricing</span></>
              ) : (
                <>SIMPLE, TRANSPARENT{" "}<span className="text-coral-500">PRICING</span></>
              )}
            </h1>
            <p className={`mx-auto mt-4 max-w-2xl text-base ${isV6 ? "text-zinc-400 font-light" : isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
              Choose the plan that fits your team. All plans include a 14-day
              free trial with full access — no credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className={isV6 ? "pb-24 bg-zinc-50" : isDark ? "pb-24 sm:pb-32 bg-[#0b1121]" : "pb-20 sm:pb-28"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-3 ${isV6 ? "gap-8 -mt-12 relative z-10" : isDark ? "gap-8" : "gap-4 sm:gap-6 lg:gap-8"}`}>
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={
                  isV6
                    ? `relative rounded-2xl border bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition-all ${
                        plan.popular
                          ? "border-zinc-200 ring-2 ring-blue-500 shadow-blue-500/10"
                          : "border-zinc-200"
                      }`
                    : isDark
                      ? `relative rounded-2xl border p-8 lg:p-10 transition-all ${
                          plan.popular
                            ? "border-blue-500 bg-white/[0.03]"
                            : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.12]"
                        }`
                      : `relative rounded-2xl border p-5 sm:p-6 lg:p-8 transition-all ${
                          plan.popular
                            ? "border-coral-200 bg-white shadow-[0_20px_60px_-15px_rgba(232,101,90,0.3)] ring-2 ring-coral-500"
                            : "border-gray-200 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
                        }`
                }
              >
                {plan.popular && (
                  <span
                    className={
                      isV6
                        ? "absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-semibold"
                        : isDark
                          ? "absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full px-4 py-1 text-xs font-semibold text-white"
                          : "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral-500 px-4 py-1 text-xs font-semibold text-white"
                    }
                  >
                    Most Popular
                  </span>
                )}

                <h3 className={`text-lg font-bold ${isV6 ? "text-zinc-950" : isDark ? "text-white" : "text-dark-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${isV6 ? "text-zinc-500" : isDark ? "text-slate-500" : "text-gray-400"}`}>{plan.audience}</p>

                <div className="mt-6">
                  <span className={`text-4xl font-extrabold ${isV6 ? "text-zinc-950" : isDark ? "text-white" : "text-dark-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${isV6 ? "text-zinc-500" : isDark ? "text-slate-500" : "text-gray-400"}`}>{plan.period}</span>
                </div>

                <Link
                  href="/contact?demo=true"
                  className={
                    isV6
                      ? `mt-6 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                          plan.popular
                            ? "bg-zinc-950 text-white hover:bg-zinc-800"
                            : "border-2 border-zinc-300 text-zinc-900 hover:bg-zinc-950 hover:text-white"
                        }`
                      : isDark
                        ? `mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm font-semibold transition-all ${
                            plan.popular
                              ? "bg-blue-500 text-white hover:bg-blue-400"
                              : "border border-white/[0.12] text-white hover:border-white/30"
                          }`
                        : `mt-6 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                            plan.popular
                              ? "bg-coral-500 text-white hover:bg-coral-600 shadow-lg shadow-coral-500/25"
                              : "border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white"
                          }`
                  }
                >
                  {plan.price === "Custom"
                    ? "CONTACT SALES"
                    : "GET STARTED"}
                  <ArrowRight className={isV6 ? "h-4 w-4" : isDark ? "h-3.5 w-3.5" : "h-4 w-4"} />
                </Link>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isV6 ? "text-blue-600" : isDark ? "text-blue-500" : "text-coral-500"}`} />
                      <span className={`text-sm ${isV6 ? "text-zinc-600" : isDark ? "text-slate-400 font-light" : "text-gray-600"}`}>{f}</span>
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
