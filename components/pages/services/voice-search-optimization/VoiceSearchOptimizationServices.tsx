"use client";

const solutions = [
  {
    title: "Conversational Keyword Optimization",
    text: "We research and implement natural, long-tail keywords that align with how people speak during voice searches. This approach increases your chances of being featured in voice search results.",
  },
  {
    title: "Structured Data Implementation",
    text: "By adding schema markup to your website, we help search engines better understand your content, improving the accuracy of voice search results.",
  },
  {
    title: "Local SEO Enhancements",
    text: "Voice searches often focus on local queries. We optimize your business listings, create location-specific content, and ensure your website is voice-search-friendly for nearby users.",
  },
];

export default function VoiceSearchOptimizationServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          <span className="text-blue-500">Our Voice Search</span> Optimization Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
