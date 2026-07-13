import Image from "next/image";

const awards = ["up1", "up2", "up3", "up4", "up5", "up6", "up7", "up8"];

export default function AwardsRecognition() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          Award <span className="text-blue-400">&amp; Recognition</span>
        </h2>

        <p className="mt-4 text-center text-lg text-slate-600 max-w-3xl mx-auto">
          Our services are proven to help clients achieve success. And the awards
          we have won stand testament to this fact.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div
              key={award}
              className="relative h-24 border border-gray-200 bg-gray-50"
            >
              <Image
                src={`/images/${award}.svg`}
                alt={award}
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
