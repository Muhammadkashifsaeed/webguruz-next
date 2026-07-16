"use client";

import Image from "next/image";

const features = [
  {
    img: "/images/industry1.webp",
    title: "Experienced Team",
    text: "Work with certified SEO experts with a track record of success. Our team stays ahead of industry trends, leveraging the latest tools and techniques to deliver exceptional results.",
  },
  {
    img: "/images/industry2.webp",
    title: "Holistic Approach",
    text: "We combine technical, on-page, and off-page strategies for complete optimization. By addressing every aspect of SEO, we ensure your website is fully prepared to compete.",
  },
  {
    img: "/images/industry3.webp",
    title: "Scalable Solutions",
    text: "Our services grow with your business, ensuring consistent results. Whether you're a startup or an established enterprise, we adapt our strategies to meet your evolving needs and goals.",
  },
  {
    img: "/images/industry4.webp",
    title: "Proven ROI",
    text: "We deliver measurable outcomes that impact your bottom line. From increased traffic to higher conversion rates, our strategies are designed to generate tangible benefits for your business.",
  },
];

export default function SeoConsultingStrategyWhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Why Choose Our SEO{" "}
          <span className="text-blue-500">Strategy & Consulting Service Agency?</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div className="relative h-12 w-full overflow-hidden rounded-lg">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
