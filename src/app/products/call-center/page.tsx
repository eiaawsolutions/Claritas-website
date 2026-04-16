import { Metadata } from "next";
import { CallCenterContent } from "./content";

export const metadata: Metadata = {
  title: "CRM for Call Center | Claritas CRM",
  description:
    "Integrated call center management with screen pops, call logging, and performance analytics.",
};

export default function CallCenterPage() {
  return <CallCenterContent />;
}
