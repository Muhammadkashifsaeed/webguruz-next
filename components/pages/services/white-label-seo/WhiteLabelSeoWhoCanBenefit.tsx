"use client";

import Image from "next/image";

export default function WhiteLabelSeoWhoCanBenefit() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Who Can Benefit from{" "}
          <span className="text-blue-500">White Label SEO?</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          White label SEO services are perfect for a variety of businesses, including:
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              img: "/images/variety1.webp",
              title: "Digital Agencies",
            },
            {
              img: "/images/variety2.webp",
              title: "Local Businesses",
            },
            {
              img: "/images/variety3.webp",
              title: "E-commerce Stores",
            },
            {
              img: "/images/variety4.webp",
              title: "Content Creators & Bloggers",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="relative h-32 w-64 overflow-hidden rounded-2xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="192px"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
