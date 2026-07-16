"use client";

import Image from "next/image";

const benefits = [
  {
    img: "/images/ensures1.webp",
    title: "Increased Local Visibility",
    text: "Voice search often includes phrases like 'near me,' making it essential for businesses to rank in local searches. Optimizing for voice ensures you're easily found by nearby customers actively seeking your products or services. This not only drives foot traffic but also strengthens your local market presence.",
  },
  {
    img: "/images/ensures2.webp",
    title: "Enhanced Mobile Experience",
    text: "With more users relying on mobile devices for voice search, our optimization ensures your website is mobile-friendly and delivers quick, accurate responses. We focus on improving page loading times, mobile usability, and response accuracy, providing a seamless experience for users on the go.",
  },
  {
    img: "/images/ensures3.webp",
    title: "Improved Customer Engagement",
    text: "Voice search is conversational by nature. We tailor your content to match user intent, creating meaningful and engaging interactions with potential customers. By addressing their queries in a natural tone, we build trust and make your brand more relatable and approachable.",
  },
  {
    img: "/images/ensures4.webp",
    title: "Competitive Edge",
    text: "As voice search grows, businesses that adapt early will dominate their industries. Optimization ensures you're ahead of competitors and ready for the future. By embracing this cutting-edge technology, you position your brand as innovative and customer-focused.",
  },
];

export default function VoiceSearchOptimizationBenefits() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Key Benefits of{" "}
          <span className="text-blue-500">Voice Search Optimization</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-row gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="relative h-24 w-24 shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
