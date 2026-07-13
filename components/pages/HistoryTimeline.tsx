"use client";

import { useRef, useState, useEffect } from "react";
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
  { year: "2009", label: "Career", title: "Office in UK", img: "/images/plm11.webp" },
  { year: "2008", label: "Career", title: "Foundation", img: "/images/plm12.webp" },
];

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const containerRect = el.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const itemRect = ref.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const current = timeline[activeIndex];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our <span className="text-blue-400">History</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:w-1/3 lg:sticky lg:top-24 flex justify-center lg:justify-start">
            <div className="text-8xl sm:text-9xl font-black text-slate-900 leading-none">
              20<span className="inline-block transition-all duration-300">{current.year.slice(2)}</span>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 max-h-[600px] overflow-y-auto space-y-6 pr-2"
            style={{ scrollbarWidth: "thin" }}
          >
            {timeline.map((item, index) => (
              <div
                key={item.year}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`rounded-xl border p-5 transition-all duration-300 ${
                  index === activeIndex
                    ? "border-blue-200 shadow-md bg-white"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  {item.img && (
                    <div className="relative w-full sm:w-48 aspect-video rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-1">
                      {item.label}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-400">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
