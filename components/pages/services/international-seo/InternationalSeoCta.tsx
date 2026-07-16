"use client";

import Image from "next/image";
import Link from "next/link";

export default function InternationalSeoCta() {
  return (
    <section className="relative py-10">
      <div className="absolute inset-0">
        <Image
          src="/images/markinting.webp"
          alt="International SEO Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Grow Your Business Globally with WebGuruz
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-200">
          Start your journey to global success today. Contact us for a personalized international SEO strategy that will boost your website&apos;s performance across the world
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-block bg-blue-600 text-white px-8 py-2.5 rounded-lg font-medium transition-colors hover:bg-blue-700"
        >
          Contact us today!
        </Link>
      </div>
    </section>
  );
}
