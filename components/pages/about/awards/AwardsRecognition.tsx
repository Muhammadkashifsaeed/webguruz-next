"use client";

import Image from "next/image";
import Link from "next/link";

export default function AwardsRecognition() {
  return (
    <div className="flex-1">
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/leader-3.webp"
            alt="Awards and Recognition"
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
            Awards and Recognition
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-white" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/Award.webp"
              alt="Awards"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Award-Winning Practices at Webguruz
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              At Webguruz, our commitment to excellence is recognized through
              award-winning practices that elevate our digital solutions to new
              standards of quality and innovation. We believe in setting
              benchmarks in every project, leveraging the latest technologies,
              and maintaining an unwavering focus on client success. Our
              recognized practices are built on consistent improvement, rigorous
              quality standards, and a client-centric approach, allowing us to
              deliver customized, impactful solutions that drive measurable
              results.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              HubSpot Certified Solutions Partner
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              As a HubSpot Certified Solutions Partner, Webguruz brings expertise
              and official certification in deploying HubSpot&apos;s powerful tools
              to enhance client engagement, streamline workflows, and boost sales
              efficiency. From CRM optimization to inbound marketing and automated
              sales processes, our team expertly utilizes HubSpot&apos;s platform
              to drive customer growth and satisfaction. This certification
              reflects our dedication to offering best-in-class solutions that meet
              the dynamic demands of today&apos;s digital market, enabling our
              clients to achieve sustainable success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { img: "mem1", title: "Membership Certificate" },
              { img: "mem2", title: "Membership" },
              { img: "mem3", title: "Membership" },
              { img: "mem4", title: "Membership Certificate" },
            ].map((cert) => (
              <div key={cert.img} className="text-center">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[180px] rounded-lg border border-gray-300">
                  <Image
                    src={`/images/${cert.img}.webp`}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-8">
            {[
              { img: "mem1", title: "Membership Certificate" },
              { img: "mem2", title: "Membership" },
              { img: "mem3", title: "Membership" },
              { img: "mem4", title: "Membership Certificate" },
            ].map((cert) => (
              <div key={cert.img} className="text-center">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[180px] rounded-lg border border-gray-300">
                  <Image
                    src={`/images/${cert.img}.webp`}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              HubSpot Sales Hub Software Certification
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              With our HubSpot Sales Hub Software Certification, Webguruz is
              positioned to maximize sales potential for businesses through the
              strategic use of HubSpot&apos;s robust sales tools. This
              certification underscores our expertise in implementing,
              customizing, and optimizing the Sales Hub for each client&apos;s
              unique sales journey. By integrating the Sales Hub&apos;s
              data-driven insights with streamlined sales processes, we help
              businesses manage leads effectively and focus on high-impact,
              revenue-generating activities. This certification reaffirms our
              commitment to building scalable, efficient, and customer-focused
              sales solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Top-Rated Agency on Upwork
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Webguruz is proudly recognized as a top-rated agency on Upwork, a
              testament to our unwavering commitment to quality, professionalism,
              and client satisfaction. Achieving this status highlights our
              dedication to consistently delivering exceptional digital solutions
              across web development, SEO, digital marketing, and more. As a
              top-rated agency, we meet rigorous performance standards, maintain
              high ratings, and receive outstanding feedback from clients around
              the world. This distinction sets us apart as a trusted partner for
              businesses seeking reliable expertise and results-driven strategies.
              Being top-rated on Upwork underscores our promise to go above and
              beyond, ensuring that every project not only meets but exceeds our
              client&apos;s expectations.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { img: "up1", title: "Membership Certificate" },
              { img: "up2", title: "Membership" },
              { img: "up3", title: "Membership Certificate" },
            ].map((cert) => (
              <div key={cert.img} className="text-center">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[180px] rounded-lg border border-gray-300">
                  <Image
                    src={`/images/${cert.img}.webp`}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
