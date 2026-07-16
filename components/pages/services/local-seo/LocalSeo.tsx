"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Car,
  Check,
  DollarSign,
  Fan,
  GraduationCap,
  HeartPulse,
  Home,
  MapPin,
  Plane,
  Scale,
  Smile,
  Star,
  Utensils,
} from "lucide-react";

export default function LocalSeo() {
  return (
    <div className="flex-1">
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500">
                Local SEO Services
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-200 font-semibold">
                Boost your local visibility with WebGuruz- your trusted local SEO
                agency in India.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                We help businesses rank higher in local searches, bringing you
                closer to the customers near you. Our local SEO strategies are
                tailored to put your business on the map- literally. Whether
                you&apos;re in a bustling city or a quiet town, we ensure your
                business shows up when local customers search.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Get In Touch
              </Link>
            </div>

            <div className="relative aspect-[4/3] shadow-md">
              <Image
                src="/images/Local.svg"
                alt="Local SEO"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Local SEO Marketing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Rank Higher on Google with a Trusted{" "}
                <span className="text-blue-500">Local SEO Expert in India</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-200">
                Want to dominate the local market? Our local SEO services are
                designed to help you rank higher on Google and attract nearby
                customers. With the right local SEO strategy, we make sure your
                business stands out.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Request a <span className="text-black">Free proposal</span>
              </h3>

              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  All our projects are secured by NDA
                </p>
                <p className="text-sm font-medium text-gray-700">
                  100% Secure. Zero Spam
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Country
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none">
                      <option value="">Select Country</option>
                      <option value="+92">Pakistan (+92)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+1">United States (+1)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+1">Canada (+1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Select Service
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none">
                      <option value="">Select Service</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="seo-services">SEO Services</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Short Description of the Project
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-slate-700 focus:border-blue-400 focus:outline-none"
                    rows={3}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
                  >
                    GET QUOTE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Keyword Optimization",
                  text: 'We optimize your site with relevant local keywords, such as "local SEO expert in India," ensuring you\'re visible when customers are searching for local businesses.',
                  bg: "bg-blue-200",
                },
                {
                  title: "Google My Business Optimization",
                  text: "Our experts fine-tune your Google My Business profile, making sure your business information is accurate and up-to-date.",
                  bg: "bg-blue-200",
                },
                {
                  title: "Local Link Building",
                  text: "We build quality backlinks from local sources to boost your credibility and authority in your area.",
                  bg: "bg-blue-200",
                },
              ].map((box, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${box.bg}`}
                >
                  <h3 className="text-xl font-bold text-slate-900">{box.title}</h3>
                  <p className="mt-3 text-slate-800 leading-relaxed">{box.text}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-black">
                THE CHALLENGE
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
                Getting Noticed in{" "}
                <span className="text-blue-500">Local Searches</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                Many businesses struggle to appear in the top results for local
                searches. The challenge? Competing with other businesses in your
                area for those top spots. But don&apos;t worry- WebGuruz has a
                solution.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                We are the top local SEO agency in India, and we craft targeted
                strategies to improve your local search rankings. Our expert team
                of local SEO experts in Mohali and across India uses data-driven
                strategies to improve your visibility in local search results.
                With our approach, your business can thrive in the competitive
                local market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Request a Website Audit for FREE!
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Enter Your domain name"
              className="w-full sm:w-96 rounded-lg border border-gray-300 px-4 py-3 text-slate-700 focus:border-blue-400 focus:outline-none"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
            >
              Check your site health instantly
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Preferred{" "}
                <span className="text-blue-500">Local SEO Company</span> for
                Market Leaders
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-700">
                As a leading local SEO company, WebGuruz is committed to helping
                businesses reach their local audience. We specialize in creating
                tailored SEO strategies that increase visibility and engagement.
              </p>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                What sets us apart?
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                At WebGuruz, what sets us apart is our unwavering commitment to
                innovation, customer satisfaction, and delivering exceptional
                results. As a local SEO agency in India with years of experience,
                we possess the expertise required to navigate the complexities of
                local search engine optimization.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Our team has a proven track record of success, consistently
                helping businesses rank for top local keywords and driving
                significant improvements in their online visibility. One of our
                core strengths is our personalized approach- we understand that
                every business is unique, so we develop tailored strategies based
                on each client&apos;s specific needs and local market conditions.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Our dedicated team of SEO experts is highly skilled at analyzing
                local markets, identifying opportunities, and crafting targeted
                strategies that maximize your online presence. By combining our
                in-depth industry knowledge with a focus on client success,
                WebGuruz ensures that you achieve sustainable growth and maintain
                a competitive edge in your local area.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Contact Us Now!
              </Link>
            </div>

            <div className="flex items-center">
              <div className="relative h-[400px] w-full lg:h-[600px]">
                <Image
                  src="/images/Our1.webp"
                  alt="Our Local SEO Team"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Our Local <span className="text-blue-500">SEO Services</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "/images/Audit1.webp",
                title: "Local SEO Audit",
                text: "We perform an in-depth analysis of your website's current local search performance, evaluating factors such as local keyword rankings, mobile responsiveness, site speed, and user experience. We also examine your website's technical aspects, including meta tags, URL structures, and internal linking, to identify any barriers preventing your site from ranking higher in local search results.",
              },
              {
                img: "/images/Audit2.webp",
                title: "Local SEO Competitor Analysis",
                text: "Our Local SEO Competitor Analysis involves a thorough examination of your top local competitors to uncover their strengths and weaknesses. We analyze their keyword strategies, backlink profiles, Google My Business listings, and customer reviews to identify areas where your business can gain a competitive edge.",
              },
              {
                img: "/images/Audit3.webp",
                title: "Local Optimization",
                text: "We optimize your website's content by incorporating relevant local keywords, improving page load speed, and ensuring mobile-friendliness. Off-page, we focus on building high-quality local backlinks, managing citations, and enhancing your social media presence.",
              },
              {
                img: "/images/Audit4.webp",
                title: "Google My Business Profile",
                text: "We optimize and manage your GMB profile to ensure that your business is prominently featured in local searches and Google Maps. This includes ensuring your business information (name, address, phone number, and hours) is accurate, adding high-quality photos, responding to customer reviews, and utilizing relevant local keywords in your profile description.",
              },
              {
                img: "/images/Audit5.webp",
                title: "Local Citations",
                text: "We ensure that your business is listed on relevant and high-authority directories such as Yelp, TripAdvisor, and local industry-specific directories. We also ensure the consistency of your NAP information across all platforms, which helps search engines trust your business and rank you higher in local search results.",
              },
              {
                img: "/images/Audit6.webp",
                title: "Landing Pages",
                text: "We create highly targeted local landing pages that are tailored to specific services, locations, or keywords, making it easier for customers to find what they're looking for. These pages are optimized with relevant content, local keywords, and strong calls to action to drive conversions.",
              },
            ].map((item, idx) => (
              <ServiceCard
                key={idx}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Industries We <span className="text-blue-500">Cater To</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-slate-700">
            SEO Services for a Wide Range of Industries
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Dental SEO", Icon: Smile },
              { name: "Healthcare SEO", Icon: HeartPulse },
              { name: "Education SEO", Icon: GraduationCap },
              { name: "Financial SEO", Icon: DollarSign },
              { name: "HVAC SEO", Icon: Fan },
              { name: "Real Estate SEO", Icon: Home },
              { name: "Tourism and Hotels", Icon: MapPin },
              { name: "Restaurant SEO", Icon: Utensils },
              { name: "Casino SEO", Icon: Star },
              { name: "Immigration SEO", Icon: Plane },
              { name: "Legal SEO", Icon: Scale },
              { name: "Car Dealers SEO", Icon: Car },
            ].map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <item.Icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full lg:h-[500px]">
              <Image
                src="/images/Tailor.webp"
                alt="Tailor-made Local SEO Services"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-black">
                One-Stop Solution
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
                Tailor-made Local SEO Services
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                We know that every business is unique. That&apos;s why we offer
                tailor-made local SEO services to suit businesses of all sizes:
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    name: "Small Businesses:",
                    text: "Focused on building a local presence with a limited budget.",
                  },
                  {
                    name: "Multi-location Businesses:",
                    text: "Optimizing local search for businesses with multiple locations.",
                  },
                  {
                    name: "E-commerce Businesses:",
                    text: "Helping online stores attract local customers.",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <Check className="mt-1 h-6 w-6 shrink-0 text-blue-500" />
                    <div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-slate-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Your Go-To{" "}
            <span className="text-blue-500">
              Local SEO Agency for Lasting Digital Growth
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-lg leading-relaxed text-slate-700">
            WebGuruz is here to help you grow with our local SEO services.
            Here&apos;s what makes us the best choice:
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "17+", label: "Years of experience in Local SEO" },
              { value: "550K+", label: "Local keywords ranked" },
              { value: "2500+", label: "Projects successfully completed" },
              { value: "150+", label: "Strong Team of local SEO experts" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-blue-400 transition-[height] duration-300 ease-out group-hover:h-full" />
                <div className="relative z-10 px-6 py-10 text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 transition-colors duration-300 group-hover:text-slate-900">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-slate-700">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What are local SEO services?",
                a: "Local SEO services focus on optimizing your online presence to attract more business from local searches. This includes managing Google My Business, building local citations, and optimizing your website with local keywords.",
              },
              {
                q: "How much do local SEO services cost?",
                a: "The cost of local SEO services varies depending on your business needs. A typical campaign can range from $300 to $2000 per month, depending on the level of service required.",
              },
              {
                q: "Is local SEO worth it?",
                a: "Yes, local SEO is worth it. It increases your visibility to nearby customers, making it easier for them to find and engage with your business.",
              },
              {
                q: "Do I need a website for local SEO?",
                a: "While having a website isn't mandatory for local SEO, it significantly improves your chances of ranking higher in search results and attracting more customers.",
              },
              {
                q: "Do backlinks help local SEO?",
                a: "Yes, backlinks from local websites help improve your site's authority and ranking in local search results.",
              },
              {
                q: "What is the best URL structure for local SEO?",
                a: "The best URL structure for local SEO includes the business name, location, and target keyword. For example, www.businessname.com/city-service would be ideal.",
              },
            ].map((item, idx) => (
              <FaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Related Blogs
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/has1.webp",
                title:
                  "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
                text: "For years, SEO followed a fairly simple formula.",
                link: "#",
              },
              {
                img: "/images/has2.webp",
                title:
                  "Beyond Google: The 7 Search Layers Every Business Must Master In The AI Era",
                text: "Ask someone under 30 how they found their last great restaurant, software tool, or travel destination",
                link: "#",
              },
              {
                img: "/images/has3.webp",
                title: "Best Technical SEO Companies for Real Results in 2026",
                text: "Choosing a technical SEO agency should be straightforward.",
                link: "#",
              },
            ].map((blog, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-slate-700 line-clamp-2">{blog.text}</p>
                  <a
                    href={blog.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/markinting.webp"
            alt="Local SEO Marketing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to enhance your local search presence?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Contact WebGuruz today for expert local SEO services. We&apos;ll help
            you rank higher and reach your local customers faster!
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-blue-700"
          >
            Connect Now!
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ img, title, text }: { img: string; title: string; text: string }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`group flex cursor-pointer flex-col items-center rounded-2xl border border-transparent bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg ${
        active ? "border-blue-500" : ""
      }`}
    >
      <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-slate-700 leading-relaxed">{text}</p>

        <div
          className={`mt-4 h-0.5 w-14 rounded bg-blue-500 transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <span className="ml-4 text-2xl text-blue-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-6 pb-4 text-slate-700">{answer}</div>}
    </div>
  );
}
