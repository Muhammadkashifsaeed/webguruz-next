import Link from "next/link";
import { serviceGroups } from "@/lib/site";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end digital services engineered to attract, convert, and grow
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.slice(0, 6).map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="text-blue-500">
                          <Icon className="w-4 h-4" />
                        </span>
                        {s.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/services"
                className="inline-block mt-5 text-blue-600 font-medium hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
