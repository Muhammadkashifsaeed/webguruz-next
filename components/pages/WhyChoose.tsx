import { FaTrophy, FaChartPie, FaCommentDots, FaPuzzlePiece, FaUsers, FaTag } from "react-icons/fa";

const features = [
  {
    icon: FaTrophy,
    title: "Proven Expertise",
    text: "With 17+ years of experience in the digital marketing industry, we have a proven track record of success.",
  },
  {
    icon: FaChartPie,
    title: "Data-Driven Approach",
    text: "We use data-driven insights to optimize your campaigns and achieve measurable results.",
  },
  {
    icon: FaCommentDots,
    title: "Transparent Communication",
    text: "We maintain open and transparent communication throughout the process.",
  },
  {
    icon: FaPuzzlePiece,
    title: "Customized Solutions",
    text: "We tailor our digital marketing strategies to meet your unique business needs.",
  },
  {
    icon: FaUsers,
    title: "Dedicated Team",
    text: "Our team of experienced digital marketing professionals is committed to your success.",
  },
  {
    icon: FaTag,
    title: "Affordable Pricing",
    text: "We offer competitive pricing without compromising on the quality of services we provide.",
  },
];

export default function WhyChooseWebGuruz() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          Why Choose <span className="text-blue-400">WebGuruz?</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
