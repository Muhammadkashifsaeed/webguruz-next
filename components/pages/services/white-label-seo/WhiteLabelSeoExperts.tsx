"use client";

import Image from "next/image";

export default function WhiteLabelSeoExperts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/2] shadow-md">
            <Image
              src="/images/algorithm.webp"
              alt="Experts at SEO"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              We Are <span className="text-blue-500">Experts at SEO</span>
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              With over 10 years in the SEO industry, we have the expertise and experience to help your business thrive. Our deep understanding of SEO best practices, algorithm updates, and digital marketing trends ensures that we can provide you with the best possible results. Here&apos;s why we&apos;re the experts:
            </p>

            <div className="mt-6 space-y-4">
              {[
                "We've helped countless businesses improve their rankings and visibility.",
                "Our team stays up-to-date with the latest SEO strategies and Google algorithms.",
                "We handle every aspect of SEO, from on-page to technical optimization.",
                "We create SEO strategies tailored specifically to your business needs.",
              ].map((text, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
