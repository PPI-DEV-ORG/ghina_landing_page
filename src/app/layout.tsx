import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-expect-error CSS is processed by Next.js and has no TypeScript declarations.
import "./globals.css";
import { Navbar } from "@/widgets/navbar/ui/Navbar";
import { Footer } from "@/widgets/footer/ui/Footer";
import { SITE_CONFIG } from "@/shared/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Jual CCTV, Jasa Pasang & SAMTEK VMS`,
  description: SITE_CONFIG.description,
  keywords: [
    "CCTV",
    "Jasa Pasang CCTV",
    "PT Ghina Multi Prima",
    "SAMTEK VMS",
    "Kamera CCTV Indoor Outdoor",
    "Maintenance CCTV Bekasi Jakarta",
  ],
  icons: {
    icon: [
      { url: "/images/logo-dark.png", type: "image/png" },
      { url: "/images/logo-light.jpg", type: "image/jpeg" },
    ],
    shortcut: "/images/logo-dark.png",
    apple: "/images/logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/30 selection:text-tertiary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

