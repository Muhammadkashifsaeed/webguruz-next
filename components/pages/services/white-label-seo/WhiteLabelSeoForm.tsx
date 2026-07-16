"use client";

import Image from "next/image";

export default function WhiteLabelSeoForm() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/markinting.webp"
          alt="White Label SEO Marketing"
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
              Enhance Your Reputation as a{" "}
              <span className="text-white font-bold">Trusted White Label SEO Company</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-200">
              Our White Label SEO services help businesses scale their digital
              marketing efforts while saving time and resources. By partnering
              with us, businesses can offer their clients professional SEO
              services, improve website rankings, and drive more traffic to
              their sites. This allows them to focus on growing their business
              and expanding their customer base. Trust our team to help you
              build a competitive edge, and offer more value. Connect with us
              to discover ways we can help!
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
  );
}
