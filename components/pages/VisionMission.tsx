"use client";

import Image from "next/image";

const sections = [
  {
    letter: "V",
    color: "bg-blue-500",
    title: "Our Vision",
    text: "To grow our current position and reach a greater market as well as to provide the custom software solutions to the clients. Our web and mobile app development approaches are more geared towards teamwork, keeping the customer involved, to provide better services to customers.",
  },
  {
    letter: "M",
    color: "bg-red-500",
    title: "Our Mission",
    text: "We work intending to help online businesses harness the power of software technologies to expand their business, increase revenue, develop leads and maximize ROI. The client's success is our happiness!",
  },
  {
    letter: "C",
    color: "bg-emerald-500",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div
                className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl ${section.color} shadow-lg`}
              >
                <span className="text-5xl font-black text-white">{section.letter}</span>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-white">
                  {section.title}
                </h2>
                <p className="mt-3 text-gray-200 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
