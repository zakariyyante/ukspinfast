import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GclidTracker from "@/components/GclidTracker";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Top Spin UK | Best Online Casinos in UK",
  description: "Find the best online casinos in the UK with top bonuses and secure gameplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-background text-foreground")}>
        <Suspense fallback={null}>
          <GclidTracker />
        </Suspense>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
