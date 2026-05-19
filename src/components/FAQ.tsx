"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Como classificamos os cassinos online?",
    answer: "Nosso processo de classificação é minucioso e imparcial. Avaliamos os cassinos com base em seu licenciamento, medidas de segurança, variedade de jogos, justiça dos bônus, velocidade de pagamento e qualidade do suporte ao cliente. Apenas os cassinos que atendem aos nossos altos padrões entram em nossa lista.",
  },
  {
    question: "Estes cassinos online são seguros?",
    answer: "Sim, todos os cassinos listados em nosso site são totalmente licenciados e regulamentados. Isso garante que eles sigam padrões rigorosos em relação à proteção do jogador, jogo justo e práticas de jogo responsável.",
  },
  {
    question: "Qual é o melhor bônus de cassino disponível?",
    answer: "O 'melhor' bônus depende do seu estilo de jogo. Alguns jogadores preferem grandes bônus de depósito, enquanto outros procuram rodadas grátis ou baixos requisitos de apostas. Exibimos claramente os principais termos de cada bônus para ajudá-lo a fazer uma escolha informada.",
  },
  {
    question: "Posso jogar no meu dispositivo móvel?",
    answer: "Com certeza. Os cassinos online modernos são construídos pensando nos jogadores móveis. A maioria oferece uma experiência perfeita através do seu navegador móvel, e muitos também fornecem aplicativos dedicados para dispositivos iOS e Android.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-panel/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-panel transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold hover:bg-primary/5"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary" />
                ) : (
                  <ChevronDown size={20} className="text-foreground/40" />
                )}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="border-t border-border p-5 text-foreground/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
