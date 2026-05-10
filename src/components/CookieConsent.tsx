"use client";

import { useState, useEffect } from "react";
import { setStoredGclid } from "@/lib/cookies";
import { ShieldCheck } from "lucide-react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
    // In a real app, you'd trigger GTM/GA4 consent updates here
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-panel p-6 shadow-2xl neon-border">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ShieldCheck size={28} />
          </div>
          <div className="flex-grow space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground">Cookie & Privacy Settings</h3>
            <p className="text-sm text-foreground/60">
              We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies in accordance with Google Consent Mode V2.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <button
              onClick={handleDecline}
              className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium hover:bg-white/5"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-xl bg-primary px-8 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90 neon-glow"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
