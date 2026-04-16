import { Metadata } from "next";
import { MarketingContent } from "./content";

export const metadata: Metadata = {
  title: "CRM for Marketing | Claritas CRM",
  description:
    "Target the right customer with integrated campaign management, response tracking, and marketing intelligence.",
};

export default function MarketingPage() {
  return <MarketingContent />;
}
