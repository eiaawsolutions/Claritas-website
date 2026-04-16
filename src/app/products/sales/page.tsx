import { Metadata } from "next";
import { SalesContent } from "./content";

export const metadata: Metadata = {
  title: "CRM for Sales | Claritas CRM",
  description:
    "Sell smarter, sell faster with pipeline management, sales forecasting, and quotation tracking.",
};

export default function SalesPage() {
  return <SalesContent />;
}
