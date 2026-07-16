"use client";

import Image from "next/image";

const points = [
  "Our specialists have extensive experience in SEO and voice search trends, ensuring top-quality optimization services.",
  "We design custom solutions based on your business needs and target audience.",
  "We've helped numerous clients achieve higher rankings and increased traffic through voice search optimization.",
  "From analysis to implementation, we provide end-to-end support to ensure your success.",
];

export default function VoiceSearchOptimizationWhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Choose WebGuruz as a{" "}
              <span className="text-blue-500">Voice Search Optimization Agency?</span>
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Partnering with WebGuruz means leveraging the latest technology and expertise to prepare your business for the future of search. Let us help you stay ahead in this dynamic digital landscape.
            </p>

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
              src="/images/rankings.webp"
              alt="Voice Search Optimization Agency"
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
