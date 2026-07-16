"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhiteLabelSeoCta() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/markinting.webp"
          alt="White Label SEO Marketing"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Boost Your Rankings?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-200">
          Get in touch with us today and let&apos;s discuss how our White Label SEO services can drive results for your business.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
        >
          Connect with us!
        </Link>
      </div>
    </section>
  );
}
