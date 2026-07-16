"use client";

import Image from "next/image";
import Link from "next/link";

export default function VoiceSearchOptimizationCta() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/markinting.webp"
          alt="Voice Search Optimization Marketing"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Take the First Step Towards Voice Search Success
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-200">
          Discover how WebGuruz can transform your business with our Voice Search Optimization services.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
        >
          Contact us now and stay ahead in the digital age!
        </Link>
      </div>
    </section>
  );
}
