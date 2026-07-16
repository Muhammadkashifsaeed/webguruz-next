"use client";

const roles = [
  {
    title: "Boosts Online Visibility",
    text: "SEO helps small businesses get noticed online, driving more traffic to your website and increasing brand awareness.",
  },
  {
    title: "Drives Targeted Traffic",
    text: "SEO helps attract relevant visitors who are actively searching for your products or services, increasing the likelihood of conversions.",
  },
  {
    title: "Builds Credibility and Trust",
    text: "A well-optimized website builds trust with customers. Appearing at the top of search results signals to users that your business is reputable and reliable.",
  },
  {
    title: "Cost-Effective Marketing",
    text: "Compared to traditional advertising, SEO provides a more affordable way for small businesses to reach a larger audience, especially in the long term.",
  },
];

export default function SmallBusinessSeoRole() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          The Role of SEO for{" "}
          <span className="text-blue-500">Small Businesses</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {roles.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
