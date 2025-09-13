'use client';

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Navbar with no SSR to avoid hydration issues
const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

// Dynamically import the Footer with no SSR to avoid hydration issues
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <main className="flex-grow mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
