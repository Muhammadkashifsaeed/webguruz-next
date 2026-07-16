"use client";

const services = [
  {
    title: "Website Internationalization",
    description:
      "Ensure your website is ready for international audiences with proper geo-targeting, language optimization, and region-specific content, making your site more accessible and engaging for visitors from different countries.",
  },
  {
    title: "Global Market Analysis",
    description:
      "We analyze global markets to identify potential opportunities, enabling targeted strategies for each region, and ensuring your business stands out in competitive international markets.",
  },
  {
    title: "Competitor Analysis",
    description:
      "We monitor and analyze your international competitors to ensure you're always one step ahead, enabling you to fine-tune your strategy and outperform competitors in key markets.",
  },
  {
    title: "Multilingual SEO",
    description:
      "We optimize your website for different languages, improving search visibility in non-native languages, which helps to attract a broader international audience and enhances user experience across regions.",
  },
  {
    title: "International Keyword Research",
    description:
      "We conduct comprehensive keyword research tailored to global search trends to help your site rank higher, driving more relevant traffic from various regions and languages.",
  },
  {
    title: "Local SEO for International Markets",
    description:
      "We focus on optimizing your site for local search engines, enhancing its reach in specific countries, and driving region-specific traffic that converts into loyal customers.",
  },
];

export default function InternationalSeoServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Our <span className="text-blue-500">International SEO Services</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          Our international SEO services are designed to boost your visibility and
          online presence, helping you tap into global markets and achieve lasting success.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="text-left rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
