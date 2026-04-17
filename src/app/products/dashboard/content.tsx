"use client";

import { BarChart3 } from "lucide-react";
import { ProductPage } from "@/components/product-page";

const sections = [
  {
    title: "Historical Analysis",
    body: "Comprehensive Historical reporting is fully automated behind the scenes and made available centrally to everyone in a suite of Performance and Productivity Dashboards every half hour. These provide managers with vital KPI snapshots of their department\u2019s Intra-Day, Daily, Weekly, Monthly and Year to Date. Our exception reporting gives managers strong visual indicators of non-compliance or where action is required. Lapses and root cause can be observed and fully understood in a couple of clicks, without any human reporting effort. Historical results can be accessed painlessly using the available on-screen Date Controls.",
  },
  {
    title: "Channel Insights: Performance and Productivity",
    body: "With your essential KPI reporting being fully automated every day, you can painlessly access critical Contact Centre metrics yourself 24x7, and monitor adherence to Daily, Weekly, and Monthly Performance & Productivity Service Levels Agreement (SLAs). With an intuitive Point and Click design, you can select and filter different Departments and Channels, chose between Graphical and Classical Report styles. Being fully integrated, with a single click you can quickly identify the root cause of any Performance or Productivity issues.",
  },
  {
    title: "Management Dashboard Visibility",
    body: "Our reporting such as Live Performance, Productivity, Staff Status & Comprehensive Historical KPI reporting, are flexible to be configured at real-time, by Day/Week/Month & Year to Date. Management information is organized in a user-friendly manner, and can be accessed according to role, from top level down to the very granular e.g. By Agent by Half Hour by individual Skill.",
  },
  {
    title: "Key Capabilities",
    body: "Automates a significant proportion of day-to-day KPI reporting. Delivers self-service visibility to critical metrics across the entire contact centre operation. Surfaces performance and productivity gaps within seconds. Monitors customer activity so managers can allocate staff more effectively. Enables proactive management and real-time decisions across every channel.",
  },
];

export function DashboardContent() {
  return (
    <ProductPage
      icon={BarChart3}
      category="Analytics"
      title="Dashboard & Reports"
      tagline="Live performance. Productivity. Historical KPIs — configured in real time."
      description="Claritas™ CRM dashboards deliver live performance, productivity, staff status, and comprehensive historical KPI reporting, configured in real time by day, week, month, or year-to-date. Management information is organised by role — from board-level summary to the most granular agent half-hour — and made accessible without the friction of manual reporting."
      sections={sections}
      color="coral-500"
      bgLight="bg-coral-50"
      textColor="text-coral-500"
    />
  );
}
