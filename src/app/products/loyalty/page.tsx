import { Metadata } from "next";
import { LoyaltyContent } from "./content";

export const metadata: Metadata = {
  title: "Loyalty Program | Claritas CRM",
  description:
    "Build customer loyalty with points, tiers, rewards, and engagement tracking integrated into your CRM.",
};

export default function LoyaltyPage() {
  return <LoyaltyContent />;
}
