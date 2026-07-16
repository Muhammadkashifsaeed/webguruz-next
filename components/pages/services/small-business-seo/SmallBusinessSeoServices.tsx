"use client";

import Image from "next/image";

const services = [
  {
    img: "/images/optimized1.webp",
    title: "Website Audit",
    text: "We conduct in-depth audits of your website to identify areas for improvement. This helps ensure your site is fully optimized for search engines and user experience.",
  },
  {
    img: "/images/optimized2.webp",
    title: "Content Creation & Marketing",
    text: "We help create high-quality, engaging content that resonates with your audience while improving search engine rankings, driving traffic, and increasing conversions.",
  },
  {
    img: "/images/optimized3.webp",
    title: "Keyword Research",
    text: "We perform detailed keyword research to identify the most relevant and profitable keywords for your business, ensuring that your content targets what customers are searching for.",
  },
  {
    img: "/images/optimized4.webp",
    title: "Local SEO Optimization",
    text: "By optimizing your business for local searches, we ensure your business appears in local search results and maps, helping you attract customers nearby.",
  },
  {
    img: "/images/optimized5.webp",
    title: "On-Page Optimization",
    text: "Our on-page SEO strategies include optimizing your website's title tags, meta descriptions, headers, and content to improve your site's visibility and ranking.",
  },
  {
    img: "/images/optimized6.webp",
    title: "Link Building",
    text: "Our link-building strategies help improve your website's authority by acquiring high-quality backlinks from relevant and trusted websites.",
  },
  {
    img: "/images/optimized7.webp",
    title: "SEO Analytics & Reporting",
    text: "We provide detailed reports on your website's performance, helping you track progress and make data-driven decisions for future SEO improvements.",
  },
  {
    img: "/images/optimized8.webp",
    title: "Mobile Optimization",
    text: "We optimize your website for mobile users, ensuring it functions seamlessly across all devices and boosting your SEO rankings.",
  },
];

export default function SmallBusinessSeoServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Our <span className="text-blue-500">Small Business SEO Services</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-row gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
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
