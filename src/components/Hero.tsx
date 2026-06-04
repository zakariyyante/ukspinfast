import { ShieldCheck, Zap, Lock, Eye } from "lucide-react";
import { getCurrentMonthName, getCurrentYear } from "@/lib/utils";

interface HeroProps {
  headText: string;
  headParagraph: string;
}

const Hero = ({ headText, headParagraph }: HeroProps) => {
  const badges = [
    { icon: ShieldCheck, text: "Certified & Protected" },
    { icon: Zap, text: "Same-Day Withdrawals" },
    { icon: Lock, text: "Minimal Documentation" },
    { icon: Eye, text: "Privacy-First Gaming" },
  ];

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-12 md:py-20 border-b border-border">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-md border border-primary/50 shadow-lg">
          <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="bg-primary text-primary-foreground px-1 rounded text-[8px]">T</span> FEATURED REWARDS
          </span>
        </div>
      </div>
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Last updated: {getCurrentMonthName()} {getCurrentYear()}
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            {headText}
          </h1>

          <div className="flex flex-col gap-2 mb-8 text-sm font-medium text-foreground/80">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Licensed & Secure <span className="text-primary">✓</span> Fast Payouts
            </div>
            <div className="text-xs text-foreground/60">
              +18. Play responsibly, gamble with moderation.
            </div>
          </div>

          {/* Desktop Badges */}
          <div className="hidden md:flex flex-wrap gap-4">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-border bg-panel/50 px-4 py-2 text-sm font-medium">
                <badge.icon size={18} className="text-primary" />
                {badge.text}
              </div>
            ))}
          </div>

          {/* Mobile Badges - Scrollable */}
          <div className="flex md:hidden overflow-x-auto pb-4 gap-3 no-scrollbar">
            {badges.map((badge, i) => (
              <div key={i} className="flex flex-shrink-0 items-center gap-2 rounded-lg border border-border bg-panel/50 px-3 py-2 text-xs font-medium">
                <badge.icon size={16} className="text-primary" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
