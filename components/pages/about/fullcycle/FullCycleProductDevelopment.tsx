"use client";

import Image from "next/image";

export default function FullCycleProductDevelopment() {
  return (
    <div className="flex-1">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Shape Your Product With{" "}
              <span className="font-bold text-blue-400">Our Project Managers</span>
            </h2>
            <p className="mt-6 text-xl text-slate-700 leading-relaxed">
              Our expert project managers ensure seamless coordination and
              execution throughout the product development journey. From
              ideation to launch, we focus on innovation, efficiency, and
              cutting-edge technology to shape a product that stands out in the
              market.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/Shape.webp"
              alt="Full Cycle Product Development"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900">
          Our Team Assists You Through Full Cycle Mobile App Development
          Services
        </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-slate-700 leading-relaxed">
          From concept to launch, our team provides end-to-end mobile app
          development solutions tailored to your business needs. We focus on
          innovation, functionality, and user experience to create
          high-performing mobile applications.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              img: "tes1",
              title: "Requirement Gathering",
              text: "We analyze your business goals and user needs to define the app's core functionalities, ensuring a solid foundation for development.",
            },
            {
              img: "tes2",
              title: "Design",
              text: "Our UI/UX experts craft intuitive, visually appealing, and engaging designs that enhance user experience and brand identity.",
            },
            {
              img: "tes3",
              title: "Development",
              text: "Using the latest technologies, our developers build a robust, scalable, and high-performing mobile application tailored to your requirements.",
            },
            {
              img: "tes4",
              title: "Testing",
              text: "We conduct rigorous testing to ensure your app is bug-free and secure and delivers a seamless experience across devices.",
            },
            {
              img: "tes5",
              title: "Launch",
              text: "After final optimizations, we deploy your app to app stores and ensure a smooth rollout, providing post-launch support for ongoing success.",
            },
          ].map((item) => (
            <div
              key={item.img}
              className="rounded-xl border border-gray-200 p-6 text-center"
            >
              <div className="relative mx-auto aspect-square w-20">
                <Image
                  src={`/images/${item.img}.webp`}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3e7d3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                We focus on Bringing together the right product
              </h2>
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                Product management is at the heart of our full-cycle development
                process. With a strong emphasis on innovation, we create
                distinctive products that blend advanced technology with
                exceptional design.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/mble.webp"
                alt="Full Cycle Product Development"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl">
          <Image
            src="/images/stack.svg"
            alt="Full Cycle Product Development"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 768px"
            unoptimized
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl rounded-xl border border-gray-200 p-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            What sets us apart?
          </h2>
          <ul className="mt-6 space-y-4 text-xl text-slate-700 leading-relaxed list-disc pl-5">
            <li>
              Through product management, we arrive at the crossroads of
              business, technology, and user experience and build a product that
              is feasible, valuable and usable.
            </li>
            <li>
              We are Keen observers. We look at things holistically - what does
              the product mean to the customer, where it currently stands and
              where it needs to go in the future. We have unabashed confidence in
              your product and are quick to notice opportunities where others see
              nothing but a wasteland.
            </li>
            <li>
              Synergy - We believe in combined effort to bring optimum results.
              Our Product Managers eliminate conflicts and disconnects between
              different departments, and ensure your product vision stays on
              track.
            </li>
            <li>
              We are driven by innovation and creativity and build products that
              form an indisputable niche in the market.
            </li>
            <li>
              We have a stellar design taste and know how to use product insights
              to materialize a breakthrough idea into a scalable product.
            </li>
            <li>
              We set measurable goals, generate invaluable insights on industry
              trends, and provide clarity to the client and stakeholders at any
              given point.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
