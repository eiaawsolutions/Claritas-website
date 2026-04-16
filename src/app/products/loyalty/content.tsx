"use client";

import { Star } from "lucide-react";
import { ProductPage } from "@/components/product-page";

export function LoyaltyContent() {
  return (
    <ProductPage
      icon={Star}
      category="Loyalty"
      title="LOYALTY PROGRAM"
      tagline="Reward. Retain. Grow."
      description="Turn one-time buyers into lifelong customers with Claritas Loyalty. Design point-based, tier-based, or hybrid loyalty programs that integrate seamlessly with your sales and marketing workflows."
      color="from-amber-500 to-yellow-600"
      bgLight="bg-amber-50"
      textColor="text-amber-600"
      sections={[
        {
          title: "Points & Tier Management",
          body: "Design flexible point-earning rules and tier structures with automatic upgrades, downgrades, and expiration. Create reward tiers that motivate customers to increase their engagement and spending with your brand.",
        },
        {
          title: "Rewards Catalog",
          body: "Manage a catalog of redeemable rewards \u2014 products, discounts, experiences \u2014 with inventory tracking. Let customers browse and redeem rewards through a branded member portal.",
        },
        {
          title: "Member Portal",
          body: "Give members a branded portal to check points, browse rewards, view tier status, and update preferences. Empower customers with self-service access to their loyalty information.",
        },
        {
          title: "Engagement Tracking",
          body: "Track member engagement across transactions, referrals, social interactions, and program participation. Use engagement data to segment members and trigger personalized campaigns.",
        },
        {
          title: "Campaign Integration",
          body: "Trigger loyalty-specific campaigns \u2014 bonus points events, tier challenges, win-back offers \u2014 from within the CRM. Align your loyalty program with your broader marketing strategy.",
        },
        {
          title: "Analytics & ROI",
          body: "Measure program performance with retention rates, redemption rates, incremental revenue, and CLV impact. Use data-driven insights to optimize your loyalty program for maximum return.",
        },
      ]}
    />
  );
}
