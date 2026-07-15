"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import {
  FaCogs,
  FaLeaf,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaShoppingCart,
  FaTag,
} from "react-icons/fa";
import {
  FaBriefcase,
  FaBoxOpen,
  FaCompass,
  FaEnvelope,
  FaGlobe,
  FaLightbulb,
  FaMicrophone,
  FaPenNib,
  FaStore,
} from "react-icons/fa";
import {
  Car,
  DollarSign,
  Fan,
  GraduationCap,
  HeartPulse,
  Home,
  MapPin,
  Plane,
  Scale,
  Smile,
  Star,
  Utensils,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const circles = [
  {
    why: "WHY IS OUR RETENTION RATE SO HIGH?",
    items: ["Scalable solutions", "Industry specialists", "Proven results"],
    stat: "91%",
    label: "RETENTION RATE",
    average: "50%",
    color: "red",
    startFlipped: false,
  },
  {
    why: "WHY IS OUR SATISFACTION SCORE SO HIGH?",
    items: ["Project management", "ROI tracking", "Diverse skillsets"],
    stat: "93%",
    label: "CLIENT SATISFACTION SCORE",
    average: "72%",
    color: "green",
    startFlipped: false,
  },
  {
    why: "WHY IS OUR NPS SO HIGH?",
    items: [
      "Turn-key solutions",
      "Real business results",
      "Consistent communication",
    ],
    stat: "420%",
    label: "NET PROMOTER SCORE",
    average: "16",
    color: "orange",
    startFlipped: true,
  },
];

const colorMap: Record<
  string,
  {
    border: string;
    text: string;
    bg: string;
    hoverBg: string;
    hoverText: string;
  }
> = {
  red: {
    border: "border-red-500",
    text: "text-red-500",
    bg: "bg-white",
    hoverBg: "hover:bg-red-500",
    hoverText: "hover:text-white",
  },
  green: {
    border: "border-green-500",
    text: "text-green-500",
    bg: "bg-white",
    hoverBg: "hover:bg-green-500",
    hoverText: "hover:text-white",
  },
  orange: {
    border: "border-orange-500",
    text: "text-orange-500",
    bg: "bg-white",
    hoverBg: "hover:bg-orange-500",
    hoverText: "hover:text-white",
  },
};

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

export default function OrganicSeo() {
  return (
    <div className="flex-1">
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Supercharge Your Business with Our{" "}
            <span className="text-white">
              Organic SEO Services
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-lg leading-relaxed text-gray-300">
                Our Organic SEO experts in Mohali work tirelessly to ensure your
                website ranks on the first page of search engine results.
                Through time-tested strategies, we bring you long-lasting results
                that increase your traffic and conversions organically. Let us
                help you maximize your online presence and outshine your
                competition.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Connect Now!
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Request a Free Proposal
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                All our projects are secured by DNA
              </p>
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
                      <option value="PK">Pakistan (+92)</option>
                      <option value="IN">India (+91)</option>
                      <option value="US">United States (+1)</option>
                      <option value="UK">United Kingdom (+44)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Digital Marketing
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none">
                      <option value="">Select</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
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

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-12">
            Our SEO Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Organic SEO", icon: FaLeaf, slug: "organic-seo" },
              { name: "Local SEO", icon: FaMapMarkerAlt, slug: "local-seo" },
              { name: "Technical SEO", icon: FaCogs, slug: "technical-seo" },
              { name: "Mobile SEO", icon: FaMobileAlt, slug: "mobile-seo" },
              { name: "E-commerce SEO", icon: FaShoppingCart, slug: "ecommerce-seo" },
              { name: "White Label SEO", icon: FaTag, slug: "white-label-seo" },
              { name: "Small Business SEO", icon: FaStore, slug: "small-business-seo" },
              { name: "Voice Search Optimization", icon: FaMicrophone, slug: "voice-search-optimization" },
              { name: "International SEO", icon: FaGlobe, slug: "international-seo" },
              { name: "SEO Consulting & Strategy", icon: FaLightbulb, slug: "seo-consulting-strategy" },
              { name: "SEO Packages", icon: FaBoxOpen, slug: "seo-packages" },
              { name: "Content Writing Services", icon: FaPenNib, slug: "content-writing-services" },
              { name: "Bing SEO", icon: FaCompass, slug: "bing-seo" },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center text-blue-500 transition-colors duration-300 group-hover:text-blue-600">
                  <service.icon className="h-8 w-8" />
                </span>
                <p className="mt-3 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/services"
              className="inline-block text-blue-300 hover:text-blue-200 text-sm"
            >
              &larr; Back to Services
            </Link>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900">
            Organic search results account for 45.1% of all clicks.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            With over 45% of clicks going to organic search results, Organic SEO
            has become the most valuable strategy to boost visibility and drive
            consistent traffic to your website. At WebGuruz, our Organic SEO
            Services help businesses rank higher, generate more leads, and grow
            their online presence, all without relying on paid ads.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Start Growing My Business Now! &rarr;
          </Link>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {circles.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                {i === 0 && <StatCircle data={c} color={c.color} />}
                {i === 1 && <StatCircle data={c} color={c.color} />}
                {i === 2 && <StatCircle data={c} color={c.color} />}
                {i === 1 && (
                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <FaStar key={s} className="h-5 w-5" />
                      ))}
                    </div>
                    <p className="mt-3 font-bold text-slate-900">
                      &ldquo;WebGuruz has been a game-changer for our web
                      strategy.&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            #1 Organic SEO Agency for a Reason
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            When you choose WebGuruz, you're partnering with a top organic SEO agency in India with a proven track record. Here's why businesses trust us:
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 17, suffix: "+", label: "Years of Excellence" },
              { value: 50, suffix: "K+", label: "Keywords Ranked" },
              { value: 5000, suffix: "+", label: "Successful Projects" },
              { value: 1500, suffix: "+", label: "Satisfied Clients" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-400"
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
              Check Your Health Instantly
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                <span className="text-blue-500">Key Strategies</span> We Follow
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                At WebGuruz, we emphasize a comprehensive approach to Organic SEO. Our strategies include optimizing website architecture, conducting in-depth keyword research, and building high-quality backlinks.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                We focus on technical SEO to improve website performance, ensuring your site loads quickly and is mobile-friendly. These methods help you achieve top rankings on the SERPs, which in turn, drives more traffic and increases conversions.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                We continually monitor and adjust our approach to stay ahead of algorithm changes, ensuring long-lasting results.
              </p>
            </div>

            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/ahead.webp"
                alt="Ahead"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Our Organic{" "}
            <span className="text-blue-500">SEO Process</span>
          </h2>

          <div className="mt-8 inline-flex w-full justify-center">
            {["Phase1", "Phase2", "Phase3", "Phase4", "Phase5"].map((phase, idx, arr) => (
              <button
                key={phase}
                type="button"
                className={`px-6 py-2 text-sm font-semibold text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white ${
                  idx === 0 ? "rounded-l-lg border-l-2 border-y-2 border-blue-500" : ""
                }${
                  idx === arr.length - 1 ? "rounded-r-lg border-r-2 border-y-2 border-blue-500" : ""
                }${
                  idx > 0 && idx < arr.length - 1 ? "border-y-2 border-blue-500" : ""
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 text-center">
            Website Audit and Research
          </h3>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 leading-relaxed">
                We begin by conducting a comprehensive audit of your website to uncover any technical issues that may hinder your rankings. This includes evaluating factors such as site speed, mobile responsiveness, crawlability, and URL structure.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Additionally, we examine your site's existing content, metadata, and on-page SEO elements to ensure they are optimized for your target keywords.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                A critical part of our audit is competitor analysis, where we study your top competitors to identify gaps in your strategy and areas where you can outperform them. This foundation allows us to create a personalized SEO roadmap that aligns with your business goals.
              </p>
            </div>

            <div>
              <p className="text-slate-700 leading-relaxed">
                We begin by conducting a comprehensive audit of your website to uncover any technical issues that may hinder your rankings. This includes evaluating factors such as site speed, mobile responsiveness, crawlability, and URL structure.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Additionally, we examine your site's existing content, metadata, and on-page SEO elements to ensure they are optimized for your target keywords.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                A critical part of our audit is competitor analysis, where we study your top competitors to identify gaps in your strategy and areas where you can outperform them. This foundation allows us to create a personalized SEO roadmap that aligns with your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                img: "/images/Proven1.svg",
                title: "Proven Track Record",
                text: "We have a proven history of success in helping businesses climb the search engine rankings. Our focus is not just on ranking your site, but on ensuring those rankings translate into increased visibility, traffic, and conversions. Whether it's competitive short-tail keywords or more targeted long-tail phrases, our results-driven approach guarantees sustained organic growth for your website.",
              },
              {
                img: "/images/Proven2.svg",
                title: "Proven Track Record",
                text: "We have a proven history of success in helping businesses climb the search engine rankings. Our focus is not just on ranking your site, but on ensuring those rankings translate into increased visibility, traffic, and conversions. Whether it's competitive short-tail keywords or more targeted long-tail phrases, our results-driven approach guarantees sustained organic growth for your website.\n\nOur team of SEO professionals comes with over 16 years of industry experience, making us one of the most trusted names in the field of Organic SEO. Over the years, we've worked with diverse clients across industries, understanding the nuances of different markets, search behaviors, and algorithm changes.",
              },
              {
                img: "/images/Proven3.svg",
                title: "Custom Strategies",
                text: "At WebGuruz, we believe that no two businesses are the same, which is why we offer tailor-made SEO strategies designed to meet your unique business goals. Whether you aim to improve local visibility, rank for specific product categories, or grow your organic traffic on a global scale, we take the time to understand your needs and build a strategy that aligns with your vision.",
              },
              {
                img: "/images/Proven4.svg",
                title: "Consistent Reporting",
                text: "Transparency is key to successful collaboration, which is why we provide regular and detailed reports on your website's SEO performance. Our reports cover all the critical metrics, including keyword rankings, organic traffic growth, user engagement, and conversion rates, allowing you to clearly see the progress and ROI of your SEO efforts.",
              },
              {
                img: "/images/Proven5.svg",
                title: "Long-Term Results",
                text: "We employ white-hat, ethical SEO practices that are designed to create a strong and sustainable online presence for your business. By staying aligned with search engine algorithms and providing valuable, high-quality content for your audience, our strategies result in steady traffic growth that endures through algorithm changes and competition shifts.",
              },
              {
                img: "/images/Proven6.svg",
                title: "Affordable Solutions",
                text: "We offer affordable SEO solutions without compromising on quality. Our services are designed to provide the best value for your investment, offering competitive rates with no hidden costs. You'll receive high-quality SEO services that help you grow your online presence, attract more customers, and increase revenue, all within a budget that works for you.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
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
            From startups to established enterprises, we serve businesses across a wide range of industries.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/Organic.webp"
                alt="Organic SEO"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                What's Needed for{" "}
                <span className="text-blue-500">Organic SEO Service</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                Businesses should focus on quality content, mobile optimization, and building an authoritative backlink profile to boost their organic search rankings. At WebGuruz, we guide you through every step, helping you stay ahead of competitors by using proven strategies.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                From keyword targeting to technical SEO, we ensure that your website is optimized for search engines and delivers consistent, long-term results.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Your One-Stop Destination for{" "}
              <span className="text-blue-500">Organic Seo Services ?</span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-slate-700">
              From concept ideation to product development and launch in the market, we help you in every stage of the development lifecycle to build high-performing and scalable web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Improve Visibility with{" "}
                <span className="text-blue-500">
                  Our Organic SEO Services
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                At WebGuruz, our Organic SEO approach focuses on ranking your website at the top of search engine results pages (SERPs) through quality content, link building, and technical optimization. We use a combination of cutting-edge tools and data-driven insights to boost your rankings while providing a user-friendly experience. Our approach is personalized, and we take into account your business needs and goals.
              </p>

              <div className="mt-8">
                <div className="relative aspect-[3/2] shadow-md">
                  <Image
                    src="/images/tec.webp"
                    alt="Technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
                >
                  Lets Connect &rarr;
                </Link>
              </div>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "Keyword Research and Strategy",
                  text: "We identify the most relevant keywords for your business, focusing on high search volume and low competition. By targeting the right keywords, we ensure your website attracts more qualified leads.",
                  color: "blue",
                },
                {
                  title: "On-page SEO Optimization",
                  text: "Our team optimizes each page of your website, from titles and meta descriptions to headers and content, ensuring it aligns with best SEO practices for higher visibility on search engines.",
                  color: "gray",
                },
                {
                  title: "Technical SEO Audits",
                  text: "We perform in-depth technical audits to fix issues such as slow load times, mobile responsiveness, and broken links. This ensures search engines can crawl your site easily, improving your rankings.",
                  color: "green",
                },
                {
                  title: "Content Creation and Optimization",
                  text: "Our experts develop high-quality, SEO-friendly content that not only ranks well but also resonates with your audience. Engaging content keeps visitors on your site longer and boosts your ranking.",
                  color: "blue",
                },
                {
                  title: "Link Building and Backlinks",
                  text: "We help build a robust backlink profile by getting quality links from high-authority websites. This improves your website's credibility and helps you rank higher in organic search results.",
                  color: "gray",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="py-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  {idx < 4 && (
                    <div
                      className={`h-1 w-full ${
                        item.color === "blue"
                          ? "bg-blue-500"
                          : item.color === "green"
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            What to Expect from Our{" "}
            <span className="text-blue-500">Organic SEO Company ?</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            When working with WebGuruz, you can expect:
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] shadow-md">
              <Image
                src="/images/When.webp"
                alt="When"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Increased Online Visibility",
                  text: "Higher rankings lead to more organic traffic.",
                },
                {
                  num: "2",
                  title: "Qualified Leads",
                  text: "Our strategies attract visitors who are more likely to convert.",
                },
                {
                  num: "3",
                  title: "Improved User Experience",
                  text: "Faster, mobile-friendly websites rank better and engage users.",
                },
                {
                  num: "4",
                  title: "Ongoing Growth",
                  text: "As we track and adjust strategies, your website's performance will continuously improve.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
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
                q: "What are organic SEO services?",
                a: "Organic SEO services refer to optimizing your website using strategies like keyword targeting, content creation, and link building to increase your rankings on search engines without paid advertising.",
              },
              {
                q: "How much does organic SEO cost?",
                a: "The cost of organic SEO services can vary depending on the complexity of your project, the industry you're in, and the level of competition. At WebGuruz, we offer competitive pricing tailored to your needs.",
              },
              {
                q: "Is organic SEO better than paid?",
                a: "Yes, organic SEO provides long-term results that grow over time, while paid advertising only works as long as you're paying for it. Organic traffic builds trust and drives sustainable growth.",
              },
              {
                q: "How long does organic SEO take to show results?",
                a: "It typically takes 4 to 6 months to see noticeable improvements in rankings, but organic SEO is a long-term strategy that delivers sustainable results over time.",
              },
              {
                q: "How can I increase my organic traffic SEO?",
                a: "Focus on optimizing your content, targeting the right keywords, building backlinks, and ensuring your site is technically sound. Our organic SEO services can help you achieve these goals.",
              },
              {
                q: "Does organic search pay for clicks?",
                a: "No, organic search results are free, and you don't pay for clicks. This is one of the key benefits of investing in organic SEO over paid advertising.",
              },
              {
                q: "How does organic SEO work?",
                a: "Organic SEO works by improving the relevance, structure, and authority of your website so that search engines rank it higher in results. It involves keyword research, on-page optimization, and building a strong backlink profile.",
              },
            ].map((item, idx) => (
              <FaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

       <RelatedBlogs />
       <GlobalConnections />
       <RelatedServices />
       <CtaSection />
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
      {open && (
        <div className="px-6 pb-4 text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

function CtaSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/markinting.webp"
          alt="Marketing Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Boost Your Organic Search Visibility?
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-gray-200">
          Don't let your competitors outrank you! Partner with WebGuruz, a leading organic SEO agency, to supercharge your online presence and drive long-term results.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
        >
          Contact us Today!
        </Link>
      </div>
    </section>
   );
}

function RelatedBlogs() {
  const blogs = [
    {
      img: "/images/Small.webp",
      title: "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
      text: "For years, SEO followed a fairly simple formula.",
      link: "#",
    },
    {
      img: "/images/Small1.webp",
      title: "Beyond Google: The 7 Search Layers Every Business Must Master In The AI Era",
      text: "Ask someone under 30 how they found their last great restaurant, software tool, or travel destination.",
      link: "#",
    },
    {
      img: "/images/Small2.webp",
      title: "Best Technical SEO Companies for Real Results in 2026",
      text: "Choosing a technical SEO agency should be straightforward.",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Related Blogs
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mt-3 text-slate-700 line-clamp-2">{blog.text}</p>
                <a
                  href={blog.link}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCircle({
  data,
  color,
}: {
  data: (typeof circles)[number];
  color: string;
}) {
  const [flipped, setFlipped] = useState(data.startFlipped);
  const c = colorMap[color];

  return (
    <button
      type="button"
      onClick={() => setFlipped(!flipped)}
      className={`flex h-72 w-72 items-center justify-center rounded-full border-2 ${c.border} ${c.bg} ${c.hoverBg} ${c.hoverText} p-6 text-center shadow-sm transition-all duration-1000`}
    >
      {flipped ? (
        <div>
          <div className="text-4xl font-extrabold transition-colors duration-1000 group-hover:text-white">
            {data.stat}
          </div>
          <div className={`mt-1 text-sm font-semibold transition-colors duration-1000 ${c.text} ${c.hoverText}`}>
            {data.label}
          </div>
          <div className={`mt-2 text-xs transition-colors duration-1000 ${c.text} ${c.hoverText}`}>
            industry average: {data.average}
          </div>
        </div>
      ) : (
        <div>
          <div className={`text-base font-bold transition-colors duration-1000 ${c.text} ${c.hoverText}`}>{data.why}</div>
          <ul className={`mt-3 space-y-1 text-sm transition-colors duration-1000 ${c.text} ${c.hoverText}`}>
            {data.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
}

function GlobalConnections() {
  const regions = [
    {
      img: "/images/North1.svg",
      title: "North America",
      cities: ["New York", "Phoenix", "Dallas", "Miami", "Washington", "San Francisco", "Atlanta", "Los Angeles", "Chicago", "Houston", "Denver", "New jersey", "San Diego", "Toronto", "Vancouver", "Montreal", "Ottawa"],
    },
    {
      img: "/images/North2.svg",
      title: "EMEA",
      cities: ["London", "Birmingham", "Paris", "Rome", "Amsterdam", "Belgium", "Denmark", "Riyadh", "Dubai", "Qatar", "Kuwait", "Abu Dhabi", "Berlin"],
    },
    {
      img: "/images/North3.svg",
      title: "APAC",
      cities: ["Melbourne", "Sydney", "Brisbane", "Perth", "Adelaide", "Canberra", "Auckland", "Tokyo", "Korea"],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Building Global Connections <span className="text-blue-500">{"{Since 2008}"}</span>
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-slate-700">
          Transforming 30+ Cities Across North America, EMEA, and APAC
        </p>

        <div className="mt-12 space-y-8">
          {regions.map((region) => (
            <div key={region.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src={region.img}
                    alt={region.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-500">{region.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2 pl-0 md:pl-16">
                {region.cities.map((city) => (
                  <span key={city} className="text-sm text-slate-700">{city}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServices() {
  const services = [
    { name: "Organic SEO", slug: "organic-seo", icon: FaLeaf },
    { name: "Local SEO", slug: "local-seo", icon: FaMapMarkerAlt },
    { name: "Technical SEO", slug: "technical-seo", icon: FaCogs },
    { name: "Mobile SEO", slug: "mobile-seo", icon: FaMobileAlt },
    { name: "E-commerce SEO", slug: "ecommerce-seo", icon: FaShoppingCart },
    { name: "White Label SEO", slug: "white-label-seo", icon: FaTag },
  ];

  return (
    <section className="bg-[#f3e7d3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Related Services
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center text-blue-500 transition-colors duration-300 group-hover:text-blue-600">
                <service.icon className="h-8 w-8" />
              </span>
              <p className="mt-3 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                {service.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


