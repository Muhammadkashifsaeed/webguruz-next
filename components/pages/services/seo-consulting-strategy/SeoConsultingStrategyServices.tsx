"use client";

import Image from "next/image";

const services = [
  {
    img: "/images/critical1.webp",
    title: "SEO Audits",
    text: "Identify and fix critical issues affecting your site's performance. Our in-depth audits cover everything from broken links to meta tags, ensuring your website is optimized for search engines and user experience. This foundational step helps us uncover opportunities to improve your site's visibility.",
  },
  {
    img: "/images/critical2.webp",
    title: "Content Optimization",
    text: "Enhance on-page content for better engagement and ranking. We refine your headlines, meta descriptions, and body text to make your content more appealing to both search engines and users. This ensures your website delivers value while climbing the SERPs.",
  },
  {
    img: "/images/critical3.webp",
    title: "Link Building",
    text: "Earn high-quality backlinks for improved domain authority. Our team focuses on building relationships with reputable websites to secure links that enhance your site's credibility. Quality links are a vital part of any successful SEO strategy.",
  },
  {
    img: "/images/critical4.webp",
    title: "Keyword Research & Analysis",
    text: "Discover high-performing keywords to drive traffic. We analyze search trends and your competitors to identify keywords that align with your audience's intent. By targeting the right terms, we help you attract quality traffic that converts.",
  },
  {
    img: "/images/critical5.webp",
    title: "Technical SEO",
    text: "Improve site speed, mobile compatibility, and crawlability. We address backend issues that might hinder your site's performance, such as slow load times and broken scripts. A technically sound website is crucial for search engine indexing and user satisfaction.",
  },
  {
    img: "/images/critical6.webp",
    title: "Performance Tracking & Reporting",
    text: "Get clear insights with regular updates and reports. We provide detailed analytics on traffic, rankings, and conversions, allowing you to see the impact of our efforts. Transparent reporting helps us refine strategies for even better results.",
  },
];

export default function SeoConsultingStrategyServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Our SEO Strategy &{" "}
          <span className="text-blue-500">Consulting Services</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div className="relative h-16 w-full overflow-hidden rounded-lg">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
