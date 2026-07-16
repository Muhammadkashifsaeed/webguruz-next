"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhiteLabelSeoHero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
              Boost Business Growth with{" "}
              <span className="text-blue-500">White Label SEO Services</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Expand your offerings and focus on the core services while still
              delivering outstanding results. Whether you&apos;re a digital
              agency or a business looking to grow online, our white-label SEO
              services can help you improve website rankings, drive more
              traffic, and increase revenue.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
            >
              Get Started!
            </Link>
          </div>

          <div className="relative aspect-[3/2] shadow-md">
            <Image
              src="/images/traffic.webp"
              alt="White Label SEO"
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
