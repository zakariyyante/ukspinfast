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
    <section className="relative overflow-hidden bg-hero-gradient py-12 md:py-20">
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
            Updated: {getCurrentMonthName()} {getCurrentYear()}
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            {headText}
          </h1>
          
          <p className="mb-8 text-lg text-foreground/70 md:text-xl">
            {headParagraph}
          </p>

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
