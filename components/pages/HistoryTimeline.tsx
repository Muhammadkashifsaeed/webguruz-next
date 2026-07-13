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

        <div className="max-w-5xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="flex items-start gap-6 mb-10"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center">
                  <span className="text-2xl font-black text-white">{item.year}</span>
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-16 bg-blue-200 mt-2" />
                )}
              </div>

              <div className="flex-1 pb-2">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-1">
                  {item.label}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                {item.img && (
                  <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden mt-3">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
