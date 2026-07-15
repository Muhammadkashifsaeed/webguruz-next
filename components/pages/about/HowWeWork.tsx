"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function HowWeWork() {
  return (
    <div className="flex-1">
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/leader-5.webp"
            alt="How We Work"
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
            A <span className="text-blue-400">Team</span> that has all the
            solutions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold text-white/90 leading-relaxed">
            With Webguruz, your Conceived plan will get achieved and succeed.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-500">
          Our Service Lifecycle
        </h2>
        <h3 className="mx-auto mt-4 max-w-4xl text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
          A <span className="font-bold text-black">Structured, Collaborative Process</span> for
          Seamless Project Success
        </h3>
        <div className="mx-auto mt-6 h-1 w-40 bg-blue-500" />
        <div className="mx-auto mt-2 h-1 w-24 bg-blue-500" />

        <div className="mt-12 space-y-12">
          {[
            {
              num: 1,
              title: "Initial Consultation and Understanding Requirements",
              img: "init",
              text: "Every great project starts with a deep understanding. In our first consultation, we take the time to learn about your business goals, target audience, and expectations. We ask questions, discuss ideas, and gather insights to help us see the project through your eyes. This stage helps establish a shared vision and set clear objectives, forming a solid foundation for success.",
            },
            {
              num: 2,
              title: "Detailed Project Planning",
              img: "detailed",
              text: "With a well-defined goal in place, our team dives into planning. This involves creating a roadmap that includes project timelines, milestones, and resources needed. We outline each phase of the project, assigning tasks to ensure smooth workflow and minimal delays. By aligning with you on the project plan, we aim for clarity and transparency before moving forward.",
            },
            {
              num: 3,
              title: "Design and User Experience (UX) Strategy",
              img: "Design",
              text: "The design phase is where creativity meets functionality. Our designers focus on creating an attractive and intuitive user experience, one that resonates with your brand and engages users effectively. From selecting color schemes to designing layouts and prototypes, every decision is geared towards maximizing user satisfaction and enhancing usability.",
            },
            {
              num: 4,
              title: "Development and Integration",
              img: "and",
              text: "In the development stage, our tech team brings the design to life. Using the latest frameworks and coding standards, we create responsive and scalable applications. Whether it&apos;s a website, app, or complex software, we integrate key features to ensure high performance. Our developers work closely with designers and testers, maintaining code quality and adhering to project timelines.",
            },
            {
              num: 5,
              title: "Quality Assurance and Testing",
              img: "Quality",
              text: "Quality is non-negotiable. In this phase, we rigorously test every aspect of the project, from functionality and security to user experience. Using both automated and manual testing methods, our QA team identifies and resolves potential issues. This ensures that the final product meets our standards and performs flawlessly on launch.",
            },
            {
              num: 6,
              title: "Launch and Post-Delivery Support",
              img: "Launch",
              text: "After final approvals, it&apos;s time for the big reveal. We handle the deployment process carefully to ensure a smooth launch. Even after the project goes live, our commitment continues with ongoing support. We provide regular updates, monitor performance, and address any issues that may arise, helping you achieve long-term success.",
            },
          ].map((step, idx) => {
            const textLeft = idx % 2 === 0;
            return (
              <div
                key={step.num}
                className="relative grid grid-cols-1 items-center gap-8 rounded-xl border border-gray-200 p-8 transition-colors hover:border-blue-500 lg:grid-cols-2"
              >
                <span
                  className={`absolute top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-extrabold text-white ${
                    textLeft ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                  }`}
                >
                  {step.num}
                </span>
                <div className={textLeft ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={`/images/${step.img}.webp`}
                      alt={step.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={textLeft ? "" : "lg:order-2"}>
                  <h4 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h4>
                  <p className="mt-3 leading-relaxed text-slate-700">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-lg font-semibold text-blue-400">
          DEVELOPMENT PROCESS
        </p>
        <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
          <span className="font-bold text-black">Technologies</span> We Operate in
        </h2>
        <div className="mx-auto mt-6 h-1 w-40 bg-blue-500" />
        <div className="mx-auto mt-2 h-1 w-24 bg-blue-500" />

        <TechList />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-lg font-semibold text-slate-900">
          Development Process
        </p>
        <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
          <span className="font-bold text-black">ROI</span> ( Return on
          investment )
        </h2>
        <div className="mx-auto mt-6 h-1 w-40 bg-slate-900" />
        <div className="mx-auto mt-2 h-1 w-24 bg-slate-900" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: "ded1",
              title: "Dedicated Teams",
              text: "Our dedicated team of qualified and experienced experts can help deliver your projects successfully.",
            },
            {
              img: "ded2",
              title: "Long-Term Support",
              text: "Our commitment doesn't end with delivery. We provide ongoing support, ensuring your project stays current and relevant.",
            },
            {
              img: "ded3",
              title: "Optimized Performance",
              text: "We design solutions to perform at peak efficiency, ensuring your project runs smoothly even during high-traffic times.",
            },
            {
              img: "ded4",
              title: "Cost-Effective Solutions",
              text: "Our transparent pricing and efficient processes mean you get high-quality work without stretching your budget.",
            },
          ].map((item) => (
            <div
              key={item.img}
              className="rounded-xl border-2 border-slate-300 p-6 text-center"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/images/${item.img}.webp`}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const techGroups = [
  {
    heading: "Design",
    items: [
      "Photoshop",
      "Illustrator",
      "Adobe XD",
      "After Effects",
      "Sketch",
      "Invision",
    ],
  },
  {
    heading: "Mobile",
    items: [
      "Kotlin",
      "Swift",
      "Java",
      "React Native",
      "Flutter",
      "Objective C",
    ],
  },
  {
    heading: "Technologies",
    items: [
      "Docker",
      "Blockchain",
      "Ruby on Rails",
      "Arduino",
      "NLP",
      "Data Mining",
    ],
  },
  {
    heading: "Server Side",
    items: ["LAMP", "Node.js", "Mongo", "Redis"],
  },
];

function TechList() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {techGroups.map((group) => (
        <div key={group.heading}>
          <h3 className="text-center text-xl font-bold text-slate-900">
            {group.heading}
          </h3>
          <ul className="mt-6 space-y-3">
            {group.items.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="group flex w-full items-center gap-2 border-b border-gray-200 px-3 py-2 text-left text-slate-700 transition-colors hover:font-semibold hover:text-red-500"
                >
                  <FaCheckCircle className="hidden h-5 w-5 shrink-0 text-blue-500 group-hover:inline-flex" />
                  <span>{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
