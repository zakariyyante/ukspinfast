import { headers } from "next/headers";
import Hero from "@/components/Hero";
import BrandList from "@/components/BrandList";
import FAQ from "@/components/FAQ";
import CookieConsent from "@/components/CookieConsent";
import { getLandingPageData, getPageBrands } from "@/lib/api";
import { ShieldCheck, Zap, Award, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ gclid?: string }>;
}) {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "";
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = mobileRegex.test(userAgent);
  const { gclid } = await searchParams;
  const hasGclid = !!gclid;

  const landingPage = await getLandingPageData();
  const brands = landingPage ? await getPageBrands(landingPage.id, isMobile, hasGclid) : [];

  return (
    <div className="flex flex-col">
      <Hero 
        headText={landingPage?.headText || "Best Online Casino Sites — June 2026"} 
        headParagraph={landingPage?.headParagraph || "Discover the top-rated online casinos with exclusive bonuses."} 
      />

      <section id="brands" className="bg-background py-8">
        <BrandList partners={brands} isMobile={isMobile} />
      </section>

      {/* Unique UI Section - Why Choose Us */}
      <section className="py-20 bg-panel/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl mb-4">Why Trust <span className="text-primary">Top5UKCasinoList</span>?</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">We provide transparent, data-driven reviews to help you find the safest and most rewarding gaming experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Licensed & Secure", desc: "Every casino we list is fully regulated and safe for players." },
              { icon: Zap, title: "Fast Payouts", desc: "We prioritize brands that offer instant or same-day withdrawals." },
              { icon: Award, title: "Exclusive Bonuses", desc: "Access special offers and promotions found nowhere else." },
              { icon: Users, title: "Player Reviews", desc: "Real feedback from real players to guide your choice." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-panel border border-border hover:border-primary/30 transition-all">
                <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold mb-6">The Ultimate Guide to Online Casinos</h2>
            <p className="mb-4">
              Finding the right online casino can be a daunting task, especially with the vast number of options available. At Top5UKCasinoList, we simplify this process by providing comprehensive reviews and up-to-date information on the best platforms in the industry.
            </p>
            <h3 className="text-2xl font-bold mb-4">What to Look for in an Online Casino</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
              <li><strong>Licensing:</strong> Always ensure the casino holds a valid and recognized license.</li>
              <li><strong>Game Selection:</strong> Look for a wide variety of slots, table games, and live dealer options from top providers like NetEnt and Microgaming.</li>
              <li><strong>Payment Methods:</strong> The best casinos offer multiple secure options, including credit cards, e-wallets like PayPal, and bank transfers.</li>
              <li><strong>Customer Support:</strong> 24/7 support via live chat, email, or phone is crucial for a positive experience.</li>
            </ul>
            <p>
              Our team of experts continuously monitors the market to ensure our recommendations remain accurate and beneficial for our users. Whether you're a seasoned player or new to the world of online gambling, we're here to help you play safely and responsibly.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <CookieConsent />
    </div>
  );
}
