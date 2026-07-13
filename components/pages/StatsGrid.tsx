"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 17, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "K+", label: "Keywords Ranked" },
  { value: 5000, suffix: "+", label: "Successful Projects" },
  { value: 200, suffix: "+", label: "Digital Experts" },
];

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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function StatsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
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
        </motion.div>
      </div>
    </section>
  );
}
