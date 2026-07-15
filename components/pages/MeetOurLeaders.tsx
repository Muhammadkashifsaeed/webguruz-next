"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetOurLeaders() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Meet The <span className="text-blue-400">Leaders</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              At WebGuruz Technologies, our leaders combine cutting-edge
              technology, innovative ideas, and deep expertise to help
              businesses thrive in today&apos;s digital landscape. Meet the
              distinguished minds shaping the future of our company and driving
              success for clients worldwide.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-blue-500 text-white font-semibold text-sm shadow hover:bg-blue-600 transition-colors"
            >
              View All
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jas.webp"
                alt="Jaswinder Singh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>

            <div className="mt-5 text-left">
              <h3 className="text-xl font-bold text-slate-900">
                Jaswinder Singh
              </h3>
              <p className="mt-1 text-sm font-medium text-blue-500">CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
