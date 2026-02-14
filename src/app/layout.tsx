import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XPayments | Global Payments Operating System",
  description:
    "XPayments - Global Payments Operating System. Superior UX, higher conversions, minimal payment operations. HyperCheckout, HyperUPI, HyperCredit—everything for 10x growth.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-sky-50">
      <body className={`${inter.className} antialiased flex min-h-screen flex-col bg-sky-50 text-gray-900`}>
        <Header />
        <main className="flex-1 bg-sky-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
