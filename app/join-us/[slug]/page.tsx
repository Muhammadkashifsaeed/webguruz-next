import Link from "next/link";
import { notFound } from "next/navigation";
import { joinUsPages } from "@/lib/site";

export function generateStaticParams() {
  return joinUsPages.map((p) => ({ slug: p.slug }));
}

export default async function JoinUsSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = joinUsPages.find((p) => p.slug === slug);
  if (!item) notFound();

  const Icon = item.icon;

  return (
    <div className="flex-1 bg-gray-50">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/join-us" className="text-blue-300 hover:text-blue-200 text-sm">
            &larr; Back to Join Us
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-blue-400">
              <Icon className="w-10 h-10" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">{item.name}</h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow p-8">
          <Link
            href="/contact"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
