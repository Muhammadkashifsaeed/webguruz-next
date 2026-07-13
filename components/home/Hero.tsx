"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
        alt="Hands on a modern laptop keyboard"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-white"
          >
            Crafting{" "}
            <span className="text-blue-300">
              Websites &amp; Digital Marketing Strategies
            </span>that Convert
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-white/90"
          >
            Your Digital Vision, Our Technical Brilliance
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-red-400 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-red-500 transition-colors"
            >
              Schedule Meeting
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
