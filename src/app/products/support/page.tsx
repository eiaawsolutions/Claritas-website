import { Metadata } from "next";
import { SupportContent } from "./content";

export const metadata: Metadata = {
  title: "CRM for Support | Claritas CRM",
  description:
    "Enhance customer experience with service automation, SLA tracking, and self-help knowledge portals.",
};

export default function SupportPage() {
  return <SupportContent />;
}
