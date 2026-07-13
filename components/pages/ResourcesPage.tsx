"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { resourcePages } from "@/lib/site";

export default function ResourcesPage() {
  const [active, setActive] = useState(0);
  const tableOne = resourcePages.slice(0, 2);
  const tableTwo = resourcePages.slice(2, 4);

  return (
    <div className="flex-1 bg-gray-50">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Resources</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Insights, guides, and tools to help you grow — curated by the
            WebGuruz team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[tableOne, tableTwo].map((table, ti) => (
              <div key={ti} className="bg-white rounded-xl shadow p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-4">
                  {ti === 0 ? "Read" : "Explore"}
                </p>
                <ul className="space-y-1">
                  {table.map((item) => {
                    const index = resourcePages.findIndex((p) => p.slug === item.slug);
                    const Icon = item.icon;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/resources/${item.slug}`}
                          onMouseEnter={() => setActive(index)}
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

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={resourcePages[active].image}
                  alt={resourcePages[active].name}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {resourcePages[active].name}
                </h3>
                {resourcePages[active].description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {resourcePages[active].description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
