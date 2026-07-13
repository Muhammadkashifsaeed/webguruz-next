import Image from "next/image";
import Link from "next/link";

const heading = "Website Development & Design";
const paragraph =
  "Create stunning websites that are both visually appealing and user-friendly. Our skilled web developers and designers collaborate to craft websites that not only look great but also provide a seamless user experience. We utilize popular frameworks to build responsive, scalable, and high-performing websites. Our focus on user-centered design ensures that your website is easy to navigate, loads quickly, and effectively communicates your brand message.";

const techCards = ["as1", "as2", "as3", "as4", "as5", "as6"];

export default function WebDevelopment() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/ha1.webp"
              alt="Website Development"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Website Development <span className="text-blue-500">&amp; Design</span>
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">{paragraph}</p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {techCards.map((c) => (
                <div
                  key={c}
                  className="relative h-20 border border-gray-200 bg-gray-50"
                >
                  <Image
                    src={`/images/${c}.svg`}
                    alt={c}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 1024px) 33vw, 150px"
                  />
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1 bg-blue-400 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Learn More <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
