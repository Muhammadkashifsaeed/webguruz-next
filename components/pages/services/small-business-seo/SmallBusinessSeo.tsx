"use client";

import Image from "next/image";
import Link from "next/link";
import SmallBusinessSeoStats from "./SmallBusinessSeoStats";
import SmallBusinessSeoServices from "./SmallBusinessSeoServices";
import SmallBusinessSeoIndustries from "./SmallBusinessSeoIndustries";
import SmallBusinessSeoRole from "./SmallBusinessSeoRole";
import SmallBusinessSeoWhyChoose from "./SmallBusinessSeoWhyChoose";
import SmallBusinessSeoBenefits from "./SmallBusinessSeoBenefits";
import SmallBusinessSeoFaq from "./SmallBusinessSeoFaq";
import SmallBusinessSeoCta from "./SmallBusinessSeoCta";
import SmallBusinessSeoRelatedBlogs from "./SmallBusinessSeoRelatedBlogs";
import SmallBusinessSeoAudit from "./SmallBusinessSeoAudit";

export default function SmallBusinessSeo() {
  return (
    <div className="flex-1">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                Maximize Your Online Presence with Expert{" "}
                <span className="text-blue-500">Small Business SEO Services</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                At WebGuruz, we specialize in providing cost-effective and
                result-driven SEO solutions tailored to small businesses. Our
                expert team will work closely with you to create an SEO plan that
                enhances your brand&apos;s online presence, ensuring you reach the
                right audience at the right time.
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
                src="/images/reach.webp"
                alt="Small Business SEO"
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
            alt="Small Business SEO Marketing"
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
                Achieve Online Success with Our{" "}
                <span className="text-white font-bold">Small Business SEO Agency</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-200">
                With Small Business SEO, you can enhance your website&apos;s search engine ranking, attract more organic traffic, and grow your customer base. Our SEO services help small businesses increase their online visibility, build credibility, and stay ahead of local competitors. By optimizing your website for search engines, you&apos;ll increase the chances of potential customers finding you when they search for products or services related to your business. Let us help you boost your digital marketing efforts and take your business to new heights!
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

      <SmallBusinessSeoStats />
      <SmallBusinessSeoServices />
      <SmallBusinessSeoIndustries />
      <SmallBusinessSeoRole />
      <SmallBusinessSeoWhyChoose />
      <SmallBusinessSeoBenefits />
      <SmallBusinessSeoFaq />
      <SmallBusinessSeoCta />
      <SmallBusinessSeoRelatedBlogs />
      <SmallBusinessSeoAudit />

    </div>
  );
}
