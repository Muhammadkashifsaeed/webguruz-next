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
  { year: "2009", label: "Career", title: "Office in UK" },
  { year: "2008", label: "Career", title: "Foundation" },
];

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const progress = scrollLeft / maxScroll;
      const index = Math.min(
        Math.floor(progress * timeline.length),
        timeline.length - 1
      );
      setActiveIndex(index);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
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
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <div className="text-7xl sm:text-8xl font-black text-blue-400 leading-none">
              20{current.year.slice(2)}
            </div>
          </div>

          <div className="flex-1">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`snap-center shrink-0 w-72 rounded-xl border border-gray-100 bg-white shadow-sm p-5 transition-opacity duration-300 ${
                    index <= activeIndex ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-2">
                    {item.label}
                  </p>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-400 mb-3">
                    {item.year}
                  </p>
                  {item.img && (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
