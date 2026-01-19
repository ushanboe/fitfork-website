
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitFork - Eat Smarter, Live Healthier",
  description:
    "FitFork is your intelligent companion for tracking nutrition, managing recipes, and achieving your health goals. AI-powered food scanning, Strava integration, and more.",
  keywords: [
    "nutrition tracking",
    "food scanner",
    "calorie counter",
    "recipe management",
    "fitness app",
    "health tracking",
    "Strava integration",
    "PWA",
  ],
  authors: [{ name: "FitFork" }],
  openGraph: {
    title: "FitFork - Eat Smarter, Live Healthier",
    description:
      "Your intelligent companion for tracking nutrition and achieving health goals.",
    url: "https://fitfork.app",
    siteName: "FitFork",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitFork - Eat Smarter, Live Healthier",
    description:
      "Your intelligent companion for tracking nutrition and achieving health goals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
