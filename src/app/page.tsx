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
        headText={landingPage?.headText || "Melhores sites de casino online em Portugal — maio 2026"} 
        headParagraph={landingPage?.headParagraph || "Descubra os cassinos online mais bem avaliados com bônus exclusivos."} 
      />

      <section id="brands" className="bg-background py-8">
        <BrandList partners={brands} isMobile={isMobile} />
      </section>

      {/* Unique UI Section - Why Choose Us */}
      <section className="py-20 bg-panel/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl mb-4">Por que confiar no <span className="text-primary">CassinoFácil</span>?</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Fornecemos avaliações transparentes e baseadas em dados para ajudar você a encontrar as experiências de jogo mais seguras e recompensadoras.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Licenciado e Seguro", desc: "Cada cassino que listamos é totalmente regulamentado e seguro para jogadores." },
              { icon: Zap, title: "Pagamentos Rápidos", desc: "Priorizamos marcas que oferecem saques instantâneos ou no mesmo dia." },
              { icon: Award, title: "Bônus Exclusivos", desc: "Acesse ofertas e promoções especiais que você não encontrará em nenhum outro lugar." },
              { icon: Users, title: "Avaliações de Jogadores", desc: "Feedback real de jogadores reais para orientar sua escolha." }
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
            <h2 className="text-3xl font-bold mb-6">O Guia Definitivo para Cassinos Online</h2>
            <p className="mb-4">
              Encontrar o cassino online certo pode ser uma tarefa assustadora, especialmente com o vasto número de opções disponíveis. No CassinoFácil, simplificamos esse processo fornecendo avaliações abrangentes e informações atualizadas sobre as melhores plataformas do setor.
            </p>
            <h3 className="text-2xl font-bold mb-4">O que procurar em um cassino online</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
              <li><strong>Licenciamento:</strong> Sempre certifique-se de que o cassino possua uma licença válida e reconhecida.</li>
              <li><strong>Seleção de Jogos:</strong> Procure uma grande variedade de slots, jogos de mesa e opções de cassino ao vivo dos principais provedores como NetEnt e Microgaming.</li>
              <li><strong>Métodos de Pagamento:</strong> Os melhores cassinos oferecem várias opções seguras, incluindo cartões de crédito, carteiras eletrônicas como PayPal e transferências bancárias.</li>
              <li><strong>Suporte ao Cliente:</strong> O suporte 24 horas por dia, 7 dias por semana, via chat ao vivo, e-mail ou telefone é crucial para uma experiência positiva.</li>
            </ul>
            <p>
              Nossa equipe de especialistas monitora continuamente o mercado para garantir que nossas recomendações permaneçam precisas e benéficas para nossos usuários. Seja você um jogador experiente ou novo no mundo do jogo online, estamos aqui para ajudá-lo a jogar com segurança e responsabilidade.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <CookieConsent />
    </div>
  );
}
