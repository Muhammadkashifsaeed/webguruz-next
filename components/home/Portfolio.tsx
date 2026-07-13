import Link from "next/link";

const portfolios = [
  {
    title: "ECom Tushar",
    metric: "ROAS on ad campaigns",
    value: "6.69+",
    slug: "ecom-tushar",
  },
  {
    title: "Monica Jewelers",
    metric: "Growth in Traffic",
    value: "60%",
    slug: "monica-jewelers",
  },
  {
    title: "Minus The Agent",
    metric: "Jump in Website Traffic",
    value: "100%",
    slug: "minus-the-agent",
  },
  {
    title: "Crystal Tones",
    metric: "CTR in 3 months",
    value: "7.95%",
    slug: "crystal-tones",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          Our <span className="text-blue-500">Portfolio</span>
        </h2>

        <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
          Explore our diverse range of projects and see how we&apos;ve helped
          businesses of all sizes achieve their goals.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center"
            >
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-slate-600">{p.metric}</p>
              <p className="mt-4 text-4xl font-extrabold text-blue-400">
                {p.value}
              </p>
              <Link
                href="/case-study"
                className="mt-5 inline-flex items-center gap-1 text-blue-500 font-medium hover:underline"
              >
                Read Fully Case Study <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
