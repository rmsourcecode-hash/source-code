import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Source Code | Pre-Portioned Soaked Dry Fruits & Seeds",
  description:
    "Upgrade your mornings with Source Code: Vital. Pre-portioned nuts & seeds sachets. Cut, soak overnight, consume fresh. Hand-packed, no additives, no salt.",
  keywords: [
    "soaked nuts",
    "dry fruits",
    "seeds",
    "healthy morning",
    "nutrition",
    "pre-portioned",
    "almonds",
    "walnuts",
    "pumpkin seeds",
  ],
  openGraph: {
    title: "Source Code | Pre-Portioned Soaked Dry Fruits & Seeds",
    description:
      "Upgrade your mornings with Source Code: Vital. Pre-portioned nuts & seeds sachets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
