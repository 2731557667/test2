import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Πολυτεχνείο Αθηνών Καινοτομίας - API",
  keywords: "API, Πολυτεχνείο Αθηνών Καινοτομίας, ελληνική εκπαίδευση, τεχνολογία, καινοτομία, Αθήνα, πανεπιστήμιο, πολυτεχνείο",
  description: "Επίσημος ιστότοπος του Πολυτεχνείου Αθηνών Καινοτομίας (API), που προσφέρει υψηλής ποιότητας προγράμματα εκπαίδευσης στην τεχνολογία και την καινοτομία στην Αθήνα, Ελλάδα.",
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
    <html lang="el">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-JW5TYZ3JC2" />
    </html>
  );
}
