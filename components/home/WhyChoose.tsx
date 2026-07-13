import Image from "next/image";
import Link from "next/link";

const reasons = [
  "Proven Track Record",
  "Customized Solutions",
  "Innovative Approach",
  "Dedicated Support",
];

const paragraph =
  "In the fast-paced world of digital marketing, staying ahead of the curve is essential. WebGuruz is committed to embracing innovation and staying at the forefront of industry trends. Our team continuously invests in learning and development to ensure that we are equipped with the latest tools, techniques, and technologies. We leverage cutting-edge platforms and strategies to deliver creative and effective solutions that help our clients stand out in the competitive marketplace.";

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg text-slate-900">
          Your Vision, Our Expertise - Boundless Possibilities
        </p>

        <h2 className="mt-3 text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          Four Reasons to <span className="text-blue-500">Choose WebGuruz</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="bg-blue-500 text-white p-5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold">{reason}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-slate-700 leading-relaxed">{paragraph}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              About Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="relative aspect-[3/2] shadow-md">
            <Image
              src="/images/fast.webp"
              alt="About WebGuruz"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
