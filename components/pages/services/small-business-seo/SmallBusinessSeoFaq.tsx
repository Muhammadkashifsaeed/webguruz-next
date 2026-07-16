"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Small Business SEO?",
    a: "Small Business SEO involves optimizing your website and content to rank higher on search engines for specific keywords that potential customers use to find your products or services. It focuses on strategies that increase visibility and drive organic traffic to your site.",
  },
  {
    q: "How long does it take to see results with Small Business SEO?",
    a: "While SEO is a long-term strategy, most businesses begin to see noticeable results within 3-6 months. Factors like competition, industry, and the current state of your website can influence how quickly you see improvements.",
  },
  {
    q: "Why is local SEO important for small businesses?",
    a: "Local SEO ensures your business appears in local search results, which is crucial for attracting customers in your area. By optimizing for local searches, you increase your chances of being found by people looking for services or products nearby.",
  },
  {
    q: "Do I need to update my SEO strategy regularly?",
    a: "Yes, SEO is an ongoing process. Search engines are constantly evolving, so regular updates are necessary to maintain and improve your rankings. Continuous optimization ensures your business stays competitive.",
  },
  {
    q: "How much do Small Business SEO services cost?",
    a: "The cost of Small Business SEO services depends on the size of your website, the competition in your industry, and the scope of work required. At WebGuruz, we offer affordable packages designed to fit small business budgets.",
  },
  {
    q: "Can SEO help my business grow?",
    a: "Absolutely! SEO helps small businesses attract targeted traffic, build brand authority, and increase conversions. With the right strategy, SEO can drive long-term growth for your business.",
  },
];

export default function SmallBusinessSeoFaq() {
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
