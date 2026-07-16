"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is international SEO, and how does it differ from regular SEO?",
    answer:
      "International SEO is the practice of optimizing your website to rank well in search engines across multiple countries and languages. It differs from regular SEO in that it focuses on targeting audiences in different regions, optimizing for local search engines, and ensuring that your content resonates with diverse cultural and language preferences. International SEO includes strategies such as using hreflang tags, setting up geo-targeting, and optimizing content for global search engines.",
  },
  {
    question: "How do I know if my business needs international SEO?",
    answer:
      "If you're looking to expand your customer base globally or you already have customers from other countries, international SEO is essential. It helps you reach the right audience in each country, making your website more visible and appealing to international visitors. If your business is growing and targeting multiple regions, international SEO can significantly increase your online presence and conversions.",
  },
  {
    question: "How do you conduct keyword research for international SEO?",
    answer:
      "We conduct keyword research by identifying the most relevant terms and phrases for each target region and language. This includes analyzing search volumes in different countries, identifying local search behaviors, and translating keywords into the language of your target audience. We also consider cultural nuances and local trends to ensure we are targeting the most effective keywords for your business.",
  },
  {
    question: "What types of businesses benefit from international SEO?",
    answer:
      "Businesses in e-commerce, travel and tourism, technology, education, healthcare, and many other sectors can benefit from international SEO. It is particularly useful for businesses that want to expand their market reach, drive more qualified traffic from different countries, and improve their global brand visibility.",
  },
  {
    question: "How long does it take to see results from international SEO?",
    answer:
      "The time it takes to see results from international SEO varies depending on the competitiveness of the market and the extent of the optimization required. Typically, you can expect to see noticeable improvements in traffic and rankings within 3-6 months. However, sustained and continuous efforts are needed for long-term success.",
  },
  {
    question: "What is the cost of international SEO services?",
    answer:
      "The cost of international SEO services depends on several factors, including the complexity of your website, the number of regions and languages you're targeting, and the scope of services required. We offer customized pricing based on your specific needs, and we are happy to provide a detailed quote after understanding your goals.",
  },
];

export default function InternationalSeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-2xl text-blue-500 transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
