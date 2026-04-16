import { Metadata } from "next";
import { DashboardContent } from "./content";

export const metadata: Metadata = {
  title: "Dashboard & Reports | Claritas CRM",
  description:
    "Live Performance, Productivity, Staff Status & Comprehensive Historical KPI reporting configured at real-time.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
