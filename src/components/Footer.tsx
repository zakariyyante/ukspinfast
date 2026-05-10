"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { getCurrentYear } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-panel py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold tracking-tighter text-primary neon-text">
              TOPSPIN<span className="text-foreground">UK</span>
            </Link>
            <p className="text-sm text-foreground/60">
              Your trusted source for the best online casino reviews and bonuses in the United Kingdom. We only list licensed and regulated brands.
            </p>
            <div className="flex items-center gap-2">
              <span className="rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">18+</span>
              <span className="text-xs text-foreground/60">BeGambleAware.org</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about-us" className="text-sm text-foreground/60 hover:text-primary">About Us</Link>
              <Link href="/contact-us" className="text-sm text-foreground/60 hover:text-primary">Contact Us</Link>
              <Link href="/terms-and-conditions" className="text-sm text-foreground/60 hover:text-primary">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-sm text-foreground/60 hover:text-primary">Privacy Policy</Link>
              <Link href="/responsible-gambling" className="text-sm text-foreground/60 hover:text-primary">Responsible Gambling</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Regulatory Compliance</h3>
            <p className="text-xs text-foreground/60">
              Gambling can be addictive. Please play responsibly. If you or someone you know has a gambling problem, please visit the following support sites:
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center flex flex-col items-center gap-6">
          <p className="text-xs text-foreground/40">
            © {getCurrentYear()} topspinuk.com. All rights reserved. Gambling is for 18+ only.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center grayscale opacity-50 hover:opacity-100 transition-opacity">
            <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="hover:grayscale-0 transition-all">
              <img src="/gamble-aware-logo.svg" alt="BeGambleAware" className="h-6" />
            </a>
            <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:grayscale-0 transition-all">
              <img src="/gamstop-vector-logo.svg" alt="GamStop" className="h-6" />
            </a>
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:grayscale-0 transition-all">
              <img src="/gamcare.png" alt="GamCare" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
