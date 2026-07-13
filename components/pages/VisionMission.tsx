"use client";

import Image from "next/image";

const sections = [
  {
    letter: "V",
    color: "bg-blue-400",
    title: "Our Vision",
    text: "To grow our current position and reach a greater market as well as to provide the custom software solutions to the clients. Our web and mobile app development approaches are more geared towards teamwork, keeping the customer involved, to provide better services to customers.",
  },
  {
    letter: "M",
    color: "bg-red-400",
    title: "Our Mission",
    text: "We work intending to help online businesses harness the power of software technologies to expand their business, increase revenue, develop leads and maximize ROI. The client's success is our happiness!",
  },
  {
    letter: "C",
    color: "bg-emerald-400",
    title: "Our Core Value",
    text: "We are one of the prominent companies that help businesses to transform into digital enterprises. Our commitment to our clients is deep-rooted in our working style and we go above and beyond every day to prove it to our clients.",
  },
];

export default function VisionMission() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Technology Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              index !== 0 ? "mt-16" : ""
            }`}
          >
            <div className={`flex items-center justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div
                className={`flex h-40 w-40 items-center justify-center rounded-2xl ${section.color} shadow-2xl`}
              >
                <span className="text-6xl font-extrabold text-white">{section.letter}</span>
              </div>
            </div>

            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-gray-200 leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
