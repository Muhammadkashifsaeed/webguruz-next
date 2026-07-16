"use client";

import Image from "next/image";
import { useState } from "react";

const benefits = [
  {
    img: "/images/without1.webp",
    title: "Increased Organic Traffic",
    text: "Small Business SEO can significantly increase the organic traffic to your website by optimizing content and improving search engine rankings. This leads to more potential customers visiting your site without having to pay for ads.",
  },
  {
    img: "/images/without2.webp",
    title: "Improved Local Visibility",
    text: "Local SEO strategies are designed to boost your business in local search results, making it easier for customers in your area to find your products or services. With location-specific SEO tactics, we help you dominate local search rankings.",
  },
  {
    img: "/images/without3.webp",
    title: "Higher ROI",
    text: "With SEO being a cost-effective marketing strategy, small businesses can see a better return on investment compared to other paid advertising options. By targeting the right keywords and optimizing your site, you can attract high-quality leads.",
  },
];

export default function SmallBusinessSeoBenefits() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Key Benefits of{" "}
          <span className="text-blue-500">Small Business SEO Services</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div
                  className={`mt-2 text-slate-700 leading-relaxed transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.text}
                </div>
                <button
                  type="button"
                  className="mt-4 text-blue-500 text-sm font-medium"
                >
                  {isOpen ? "Show Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
