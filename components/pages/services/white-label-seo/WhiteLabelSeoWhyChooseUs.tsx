"use client";

import Image from "next/image";

export default function WhiteLabelSeoWhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why <span className="text-blue-500">Choose</span> Us?
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              When you choose our White Label SEO company, you&apos;re working with experts who care about your business&apos;s success. We offer transparent services, proven strategies, and outstanding customer support. Here&apos;s why we&apos;re the best choice for your business:
            </p>

             <div className="mt-6 space-y-4">
              {[
                "Our team has years of experience delivering SEO results for businesses of all sizes.",
                "We tailor our services to meet your unique needs and goals.",
                "We ensure timely delivery and consistent results that help you grow.",
                "You'll always be informed about your SEO progress and results.",
              ].map((text, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[3/2] shadow-md">
            <Image
              src="/images/customer.webp"
              alt="Why Choose Us"
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
