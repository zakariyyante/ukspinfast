"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { Star, ExternalLink, ShieldCheck, Gift, Zap } from "lucide-react";
import { ApiPageBrand } from "@/lib/mockDev";
import { getImageUrl } from "@/lib/api";
import { getStoredGclid } from "@/lib/cookies";
import { cn } from "@/lib/utils";

interface BrandCardProps {
  partner: ApiPageBrand;
  order: number;
  isMobile: boolean;
}

const BrandCard = ({ partner, order, isMobile: isMobileDevice }: BrandCardProps) => {
  const [linkUrl, setLinkUrl] = useState(partner.overrideLink || partner.link);

  useEffect(() => {
    const gclid = getStoredGclid();
    if (gclid) {
      // Append gclid to the end of the URL
      setLinkUrl(`${partner.overrideLink || partner.link}${gclid}`);
    }
  }, [partner.link, partner.overrideLink]);

  const handleCtaClick = () => {
    const trackingData = {
      partner_name: partner.name,
      partner_id: String(partner.id),
      order: String(order),
      is_mobile: String(isMobileDevice),
      has_gclid: String(!!getStoredGclid()),
    };

    // Umami tracking
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track('brand_click', trackingData);
    }

    // Vercel Analytics tracking
    track('brand_click', trackingData);
  };

  const rating = partner.rating ?? (10 - (order - 1) * 0.1);
  
  const renderStars = () => {
    let stars = 4;
    if (order <= 3) stars = 5;
    else if (order <= 7) stars = 4.5;

    return (
      <div className="flex items-center gap-0.5 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < Math.floor(stars) ? "currentColor" : i < stars ? "url(#halfStar)" : "none"}
            className={cn(i < stars ? "text-yellow-400" : "text-foreground/20")}
          />
        ))}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  const bonusText = partner.isBonusTextOverridden ? partner.overrideBonusText : partner.bonusText;

  return (
    <div className="group relative mb-4 overflow-hidden rounded-2xl border border-border bg-panel transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.1)]">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-6 p-6">
        <div className="relative h-44 w-44 flex-shrink-0 overflow-hidden rounded-xl bg-dark p-4">
          <img
            src={getImageUrl(partner.logo)}
            alt={partner.name}
            className="h-full w-full object-contain"
            onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
          />
          <div className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            #{order}
          </div>
        </div>

        <div className="flex flex-grow flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
            <div className="flex flex-col items-end">
              <div className="text-2xl font-black text-primary">{rating.toFixed(1)}</div>
              {renderStars()}
              <div className="text-[10px] text-foreground/40 uppercase tracking-widest mt-1">Verified Votes</div>
            </div>
          </div>

          <div className="my-2 rounded-lg bg-background/50 p-4 border-l-4 border-primary">
            <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1">Welcome Bonus</div>
            <div className="text-xl font-bold text-foreground">{bonusText}</div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-xs text-foreground/60">
              <ShieldCheck size={16} className="text-accent" />
              UK Licensed
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/60">
              <Zap size={16} className="text-primary" />
              Fast Payouts
            </div>
            <div className="ml-auto text-xs text-foreground/40 italic">
              *Min deposit £10. T&Cs apply.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-48">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-center font-bold text-primary-foreground transition-transform hover:scale-105 active:scale-95 neon-glow"
          >
            PLAY NOW
            <ExternalLink size={18} />
          </a>
          <Link href={`/reviews/${partner.id}`} className="text-center text-sm font-medium text-foreground/40 hover:text-foreground transition-colors">
            Read Review
          </Link>
        </div>
      </div>

      {/* Mobile Layout (STRICT) */}
      <div className="flex flex-col md:hidden">
        {/* Top (2 columns) */}
        <div className="flex items-center gap-4 p-4 border-b border-border/50">
          {/* Left: Logo */}
          <div className="relative h-28 w-44 flex-shrink-0 overflow-hidden rounded-lg bg-black p-3">
            <img
              src={getImageUrl(partner.logo)}
              alt={partner.name}
              className="h-full w-full object-contain"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />
            <div className="absolute left-0 top-0 rounded-br-lg bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
              #{order}
            </div>
          </div>

          {/* Right: rating, stars, votes (flex col) */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-foreground leading-tight">{partner.name}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-primary">{rating.toFixed(1)}</span>
              {renderStars()}
            </div>
            <div className="text-[9px] text-foreground/40 uppercase tracking-widest">Verified User Votes</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="p-4 bg-background/30">
          <div className="mb-3">
            <div className="text-[10px] font-medium text-foreground/40 uppercase tracking-wider mb-0.5">Bonus Offer</div>
            <div className="text-base font-bold text-foreground leading-snug">{bonusText}</div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="text-[9px] text-foreground/40 italic">
              *Min deposit £10. T&Cs apply.
            </div>
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground neon-glow"
            >
              CLAIM NOW 🎁
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
