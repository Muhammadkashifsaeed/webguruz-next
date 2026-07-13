"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { aboutPages, serviceGroups, resourcePages, joinUsPages } from "@/lib/site";

type NavChild = { name: string; href: string; icon: ReactNode };

type NavLink = {
  name: string;
  href: string;
  children?: NavChild[];
  columns?: { title?: string; items: NavChild[] }[];
};

const aboutColumns = [
  { items: aboutPages.slice(0, 4).map((p) => ({ name: p.name, href: `/about/${p.slug}`, icon: <p.icon className="w-5 h-5" /> })) },
  { items: aboutPages.slice(4, 8).map((p) => ({ name: p.name, href: `/about/${p.slug}`, icon: <p.icon className="w-5 h-5" /> })) },
];

const serviceColumns = serviceGroups.map((g) => ({
  title: g.title,
  items: g.items.map((i) => ({ name: i.name, href: `/services/${i.slug}`, icon: <i.icon className="w-5 h-5" /> })),
}));

const resourceColumns = [
  { items: resourcePages.map((p) => ({ name: p.name, href: `/resources/${p.slug}`, icon: <p.icon className="w-5 h-5" /> })) },
];

const joinUsColumns = [
  { items: joinUsPages.map((p) => ({ name: p.name, href: `/join-us/${p.slug}`, icon: <p.icon className="w-5 h-5" /> })) },
];

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about", columns: aboutColumns },
  { name: "Services", href: "/services", columns: serviceColumns },
  { name: "Case Study", href: "/case-study" },
  { name: "Resources", href: "/resources", columns: resourceColumns },
  { name: "Join Us", href: "/join-us", columns: joinUsColumns },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-blue-300 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 text-xs gap-6">
            <a href="mailto:info@webguruz.com" className="flex items-center gap-1.5 hover:text-blue-900 transition-colors">
              <FaEnvelope className="w-5 h-5" />
              info@webguruz.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-blue-900 transition-colors">
              <FaPhone className="w-5 h-5" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-zinc-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                <Image
                  src="/images/logo.webp"
                  alt="WebGuruz Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className={link.columns ? "relative group" : ""}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors inline-flex items-center"
                  >
                    {link.name}
                    {link.columns && (
                      <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 7.5l4.5 4.5 4.5-4.5z" />
                      </svg>
                    )}
                  </Link>

                  {link.columns && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-5 grid gap-6"
                        style={{ gridTemplateColumns: `repeat(${link.columns.length}, minmax(220px, 1fr))` }}>
                        {link.columns.map((col, ci) => (
                          <div key={ci}>
                            {col.title && (
                              <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-3">
                                {col.title}
                              </p>
                            )}
                            <ul className="space-y-1">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 py-1.5 rounded-md text-sm transition-colors"
                                  >
                                    <span className="text-blue-500">{item.icon}</span>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors ml-4"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors ml-2"
              >
                Contact Us
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-blue-400 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.columns && (
                    <div className="pl-4 pb-2 space-y-2">
                      {link.columns.map((col, ci) => (
                        <div key={ci}>
                          {col.title && (
                            <p className="text-xs font-bold uppercase tracking-wide text-blue-600 px-3 pt-2">
                              {col.title}
                            </p>
                          )}
                          <ul className="space-y-0.5">
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-md text-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <span className="text-blue-500">{item.icon}</span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-full text-base font-medium hover:bg-red-600 mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get A Quote
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-full text-base font-medium hover:bg-red-600 mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
