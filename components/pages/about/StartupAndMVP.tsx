"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaChartLine,
  FaLightbulb,
  FaListUl,
  FaRocket,
  FaComments,
} from "react-icons/fa";

export default function StartupAndMVP() {
  return (
    <div className="flex-1">
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/plm7.webp"
            alt="Startup and MVP"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/about"
            className="inline-block text-blue-300 hover:text-blue-200 text-sm"
          >
            &larr; Back to About
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white">
            Startup and MVP
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              We <span className="text-blue-400">Help</span> Small Startup Teams
              Do Big Things
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Our MVP Development services at WebGuruz are designed to help you
              bring your product ideas to life quickly and effectively. By
              focusing on the essential features and functionalities, we create a
              &quot;minimum viable product&quot; (MVP) that provides value to your
              target audience without unnecessary complexity.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Whether you&apos;re a startup launching your first product or an
              established business exploring new avenues, our MVP Development
              services can help you reduce risk, get to market faster, and gather
              valuable user feedback for future growth.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/hel.webp"
              alt="Startup and MVP"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-xl p-8 sm:p-10">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/amp.webp"
              alt="Amplify Your Startup"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Amplify Your Startup
            </h2>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              At WebGuruz, we view MVP Development as a powerful tool for
              fostering growth and innovation. Our approach to MVP development
              focuses on understanding your business goals and aligning them with
              your target audience&apos;s needs. This ensures that the final
              product aligns with market expectations, enhances user
              satisfaction, and provides you with actionable insights. Our
              dedicated team works to refine the MVP in a way that allows for
              scaling and adaptability as your product matures. From ideation to
              launch, we make sure each step of the MVP development journey helps
              you get closer to achieving sustainable growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors"
            >
              Request A Proposal &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/sta.svg"
              alt="It All Starts With an MVP"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              It All Starts With an <span className="text-blue-400">MVP</span>
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              MVP Development Services offer immense value, especially for
              startups and businesses looking to enter the market with minimal
              risk and cost. MVPs help companies test the waters, providing a
              realistic snapshot of how their product might perform before
              investing in full-scale development.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              For startups, MVPs are an invaluable strategy for attracting early
              adopters, securing funding, and validating their concepts. At
              WebGuruz, our MVP Development services give you the confidence to
              grow and scale, knowing you&apos;ve laid a strong foundation based
              on real feedback and market validation.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">
          A Look at Our MVP Development Process
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/look.webp"
              alt="MVP Development Process"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-lg text-slate-700 leading-relaxed">
              We believe in building products iteratively and incrementally. We
              value customer feedback over intuition and iterative design over a
              big elaborate design.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              To deliver products that have a lasting impact, we believe in
              forming a hypothesis for arriving at a solution.
            </p>

            <ul className="mt-6 space-y-3 list-disc pl-5">
              <li className="text-lg font-semibold text-slate-800 leading-relaxed">
                Focus on solving a specific user problem.
              </li>
              <li className="text-lg font-semibold text-slate-800 leading-relaxed">
                Empathise with your target audience and understand what your user
                group wants.
              </li>
              <li className="text-lg font-semibold text-slate-800 leading-relaxed">
                Conduct a research and analyze based on user interactions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              We <span className="text-blue-400">Help</span> Small Startup Teams
              Do Big Things
            </h2>
          </div>

          <div>
            <p className="text-lg font-bold text-slate-800 leading-relaxed">
              We believe in building products iteratively and incrementally. We
              value customer feedback over intuition and iterative design over a
              big elaborate design.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              To deliver products that have a lasting impact, we believe in
              forming a hypothesis for arriving at a solution.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: FaChartLine, text: "Analyze the market" },
            { icon: FaLightbulb, text: "Define the idea" },
            { icon: FaListUl, text: "Make a list of features" },
          ].map((step) => (
            <div
              key={step.text}
              className="mx-auto max-w-[260px] rounded-xl border border-gray-200 border-t-4 border-t-blue-500 border-l-4 border-l-blue-500 p-5 text-center transition-all duration-300 hover:border-b-4 hover:border-b-black hover:border-r-4 hover:border-r-black"
            >
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <step.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-slate-900">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
          {[
            { icon: FaRocket, text: "Build and Launch" },
            { icon: FaComments, text: "Examine the feedback" },
          ].map((step) => (
            <div
              key={step.text}
              className="mx-auto max-w-[260px] rounded-xl border border-gray-200 border-t-4 border-t-blue-500 border-l-4 border-l-blue-500 p-5 text-center transition-all duration-300 hover:border-b-4 hover:border-b-black hover:border-r-4 hover:border-r-black"
            >
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <step.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-slate-900">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
