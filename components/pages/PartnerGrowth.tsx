"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function PartnerGrowth() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            We Are Your <span className="text-blue-400">Digital Partner for Growth</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-center text-lg text-slate-800 max-w-2xl mx-auto"
          >
            Transforming Ideas into Online Success
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
