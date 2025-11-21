import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navigation/navbar";
import { SiteFooter } from "@/components/navigation/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metaTitle = "Ayush Pathak | Software Developer & AI Engineer";
const metaDescription =
  "Portfolio of Ayush Pathak — AI & Full-Stack engineer building realtime communication, AI copilots, and resilient cloud systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-pathak.dev"),
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Ayush Pathak",
    "Software Developer",
    "AI Engineer",
    "Full Stack",
    "VideoSDK",
    "WebRTC",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} page-shell antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
