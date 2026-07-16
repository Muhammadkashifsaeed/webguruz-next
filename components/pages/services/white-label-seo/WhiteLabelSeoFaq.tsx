"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is White Label SEO?",
    a: "White Label SEO is a service where an experienced SEO agency provides comprehensive search engine optimization services to businesses under their brand name. Essentially, it allows companies to offer SEO as a part of their service portfolio without having to perform the SEO tasks themselves. The agency behind the scenes handles all the technical SEO, content optimization, link building, and other essential tasks.\n\nThis is particularly beneficial for businesses like digital marketing agencies, consultants, or anyone offering web-related services, as they can provide high-quality SEO without the need to hire an in-house SEO team or develop expertise in this specialized field.",
  },
  {
    q: "How do White Label SEO Services Work?",
    a: "White Label SEO services work by allowing you to outsource all SEO-related tasks to a trusted partner while you maintain your relationship with the client. As a business offering SEO services, you will remain the primary point of contact for your clients, while we handle the day-to-day SEO activities like keyword research, content creation, on-page and off-page optimization, and performance tracking.\n\nAll the work done on your behalf is branded with your company's name, so your clients never know that another agency is providing the SEO services. This setup allows you to offer a complete suite of SEO services without managing the complexities of the work involved.",
  },
  {
    q: "What Are the Benefits of White Label SEO?",
    a: "White Label SEO offers several key benefits for businesses looking to expand their service offerings while focusing on their core strengths. First, it saves you time and resources by outsourcing the SEO tasks to professionals who specialize in this area. This allows your team to focus on other business operations, like client management and service development.\n\nAdditionally, white-label SEO helps reduce costs by eliminating the need to hire and train an in-house SEO team, purchase expensive tools, and keep up with SEO trends. It also allows you to scale your services efficiently without the need for additional hires. Lastly, you can deliver high-quality SEO to your clients, improving their search rankings and driving more traffic to their websites, which enhances your reputation and client satisfaction.",
  },
  {
    q: "Is White Label SEO Effective?",
    a: "Yes, white-label SEO is highly effective when done by an experienced and reputable SEO agency. By partnering with a professional SEO provider, you gain access to expertise and knowledge that would otherwise take years to develop internally. A well-executed white-label SEO strategy helps improve your website's rankings in search engine results pages (SERPs), drive targeted organic traffic, and ultimately boost your business's online presence and sales.\n\nThe success of white-label SEO largely depends on the quality of the agency you partner with, and when working with a skilled team, you can expect to see measurable improvements in search rankings, website traffic, and client satisfaction.",
  },
  {
    q: "Who Can Benefit from White Label SEO?",
    a: "White-label SEO can benefit a wide range of businesses, from digital marketing agencies to small local businesses and large e-commerce websites. Digital marketing agencies, especially those looking to expand their service offerings without additional overhead, can leverage white-label SEO to deliver top-notch SEO services to their clients while staying focused on other marketing strategies.\n\nLocal businesses aiming to improve their visibility in search results can also benefit from white-label SEO to increase foot traffic and customer inquiries. E-commerce businesses looking to optimize product pages and improve site rankings in competitive markets will see significant value in white-label SEO services. Bloggers and content creators can also use white-label SEO to boost their rankings, gain more traffic, and grow their online presence.",
  },
  {
    q: "What Is the Cost of White Label SEO?",
    a: "The cost of white-label SEO varies based on several factors, such as the scope of services required, the size of the business, and the level of competition in your industry. Typically, agencies offering white-label SEO services offer customizable packages that can be tailored to suit different business needs and budgets. Smaller businesses or startups may opt for more basic SEO packages, which focus on essential on-page optimizations and keyword research. Larger businesses or agencies may require more comprehensive packages that include advanced strategies like link building, content marketing, and technical SEO.\n\nWhile the price can range from affordable to premium depending on the services, it's important to find a provider that offers the best value for the results you need, ensuring both quality and cost-effectiveness.",
  },
];

export default function WhiteLabelSeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </span>
                  <span className="ml-4 text-2xl text-blue-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-slate-700 whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
