"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ClientTestimonials() {
  return (
    <div className="flex-1">
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/hire-1.webp"
            alt="Client Testimonials"
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
            <span className="text-blue-400">Satisfied</span> Clients
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">
            With Webguruz, your Conceived plan will get achieved and succeed
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              What Our Customers say
            </h2>
            <h3 className="mt-4 text-xl font-bold text-slate-800">
              We Care about Our Customers Experience Too
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Our Customers love us and they have shared a few reviews to say
              just how much .
            </p>
            <div className="mt-6 h-1 w-40 bg-blue-500" />
            <div className="mt-2 h-1 w-24 bg-blue-500" />

            <div className="mt-8 relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/EuiAtW3iraQ"
                title="Client Testimonial"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 p-6">
              <span className="block text-5xl font-black leading-none text-blue-500">
                &ldquo;
              </span>
              <p className="mt-2 text-slate-700 leading-relaxed">
                Jas and his team worked brilliantly to realise my dream of
                creating a video course online. The team is technically sound
                and work on the tiniest details. Very professional and carry a
                positive attitude to deliver work that&apos;s done with
                precision. I wish them all the best.
              </p>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-800">
              - Tina Costermans
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "https://youtu.be/EuiAtW3iraQ",
              "https://youtu.be/ZaIY4_SYK34?si=IKFabmifgR7tUhi1",
              "https://youtu.be/EuiAtW3iraQ",
              "https://youtu.be/EuiAtW3iraQ",
            ].map((url, i) => {
              const id = url.split("?")[0].split("/").pop();
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${id}/0.jpg`}
                    alt="Client video testimonial"
                    width={320}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900">
          What They Says About Us
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          Team up with us Today for an unforgettable Service experience
        </p>
        <div className="mx-auto mt-6 h-1 w-40 bg-blue-500" />
        <div className="mx-auto mt-2 h-1 w-24 bg-blue-500" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: "so1",
              name: "Stephony",
              company: "I love Dogs",
              text: "When you talk about SEO(Search Engine Optimisation), Webguruz technologies are just the best technology but they are better than the best. Many thanks to Jass and his team for the great work!",
            },
            {
              img: "so2",
              name: "Sonia Smith",
              company: "IVY Language",
              text: "Words cannot express how impressed I am with Webguruz. I would go so far as to say, you set a bench mark in completing the task within time. I am really happy with your quality work and responsiveness. You just took my",
            },
            {
              img: "so3",
              name: "Brian Eisberg",
              company: "Battle Field",
              text: "Jas and his Webguruz team have helped me close and make an attractive fee on a large commercial real estate deal here in the United States and helped me organize and hugely advance an interesting foray into what should be a very lucrative",
            },
            {
              img: "so4",
              name: "Sayu A.",
              company: "AIO Hub",
              text: "WebGuruz Technology did a fantastic job. They were completely knowledgeable and did assignments in a timely manner. I would definitely recommend them for hire.",
            },
            {
              img: "so5",
              name: "Tina Costermans",
              company: "Mindful Mastery",
              text: "I like to take this review as a chance to thank Jass and his amazing team, WebGuruz. Because I am continually stunned by their work. I am creating a big video course, which includes building a website, a membership site, and an affiliate system to work,",
            },
            {
              img: "so6",
              name: "Jakob R.",
              company: "Cosmic Appreal",
              text: "The WebGuruz team has designed and developed our HS website. We launched on time, according to the project plan. All requests (like changes and fixes) have been answered and implemented within two business days. Many thanks for",
            },
            {
              img: "so7",
              name: "Leo V.",
              company: "Pro Tech",
              text: "Great people to work with! I would highly recommend them for Hubspot related tasks. It was a wonderful experience working with Jaswinder and his team and would like to continue our partnership.",
            },
            {
              img: "so8",
              name: "Zach G.",
              company: "Censo",
              text: "Great experience with WebGuruz team on our new website build. Responsive and able to do everything that we needed them to do. Very satisfied and will work with them again.",
            },
            {
              img: "so9",
              name: "Amaia D.",
              company: "Better Code",
              text: "WebGuruz was the perfect fit for the interim role we needed to fill while we looked for our permanent employee. They were very professional and trained quickly for immediate execution of our needs.",
            },
          ].map((t) => (
            <div key={t.img} className="text-center">
              <div className="relative mx-auto aspect-square w-24">
                <Image
                  src={`/images/${t.img}.webp`}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {t.name}
              </h3>
              <p className="text-sm text-slate-500">{t.company}</p>
              <p className="mt-3 leading-relaxed text-slate-600">{t.text}</p>
              <div className="mt-3 flex justify-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-5 w-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
