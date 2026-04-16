"use client";

import { Building2 } from "lucide-react";
import { ProductPage } from "@/components/product-page";

export function SMEContent() {
  return (
    <ProductPage
      icon={Building2}
      category="SME"
      title="CRM FOR SME"
      tagline="Enterprise Power, SME Simplicity"
      description="Get the power of an enterprise CRM without the complexity or cost. Claritas SME is designed for growing businesses that need marketing, sales, and support in one easy-to-use platform."
      color="from-emerald-500 to-green-600"
      bgLight="bg-emerald-50"
      textColor="text-emerald-600"
      sections={[
        {
          title: "Quick Setup",
          body: "Get started in minutes with guided onboarding, pre-built templates, and intuitive configuration wizards. No IT team required \u2014 your team can be up and running in days, not months.",
        },
        {
          title: "All-in-One Platform",
          body: "Marketing, sales, and support unified in a single platform \u2014 no need to juggle multiple tools. Manage your entire customer lifecycle from one dashboard.",
        },
        {
          title: "Affordable Pricing",
          body: "SME-friendly pricing with no hidden costs. Scale your plan as your business grows. Transparent per-user pricing ensures you only pay for what you need.",
        },
        {
          title: "Contact Management",
          body: "Centralize all customer data with smart contact cards, interaction history, and relationship mapping. Never lose track of a customer conversation again.",
        },
        {
          title: "Task & Activity Tracking",
          body: "Never miss a follow-up with task management, reminders, and activity timelines per contact. Stay on top of every deal and support request.",
        },
        {
          title: "Reporting Dashboard",
          body: "Pre-built dashboards for sales pipeline, campaign performance, and support metrics \u2014 no setup required. Get instant visibility into your business performance.",
        },
      ]}
    />
  );
}
