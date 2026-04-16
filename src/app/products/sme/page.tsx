import { Metadata } from "next";
import { SMEContent } from "./content";

export const metadata: Metadata = {
  title: "CRM for SME | Claritas CRM",
  description:
    "Enterprise-grade CRM tailored for small and medium businesses — affordable, easy to set up, powerful to use.",
};

export default function SMEPage() {
  return <SMEContent />;
}
