import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/navigation/navbar";
import { SiteFooter } from "@/components/navigation/site-footer";
import { PortfolioEffects } from "@/components/portfolio-effects";

const metaTitle = "Ayush Pathak | Software Developer & AI Engineer";
const metaDescription =
  "Portfolio of Ayush Pathak — AI and full-stack engineer building realtime communication, AI copilots, and resilient cloud systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-pathak.dev"),
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Ayush Pathak",
    "Software Developer",
    "AI Engineer",
    "Full Stack",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "https://ayush-pathak.dev",
    siteName: "Ayush Pathak Portfolio",
    images: [
      {
        url: "https://github.com/ayushpath123.png",
        width: 1200,
        height: 630,
        alt: "Ayush Pathak Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    creator: "@ayushpath123",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        <PortfolioEffects />
        <Navbar />
        <main className="container w-full max-w-[680px] px-6">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
