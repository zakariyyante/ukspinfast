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
    <div className="group relative mb-4 overflow-hidden rounded-2xl border border-border bg-panel transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-6 p-6">
        <div className="relative h-44 w-44 flex-shrink-0 overflow-hidden rounded-xl bg-[#1a1510] p-4">
          <img
            src={getImageUrl(partner.logo)}
            alt={partner.name}
            className="h-full w-full object-contain"
            onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
          />
          <div className="absolute left-0 top-0 flex flex-col items-center justify-center bg-transparent p-2">
            <div className="text-[10px] text-foreground/40 uppercase font-bold">POS.</div>
            <div className="text-3xl font-black text-primary leading-none">{order}</div>
            {order === 1 && <div className="text-[8px] text-primary uppercase font-bold mt-1">MAIS POPULAR</div>}
          </div>
        </div>

        <div className="flex flex-grow flex-col gap-2">
          <div className="my-2 rounded-lg bg-transparent p-0">
            <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">BÔNUS DE BOAS-VINDAS</div>
            <div className="text-xl font-bold text-foreground">{bonusText}</div>
          </div>
          <div className="flex items-center gap-4">
            {renderStars()}
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-foreground">{rating.toFixed(1)}/10</span>
              <div className="text-[10px] text-foreground/40">5926 avaliações</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-xs text-foreground/60">
              <ShieldCheck size={16} className="text-accent" />
              Licenciado
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/60">
              <Zap size={16} className="text-primary" />
              Pagamentos Rápidos
            </div>
            <div className="ml-auto text-xs text-foreground/40 italic">
              *Depósito mín. R$50. T&Cs se aplicam.
            </div>
          </div>
        </div>

          <div className="flex flex-col gap-3 w-48">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 py-4 text-center font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-lg"
          >
            JOGAR AGORA <span className="text-lg">›</span>
          </a>
          <Link href={`/reviews/${partner.id}`} className="text-center text-sm font-medium text-foreground/40 hover:text-foreground transition-colors">
            Ler Avaliação
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
            <div className="text-[9px] text-foreground/40 uppercase tracking-widest">Votos de Usuários Verificados</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="p-4 bg-background/30">
          <div className="mb-3">
            <div className="text-[10px] font-medium text-foreground/40 uppercase tracking-wider mb-0.5">Oferta de Bônus</div>
            <div className="text-base font-bold text-foreground leading-snug">{bonusText}</div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="text-[9px] text-foreground/40 italic">
              *Depósito mín. R$50. T&Cs se aplicam.
            </div>
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground neon-glow"
            >
              RESGATAR AGORA 🎁
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
