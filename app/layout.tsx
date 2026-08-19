import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Configure Next.js optimized fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// 2. Configure SEO & Metadata
export const metadata: Metadata = {
  title: "More Money Realty — Motivated seller leads & full real estate teams, done for you",
  description: "More Money Realty staffs and trains cold callers, acquisitions managers, dispositions, lead managers, transaction coordinators, sales managers and IT admins for U.S. real estate investors. Built by an operator who drove $3M+ in sales. Clients closed 50+ properties this year.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='7' y='7' width='86' height='86' rx='25' fill='%230B1611' stroke='%23D3AE60' stroke-width='4'/%3E%3Cpath d='M27 73 L27 33 L48 56 L69 33 L69 73' fill='none' stroke='%23E7C170' stroke-width='9' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  },
  openGraph: {
    title: "More Money Realty",
    description: "Motivated seller leads & full real estate teams, done for you.",
    type: "website",
    locale: "en_US",
    siteName: "More Money Realty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}>

        {/* SVG Sprite Definition (Global) */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F7E1A2" />
              <stop offset="0.48" stopColor="#D6B063" />
              <stop offset="1" stopColor="#A9791C" />
            </linearGradient>
            <linearGradient id="goldBright" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#E3BC6A" />
              <stop offset="1" stopColor="#FCEDC2" />
            </linearGradient>
            <linearGradient id="greenG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1B3025" />
              <stop offset="1" stopColor="#0A1510" />
            </linearGradient>
            <symbol id="mmr-emblem" viewBox="0 0 108 108">
              <rect x="4" y="4" width="100" height="100" rx="28" fill="url(#greenG)" stroke="url(#gold)" strokeWidth="3.5" />
              <rect x="10" y="10" width="88" height="88" rx="23" fill="none" stroke="#F7E1A2" strokeOpacity="0.14" strokeWidth="1" />
              <path d="M30 80 L30 36 L54 61 L77 36 L77 80" fill="none" stroke="url(#gold)" strokeWidth="9.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M80 43 L96 24" fill="none" stroke="url(#goldBright)" strokeWidth="4.8" strokeLinecap="round" />
              <path d="M96 24 L87.2 24.4 M96 24 L95.6 32.8" fill="none" stroke="url(#goldBright)" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>
            <symbol id="mmr-m" viewBox="0 0 100 100">
              <path d="M20 82 L20 20 L50 55 L80 20 L80 82" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>
          </defs>
        </svg>

        {/* Top Gradient Accent */}
        <div className="top-accent"></div>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}
