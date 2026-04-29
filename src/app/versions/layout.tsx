import type { Metadata } from "next";
import { VersionToggle } from "./version-toggle";

export const metadata: Metadata = {
  title: "Claritas — Design Review",
  description: "8 design directions for the Claritas website. Toggle between versions.",
  robots: "noindex, nofollow",
};

export default function VersionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <VersionToggle />
      {/* Each version supplies its own nav + footer */}
      {children}
    </div>
  );
}
