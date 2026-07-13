import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    image: "/images/ai1.webp",
    title: "How to Use AI in Magento 2: A Magento Development Services Guide to eCommerce Success",
    text: "Most conversations about AI in eCommerce stop at the feature list. Personalized recommendations.",
    href: "/resources/blogs",
  },
  {
    image: "/images/ai2.webp",
    title: "SEO Services India: How Search Has Changed and What Small Businesses Should Keep in Mind",
    text: "For years, SEO followed a fairly simple formula.",
    href: "/resources/blogs",
  },
  {
    image: "/images/ai3.webp",
    title: "Why Higher Education Institutions Are Switching to HubSpot for Higher Education (And What It Solves)",
    text: "Choosing the right CRM is no longer just an IT decision for colleges and universities.",
    href: "/resources/blogs",
  },
];

export default function RelatedBlogs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-left text-3xl sm:text-4xl font-extrabold text-slate-900">
          Related <span className="text-blue-400">Blogs</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {blog.text}
                </p>
                <Link
                  href={blog.href}
                  className="mt-4 inline-flex items-center gap-1 text-blue-500 font-medium hover:underline"
                >
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
