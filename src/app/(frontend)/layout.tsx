import type { Metadata } from "next";
import { Sora, Poppins } from "next/font/google";

import { cn } from "@/utilities/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import React from "react";

import { AdminBar } from "../components/AdminBar";

import { LivePreviewListener } from "../components/LivePreviewListener";
import { Providers } from "../providers";
import { InitTheme } from "../providers/Theme/InitTheme";
import { mergeOpenGraph } from "../utilities/mergeOpenGraph";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        sora.variable,
        poppins.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar />
          <LivePreviewListener />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SERVER_URL || "https://payloadcms.com",
  ),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};
