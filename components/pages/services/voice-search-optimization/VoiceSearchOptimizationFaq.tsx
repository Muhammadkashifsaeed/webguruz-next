"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is voice search optimization?",
    a: "Voice search optimization involves adjusting your website's content and structure to make it compatible with voice-based queries. It focuses on conversational keywords, structured data, and local SEO to improve visibility in voice search results. With this approach, your website can effectively respond to user queries, enhancing your chances of being featured in top search results and attracting more organic traffic.",
  },
  {
    q: "Why is voice search important for my business?",
    a: "Voice search is becoming the preferred method for users to find information. Optimizing for voice helps you reach a larger audience, improve local visibility, and enhance user experience. This allows your business to tap into a growing trend, ensuring you stay competitive while catering to modern consumer behaviors.",
  },
  {
    q: "How does voice search differ from traditional search?",
    a: "Voice search queries are longer and more conversational compared to traditional typed searches. They often include questions and local intent, requiring tailored optimization strategies. For instance, users might say, 'What are the best pizza places near me?' instead of typing 'pizza places.' Adapting to these differences ensures your content meets user expectations.",
  },
  {
    q: "What industries benefit the most from voice search?",
    a: "Local businesses, e-commerce stores, healthcare, hospitality, and service providers can significantly benefit from voice search optimization by attracting nearby and mobile users. Industries with a strong local presence or frequent user interactions stand to gain the most, as they align with the conversational nature of voice queries.",
  },
  {
    q: "How long does it take to see results from voice search optimization?",
    a: "Results can vary, but most businesses start seeing improvements in their search rankings and traffic within 3-6 months of implementing voice search strategies. Factors like competition, website readiness, and the scope of optimization can influence the timeline, but steady efforts lead to long-term success.",
  },
  {
    q: "Can small businesses afford voice search optimization?",
    a: "Yes! Voice search optimization is a cost-effective way for small businesses to increase visibility and compete with larger companies. Tailored packages ensure affordability and value. By focusing on local SEO and conversational content, small businesses can achieve significant results without breaking their budgets.",
  },
];

export default function VoiceSearchOptimizationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </span>
                  <span className="ml-4 text-2xl text-blue-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-slate-700 whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
