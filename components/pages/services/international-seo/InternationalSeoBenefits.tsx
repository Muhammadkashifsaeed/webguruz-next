"use client";

const benefits = [
  {
    number: "01",
    title: "Increased Reach",
    text: "International SEO allows businesses to expand their reach and acquire customers from different parts of the world",
  },
  {
    number: "02",
    title: "Competitive Advantage",
    text: "By investing in international SEO, you outpace competitors who are not targeting global markets effectively",
  },
  {
    number: "03",
    title: "Higher Visibility",
    text: "Optimizing for global search engines boosts your website's visibility, making it easier for international users to find you",
  },
  {
    number: "04",
    title: "Improved Brand Recognition",
    text: "Reaching international audiences increases your brand's recognition and authority in different markets",
  },
  {
    number: "05",
    title: "Targeted Traffic",
    text: "You can attract more qualified leads by optimizing your site for specific regions and languages",
  },
  {
    number: "06",
    title: "Enhanced Conversion Rates",
    text: "With tailored SEO strategies, we ensure that your website converts international visitors into loyal customers",
  },
];

export default function InternationalSeoBenefits() {
  const leftItems = benefits.filter((_, idx) => idx % 2 === 0);
  const rightItems = benefits.filter((_, idx) => idx % 2 === 1);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Why Get <span className="text-blue-500">International SEO Done?</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          International SEO can offer a vast array of benefits for your business. Here are some-
        </p>

        <div className="mt-12 relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px">
            <div className="h-full w-full bg-gray-200 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full border-2 border-gray-300 bg-white" />
            </div>
          </div>

          <div className="flex flex-col gap-10 text-left">
            {leftItems.map((item) => (
              <div key={item.number} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-base font-bold text-white">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-10 text-left">
            {rightItems.map((item) => (
              <div key={item.number} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-base font-bold text-white">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
