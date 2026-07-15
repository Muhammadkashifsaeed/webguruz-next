"use client";

import Image from "next/image";
import Link from "next/link";

export default function LeadershipTeam() {
  return (
    <div className="flex-1">
      <section className="relative py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/leader-1.webp"
            alt="Leadership Team"
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
            <span className="text-blue-400">Leadership</span> Team
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900">
          Meet Our <span className="font-bold text-black">Leadership Team</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          Team up with us Today for an unforgettable Service experience.
        </p>
        <div className="mx-auto mt-6 h-1 w-40 bg-blue-500" />
        <div className="mx-auto mt-2 h-1 w-24 bg-blue-500" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[340px] rounded-xl bg-blue-500">
              <Image
                src="/images/ceo.webp"
                alt="Mr. Jaswinder Singh"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Mr. Jaswinder Singh
            </h3>
            <p className="text-slate-600">CEO, Co-Founder</p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Details</h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Jaswinder Singh is the CEO of WebGuruz Technologies Pvt Ltd, a
              visionary leader with a track record of driving digital innovation.
              Certified in HubSpot Inbound Marketing, Google AdWords, and
              WooRank, Jaswinder&apos;s expertise has been instrumental in shaping
              the digital marketing division at Webguruz. He excels in crafting
              tailored online marketing strategies that amplify brand visibility,
              making him a driving force in the success of numerous businesses. His
              mentorship inspires his team to push boundaries, setting a standard
              of excellence that makes WebGuruz a dynamic place to work.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Details</h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Vinny Singh, an accomplished HR professional, brings a wealth of
              experience in managing the complete employee lifecycle, from
              recruitment to exit. Skilled in end-to-end recruitment for various
              sectors, including finance, manufacturing, and media, she also
              excels in learning and development and talent acquisition. Her
              holistic approach to HR nurtures a culture of growth and continuous
              improvement, making WebGuruz a place where every team member is
              supported and valued.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[340px] rounded-xl bg-blue-500">
              <Image
                src="/images/vinny.webp"
                alt="Mrs. Vinny Singh"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Mrs. Vinny Singh
            </h3>
            <p className="text-slate-600">Head, People &amp; Culture</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[340px] rounded-xl bg-blue-500">
              <Image
                src="/images/Suddit.webp"
                alt="Mr. Suddit Kaura"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Mr. Suddit Kaura
            </h3>
            <p className="text-slate-600">Head, Business Development</p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Details</h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Suddit Kaura, Business Development Manager (BDM) at WebGuruz
              Technologies Pvt Ltd, is a seasoned digital marketing specialist
              with a proven track record in SEO, Google AdWords, and social media
              optimization. His expertise in online strategy and content creation
              has helped drive substantial growth in the IT sector. Suddit&apos;s
              dedication to finding innovative solutions to complex challenges
              makes him an inspiring leader who fosters a high-energy,
              results-driven work environment.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Details</h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Jaspreet Singh, a Business Development Manager (BDM) at WebGuruz
              Technologies Pvt Ltd, is passionate about building resilient teams
              and scalable systems. With a natural talent for mentoring, he is
              solution-focused, decisive, and dedicated to delivering results.
              Jaspreet&apos;s commitment to organizational growth and his
              forward-thinking leadership make him an inspiring figure at
              Webguruz, where he nurtures a culture of problem-solving and
              teamwork.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[340px] rounded-xl bg-blue-500">
              <Image
                src="/images/Jaspreet.webp"
                alt="Mr. Jaspreet Singh"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Mr. Jaspreet Singh
            </h3>
            <p className="text-slate-600">Business Development Manager</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[340px] rounded-xl bg-blue-500">
              <Image
                src="/images/Parul.webp"
                alt="Mrs. Parul Sen"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Mrs. Parul Sen
            </h3>
            <p className="text-slate-600">Web Development Project Manager</p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Details</h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Parul Sen, a Project Manager at WebGuruz Technologies Pvt Ltd, has
              over a decade of experience in web development. Known for her
              dedication and technical expertise, Parul is both compassionate and
              highly skilled, setting a high standard in project management. Her
              blend of empathy and professionalism motivates her team, fostering
              a supportive and dynamic workplace where quality work thrives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
