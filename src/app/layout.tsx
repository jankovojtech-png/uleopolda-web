import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LightboxProvider } from "@/components/LightboxProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "U Leopolda | Ubytování v Brně",
  description: "Komfortní ubytování v Brně pro firmy i jednotlivce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}
