import Link from "next/link";
import { serviceGroups } from "@/lib/site";

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Our Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Full-funnel digital marketing and product services engineered to grow
            your business across search, paid, and AI surfaces.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-bold text-blue-600 mb-5 pb-3 border-b border-gray-100">
                {group.title}
              </h2>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        <span className="text-blue-500">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
