"use client";

import Image from "next/image";
import Link from "next/link";

export default function AgileSoftwareDevelopment() {
  return (
    <div className="flex-1">
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/leader-5.webp"
            alt="Agile Software Development"
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
            Agile Software Development
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Speed and Scalability with Agile Development
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gray-300" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-700 leading-relaxed">
          We start by breaking the app development cycle into different tasks.
          These tasks are divided again into subtasks, each of which is performed
          simultaneously after being assigned to our teams,
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/speed.svg"
              alt="Agile Development"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>

          <div>
            <h2 className="inline-block bg-blue-200 rounded-l-3xl px-4 py-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              We agile your products to success
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              After a definite period of time, through the agile way, you
              don&apos;t just get one, but multiple functionalities of your
              product. To achieve this, Developers, Designers, and Testers work
              simultaneously and co-dependently.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Every subtask is divided by us into sprints of two weeks, within
              which we cross out elements one after another. To ensure that
              everything is aligned with the project expectation, we have daily
              scrum meetings with the team, where the tasks are clearly assigned.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              We believe Agile is a mindset. Our cross-functional teams evolve
              through collaborative effort to build the desired product. Design
              and Implementation go hand in hand, we welcome feedback and quickly
              adapt to change.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Being agile helps us develop products at low risk and expedite
          development speed
        </h2>
        <p className="mt-6 text-lg text-slate-700 leading-relaxed">
          WebGuruz specializes in building software products that are both
          robust and scalable, designed to grow alongside your business.
          Leveraging agile frameworks, we break down development into efficient
          cycles, with each sprint delivering valuable, functional increments.
          This allows us to launch products faster while ensuring they meet the
          highest standards of quality.
        </p>
        <p className="mt-4 text-lg text-slate-700 leading-relaxed">
          Our team is adept at developing a variety of products, from
          enterprise-level applications to customer-centric mobile apps, with
          each project tailored to your specifications. We combine strategic
          planning with fast execution, helping you capture market
          opportunities without delay and stay ahead of competitors.
        </p>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-red-300" />

          {[
            {
              title: "Acceptance Test-Driven Development (ATDD)",
              text: "We connect you with Developers, Designers, and the Testers help you communicate the specific requirements even before the actual implementation.",
            },
            {
              title: "Agile Modeling",
              text: "We document the principles and values on a development project which eases the implementation of agile development methods like extreme programming, Scrum, and Rational Unified Process.",
            },
            {
              title: "Agile Testing",
              text: "Making mobile app testing a crucial part of the app development process, we ensure that the bugs and errors are next to nothing. Led by our team of Testers, the agile method keeps every involved party from the UX-UI designers to the app developers in the circle.",
            },
            {
              title: "Backlogs",
              text: "Our POC’s keep their to-do lists and the what’s left lists handy. This helps in achieving client’s expectations through the incremental and iterative mobile app development process.",
            },
            {
              title: "Behavior Driven Development",
              text: "Every app functionality is validated in a planned way to not miss test cases or the criteria defining them. It also includes the prime causes and their relevant fixes.",
            },
          ].map((item, idx) => {
            const right = idx % 2 === 0;
            return (
              <div
                key={item.title}
                className="relative mb-10 lg:flex lg:items-center"
              >
                <div
                  className={`lg:w-1/2 ${
                    right ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"
                  }`}
                >
                  <div
                    className={`ml-12 lg:ml-0 rounded-2xl p-6 ${
                      right ? "bg-blue-400" : "bg-blue-50"
                    }`}
                  >
                    <h3
                      className={`mb-3 text-xl font-extrabold ${
                        right ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        right ? "text-white/90" : "text-slate-700"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>

                <div
                  className={`lg:w-1/2 ${
                    right ? "lg:order-1" : "lg:order-2"
                  }`}
                />

                <div className="absolute left-4 lg:left-1/2 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-red-400 ring-4 ring-white" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Our agile process expedites your
          <br />
          market launch
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-700 leading-relaxed">
          We don&apos;t just develop apps using Agile Methodology. Being agile is
          in the atom of our cultural DNA.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { img: "pro1", title: "Product Backlog" },
            { img: "pro2", title: "Sprint Backlog" },
            { img: "pro3", title: "Daily Scrum Meeting" },
            { img: "pro4", title: "Potentially Shippable Product Increment" },
          ].map((item) => (
            <div key={item.img} className="text-center">
              <div className="relative mx-auto aspect-square w-32 sm:w-40">
                <Image
                  src={`/images/${item.img}.webp`}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 40vw, 200px"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-slate-700 leading-relaxed">
          Our Agile Culture is all about the creation of an environment, which
          is underpinned by the core behaviors, values, and practices that
          enable all levels in the organisation to efficiently adapt to the
          cultural changes. Agility resides in our team along with our
          structures, systems and processes.
        </p>
        <p className="mt-4 text-center text-lg text-slate-700 leading-relaxed">
          Our agile culture helps us handle uncertainty more efficiently. Our
          teams are highly flexible, adaptive and innovative.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Related Blogs
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              img: "hub1",
              title:
                "HubSpot CMS Development: Building AI-Ready Business Websites That Drive Growth",
              text: "Your website is no longer just a place where customers learn about your business.",
            },
            {
              img: "hub2",
              title:
                "The Local SEO Services Advantage: Why Some Local Businesses Keep Growing While Others Disappear from Search",
              text: "In our previous article, The Local SEO Myth That's Costing Businesses Their Customers, we explored why rankings alone no longer guarantee inquiries. As search has evolved, businesses have had to compete on much more than their position in Goo",
            },
            {
              img: "hub3",
              title: "The Local SEO Myth That's Costing Businesses Their Customers",
              text: "For years, businesses measured the success of their local SEO services using one simple benchmark:",
            },
          ].map((blog) => (
            <div
              key={blog.img}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-blue-500"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={`/images/${blog.img}.webp`}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-900">
                  {blog.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {blog.text}
                </p>
                <Link
                  href="/resources/blogs"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-blue-600 transition-colors hover:text-blue-800"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
