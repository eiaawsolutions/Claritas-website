import type { Metadata } from "next";
import { Workspace } from "./_components/workspace";

export const metadata: Metadata = {
  title: "Intelligent Sales Engine — Bank Muamalat × Claritas | Horizon 4 Demo",
  description:
    "A working preview of the Horizon 4 AI Sales Engine inside a Claritas CRM Relationship-Manager workspace: predictive lead scoring, generative outreach, and autonomous pipeline operations for Bank Muamalat.",
  robots: "noindex, nofollow",
};

export default function BmmbDemoPage() {
  return <Workspace />;
}
