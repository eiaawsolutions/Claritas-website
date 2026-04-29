"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";
import { DesignReviewFAB } from "@/components/design-review-fab";

export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const isVersions = pathname.startsWith("/versions");

  if (isVersions) {
    // /versions/* routes supply their own nav + footer per design brief.
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
      <DesignReviewFAB />
    </>
  );
}
