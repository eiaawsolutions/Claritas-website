import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
