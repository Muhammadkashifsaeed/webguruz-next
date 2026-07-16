"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    title: "Keyword Research",
    text: "We conduct in-depth keyword research to find the best keywords for your target countries and languages. This research goes beyond just translation; we identify region-specific phrases, search behaviors, and local trends that resonate with your audience. By understanding the unique language preferences and cultural nuances of each market, we ensure that your content is optimized for search engines in multiple regions, allowing your website to rank higher and attract more qualified international traffic.",
  },
  {
    title: "SEO Audit",
    text: "We perform a thorough audit of your website to identify and fix any SEO-related issues, ensuring your site is optimized for global visibility. This includes analyzing your website's on-page SEO, backlink profile, technical structure, and user experience. Our audit helps to uncover critical issues such as broken links, slow page load times, and crawl errors, which could hinder your site's ability to rank internationally. By addressing these issues, we ensure that your website meets international standards and is ready to perform in diverse global markets.",
  },
  {
    title: "Technical SEO",
    text: "We optimize your website's technical structure, including mobile responsiveness, site speed, and URL structure, to meet international standards. With search engines like Google prioritizing mobile-friendly and fast-loading sites, we ensure your website performs well on all devices, regardless of location. Additionally, we work on optimizing elements like hreflang tags and canonical URLs to ensure proper international targeting, avoiding duplicate content issues, and enhancing search visibility in every region you want to target.",
  },
  {
    title: "Content Creation & Optimization",
    text: "Our content specialists create and optimize engaging, high-quality content tailored for different markets and languages. We ensure that the content is culturally relevant and optimized for local search trends. By working with native-speaking writers, we ensure your message is communicated effectively in each language while maintaining consistency with your brand voice. Whether you need landing pages, blog posts, or product descriptions, our content strategy aims to boost rankings and engage international audiences through high-quality, region-specific content.",
  },
  {
    title: "Link Building",
    text: "We build authoritative and region-specific backlinks to enhance your website's domain authority and improve rankings. Backlinks are crucial for improving your website's credibility and trustworthiness with search engines, especially in competitive international markets. We focus on acquiring high-quality links from regionally relevant websites and industry-specific directories to ensure that your website is recognized by search engines as a trusted resource in every market you target. This strategic link-building approach helps you achieve better search engine rankings and enhances the global visibility of your site.",
  },
  {
    title: "Analytics & Reporting",
    text: "We provide detailed analytics and performance reports, giving you clear insights into the effectiveness of your international SEO strategy. Using tools like Google Analytics and Google Search Console, we track the performance of your website across different regions, providing data on traffic, conversions, keyword rankings, and user behavior. Our reports help you understand how your international SEO efforts are driving results and offer recommendations for further optimization to continue improving your performance in global markets.",
  },
];

export default function InternationalSeoProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Our <span className="text-blue-500">International SEO Process</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          We follow a streamlined and effective process to ensure your website reaches its full potential in international markets. From technical SEO to content optimization, our method ensures every aspect of your site is perfectly tuned for global performance.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-3 text-left">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                type="button"
                onMouseEnter={() => setActiveStep(idx)}
                className={`rounded-xl border px-5 py-3 text-left text-base font-medium transition-all duration-300 ${
                  activeStep === idx
                    ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm"
                    : "border-gray-200 bg-white text-slate-700 hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {processSteps[activeStep].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {processSteps[activeStep].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
