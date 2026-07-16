"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smile,
  HeartPulse,
  GraduationCap,
  DollarSign,
  Fan,
  Home,
  MapPin,
  Utensils,
  Star,
  Plane,
  Scale,
  Car,
} from "lucide-react";

const processSteps = [
  {
    img: "/images/we1.webp",
    title: "Research and Audit",
    text: "We conduct a comprehensive analysis of your eCommerce store, identifying strengths, weaknesses, and opportunities. Our audit covers technical health, keyword performance, competitor analysis, and user experience to create a solid foundation for your SEO strategy.",
  },
  {
    img: "/images/we2.webp",
    title: "Optimization and Implementation",
    text: "We implement targeted optimizations across your store, from product pages and category structures to meta tags and schema markup. Our team ensures every element is fine-tuned for search engines while maintaining a seamless shopping experience for your customers.",
  },
  {
    img: "/images/we3.webp",
    title: "Monitoring and Reporting",
    text: "We continuously track your store's performance using advanced analytics tools. Our detailed reports provide insights into traffic, rankings, conversions, and ROI, allowing us to refine strategies and keep you informed every step of the way.",
  },
];

export default function EcommerceSeo() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const item = processSteps[currentStep];
  const isEven = currentStep % 2 === 0;

  return (
    <div className="flex-1">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                Drive Traffic, Boost Sales with{" "}
                <span className="text-blue-500">eCommerce SEO Services</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                We specialize in helping online stores improve their visibility,
                attract targeted traffic, and boost sales. Our expert strategies
                are tailored to your business needs, making sure your store ranks
                higher on search engines and converts visitors into loyal
                customers.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Get Started!
              </Link>
            </div>

            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/sure.webp"
                alt="eCommerce SEO"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
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
            alt="eCommerce SEO Marketing"
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
                What Can You Achieve{" "}
                <span className="text-white font-bold">with eCommerce SEO?</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-200">
                With eCommerce SEO, you can enhance your online presence, attract
                high-intent shoppers, and maximize your revenue. By optimizing
                product pages, categories, and overall site architecture, our
                services ensure that your online store stands out from the
                competition. We don&apos;t just focus on rankings- we focus on
                results that matter, like increased traffic, better conversion
                rates, and more sales.
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
                      Select your Country
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
                      Select your Service
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
            Our <span className="text-blue-500">eCommerce SEO Services</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            Our team delivers comprehensive eCommerce SEO solutions to make your online store a success. We focus on strategies that drive real results and ensure long-term growth for your business.
          </p>

          <div className="mt-12 space-y-6">
            {[
              {
                title: "Keyword Research",
                text: "We conduct in-depth keyword research to identify high-performing keywords that match your customers' intent. Our approach ensures your products are easily discoverable by potential buyers, driving relevant traffic to your site.",
              },
              {
                title: "On-Page Optimization",
                text: "Our on-page SEO services focus on enhancing every aspect of your website. We optimize product titles, descriptions, URLs, and metadata to align with search engine requirements and improve your visibility.",
              },
              {
                title: "Technical SEO",
                text: "We address issues like site speed, mobile responsiveness, and crawlability to enhance both user experience and SEO performance. By ensuring search engines can easily index your site, we pave the way for better rankings and a seamless browsing experience.",
              },
              {
                title: "Content Creation",
                text: "We create engaging, SEO-friendly content to attract and retain customers. From blogs and buying guides to product descriptions, our content strategies are designed to provide value, answer user queries, and establish your brand as an authority in your industry.",
              },
              {
                title: "Link Building",
                text: "We focus on acquiring links from credible and relevant websites that enhance your brand's reputation. Our link-building strategies are ethical and effective, ensuring sustainable growth for your eCommerce business.",
              },
              {
                title: "Local SEO",
                text: "We optimize your store for local search by creating localized content, managing your Google My Business profile, and building citations. This ensures that your store appears prominently in local search results, helping you attract nearby customers and drive foot traffic if applicable.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
            Achieve maximum visibility and growth
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            Our <span className="text-blue-500">eCommerce SEO Process</span>
          </h2>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative aspect-[4/3] shadow-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-500">{item.title}</h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {processSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Industries <span className="text-blue-500">We Cater To</span>
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
            Top <span className="text-blue-500">eCommerce Platforms</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            We have expertise in optimizing stores on the most popular eCommerce platforms:
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {[
              {
                img: "/images/attract1.webp",
                text: "A user-friendly platform perfect for businesses of all sizes. We enhance your Shopify store's SEO to attract more customers.",
              },
              {
                img: "/images/attract2.webp",
                text: "Advanced SEO strategies for this robust platform, ideal for larger businesses with extensive catalogs.",
              },
              {
                img: "/images/attract3.webp",
                text: "Tailored SEO solutions for WordPress-based online stores, ensuring seamless integration and improved rankings.",
              },
              {
                img: "/images/attract4.webp",
                text: "Optimize your BigCommerce store with our specialized SEO services and grow your business with the expertise of a leading eCommerce SEO company.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative h-32 w-full">
                  <Image
                    src={item.img}
                    alt={`Platform ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Benefits of <span className="text-blue-500">eCommerce SEO</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
            Here's why eCommerce SEO is a game-changer-
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
            {[
              {
                img: "/images/search1.webp",
                title: "Increased Visibility",
                text: "Rank higher in search engine results and attract more potential customers.",
              },
              {
                img: "/images/search2.webp",
                title: "Targeted Traffic",
                text: "Bring the right audience to your store, increasing the likelihood of sales.",
              },
              {
                img: "/images/search3.webp",
                title: "Better User Experience",
                text: "Improve site navigation, speed, and mobile-friendliness for a seamless shopping experience.",
              },
              {
                img: "/images/search4.webp",
                title: "Higher Conversion Rates",
                text: "Turn visitors into paying customers with optimized product pages.",
              },
              {
                img: "/images/search5.webp",
                title: "Cost-Effective Marketing",
                text: "Achieve long-term results without spending excessively on ads.",
              },
              {
                img: "/images/search6.webp",
                title: "Competitive Edge",
                text: "Stay ahead of competitors by consistently ranking higher in search results.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative h-28 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-blue-500">{item.title}</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Why Choose WebGuruz as Your{" "}
                <span className="text-blue-500">eCommerce SEO Company?</span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  At Webguruz, we combine expertise with innovation to deliver exceptional eCommerce SEO results. Our team of experienced professionals understands the nuances of online retail and works closely with you to develop customized strategies.
                </p>
                <p>
                  From identifying the right keywords to enhancing user experience, we focus on every detail that drives success. Our transparent reporting keeps you informed about your site's performance, and our commitment to excellence ensures you get the best return on investment.
                </p>
                <p>
                  Whether you're launching a new store or looking to revamp an existing one, WebGuruz is your trusted eCommerce SEO agency partner.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/develop.webp"
                alt="eCommerce SEO Company"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Sets WebGuruz Apart as{" "}
            <span className="text-blue-500">an eCommerce SEO Agency?</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
            We're not just another SEO agency- we're your growth partner.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/unique.webp"
                alt="eCommerce SEO Agency"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Tailored Strategies",
                  text: "Every business is unique, and so are our SEO plans.",
                },
                {
                  title: "Experienced Team",
                  text: "Our SEO specialists have years of experience in optimizing eCommerce stores.",
                },
                {
                  title: "Proven Results",
                  text: "We have a track record of delivering measurable success.",
                },
                {
                  title: "Transparent Communication",
                  text: "Stay updated with regular performance reports.",
                },
                {
                  title: "Customer-Centric Approach",
                  text: "Your goals are our priorities, and we work tirelessly to achieve them.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-blue-500">{item.title}</h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
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
              Check Your site health instently
            </button>
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
                q: "What is eCommerce SEO?",
                a: "eCommerce SEO involves optimizing an online store to improve its visibility on search engines. It includes on-page optimization, technical SEO, and content creation, all aimed at driving traffic and boosting sales. By targeting specific keywords and enhancing user experience, eCommerce SEO ensures your store ranks higher and attracts the right customers.",
              },
              {
                q: "Why is eCommerce SEO important?",
                a: "Without SEO, your online store might go unnoticed. eCommerce SEO helps you compete in a crowded market by improving your site's visibility, attracting targeted traffic, and increasing conversions. It's a cost-effective way to grow your business and build a loyal customer base.",
              },
              {
                q: "How long does it take to see results?",
                a: "SEO is a long-term strategy, and results can take 3-6 months. However, the timeline depends on factors like competition, your site's current state, and the strategies implemented. With consistent effort, you'll see significant improvements in traffic and sales over time.",
              },
              {
                q: "What makes eCommerce SEO different from regular SEO?",
                a: "eCommerce SEO focuses specifically on optimizing online stores. It involves unique strategies like optimizing product pages, category pages, and site architecture, along with addressing technical issues common in eCommerce platforms.",
              },
              {
                q: "Do I need ongoing eCommerce SEO services?",
                a: "Yes, SEO is an ongoing process. Search engine algorithms change, and so do customer behaviors. Continuous optimization ensures your store stays competitive and maintains its rankings.",
              },
              {
                q: "Can you help with local SEO for eCommerce?",
                a: "Absolutely! Local SEO is crucial for online stores targeting specific regions. We optimize your site for local keywords, create localized content, and ensure your store appears in local search results.",
              },
            ].map((item, idx) => (
              <FaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
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
                img: "/images/mind1.webp",
                title:
                  "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
                text: "For years, SEO followed a fairly simple formula.",
                link: "#",
              },
              {
                img: "/images/mind2.webp",
                title:
                  "Beyond Google: The 7 Search Layers Every Business Must Master In The AI Era",
                text: "Ask someone under 30 how they found their last great restaurant, software tool, or travel destination",
                link: "#",
              },
              {
                img: "/images/mind3.webp",
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
            alt="eCommerce SEO Marketing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Grow Your eCommerce Business?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Partner with Webguruz for exceptional eCommerce SEO services.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
          >
            Contact us today to get a Started!
          </Link>
        </div>
      </section>

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
