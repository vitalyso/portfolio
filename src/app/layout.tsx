import * as React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Mukta_Mahee, Montserrat, Cormorant_Garamond } from "next/font/google";
import { cn } from "~/lib/utils";
import "./globals.css";

const heroFont = Montserrat({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hero",
});

const bodyFont = Mukta_Mahee({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const titleFont = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Vitaly Sivkov",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* favicon */}
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Vitaly Sivkov</title>
      </head>
      <body
        className={cn(bodyFont.variable, heroFont.variable, titleFont.variable)}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
