import Image from "next/image";
import Link from "next/link";

const cards = ["card1", "card2", "card3", "card4", "card5", "card6"];

const paragraph =
  "Streamline your marketing efforts and maximize efficiency with our expert marketing automation services. By automating repetitive tasks, you can save time, improve lead nurturing, and personalize your campaigns. From email marketing and lead scoring to customer segmentation and personalized content delivery, our automation solutions empower you to deliver targeted messages at scale.";

const dmCards = ["gm1", "gm2", "gm3", "gm4", "gm5", "gm6"];

const paragraph3 =
  "Reach your target audience and drive conversions through effective digital marketing strategies. We help you develop a tailored digital marketing plan that aligns with your business objectives and leverages the latest trends and technologies. From optimizing your website for search engines to creating engaging content and running targeted advertising campaigns, our team has the expertise to help you achieve your online marketing goals.";

const gsCards = ["gs1", "gs2", "gs3", "gs4", "gs5", "gs6"];

const paragraph2 =
  "Data-driven insights are crucial for optimizing your marketing campaigns and achieving better results. Our experts use powerful analytics tools to track key performance indicators, analyze campaign effectiveness, and identify areas for improvement. By leveraging data-driven insights, we can optimize your website, content, and marketing strategies to attract, engage, and convert your target audience.";

export default function TechnicalExpertise() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          Our <span className="text-blue-500">Technical Expertise</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Marketing <span className="text-blue-500">Automation</span>
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed">{paragraph}</p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {cards.map((c) => (
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

          <div className="relative aspect-[4/3]">
            <Image
              src="/images/markinting.webp"
              alt="Marketing automation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/anyls.webp"
              alt="Analytics and optimization"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Marketing <span className="text-blue-500">Analytics &amp; Optimization</span>
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed">{paragraph2}</p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {gsCards.map((c) => (
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

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Digital <span className="text-blue-500">Marketing</span>
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed">{paragraph3}</p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {dmCards.map((c) => (
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

          <div className="relative aspect-[4/3]">
            <Image
              src="/images/ad.webp"
              alt="Digital marketing"
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
