"use client";

import Image from "next/image";
import WhyChooseWebGuruz from "./WhyChoose";
import VisionMission from "./VisionMission";

export default function AboutHero() {

  return (
    <div className="flex-1 bg-gray-50">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80"
            alt="AI Research Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            We provide profitable{" "}
            <span className="text-blue-400">
              <br />
              {`Digital Marketing Solutions`}
            </span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Who <span className="text-blue-400">We Are</span>
            </h2>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              With over decades of experience, WebGuruz Technologies help
              individuals and corporations navigate through their digital
              transformation journey by crafting custom applications in
              accordance to their requirements.
            </p>
            <div className="mt-6 relative aspect-[4/3]">
              <Image
                src="/images/wea.gif"
                alt="Who We Are"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { img: "ds1", text: 'Earned 99% of job success & "Top Rated" Badge on Upwork.' },
              { img: "ds2", text: "Recognized as Top App Developers by Clutch." },
              { img: "ds3", text: "Recognized as One of the Best Firms to Work At on Goodfirms." },
              { img: "ds4", text: "Top Searched For Businesses on GM" },
            ].map((item) => (
              <div
                key={item.img}
                className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square max-w-[120px]">
                  <Image
                    src={`/images/${item.img}.webp`}
                    alt={item.img}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 30vw, 120px"
                  />
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseWebGuruz />
      <VisionMission />
    </div>
  );
}
