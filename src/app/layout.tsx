// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

/* ---------------- Fonts ---------------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---------------- Metadata ---------------- */
export const metadata: Metadata = {
  title: "Utkarsh Maurya | Portfolio",
  description: "Personal portfolio of Utkarsh Maurya – Full Stack Developer",
  keywords: ["portfolio", "developer", "full stack", "web development"],
  authors: [{ name: "Utkarsh Maurya" }],
  // Helps generate absolute URLs for OG tags & sitemap
  metadataBase: new URL("https://your-domain.com"),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

/* ---------------- Layout Component ---------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased text-gray-100 transition-colors duration-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
