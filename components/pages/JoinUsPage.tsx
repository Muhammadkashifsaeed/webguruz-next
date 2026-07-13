import Link from "next/link";
import { joinUsPages } from "@/lib/site";

export default function JoinUsPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Join Us</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build your career with WebGuruz — explore openings, internships, and
            life inside our team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {joinUsPages.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/join-us/${item.slug}`}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span className="text-blue-500">
                  <Icon className="w-10 h-10" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.name}
                </h2>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
