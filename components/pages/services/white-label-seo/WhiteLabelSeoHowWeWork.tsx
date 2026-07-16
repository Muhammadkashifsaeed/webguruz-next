"use client";

import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    text: "In this first step, we take the time to fully understand your business, industry, and objectives. During the consultation, we discuss your target audience, current SEO performance, and the challenges you're facing. This conversation allows us to gain insights into your specific needs and goals, so we can tailor our approach accordingly. Whether you're looking to increase website traffic, improve keyword rankings, or boost conversions, we aim to develop a clear understanding of your vision and set realistic expectations from the start.",
  },
  {
    num: "02",
    title: "SEO Audit & Analysis",
    text: "We conduct a comprehensive SEO audit to evaluate your website's current performance, identify technical issues, and analyze competitors. This helps us create a data-driven strategy tailored to your business goals.",
  },
  {
    num: "03",
    title: "Strategy Development",
    text: "Based on our findings, we develop a customized SEO strategy that includes keyword research, on-page optimization, technical improvements, and content recommendations aligned with your objectives.",
  },
  {
    num: "04",
    title: "Implementation & Optimization",
    text: "Our team implements the SEO strategy across your website, making necessary optimizations to improve rankings, user experience, and overall performance. We continuously monitor and refine our approach for optimal results.",
  },
  {
    num: "05",
    title: "Reporting & Communication",
    text: "We provide regular, transparent reports on your SEO performance, including traffic metrics, keyword rankings, and conversion data. Our team maintains open communication to ensure you're always informed about progress and results.",
  },
];

export default function WhiteLabelSeoHowWeWork() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenStep(openStep === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          How We Work as a{" "}
          <span className="text-blue-500">White Label SEO Agency?</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-slate-700">
          As a leading White-label SEO company, we pride ourselves on offering seamless white-label SEO services that allow you to deliver exceptional results to your clients.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {steps.map((item, idx) => {
            const isOpen = openStep === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-extrabold text-blue-500">{item.num}</span>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <span className="ml-4 text-2xl text-blue-500">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-slate-700 leading-relaxed">{item.text}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
