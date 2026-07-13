"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: "cl1",
    image: "/images/cl1.webp",
    name: "Saya A",
    text: "WebGuruz transformed our online presence completely. Their team delivered a stunning website that perfectly captures our brand identity and drives real results.",
  },
  {
    id: "cl2",
    image: "/images/cl2.webp",
    name: "Amia D",
    text: "Working with WebGuruz was an absolute pleasure. Their attention to detail and commitment to excellence exceeded all our expectations.",
  },
  {
    id: "cl3",
    image: "/images/cl3.webp",
    name: "Zach G",
    text: "The team at WebGuruz brought our vision to life with incredible precision. Their expertise in web development is truly unmatched.",
  },
  {
    id: "cl4",
    image: "/images/cl4.webp",
    name: "Leo V",
    text: "From strategy to execution, WebGuruz delivered outstanding results. Our website now loads faster and converts better than ever before.",
  },
  {
    id: "cl5",
    image: "/images/cl5.webp",
    name: "Jakob R",
    text: "WebGuruz helped us scale our digital presence exponentially. Their innovative solutions and dedicated support made all the difference.",
  },
];

const INTERVAL = 2000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const current = useMemo(() => testimonials[index], [index]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900"
        >
          Client <span className="text-blue-400">Testimonials</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-lg text-slate-600 max-w-3xl mx-auto"
        >
          Hear from Satisfied Clients about their Experience Working with
          WebGuruz.
        </motion.p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 120, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -120, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center"
              >
                <div className="relative aspect-square max-w-[140px] mx-auto md:mx-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={140}
                    height={140}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                    sizes="(max-width: 768px) 30vw, 140px"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900">
                    {current.name}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {current.text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
