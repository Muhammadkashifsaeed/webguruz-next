"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "SEO projects for businesses worldwide." },
  { value: 1800, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "SEO experts" },
  { value: 17, suffix: "+", label: "Years in the SEO industry" },
];

export default function WhiteLabelSeoStats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Improve SERPs and Drive Organic Traffic with{" "}
          <span className="text-blue-500">White Label SEO</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          Leverage expert strategies, save costs, and enable scalability without the need for in-house SEO teams.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-blue-400 transition-[height] duration-300 ease-out group-hover:h-full" />
              <div className="relative z-10 px-6 py-10 text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 transition-colors duration-300 group-hover:text-slate-900">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-slate-700">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
