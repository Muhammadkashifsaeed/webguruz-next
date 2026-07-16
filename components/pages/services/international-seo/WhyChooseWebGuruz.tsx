"use client";

import Image from "next/image";

const points = [
  "We've successfully managed international SEO campaigns for businesses of all sizes.",
  "Our strategies are customized to meet the unique needs of your business and target market.",
  "Our team of SEO experts stays updated with the latest global SEO trends and best practices.",
  "From keyword research to performance tracking, we provide end-to-end international SEO services.",
];

export default function WhyChooseWebGuruz() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="/images/performance.webp"
              alt="Performance"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Choose WebGuruz{" "}
              <span className="text-blue-500">as an International SEO Agency?</span>
            </h2>

            <p className="mt-4 text-lg text-slate-700">
              At WebGuruz, we believe in delivering results that matter. With years of experience and a client-focused approach, we help businesses achieve global success through intelligent international SEO strategies.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                  <p className="text-sm leading-relaxed text-gray-600">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
