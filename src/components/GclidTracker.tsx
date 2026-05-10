"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setStoredGclid, getStoredGclid } from "@/lib/cookies";

const GclidTracker = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get("gclid");
    if (gclid) {
      setStoredGclid(gclid);
      document.body.setAttribute("data-gclid", gclid);
    } else {
      const storedGclid = getStoredGclid();
      if (storedGclid) {
        document.body.setAttribute("data-gclid", storedGclid);
      }
    }
  }, [searchParams]);

  return null;
};

export default GclidTracker;
