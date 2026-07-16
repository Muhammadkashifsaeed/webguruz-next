"use client";

import Image from "next/image";

const points = [
  "We provide SEO strategies tailored to your unique business needs, ensuring maximum effectiveness.",
  "Our SEO services are cost-effective, and designed to fit small business budgets without compromising on quality.",
  "Our track record of successful SEO projects speaks for itself, with clients seeing real improvements in website traffic and conversions.",
  "We offer continuous monitoring and optimization to ensure your SEO strategy evolves with changing search engine algorithms and trends.",
  "Our SEO strategies are tailored specifically for your business needs, ensuring you get the best results within your budget.",
  "We focus on driving targeted traffic, improving your website's visibility, and helping you achieve measurable results.",
];

export default function SmallBusinessSeoWhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Choose Our Small Business SEO{" "}
              <span className="text-blue-500">Company?</span>
            </h2>

            <div className="mt-6 space-y-4">
              {points.map((text, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[3/2] shadow-md">
            <Image
              src="/images/tailored.webp"
              alt="Small Business SEO Company"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
