import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Claritas CRM | Better Sales With Effective Marketing",
  description:
    "Claritas CRM empowers you to manage your relationships with customers across marketing, sales, and support — ensuring retention and promoting satisfaction.",
  keywords: [
    "CRM",
    "customer relationship management",
    "sales CRM",
    "marketing CRM",
    "support CRM",
    "Malaysia CRM",
    "cloud CRM",
    "Claritas",
  ],
  referrer: "strict-origin-when-cross-origin",
  robots: "index, follow",
  openGraph: {
    title: "Claritas CRM | Better Sales With Effective Marketing",
    description:
      "Manage your relationship with customer from all aspects.",
    url: "https://www.claritas.asia",
    siteName: "Claritas CRM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
