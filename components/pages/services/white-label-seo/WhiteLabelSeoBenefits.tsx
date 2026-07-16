"use client";

import Image from "next/image";

export default function WhiteLabelSeoBenefits() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] shadow-md">
            <Image
              src="/images/core.webp"
              alt="White Label SEO"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Benefits of{" "}
              <span className="text-blue-500">White-Label SEO Strategies</span>
            </h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Reasons to Choose White Label SEO for Your Business
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our White Label SEO services include a wide range of offerings designed to help businesses improve their online presence and achieve their digital marketing goals.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Focus on your core business activities while we handle the SEO work.",
                "No need to hire a full-time in-house team or invest in costly SEO tools.",
                "Easily scale your SEO efforts as your business grows, without additional overhead.",
                "Benefit from a team of SEO experts who stay updated on the latest trends and best practices.",
                "Deliver high-quality SEO results that exceed your client's expectations.",
              ].map((text, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <p className="text-slate-700">{text}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Who Can Benefit from White Label SEO?
            </h3>
            <p className="mt-2 text-slate-700">
              White label SEO services are perfect for a variety of businesses, including:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                "Digital Agencies",
                "Local Businesses",
                "E-commerce Stores",
                "Content Creators & Bloggers",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-medium text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
