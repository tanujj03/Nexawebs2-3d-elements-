import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GlobalAtmosphere } from "../components/effects/GlobalAtmosphere";
import { SmoothScroll } from "../components/motion/SmoothScroll";
import { ScrollStory } from "../components/motion/ScrollStory";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexawebs — Premium AI Web Agency",
  description:
    "Luxury minimal, cinematic AI web experiences. Strategy, design, and engineering for premium brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden flex flex-col">
        <GlobalAtmosphere />
        <SmoothScroll />
        <ScrollStory />
        {children}
      </body>
    </html>
  );
}
