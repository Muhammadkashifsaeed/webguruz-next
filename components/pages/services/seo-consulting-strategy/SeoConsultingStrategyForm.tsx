"use client";

const points = [
  "10+ years of proven SEO excellence.",
  "Unique strategies tailored to your business type.",
  "Trackable performance metrics.",
  "Comprehensive services, from audits to optimization.",
  "Client satisfaction and retention rate of over 95%.",
];

export default function SeoConsultingStrategyStats() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              <span className="text-white font-bold">#1 Ranked SEO Strategy & Consulting Services Company</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-200">
              Achieve unparalleled online growth with our top-ranked SEO Strategy & Consulting Services. We design data-driven strategies tailored to your business, ensuring your website ranks higher, attracts more visitors, and drives meaningful results.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                  <p className="text-sm leading-relaxed text-gray-200">{point}</p>
                </li>
              ))}
            </ul>
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
