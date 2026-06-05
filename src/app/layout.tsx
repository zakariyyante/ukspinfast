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
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;

export const metadata: Metadata = {
  title: "UKSpinFast | Top Online Casino Reviews",
  description: "Find the best online casinos with top bonuses and secure gameplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18079279033"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18079279033');
          `}
        </Script>
      </head>
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
