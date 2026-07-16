"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  Globe,
  Search,
  Zap,
  MapPin,
  TrendingUp,
  Smile,
  HeartPulse,
  GraduationCap,
  DollarSign,
  Fan,
  Home,
  Utensils,
  Star,
  Plane,
  Scale,
  Car,
  Check,
} from "lucide-react";

export default function MobileSeo() {
  return (
    <div className="flex-1">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                Boost Conversions with Expert{" "}
                <span className="text-blue-500">Mobile SEO Services</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 font-semibold">
                Mobile devices dominate the way people browse the internet. With
                Webguruz&apos;s Mobile SEO Services, you can improve your
                visibility, attract more visitors, and drive business growth.
                Whether you&apos;re targeting local customers or a global
                audience, our strategies are designed to meet your goals.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>

            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/growth.webp"
                alt="Mobile SEO"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Why <span className="text-blue-500">Mobile SEO?</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            Optimizing for mobile is no longer optional. Here&apos;s why:
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              {
                icon: Globe,
                title: "Mobile Traffic",
                text: "Over half of global web traffic comes from mobile devices.",
              },
              {
                icon: Search,
                title: "Mobile-First Indexing",
                text: "Mobile-first indexing by search engines prioritizes mobile-friendly websites.",
              },
              {
                icon: Zap,
                title: "Better User Experience",
                text: "Faster mobile sites lead to better user experiences.",
              },
              {
                icon: MapPin,
                title: "Local Search",
                text: "Enhanced local search results increase foot traffic to your business.",
              },
              {
                icon: TrendingUp,
                title: "Competitive Edge",
                text: "Stay ahead of competitors with cutting-edge mobile strategies.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center rounded-full border border-transparent bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg max-w-xs w-full"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>

                  <p className="mt-3 text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Our Mobile <span className="text-blue-500">SEO Services</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            At Webguruz, we specialize in delivering tailored Mobile SEO solutions. We ensure your website is not only mobile-friendly but also ranks high on search engines to attract valuable traffic.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "/images/Target1.webp",
                title: "Mobile-Friendly Design Optimization",
                text: "We analyze your website's design and usability to ensure it's responsive and delivers a seamless experience across all devices.",
              },
              {
                img: "/images/Target2.webp",
                title: "Mobile Speed Optimization",
                text: "Slow-loading sites lose visitors. Our team enhances your website's speed to keep users engaged.",
              },
              {
                img: "/images/Target3.webp",
                title: "Local SEO for Mobile Users",
                text: "Target customers in your area with location-based optimization strategies that drive in-store visits and online inquiries.",
              },
            ].map((item, idx) => (
              <ServiceCard
                key={idx}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Mobile SEO for <span className="text-blue-500">Local and Global Clients</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-700">
            Mobile SEO is crucial for both local and international businesses. We craft strategies that connect you with nearby customers or expand your reach to a global audience. Whether you&apos;re a small business or a multinational corporation, we ensure your mobile presence stands out.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative h-[300px] w-full max-w-3xl">
              <Image
                src="/images/Whether.webp"
                alt="Mobile SEO for Local and Global Clients"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Industries We <span className="text-blue-500">Serve</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            From startups to established enterprises, we serve businesses across a wide range of industries.
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

      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Mobile SEO Marketing"
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
                Offer Seamless User{" "}
                <span className="text-white font-bold">Experience with Mobile SEO</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-200">
                SEO content unlocks a world of opportunities for businesses. By
                optimizing your website with targeted keywords and high-quality
                content, you can rank higher on search engines, reach more
                customers, and increase conversions. Whether it&apos;s building
                brand awareness, enhancing user engagement, or driving more sales,
                Mobile SEO makes it possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Request a <span className="text-black font-bold">Free proposal</span>
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
                      <option value="local-seo">Local SEO</option>
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
            Why Work with WebGuruz,{" "}
            <span className="text-blue-500">Your Mobile SEO Agency?</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            Webguruz is a trusted name in Mobile SEO Services. Our experienced team delivers measurable results, ensuring your business stays ahead in the competitive digital landscape.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Proven Expertise</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                With over a decade of hands-on experience in the dynamic world of SEO, we&apos;ve fine-tuned our skills to help businesses succeed in the ever-evolving digital landscape. Our team has successfully worked with companies across various industries, delivering consistent results and staying ahead of SEO trends to ensure long-term growth for our clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">Customized Solutions</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We understand that every business is unique, and a one-size-fits-all approach simply doesn&apos;t work. That&apos;s why we create tailored strategies that align with your specific goals, audience, and industry requirements. By analyzing your business needs and market competition, we craft personalized solutions that deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900">Transparent Reporting</h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We believe in fostering trust through open communication. Our team provides regular updates on your SEO progress with detailed, easy-to-understand reports. From rankings and traffic to campaign insights, we ensure you&apos;re always informed about the results we&apos;re achieving for your business. Transparency is at the heart of our approach.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-black rounded-2xl p-8 text-white">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Our Team is Your Team
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-gray-200">
                When you work with Webguruz, you gain a dedicated partner in achieving your goals. Our team excels in delivering top-notch Mobile SEO services.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Skilled in the latest mobile SEO tools and techniques.",
                  "Dedicated to delivering exceptional user experiences.",
                  "Focused on measurable results and ROI.",
                  "Committed to understanding your business needs.",
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <p className="text-gray-200">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900">
                <span className="text-blue-500">{"Proven SEO Expertise"}</span> by a Trusted Mobile SEO Company
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/images/Served1.svg"
                      alt="SEO Professionals"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-blue-500">50+</div>
                  <div className="text-sm text-slate-700">SEO Professionals</div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/images/Served2.svg"
                      alt="Clients Served"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-blue-500">500+</div>
                  <div className="text-sm text-slate-700">Clients Served</div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/images/Served3.svg"
                      alt="Years of Experience"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-blue-500">16+</div>
                  <div className="text-sm text-slate-700">Years of Experience</div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/images/Served4.svg"
                      alt="Projects Completed"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-blue-500">10K+</div>
                  <div className="text-sm text-slate-700">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our <span className="text-blue-500">Clientele</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
            We have earned the trust of some of the leading organizations from across the globe with our results.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              "/images/across1.webp",
              "/images/across2.webp",
              "/images/across3.webp",
              "/images/across4.webp",
              "/images/across5.webp",
              "/images/across6.webp",
              "/images/across7.webp",
              "/images/across8.svg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={src}
                    alt={`Client ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
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
              placeholder="Enter Your domain name"
              className="w-full sm:w-96 rounded-lg border border-gray-300 px-4 py-3 text-slate-700 focus:border-blue-400 focus:outline-none"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
            >
              Check your site health instantly
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Additional <span className="text-blue-500">SEO Services</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Technical SEO Audits",
                text: "Our technical SEO audits identify and fix underlying issues that could be affecting your website's performance. We evaluate everything from site speed and mobile-friendliness to crawlability and security, ensuring your site is fully optimized for search engines.",
              },
              {
                title: "Off-Page SEO and Link Building",
                text: "Off-page SEO and link building help boost your website's authority by acquiring high-quality backlinks from reputable sites. This strategy improves your site's credibility and search rankings, driving more organic traffic.",
              },
              {
                title: "Voice Search Optimization",
                text: "Voice search optimization is tailored to help your website rank for voice queries. We optimize content with conversational keywords and natural language, making it easier for voice assistants to find and recommend your business.",
              },
              {
                title: "On-Page SEO Optimization",
                text: "On-page SEO optimization focuses on enhancing individual web pages to improve their ranking in search results. We optimize content, meta tags, headers, and images, making sure your site is both user-friendly and search engine-friendly.",
              },
              {
                title: "E-commerce SEO",
                text: "E-commerce SEO ensures that your online store ranks higher in search results, helping you reach more customers. We optimize product pages, improve site structure, and implement strategies that enhance visibility and sales for your online business.",
              },
              {
                title: "Video SEO",
                text: "Video SEO optimizes your video content for search engines, helping your videos rank higher on platforms like YouTube and Google. We focus on video titles, descriptions, tags, and thumbnails to enhance visibility and engagement.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
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
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is Mobile SEO?",
                a: "Mobile SEO refers to the practice of optimizing your website specifically for mobile devices like smartphones and tablets. As mobile browsing continues to dominate internet usage, it's essential that your website offers a seamless user experience on smaller screens. This involves ensuring that your site is responsive, meaning it automatically adjusts its layout to fit any screen size. It also includes improving loading speeds, optimizing images and content for mobile viewing, and making navigation easy. The goal is to create a site that not only performs well technically but also provides a user-friendly experience that keeps visitors engaged.",
              },
              {
                q: "Why is Mobile SEO Important?",
                a: "Mobile SEO is crucial because more than 60% of all web traffic now comes from mobile devices. If your website isn't optimized for mobile, you're likely losing a significant portion of your potential audience. Mobile users expect fast, easy-to-navigate websites that load quickly, and search engines like Google prioritize mobile-friendly sites in search results. By focusing on mobile optimization, you not only improve your users' experience but also enhance your website's visibility and search engine rankings. A mobile-optimized site is more likely to attract visitors, increase engagement, and convert users into customers.",
              },
              {
                q: "How Does Mobile SEO Affect My Rankings?",
                a: "Mobile SEO directly impacts your rankings because search engines, particularly Google, use mobile-first indexing. This means Google primarily uses the mobile version of your site for indexing and ranking. If your website isn't mobile-friendly, it may struggle to rank as high in search results, even if your desktop version performs well. Mobile-optimized sites have faster load times, better user experiences, and more relevant content, all of which are factors that search engines reward with higher rankings. Thus, mobile optimization is a critical component of improving your overall SEO strategy and increasing your site's visibility in search engine results.",
              },
              {
                q: "What Tools Are Used for Mobile SEO?",
                a: "There are several tools available to help with Mobile SEO. Some of the most commonly used include Google's Mobile-Friendly Test, which checks if your site is easy to use on mobile devices and provides suggestions for improvement. Google PageSpeed Insights evaluates your site's speed on mobile devices and provides actionable recommendations for improving load times. For responsive design, frameworks like Bootstrap allow web developers to create websites that automatically adjust to different screen sizes. Additionally, tools like Google Search Console and Ahrefs help track mobile performance, identify issues, and monitor how your mobile-optimized content is performing in search results.",
              },
              {
                q: "How Can Mobile SEO Drive Local Traffic?",
                a: "Mobile SEO is a key factor in driving local traffic because people often use their mobile devices for local searches, such as finding nearby businesses, restaurants, or services. Optimizing for local SEO means adding location-based keywords, such as city or neighborhood names, to your content and meta tags. A crucial part of local mobile SEO is optimizing your Google My Business listing to ensure that it's complete, accurate, and up-to-date. This includes adding your business hours, address, phone number, and photos. When these aspects are optimized for mobile users, your business becomes more visible in local search results, ultimately driving more local traffic to your website or physical location.",
              },
              {
                q: "How Long Does It Take to See Results from Mobile SEO?",
                a: "The timeline for seeing results from Mobile SEO can vary, but typically, it takes about 3-6 months to notice significant improvements. This is due to the time required for search engines to crawl, index, and update your mobile-optimized content in their rankings. The exact time frame also depends on factors like the competitiveness of your industry, the extent of changes made to optimize the site, and how well you implement ongoing SEO strategies. Patience is important, but consistent mobile optimization efforts can yield sustainable long-term results, such as increased mobile traffic and improved rankings.",
              },
              {
                q: "Can You Optimize E-Commerce Sites for Mobile?",
                a: "Yes, Mobile SEO is critical for e-commerce websites, as mobile shopping continues to rise in popularity. Optimizing an e-commerce site for mobile devices involves ensuring that product pages, images, and checkout processes are streamlined and user-friendly on smaller screens. This can include optimizing image sizes for faster load times, improving mobile navigation for better product discovery, and simplifying the checkout process for mobile users to avoid abandonment. By ensuring your e-commerce site is mobile-friendly, you create a smoother shopping experience for customers, which can lead to higher conversion rates, increased sales, and improved rankings on search engines.",
              },
            ].map((item, idx) => (
              <FaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Mobile SEO Marketing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Take Your Website to the Next Level with Our Mobile SEO Services
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Contact Webguruz today to transform your mobile presence and achieve exceptional results. Let&apos;s build a strategy that works for you!
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
          >
            Connect Now!
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Related Blogs
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/great1.webp",
                title:
                  "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
                text: "For years, SEO followed a fairly simple formula.",
                link: "#",
              },
              {
                img: "/images/great2.webp",
                title:
                  "Beyond Google: The 7 Search Layers Every Business Must Master In The AI Era",
                text: "Ask someone under 30 how they found their last great restaurant, software tool, or travel destination",
                link: "#",
              },
              {
                img: "/images/great3.webp",
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

    </div>
  );
}

function ServiceCard({ img, title, text }: { img: string; title: string; text: string }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`group flex cursor-pointer flex-col items-center rounded-2xl border border-transparent bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg ${
        active ? "border-blue-500" : ""
      }`}
    >
      <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-slate-700 leading-relaxed">{text}</p>

        <div
          className={`mt-4 h-0.5 w-14 rounded bg-blue-500 transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
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
