"use client";

import Image from "next/image";

const facts = [
  {
    img: "/images/words1.webp",
    text: "Over 50% of searches are now voice-based.",
  },
  {
    img: "/images/words2.webp",
    text: "58% of consumers use voice search to find local businesses.",
  },
  {
    img: "/images/words3.webp",
    text: "Voice search queries are typically 29 words long on average.",
  },
  {
    img: "/images/words4.webp",
    text: "71% of users prefer using voice-over typing for queries.",
  },
  {
    img: "/images/words5.webp",
    text: "By 2025, voice commerce is expected to reach $40 billion in the U.S.",
  },
  {
    img: "/images/words6.webp",
    text: "Websites with fast-loading speeds rank higher in voice search results.",
  },
  {
    img: "/images/words7.webp",
    text: "75% of voice search results come from the top three Google results.",
  },
  {
    img: "/images/words8.webp",
    text: "Voice search optimization can increase website traffic by up to 30%.",
  },
];

export default function VoiceSearchOptimizationFacts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          <span className="text-blue-500">Voice Search Optimization</span> Facts
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {facts.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="relative h-24 w-full">
                <Image
                  src={item.img}
                  alt={`Fact ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
