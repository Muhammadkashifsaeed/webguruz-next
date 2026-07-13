"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaGlobe, FaApple, FaWordpress } from "react-icons/fa";

const stats = [
  { icon: FaUsers, label: "21+", desc: "Years of Experience" },
  { icon: FaGlobe, label: "Australia", desc: "Global Presence" },
  { icon: FaApple, label: "iOS", desc: "App Development" },
  { icon: FaWordpress, label: "WordPress", desc: "CMS Solutions" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900"
        >
          Featured <span className="text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 text-center text-lg text-slate-600 max-w-3xl mx-auto"
        >
          Using the latest technology and industry expertise, we built top-end
          Android and iOS-based applications that add value to the business and
          user experience.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl bg-blue-400 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/for1.webp"
                    alt="Robert James Realty App"
                    width={400}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-blue-400 rounded-2xl p-8 sm:p-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Robert James Realty
            </h3>
            <p className="mt-4 text-white/90 leading-relaxed">
              RJR has been a real estate leader with offices and Agents servicing
              the Sunshine Coast in Queensland for many years. Born from a national
              franchise based in Noosa and Tewantin Robert James Realty was launched
              to break the restraints of a National group and their commitments to
              outdated marketing and print media.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-2xl font-extrabold text-slate-900">{s.label}</p>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-1 bg-blue-400 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            View Case Study <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
