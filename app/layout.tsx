import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Београдски технички институт за аутоматизацију - Virtuelna Škola Srbije",
  keywords: "BTIA, Virtuelna Škola Srbije, Београдски технички институт за аутоматизацију, srpsko obrazovanje, virtuelno obrazovanje, online učenje, Srbija, Beograd, virtuelna škola",
  description: "Zvanični sajt Savremenog Srpskog Centra za Znanje (Virtuelna Škola Srbije), koji nudi visokokvalitetne programe virtuelnog obrazovanja u Srbiji.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "android-chrome",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-JW5TYZ3JC2" />
    </html>
  );
}
