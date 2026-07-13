"use client";

import Image from "next/image";

const timeline = [
  { year: "2025", label: "Career", title: "Platinum Partner in Hubspot", img: "/images/plm1.webp" },
  { year: "2024", label: "Career", title: "HubSpot Gold Partner", img: "/images/plm2.webp" },
  { year: "2023", label: "Career", title: "Completed 200k Hours Over Upwork", img: "/images/plm3.webp" },
  { year: "2020", label: "Career", title: "Completed 100K Hours Over Upwork", img: "/images/plm4.webp" },
  { year: "2016", label: "Career", title: "Completed 8 Years", img: "/images/plm5.webp" },
  { year: "2014", label: "Career", title: "Government Projects", img: "/images/plm6.webp" },
  { year: "2013", label: "Career", title: "Completed 5 Years", img: "/images/plm7.webp" },
  { year: "2012", label: "Career", title: "Expansion", img: "/images/plm8.webp" },
  { year: "2011", label: "Career", title: "Upwork", img: "/images/plm9.webp" },
  { year: "2010", label: "Career", title: "Open Source Technologies", img: "/images/plm10.webp" },
  { year: "2009", label: "Career", title: "Office in UK" },
  { year: "2008", label: "Career", title: "Foundation" },
];

export default function HistoryTimeline() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our <span className="text-blue-400">History</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200" />

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-400 ring-4 ring-white">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
              </div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-1">
                    {item.label}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-400 mb-3">
                    {item.year}
                  </p>
                  {item.img && (
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
