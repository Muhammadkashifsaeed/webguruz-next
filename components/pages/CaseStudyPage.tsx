import Image from "next/image";

export default function CaseStudyPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Our Case Studies</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            We have a proven track record of delivering high-quality solutions
            that drive results for our clients.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative w-full aspect-[21/9] rounded-xl shadow overflow-hidden bg-white">
          <Image
            src="/images/leader-1.webp"
            alt="Our Case Studies"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          </div>
      </section>
    </div>
  );
}
