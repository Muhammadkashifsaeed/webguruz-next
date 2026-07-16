"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Car,
  Check,
  DollarSign,
  Fan,
  Gauge,
  GraduationCap,
  HeartPulse,
  Home,
  MapPin,
  MonitorSmartphone,
  Plane,
  Scale,
  Smile,
  Star,
  TrendingUp,
  Utensils,
} from "lucide-react";

export default function TechnicalSeo() {
  return (
    <div className="flex-1">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500">
                Technical SEO Services
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                When it comes to improving your website&apos;s visibility,
                Technical SEO is the backbone of your SEO strategy. Technical SEO
                services from WebGuruz are designed to optimize the foundational
                aspects of your website, ensuring it&apos;s easily accessible,
                indexed, and ranked by search engines.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Our Technical SEO experts in Mohali help businesses create a
                seamless user experience while enhancing website performance,
                mobile usability, and security. With WebGuruz, you&apos;ll receive
                top-tier support from a leading Technical SEO agency that has
                helped hundreds of businesses improve their organic rankings and
                grow their online presence.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Contact Now!
              </Link>
            </div>

            <div className="relative aspect-[4/3] shadow-md">
              <Image
                src="/images/Technical.svg"
                alt="Technical SEO"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Technical SEO Marketing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Boost Your Website&apos;s Potential with a Trusted{" "}
                <span className="font-extrabold text-white">
                  Technical SEO Company
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-200">
                Ready to take your website&apos;s performance to the next level?
                Our Technical SEO services are tailored to ensure your site is
                technically sound, search engine-friendly, and poised for success.
                We have the expertise and the tools to make that happen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Request a <span className="text-black">Free proposal</span>
              </h3>

              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  All our projects are secured by NDA
                </p>
                <p className="text-sm font-medium text-gray-700">
                  100% Secure. Zero Spam
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Country
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none">
                      <option value="">Select Country</option>
                      <option value="+92">Pakistan (+92)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+1">United States (+1)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+1">Canada (+1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Select Service
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none">
                      <option value="">Select Service</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="seo-services">SEO Services</option>
                      <option value="technical-seo">Technical SEO</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Short Description of the Project
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                    rows={3}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
                  >
                    GET QUOTE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Our Numbers Speak Louder{" "}
            <span className="text-blue-500">Than Words</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            These numbers reflect our commitment and expertise in delivering
            effective Technical SEO strategies that yield lasting results.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: 17, suffix: "+", label: "Years of Excellence" },
              { value: 50, suffix: "K+", label: "Keywords Ranked" },
              { value: 800, suffix: "+", label: "Projects Successfully Completed" },
              { value: 1500, suffix: "+", label: "Satisfied Clients" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-blue-400 transition-[height] duration-300 ease-out group-hover:h-full" />
                <div className="relative z-10 px-6 py-10 text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 transition-colors duration-300 group-hover:text-slate-900">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-slate-700">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Request a Website Audit for FREE!
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Enter your domain name"
              className="w-full sm:w-96 rounded-lg border border-gray-300 px-4 py-3 text-slate-700 focus:border-blue-400 focus:outline-none"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
            >
              Check Your site health instantly
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "/images/Website1.webp",
                title: "Website Audits",
                text: "We conduct in-depth audits to identify technical issues such as broken links, slow loading pages, or crawl errors that might be hindering your website's performance.",
              },
              {
                img: "/images/Website2.webp",
                title: "Mobile Optimization",
                text: "Ensuring your site is mobile-friendly is crucial for SEO. We optimize your site for mobile devices to enhance user experience and ranking.",
              },
              {
                img: "/images/Website3.webp",
                title: "Page Speed Optimization",
                text: "Faster websites rank better. We enhance your site's speed to meet Google's requirements, improving both user experience and SEO performance.",
              },
              {
                img: "/images/Website4.webp",
                title: "Structured Data Markup",
                text: "By implementing schema markup, we help search engines understand your content better, leading to improved rankings and visibility in search results.",
              },
              {
                img: "/images/Website5.webp",
                title: "XML Sitemap Creation",
                text: "We create XML sitemaps that help search engines crawl and index your website's pages effectively, ensuring maximum visibility.",
              },
              {
                img: "/images/Website6.webp",
                title: "HTTPS Implementation",
                text: "Security is a ranking factor. We help your site migrate to HTTPS, ensuring that both visitors and search engines trust your website.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center rounded-2xl border border-transparent bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg border-b-4 border-b-transparent group-hover:border-b-blue-500"
              >
                <div className="relative h-16 w-16">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Industries We <span className="text-blue-500">Cater To</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            SEO Services for a Wide Range of Industries
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Dental SEO", Icon: Smile },
              { name: "Healthcare SEO", Icon: HeartPulse },
              { name: "Education SEO", Icon: GraduationCap },
              { name: "Financial SEO", Icon: DollarSign },
              { name: "HVAC SEO", Icon: Fan },
              { name: "Real Estate SEO", Icon: Home },
              { name: "Tourism and Hotels", Icon: MapPin },
              { name: "Restaurant SEO", Icon: Utensils },
              { name: "Casino SEO", Icon: Star },
              { name: "Immigration SEO", Icon: Plane },
              { name: "Legal SEO", Icon: Scale },
              { name: "Car Dealers SEO", Icon: Car },
            ].map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <item.Icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Benefits Of Hiring WebGuruz For{" "}
            <span className="text-blue-500">Technical SEO</span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            We take pride in offering customized and result-driven Technical SEO
            services to meet your business needs. Here&apos;s what you&apos;ll
            gain from working with us.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                title: "Better Search Engine Ranking",
                text: "Our team ensures your website meets all technical SEO standards, resulting in higher search engine rankings and increased organic traffic.",
              },
              {
                title: "Efficient Crawling & Indexing",
                text: "With our technical optimization, search engines can easily crawl and index your pages, increasing the likelihood of ranking for relevant keywords.",
              },
              {
                title: "Improved Website Speed",
                text: "Slow websites lose visitors. We optimize your website's loading times, ensuring faster performance and better user engagement.",
              },
              {
                title: "Increased Organic Traffic",
                text: "By fixing technical issues, we help your website perform better in search engines, which translates into higher organic traffic and potential leads.",
              },
              {
                title: "Enhanced User Experience",
                text: "We make sure your website is user-friendly across all devices, leading to better user retention and lower bounce rates.",
              },
              {
                title: "Higher Conversion Rates",
                text: "An optimized website not only brings in more traffic but also Improves conversion rates by providing a smooth and engaging user experience.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Our Process for{" "}
            <span className="text-blue-500">Technical SEO Success</span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            Our process for Technical SEO campaigns is thorough, ensuring every
            aspect of your website is optimized for peak performance. Here are the
            steps we follow:
          </p>

          <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div className="relative h-[240px] w-full overflow-hidden rounded-2xl shadow-md lg:h-[300px]">
              <Image
                src="/images/Initial.webp"
                alt="Technical SEO Process"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Initial Website Audit",
                  text: "We start by analyzing your website for technical issues that may be affecting performance and SEO rankings.",
                },
                {
                  title: "Technical Fixes & Implementation",
                  text: "From fixing broken links to improving page speed, our team implements the necessary technical solutions to improve your website's functionality.",
                },
                {
                  title: "Issue Identification & Prioritization",
                  text: "We identify key issues that need immediate attention and prioritize tasks based on their impact on your website's SEO.",
                },
                {
                  title: "Continuous Monitoring & Optimization",
                  text: "Once the initial fixes are done, we continuously monitor your site's performance and make ongoing optimizations for sustained success.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <Check className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Reporting and Review"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Reporting &amp; <span className="text-blue-500">Review</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            We provide regular reports so you can track improvements in your
            website&apos;s technical health and SEO performance.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            What to Expect with Our{" "}
            <span className="text-blue-500">Technical SEO Agency Services?</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            When you choose WebGuruz for Technical SEO, you can expect:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                Icon: Gauge,
                title: "Improved website speed & performance.",
              },
              {
                Icon: MonitorSmartphone,
                title: "Enhanced user experience across all devices.",
              },
              {
                Icon: TrendingUp,
                title: "Higher rankings for competitive keywords.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center rounded-2xl border-2 border-white bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <item.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is technical SEO services?",
                a: "Technical SEO services focus on optimizing the backend structure of a website to make it easier for search engines to crawl, index, and rank. These services include tasks like improving website speed, mobile-friendliness, and fixing crawl errors.",
              },
              {
                q: "How much does technical SEO cost?",
                a: "The cost of technical SEO services varies depending on the scope of the project, the size of your website, and the specific requirements. Contact us for a detailed quote based on your unique needs.",
              },
              {
                q: "Is technical SEO hard?",
                a: "Technical SEO can be complex, requiring expertise in website structure, coding, and search engine algorithms. However, with the right team, like WebGuruz, it becomes a manageable and rewarding process.",
              },
              {
                q: "What are the types of technical SEO?",
                a: "Technical SEO covers several areas including site speed optimization, mobile optimization, site architecture, security (HTTPS), and structured data implementation.",
              },
              {
                q: "What is the difference between technical SEO and SEO?",
                a: "While general SEO focuses on optimizing content and keywords, Technical SEO ensures the website's infrastructure is optimized for search engines to access and rank your content.",
              },
              {
                q: "What is the main objective of technical SEO?",
                a: "The main goal of technical SEO is to enhance the technical elements of your website, making it easier for search engines to crawl, index, and rank, while improving user experience.",
              },
              {
                q: "How does technical SEO work?",
                a: "Technical SEO works by optimizing your website's structure, performance, and security. As a top technical SEO agency in India, we ensure search engines can easily access and index your site, ultimately improving your rankings.",
              },
            ].map((item, idx) => (
              <FaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Related Blogs
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/has1.webp",
                title:
                  "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
                text: "For years, SEO followed a fairly simple formula.",
                link: "#",
              },
              {
                img: "/images/has2.webp",
                title:
                  "Beyond Google: The 7 Search Layers Every Business Must Master In The AI Era",
                text: "Ask someone under 30 how they found their last great restaurant, software tool, or travel destination",
                link: "#",
              },
              {
                img: "/images/has3.webp",
                title: "Best Technical SEO Companies for Real Results in 2026",
                text: "Choosing a technical SEO agency should be straightforward.",
                link: "#",
              },
            ].map((blog, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-slate-700 line-clamp-2">{blog.text}</p>
                  <a
                    href={blog.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Technical SEO CTA"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Take the Next Step with WebGuruz&apos;s Technical SEO Services
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Ready to make your website technically flawless and
            search engine-friendly? Let our Technical SEO experts in Mohali help
            you enhance your online visibility!
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
          >
            Connect With Us Now!
          </Link>
        </div>
      </section>
    </div>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <span className="ml-4 text-2xl text-blue-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-6 pb-4 text-slate-700">{answer}</div>}
    </div>
  );
}
