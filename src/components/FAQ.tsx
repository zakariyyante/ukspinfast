"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do we rank online casinos?",
    answer: "Our ranking process is thorough and unbiased. We evaluate casinos based on their licensing, security measures, game variety, bonus fairness, payout speed, and customer support quality. Only casinos that meet our high standards for UK players make it to our list.",
  },
  {
    question: "Are these online casinos safe for UK players?",
    answer: "Yes, all casinos listed on our site are fully licensed and regulated by the UK Gambling Commission (UKGC). This ensures they adhere to strict standards regarding player protection, fair gaming, and responsible gambling practices.",
  },
  {
    question: "What is the best casino bonus available?",
    answer: "The 'best' bonus depends on your playing style. Some players prefer large deposit matches, while others look for free spins or low wagering requirements. We clearly display the key terms for each bonus to help you make an informed choice.",
  },
  {
    question: "Can I play on my mobile device?",
    answer: "Absolutely. Modern online casinos are built with mobile players in mind. Most offer a seamless experience through your mobile browser, and many also provide dedicated apps for iOS and Android devices.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-panel/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked <span className="text-primary">Questions</span>
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
