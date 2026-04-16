import { Metadata } from "next";
import { FintechContent } from "./content";

export const metadata: Metadata = {
  title: "CRM for Banking & Financial Services | Claritas CRM",
  description:
    "A flexible and customizable CRM solution suited to specific needs of banking and financial service industry.",
};

export default function FintechPage() {
  return <FintechContent />;
}
