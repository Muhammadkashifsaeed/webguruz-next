"use client";

import Image from "next/image";

const blogs = [
  {
    img: "/images/fairly1.webp",
    title: "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
    text: "For years, SEO followed a fairly simple formula.",
    link: "#",
  },
  {
    img: "/images/fairly2.webp",
    title: "Beyond Google: The 7 Search Layers Every Business Must Master In The AI Era",
    text: "Ask someone under 30 how they found their last great restaurant, software tool, or travel destination",
    link: "#",
  },
  {
    img: "/images/fairly3.webp",
    title: "Best Technical SEO Companies for Real Results in 2026",
    text: "Choosing a technical SEO agency should be straightforward.",
    link: "#",
  },
];

export default function InternationalSeoRelatedBlogs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Related <span className="text-blue-500">Blogs</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
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
  );
}
